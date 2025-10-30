import React from 'react'
import BlogHero from "@/components/blog/blog-hero"
import BlogSection from "@/components/blog/blog-section"
import CTA from "@/components/marketing/cta"
import Faq from "@/components/marketing/faq"
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
    title: "Blog - AI Insights & Technology trends | Zintronia",
    description: "Stay updated with the latest AI trends, technology insights, and industry news from Zintronia. Expert perspectives on artificial intelligence and digital transformation.",
    url: "/blog",
    keywords: "AI blog, technology trends, artificial intelligence insights, digital transformation news, tech articles, Zintronia blog",
});

const BlogPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <BlogHero />
            <BlogSection />
            <Faq />
            <CTA />
        </div>
    )
}

export default BlogPage 