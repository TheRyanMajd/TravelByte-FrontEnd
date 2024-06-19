import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import Link from "next/link"
import React, { useState } from "react"


export default function Form () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("") // Add this line
  const [message, setMessage] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      name: name,
      email: email,
      message: message,
    }
    axios.post('http://localhost:8000/', formData)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
    return (
        <div className="mx-auto container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact Us</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Have questions or ready to get started? Fill out the form below and our team will be in touch.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="max-w-lg text-black"
                /> 
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-lg text-black"
                />
                <Textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="max-w-lg text-black"
                  rows={4}
                />
                <Button type="submit" className="max-w-lg rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                    Submit
                </Button>
                </form>
              </div>
            </div>
          </div>
    )
}