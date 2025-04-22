"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// Initialize EmailJS - Keep your keys secure, consider environment variables
// emailjs.init({
//  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'WGaX590czyFH0I9x2',
// });
// NOTE: Hardcoding keys is not recommended for production. Using placeholder for now.
emailjs.init({ publicKey: 'WGaX590czyFH0I9x2' });

const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email cannot exceed 100 characters"),
  service: z.enum(["business-website", "landing-page", "portfolio", "other"], {
    required_error: "Please select a service",
  }),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: undefined, // Set default for enum if needed
      message: "",
    },
  })

  const { formState: { isSubmitting }, reset } = form;

  const onSubmit = async (data: FormData) => {
    try {
      // Replace with your actual service and template IDs
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_ryl6ms3';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_ibzmrmh';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          service: data.service,
          message: data.message,
        }
      );

      reset() // Reset form fields after successful submission
      alert("Thank you for your message! We'll get back to you soon.");
      // Consider redirecting or showing a success message inline instead of alert
      // window.location.href = '/';
    } catch (error) {
      console.error("Error submitting form:", error);
      // Provide more user-friendly error feedback
      alert("Sorry, there was a problem sending your message. Please try again or email us directly at aiwebcraftinfo@gmail.com");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">Service Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="business-website">Business Website</SelectItem>
                  <SelectItem value="landing-page">Landing Page</SelectItem>
                  <SelectItem value="portfolio">Portfolio Site</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  )
}