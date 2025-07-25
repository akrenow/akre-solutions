import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { STATS } from "@/constants";
import Image from "next/image";

const Stats = () => {
    return (
        <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden">
            <Wrapper>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {STATS.map((stat, index) => (
                        <Container
                            key={index}
                            delay={0.1 + index * 0.1}
                        >
                            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-background border border-border/30 hover:border-primary/40 transition-all duration-300 h-full">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                    <Image
                                        src={stat.icon}
                                        alt={stat.title}
                                        width={32}
                                        height={32}
                                        className="w-8 h-8"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 bg-clip-text">
                                        {stat.value}
                                    </h4>
                                    <p className="text-sm font-medium text-foreground mt-2">
                                        {stat.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        </Container>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
};

export default Stats
