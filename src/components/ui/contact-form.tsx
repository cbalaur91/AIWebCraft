import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init({
  publicKey: 'WGaX590czyFH0I9x2', // Replace with your public key
});

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await emailjs.send(
        'service_ryl6ms3', // Replace with your service ID
        'template_ibzmrmh', // Replace with your template ID
        {
          from_name: data.name,
          from_email: data.email,
          service: data.service,
          message: data.message,
        }
      );

      reset()
      alert("Thank you for your message! We'll get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was a problem sending your message. Please try again or email us directly at aiwebcraftinfo@gmail.com");
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400 font-semibold mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          {...register("service")}
          className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
        >
          <option value="business-website">Business Website</option>
          <option value="landing-page">Landing Page</option>
          <option value="portfolio">Portfolio Site</option>
          <option value="other">Other</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}