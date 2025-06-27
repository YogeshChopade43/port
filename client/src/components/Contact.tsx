import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "yogesh707chopade@gmail.com",
      color: "primary",
      href: "mailto:yogesh707chopade@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 8999177853",
      color: "secondary",
      href: "tel:+918999177853"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Nashik, Maharashtra, India",
      color: "accent",
      href: null
    }
  ];

  const colorClasses = {
    primary: "text-primary border-primary/20 hover:border-primary/40",
    secondary: "text-secondary border-secondary/20 hover:border-secondary/40",
    accent: "text-accent border-accent/20 hover:border-accent/40",
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-light-slate/70 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            and collaborations in AI/ML development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className={`glass-card p-6 rounded-2xl ${colorClasses[info.color as keyof typeof colorClasses]} transition-all duration-300 cursor-pointer`}
                onClick={() => info.href && window.open(info.href, "_blank")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-2xl ${colorClasses[info.color as keyof typeof colorClasses].split(' ')[0]}`}>
                    <i className={info.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                    <p className="text-light-slate/70">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div 
              className="flex space-x-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://github.com/YogeshChopade43"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-light-slate/60 hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a
                href="mailto:yogesh707chopade@gmail.com"
                className="text-3xl text-light-slate/60 hover:text-secondary transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fas fa-envelope"></i>
              </motion.a>
              <motion.a
                href="tel:+918999177853"
                className="text-3xl text-light-slate/60 hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fas fa-phone"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-card p-8 rounded-2xl border-primary/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="bg-dark/50 border-light-slate/20 focus:border-primary"
                          {...field}
                        />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-dark/50 border-light-slate/20 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Project Collaboration"
                          className="bg-dark/50 border-light-slate/20 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Let's discuss your project ideas..."
                          className="bg-dark/50 border-light-slate/20 focus:border-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
