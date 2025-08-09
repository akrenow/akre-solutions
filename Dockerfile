# Stage 1: Build the application
FROM node:20-alpine AS base

# Create a new base filed named 'deps' based on the 'base' stage
FROM base AS deps

#install libc6-compat to ensure compactibility with alpine linux
Run apk add --no-cache libc6-compact

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies (include devDependencies for build)
RUN npm ci

#create a new stage named 'builder' based on the 'base' stage
FROM base AS builder

#Set the working directory to /app
WORKDIR /app

#Copy node_modules from the 'deps' stage to the current stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1


# Build the application 
RUN npm run build 

# Create a new stage named 'runner' based on the 'base' stage
FROM base AS runner

# Set working directory
WORKDIR /app

#Set NODE_ENV to production 
ENV NODE_ENV production

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1 

# Create a system group named 'nodejs' with GID 1001
RUN addgroup --system --gid 1001 nodejs

# Create a system user named 'nextjs' with UID 1001
RUN addgroup --system --uid 1001 nextjs

# Copy the public directory from the builder stage
COPY --from=builder /app/public ./public

# Copy the .next directory from the 'builder' stage and set ownership to nextjs:nodejs
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Copy node_modules from the 'builder' stage
COPY --from=builder /app/node_modules ./node_modules

# Copy package.json from the 'builder' stage
COPY --from=builder /app/package.json ./package.json

#switch to 'nextjs' user
USER nextjs

# Expose port
EXPOSE 3000

#set the PORT environment variable to 3000
ENV PORT 3000

# Set the default command to start the Next.js application
CMD ["npm","start"]
