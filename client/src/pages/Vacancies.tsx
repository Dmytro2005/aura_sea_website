import { useState } from "react";
import VacancyCard from "@/components/VacancyCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Vacancies() {
  const [selectedVacancy, setSelectedVacancy] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    rank: "",
    email: "",
    phone: "",
    nationality: "",
    experience: "",
    message: "",
    gdprConsent: false,
  });

  const vacancies = [
    {
      id: "chief-officer-tanker",
      title: "Chief Officer",
      vesselType: "Oil/Chemical Tanker",
      salary: "$6,000 - $8,000/month",
      contractLength: "6 months",
      description: "Experienced Chief Officer needed for modern chemical tanker fleet. Must hold valid STCW II/2 certificate, minimum 2 years experience as Chief Officer on tankers, and current ECDIS certification.",
    },
    {
      id: "second-engineer-bulk",
      title: "Second Engineer",
      vesselType: "Bulk Carrier",
      salary: "$5,500 - $7,000/month",
      contractLength: "6 months",
      description: "Second Engineer required for Handymax bulk carrier. Valid STCW III/2 certificate, experience with MAN B&W or Wartsila engines, and good knowledge of ISM/ISPS codes required.",
    },
    {
      id: "third-officer-tanker",
      title: "Third Officer",
      vesselType: "Product Tanker",
      salary: "$3,500 - $4,500/month",
      contractLength: "5-6 months",
      description: "Third Officer position on modern product tanker fleet. STCW II/1 certificate, minimum 12 months sea service as Third Officer, and tanker familiarization course completion required.",
    },
  ];

  const handleApply = (vacancyTitle: string) => {
    setSelectedVacancy(vacancyTitle);
    setFormData({ ...formData, rank: vacancyTitle });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Vacancy Application Submitted:", {
      ...formData,
      vacancy: selectedVacancy,
    });

    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedVacancy(null);
      setFormData({
        fullName: "",
        rank: "",
        email: "",
        phone: "",
        nationality: "",
        experience: "",
        message: "",
        gdprConsent: false,
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="maritime-gradient py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6" data-testid="heading-vacancies">
            Current Vacancies
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Join our partner fleets on tanker and bulk carrier vessels
          </p>
          <p className="text-lg text-foreground">
            Review our current openings below and submit your application for positions matching your qualifications
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vacancies.map((vacancy) => (
              <VacancyCard
                key={vacancy.id}
                title={vacancy.title}
                vesselType={vacancy.vesselType}
                salary={vacancy.salary}
                contractLength={vacancy.contractLength}
                description={vacancy.description}
                onApply={() => handleApply(vacancy.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedVacancy !== null && !showSuccess} onOpenChange={(open) => !open && setSelectedVacancy(null)}>
        <DialogContent className="glass-card max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="dialog-vacancy-application">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">Apply for {selectedVacancy}</DialogTitle>
            <DialogDescription>
              Please fill out the application form below. We'll review your profile and contact you if you're a good fit.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                data-testid="input-full-name"
              />
            </div>

            <div>
              <Label htmlFor="rank">Rank Applying For *</Label>
              <Input
                id="rank"
                required
                value={formData.rank}
                onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                data-testid="input-rank"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                data-testid="input-email"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone / Messaging Contact</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                data-testid="input-phone"
              />
            </div>

            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                data-testid="input-nationality"
              />
            </div>

            <div>
              <Label htmlFor="experience">Years of Experience in Rank</Label>
              <Input
                id="experience"
                type="number"
                min="0"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                data-testid="input-experience"
              />
            </div>

            <div>
              <Label htmlFor="message">Message / Link to Online CV</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Add any additional information or a link to your online CV/resume"
                data-testid="textarea-message"
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="gdpr"
                required
                checked={formData.gdprConsent}
                onCheckedChange={(checked) => setFormData({ ...formData, gdprConsent: checked as boolean })}
                data-testid="checkbox-gdpr"
              />
              <Label htmlFor="gdpr" className="text-sm leading-tight cursor-pointer">
                I consent to AURA SEA storing and processing my personal data for recruitment purposes in accordance with the{" "}
                <Link href="/privacy"><span className="text-primary hover:underline">Privacy Policy</span></Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              data-testid="button-submit-application"
            >
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="glass-card max-w-md" data-testid="dialog-success">
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h3 className="font-headline text-2xl font-bold mb-2">Thank you for your submission</h3>
            <p className="text-muted-foreground">
              We've received your application and will review it shortly. If you're a good match, we'll contact you via email.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
