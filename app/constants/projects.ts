import { Project } from "../types";

// TODO: Move this to API
export const PROJECTS: Project[] = [
  {
    title: 'BGMI Marketplace',
    date: '2026',
    subtext: 'Full-stack marketplace to buy & sell BGMI IDs with UPI escrow, real-time buyer-seller chat and admin moderation (microservices architecture).',
    url: 'https://bgmi-frontend.vercel.app',
    featured: true,
  },
  {
    title: 'Facial Emotion Recognition',
    date: '2025',
    subtext: 'CNN trained on FER2013 to classify human emotions \u2014 a PyTorch deep learning pipeline for real-time recognition.',
    url: 'https://github.com/heyy-elegent/Face-Intelligence-Project',
  },
  {
    title: 'Age & Gender Prediction',
    date: '2025',
    subtext: 'Jupyter notebook predicting age & gender from facial data with emotion context \u2014 pandas, CNN & visualization.',
    url: 'https://github.com/heyy-elegent/age-gender-emotion-prediction',
  },
  {
    title: 'Stable Diffusion Image Gen',
    date: '2024',
    subtext: 'Gradio-powered Stable Diffusion v1.5 generator with 5 schedulers and auto GPU/CPU device detection.',
  },
  {
    title: 'Weather App',
    date: '2024',
    subtext: 'Lightweight client-side weather web app \u2014 current conditions, 5-day forecast & tips via OpenWeatherMap API.',
    url: 'https://github.com/heyy-elegent/weather',
  },
  {
    title: 'Velox Manuscript Engine',
    date: '2023',
    subtext: 'Offline intelligent DOCX manuscript formatting engine \u2014 converts messy documents into publication-ready files, 100% offline.',
    url: 'https://github.com/codeby-Lalit/velox',
  },
];