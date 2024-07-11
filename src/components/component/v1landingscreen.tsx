/**
 * v0 by Vercel.
 * @see https://v0.dev/t/609GRi4YeFb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Contact from "@/components/component/Contact"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import MockupImage from "../../../public/ptype.jpg"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <TruckIcon className="h-6 w-6" />
          <span className="sr-only">Trucking App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:animate-pulse underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:animate-pulse underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:animate-pulse underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="mx-auto container px-4 md:px-6">
          <video id="bg-vid" autoPlay loop muted>
                <source src="https://videos.pexels.com/video-files/4320049/4320049-hd_1920_1080_30fps.mp4" type="video/mp4"/>
            </video>
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Trucking Journey
                  </h1>
                  <p className="max-w-[600px] md:text-xl">
                    Our Trucking App helps you plan your routes, detect nearby rest stop capacity, and access
                    driver-specific tools to make your trips more efficient and comfortable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download App
                  </Link>
                </div>
              </div>
              <div className="relative">
                {/* <Image unoptimized
                  src="/placeholder"
                  width="600"
                  height="400"
                  alt="Truck on the Road"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                /> */}
              </div>
            </div>
            
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted gray">
          <div className="mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock the Power of Our Trucking App
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app plans to offer a range of features to make your trucking journey more efficient and comfortable.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Route Planning</h3>
                      <p className="text-muted-foreground">
                        Plan your routes with a touch of a button, taking into account traffic, weather, and other factors to ensure
                        you reach your destination on time.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Rest Stop Capacity</h3>
                      <p className="text-muted-foreground">
                        Detect the capacity of nearby rest stops, so you can plan your breaks and ensure you have a
                        comfortable place to rest.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Driver Tools</h3>
                      <p className="text-muted-foreground">
                        Access a suite of driver-specific tools, including <strong>drive time tracker,  fuel tracking, and more,</strong> to
                        streamline your day-to-day operations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src={MockupImage}
                width="600"
                alt="Truck Dashboard"
                className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm gray">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the truckers who have experienced the benefits of our app firsthand.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6 gray rounded-lg animate-accordion-down" user="John L." job="Long-Haul Trucker" inital="JL" desc="This app has been a game-changer for my trucking business. The navigation and rest stop features have saved me so much time and hassle."/>
              <Card className="p-6 gray rounded-lg" user="Pete B." job="Regional Trucker" inital="PB" desc="I love how the App helps me plan my trips and find the best rest stops along the way. It's made my job more efficient."/>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted gray">
          <Contact/>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dotted ">
        <p className="text-xs ">&copy; 2024 TravelByte Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:animate-pulse underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:animate-pulse underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#contact" className="text-xs hover:animate-pulse underline-offset-4" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}
