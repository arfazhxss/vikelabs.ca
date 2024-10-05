import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function MidlandHome() {
    return (
        <>
            <section className="py-24 bg-gradient-to-tl from-primary/5 via-[#e9ece9] to-secondary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Build Real-World Software</h2>
                    <p className="text-center mb-16 text-muted-foreground max-w-3xl mx-auto text-lg">
                        VikeLabs is UVic&apos;s premier software development club. We transform classroom knowledge into practical experience through collaborative projects, industry mentorship, and modern development practices. Our members build production-grade applications while gaining the skills employers seek.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'Code',
                                description: "Work with modern tech stacks on real projects. Gain experience with agile development, code reviews, and CI/CD pipelines. Build your GitHub portfolio with meaningful contributions.",
                            },
                            {
                                title: 'Collaborate',
                                description: "Partner with fellow developers on cross-functional teams. Practice pair programming, participate in code reviews, and learn industry-standard collaboration tools and git workflows.",
                            },
                            {
                                title: 'Ship',
                                description: "Deploy your projects to production. Learn DevOps practices, cloud platforms, and how to build software that scales. Add real, launched projects to your resume.",
                            }
                        ].map(({ title, description }) => (
                            <Card key={title} className="group hover:shadow-lg transition-all duration-300 bg-white hover:bg-teal-50">
                                <CardHeader>
                                    <CardTitle className="flex flex-col items-center text-center space-y-4">
                                        <span className="text-2xl group-hover:text-primary transition-colors duration-300">{title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">{description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Button asChild className="mr-4">
                            <a href="/projects">View Our Projects</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="/tech-stack">Our Tech Stack</a>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-tl from-secondary/5 via-[#e6f2ff] to-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Join Our Developer Community</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
                        <div className="max-w-2xl w-full">
                            <p className="text-muted-foreground mb-8 text-lg text-center md:text-left">
                                Ready to level up your dev skills? Join UVic&apos;s most active tech community. Get code reviews from experienced developers, collaborate on production projects, and build your professional network.
                            </p>
                            <div className="flex justify-center md:justify-start space-x-6">
                                {[
                                    { icon: FaGithub, href: 'https://github.com/vikelabs', label: 'GitHub', description: 'Browse our code' },
                                    { icon: FaLinkedin, href: 'https://linkedin.com/company/vikelabs', label: 'LinkedIn', description: 'Connect professionally' },
                                    { icon: FaInstagram, href: 'https://instagram.com/vikelabs', label: 'Instagram', description: 'See our culture' },
                                ].map(({ icon: Icon, href, label, description }) => (
                                    <Button key={href} variant="outline" size="icon" asChild className="bg-blue-100 hover:bg-primary/10 transition-colors duration-300" title={description}>
                                        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`VikeLabs ${label}`}>
                                            <Icon className="h-6 w-6" />
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 w-full md:w-auto">
                            <Button size="lg" asChild className="w-full md:w-auto bg-black hover:bg-black/90 transition-all duration-300">
                                <a href="https://discord.gg/Znse6XaVNu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                                    <FaDiscord className="h-6 w-6" />
                                    <span>Join Our Discord</span>
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="w-full md:w-auto">
                                <a href="/apply" className="flex items-center justify-center">
                                    Apply for Projects
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}