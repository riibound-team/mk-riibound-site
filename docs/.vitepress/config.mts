import { defineConfig } from 'vitepress'

function getSidebar(path: string) {
  const items = [
    { text: 'Getting started', link: '/guide' },
    { text: 'Choose your system', link: '/system-choose' }
  ]
  if (path.startsWith('/dolphin')) {
    items.push({ text: 'Dolphin', link: '/dolphin' })
  } else if (path.startsWith('/wiiu')) {
    items.push({ text: 'Wii U', link: '/wiiu' })
  } else if (path.startsWith('/wii')) {
    items.push({ text: 'Wii', link: '/wii' })
  }
  return [
    {
      text: 'Install guide',
      items
    }
  ]
}

export default defineConfig({
  title: "Mario Kart: Riibound",
  description: "A brand new Mario Kart Wii experience.",
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Credits', link: '/credits' }
    ],

    sidebar: {
      '/dolphin': getSidebar('/dolphin'),
      '/wiiu': getSidebar('/wiiu'),
      '/wii': getSidebar('/wii'),
      '/': getSidebar('/'),
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@VinnyPix' },
      { icon: 'discord', link: 'https://discord.gg/BD4sRWPdhm' },
      { icon: 'github', link: 'https://github.com/riibound-team/mk-riibound-site' }
    ],

    logo: 'riibound.png'
  }
})
