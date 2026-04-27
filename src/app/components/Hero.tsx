import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/30 dark:bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/30 dark:bg-accent-400/20 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-primary-300 dark:to-accent-400 bg-clip-text text-transparent"
          >
            Bruno Gomes
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Desenvolvedor Full Stack
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500" />
              <span className="text-sm font-medium">Angular • React • Node.js • Java</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500" />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            +4 anos de experiência criando soluções escaláveis e de alto impacto. 
            Especializado em arquitetura limpa, microsserviços e desenvolvimento full stack.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="mailto:brunofilho2k02@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl hover:shadow-lg hover:shadow-primary-500/50 dark:hover:shadow-primary-400/30 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-2 font-semibold">
                <Mail className="w-5 h-5" />
                Entre em Contato
              </div>
            </a>
            <a
              href="https://linkedin.com/in/brunog21"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-card border-2 border-border hover:border-primary-500 dark:hover:border-primary-400 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Linkedin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                LinkedIn
              </div>
            </a>
            <a
              href="https://github.com/brunog2"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-card border-2 border-border hover:border-primary-500 dark:hover:border-primary-400 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Github className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                GitHub
              </div>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary-500/10 dark:bg-primary-400/10">
                <Phone className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </div>
              <span>(82) 98854-5559</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary-500/10 dark:bg-primary-400/10">
                <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </div>
              <span>Maceió, AL</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => scrollToSection('about')}
            aria-label="Rolar para a secao Sobre"
            className="mt-10 p-3 rounded-full bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 hover:bg-primary-500/20 dark:hover:bg-primary-400/20 transition-colors animate-bounce"
          >
            <ArrowDown className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
