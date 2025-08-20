import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Users, Building } from "lucide-react";

const pricingTiers = [
  {
    name: "Single Unit",
    price: "₹7,00,000",
    description: "Perfect for specialized operations",
    icon: Shield,
    features: [
      "1 ShadowEye Sentinel Robot",
      "Standard AI Detection Package",
      "360° Camera System",
      "Basic Sensor Suite",
      "6 Months Warranty",
      "Remote Support",
      "Training Package (2 Days)"
    ],
    popular: false,
    buttonText: "Request Quote"
  },
  {
    name: "Squad Pack",
    price: "₹33,00,000",
    originalPrice: "₹35,00,000",
    discount: "5% OFF",
    description: "Ideal for tactical team deployment",
    icon: Users,
    features: [
      "5 ShadowEye Sentinel Robots",
      "Advanced AI Detection Suite",
      "Coordinated Swarm Intelligence",
      "Enhanced Communication Network",
      "Drone Integration Module",
      "12 Months Warranty",
      "24/7 Priority Support",
      "Training Package (5 Days)",
      "Field Deployment Support"
    ],
    popular: true,
    buttonText: "Deploy Squad"
  },
  {
    name: "Defense Pack",
    price: "₹63,00,000",
    originalPrice: "₹70,00,000",
    discount: "10% OFF",
    description: "Complete base security solution",
    icon: Building,
    features: [
      "10 ShadowEye Sentinel Robots",
      "Military-Grade AI Package",
      "Autonomous Perimeter Defense",
      "Command Center Integration",
      "Bomb Disposal Add-on Modules",
      "Signal Jamming Capabilities",
      "18 Months Warranty",
      "Dedicated Support Team",
      "Training Package (10 Days)",
      "Custom Integration Support",
      "Regular Software Updates"
    ],
    popular: false,
    buttonText: "Secure Base"
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-cyber">DEFENSE</span>{" "}
            <span className="text-foreground">PACKAGES</span>
          </h2>
          <p className="text-xl text-muted-foreground font-exo max-w-3xl mx-auto">
            Choose the right ShadowEye deployment for your security requirements. 
            All packages include comprehensive training and support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <Card 
                key={index}
                className={`relative overflow-hidden border-2 transition-all duration-300 hover:glow-cyber ${
                  tier.popular 
                    ? 'border-cyber bg-gradient-to-b from-card to-military-green-dark' 
                    : 'border-border card-gradient hover:border-cyber/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-cyber text-background px-4 py-1">
                    <span className="font-exo font-bold text-sm">MOST POPULAR</span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background/20 flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${tier.popular ? 'text-cyber' : 'text-neon'}`} />
                  </div>
                  
                  <CardTitle className="font-orbitron text-2xl font-bold text-foreground">
                    {tier.name}
                  </CardTitle>
                  
                  <CardDescription className="font-exo text-muted-foreground">
                    {tier.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="font-orbitron text-4xl font-black text-foreground">
                        {tier.price}
                      </span>
                      {tier.discount && (
                        <Badge variant="secondary" className="bg-neon/20 text-neon font-exo">
                          {tier.discount}
                        </Badge>
                      )}
                    </div>
                    
                    {tier.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {tier.originalPrice}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                      <span className="font-exo text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full font-exo font-semibold ${
                      tier.popular 
                        ? 'bg-cyber hover:bg-cyber-glow text-background glow-intense pulse-cyber' 
                        : 'bg-military-green hover:bg-military-green-light text-foreground'
                    }`}
                    size="lg"
                  >
                    {tier.buttonText}
                  </Button>
                </CardFooter>
                
                {tier.popular && (
                  <div className="scan-line absolute bottom-0 left-0 right-0"></div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="text-center card-gradient p-8 rounded-xl border border-border">
          <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4">
            <span className="text-cyber">SECURE</span> PROCUREMENT PROCESS
          </h3>
          <p className="text-muted-foreground font-exo mb-6 max-w-2xl mx-auto">
            All ShadowEye purchases go through a secure military procurement process. 
            Contact our defense specialists for custom configurations and bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber/10 font-exo">
              Schedule Demo
            </Button>
            <Button className="bg-neon hover:bg-neon/80 text-background font-exo">
              Contact Defense Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}