import { motion } from 'motion/react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

function ProjectCard({ title, description, image, tags, liveUrl, githubUrl, index }: ProjectCardProps) {
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
                className="flex items-center justify-center gap-2 px-4 py-3 bg-card border-2 border-border hover:border-primary-500 dark:hover:border-primary-400 rounded-xl transition-all font-semibold"
              >
                <Github className="w-4 h-4" />
                {!liveUrl && 'GitHub'}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  // Array vazio para você adicionar seus projetos freelancer
  const projects: ProjectCardProps[] = [
    // Exemplo de como adicionar um projeto:
    // {
    //   title: 'Nome do Projeto',
    //   description: 'Descrição detalhada do projeto e seu impacto',
    //   image: 'URL_DA_IMAGEM',
    //   tags: ['React', 'TypeScript', 'Node.js'],
    //   liveUrl: 'https://projeto.com',
    //   githubUrl: 'https://github.com/usuario/repo',
    //   index: 0
    // }
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent mb-6">
              Projetos & Cases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alguns dos projetos freelancer e cases relevantes que desenvolvi
            </p>
          </div>
          
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-400/10 dark:to-accent-400/10 rounded-2xl blur-xl" />
              <div className="relative text-center py-20 bg-card border-2 border-dashed border-border rounded-2xl">
                <div className="inline-flex p-6 rounded-full bg-primary-500/10 dark:bg-primary-400/10 mb-6">
                  <FolderGit2 className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Seção de Projetos
                </h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto mb-2">
                  Preparada para adicionar seus projetos freelancer e cases relevantes
                </p>
                <p className="text-sm text-muted-foreground">
                  Edite <code className="px-2 py-1 bg-muted rounded text-primary-600 dark:text-primary-400 font-mono">/src/app/components/Projects.tsx</code>
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
