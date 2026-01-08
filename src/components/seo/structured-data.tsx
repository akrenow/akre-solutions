import React from 'react';

interface OrganizationSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    logo?: string;
    contactPoint?: {
        telephone?: string;
        contactType?: string;
        email?: string;
    };
    address?: {
        streetAddress?: string;
        addressLocality?: string;
        addressRegion?: string;
        postalCode?: string;
        addressCountry?: string;
    };
    sameAs?: string[];
}

interface WebsiteSchemaProps {
    name?: string;
    url?: string;
    description?: string;
    publisher?: string;
}

interface BreadcrumbSchemaProps {
    items: Array<{
        name: string;
        url: string;
    }>;
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
    name = "Zintronia",
    description = "Leading AI and technology solutions provider by Akre Partners",
    url = "https://zintronia.com",
    logo = "https://zintronia.com/images/logo.png",
    contactPoint = {
        telephone: "+91 72593 56756",
        contactType: "Contact",
        email: "info@zintronia.com"
    },
    address,
    sameAs = [
        "https://www.linkedin.com/company/zintronia",
        "https://twitter.com/zintronia",
        "https://www.facebook.com/zintronia"
    ]
}) => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        description,
        url,
        logo: {
            "@type": "ImageObject",
            url: logo,
        },
        contactPoint: {
            "@type": "ContactPoint",
            ...contactPoint,
        },
        ...(address && {
            address: {
                "@type": "PostalAddress",
                ...address,
            }
        }),
        sameAs,
        foundingDate: "2024",
        industry: "Technology",
        knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "Digital Transformation",
            "Technology Consulting",
            "Business Automation"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationSchema, null, 2),
            }}
        />
    );
};

export const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({
    name = "Zintronia",
    url = "https://zintronia.com",
    description = "AI Solutions and Digital Transformation Services",
    publisher = "Akre Partners Pvt Ltd"
}) => {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url,
        description,
        publisher: {
            "@type": "Organization",
            name: publisher,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteSchema, null, 2),
            }}
        />
    );
};

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbSchema, null, 2),
            }}
        />
    );
};

// Service Schema for services page
export const ServiceSchema: React.FC<{
    services: Array<{
        name: string;
        description: string;
        provider: string;
    }>;
}> = ({ services }) => {
    const serviceSchemas = services.map(service => ({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
            "@type": "Organization",
            name: service.provider,
        },
        serviceType: "Technology Consulting",
        areaServed: "Worldwide",
    }));

    return (
        <>
            {serviceSchemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema, null, 2),
                    }}
                />
            ))}
        </>
    );
};
