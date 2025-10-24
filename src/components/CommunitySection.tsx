import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Twitter } from "lucide-react";
import cheemsCharacter from "@/assets/cheems-character.png";

const socialLinks = [
  { name: "Telegram", icon: MessageCircle, color: "hsl(188 100% 43%)", emoji: "💬" },
  { name: "Discord", icon: Users, color: "hsl(280 80% 60%)", emoji: "🎮" },
  { name: "X (Twitter)", icon: Twitter, color: "hsl(37 100% 64%)", emoji: "🐦" },
];

export const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, hsl(37 100% 64%) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl font-display text-center mb-8 text-glow-gold"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Join the Party! 🎉
        </motion.h2>

        <motion.p
          className="text-xl text-center text-muted-foreground mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Connect with fellow Cheems enthusiasts worldwide
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Dancing Cheems */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.img
              src={cheemsCharacter}
              alt="Cheems Dancing"
              className="w-full max-w-md mx-auto"
              animate={{
                rotate: [-5, 5, -5],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Floating emojis */}
            {["😂", "🚀", "🔥", "💎", "🌙"].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <div className="space-y-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-20 text-xl font-bold group relative overflow-hidden"
                  style={{
                    borderColor: social.color,
                    borderWidth: '2px',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                  <social.icon className="mr-3 w-8 h-8" style={{ color: social.color }} />
                  <span className="flex-1">{social.name}</span>
                  <span className="text-3xl">{social.emoji}</span>
                  <motion.div
                    className="absolute inset-0 border-4 rounded-md opacity-0 group-hover:opacity-100"
                    style={{ borderColor: social.color }}
                    initial={false}
                    whileHover={{
                      boxShadow: `0 0 30px ${social.color}80`,
                    }}
                  />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
        >
          {[
            { value: "100K+", label: "Holders" },
            { value: "$50M+", label: "Market Cap" },
            { value: "24/7", label: "Community" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <motion.p
                className="text-4xl md:text-5xl font-display text-primary"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                {stat.value}
              </motion.p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
