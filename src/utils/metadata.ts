import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string | null;
    url?: string;
    type?: "website" | "article";
    keywords?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    noIndex?: boolean;
}

export const generateMetadata = ({
    title = "Zintronia - AI Solutions by Akre Partners",
    description = "Leading AI and technology solutions provider. Transforming businesses with cutting-edge artificial intelligence and innovative digital solutions.",
    image = "/images/logo.png",
    url,
    type = "website",
    keywords = "AI solutions, technology consulting, artificial intelligence, digital transformation, Akre Partners, Zintronia",
    author = "Akre Partners",
    publishedTime,
    modifiedTime,
    noIndex = false
}: MetadataProps = {}): Metadata => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://zintronia.com";
    const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
    const imageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/images/logo.png`;

    return {
        title,
        description,
        keywords,
        authors: author ? [{ name: author }] : undefined,
        creator: author,
        publisher: "Akre Partners Pvt Ltd",

        // Open Graph
        openGraph: {
            title,
            description,
            url: fullUrl,
            siteName: "Zintronia",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                }
            ],
            locale: "en_US",
            type,
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },

        // Twitter Cards
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
            creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@zintronia",
            site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@zintronia",
        },

        // Canonical URL
        alternates: {
            canonical: fullUrl,
        },

        // Robots
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        // Additional SEO
        category: "Technology",
        classification: "Business",

        // Icons will be handled in layout.tsx
        icons: {
            icon: [
                { url: "/images/favicon.ico", sizes: "any" },
                { url: "/images/icon.svg", type: "image/svg+xml" },
            ],
            apple: [
                { url: "/images/logo.png", sizes: "180x180" },
            ],
        },

        // Verification (add your verification codes)
        verification: {
            google: "J5bN-jlNXoQJo6SrbtErKdowbqk_nBfqFd7KtSBJPCo",
        },
    };
};
