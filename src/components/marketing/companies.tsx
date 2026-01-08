import React from 'react'
import Container from "../global/container";
import { Marquee } from "../ui/marquee";
import Wrapper from "../global/wrapper";

const Companies = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center px-2 md:px-0">
                        <h4 className="text-xl lg:text-2xl font-semibold text-center tracking-tight">
                            The world's best companies trust Zintronia
                        </h4>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="mt-10 w-full relative overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:30s]">
                            <div className="flex gap-8 md:gap-12">
                                <span className="text-xl font-semibold text-center tracking-tight">Dweltin</span>
                                <span className="text-xl font-semibold text-center tracking-tight">Validoc</span>
                                <span className="text-xl font-semibold text-center tracking-tight">Abudance solar</span>
                                <span className="text-xl font-semibold text-center tracking-tight">Vistara infra</span>
                            </div>
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    )
};

export default Companies
