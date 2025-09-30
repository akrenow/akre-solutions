import Blogs from "@/components/marketing/blogs";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Hero from "@/components/marketing/hero";
import HowItWorks from "@/components/marketing/how-it-works";
import Testimonials from "@/components/marketing/testimonials";

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
