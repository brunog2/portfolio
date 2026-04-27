import { motion } from 'motion/react';
import { Code2, Server, Smartphone, Cloud } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Front-end',
      description: 'Angular, React, Next.js, TypeScript, Tailwind CSS',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Back-end',
      description: 'Node.js, NestJS, Java, Spring Boot, GraphQL, REST',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      description: 'React Native, Expo, Android, iOS',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Docker, CI/CD, Azure, AWS, Nginx, Kafka',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 mb-6"
            >
              <span className="text-sm font-semibold text-foreground">
                👨‍💻 Sobre Mim
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformando ideias em soluções tecnológicas escaláveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 dark:from-primary-400/20 dark:to-accent-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
                <div className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">4+</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Anos de Experiência</h3>
                <p className="text-muted-foreground">
                  Desenvolvendo soluções web e mobile de alto impacto com tecnologias modernas
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 dark:from-accent-400/20 dark:to-primary-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
                <div className="text-5xl font-bold text-accent-600 dark:text-accent-400 mb-4">20+</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Projetos Concluídos</h3>
                <p className="text-muted-foreground">
                  Projetos nacionais de grande escala impactando milhares de usuários
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-primary-400/10 dark:to-accent-400/10 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Desenvolvedor Full Stack com <span className="font-bold text-primary-600 dark:text-primary-400">+4 anos de experiência</span> em 
                desenvolvimento de software, especialmente com <span className="font-semibold">Angular, Next.js, NestJS, Java, React Native, TypeScript e Docker</span>. 
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Atuação em projetos web e mobile de alto impacto, APIs REST/GraphQL, microsserviços 
                e filas com Kafka, com foco em <span className="font-bold text-accent-600 dark:text-accent-400">performance e escalabilidade</span>.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Conhecimento em CI/CD, Docker, Azure, AWS e metodologias ágeis com Scrum. 
                Atualmente cursando <span className="font-semibold">Bacharelado em Ciência da Computação</span> na Universidade Federal de Alagoas.
              </p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-xl blur transition-all`} />
                <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all h-full">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.gradient} mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
