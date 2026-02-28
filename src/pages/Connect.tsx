import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Linkedin, Instagram, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Connect = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = "capso.texas@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast({ title: "Copied!", description: `${email} copied to clipboard.` });
    setTimeout(() => setCopied(false), 2000);
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

      {/* Contact + Social */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">Reach Out</h2>
          <p className="text-muted-foreground mb-10">
            For general inquiries, partnerships, or anything else — email us directly.
          </p>

          {/* Email Card */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12 inline-flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">General Inquiries</p>
              <a href={`mailto:${email}`} className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                {email}
              </a>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border hover:bg-primary/10 transition-colors text-muted-foreground"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-foreground mb-5">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a
                href="http://linkedin.com/company/cap-student-organization"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border font-semibold text-foreground hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/txcapso"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border font-semibold text-foreground hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-12">
            Looking for a specific branch? Find branch contact info on our{" "}
            <a href="/branches" className="text-primary font-medium hover:underline">Branches page</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Connect;
