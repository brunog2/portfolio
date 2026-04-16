import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Bruno Gomes
            </span>
          </div>

          <p className="text-muted-foreground text-center max-w-md">
            Desenvolvedor Full Stack apaixonado por criar soluções elegantes e escaláveis
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="mailto:brunofilho2k02@gmail.com"
              className="p-3 bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 rounded-lg hover:bg-primary-500/20 dark:hover:bg-primary-400/20 hover:scale-110 transition-all group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/brunog21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 rounded-lg hover:bg-primary-500/20 dark:hover:bg-primary-400/20 hover:scale-110 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/brunog2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 rounded-lg hover:bg-primary-500/20 dark:hover:bg-primary-400/20 hover:scale-110 transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-8 border-t border-border w-full">
            <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} Bruno Gomes.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-pulse" /> e muito código
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
