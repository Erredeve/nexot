#!/bin/bash

# Criar estrutura de diretórios
mkdir -p public/images/hero
mkdir -p public/images/services

# Download das imagens
# Hero
curl -o public/images/hero/background.jpg "https://images.unsplash.com/photo-1497435334941-8c899ee9e694?w=1920&q=80"

# Serviços
curl -o public/images/services/basic-projects.jpg "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
curl -o public/images/services/access-studies.jpg "https://images.unsplash.com/photo-1581094283545-5037c522a77c?w=800&q=80"
curl -o public/images/services/pre-operational.jpg "https://images.unsplash.com/photo-1581094283764-6f8cf7fd6175?w=800&q=80"
curl -o public/images/services/r2-reports.jpg "https://images.unsplash.com/photo-1581094283484-2d1d3ffb5b7c?w=800&q=80"
curl -o public/images/services/sgbdit.jpg "https://images.unsplash.com/photo-1581094283623-2d2d2d2d2b9f?w=800&q=80"
curl -o public/images/services/renewable-modeling.jpg "https://images.unsplash.com/photo-1581094283842-2d2d2d2d2b9e?w=800&q=80"
