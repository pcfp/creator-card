import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { FeatureImage } from './components/feature-image';
import { TestimonialCard } from './components/testimonial-card';


// --- Main Home Component ---

export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">CreatorCard</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
            >
              Benefits
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
            >
              Creator Stories
            </Link>
            <Link
              href="#eligibility"
              className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
            >
              Eligibility
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
            >
              Log In
            </Link>
            <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:from-yellow-600 hover:to-amber-600">
              Apply Now
            </Button>
          </div>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    The First Credit Card <span className="text-yellow-500">Designed for YouTube Creators</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Get the financial tools you deserve. Higher limits, better rewards, and no hidden fees. Built
                    specifically for content creators.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:from-yellow-600 hover:to-amber-600 gap-1"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-gray-800 bg-transparent"
                  >
                    Check Eligibility
                  </Button>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  <span>No annual fee</span>
                  <span className="mx-2">•</span>
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  <span>No credit score required</span>
                  <span className="mx-2">•</span>
                  <CheckCircle className="h-4 w-4 text-yellow-500" />
                  <span>Decision in minutes</span>
                </div>
              </div>
              <Image
                src="https://techcrunch.com/wp-content/uploads/2020/06/Karat-Black-Card_8.jpg"
                width={550}
                height={550}
                alt="CreatorCard Premium Credit Card"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full max-w-[550px] lg:order-last"
                priority
              />
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-black">Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Financial tools built for creators
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                  Traditional banks don&apos;t understand the creator economy. We do. Our card is designed specifically for
                  your unique financial needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <FeatureImage
                src="https://image.cnbcfm.com/api/v1/image/106912393-1626471884074-Karat_Landing_Page_Desktop_Free_Credit_Card_Mockup_20-color-branded.png?v=1626703111"
                alt="High Credit Limits - Karat Credit Card Mockup"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Higher Credit Limits</h3>
                      <p className="text-gray-400">
                        We look at your social metrics and revenue, not just your credit score. Get the spending power
                        you deserve as a creator.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Creator-First Rewards</h3>
                      <p className="text-gray-400">
                        Earn 5x points on business expenses like cameras, editing software, and other creator tools. 3x
                        on travel and dining.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">No Hidden Fees</h3>
                      <p className="text-gray-400">
                        Zero annual fees, no foreign transaction fees, and transparent terms. We believe in honest
                        financial products.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 lg:order-last">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Revenue-Based Qualification</h3>
                      <p className="text-gray-400">
                        We understand creator income. Our approval process considers your YouTube revenue, not just
                        traditional credit metrics.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Expense Management Tools</h3>
                      <p className="text-gray-400">
                        Track business expenses, categorize spending, and simplify tax preparation with our powerful
                        mobile app.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-white">Exclusive Creator Network</h3>
                      <p className="text-gray-400">
                        Join a community of successful creators. Access exclusive events, collaborations, and financial
                        education resources.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <FeatureImage
                src="https://cdn.prod.website-files.com/64319e85443cd280068e5fff/668e2eb1b9876982c0530cca_VISA%20WHITE%20large.webp"
                alt="Creator Financial Tools - VISA White Card"
              />
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-black">
                  Creator Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Trusted by top YouTube creators
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                  See how CreatorCard is helping content creators take control of their finances and grow their
                  channels.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <TestimonialCard
                name="Alex Tech"
                description="CreatorCard understands my income in a way traditional banks never did. I got a $30K limit despite having irregular income from my tech review channel."
                profileAlt="Alex Tech profile picture"
                profileSrc="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                channel="1.2M subscribers • Tech Reviews"
              />
              <TestimonialCard
                name="Maya Adventures"
                description="The rewards are incredible for creators. I've earned back thousands on camera gear and travel expenses for my adventure vlogging."
                profileAlt="Maya Adventures profile picture"
                profileSrc="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                channel="850K subscribers • Travel Vlogs"
              />
              <TestimonialCard
                name="GameMaster Pro"
                description="The expense tracking tools have saved me hours during tax season. Plus, having a card that actually recognizes YouTube income as legitimate is game-changing."
                profileAlt="GameMaster Pro profile picture"
                profileSrc="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                channel="2.5M subscribers • Gaming"
              />
            </div>
          </div>
        </section>
        {/* Eligibility Section */}
        <section id="eligibility" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-black">Eligibility</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Designed for creators at every level
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                  We look at metrics that matter for creators, not just traditional credit scores.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-800 bg-gray-900 p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-white">Rising Creator</h3>
                  <p className="text-gray-400">For newer creators building their audience</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-white">10K+</span>
                  <span className="ml-1 text-gray-400">subscribers</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">At least 10K YouTube subscribers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Minimum $500 monthly revenue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Starting $5,000 credit limit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Basic rewards program</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:from-yellow-600 hover:to-amber-600">
                  Apply Now
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border border-yellow-500 bg-gray-900 p-6 ring-1 ring-yellow-500">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-yellow-500 bg-yellow-500/10 px-2.5 py-0.5 text-xs font-semibold text-yellow-500">
                    Most Popular
                  </div>
                  <h3 className="font-bold text-white">Established Creator</h3>
                  <p className="text-gray-400">For creators with a solid audience base</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-white">100K+</span>
                  <span className="ml-1 text-gray-400">subscribers</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">100K+ YouTube subscribers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Minimum $2,000 monthly revenue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">$15,000 - $50,000 credit limit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Premium rewards & perks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Creator community access</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:from-yellow-600 hover:to-amber-600">
                  Apply Now
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-800 bg-gray-900 p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-white">Elite Creator</h3>
                  <p className="text-gray-400">For top-tier creators with large audiences</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-white">1M+</span>
                  <span className="ml-1 text-gray-400">subscribers</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">1M+ YouTube subscribers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Significant monthly revenue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">$50,000+ credit limit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Elite rewards & concierge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-300">Custom perks & partnerships</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:from-yellow-600 hover:to-amber-600">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Ready to Apply Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Ready to get the credit card built for creators?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed">
                Join thousands of YouTube creators who are growing their channels with CreatorCard.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:from-yellow-600 hover:to-amber-600"
                >
                  Apply in 2 minutes
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-700 text-white hover:bg-gray-800 bg-transparent"
                >
                  Learn more
                </Button>
              </div>
              <p className="text-xs text-gray-500">No impact on your credit score to check eligibility.</p>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-black">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Frequently asked questions
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                  Everything you need to know about CreatorCard
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-lg font-bold text-white">How do you determine my credit limit?</h3>
                <p className="mt-2 text-gray-400">
                  We look at your YouTube metrics, channel growth, revenue history, and other creator-specific factors.
                  Unlike traditional banks, we understand that creator income can be substantial even without a
                  traditional credit history.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-lg font-bold text-white">What if I don&apos;t meet the subscriber requirements?</h3>
                <p className="mt-2 text-gray-400">
                  We consider multiple factors beyond just subscriber count. If you have strong engagement, consistent
                  revenue, or growth in other metrics, we encourage you to apply. We evaluate each creator holistically.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-lg font-bold text-white">
                  How are the rewards different from regular credit cards?
                </h3>
                <p className="mt-2 text-gray-400">
                  Our rewards are specifically designed for creator expenses. You&apos;ll earn 5x points on camera equipment,
                  editing software, lighting, audio gear, and other creator tools. Plus 3x on travel and dining, which
                  are common creator expenses.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-lg font-bold text-white">Is there an annual fee?</h3>
                <p className="mt-2 text-gray-400">
                  No, CreatorCard has no annual fee. We believe in providing value to creators without unnecessary
                  costs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full border-t border-gray-800 py-12 bg-black">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
        
              <span className="text-xl font-bold text-white">CreatorCard</span>
            </div>
            <p className="text-gray-400">
              The first credit card designed specifically for YouTube creators. Higher limits, better rewards, and no
              hidden fees.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="font-medium text-white">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-gray-400 hover:text-white">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#eligibility" className="text-sm text-gray-400 hover:text-white">
                    Eligibility
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Rewards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Mobile App
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-white">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#faq" className="text-sm text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Creator Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-4 pt-8 md:px-6">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} CreatorCard. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-400">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-400">
              Cardholder Agreement
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
