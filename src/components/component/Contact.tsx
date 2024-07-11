import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FormEvent, useState } from 'react';


export default function Contact() {
    type FormData = {
        name: string;
        email: string;
        message: string;
    };
    const [formData, setFormData] =useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:founder@travelbyte.net?subject=${encodeURIComponent('TravelByte Contact Form')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
        window.location.href = mailtoLink;
    }

    return (
      <div className="mx-auto container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Have questions or feedback? We&rsquo;d love to hear from you.
                  </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                  <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                      <Input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="max-w-lg flex-1"
                          value={formData.name}
                          onChange={handleChange}
                      />
                      <Input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="max-w-lg flex-1"
                          value={formData.email}
                          onChange={handleChange}
                      />
                      <Textarea
                          name="message"
                          placeholder="Message"
                          className="max-w-lg flex-1"
                          value={formData.message}
                          onChange={handleChange}
                      />
                      <Button type="submit">Submit</Button>
                  </form>
              </div>
          </div>
      </div>
  );
}