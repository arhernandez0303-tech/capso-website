import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Connect = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Connect
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6 max-w-3xl">
            Get in Touch
          </h1>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl">
            Have questions, partnership ideas, or just want to connect? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">General Inquiries</p>
                      <a href="mailto:capso.texas@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">
                        capso.texas@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="http://linkedin.com/company/cap-student-organization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="md:col-span-3">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-2">Send Us a Message</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  For general inquiries, partnership opportunities, or anything else.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                    <Input
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us more..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Connect;
