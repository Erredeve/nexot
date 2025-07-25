'use client';

import { motion } from 'framer-motion';
import { ClockIcon, CheckBadgeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  const highlights = [
    {
      icon: ClockIcon,
      title: '10+ anos de experiência',
      description: 'Atuação consolidada no mercado nacional e internacional'
    },
    {
      icon: CheckBadgeIcon,
      title: 'Estudos certificados',
      description: 'Conformidade com as normas técnicas e regulatórias'
    },
    {
      icon: AcademicCapIcon,
      title: 'Rigor teórico',
      description: 'Equipe altamente qualificada e especializada'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Nexo Estudos Elétricos é uma empresa brasileira especializada em consultoria e elaboração de estudos elétricos,
            com atuação nacional e internacional. Nossa expertise no Sistema Interligado Nacional nos permite oferecer
            soluções técnicas precisas e eficientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-blue-50"
            >
              <item.icon className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
