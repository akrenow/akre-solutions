import React from 'react'
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import CTA from "@/components/marketing/cta"
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
    title: "Contact Zintronia - Get AI Solutions for Your Business | Akre Partners",
    description: "Ready to transform your business with AI? Contact Zintronia today for expert consultation and innovative technology solutions. Let's discuss your project.",
    url: "/contact",
    keywords: "contact Zintronia, AI consultation, business transformation, technology consulting, get quote, Akre Partners contact",
});

const ContactPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <ContactHero />
            <ContactForm />
            <CTA />
        </div>
    )
};

export default ContactPage 