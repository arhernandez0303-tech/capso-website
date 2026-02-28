import Layout from "@/components/Layout";
import { Mail, Linkedin, Instagram, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const emails = [
  { label: "General Inquiries", email: "capso.texas@gmail.com" },
  { label: "UT Arlington", email: "capso.uta@gmail.com" },
  { label: "UT San Antonio", email: "capso.utsa@gmail.com" },
  { label: "UT Tyler", email: "capso.utt@gmail.com" },
  { label: "UT El Paso", email: "capso.utep@gmail.com" },
  { label: "UT Rio Grand Valley", email: "capso.utrgv@gmail.com" },
  { label: "UT Permian Basin", email: "capso.utpb@gmail.com" },
  { label: "Stephen F. Austin State", email: "capso.sfa@gmail.com" },
];

const CopyEmailRow = ({ label, email }: { label: string; email: string }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast({ title: "Copied!", description: `${email} copied to clipboard.` });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <a href={`mailto:${email}`} className="font-medium text-foreground hover:text-primary transition-colors">
            {email}
          </a>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="ml-4 w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-primary/10 transition-colors shrink-0"
        aria-label={`Copy ${email}`}
      >
        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
      </button>
    </div>
  );
};

const Connect = () => {
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
            Have questions, partnership ideas, or just want to connect? Reach out to us directly.
          </p>
        </div>
      </section>

      {/* Email Directory */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Email Directory</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find the right contact for your inquiry. Click any email to open your mail app, or use the copy button.
            </p>
          </div>
          <div className="space-y-3">
            {emails.map((item) => (
              <CopyEmailRow key={item.email} label={item.label} email={item.email} />
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Follow Us</h2>
          <p className="text-muted-foreground mb-8">Stay connected with CAPSO on social media.</p>
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
      </section>
    </Layout>
  );
};

export default Connect;
