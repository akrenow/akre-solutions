"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./structured-data";

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
    // Always include home as first item
    const allItems = [
        { name: "Home", url: "/" },
        ...items
    ];

    return (
        <>
            <BreadcrumbSchema items={allItems} />
            <nav 
                aria-label="Breadcrumb" 
                className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
            >
                <Link 
                    href="/" 
                    className="flex items-center hover:text-foreground transition-colors"
                    aria-label="Go to homepage"
                >
                    <Home className="w-4 h-4" />
                </Link>
                
                {items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        {index === items.length - 1 ? (
                            // Last item - current page (not clickable)
                            <span 
                                className="text-foreground font-medium"
                                aria-current="page"
                            >
                                {item.name}
                            </span>
                        ) : (
                            // Intermediate items (clickable)
                            <Link 
                                href={item.url}
                                className="hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </>
    );
};

// Utility function to generate breadcrumbs from pathname
export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    
    segments.forEach((segment) => {
        currentPath += `/${segment}`;
        
        // Convert segment to readable name
        const name = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        
        breadcrumbs.push({
            name,
            url: currentPath
        });
    });
    
    return breadcrumbs;
};
