import AboutHero from "@/components/about/about-hero";
import OurMission from "@/components/about/our-mission";
import OurStart from "@/components/about/our-start";
import OurStory from "@/components/about/our-story";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import { generateMetadata } from "@/utils";
import { Breadcrumb } from "@/components/seo/breadcrumb";

export const metadata = generateMetadata({
    title: "About Zintronia - Leading AI Solutions Provider | Akre Partners",
    description: "Learn about Zintronia's mission to transform businesses through AI innovation. Discover our story, values, and commitment to delivering cutting-edge technology solutions.",
    url: "/about",
    keywords: "about Zintronia, AI company, Akre Partners, technology innovation, artificial intelligence experts, company mission",
});

const AboutPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <div className="container mx-auto px-4 pt-8">
                <Breadcrumb items={[{ name: "About", url: "/about" }]} />
            </div>
            <AboutHero />
            <OurStory />
            <OurStart />
            <OurMission />
            <Faq />
            <CTA />
        </div>
    );
};

export default AboutPage;
