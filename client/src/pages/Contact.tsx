import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    gdprConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Contact Form Submitted:", formData);

    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        gdprConsent: false,
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="maritime-gradient py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6" data-testid="heading-contact">
            Contact AURA SEA
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Get in touch with our team
          </p>
          <p className="text-lg text-foreground">
            Whether you're a ship-owner looking for reliable crew management or a seafarer interested in opportunities, we're here to help
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  {showSuccess ? (
                    <div className="text-center py-12" data-testid="success-message">
                      <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                      <h3 className="font-headline text-2xl font-bold mb-2">Thank you for your submission</h3>
                      <p className="text-muted-foreground">
                        We've received your message and will get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          data-testid="input-name"
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
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          data-testid="input-phone"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          data-testid="input-subject"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                          I consent to AURA SEA storing and processing my personal data in accordance with the{" "}
                          <Link href="/privacy"><span className="text-primary hover:underline">Privacy Policy</span></Link>
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        data-testid="button-submit-contact"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@aurasea.com" className="text-muted-foreground hover:text-primary" data-testid="contact-email">
                        info@aurasea.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary" data-testid="contact-phone">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground" data-testid="contact-address">
                        AURA SEA Maritime Services<br />
                        Maritime Business Center<br />
                        Harbor District, Port City
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-950 dark:to-blue-900 rounded-lg flex items-center justify-center" data-testid="map-placeholder">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Map Location</p>
                      <p className="text-xs text-muted-foreground mt-1">Interactive map will be added here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
