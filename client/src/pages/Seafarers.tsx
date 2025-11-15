import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { CheckCircle, DollarSign, TrendingUp, Shield, Users, FileText, Anchor, Award } from "lucide-react";
import seafarerCrew from "@assets/stock_images/seafarer_crew_workin_81b3ed0a.jpg";

export default function Seafarers() {
  const applicationSteps = [
    {
      number: "01",
      title: "Register Interest",
      description: "Check our Vacancies page for current openings and submit your application through our online form",
      icon: FileText,
    },
    {
      number: "02",
      title: "Interview & Assessment",
      description: "We'll review your qualifications and conduct an interview to understand your experience and career goals",
      icon: Users,
    },
    {
      number: "03",
      title: "Documentation",
      description: "Submit required certificates, medical examinations, and complete necessary paperwork with our support",
      icon: Shield,
    },
    {
      number: "04",
      title: "Joining Vessel",
      description: "We coordinate all travel arrangements, briefings, and ensure smooth joining process to your assigned vessel",
      icon: Anchor,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${seafarerCrew})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/88 via-slate-900/85 to-blue-900/88" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg" data-testid="heading-seafarers">
            For Seafarers
          </h1>
          <p className="text-xl text-gray-200 mb-8 drop-shadow-md">
            Transparent contracts, timely payments, and real career growth
          </p>
          <p className="text-lg text-gray-100 drop-shadow-md">
            Join AURA SEA and work with reputable ship-owners on modern tanker and bulk carrier fleets while building a rewarding maritime career
          </p>
        </div>
      </section>

      <section className="py-16 maritime-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold text-center mb-12" data-testid="heading-what-we-offer-you">
            What We Offer to You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="glass-card text-center hover-elevate" data-testid="card-fair-contracts-seafarers">
              <CardHeader>
                <FileText className="w-10 h-10 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline text-lg">Fair Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clear contract terms with no hidden clauses. We ensure you understand every detail before signing
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover-elevate" data-testid="card-timely-payment-seafarers">
              <CardHeader>
                <DollarSign className="w-10 h-10 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline text-lg">Timely Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reliable, on-time salary payments every month. Your financial security is our priority
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover-elevate" data-testid="card-safe-fleets">
              <CardHeader>
                <Shield className="w-10 h-10 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline text-lg">Safe & Reputable Fleets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We partner only with established ship-owners who maintain high safety and operational standards
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover-elevate" data-testid="card-long-term-cooperation">
              <CardHeader>
                <CheckCircle className="w-10 h-10 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline text-lg">Long-Term Cooperation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Opportunities for repeated contracts and career continuity with the same fleet
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="font-headline text-3xl font-bold text-center mb-12" data-testid="heading-career-path">
            Your Career Path with AURA SEA
          </h2>

          <Card className="glass-card p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Career Progression
                </h3>
                <p className="text-muted-foreground mb-4">
                  We support your professional advancement through:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Opportunities to advance from junior to senior positions within our partner fleets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Regular performance assessments and career guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority consideration for openings matching your growing qualifications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  Training & Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Invest in your skills with our support:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Information about upcoming training courses and certification programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Guidance on required qualifications for career advancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Connections to approved training institutions and examination centers</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <h2 className="font-headline text-3xl font-bold text-center mb-12" data-testid="heading-how-process-works">
            How the Process Works
          </h2>

          <div className="space-y-6 mb-16">
            {applicationSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.number} className="glass-card hover-elevate" data-testid={`application-step-${step.number}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary">{step.number}</Badge>
                          <h3 className="font-headline text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card p-8 bg-blue-50 dark:bg-blue-950 mb-16">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-headline text-lg font-bold mb-2">Important Note</h3>
                <p className="text-muted-foreground">
                  The AURA SEA website currently serves primarily as a business card to introduce our services. Active vacancies are regularly posted on our <Link href="/vacancies"><span className="text-primary hover:underline cursor-pointer">Vacancies page</span></Link>. When you find a position that matches your qualifications, you can submit an application directly through our online form. Our team will review your profile and contact qualified candidates for the next steps.
                </p>
              </div>
            </div>
          </Card>

          <Card className="glass-premium p-12 text-center border-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent"></div>
            <div className="relative z-10">
              <Anchor className="w-16 h-16 mx-auto mb-6 text-primary drop-shadow-lg" />
              <h3 className="font-headline text-2xl font-bold mb-4" data-testid="heading-cta-check-vacancies">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Check our current vacancies or get in touch to learn more about opportunities with AURA SEA
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/vacancies">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg" data-testid="button-view-vacancies">
                    View Vacancies
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="glass-card border-2" data-testid="button-contact-seafarers">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
