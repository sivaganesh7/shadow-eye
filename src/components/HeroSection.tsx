import { Button } from "@/components/ui/button";
import { Shield, Eye, Zap } from "lucide-react";
import shadoweyeHero from "@/assets/shadoweye-hero.jpg";
import commandCenterBg from "@/assets/command-center-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${commandCenterBg})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyber-blue">
                <Shield className="w-6 h-6" />
                <span className="font-exo text-sm font-medium tracking-wider uppercase">
                  Innosquare Defense Technologies
                </span>
              </div>
              
              <h1 className="font-orbitron text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-cyber">SHADOW</span>
                <span className="text-foreground">EYE</span>
                <br />
                <span className="text-neon text-4xl lg:text-5xl">SENTINEL</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-exo leading-relaxed">
                Revolutionizing Defense with{" "}
                <span className="text-cyber font-semibold">Autonomous Robotics</span>
                <br />
                AI-Powered Threat Detection • 360° Surveillance • Military-Grade Security
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 card-gradient p-4 rounded-lg border border-cyber/20">
                <Eye className="w-8 h-8 text-cyber" />
                <div>
                  <h3 className="font-exo font-semibold text-sm">360° Vision</h3>
                  <p className="text-xs text-muted-foreground">Thermal + Night</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 card-gradient p-4 rounded-lg border border-cyber/20">
                <Zap className="w-8 h-8 text-neon" />
                <div>
                  <h3 className="font-exo font-semibold text-sm">Edge AI</h3>
                  <p className="text-xs text-muted-foreground">Real-time Processing</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 card-gradient p-4 rounded-lg border border-cyber/20">
                <Shield className="w-8 h-8 text-destructive" />
                <div>
                  <h3 className="font-exo font-semibold text-sm">Bomb Disposal</h3>
                  <p className="text-xs text-muted-foreground">Robotic Arm</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue-glow text-white font-exo font-semibold text-lg px-8 py-4 glow-cyber pulse-cyber">
                Watch Demo
              </Button>
              <Button variant="outline" size="lg" className="border-cyber text-cyber hover:bg-cyber/10 font-exo font-semibold text-lg px-8 py-4">
                Request Quote
              </Button>
            </div>
          </div>

          {/* Right Column - Robot Image */}
          <div className="relative">
            <div className="relative scan-line rounded-2xl overflow-hidden">
              <img 
                src={shadoweyeHero} 
                alt="ShadowEye Sentinel - Autonomous Defense Robot"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 card-gradient p-4 rounded-lg border border-cyber/20 glow-cyber">
              <div className="text-center">
                <div className="font-orbitron text-2xl font-bold text-cyber">24/7</div>
                <div className="text-xs text-muted-foreground font-exo">Autonomous Guard</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 card-gradient p-4 rounded-lg border border-cyber/20 glow-cyber">
              <div className="text-center">
                <div className="font-orbitron text-2xl font-bold text-neon">99.9%</div>
                <div className="text-xs text-muted-foreground font-exo">Detection Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyber animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}