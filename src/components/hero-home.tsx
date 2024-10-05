"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaDiscord } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import Kickoff2021 from '@/public/kickoff2021.jpg'

const words = ["Create", "Build", "Solve", "Learn"]

export default function HeroHome() {
    const [currentWord, setCurrentWord] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length)
        }, 4900)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-24" style={{ backgroundImage: 'linear-gradient(to left, #ede7f6, #f1f8e9)' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
                            Innovate<br />
                            Collaborate<br />
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[currentWord]}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {words[currentWord]}
                                </motion.span>
                            </AnimatePresence>
                        </h1>
                        <p className="text-xl mb-10 text-muted-foreground">
                            Join our vibrant community of student innovators shaping the future through code, design, and entrepreneurship.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button asChild size="lg" className="w-full sm:w-auto">
                                <Link href="/about">Learn More</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-primary hover:bg-primary/10">
                                <a href="https://discord.gg/Znse6XaVNu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                                    <FaDiscord className="h-5 w-5" />
                                    <span>Join Our Discord</span>
                                </a>
                            </Button>
                        </div>
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
            </div>
        </section>
    )
}