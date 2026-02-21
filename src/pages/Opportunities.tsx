import Layout from "@/components/Layout";
import { Award, CheckCircle, Clock } from "lucide-react";

const selectionPriorities = [
  "Commitment to CAPSO's mission",
  "Leadership readiness",
  "Accountability and continuity",
];

const Opportunities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Get Involved
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6 max-w-3xl">
            Leadership Opportunities
          </h1>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl">
            Discover pathways to lead, grow, and make an impact within CAPSO at both the branch and statewide level.
          </p>
        </div>
      </section>

      {/* Branch Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Branch Leadership</h2>
              <p className="text-muted-foreground mb-4">
                Branch leadership positions are the backbone of CAPSO's campus presence. As a branch leader, you'll be responsible for building community, organizing events, and representing CAPSO's mission at your institution.
              </p>
              <p className="text-muted-foreground">
                All branch leadership is appointed through a State Commission–led process, ensuring that leaders are selected based on merit, commitment, and readiness to serve.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Selection Priorities</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Leadership selection prioritizes the following qualities:
              </p>
              <ul className="space-y-4">
                {selectionPriorities.map((priority) => (
                  <li key={priority} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-card-foreground font-medium">{priority}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Applications Opening Soon
            </h2>
            <p className="text-primary-foreground/80 mb-4">
              Branch leadership applications will open in the coming months. All branch leadership positions require a formal application, and final appointments are made by the CAPSO State Commission in coordination with previous branch leadership.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              This page will be updated once applications are live. Check back soon.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What to Expect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CAPSO leaders gain real-world experience and make a lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Award,
                title: "Leadership Growth",
                desc: "Develop skills in management, communication, and organizational governance.",
              },
              {
                icon: CheckCircle,
                title: "Real Responsibility",
                desc: "Lead real initiatives, manage teams, and represent your campus statewide.",
              },
              {
                icon: Clock,
                title: "Lasting Impact",
                desc: "Shape the future of CAP student support and leave a legacy that endures.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;
