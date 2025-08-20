import { Brain, Camera, Shield, Plane, Zap, Satellite, Battery, Lock, Mic, Package } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Threat Detection",
    description: "Advanced machine learning algorithms differentiate between humans, animals, and drones with 99.9% accuracy",
    color: "text-cyber"
  },
  {
    icon: Camera,
    title: "360° Thermal + Night Vision",
    description: "Operates flawlessly in pitch darkness, fog, or smoke conditions with military-grade thermal imaging",
    color: "text-neon"
  },
  {
    icon: Shield,
    title: "Autonomous Bomb Disposal",
    description: "Extendable robotic arm with precision handling capabilities for explosive ordnance disposal",
    color: "text-destructive"
  },
  {
    icon: Plane,
    title: "Drone Integration",
    description: "Seamlessly syncs with mini surveillance drones for comprehensive aerial and ground coverage",
    color: "text-cyber"
  },
  {
    icon: Satellite,
    title: "Multi-Sensor Fusion",
    description: "Combines GPS, LiDAR, radar, and infrared sensors for ultra-precise environmental mapping",
    color: "text-neon"
  },
  {
    icon: Zap,
    title: "Edge AI Processing",
    description: "Processes threats in real-time without internet dependency using onboard neural processors",
    color: "text-cyber"
  },
  {
    icon: Battery,
    title: "Self-Charging Docking",
    description: "Automatically returns to base for charging when battery levels reach preset thresholds",
    color: "text-neon"
  },
  {
    icon: Lock,
    title: "Encrypted Communications",
    description: "Military-grade AES-256 encryption ensures secure data transfer and command protocols",
    color: "text-destructive"
  },
  {
    icon: Mic,
    title: "Voice Command Control",
    description: "Natural language processing allows soldiers to control via simple voice commands",
    color: "text-cyber"
  },
  {
    icon: Package,
    title: "Modular Add-ons",
    description: "Attach specialized payloads: signal jammers, first-aid kits, reconnaissance equipment",
    color: "text-neon"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-cyber">ADVANCED</span>{" "}
            <span className="text-foreground">CAPABILITIES</span>
          </h2>
          <p className="text-xl text-muted-foreground font-exo max-w-3xl mx-auto">
            ShadowEye Sentinel combines cutting-edge AI, advanced robotics, and military-grade hardware 
            to deliver unprecedented autonomous defense capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group card-gradient p-8 rounded-xl border border-border hover:border-cyber/50 transition-all duration-300 hover:glow-cyber"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="font-exo text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Scan line effect on hover */}
                <div className="scan-line h-1 w-full bg-gradient-to-r from-transparent via-cyber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Defense Applications */}
        <div className="mt-24">
          <h3 className="font-orbitron text-3xl font-bold text-center mb-12">
            <span className="text-neon">DEFENSE</span>{" "}
            <span className="text-foreground">APPLICATIONS</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Border Security", desc: "Prevent infiltration" },
              { title: "Counter-Terrorism", desc: "Detect IEDs in urban zones" },
              { title: "Military Convoys", desc: "Scout ahead of vehicles" },
              { title: "Peacekeeping", desc: "Surveillance in conflict zones" }
            ].map((app, index) => (
              <div key={index} className="card-gradient p-6 rounded-lg border border-border text-center hover:border-cyber/50 transition-colors duration-300">
                <h4 className="font-exo font-bold text-lg text-foreground mb-2">{app.title}</h4>
                <p className="text-sm text-muted-foreground">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}