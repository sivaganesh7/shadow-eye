import { Play, Volume2, Maximize, Shield, Target, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import commandCenterBg from "@/assets/command-center-bg.jpg";

export default function DemoVideoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${commandCenterBg})` }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-cyber animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-cyber mb-4">
            <Shield className="w-6 h-6" />
            <span className="font-exo text-sm font-medium tracking-wider uppercase">
              Live Combat Simulation
            </span>
          </div>
          
          <h2 className="font-orbitron text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-cyber">SHADOWEYE</span>{" "}
            <span className="text-foreground">IN</span>
            <br />
            <span className="text-neon">ACTION</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-exo max-w-3xl mx-auto leading-relaxed">
            Watch our autonomous defense robot navigate complex terrain, detect threats, 
            and execute mission-critical operations in real battlefield conditions.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Video Placeholder with Military UI */}
            <div className="relative aspect-video bg-background rounded-2xl overflow-hidden border border-cyber/30 glow-cyber">
              {/* Simulated Video Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-military-green-dark via-background to-military-green-dark"></div>
              
              {/* HUD Overlay */}
              <div className="absolute inset-0 p-6">
                {/* Top HUD Elements */}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-neon text-sm font-mono">
                      <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
                      <span>LIVE FEED</span>
                    </div>
                    <div className="text-cyber text-xs font-mono">SECTOR: ALPHA-7 | THREAT LEVEL: HIGH</div>
                  </div>
                  
                  <div className="text-right space-y-1">
                    <div className="text-neon text-sm font-mono">BATTERY: 94%</div>
                    <div className="text-cyber text-xs font-mono">GPS: 34.0522°N 118.2437°W</div>
                  </div>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="bg-cyber-blue/90 hover:bg-cyber-blue text-white rounded-full w-24 h-24 glow-intense pulse-cyber group-hover:scale-110 transition-all duration-300"
                  >
                    <Play className="w-10 h-10 ml-1" fill="currentColor" />
                  </Button>
                </div>

                {/* Bottom HUD Elements */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-end">
                    {/* Radar Minimap */}
                    <div className="w-32 h-32 bg-background/60 rounded-full border border-cyber/50 relative">
                      <div className="absolute inset-2 border border-cyber/30 rounded-full">
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-neon rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        {/* Radar Sweep */}
                        <div className="absolute inset-0 border-l border-cyber/60 origin-center animate-spin" style={{ animationDuration: '3s' }}></div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-cyber font-mono">RADAR</div>
                    </div>

                    {/* Threat Indicators */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-destructive text-sm font-mono">
                        <Target className="w-4 h-4" />
                        <span>3 TARGETS DETECTED</span>
                      </div>
                      <div className="flex items-center space-x-2 text-neon text-sm font-mono">
                        <Radar className="w-4 h-4" />
                        <span>PERIMETER SECURE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scan Lines */}
                <div className="absolute inset-0 scan-line opacity-50"></div>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-cyber/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-cyber hover:text-cyber-glow">
                  <Play className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-cyber hover:text-cyber-glow">
                  <Volume2 className="w-4 h-4" />
                </Button>
                <span className="text-sm font-mono text-cyber">02:34 / 05:12</span>
              </div>
              
              <Button variant="ghost" size="sm" className="text-cyber hover:text-cyber-glow">
                <Maximize className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { label: "Mission Success Rate", value: "99.7%", color: "text-neon" },
              { label: "Response Time", value: "< 2 sec", color: "text-cyber" },
              { label: "Detection Range", value: "500m", color: "text-destructive" }
            ].map((stat, index) => (
              <div key={index} className="text-center card-gradient p-6 rounded-lg border border-border">
                <div className={`font-orbitron text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-exo">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground font-exo">
              Ready to revolutionize your defense capabilities?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue-glow text-white font-exo font-semibold px-8 py-4 glow-cyber">
                Schedule Live Demo
              </Button>
              <Button variant="outline" size="lg" className="border-cyber text-cyber hover:bg-cyber/10 font-exo font-semibold px-8 py-4">
                Download Specs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}