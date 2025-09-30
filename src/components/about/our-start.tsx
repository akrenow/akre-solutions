import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";

const OurStart = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
                    <Container>
                        <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
                            <Icons.stars className="size-5" />
                            <span className="text-sm text-white">
                                Our Foundation
                            </span>
                        </div>
                    </Container>
                    <Container delay={0.1} className="flex grow">
                        <h2 className="text-3xl md:text-4xl font-semibold text-left md:text-center mt-4">
                            How Zintronia Began Its Journey
                        </h2>
                    </Container>
                    <Container delay={0.3} className="max-w-2xl mx-auto">
                        <p className="text-base md:text-lg text-muted-foreground text-left md:text-center mt-4 max-w-2xl">
                            <span className="text-balance">
                                Zintronia was founded in 2024 by a group of friends who shared a common passion for technology and innovation. We may be new, but our team brings together years of combined experience in software development, design, and digital solutions.
                            </span>
                            <br />
                            <br />
                            <span className="mt-4 text-balance">
                                What sets us apart is our fresh perspective and commitment to building meaningful solutions. We're not weighed down by legacy systems or outdated thinking, allowing us to be agile, innovative, and completely focused on our clients' success.
                            </span>
                        </p>
                    </Container>

                    <Container delay={0.5} className="w-full max-w-4xl mx-auto">
                        <div className="mt-10 w-full">
                            <div className="flex flex-col items-center justify-center text-center h-80 w-full bg-primary rounded-xl lg:rounded-2xl p-6">
                                <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black">
                                    Let's Build <br className="hidden lg:block" /> Something Amazing
                                </h3>
                                <p className="text-lg text-black/80 mt-4 max-w-lg">
                                    Partner with a team that's as passionate about your success as you are. Let's create something extraordinary together.
                                </p>
                                <Link href="/contact" className="hidden lg:block">
                                    <Button size="md" variant="black" className="mt-6">
                                        Contact us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </Wrapper>
        </div>
    )
};

export default OurStart
