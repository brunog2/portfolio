import { motion } from 'motion/react';
import { Calendar, Briefcase, TrendingUp } from 'lucide-react';

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
  results?: string[];
  skills: string;
  index: number;
}

function ExperienceItem({ period, title, company, description, results, skills, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 dark:from-primary-400 dark:via-accent-400 dark:to-primary-400" />
      
      {/* Timeline Dot */}
      <div className="absolute -left-2 top-2 w-4 h-4">
        <div className="absolute inset-0 bg-primary-500 dark:bg-primary-400 rounded-full animate-ping opacity-75" />
        <div className="relative bg-primary-600 dark:bg-primary-400 rounded-full w-4 h-4 border-2 border-background" />
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-400/10 dark:to-accent-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
        <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-3">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">{period}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold text-lg">{company}</span>
              </div>
            </div>
          </div>
          
          <p className="text-foreground/90 mb-6 leading-relaxed">{description}</p>
          
          {results && results.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <h4 className="font-bold text-foreground text-lg">Resultados Alcançados</h4>
              </div>
              <div className="grid gap-3">
                {results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="text-foreground/80 leading-relaxed">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {skills.split(', ').map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg hover:bg-primary-500/20 dark:hover:bg-primary-400/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const experiences = [
    {
      period: '07/2025 - presente',
      title: 'Desenvolvedor Full Stack',
      company: 'Instituto Atlântico',
      description: 'Atuo como Desenvolvedor Full Stack, alocado no projeto WavingTest, uma iniciativa inovadora focada na automação de testes. Participo ativamente do desenvolvimento de soluções escaláveis com foco em performance, testabilidade e usabilidade, utilizando tecnologias como Next.js, Tailwind CSS, NestJS e Java com Spring Boot.',
      results: [
        'Implementação de funcionalidades em aplicações Next.js, Node e Java com base em Clean Architecture e princípios SOLID e TDD',
        'Gerenciamento assíncrono de fila com Kafka',
        'Escrita e manutenção de testes unitários para garantir qualidade e segurança nas entregas',
        'Desenvolvimento de documentações e planejamentos técnicos',
        'Revisão de código da equipe',
        'Apoio técnico ao time de desenvolvimento',
        'Discovery e delivery de produto',
        'Contribuições contínuas para a melhoria da experiência do usuário e da estrutura de testes do projeto'
      ],
      skills: 'React, Next.js, Node, NestJS, Java, Spring Boot, TypeScript, Docker, Tailwind, AWS, Jest, JUnit, Mockito, Kafka'
    },
    {
      period: '10/2023 - 07/2025',
      title: 'Desenvolvedor Full Stack',
      company: 'Senai Alagoas',
      description: 'Atuei em projetos de alto impacto a nível nacional no Senai, incluindo o SSCP - Sistema Nacional de Certificação de Pessoas, a Plataforma Produtiva - Indicadores e Produtividade e SisBia - Sistema Banco de Itens de Avaliações.',
      results: [
        'Refatorei +15 relatórios em PDF, corrigindo regras de negócio e aprimorando a performance média em 70%',
        'Desenvolvi +5 relatórios em PDF na API com Handlebars e microsserviços utilizando NestJS',
        'Otimizei +10 consultas ao banco de dados na API, incluindo criação de views, reduzindo o tempo de resposta médio em 30%',
        'Desenvolvi e documentei +20 componentes reutilizáveis com testes unitários no front-end com Angular, StoryBook e Jest',
        'Desenvolvi +20 formulários reativos, incluindo formulários dinâmicos',
        'Desenvolvi 2 aplicativos Android completos, com autenticação e gerenciamento de sessão com Expo'
      ],
      skills: 'Angular, Jest, Jasmine, Karma, Reactive Forms, NestJS, TypeScript, RxJs, API, REST, GraphQL, PostgreSQL, React Native, Expo, Android, iOS, Docker, Git, Azure'
    },
    {
      period: '10/2022 - 10/2023',
      title: 'Desenvolvedor Mobile',
      company: 'Senai Alagoas',
      description: 'Atuei como desenvolvedor mobile, focado na criação e manutenção de aplicativos para Android e iOS.',
      results: [
        'Desenvolvi e fiz deploy de 2 projetos mobile completos, impactando +200 empresas usuárias',
        'Auxiliei a refinar tecnicamente +4 projetos novos para o setor',
        'Refiz um aplicativo completo, reduzindo os problemas de usabilidade e performance em 80%'
      ],
      skills: 'React Native, Expo, TypeScript, Android, iOS'
    },
    {
      period: '04/2022 - 10/2022',
      title: 'DevOps',
      company: 'Senai Alagoas',
      description: 'Atuei como DevOps, sendo responsável pelo gerenciamento, monitoramento e manutenção da infraestrutura de aplicações e servidores.',
      results: [
        'Automatizei +10 projetos implementando pipelines de CI/CD',
        'Implementei serviços de observabilidade com Grafana e Kibana, aprimorando o monitoramento de +20 projetos',
        'Implementei +10 serviços de proxy reverso com Nginx, incluindo implementação de certificados SSL'
      ],
      skills: 'Linux, Docker, Git, Nginx, Grafana, Azure, Python, SQL'
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 dark:bg-accent-400/10 border border-accent-500/20 dark:border-accent-400/20 mb-6"
            >
              <span className="text-sm font-medium text-accent-700 dark:text-accent-300">
                💼 Carreira
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 dark:from-accent-400 dark:to-primary-400 bg-clip-text text-transparent mb-6">
              Experiência Profissional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Minha trajetória construindo soluções de impacto
            </p>
          </div>
          
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
