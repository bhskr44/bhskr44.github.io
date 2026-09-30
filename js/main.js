const projects = [
  {
    title: 'Play Store Screenshot Generator',
    type: 'Developer tool',
    description:
      'A dependency-free CLI that captures Flutter web builds in a mobile viewport and produces Play Store-ready screenshots with optional Android device frames.',
    stack: ['JavaScript', 'Node.js', 'Flutter'],
    source: 'https://github.com/bhskr44/playstore-screenshot-generator',
    image: 'image/projects/screenshot-generator.svg',
  },
  {
    title: 'Dynamic App Flutter',
    type: 'Mobile framework',
    description:
      'A server-driven Flutter UI framework that renders layouts, widgets, and actions from JSON APIs across Android, iOS, and web.',
    stack: ['Flutter', 'Dart', 'JSON APIs'],
    source: 'https://github.com/bhskr44/dynamic_app_flutter',
    image: 'image/projects/dynamic-app.svg',
  },
  {
    title: 'EPUB Reader with TTS',
    type: 'Mobile application',
    description:
      'A Flutter EPUB reader that parses book files, renders HTML content and styles, supports chapter navigation, and reads text aloud.',
    stack: ['Flutter', 'Dart', 'Text-to-Speech'],
    source: 'https://github.com/bhskr44/flutter_ebook_reader',
    image: 'image/projects/epub-reader.svg',
  },
  {
    title: 'WhatsApp API Dashboard',
    type: 'Web application',
    description:
      'A Laravel dashboard where clients can send and receive WhatsApp messages in real time through a familiar chat-style interface.',
    stack: ['Laravel', 'PHP', 'Real-time UI'],
    source: 'https://github.com/bhskr44/whatsapp-api-dashboard',
    image: 'image/projects/whatsapp-dashboard.svg',
  },
];

const grid = document.querySelector('#project-grid');
grid.innerHTML = projects
  .map(
    (project, index) => `<article class="project-card"><div class="project-image"><img src="${project.image}" alt="" loading="lazy" width="580" height="400" /></div><div class="project-content"><p class="project-number">0${
      index + 1
    } / ${project.type}</p><h3>${project.title}</h3><p>${
      project.description
    }</p><ul class="tags">${project.stack
      .map((item) => `<li>${item}</li>`)
      .join('')}</ul><a class="project-link" href="${
      project.source
    }" target="_blank" rel="noreferrer">View source <span>↗</span></a></div></article>`,
  )
  .join('');

const menu = document.querySelector('#site-nav');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.textContent = open ? 'Close' : 'Menu';
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = 'Menu';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
