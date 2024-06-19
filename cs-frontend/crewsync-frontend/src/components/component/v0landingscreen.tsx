'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Chivo, Libre_Franklin } from 'next/font/google'
import Image from 'next/image'
import Link from "next/link"
import { JSX, SVGProps, useEffect, useState } from 'react'
import CS from '../../../public/crewsyncblack.svg'
import laptop from '../../../public/enhance.png'
import Form from '../component/Form.jsx'

export const libereFranklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
});

export const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
});



export default function v0landingscreen() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PlaneIcon className="h-6 w-6" />
          <span className="sr-only">CrewSync</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#What-We-Do" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            What We Do
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Current Sentiment
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Get In Touch
          </Link>
          {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link> */}
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 dotted">
          <div className="mx-auto container px-6 md:px-12 ">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Crew Scheduling with Ease
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  By leveraging <strong>artificial intelligence</strong> and <strong>machine learning</strong> technology, we are determined to modernize and simplify crew scheduling for airlines worldwide. 🌐
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Schedule a Demo
                  </Link>
                </div>
              </div>
              <Image
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square impress"
                src={CS.src}
                width={CS.width}
                height={CS.width}
                alt="CrewSync transparent logo"
              />
            </div>
          </div>
        </section>
        <section id="#What-We-Do" className="w-full py-12 px-4 md:py-24 lg:py-32 dark:bg-black sm:text-5xl">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 #wwd">
                  What We Do
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Crew Scheduling</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Feel Confident with the Software</h3>
                      <p className="tracking-tightest text-gray-500 text-sm dark:text-gray-400">
                      The User Interface allows minimal training to use. Saving your airlines money and time.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Built on the newest technologies</h3>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                      Our software is the newest and most updated on the market.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Customize and Pivot Anytime!</h3>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                      With the ability to talk directly with the founders, your voice will be heard throughout the use of our product. We will work with you every step of the way!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src={laptop.src}
                width={550}
                height={330}
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 dotted">
          <div className="container mx-auto px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Current Sentiment
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Scheduling 💩 Softwares...</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We recognize the problem with current crew scheduling software. That is why we are here to develop the greatest platform for crew scheduling to <strong>eliminate risks</strong> of unhappy customers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">Stacie S.</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Flight Attendent</p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      &ldquo;We didn&rsquo;t have a lot of control over the schedule once it was issued so it was merely to download.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>RH</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">Rachel H.</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Airport Customer</p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      &ldquo;I was stuck in the TSA line and we were told that it was due to a scheduling error&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black-100">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing that Fits Your Needs</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Contact us regarding pricing considerations. We want to work with you to make sure you are getting the best deal possible.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              {/* <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                View Pricing
              </Link> */}
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <Form></Form>
        </section>
      </main>
    </div>
  )
}

function PlaneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}
