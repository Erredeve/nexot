'use client';

import { motion } from 'framer-motion';
import { RocketLaunchIcon, LightBulbIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function CompanyValues() {
  const values = [
    {
      icon: RocketLaunchIcon,
      title: 'Missão',
      description: 'Fornecer soluções técnicas de excelência em estudos elétricos, contribuindo para o desenvolvimento do setor elétrico nacional e internacional.'
    },
    {
      icon: LightBulbIcon,
      title: 'Visão',
      description: 'Ser referência em consultoria de estudos elétricos, reconhecida pela qualidade, confiabilidade e inovação de nossas soluções.'
    },
    {
      icon: HeartIcon,
      title: 'Valores',
      description: 'Excelência técnica, compromisso com o cliente, inovação, ética e sustentabilidade.'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossos Diferenciais
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-blue-800/50 backdrop-blur-sm"
            >
              <value.icon className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="text-blue-100">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
