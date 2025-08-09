import { CheckCircle2 } from "lucide-react";
import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import Link from "next/link"
import { Button } from "../ui/button";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden">
            <div className="absolute bottom-0 lg:bottom-0 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/3 h-1/16 blur-[4rem]"></div>

<Wrapper>
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-8 gap-8">
    {/* Left Section - Text */}
    <div className="flex flex-col items-start justify-center w-full order-1 lg:order-none">
      <Container className="mx-auto lg:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl leading-snug text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400 font-semibold text-center lg:text-left">
          Ready to Transform <br className="hidden sm:block" /> Your Business?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-lg text-center lg:text-left">
          Let’s build something amazing together. Our team of experts is ready
          to help you achieve your digital goals.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          {["Custom Solutions", "Expert Team", "24/7 Support"].map(
            (feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            )
          )}
        </div>
      </Container>
    </div>

    {/* Right Section - Image & Buttons */}
    <div className="flex flex-col items-center justify-center w-full mt-4 lg:mt-0 order-2">
      <Container className="w-max mx-auto">
        <div className="flex size-16 sm:size-20">
          <Image
            src="/icons/heart.svg"
            alt="Heart"
            width={1024}
            height={1024}
            className="object-cover size-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full">
        <Link href="/contact">
          <Button size="lg" className="w-full sm:w-auto">
            Schedule a Call
          </Button>
          </Link>
          <Link href="/contact" >
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            Contact Us
          </Button>
          </Link>
        </div>
      </Container>
    </div>
  </div>
</Wrapper>

        </div>
    )
};

export default CTA
