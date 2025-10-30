import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://zintronia.com';
    
    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    // TODO: Add dynamic blog posts when blog functionality is implemented
    // const blogPosts = await getBlogPosts();
    // const blogSitemapEntries = blogPosts.map((post) => ({
    //     url: `${baseUrl}/blog/${post.slug}`,
    //     lastModified: new Date(post.updatedAt),
    //     changeFrequency: 'monthly' as const,
    //     priority: 0.6,
    // }));

    return [
        ...staticPages,
        // ...blogSitemapEntries,
    ];
}
