import { Link } from "react-router-dom";
import { BookOpen, Users, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-image.jpg?format=webp&w=1400";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: BookOpen,
    title: "Leadership Development",
    description: "Building the next generation of student leaders through structured programs and mentorship.",
  },
  {
    icon: Users,
    title: "Statewide Coordination",
    description: "Unifying CAP organizations across Texas under one cohesive framework.",
  },
  {
    icon: GraduationCap,
    title: "Student Connection",
    description: "Bringing CAP students together to share experiences, build friendships, and navigate the journey as a community.",
  },
  {
    icon: Heart,
    title: "Community & Continuity",
    description: "Fostering lasting connections and institutional continuity across campuses.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="CAPSO students collaborating"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-widest mb-3">
              Coordinated Admissions Program Student Organization
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Empowering Paths &amp; Uniting Futures
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              The statewide student organization dedicated to connecting, supporting, and empowering CAP students across Texas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/about">Explore CAPSO</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-secondary font-semibold hover:bg-primary-foreground/90">
                <Link to="/branches">Find Your Campus</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-secondary font-semibold hover:bg-primary-foreground/90">
                <Link to="/state-commission">Statewide Leadership</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                CAPSO is built on four foundational pillars that guide everything we do.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Can We Connect */}
      <AnimatedSection>
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  How Can We Connect?
                </h2>
                <p className="text-primary-foreground/80 mb-8">
                  Whether you're a current CAP student, a transfer student, or someone looking to support our mission — CAPSO has a place for you.
                </p>
                <Button asChild size="lg" className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90">
                  <Link to="/connect">Get In Touch</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { label: "For CAP Students", desc: "Find your campus branch and get connected." },
                  { label: "For Partners", desc: "Explore collaboration and support opportunities." },
                  { label: "For Communities", desc: "Learn how CAPSO impacts students statewide." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-primary-foreground/10 rounded-lg p-4">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground mt-1.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-foreground">{item.label}</h4>
                      <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Discover leadership opportunities, explore your campus branch, or connect with the State Commission.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/opportunities">View Opportunities</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <Link to="/connect">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
