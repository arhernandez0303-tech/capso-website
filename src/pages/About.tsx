import Layout from "@/components/Layout";
import { Target, Eye, Shield, Heart, Lightbulb, Users } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity & Accountability",
    description: "Upholding the highest standards of honesty and transparency while maintaining personal and collective responsibility in every initiative we undertake.",
  },
  {
    icon: Heart,
    title: "Service & Community",
    description: "Fostering a culture of selfless service and mutual support, ensuring genuine care and a strong sense of belonging for every member.",
  },
  {
    icon: Lightbulb,
    title: "Progress & Growth",
    description: "Championing personal development, academic excellence, and professional readiness to empower our members for success throughout their entire collegiate journey.,
  },
  {
    icon: Users,
    title: "Collaboration & Unity",
    description: "Building bridges beyond the CAP program, fostering deep engagement between our members and the broader campus community",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            About CAPSO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6 max-w-3xl">
            Who We Are &amp; Why We Exist
          </h1>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl">
            The CAPSO is the statewide body dedicated to connecting, supporting, and empowering CAP students across Texas.
          </p>
        </div>
      </section>

      {/* What is CAPSO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">What is CAPSO?</h2>
            <p className="text-muted-foreground mb-4">
              CAPSO — formally known as the Coordinated Admissions Program Student Organization — is a statewide organization built by and for CAP students. We exist to ensure that every student navigating the program has access to leadership development, community, and institutional support throughout their journey.
            </p>
            <p className="text-muted-foreground">
              From your CAP year at a partner institution to your transfer to UT Austin, CAPSO is there to connect and empower you every step of the way.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Statewide?</h2>
            <p className="text-muted-foreground mb-4">
              Isolated campus organizations lack the coordination, resources, and continuity needed to truly serve CAP students. Without statewide standards, students face inconsistent experiences from campus to campus.
            </p>
            <p className="text-muted-foreground">
              CAPSO solves this by unifying campus branches under one cohesive framework. Thus, ensuring continuity, accountability, and shared purpose across every CAP community in Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To connect, support, and empower Coordinated Admissions Program students across Texas through statewide coordination, leadership development, and community building. Thus, ensuring every CAP student has the tools and resources to thrive during their CAP year and beyond.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                A future where every CAP student in Texas is part of a unified, empowered community. Where leadership is cultivated, transitions are supported, and no student navigates their journey alone. CAPSO aspires to be the model for statewide student organization governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values guide every decision, initiative, and interaction within CAPSO.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
