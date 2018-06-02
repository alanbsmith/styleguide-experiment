const menus = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'guidelines',
    link: '/guidelines/',
    items: [
      { name: 'accessibility', link: '/guidelines/accessibility' },
      { name: 'purpose & values', link: '/guidelines/purpose-and-values' },
      { name: 'voice & tone', link: '/guidelines/voice-and-tone/' },
    ],
  },
  {
    name: 'styles',
    link: '/styles/',
    items: [
      { name: 'color', link: '/styles/color/' },
      { name: 'icons', link: '/styles/icons/' },
      { name: 'motion', link: '/styles/motion' },
      { name: 'spacing', link: '/styles/spacing' },
      { name: 'typography', link: '/styles/typography' },
    ],
  },
  {
    name: 'components',
    link: '/components/',
    items: [
      {
        name: 'buttons',
        link: '/components/buttons',
        items: [
          { name: 'primary', link: '/components/buttons/primary/' },
          { name: 'secondary', link: '/components/buttons/secondary/' },
        ]
      },
      { name: 'link', link: '/components/link'},
    ],
  },
];

export default menus;
