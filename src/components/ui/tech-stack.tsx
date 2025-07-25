"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Marquee } from '../ui/marquee';
import { FaReact, FaNode, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiGraphql, SiKubernetes, SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiJest, SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";


export function TechStack() {
    return (
        <div className="w-full">
            <Card>
                <CardSkeletonContainer>
                    <CloudSkeleton />
                </CardSkeletonContainer>
            </Card>
        </div>
    );
}

const CloudSkeleton = () => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

    // Generate animation sequence for all circles
    const sequence = Array.from({ length: 14 }, (_, i) => [
        `.circle-${i + 1}`,
        { scale, transform },
        { duration: 0.6, at: i * 0.1 } // Staggered start times for wave effect
    ]);

    const techIcons = [
        { icon: <FaReact className="w-16 h-8" />, name: 'React' },
        { icon: <FaNode className="w-16 h-8" />, name: 'Node.js' },
        { icon: <SiTypescript className="w-16 " />, name: 'TypeScript' },
        { icon: <FaPython className="w-16 h-8" />, name: 'Python' },
        { icon: <RiNextjsLine className="w-16 h-8" />, name: 'Next.js' },
        { icon: <SiGraphql className="w-16 h-8 " />, name: 'GraphQL' },
        { icon: <FaDocker className="w-16 h-8 " />, name: 'Docker' },
        { icon: <SiKubernetes className="w-16 h-8 " />, name: 'Kubernetes' },
        { icon: <SiMongodb className="w-16 h-8 " />, name: 'MongoDB' },
        { icon: <SiPostgresql className="w-16 h-8 " />, name: 'PostgreSQL' },
        { icon: <SiTailwindcss className="w-16 h-8 " />, name: 'Tailwind CSS' },
        { icon: <SiGit className="w-16 h-8 " />, name: 'Git' },
        { icon: <TbBrandReactNative className="w-16 h-8 " />, name: 'React Native' },
    ];

    useEffect(() => {
        animate(sequence, {
            // @ts-ignore
            repeat: Infinity,
            repeatDelay: 1,
        });
    }, []);

    return (
        <div className="p-8 overflow-hidden bg-transparent h-full relative">
            <div className="relative w-full h-full flex items-center justify-center">
                <Marquee pauseOnHover className="[--duration:30s]">
                    <div className="flex gap-3 md:gap-12">
                        {techIcons.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <Container className={`h-15 w-15 circle-${index + 1}`}>
                                    {tech.icon}
                                </Container>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "max-w-md w-full h-full mx-auto p-1 -mt-5 rounded-xl bg-transparent group",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardSkeletonContainer = ({
    className,
    children,
    showGradient = true,
}: {
    className?: string;
    children: React.ReactNode;
    showGradient?: boolean;
}) => {
    return (
        <div
            className={cn(
                "h-[15rem] md:h-[20rem] rounded-xl z-40",
                className,
                showGradient &&
                "bg-[#128B87]/20 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
            )}
        >
            {children}
        </div>
    );
};

const Container = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                `h-16 w-32 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
                className
            )}
        >
            {children}
        </div>
    );
};
