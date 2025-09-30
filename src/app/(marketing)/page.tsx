import Blogs from "@/components/marketing/blogs";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Hero from "@/components/marketing/hero";
import HowItWorks from "@/components/marketing/how-it-works";
import Testimonials from "@/components/marketing/testimonials";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
    title: "Zintronia - AI Solutions & Digital Transformation | Akre Partners",
    description: "Transform your business with Zintronia's cutting-edge AI solutions. Expert consulting, digital transformation, and innovative technology services by Akre Partners.",
    url: "/",
    keywords: "AI solutions, digital transformation, artificial intelligence consulting, technology services, business automation, Akre Partners, Zintronia",
});

const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <Hero />
            {/* <Companies /> */}
            <HowItWorks />
            {/* <Features /> */}
            <Faq />
            {/* <Stats /> */}
            <Testimonials />
            <Blogs />
            <CTA />
        </div>
    );
};

export default HomePage;
