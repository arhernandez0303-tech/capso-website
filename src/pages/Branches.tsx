import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Linkedin, Instagram, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import capsoUtaLogo from "@/assets/capso-uta-logo.png";
import capsoUtsaLogo from "@/assets/capso-utsa-logo.png";
import capsoUttLogo from "@/assets/capso-utt-logo.png";
import capsoSfaLogo from "@/assets/capso-sfa-logo.png";

const campuses = [
  { name: "UT Arlington", email: "capso.uta@gmail.com", linkedin: "https://linkedin.com/company/capso-uta", instagram: "https://instagram.com/capso.uta", logo: capsoUtaLogo },
  { name: "UT San Antonio", email: "capso.utsa@gmail.com", linkedin: "https://linkedin.com/company/capso-utsa", instagram: "https://instagram.com/capso.utsa", logo: capsoUtsaLogo },
  { name: "UT Tyler", email: "capso.utt@gmail.com", linkedin: "https://linkedin.com/company/capso-utt", instagram: "https://instagram.com/capso.utt", logo: capsoUttLogo },
  { name: "Stephen F. Austin State", email: "capso.sfa@gmail.com", linkedin: "https://linkedin.com/company/capso-sfa", instagram: "https://instagram.com/capso.sfa", logo: capsoSfaLogo },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({ title: "Copied!", description: `${text} copied to clipboard.` });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="w-7 h-7 rounded-md border border-border flex items-center justify-center hover:bg-primary/10 transition-colors shrink-0"
      aria-label={`Copy ${text}`}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-muted-foreground" />}
    </button>
  );
};

const Branches = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Our Campuses
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6 max-w-3xl">
            CAPSO Branches Across Texas
          </h1>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl">
            Discover CAPSO's growing network of campus branches — each one part of a unified statewide community.
          </p>
        </div>
      </section>

      {/* Campus Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Current Branches</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CAPSO is expanding across Texas. Each branch operates under the same statewide standards while serving its unique campus community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {campuses.map((campus) => (
              <div
                key={campus.name}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={campus.logo} alt={`${campus.name} logo`} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                  <h3 className="font-bold text-card-foreground">{campus.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href={`mailto:${campus.email}`} className="hover:text-primary transition-colors">
                    {campus.email}
                  </a>
                  <CopyButton text={campus.email} />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={campus.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-foreground" />
                  </a>
                  <a
                    href={campus.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Don't See Your School? */}
          <div className="mt-14 text-center bg-muted rounded-xl p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3">Don't see your school?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              CAPSO is always looking to expand. If you're a CAP student interested in starting a branch at your university, we'd love to hear from you.
            </p>
            <span className="inline-flex items-center gap-2 bg-muted-foreground/20 text-muted-foreground px-6 py-3 rounded-md font-medium cursor-default">
              Branch Interest Form — Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* Branch Model */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Branch Model</h2>
          <p className="text-muted-foreground mb-4">
            Every CAPSO branch operates under the same statewide standards and expectations, ensuring a consistent experience for CAP students regardless of campus. Branches are responsible for local community building, event programming, and student engagement.
          </p>
          <p className="text-muted-foreground mb-4">
            Branch leadership is appointed through a State Commission–led process, and all branches are expected to uphold CAPSO's charter, constitution, and bylaws. This relationship between branches and the State Commission ensures accountability, quality, and continuity across the organization.
          </p>
          <p className="text-muted-foreground">
            Whether a branch is active or still developing, every campus in the CAPSO network is working toward the same goal: empowering CAP students and building lasting community.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Branches;
