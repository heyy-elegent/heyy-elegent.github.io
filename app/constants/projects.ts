import { Project } from "../types";

// TODO: Move this to API
export const PROJECTS: Project[] = [
  {
    title: 'BGMI Marketplace',
    date: '2026',
    subtext: 'Microservices marketplace for buying & selling BGMI IDs \u2014 UPI escrow, real-time buyer-seller chat via API gateway, admin moderation. Deployed on Vercel.',
    url: 'https://bgmi-frontend.vercel.app',
    github: 'https://github.com/codeby-Lalit/bgmi-frontend',
    tech: ['Next.js', 'Node.js', 'API Gateway', 'UPI Escrow', 'WebSockets'],
    featured: true,
  },
  {
    title: 'Facial Emotion Recognition',
    date: '2025',
    subtext: 'VGG-style CNN (1.5M params) on FER2013 \u2014 classifies 7 emotions at \u224862\u201365% validation accuracy with a real-time webcam demo.',
    url: 'https://github.com/heyy-elegent/Face-Intelligence-Project',
    tech: ['TensorFlow/Keras', 'CNN', 'FER2013', 'OpenCV'],
  },
  {
    title: 'Age & Gender Prediction',
    date: '2025',
    subtext: 'End-to-end notebook (pandas + CNN) predicting age & gender from facial data with emotion-aware context and feature exploration.',
    url: 'https://github.com/heyy-elegent/age-gender-emotion-prediction',
    tech: ['Python', 'pandas', 'CNN', 'Visualization'],
  },
  {
    title: 'Stable Diffusion Image Gen',
    date: '2024',
    subtext: 'Gradio-powered Stable Diffusion v1.5 generator with 5 schedulers and auto GPU/CPU device detection.',
    tech: ['Stable Diffusion', 'Gradio', 'Python'],
  },
  {
    title: 'Weather App',
    date: '2024',
    subtext: 'Client-side weather app \u2014 current conditions, 5-day forecast & tips via the OpenWeatherMap API. Zero-build vanilla JS.',
    url: 'https://github.com/heyy-elegent/weather',
    tech: ['HTML/CSS/JS', 'OpenWeatherMap', 'REST'],
  },
  {
    title: 'Velox Manuscript Engine',
    date: '2023',
    subtext: 'Offline manuscript formatting engine \u2014 head/caption classification, publisher profiles, SHA-256 content integrity & explainable audit reports. HackNIMA 2026.',
    url: 'https://github.com/codeby-Lalit/velox',
    tech: ['Python', 'React', 'DOCX', 'Desktop EXE'],
  },
];