import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

import anthonyImg from "@/assets/anthony-hernandez.jpg";
import cohenImg from "@/assets/cohen-moncada.jpg";
import enricoImg from "@/assets/enrico-metzger.jpg";
import liaImg from "@/assets/lia-tovar.jpg";
import farisImg from "@/assets/faris-ebrahim.jpg";
import joshImg from "@/assets/josh-petite.jpg";

const leadershipRoles = [
  { title: "Executive Director", name: "Anthony Hernandez", image: anthonyImg },
  { title: "Associate Director", name: "Cohen Moncada", image: cohenImg },
  { title: "Director of Organizational Development", name: "Enrico Metzger", image: enricoImg },
  { title: "Director of Programs", name: "Lia Tovar", image: liaImg },
  { title: "Director of Marketing", name: "Faris Ebrahim", image: farisImg },
  { title: "Director of Finance", name: "Josh Petite", image: joshImg },
];

const governingDocs = [
  { title: "CAPSO Statewide Charter", description: "The foundational document establishing CAPSO's authority and purpose." },
  { title: "State Commission Charter", description: "Defines the scope and authority of the State Commission." },
  { title: "State Commission Constitution", description: "The governing framework for State Commission operations." },
  { title: "State Commission Bylaws", description: "Detailed rules and procedures for commission governance." },
];

const StateCommission = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Governance
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6 max-w-3xl">
            The State Commission
          </h1>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl">
            The central governing body responsible for CAPSO's statewide operations, standards, and institutional continuity.
          </p>
        </div>
      </section>

      {/* How CAPSO is Governed */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">How CAPSO is Governed</h2>
          <p className="text-muted-foreground mb-4">
            CAPSO operates under a centralized governance model led by the State Commission. The State Commission serves as the organization's highest authority, overseeing all statewide operations, setting standards for campus branches, and ensuring alignment with CAPSO's mission and charter.
          </p>
          <p className="text-muted-foreground mb-4">
            This structure ensures consistency, accountability, and continuity across every CAPSO branch — regardless of campus. The State Commission works directly with branch leadership to maintain the standards and culture that define the CAPSO experience.
          </p>
          <p className="text-muted-foreground">
            Centralized governance matters because it protects the integrity of the organization, prevents fragmentation, and ensures that every CAP student receives the same level of support and opportunity.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">State Commission Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The individuals responsible for guiding CAPSO's statewide vision and operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadershipRoles.map((role) => (
              <div
                key={role.title}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-muted-foreground font-bold">
                    {role.name === "Coming Soon" ? "?" : role.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-base font-bold text-card-foreground mb-1">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Documents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Governing Documents</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CAPSO's governance follows a clear hierarchy: Charter → Constitution → Bylaws. Each document builds on the last to create a comprehensive framework.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {governingDocs.map((doc) => (
              <div
                key={doc.title}
                className="bg-card border border-border rounded-lg p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-1">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="font-semibold">
              <Link to="/resources">View All Documents</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StateCommission;
