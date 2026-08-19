import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.16),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--border)/0.7)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.7)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Transform Your Tech Career into
            <span className="text-tech-gradient">
              {" "}
              Product Management
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join Africa's premier community of product managers. Get the skills,
            network, and mentorship you need to successfully transition from any
            tech role to product management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 shadow-glow transition-all duration-180 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <a href="#community" className="border border-border bg-card/70 text-foreground px-8 py-4 rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-180">
              Explore Community
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-card p-6 rounded-lg border border-border shadow-sm hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow transition-all duration-180">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
            <p className="text-muted-foreground">Community Members</p>
          </div>
          <div className="text-center bg-card p-6 rounded-lg border border-border shadow-sm hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow transition-all duration-180">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">12 Weeks</h3>
            <p className="text-muted-foreground">Intensive Program</p>
          </div>
          <div className="text-center bg-card p-6 rounded-lg border border-border shadow-sm hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow transition-all duration-180">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">85%</h3>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
