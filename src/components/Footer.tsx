import { Link } from "react-router-dom";
import capsoLogo from "@/assets/capso-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={capsoLogo} alt="CAPSO" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Empowering Paths and Uniting Futures
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link></li>
              <li><Link to="/state-commission" className="hover:text-primary-foreground transition-colors">State Commission</Link></li>
              <li><Link to="/branches" className="hover:text-primary-foreground transition-colors">Branches</Link></li>
              <li><Link to="/opportunities" className="hover:text-primary-foreground transition-colors">Opportunities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/resources" className="hover:text-primary-foreground transition-colors">Resources</Link></li>
              <li><Link to="/connect" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} CAPSO — Coordinated Admissions Program Student Organization - All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
