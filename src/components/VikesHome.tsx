import Header from '@/components/header'
import HeroHome from '@/components/hero-home'
import MidlandHome from '@/components/midland-home'
import Footer from '@/components/footer'

export default function VikesHome() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-grow">
                <HeroHome />
                <MidlandHome />
            </main>
            <Footer />
        </div>
    )
}