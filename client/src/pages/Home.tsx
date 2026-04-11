import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Clock, Database, Award, TrendingUp, Ship, CheckCircle, Headphones, ChevronDown } from "lucide-react";



function HeroVideo({ src }: { src: string }) {
  return (
    <video
      src={src}
      autoPlay
      onLoadedMetadata={(e) => {
        e.currentTarget.playbackRate = 0.5;
      }}
      muted
      playsInline
      preload="auto"
      poster="/textures/dark-ocean-bg.png"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "40% 58%",
        filter: "blur(1.1px) brightness(0.82) saturate(1.08)",
        transform: "scale(1.08)", // compensate for blur edge bleed
        willChange: "transform",
      }}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Video background (plays once, then holds final frame) */}
        <HeroVideo src="/videos/Ship_Photo_to_Website_Background_Video.mp4" />

        {/* Gradient overlay for depth & brand colour tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(6,15,45,0.72) 0%, rgba(8,20,60,0.60) 45%, rgba(6,15,45,0.72) 100%)",
          }}
        />

        {/* Subtle animated glow accents on top */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-10 pb-10 sm:pt-16 sm:pb-16">
            <h1
              className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)]"
              data-testid="text-hero-tagline"
            >
              Crewing with Care
              <span className="block mt-2 text-2xl sm:text-4xl lg:text-5xl">
                Your Global Maritime Partner
              </span>
            </h1>
            <p
              className="mt-6 text-lg sm:text-2xl max-w-4xl mx-auto font-medium text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
              data-testid="text-hero-subtitle"
            >
              Reliable crew management for container, bulk, tanker, and specialist vessels worldwide—backed by verified Ukrainian seafarers and modern HR systems.
            </p>

            <div className="mt-8 mx-auto flex w-full max-w-md flex-col gap-4 sm:max-w-xl sm:flex-row">
              <Link href="/ship-owners" className="block w-full min-w-0 sm:flex-1" data-testid="link-hero-ship-owners">
                <Button className="w-full !text-white" size="lg" data-testid="button-hero-ship-owners">
                  For Ship-Owners
                </Button>
              </Link>
              <Link href="/seafarers" className="block w-full min-w-0 sm:flex-1" data-testid="link-hero-seafarers">
                <Button className="w-full !text-white" size="lg" variant="secondary" data-testid="button-hero-seafarers">
                  For Seafarers
                </Button>
              </Link>
            </div>

            <div className="mt-10 text-center">
              <ChevronDown className="inline-block w-8 h-8 text-blue-100/85 animate-bounce" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden bg-white">
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
              Combining deep maritime expertise with data-driven recruitment, transparent communication, and care for seafarer wellbeing at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card text-center" data-testid="card-fresh-vision-people">
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

            <Card className="glass-card text-center" data-testid="card-fresh-vision-tech">
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

            <Card className="glass-card text-center" data-testid="card-fresh-vision-partnerships">
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
            <Card className="glass-card" data-testid="card-compliance">
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

            <Card className="glass-card" data-testid="card-support">
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

            <Card className="glass-card" data-testid="card-database">
              <CardHeader className="flex flex-row items-center gap-4">
                <Database className="w-10 h-10 text-primary flex-shrink-0" />
                <CardTitle className="font-headline text-lg">Experienced Crew Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access to 500+ verified professionals across ranks and vessel types—including containers, bulk, tankers, and more
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/ship-owners">
              <Button size="lg" data-testid="button-learn-more-owners">
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
            <Card className="glass-card" data-testid="card-fair-contracts">
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

            <Card className="glass-card" data-testid="card-timely-payment">
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

            <Card className="glass-card" data-testid="card-career-support">
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
              <Button size="lg" data-testid="button-learn-more-seafarers">
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
              <Button size="lg" className="text-lg px-10" data-testid="button-contact-aura-sea">
                Contact AURA SEA
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
