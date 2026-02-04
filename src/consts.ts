import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Anush Fernandes',
  description:
    "Builder, Marketer, Baker. I build AI projects, grow products, and bake sourdough. Exploring the intersection of technology, creativity, and craft.",
  href: 'https://anushfernandes.com',
  author: 'Anush Fernandes',
  locale: 'en-US',
  location: 'Goa, India',
  email: 'anush@anushfernandes.com'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/build',
    label: 'build',
  },
  {
    href: '/market',
    label: 'market',
  },
  {
    href: '/bake',
    label: 'bake',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/anushfernandes',
    label: 'GitHub',
  },
  {
    href: 'mailto:anush@anushfernandes.com',
    label: 'Email',
  },
  {
    href: 'https://linkedin.com/in/anushfernandes',
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/anushfernandes',
    label: 'Twitter',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Web Development': Category[]
  'Development Tools': Category[]
  'Hosting and Cloud Services': Category[]
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Web Servers': Category[]
  Databases: Category[]
  'Other Software': Category[]
}

export const technologies: Technologies = {
  'Web Development': [
    { text: 'React', logo: 'mdi:react' },
    { text: 'TypeScript', logo: 'mdi:language-typescript' },
    { text: 'Astro', logo: 'simple-icons:astro' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
    { text: 'Next.js', logo: 'simple-icons:nextdotjs' },
  ],
  'Development Tools': [
    { text: 'Claude Code', logo: 'simple-icons:anthropic' },
    { text: 'Git', logo: 'mdi:git' },
    { text: 'VS Code', logo: 'mdi:visual-studio-code' },
  ],
  'Hosting and Cloud Services': [
    { text: 'Vercel', logo: 'simple-icons:vercel' },
    { text: 'Supabase', logo: 'simple-icons:supabase' },
    { text: 'Cloudflare', logo: 'cib:cloudflare' },
  ],
  'Operating Systems': [
    { text: 'macOS', logo: 'mdi:apple' },
    { text: 'Linux', logo: 'mdi:linux' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'Python', logo: 'mdi:language-python' },
    { text: 'Node.js', logo: 'mdi:nodejs' },
    { text: 'CrewAI', logo: 'mdi:robot' },
  ],
  'Web Servers': [
    { text: 'Nginx', logo: 'cib:nginx' },
  ],
  Databases: [
    { text: 'PostgreSQL', logo: 'simple-icons:postgresql' },
    { text: 'Supabase', logo: 'simple-icons:supabase' },
  ],
  'Other Software': [
    { text: 'Claude API', logo: 'simple-icons:anthropic' },
    { text: 'OpenAI', logo: 'simple-icons:openai' },
    { text: 'Figma', logo: 'simple-icons:figma' },
  ],
}
