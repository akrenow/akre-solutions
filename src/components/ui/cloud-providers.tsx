"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { RiVercelLine } from "react-icons/ri";

export function CloudCardDemo() {
    return (
        <Card>
            <CardSkeletonContainer>
                <CloudSkeleton />
            </CardSkeletonContainer>
        </Card>
    );
}

const CloudSkeleton = () => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence = [
        [
            ".circle-1",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-2",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-3",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-4",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-5",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
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
            <div className="relative w-full h-full">
                <Container className="sm:h-25 sm:w-25 h-16 w-16 circle-3 absolute top-10 left-5 transform -translate-x-1/2">
                    <FaAws className="h-8 w-8 sm:h-12 sm:w-12" />
                </Container>
                <Container className="sm:h-25 sm:w-25 h-16 w-16 circle-2 absolute top-1 left-1/2 transform -translate-x-1/2">
                    <VscAzure className="h-6 w-6 sm:h-8 sm:w-8" />
                </Container>
                <Container className="sm:h-25 sm:w-25 h-16 w-16 circle-3 absolute top-33 left-1/2 transform -translate-x-1/2">
                    <BiLogoGoogleCloud className="h-10 w-10 sm:h-15 sm:w-15" />
                </Container>
                <Container className="sm:h-25 sm:w-25 h-16 w-16 circle-5 absolute bottom-0 right-1">
                    <RiVercelLine className="h-8 w-8 sm:h-12 sm:w-12" />
                </Container>
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

// Cloud Provider Logos
export const AWSLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 256 153"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M72.392 55.438c0 3.137.34 5.67 1.019 7.598.679 1.928 1.698 4.121 3.057 6.578l1.359 2.038c.34.508.34 1.018 0 1.358-.678.509-1.358.849-2.037 1.019l-6.918 4.63c-.509.339-1.018.509-1.528.509-.679 0-1.358-.34-2.037-.849-1.359-1.528-2.548-3.056-3.397-4.46-.849-1.527-1.698-3.226-2.547-5.334-6.408 7.598-14.515 11.38-24.32 11.38-6.918 0-12.569-1.983-16.891-5.949-4.291-3.966-6.578-9.296-6.578-15.874 0-7.088 2.547-12.928 7.768-17.388 5.22-4.46 12.229-6.748 21.354-6.748 2.887 0 5.949.17 9.126.508 3.227.34 6.408.849 9.806 1.358v-4.46c0-4.631-1.019-7.938-2.887-9.976-1.928-2.038-5.33-3.057-10.381-3.057-2.208 0-4.46.17-6.748.679-2.287.509-4.46 1.018-6.578 1.698-.849.34-1.528.509-1.867.509-.679 0-1.019-.509-1.019-1.528v-2.378c0-.849.17-1.358.34-1.698.17-.339.509-.678 1.019-.848 2.547-1.358 5.609-2.547 9.296-3.397 3.686-.849 7.598-1.358 11.72-1.358 8.956 0 15.534 2.038 19.73 6.069 4.121 4.03 6.238 10.21 6.238 18.407v24.32Zm-33.444 12.569c2.717 0 5.56-.509 8.447-1.528 2.887-1.018 5.44-2.717 7.598-4.969 1.358-1.358 2.378-2.887 2.887-4.63.509-1.698.849-3.737.849-6.069v-2.887c-2.717-.34-5.56-.679-8.447-.849-2.887-.17-5.56-.34-8.277-.34-4.8 0-8.447 1.019-10.89 3.057-2.378 2.038-3.566 4.8-3.566 8.447 0 3.396.849 5.949 2.717 7.768 1.698 1.928 4.291 2.887 7.938 2.887l1.698.113ZM130.434 82.54c-.849 0-1.358-.17-1.698-.509-.34-.34-.509-.849-.679-1.698L115.58 26.825c-.17-.849-.34-1.358-.34-1.698 0-.679.34-1.018 1.019-1.018h8.277c.849 0 1.358.17 1.698.509.34.34.509.849.679 1.698l9.296 36.67 8.616-36.67c.17-.849.34-1.358.679-1.698.34-.34.849-.509 1.698-.509h6.748c.849 0 1.358.17 1.698.509.34.34.509.849.679 1.698l8.786 37.179 9.636-37.179c.17-.849.34-1.358.679-1.698.34-.34.849-.509 1.698-.509h7.768c.679 0 1.019.34 1.019 1.018 0 .17 0 .34-.17.679v1.018L172.526 80.333c-.17.849-.34 1.358-.679 1.698-.34.34-.849.509-1.698.509h-7.258c-.849 0-1.358-.17-1.698-.509-.34-.34-.509-.849-.679-1.698L152.288 44.89l-8.447 35.312c-.17.849-.34 1.358-.679 1.698-.34.34-.849.509-1.698.509h-7.258Z"
                fill="#FF9900"
            />
            <path
                d="M230.993 85.087c-10.89 8.107-26.764 12.398-40.386 12.398-19.051 0-36.33-7.088-49.342-18.917-1.019-.849-.17-2.038.849-1.358 11.72 6.748 26.254 10.89 41.235 10.89 10.21 0 21.354-2.038 31.564-6.408 1.528-.679 2.887 1.018 1.698 2.208l-.618 1.187ZM234.39 81.182c-1.358-1.867-9.466-.849-13.077-.509-1.019.17-1.188-.849-.17-1.528 6.408-4.46 16.891-3.226 18.068-1.698 1.188 1.528-.34 12.228-6.408 17.388-.849.679-1.698.34-1.358-.509 1.358-3.226 4.291-10.55 2.887-12.758l.058-.386Z"
                fill="#FF9900"
            />
        </svg>
    );
};

