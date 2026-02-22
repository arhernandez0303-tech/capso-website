import Layout from "@/components/Layout";
import { MapPin, Mail } from "lucide-react";

const campuses = [
  { name: "UT Arlington", status: "Active" as const, email: "capso.uta@gmail.com" },
  { name: "UT San Antonio", status: "Active" as const, email: "capso.utsa@gmail.com" },
  { name: "UT Tyler", status: "Active" as const, email: "capso.utt@gmail.com" },
  { name: "UT El Paso", status: "Developing" as const, email: "capso.utep@gmail.com" },
  { name: "UT Rio Grand Valley", status: "Developing" as const, email: "capso.utrgv@gmail.com" },
  { name: "UT Permian Basin", status: "Developing" as const, email: "capso.utpb@gmail.com" },
  { name: "Stephen F. Austin State University", status: "Active" as const, email: "capso.sfa@gmail.com" },
];

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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Campuses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CAPSO is expanding across Texas. Each branch operates under the same statewide standards while serving its unique campus community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campuses.map((campus) => (
              <div
                key={campus.name}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-card-foreground">{campus.name}</h3>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      campus.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {campus.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href={`mailto:${campus.email}`} className="hover:text-primary transition-colors">
                    {campus.email}
                  </a>
                </div>
              </div>
            ))}
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
