import Providers from "@/components/global/providers";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/structured-data";
import { SEOTesting } from "@/components/seo/seo-testing";
import { GoogleAnalytics } from "@/components/seo/analytics";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <OrganizationSchema />
                <WebsiteSchema />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-[#050505] text-foreground font-base antialiased dark",
                    base.variable,
                    heading.variable,
                )}
            >
                <GoogleAnalytics />
                <Providers>
                    {children}
                </Providers>
                <SEOTesting />
            </body>
        </html>
    );
};
