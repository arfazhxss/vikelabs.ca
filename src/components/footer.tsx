import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa'
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">About Us</h3>
                        <p className="text-sm text-white/80">
                            VikeLabs is a student-led tech community at the University of Victoria, fostering innovation and hands-on learning through collaborative projects.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { text: 'Projects', url: '/projects' },
                                { text: 'Team', url: '/team' },
                                { text: 'Join Us', url: '/join' },
                                { text: 'Contact', url: '/contact' }
                            ].map(({ text, url }) => (
                                <li key={url}>
                                    <a href={url} className="text-sm text-white/80 hover:text-white transition-colors">
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Resources</h3>
                        <ul className="space-y-2">
                            {[
                                { text: 'Documentation', url: '/docs' },
                                { text: 'GitHub Repos', url: 'https://github.com/vikelabs' },
                                { text: 'Discord Community', url: 'https://discord.gg/vikelabs' },
                                { text: 'Blog', url: '/blog' }
                            ].map(({ text, url }) => (
                                <li key={url}>
                                    <a href={url} className="text-sm text-white/80 hover:text-white transition-colors">
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Find Us</h3>
                        <p className="text-sm text-white/80 mb-4">
                            Connect with us on social media and join our vibrant community.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: FaGithub, url: 'https://github.com/vikelabs', label: 'GitHub' },
                                { Icon: FaDiscord, url: 'https://discord.gg/vikelabs', label: 'Discord' },
                                { Icon: FaLinkedin, url: 'https://linkedin.com/company/vikelabs', label: 'LinkedIn' },
                                { Icon: FaInstagram, url: 'https://instagram.com/vikelabs', label: 'Instagram' },
                                { Icon: FaYoutube, url: 'https://youtube.com/@vikelabs', label: 'YouTube' }
                            ].map(({ Icon, url, label }) => (
                                <a
                                    key={url}
                                    href={url}
                                    className="text-white/80 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 space-y-6">
                    <div className="text-sm text-white/80">
                        <h3 className="text-lg font-semibold mb-2">Land Acknowledgment</h3>
                        <p>
                            We acknowledge with respect the Lekwungen peoples on whose traditional territory the University of Victoria stands, and the Songhees, Esquimalt and W̱SÁNEĆ peoples whose historical relationships with the land continue to this day.
                        </p>
                    </div>

                    <Separator className="bg-white/20" />

                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-xs text-white/60">
                            © {new Date().getFullYear()} VikeLabs - Victoria B.C. Canada
                        </p>
                        <a
                            href="https://www.uvic.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white/60 hover:text-white transition-colors"
                        >
                            University of Victoria
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}