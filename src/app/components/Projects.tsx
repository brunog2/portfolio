import { motion } from 'motion/react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

function ProjectCard({ title, description, image, tags, highlights, liveUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 dark:from-primary-400/20 dark:to-accent-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
      <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all h-full flex flex-col">
        <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 dark:from-primary-400/20 dark:to-accent-400/20 relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
            {description}
          </p>

          <ul className="space-y-2 mb-5">
            {highlights.map((highlight) => (
              <li key={highlight} className="text-sm text-foreground/80 leading-relaxed flex gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-400 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl hover:shadow-lg hover:shadow-primary-500/50 dark:hover:shadow-primary-400/30 transition-all font-semibold"
              >
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                Ver Projeto
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver codigo no GitHub"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-card border-2 border-border hover:border-primary-500 dark:hover:border-primary-400 rounded-xl transition-all font-semibold"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const projects: ProjectCardProps[] = [
    {
      id: 'marine-tour',
      title: 'Marine Tour',
      description: 'Desenvolvimento completo de aplicativo mobile para fomento do turismo local.',
      image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?auto=format&fit=crop&w=1200&q=80',
      tags: ['React Native', 'Expo', 'TypeScript', 'WebView', 'Deep Link'],
      highlights: [
        'App Android/iOS em React Native + Expo com TypeScript, focado em manutenibilidade e escalabilidade.',
        'Fluxo de pagamento de reservas com WebViews e atualização de status em tempo real.',
        'Integração com câmera, galeria, localização, mapas e deep link.'
      ],
      liveUrl: 'https://marinetour.com.br/',
      index: 0
    },
    {
      id: 'bspay',
      title: 'BSPay',
      description: 'Aplicativo mobile completo para gateway de pagamentos com foco em performance, segurança e escalabilidade.',
      image: 'https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=1200&q=80',
      tags: ['React Native', 'Expo', 'TypeScript', 'JWT', 'Pagamentos'],
      highlights: [
        'Arquitetura do app construída do zero com foco em evolução do produto e manutenção.',
        'Fluxo de pagamentos integrado a gateway externo com validação e estados em tempo real.',
        'Controle de sessão com JWT, persistência segura e renovação de tokens.',
        'Separação de responsabilidades e reaproveitamento de componentes para escala.'
      ],
      liveUrl: 'https://bspay.co/',
      index: 1
    },
    {
      id: 'rest-cotacao-seguros',
      title: 'REST - Cotação de Seguros',
      description: 'Aplicação Angular 20 para cotação de diferentes tipos de seguros.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
      tags: ['Angular 20', 'TypeScript', 'Reactive Forms', 'HttpClient', 'JWT'],
      highlights: [
        'Arquitetura frontend orientada a performance e escalabilidade.',
        'Gerenciamento de estado e formulários reativos com Angular Services.',
        'Integração com APIs via HttpClient e Interceptors para autorização com JWT.'
      ],
      index: 2
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 mb-6"
            >
              <FolderGit2 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Portfolio
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projetos & Cases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Projetos e cases relevantes que desenvolvi com foco em impacto, performance e escalabilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
