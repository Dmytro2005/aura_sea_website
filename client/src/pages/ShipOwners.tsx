import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Shield,
  FileCheck,
  CheckCircle,
  Ship,
  TrendingUp,
  Database,
  Cpu,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import portShips from "@assets/stock_images/maritime_shipping_po_c83c1900.jpg";

export default function ShipOwners() {
  useScrollAnimation();

  const processSteps = [
    { number: "01", title: "Requirements", description: "We discuss your fleet needs, vessel types, and specific crew requirements in detail." },
    { number: "02", title: "Shortlist", description: "Our team identifies qualified candidates from our extensive database of 500+ seafarers." },
    { number: "03", title: "Vetting", description: "Comprehensive background checks, certification verification, and qualification assessment." },
    { number: "04", title: "Deployment", description: "Complete documentation preparation, travel arrangements, and vessel joining coordination." },
    { number: "05", title: "Ongoing Support", description: "24/7 communication, contract management, and crew change coordination throughout the assignment." },
  ];

  return (
    <div className="min-h-screen pb-16">

      {/* ═══════════ HERO — photo ═══════════ */}
      <section className="py-24 pt-32 relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${portShips})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,30%,5%)]/90 via-[hsl(215,30%,5%)]/80 to-[hsl(215,30%,5%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300" data-testid="heading-ship-owners">
            For Ship-Owners
          </h1>
          <p className="text-lg font-light max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
            Comprehensive crew management solutions that reduce your operational complexity while ensuring you have qualified, reliable crew members.
          </p>
        </div>
      </section>

      <div className="maritime-gradient">
      {/* ═══════════ WHAT WE OFFER — accent ═══════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-what-we-offer">
            What We Offer
          </h2>

          <div className="scroll-animate">
            <div className="glass-premium rounded-xl p-6 sm:p-8">
              <p className="text-muted-foreground font-light text-lg mb-6">
                Aura Sea Crewing provides crew management for a wide range of vessel types—including container ships, bulk carriers, general cargo, VLCCs, tankers, yachts, and passenger vessels—handling the entire lifecycle from selection through deployment and ongoing support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { title: "Crew Selection & Recruitment", desc: "Access to experienced, verified Ukrainian officers and ratings matched to your vessel type and operational requirements." },
                  { title: "Documentation & Compliance", desc: "Complete handling of certifications, visas, medical examinations, and regulatory requirements." },
                  { title: "Travel & Logistics", desc: "End-to-end coordination of crew changes, flights, and vessel joining arrangements." },
                  { title: "Contract Management", desc: "Transparent contract administration, payroll processing, and crew welfare monitoring." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1 text-sm">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══════════ WHY SHIPOWNERS CHOOSE — accent ═══════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-why-aura-sea">
            Why Shipowners Choose Aura Sea Crewing
          </h2>

          <div className="space-y-4">
            {[
              { icon: Database, title: "Continuously updated verified database", desc: "A living pool of qualified seafarers with profiles kept current through structured evaluation and ongoing updates.", color: "cyan" },
              { icon: Cpu, title: "Advanced HR automation and analytics", desc: "Data-driven recruitment workflows, digital tracking, and analytics that shorten time-to-hire and reduce administrative load.", color: "teal" },
              { icon: Heart, title: "Integrated psychological support for families", desc: "Certified partners supporting seafarers and their relatives—an approach that strengthens resilience and stability across the crew lifecycle.", color: "blue" },
              { icon: MessageCircle, title: "Fast communication and professional reliability", desc: "Responsive coordination, clear updates, and dependable execution from shortlist through joining and beyond.", color: "cyan" },
              { icon: Ship, title: "Real maritime experience—managed by active seafarers", desc: "An agency run by people who understand life at sea, so requirements, risks, and expectations are interpreted accurately.", color: "teal" },
              { icon: TrendingUp, title: "Proven performance—200+ successful placements", desc: "Over three years of placing Ukrainian seafarers across vessel types, with long-term operator relationships built on results.", color: "blue" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`accent-border-card border-${item.color} scroll-animate scroll-animate-delay-${Math.min(i + 1, 4)}`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-${item.color}-500/10 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 text-${item.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ═══════════ COMPLIANCE — dark ═══════════ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-compliance-safety">
            Compliance & Safety
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "International Standards",
                desc: "Full compliance with STCW, MLC 2006, ISM Code, and all relevant international maritime regulations.",
                iconBg: "bg-cyan-500/10",
                iconClass: "text-cyan-400",
                testId: "card-compliance-standards",
              },
              {
                icon: FileCheck,
                title: "Rigorous Vetting",
                desc: "Comprehensive background checks, certificate verification, and competency assessments.",
                iconBg: "bg-teal-500/10",
                iconClass: "text-teal-400",
                testId: "card-compliance-vetting",
              },
              {
                icon: CheckCircle,
                title: "Medical Fitness",
                desc: "Current medical certificates from approved clinics, ensuring crew fitness for sea service.",
                iconBg: "bg-blue-500/10",
                iconClass: "text-blue-400",
                testId: "card-compliance-medical",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className={`glass-card h-full scroll-animate scroll-animate-delay-${i + 1}`}
                  data-testid={item.testId}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center mb-2`}>
                      <Icon className={`w-6 h-6 ${item.iconClass}`} />
                    </div>
                    <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS — ocean alt with timeline ═══════════ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-process">
            Process Overview
          </h2>

          <div className="timeline-line space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.number} className={`flex gap-5 scroll-animate scroll-animate-delay-${Math.min(i + 1, 4)}`}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center z-10 shadow-lg shadow-cyan-900/30">
                  <span className="text-xl font-bold text-foreground font-headline">{step.number}</span>
                </div>
                <div className="flex-1 glass-card rounded-xl p-5 ml-1">
                  <h3 className="font-headline text-lg font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-animate-scale">
          <Ship className="w-14 h-14 mx-auto mb-6 text-cyan-400 opacity-60" />
          <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground" data-testid="heading-cta-discuss">
            Let's Discuss Your Crewing Needs
          </h3>
          <p className="text-lg text-muted-foreground mb-8 font-light">
            Contact us today to learn how AURA SEA can become your reliable crewing partner.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "inline-flex font-normal")}
            data-testid="button-contact-ship-owners"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}
