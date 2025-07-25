import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import { CardDemo } from '../ui/cards-demo-1';
import { CloudCardDemo } from '../ui/cloud-providers';
import { Marquee } from '../ui/marquee';
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TechStack } from '../ui/tech-stack';

const HowItWorks = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                            Why Choose AKRE?
                        </h2>
                        <p className="text-base lg:text-lg font-normal text-muted-foreground mt-4">
                            Transform your business with our cutting-edge technology solutions and expertise
                        </p>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="flex flex-col gap-y-8 mt-10 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-primary/5 to-background hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-6">
                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                                        <span className="text-xl font-semibold text-primary">1</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        Boost Your Revenue
                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        Leverage AI-powered solutions to automate processes, gain insights, and drive business growth
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="w-full border border-border/50 rounded-lg">
                                    <CardDemo />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-primary/5 to-background hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-6">

                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                                        <span className="text-xl font-semibold text-primary">2</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        Scale Seamlessly
                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        Our cloud-native solutions ensure your applications can grow with your business needs without performance issues
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="w-full h-full min-h-[300px] border border-border/50 rounded-lg overflow-hidden">
                                    <CloudCardDemo />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-primary/5 to-background hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-6">
                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                                        <span className="text-xl font-semibold text-primary">3</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        Cutting-Edge Technology
                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        We build with the latest technologies to ensure your business stays ahead of the competition
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="w-full border border-border/50 rounded-lg">
                                    <TechStack />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    )
};

export default HowItWorks
