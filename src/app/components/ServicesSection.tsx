'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Estudos para Projetos Básicos',
    description: 'Estudos associados ao Projeto Básico de Empreendimentos da Rede Básica, solicitados pelo ONS.',
    imagePath: '/images/projetos-basicos.jpg'
  },
  {
    title: 'Estudos de Acesso',
    description: 'Estudos para Parecer de Acesso e integração à Rede Básica/Distribuição (geração hidráulica, térmica, fotovoltaica, eólica).',
    imagePath: '/images/estudos-acesso.jpg'
  },
  {
    title: 'Estudos Pré-Operacionais',
    description: 'Estudos para integração de instalações à Rede Básica na fase pré-operacional.',
    imagePath: '/images/pre-operacionais.jpg'
  },
  {
    title: 'Estudos para Relatórios R2',
    description: 'Estudos para emissão de relatórios técnicos de novas instalações da Rede Básica (Relatório R2 - detalhamento da alternativa de referência).',
    imagePath: '/images/relatorios-r2.jpg'
  },
  {
    title: 'Cadastramento SGBDIT',
    description: 'Cadastramento de equipamentos de pátio, sistemas de proteção e linhas de transmissão nas bases de dados do ONS.',
    imagePath: '/images/cadastramento.jpg'
  },
  {
    title: 'Modelagem de Usinas Renováveis',
    description: 'Modelagem de usinas renováveis para estudos de transitórios eletromagnéticos e eletromecânicos, incluindo controle centralizado e inversores/aerogeradores.',
    imagePath: '/images/modelagem-renovaveis.jpg'
  }
];

export default function ServicesSection() {
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
            Nossos Serviços
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
