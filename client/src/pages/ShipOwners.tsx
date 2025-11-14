import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Users, FileCheck, Headphones, Clock, CheckCircle, Ship, TrendingUp } from "lucide-react";

export default function ShipOwners() {
  const processSteps = [
    {
      number: "01",
      title: "Requirements",
      description: "We discuss your fleet needs, vessel types, and specific crew requirements in detail",
    },
    {
      number: "02",
      title: "Shortlist",
      description: "Our team identifies qualified candidates from our extensive database of 500+ seafarers",
    },
    {
      number: "03",
      title: "Vetting",
      description: "Comprehensive background checks, certification verification, and qualification assessment",
    },
    {
      number: "04",
      title: "Deployment",
      description: "Complete documentation preparation, travel arrangements, and vessel joining coordination",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "24/7 communication, contract management, and crew change coordination throughout the assignment",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="maritime-gradient py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6" data-testid="heading-ship-owners">
            For Ship-Owners
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your reliable, long-term crewing partner for tanker and bulk fleets
          </p>
          <p className="text-lg text-foreground">
            AURA SEA provides comprehensive crew management solutions that reduce your operational complexity while ensuring you have qualified, reliable crew members when and where you need them.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-center mb-12" data-testid="heading-what-we-offer">
            What We Offer
          </h2>
          
          <Card className="glass-card p-8 mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-6">
                AURA SEA specializes in crew management for tanker and bulk carrier fleets, handling the entire lifecycle from initial selection through deployment and ongoing support. Our services include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Crew Selection & Recruitment</h4>
                    <p className="text-sm text-muted-foreground">Access to experienced officers and ratings specifically qualified for tanker and bulk operations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Documentation & Compliance</h4>
                    <p className="text-sm text-muted-foreground">Complete handling of certifications, visas, medical examinations, and regulatory requirements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Travel & Logistics</h4>
                    <p className="text-sm text-muted-foreground">End-to-end coordination of crew changes, flights, and vessel joining arrangements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Contract Management</h4>
                    <p className="text-sm text-muted-foreground">Transparent contract administration, payroll processing, and crew welfare monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <h2 className="font-headline text-3xl font-bold text-center mb-12" data-testid="heading-compliance-safety">
            Compliance & Safety
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card hover-elevate" data-testid="card-international-standards">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-headline">International Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full compliance with STCW, MLC 2006, ISM Code, and all relevant international maritime regulations
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate" data-testid="card-vetting-process">
              <CardHeader>
                <FileCheck className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-headline">Rigorous Vetting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive background checks, certificate verification, and competency assessments for every crew member
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate" data-testid="card-medical-checks">
              <CardHeader>
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="font-headline">Medical Fitness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Current medical certificates from approved clinics, ensuring crew fitness for sea service
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="font-headline text-3xl font-bold text-center mb-12" data-testid="heading-process">
            Process Overview
          </h2>

          <div className="space-y-6 mb-16">
            {processSteps.map((step) => (
              <Card key={step.number} className="glass-card hover-elevate" data-testid={`process-step-${step.number}`}>
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white font-headline">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="font-headline text-3xl font-bold text-center mb-12" data-testid="heading-why-aura-sea">
            Why AURA SEA as Your Partner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="glass-card hover-elevate">
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="w-10 h-10 text-primary flex-shrink-0" />
                <CardTitle className="font-headline">Large Seafarer Pool</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Database of 500+ qualified officers and ratings with proven experience on tanker and bulk vessels, ensuring rapid crew availability
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate">
              <CardHeader className="flex flex-row items-center gap-4">
                <Headphones className="w-10 h-10 text-primary flex-shrink-0" />
                <CardTitle className="font-headline">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock availability for urgent crew changes, medical emergencies, repatriation, and operational support
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate">
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="w-10 h-10 text-primary flex-shrink-0" />
                <CardTitle className="font-headline">Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Proven track record of on-time crew delivery, complete documentation, and seamless crew changes that minimize vessel delays
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-elevate">
              <CardHeader className="flex flex-row items-center gap-4">
                <TrendingUp className="w-10 h-10 text-primary flex-shrink-0" />
                <CardTitle className="font-headline">Long-Term Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We focus on building lasting relationships, understanding your fleet's unique needs, and providing consistent crew quality
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card p-12 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <Ship className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h3 className="font-headline text-2xl font-bold mb-4" data-testid="heading-cta-discuss">
              Let's Discuss Your Crewing Needs
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn how AURA SEA can become your reliable crewing partner
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-testid="button-contact-ship-owners">
                Get in Touch
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
