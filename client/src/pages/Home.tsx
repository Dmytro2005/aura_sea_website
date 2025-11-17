import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloatingShips from "@/components/FloatingShips";
import { Users, Shield, Clock, Database, Award, TrendingUp, Ship, CheckCircle, Headphones, Anchor } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [countersVisible, setCountersVisible] = useState(false);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [countersVisible, end, duration]);

    return (
      <span className="text-4xl sm:text-5xl font-bold text-primary font-headline">
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 maritime-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pt-[24px] pb-[24px]">
            <Badge variant="secondary" className="mb-6 text-base px-6 py-2 glass-card">
              <Anchor className="w-4 h-4 mr-2" />
              Fresh Vision in Maritime Crewing
            </Badge>
            <h1 className="font-headline text-5xl sm:text-7xl font-bold uppercase mb-8 text-primary" data-testid="text-hero-tagline">
              Crewing with Care
            </h1>
            <p className="text-xl sm:text-2xl mb-6 text-foreground max-w-3xl mx-auto font-medium" data-testid="text-hero-subtitle">
              Your reliable, long-term partner for tanker and bulk carrier crew management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            <Card className="glass-card hover-elevate" data-testid="card-hero-shipowners">
              <CardHeader>
                <Ship className="w-12 h-12 mb-4 text-primary mx-auto" />
                <CardTitle className="font-headline text-xl text-center">For Ship-Owners</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>500+ qualified officers & ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 crew change support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Full compliance & documentation</span>
                  </li>
                </ul>
                <Link href="/ship-owners">
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-testid="button-hero-owners">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="glass-premium hover-elevate border-2 border-primary/40" data-testid="card-hero-experience">
              <CardHeader>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-xl"></div>
                  <Award className="relative w-12 h-12 mb-4 text-primary mx-auto" />
                </div>
                <CardTitle className="font-headline text-xl text-center">10+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground mb-4">
                  Specialized in tanker and bulk carrier operations
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Oil/Chemical Tankers</span>
                    <Badge variant="secondary" className="glass-card">Expert</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Product Tankers</span>
                    <Badge variant="secondary" className="glass-card">Expert</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Bulk Carriers</span>
                    <Badge variant="secondary" className="glass-card">Expert</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate" data-testid="card-hero-seafarers">
              <CardHeader>
                <Users className="w-12 h-12 mb-4 text-primary mx-auto" />
                <CardTitle className="font-headline text-xl text-center">For Seafarers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fair contracts, no hidden terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Reliable, on-time payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Career support & training</span>
                  </li>
                </ul>
                <Link href="/seafarers">
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-testid="button-hero-seafarers">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 mb-12" ref={countersRef}>
            <div className="text-center mb-12">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-2" data-testid="heading-experience">
                Experience & Numbers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="glass-card text-center p-8 hover-elevate" data-testid="card-counter-experience">
                <Counter end={10} suffix="+" />
                <p className="text-lg font-semibold mt-4 text-foreground">Years Maritime Experience</p>
              </Card>

              <Card className="glass-card text-center p-8 hover-elevate" data-testid="card-counter-seafarers">
                <Counter end={500} suffix="+" />
                <p className="text-lg font-semibold mt-4 text-foreground">Seafarers in Database</p>
              </Card>

              <Card className="glass-card text-center p-8 hover-elevate" data-testid="card-counter-specialization">
                <div className="flex items-center justify-center gap-2">
                  <Ship className="w-12 h-12 text-primary" />
                </div>
                <p className="text-lg font-semibold mt-4 text-foreground">Tanker & Bulk Fleet Specialization</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/vacancies">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-10" data-testid="button-hero-vacancies">
                  View Current Vacancies
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-10 glass-card border-2" data-testid="button-hero-contact">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden maritime-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4" data-testid="heading-fresh-vision">
              Fresh Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Combining 10+ years of maritime expertise with modern processes, transparent communication, and technology-driven solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card text-center hover-elevate" data-testid="card-fresh-vision-people">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline">People-First Crewing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We prioritize the well-being and professional development of seafarers while ensuring ship-owners receive reliable, qualified crew members
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover-elevate" data-testid="card-fresh-vision-tech">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline">Tech-Enabled Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Modern systems for crew management, documentation, and communication streamline operations and enhance transparency
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover-elevate" data-testid="card-fresh-vision-partnerships">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline">Long-Term Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Building lasting relationships based on trust, reliability, and mutual growth with both ship-owners and seafarers
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-24 maritime-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4" data-testid="heading-ship-owners-benefits">
              For Ship-Owners – Key Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your reliable partner for comprehensive crew management solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card hover-elevate" data-testid="card-compliance">
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <CardTitle className="font-headline text-lg">Compliance & Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full compliance with international maritime standards, comprehensive vetting, medical checks, and certification management
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate" data-testid="card-support">
              <CardHeader className="flex flex-row items-center gap-4">
                <Headphones className="w-10 h-10 text-primary flex-shrink-0" />
                <CardTitle className="font-headline text-lg">24/7 Communication & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock availability for urgent crew changes, medical emergencies, and operational support
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate" data-testid="card-database">
              <CardHeader className="flex flex-row items-center gap-4">
                <Database className="w-10 h-10 text-primary flex-shrink-0" />
                <CardTitle className="font-headline text-lg">Experienced Crew Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access to 500+ qualified officers and ratings with proven track records on tanker and bulk carrier vessels
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/ship-owners">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-testid="button-learn-more-owners">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[0px] mb-[0px] pt-[24px] pb-[24px]">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4" data-testid="heading-seafarers-why">
              For Seafarers – Why AURA SEA?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent contracts, timely payments, and real career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card hover-elevate" data-testid="card-fair-contracts">
              <CardHeader>
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-headline">Fair Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clear contract terms with no hidden clauses. We ensure you understand every detail before signing
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate" data-testid="card-timely-payment">
              <CardHeader>
                <Clock className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-headline">Timely Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reliable, on-time salary payments. Your financial security is our priority
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate" data-testid="card-career-support">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-headline">Career Support & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access to training opportunities and career advancement pathways. We invest in your professional growth
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/seafarers">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-testid="button-learn-more-seafarers">
                Learn More About Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 maritime-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Card className="glass-premium p-12 border-2">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-6" data-testid="heading-cta">
              Ready to Partner with AURA SEA?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can support your crewing needs or advance your maritime career
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 shadow-lg" data-testid="button-contact-aura-sea">
                Contact AURA SEA
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
