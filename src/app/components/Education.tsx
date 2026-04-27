import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

interface EducationItemProps {
  period: string;
  degree: string;
  institution: string;
  index: number;
}

function EducationItem({ period, degree, institution, index }: EducationItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-400/10 dark:to-accent-400/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
      <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 dark:from-primary-500 dark:to-accent-500">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">{period}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{degree}</h3>
            <p className="text-muted-foreground font-medium">{institution}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface CertificateItemProps {
  name: string;
  issuer: string;
  index: number;
}

function CertificateItem({ name, issuer, index }: CertificateItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-primary-500/10 dark:from-accent-400/10 dark:to-primary-400/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all" />
      <div className="relative bg-card border border-border rounded-lg p-4 hover:border-accent-500/50 dark:hover:border-accent-400/50 transition-all">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-accent-500/10 dark:bg-accent-400/10 flex-shrink-0">
            <Award className="w-5 h-5 text-accent-600 dark:text-accent-400" />
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-1">{name}</h4>
            <p className="text-sm text-muted-foreground">{issuer}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
  const education = [
    {
      period: '09/2021 - 12/2026',
      degree: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade Federal de Alagoas'
    },
    {
      period: '03/2017 - 04/2021',
      degree: 'Técnico em Informática para Internet',
      institution: 'Instituto Federal de Alagoas'
    }
  ];

  const certificates = [
    { name: 'Docker', issuer: 'Full Cycle' },
    { name: 'SOLID Express', issuer: 'Full Cycle' },
    { name: 'Fundamentos de Arquitetura de Software', issuer: 'Full Cycle' }
  ];

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 mb-6"
            >
              <BookOpen className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Educação
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Formação & Certificados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Minha jornada de aprendizado e qualificação profissional
            </p>
          </motion.div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400 rounded-full" />
              Formação Acadêmica
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <EducationItem key={index} {...edu} index={index} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-accent-500 to-primary-500 dark:from-accent-400 dark:to-primary-400 rounded-full" />
              Certificados
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <CertificateItem key={index} {...cert} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
