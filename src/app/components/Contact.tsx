import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'brunofilho2k02@gmail.com',
      href: 'mailto:brunofilho2k02@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(82) 98854-5559',
      href: 'tel:+5582988545559',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Maceió, AL',
      href: null,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/brunog21',
      href: 'https://linkedin.com/in/brunog21',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/brunog2',
      href: 'https://github.com/brunog2',
      gradient: 'from-gray-500 to-gray-700'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 dark:bg-primary-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 dark:bg-accent-400/10 rounded-full blur-3xl"
      />
      
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/20 dark:border-primary-400/20 mb-6"
            >
              <Send className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Vamos Conversar
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Disponível para novos projetos e oportunidades. Vamos criar algo incrível juntos!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-xl blur-xl transition-all`} />
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="relative flex items-start gap-4 bg-card border border-border hover:border-primary-500/50 dark:hover:border-primary-400/50 rounded-xl p-6 transition-all h-full"
                  >
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${info.gradient}`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground mb-1">{info.label}</h3>
                      <p className="text-muted-foreground break-all">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="relative flex items-start gap-4 bg-card border border-border rounded-xl p-6 h-full">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${info.gradient}`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">{info.label}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <a
                href="mailto:brunofilho2k02@gmail.com"
                className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl hover:shadow-2xl hover:shadow-primary-500/50 dark:hover:shadow-primary-400/30 transition-all text-lg font-bold group"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Enviar Email
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="mt-6 text-muted-foreground">
              Respondo em até 24 horas
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
