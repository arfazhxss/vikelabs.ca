import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Header from '@/components/header'
import Kickoff2021 from '@/public/kickoff2021.jpg'
import ECSS from '@/public/ess.png'

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="container mx-auto px-4 py-12 md:py-24">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                VIKELABS
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We are a community of student developers, designers, and entrepreneurs who are passionate about building the future of software.
                            </p>
                        </div>
                        <div>
                            <Image
                                src={Kickoff2021}
                                alt="Kickoff 2021"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </section>

                <div className="space-y-8">
                    <section className="bg-teal-600 py-8">
                        <div className="container mx-auto px-4 flex justify-between items-center gap-12">
                            <h2 className="text-3xl font-bold text-white w-1/2">We&apos;re part of the University of Victoria Students&apos; Society</h2>
                            <p className="text-white text-sm w-1/2">
                                We get funding from the UVSS to run our events and workshop each semester. We also get access to the UVSS&apos;s resources like rooms and equipment. Special project grants are also available to through the UVSS.
                            </p>
                        </div>
                    </section>

                    <section className="bg-orange-500 py-8">
                        <div className="container mx-auto px-4 flex justify-between items-center gap-12">
                            <h2 className="text-3xl font-bold text-white w-1/2">We&apos;re part of the UVic Engineering Student Society</h2>
                            <p className="text-white text-sm w-1/2">
                                We get funding from the UVic Engineering Student Society to support our projects and events. Each year, we also get access to the Cinkant grant, which is a grant for special projects.
                            </p>
                        </div>
                    </section>
                </div>

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>When was VikeLabs formed and by whom? How did it get its name?</AccordionTrigger>
                                <AccordionContent>
                                    VikeLabs was formed in September 2019 by founding students Bryce, Braiden, Goh and Chris. It was originally called the UVic Product Development Club before rebranding to VikeLabs.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>What is the group&apos;s purpose?</AccordionTrigger>
                                <AccordionContent>
                                    VikeLabs is a collective of students who learn to build, deploy, and create software by developing solutions to problems that exist within the UVic community and beyond. In the process, members are able to learn about software development, product management, and design.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>About how many members do you have and from what disciplines?</AccordionTrigger>
                                <AccordionContent>
                                    We have around eighty-five currently active members, mostly from software engineering and computer science, as we are mainly a software development club. But, we welcome students from any faculty and are always looking for outside ideas and perspectives.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>What are the criteria for taking on a project?</AccordionTrigger>
                                <AccordionContent>
                                    At the beginning of the school year we do a large brainstorm, where we invite all club members to come together and think up new project ideas. We take the ideas that we think will have the best impact in helping others around UVic and are feasible to implement. Then we solidify those ideas, recruit team leads, and build out the project from there.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Where do project ideas usually come from?</AccordionTrigger>
                                <AccordionContent>
                                    As mentioned above, the project ideas are a product of many innovative minds coming together to solve problems and think of solutions, mainly surrounding UVic.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6">Supporters</h2>
                        <div className="flex justify-center">
                            <Image
                                src={ECSS}
                                alt="University of Victoria Engineering Student Society"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                        <Card>
                            <CardContent className="p-6">
                                <p className="mb-4">
                                    Looking for your next great co-op? Have feedback about the website? Interested in sponsoring the club? Let us know!
                                </p>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="https://github.com/vikelabs" target="_blank" rel="noopener noreferrer" aria-label="VikeLabs GitHub">
                                            <FaGithub className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="https://www.linkedin.com/company/vikelabs" target="_blank" rel="noopener noreferrer" aria-label="VikeLabs LinkedIn">
                                            <FaLinkedin className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="https://www.instagram.com/vikelabs" target="_blank" rel="noopener noreferrer" aria-label="VikeLabs Instagram">
                                            <FaInstagram className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                                <Button asChild>
                                    <Link href="https://discord.gg/Znse6XaVNu" target="_blank" rel="noopener noreferrer">
                                        <FaDiscord className="mr-2 h-4 w-4" />
                                        Join Our Discord!
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </div>
    )
}