import { motion } from 'motion/react';
import { Code2, Server, Smartphone, Cloud, Cog, Zap } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  index: number;
}

function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400 opacity-0 group-hover:opacity-20 rounded-lg blur transition-all" />
      <div className="relative px-4 py-3 bg-card/90 border border-primary-500/20 dark:border-primary-400/20 hover:border-primary-500/60 dark:hover:border-primary-400/60 rounded-lg transition-all text-center">
        <span className="font-semibold text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const skillCategories = [
    {
      title: 'Front-end',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'RxJS', 'Storybook', 'Jest']
    },
    {
      title: 'Back-end',
      icon: Server,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'REST API', 'GraphQL', 'Kafka', 'PostgreSQL', 'Handlebars']
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      gradient: 'from-green-500 to-emerald-500',
      skills: ['React Native', 'Expo', 'Android', 'iOS']
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      gradient: 'from-orange-500 to-red-500',
      skills: ['Docker', 'CI/CD', 'Azure', 'AWS', 'Git', 'Nginx', 'Linux', 'Grafana', 'Kibana']
    },
    {
      title: 'Metodologias',
      icon: Cog,
      gradient: 'from-indigo-500 to-blue-500',
      skills: ['Scrum', 'Clean Architecture', 'SOLID', 'TDD', 'Microsserviços', 'Code Review']
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 dark:bg-accent-400/10 border border-accent-500/20 dark:border-accent-400/20 mb-6"
            >
              <Zap className="w-4 h-4 text-accent-600 dark:text-accent-400" />
              <span className="text-sm font-semibold text-foreground">
                Stack
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Competências Técnicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologias e ferramentas que domino e utilizo em meus projetos
            </p>
          </div>
          
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="relative group/category"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 dark:from-primary-400/5 dark:to-accent-400/5 rounded-2xl blur-xl opacity-0 group-hover/category:opacity-100 transition-all" />
                <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {category.title}
                    </h3>
                    <div className={`ml-auto h-1 w-20 rounded-full bg-gradient-to-r ${category.gradient} hidden md:block`} />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill}
                        name={skill}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-400/20 dark:to-cyan-400/20 rounded-xl blur-xl" />
              <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
                <div className="text-muted-foreground">Tecnologias Dominadas</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-400/20 dark:to-pink-400/20 rounded-xl blur-xl" />
              <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
                <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">4+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 dark:from-green-400/20 dark:to-emerald-400/20 rounded-xl blur-xl" />
              <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">∞</div>
                <div className="text-muted-foreground">Aprendizado Contínuo</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
