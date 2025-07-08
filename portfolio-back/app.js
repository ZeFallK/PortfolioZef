// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// 1) données "social links"
const socialLinks = [
  { href: '/resume.pdf', label: 'Mon CV', icon: 'file' },
  { href: 'https://linkedin.com/in/tonprofil', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://github.com/tonpseudo',      label: 'GitHub',   icon: 'github' },
];

// 2) données "projets"
const projects = [
  {
    title: 'Projet 1',
    description: 'Brève description du projet 1.',
    url: 'https://lien-projet-1.com',
  },
  // → duplique cet objet pour chaque projet
];

// API endpoints
app.get('/api/social-links', (_, res) => res.json(socialLinks));
app.get('/api/projects',     (_, res) => res.json(projects));

  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (_, res) =>
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  );


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server lancé sur le port ${PORT}`));
