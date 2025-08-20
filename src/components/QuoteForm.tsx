import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    package: "",
    units: "",
    requirements: "",
    clearanceLevel: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Quote request submitted:", formData);
    
    toast({
      title: "Quote Request Submitted",
      description: "Our defense specialists will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      package: "",
      units: "",
      requirements: "",
      clearanceLevel: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-cyber">SECURE</span>{" "}
              <span className="text-foreground">QUOTE REQUEST</span>
            </h2>
            <p className="text-xl text-muted-foreground font-exo">
              Submit your requirements for a confidential defense procurement quote
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Security Notice */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="card-gradient border-cyber/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-exo text-cyber">
                    <Lock className="w-5 h-5" />
                    <span>Secure Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-neon mt-1" />
                    <div>
                      <h4 className="font-exo font-semibold text-sm text-foreground">Encrypted Transmission</h4>
                      <p className="text-xs text-muted-foreground">All data is transmitted using military-grade encryption</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-neon mt-1" />
                    <div>
                      <h4 className="font-exo font-semibold text-sm text-foreground">Confidential Review</h4>
                      <p className="text-xs text-muted-foreground">Only authorized defense personnel access your request</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-neon mt-1" />
                    <div>
                      <h4 className="font-exo font-semibold text-sm text-foreground">24-Hour Response</h4>
                      <p className="text-xs text-muted-foreground">Our specialists respond within one business day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="font-exo text-foreground">Package Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge variant="outline" className="w-full justify-start border-cyber/50 text-cyber">
                    Single Unit - ₹7,00,000
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start border-neon/50 text-neon">
                    Squad Pack - ₹33,00,000
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start border-destructive/50 text-destructive">
                    Defense Pack - ₹63,00,000
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="font-orbitron text-2xl text-foreground">Defense Procurement Request</CardTitle>
                  <CardDescription className="font-exo">
                    Provide your details for a customized ShadowEye deployment quote
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-exo font-semibold text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-background/50 border-border focus:border-cyber"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="organization" className="font-exo font-semibold text-foreground">
                          Organization *
                        </Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => handleInputChange("organization", e.target.value)}
                          className="bg-background/50 border-border focus:border-cyber"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-exo font-semibold text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-background/50 border-border focus:border-cyber"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-exo font-semibold text-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-background/50 border-border focus:border-cyber"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="package" className="font-exo font-semibold text-foreground">
                          Preferred Package
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("package", value)}>
                          <SelectTrigger className="bg-background/50 border-border focus:border-cyber">
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Single Unit - ₹7,00,000</SelectItem>
                            <SelectItem value="squad">Squad Pack - ₹33,00,000</SelectItem>
                            <SelectItem value="defense">Defense Pack - ₹63,00,000</SelectItem>
                            <SelectItem value="custom">Custom Configuration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="clearance" className="font-exo font-semibold text-foreground">
                          Security Clearance Level
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("clearanceLevel", value)}>
                          <SelectTrigger className="bg-background/50 border-border focus:border-cyber">
                            <SelectValue placeholder="Select clearance level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="confidential">Confidential</SelectItem>
                            <SelectItem value="secret">Secret</SelectItem>
                            <SelectItem value="top-secret">Top Secret</SelectItem>
                            <SelectItem value="other">Other / Pending</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements" className="font-exo font-semibold text-foreground">
                        Specific Requirements
                      </Label>
                      <Textarea
                        id="requirements"
                        value={formData.requirements}
                        onChange={(e) => handleInputChange("requirements", e.target.value)}
                        className="bg-background/50 border-border focus:border-cyber min-h-24"
                        placeholder="Describe your operational requirements, deployment environment, and any special features needed..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-cyber hover:bg-cyber-glow text-background text-white font-exo font-semibold glow-cyber pulse-cyber"
                    >
                      <Send className="w-5 h-5 mr-2  " />
                      Submit Secure Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}