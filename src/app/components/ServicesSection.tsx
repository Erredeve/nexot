'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const getServices = (translations: any) => [
  {
    title: translations.services.basicProjects.title,
    description: translations.services.basicProjects.description,
    imagePath: '/images/projetos-basicos.jpg'
  },
  {
    title: translations.services.accessStudies.title,
    description: translations.services.accessStudies.description,
    imagePath: '/images/estudos-acesso.jpg'
  },
  {
    title: translations.services.preOperational.title,
    description: translations.services.preOperational.description,
    imagePath: '/images/pre-operacionais.jpg'
  },
  {
    title: translations.services.r2Reports.title,
    description: translations.services.r2Reports.description,
    imagePath: '/images/relatorios-r2.jpg'
  },
  {
    title: translations.services.sgbdit.title,
    description: translations.services.sgbdit.description,
    imagePath: '/images/cadastramento.jpg'
  },
  {
    title: translations.services.renewableModeling.title,
    description: translations.services.renewableModeling.description,
    imagePath: '/images/modelagem-renovaveis.jpg'
  }
];

export default function ServicesSection() {
  const { translations } = useLanguage();
  const services = getServices(translations);

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            {translations.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