export const AzureLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 256 193"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M157.05 0L81.808 129.314l75.242-14.916L256 104.175 157.05 0z"
                fill="#0078D4"
            />
            <path
                d="M0 104.175l81.808 25.139L157.05 0H97.28L0 104.175z"
                fill="#0078D4"
            />
            <path
                d="M0 104.175l81.808 88.825h75.242L256 104.175H0z"
                fill="#0078D4"
            />
        </svg>
    );
};

export const GoogleCloudLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 256 193"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M70.502 71.408c-.39-.389-.779-.779-1.168-1.168 0-.389.389-.779.389-1.168V67.904c5.064-19.479 21.035-33.852 40.904-36.295 16.36-2.054 32.33 4.675 42.46 17.425L138.675 63.45c-5.064-6.34-12.572-10.235-20.647-10.624-16.36-.389-30.276 11.793-32.33 28.153-.389 1.946-.389 3.892-.389 5.838 0 .389-.389.779-.779.779H70.502z"
                fill="#EA4335"
            />
            <path
                d="M164.437 96.645c2.443-15.193-1.168-31.164-9.632-44.188L139.454 68.295c6.34 8.085 8.393 18.7 5.45 28.546-.39 1.168-.779 2.336-1.168 3.504H70.502c-.389 0-.779.389-.779.779v14.414c0 .389.389.779.779.779h93.935z"
                fill="#FBBC04"
            />
            <path
                d="M143.736 116.317v14.414c0 .389-.389.779-.779.779H70.502c-.389 0-.779-.389-.779-.779v-14.414c0-.389.389-.779.779-.779h72.455c.389 0 .779.389.779.779z"
                fill="#34A853"
            />
            <path
                d="M70.502 192.568c31.553 0 57.041-25.488 57.041-57.041S102.055 78.486 70.502 78.486 13.46 103.974 13.46 135.527s25.488 57.041 57.042 57.041zm0-99.923c23.867 0 43.237 19.37 43.237 43.237s-19.37 43.237-43.237 43.237-43.237-19.37-43.237-43.237 19.37-43.237 43.237-43.237z"
                fill="#4285F4"
            />
        </svg>
    );
};

export const DigitalOceanLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M128 256v-49.231c42.133 0 76.308-34.175 76.308-76.308 0-42.133-34.175-76.307-76.308-76.307S51.692 88.328 51.692 130.461c0 2.462.123 4.924.369 7.263H128V256z"
                fill="#0080FF"
            />
            <path
                d="M78.769 256v-27.077h27.077V256H78.769z"
                fill="#0080FF"
            />
            <path
                d="M51.692 228.923h19.2v19.2h-19.2v-19.2z"
                fill="#0080FF"
            />
            <path
                d="M32.492 209.723h11.815v11.815H32.492v-11.815z"
                fill="#0080FF"
            />
        </svg>
    );
};

export const VercelLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 256 222"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="currentColor"
        >
            <path d="M128 0L256 222H0L128 0z" />
        </svg>
    );
};