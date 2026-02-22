import Layout from "@/components/Layout";
import { FileText, BookOpen } from "lucide-react";

const governingDocs = [
  { title: "CAPSO Charter", description: "The foundational document establishing CAPSO's authority, purpose, and structure." },
  { title: "State Commission Charter", description: "Defines the scope and authority of the State Commission." },
  { title: "State Commission Constitution", description: "The governing framework for State Commission operations and procedures." },
  { title: "State Commission Bylaws", description: "Detailed rules and procedures for day-to-day commission governance." },
  { title: "Branch Constitution", description: "The governing framework for individual CAPSO campus branches." },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6 max-w-3xl">
            Documents, Guides &amp; Resources
          </h1>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl">
            Your centralized source for CAPSO's governing documents, leadership resources, and academic support materials.
          </p>
        </div>
      </section>

      {/* Governing Documents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">Governing Documents</h2>
            <p className="text-muted-foreground max-w-2xl">
              CAPSO's governance follows a clear hierarchy: Charter → Constitution → Bylaws. Each document builds on the last.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {governingDocs.map((doc) => (
              <div
                key={doc.title}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-card-foreground mb-2">{doc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                <span className="text-sm text-muted-foreground/60 italic">PDF coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Organizational Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Leadership &amp; Organizational Resources</h2>
          <p className="text-muted-foreground mb-4">
            Resources designed to support CAPSO leaders at every level — from branch officers to State Commission directors.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Handbooks &amp; guides
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Organizational guidelines
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Training materials (as available)
            </li>
          </ul>
          <p className="text-sm text-muted-foreground/70 mt-6 italic">
            Note: CAPSO is a student organization and does not provide academic advising. For academic guidance, please consult your campus advisor or the UT Austin admissions office.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
