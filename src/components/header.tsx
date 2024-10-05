import Link from 'next/link'
import Image from 'next/image'
import VikeLabsIco from '@/public/vikelabs-trans.png'
import { Menu, Home, Users, Calendar } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
    {
        name: 'Home',
        href: '/',
        description: 'Explore our innovative tech projects',
        icon: Home
    },
    {
        name: 'About Us',
        href: '/about',
        description: 'How did VikeLabs come to be?',
        icon: Users
    },
    {
        name: 'Hackathons',
        href: '/hackathons',
        description: 'Some of the most impactful hackathons around',
        icon: Calendar
    }
]

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-teal-50 backdrop-blur supports-[backdrop-filter]:bg-teal-50/60">
            <div className="container px-4 mx-auto">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={VikeLabsIco}
                            alt="VikeLabs Logo"
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                        <span className="text-2xl font-semibold">VIKELABS</span>
                    </Link>

                    {/* Right-Side Nav Section for Desktop */}
                    <nav className="hidden md:flex gap-8 justify-end items-center w-full">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-bold text-teal-800"
                                title={item.name}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu for Smaller Screens */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="md:hidden">
                                <Menu className="h-6 w-6 text-teal-800" />
                                <span className="sr-only">Open menu</span>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] p-6">
                            <nav className="flex flex-col space-y-6 mt-8">
                                {navItems.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="group flex items-center"
                                        >
                                            <Icon className="h-5 w-5 mr-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                                            <div className="text-lg font-medium text-foreground">
                                                {item.name}
                                            </div>
                                        </Link>
                                    )
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
