/**
 * SEO Testing Component
 * This component helps test and validate SEO implementation
 * Only renders in development mode
 */

"use client";

import { useEffect, useState } from "react";

interface SEOTestResults {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterCard: string;
    canonical: string;
    robots: string;
    structuredData: any[];
}

export const SEOTesting: React.FC = () => {
    const [seoData, setSeoData] = useState<SEOTestResults | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show in development
        if (process.env.NODE_ENV !== 'development') return;

        const extractSEOData = () => {
            const getMetaContent = (name: string, property?: string) => {
                const selector = property 
                    ? `meta[property="${property}"]`
                    : `meta[name="${name}"]`;
                const element = document.querySelector(selector);
                return element?.getAttribute('content') || '';
            };

            const getLinkHref = (rel: string) => {
                const element = document.querySelector(`link[rel="${rel}"]`);
                return element?.getAttribute('href') || '';
            };

            const getStructuredData = () => {
                const scripts = document.querySelectorAll('script[type="application/ld+json"]');
                return Array.from(scripts).map(script => {
                    try {
                        return JSON.parse(script.textContent || '');
                    } catch {
                        return null;
                    }
                }).filter(Boolean);
            };

            setSeoData({
                title: document.title,
                description: getMetaContent('description'),
                ogTitle: getMetaContent('', 'og:title'),
                ogDescription: getMetaContent('', 'og:description'),
                ogImage: getMetaContent('', 'og:image'),
                twitterCard: getMetaContent('twitter:card'),
                canonical: getLinkHref('canonical'),
                robots: getMetaContent('robots'),
                structuredData: getStructuredData(),
            });
        };

        // Wait for DOM to be fully loaded
        setTimeout(extractSEOData, 1000);
    }, []);

    if (process.env.NODE_ENV !== 'development' || !seoData) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
                SEO Debug
            </button>
            
            {isVisible && (
                <div className="absolute bottom-12 right-0 w-96 max-h-96 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-gray-900">SEO Debug Info</h3>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                    
                    <div className="space-y-2 text-gray-800">
                        <div>
                            <strong>Title:</strong> {seoData.title || '❌ Missing'}
                        </div>
                        <div>
                            <strong>Description:</strong> {seoData.description || '❌ Missing'}
                        </div>
                        <div>
                            <strong>OG Title:</strong> {seoData.ogTitle || '❌ Missing'}
                        </div>
                        <div>
                            <strong>OG Description:</strong> {seoData.ogDescription || '❌ Missing'}
                        </div>
                        <div>
                            <strong>OG Image:</strong> {seoData.ogImage || '❌ Missing'}
                        </div>
                        <div>
                            <strong>Twitter Card:</strong> {seoData.twitterCard || '❌ Missing'}
                        </div>
                        <div>
                            <strong>Canonical:</strong> {seoData.canonical || '❌ Missing'}
                        </div>
                        <div>
                            <strong>Structured Data:</strong> {seoData.structuredData.length} items
                        </div>
                        
                        {seoData.structuredData.length > 0 && (
                            <details className="mt-2">
                                <summary className="cursor-pointer font-medium">View Structured Data</summary>
                                <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
                                    {JSON.stringify(seoData.structuredData, null, 2)}
                                </pre>
                            </details>
                        )}
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                            Test social sharing:
                        </p>
                        <div className="flex gap-2 mt-1">
                            <a
                                href={`https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(window.location.href)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                            >
                                Facebook
                            </a>
                            <a
                                href={`https://cards-dev.twitter.com/validator?url=${encodeURIComponent(window.location.href)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
