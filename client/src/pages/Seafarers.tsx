import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, DollarSign, TrendingUp, Shield, Users, FileText, Anchor, Award, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import seafarerCrew from "@assets/stock_images/seafarer_crew_workin_81b3ed0a.jpg";

export default function Seafarers() {
  useScrollAnimation();

  const applicationSteps = [
    { number: "01", title: "Register Interest", description: "Check our Vacancies page for current openings and submit your application through our online form.", icon: FileText },
    { number: "02", title: "Interview & Assessment", description: "We'll review your qualifications and conduct an interview to understand your experience and career goals.", icon: Users },
    { number: "03", title: "Documentation", description: "Submit required certificates, medical examinations, and complete necessary paperwork with our support.", icon: Shield },
    { number: "04", title: "Joining Vessel", description: "We coordinate all travel arrangements, briefings, and ensure smooth joining process to your assigned vessel.", icon: Anchor },
  ];

  return (
    <div className="min-h-screen pb-16">

      {/* ═══════════ HERO — photo background ═══════════ */}
      <section className="py-24 pt-32 relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${seafarerCrew})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,30%,5%)]/90 via-[hsl(215,30%,5%)]/80 to-[hsl(215,30%,5%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300" data-testid="heading-seafarers">
            For Seafarers
          </h1>
          <p className="text-lg font-light max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
            Join AURA SEA and sail with reputable operators across container, bulk, tanker, and other trades—while building a career supported by fair processes and wellbeing-focused HR.
          </p>
        </div>
      </section>

      <div className="maritime-gradient">
      {/* ═══════════ WHAT WE OFFER — accent bg ═══════════ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-what-we-offer-you">
            What We Offer You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: FileText,
                title: "Fair Contracts",
                desc: "Clear contract terms with no hidden clauses. We ensure you understand every detail before signing.",
                iconBg: "bg-cyan-500/10",
                iconClass: "text-cyan-400",
                testId: "card-offer-fair-contracts",
              },
              {
                icon: DollarSign,
                title: "Timely Payment",
                desc: "Reliable, on-time salary payments every month. Your financial security is our priority.",
                iconBg: "bg-teal-500/10",
                iconClass: "text-teal-400",
                testId: "card-offer-timely-payment",
              },
              {
                icon: Shield,
                title: "Safe & Reputable Fleets",
                desc: "We partner only with established ship-owners who maintain high safety and operational standards.",
                iconBg: "bg-blue-500/10",
                iconClass: "text-blue-400",
                testId: "card-offer-safe-fleets",
              },
              {
                icon: CheckCircle,
                title: "Long-Term Cooperation",
                desc: "Opportunities for repeated contracts and career continuity with the same fleet.",
                iconBg: "bg-cyan-500/10",
                iconClass: "text-cyan-400",
                testId: "card-offer-long-term",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className={`glass-card h-full scroll-animate scroll-animate-delay-${i + 1}`}
                  data-testid={item.testId}
                >
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center mx-auto mb-2`}>
                      <Icon className={`w-6 h-6 ${item.iconClass}`} />
                    </div>
                    <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed text-center">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ WELLBEING & FAMILY SUPPORT ═══════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card scroll-animate border-teal-500/20 shadow-md shadow-teal-950/5 dark:shadow-teal-950/15">
            <CardHeader className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-teal-400" />
              </div>
              <div className="space-y-1 flex-1">
                <CardTitle
                  className="font-headline text-2xl sm:text-3xl font-semibold"
                  data-testid="heading-seafarers-wellbeing"
                >
                  Wellbeing &amp; family support
                </CardTitle>
                <CardDescription className="text-base font-light leading-relaxed pt-1">
                  Aura Sea Crewing is the first Ukrainian crewing agency integrating psychological support for seafarers and
                  their families. Mental stability and emotional balance matter for safe, effective work at sea—and we build
                  that into how we work with you.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-foreground mb-3">Through certified psychological partners we offer:</p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Support and consultations for spouses and relatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Stress-resilience sessions before and after contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Mental health awareness woven into our HR process</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ═══════════ CAREER PATH ═══════════ */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-career-path">
            Your Career Path with AURA SEA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card h-full scroll-animate border-cyan-500/20 shadow-md shadow-cyan-950/5 dark:shadow-cyan-950/15">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <CardTitle className="font-headline text-lg font-medium">Career Progression</CardTitle>
                  <CardDescription className="font-light pt-2 text-sm">
                    We support your professional advancement through:
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Opportunities to advance from junior to senior positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Regular performance assessments and career guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Priority consideration for matching openings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="glass-card h-full scroll-animate scroll-animate-delay-1 border-teal-500/20 shadow-md shadow-teal-950/5 dark:shadow-teal-950/15"
            >
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <CardTitle className="font-headline text-lg font-medium">Training &amp; Development</CardTitle>
                  <CardDescription className="font-light pt-2 text-sm">
                    Invest in your skills with our support:
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Information about training courses and certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Guidance on required qualifications for advancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Connections to approved training institutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS STEPS — dark with timeline ═══════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-how-process-works">
            How the Process Works
          </h2>

          <div className="timeline-line space-y-6">
            {applicationSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className={`flex gap-5 scroll-animate scroll-animate-delay-${i + 1}`}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center z-10 shadow-lg shadow-cyan-900/30">
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="flex-1 glass-card rounded-xl p-5 ml-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="font-light text-xs">{step.number}</Badge>
                      <h3 className="font-headline text-lg font-medium text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note box */}
          <div className="mt-12 scroll-animate">
            <div className="feature-row">
              <CheckCircle className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-headline text-base font-medium text-foreground mb-1">Important Note</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Active vacancies are regularly posted on our <Link href="/vacancies"><span className="text-cyan-400 hover:underline cursor-pointer">Vacancies page</span></Link>. When you find a matching position, submit your application and our team will review your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA — accent ═══════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-animate-scale">
          <Anchor className="w-14 h-14 mx-auto mb-6 text-teal-400 opacity-60" />
          <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground" data-testid="heading-cta-check-vacancies">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 font-light">
            Check our current vacancies or get in touch to learn more about opportunities with AURA SEA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/vacancies">
              <Button size="lg" className="font-normal" data-testid="button-view-vacancies">
                View Vacancies
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-normal" data-testid="button-contact-seafarers">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
