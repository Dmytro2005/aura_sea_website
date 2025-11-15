import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, TrendingUp, Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="maritime-gradient py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6" data-testid="heading-about">
            About AURA SEA
          </h1>
          <p className="text-lg text-muted-foreground">
            Building the future of maritime crewing through expertise, innovation, and care
          </p>
        </div>
      </section>

      <section className="py-16 maritime-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-premium p-8 sm:p-12 mb-16 border-2">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-6" data-testid="heading-our-story">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground mb-4">
                AURA SEA was founded on a simple principle: maritime crewing should be built on trust, transparency, and genuine care for both ship-owners and seafarers. With over 10 years of combined maritime experience, our leadership team recognized the need for a modern approach to crew management.
              </p>
              <p className="text-muted-foreground mb-4">
                We specialize in providing qualified officers and ratings for tanker and bulk carrier fleets, leveraging our extensive database of 500+ experienced seafarers. Our "Fresh Vision" combines traditional maritime expertise with modern technology and processes, creating efficient, transparent operations that benefit everyone involved.
              </p>
              <p className="text-muted-foreground">
                Today, AURA SEA is more than a crewing agency – we're a growing holding company committed to continuous development and innovation in maritime services. We're building long-term partnerships that create value for ship-owners while advancing the careers of seafarers.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card text-center hover-elevate" data-testid="card-mission">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  To provide reliable crewing solutions through transparent communication, modern processes, and long-term partnerships built on trust and excellence
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover-elevate" data-testid="card-vision">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  To become a leading maritime holding company, continuously innovating in crew management and related services while maintaining our commitment to care
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover-elevate" data-testid="card-values">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-headline">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Safety, transparency, respect, reliability, and professional development guide every decision we make
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-8 text-center" data-testid="heading-core-values">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card hover-elevate">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <CardTitle className="font-headline text-lg">Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ensuring the safety and well-being of seafarers is our top priority, with rigorous vetting and compliance procedures
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-elevate">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0" />
                  <CardTitle className="font-headline text-lg">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Open, honest communication in all our dealings, from contract terms to operational updates
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-elevate">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                  <CardTitle className="font-headline text-lg">Respect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Treating every seafarer and partner with dignity, recognizing the vital role they play in global maritime trade
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-elevate">
                <CardHeader className="flex flex-row items-center gap-4">
                  <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                  <CardTitle className="font-headline text-lg">Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Supporting continuous professional growth through training opportunities and career advancement
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-8 text-center" data-testid="heading-leadership">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card text-center hover-elevate" data-testid="card-leader-managing">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="font-headline">Managing Director</CardTitle>
                  <Badge variant="secondary" className="mt-2 mx-auto">Leadership</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    10+ years in maritime operations and crew management
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card text-center hover-elevate" data-testid="card-leader-operations">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="font-headline">Operations Director</CardTitle>
                  <Badge variant="secondary" className="mt-2 mx-auto">Operations</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Expert in crew deployment and vessel operations management
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card text-center hover-elevate" data-testid="card-leader-hr">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="font-headline">HR Director</CardTitle>
                  <Badge variant="secondary" className="mt-2 mx-auto">Human Resources</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to seafarer welfare and career development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
