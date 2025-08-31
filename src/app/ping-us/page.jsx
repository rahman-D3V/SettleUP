"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setLoading(true);

  
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500); // 1.5 seconds delay
  };

  const goToDashboard = () => {
    router.push("/dashboard");  
  };

  return (
    <div className="flex items-center justify-center p-6 h-screen">
      <div className="w-full max-w-2xl bg-white border border-gray-200 shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch</h1>
        <p className="text-gray-600 mb-8">
          Have questions or feedback? Fill out the form below and we’ll get back to you.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <Label className="mb-2" htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <Label className="mb-2" htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <Label className="mb-2" htmlFor="message">Message</Label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                placeholder="Type your message..."
                rows={5}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full text-lg" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        ) : (
          <div className="text-center py-10 space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">✅ Message Sent!</h2>
            <p className="mt-2 text-gray-600">We’ll get back to you soon.</p>
            <Button onClick={goToDashboard} className="mt-4 w-full text-lg">
              Go to Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
