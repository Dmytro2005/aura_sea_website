import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Heart,
  TrendingUp,
  Users,
  Target,
  Award,
  CheckCircle,
  Database,
  Sparkles,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutHero from "@assets/stock_images/stormy_sea_about.png";
import heroPhoto from "@assets/stock_images/venti-views-1cqIcrWFQBI-unsplash.jpg";

export default function About() {
  useScrollAnimation();

  const missionVisionValues = [
    {
      icon: Target,
      title: "Mission",
      desc: "To provide reliable crewing solutions through transparent communication, modern processes, and long-term partnerships built on trust and excellence.",
      iconBg: "bg-cyan-500/10",
      iconClass: "text-cyan-400",
    },
    {
      icon: TrendingUp,
      title: "Vision",
      desc: "To become a leading maritime holding company, continuously innovating in crew management and related services while maintaining our commitment to care.",
      iconBg: "bg-teal-500/10",
      iconClass: "text-teal-400",
    },
    {
      icon: Award,
      title: "Values",
      desc: "Safety, transparency, respect, reliability, and professional development guide every decision we make.",
      iconBg: "bg-blue-500/10",
      iconClass: "text-blue-400",
    },
  ] as const;

  const coreValues = [
    {
      icon: Shield,
      title: "Safety First",
      desc: "Ensuring the safety and well-being of seafarers is our top priority, with rigorous vetting and compliance procedures.",
      iconBg: "bg-cyan-500/10",
      iconClass: "text-cyan-400",
    },
    {
      icon: Target,
      title: "Transparency",
      desc: "Open, honest communication in all our dealings, from contract terms to operational updates.",
      iconBg: "bg-teal-500/10",
      iconClass: "text-teal-400",
    },
    {
      icon: Heart,
      title: "Respect",
      desc: "Treating every seafarer and partner with dignity, recognizing the vital role they play in global maritime trade.",
      iconBg: "bg-blue-500/10",
      iconClass: "text-blue-400",
    },
    {
      icon: TrendingUp,
      title: "Development",
      desc: "Supporting continuous professional growth through training opportunities and career advancement.",
      iconBg: "bg-cyan-500/10",
      iconClass: "text-cyan-400",
    },
  ] as const;

  const leadership = [
    {
      icon: Users,
      title: "Managing Director",
      badge: "Leadership",
      desc: "10+ years in maritime operations and crew management.",
      gradient: "from-cyan-500 to-teal-600",
    },
    {
      icon: Target,
      title: "Operations Director",
      badge: "Operations",
      desc: "Expert in crew deployment and vessel operations management.",
      gradient: "from-teal-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "HR Director",
      badge: "Human Resources",
      desc: "Dedicated to seafarer welfare and career development.",
      gradient: "from-blue-500 to-cyan-600",
    },
  ] as const;

  return (
    <div className="min-h-screen pb-16 relative">
      {/* Fixed background for the whole page */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${aboutHero})` }}
      />
      <div className="fixed inset-0 bg-black/40 z-0" />

      {/* ═══════════ HERO ═══════════ */}
      <section className="py-24 pt-32 relative flex items-center z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-animate">
          <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[400px] flex items-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroPhoto})` }}
            />
            {/* Elegant Gradient Overlays for Text Legibility and Aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 backdrop-blur-none" />
            <div className="absolute inset-0 bg-cyan-900/20 mix-blend-color" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_40%)]" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl text-center lg:text-left mx-auto lg:mx-0">

              <h1
                className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tight"
                data-testid="heading-about"
              >
                About AURA SEA
              </h1>
              <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90 drop-shadow-md">
                Maritime experience, digital innovation, and mental health awareness—where professionalism meets care
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        {/* ═══════════ MISSION / VISION / VALUES ═══════════ */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate">
              Mission, vision &amp; values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {missionVisionValues.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className={`glass-card h-full text-center scroll-animate scroll-animate-delay-${i + 1}`}
                    data-testid={`card-about-${item.title.toLowerCase()}`}
                  >
                    <CardHeader>
                      <div
                        className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mx-auto mb-2`}
                      >
                        <Icon className={`w-7 h-7 ${item.iconClass}`} />
                      </div>
                      <CardTitle className="font-headline text-xl font-medium">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="glass-card scroll-animate" data-testid="card-about-company">
              <CardHeader>
                <CardTitle
                  className="font-headline text-2xl sm:text-3xl font-semibold"
                  data-testid="heading-about-company"
                >
                  About the company
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p className="text-foreground/90 font-normal">Founded in April 2022 in Odesa, Ukraine</p>
                <p>
                  Aura Sea Crewing is a professional crewing agency established and operated by experienced seafarers.
                </p>
                <p>
                  We specialize in providing qualified and verified Ukrainian crew members for various vessel types,
                  including Container Ships, Bulk Carriers, General Cargo, VLCCs, Tankers, Yachts, and Passenger vessels.
                </p>
                <p>
                  Our operations are built on modern technology, efficiency, and accountability—ensuring shipowners receive
                  reliable and competent personnel, ready to join worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ═══════════ OUR SYSTEM & TECHNOLOGY — parallel columns ═══════════ */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <Card className="glass-card h-full flex flex-col scroll-animate" data-testid="card-our-system">
                <CardHeader className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <CardTitle
                      className="font-headline text-2xl sm:text-3xl font-semibold"
                      data-testid="heading-our-system"
                    >
                      Our system
                    </CardTitle>
                    <CardDescription className="text-base font-light leading-relaxed">
                      Aura Sea Crewing applies the newest generation of HR technologies and data-driven recruitment
                      algorithms tailored for the maritime industry. We utilize structured evaluation workflows that
                      include:
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-muted-foreground font-light flex-1">
                    {[
                      "Real-time database management and continuous updates",
                      "Automated verification of maritime documents and certificates",
                      "Competency-based interviewing and psychological assessment",
                      "Candidate scoring system based on performance and readiness",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm border-t border-border/60 pt-6 mt-auto">
                    This ensures every seafarer profile is authentic, current, and job-ready.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="glass-card h-full flex flex-col scroll-animate scroll-animate-delay-1"
                data-testid="card-technology"
              >
                <CardHeader className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <CardTitle
                      className="font-headline text-2xl sm:text-3xl font-semibold"
                      data-testid="heading-technology-innovation"
                    >
                      Technology &amp; innovation
                    </CardTitle>
                    <CardDescription className="text-base font-light leading-relaxed">
                      We implement modern HR standards, digital tracking systems, and automated analytics to improve every
                      stage of the crewing process. Our adaptive digital infrastructure allows us to:
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-muted-foreground font-light">
                    {[
                      "Locate and verify crew members globally",
                      "Reduce recruitment time and administrative workload",
                      "Maintain stable communication between shipowners and crew",
                      "Guarantee compliance with MLC 2006 and international labor standards",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ═══════════ CREW DATABASE & WELLBEING ═══════════ */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2
              className="font-headline text-3xl font-semibold text-center text-foreground scroll-animate"
              data-testid="heading-database-wellbeing"
            >
              Crew database &amp; wellbeing
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-card h-full scroll-animate" data-testid="card-crew-database">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="font-headline text-xl sm:text-2xl font-semibold">Our crew database</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground font-light leading-relaxed text-sm">
                  <p>
                    Our crew database includes over 500 verified professionals across all maritime positions and ranks.
                    Each profile is personally reviewed, regularly updated, and tracked for certification status and
                    contract availability. We maintain direct contact with every candidate, tracking contracts,
                    availability dates, and certification status.
                  </p>
                  <p>
                    Over the last three years, Aura Sea Crewing has successfully placed more than 200 Ukrainian seafarers
                    on vessels of different types, building long-term partnerships with trusted operators.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card h-full scroll-animate scroll-animate-delay-1" data-testid="card-wellbeing">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="font-headline text-xl sm:text-2xl font-semibold">
                    Wellbeing &amp; psychological support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    Beyond recruitment, Aura Sea Crewing is the first Ukrainian agency integrating psychological support
                    programs for seafarers and their families. We believe that mental stability and emotional balance are
                    critical for safe and effective work at sea.
                  </p>
                  <p className="text-sm font-medium text-foreground">Our certified psychological partners provide:</p>
                  <ul className="space-y-3 text-sm text-muted-foreground font-light">
                    {[
                      "Support and consultations for seafarers' spouses and relatives",
                      "Stress-resilience sessions for seafarers before and after contracts",
                      "Continuous mental health awareness integrated into our HR process",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm pt-2 border-t border-border/60">
                    This approach allows us not only to fill vacancies—but to build sustainable, motivated, and mentally
                    healthy maritime teams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ═══════════ CORE VALUES ═══════════ */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-core-values">
              Our core values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className={`glass-card h-full scroll-animate scroll-animate-delay-${Math.min(i + 1, 4)}`}
                    data-testid={`card-core-value-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${item.iconClass}`} />
                      </div>
                      <div>
                        <CardTitle className="font-headline text-lg font-medium mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-sm font-light leading-relaxed">{item.desc}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ LEADERSHIP ═══════════ */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-leadership">
              Leadership team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className={`glass-card text-center hover:scale-[1.02] transition-transform duration-300 scroll-animate scroll-animate-delay-${i + 1}`}
                    data-testid={`card-leadership-${item.badge.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <CardHeader className="items-center pb-2">
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} mb-4 flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <CardTitle className="font-headline text-lg font-medium">{item.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2 font-light text-xs w-fit mx-auto">
                        {item.badge}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
