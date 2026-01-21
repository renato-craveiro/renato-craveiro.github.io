type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  mediaType: 'video' | 'image'
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'BulkMailer',
    description:
      'BulkMailer is a full-stack bulk email automation system designed for sending, tracking, and reporting mass emails. It consists of three main components: Backend (API server), Frontend (web interface), and CLI (command-line interface). The project is containerized with Docker and ready for deployment or local development.',
    link: 'https://github.com/renato-craveiro/BulkMailer',
    image: 
      'BulkMailer.png',
    mediaType: 'image',
    id: 'project1',
  },
  {
    name: 'SmartCompassTracker',
    description: 'ESP8266 Step Tracker with OLED Display and Web Interface',
    link: 'https://github.com/renato-craveiro/SmartCompassTracker',
    image:
      'SmartCompass.png',
    mediaType: 'image',
    id: 'project2',
  },
  {
    name: 'NoteTakingApp',
    description: 'A simple note-taking app with Python + Flask backend, HTML/JS frontend, and simulated database on AWS using LocalStack. Ideal for demonstrating experience with cloud, Terraform, and AWS without requiring actual cloud resources.',
    link: 'https://github.com/renato-craveiro/NoteTakingApp',
    image:
      'NoteTakingApp.png',
    mediaType: 'image',
    id: 'project3',
  },
  
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Unidade Local de Saúde de Coimbra, E.P.E.',
    title: 'Software Developer / Infraestructure Technician',
    start: '2024',
    end: 'Present',
    link: 'https://www.ulscoimbra.min-saude.pt/',
    id: 'work1',
  },
  {
    company: 'Unidade Local de Saúde de Coimbra, E.P.E.',
    title: 'Secreretary / IT Support',
    start: '2020',
    end: '2024',
    link: 'https://www.ulscoimbra.min-saude.pt/',
    id: 'work2',
  },
  {
    company: 'Instituto Superior de Engenharia de Coimbra (ISEC)',
    title: 'Bachelor\'s Degree in Computer Engineering - App Development',
    start: '2018',
    end: '2025',
    link: 'https://http://isec.pt/',
    id: 'work3',
  },
  {
    company: 'Escola Secundária Fernando Namora - Condeixa-a-Nova',
    title: 'Professional Technical Course in Programming and management of computer systems (Gestão e Programação de Sistemas Informáticos)',
    start: '2015',
    end: '2018',
    link: 'https://aecondeixa.pt/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Presenting BulkMailer',
    description: 'I\'m proud to share BulkMailer, a project born out of a small necessity at my workplace. [...]',
    link: 'https://www.linkedin.com/posts/renato-craveiro_opensource-emailautomation-nodejs-activity-7378906353215504384-X3Nw?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeUWOIBN4sQG3WP1NDiyTzMqoIXE9ksfkY',
    uid: 'blog-1',
  },
  {
    title: 'Sharing my personal projects',
    description:
      'Over the past months, I’ve been immersing myself in building full-stack and embedded projects that bridge software, infrastructure, and hardware.[...]',
    link: 'https://www.linkedin.com/posts/renato-craveiro_renato-craveiro-overview-activity-7377113699058102272-9UMF?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeUWOIBN4sQG3WP1NDiyTzMqoIXE9ksfkY',
    uid: 'blog-2',
  },
  {
    title: 'My HomeLab Setup',
    description:
      'Around 3 months ago, I decided to dive into a hobby that complements my role as a developer and member of the infrastructure team: building my own home lab. [...]',
    link: 'https://www.linkedin.com/posts/renato-craveiro_around-3-months-ago-i-decided-to-dive-activity-7345792662668566530-jm_L?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeUWOIBN4sQG3WP1NDiyTzMqoIXE9ksfkY',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/renato-craveiro',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/renato-craveiro',
  },
]

export const EMAIL = 'renatoalex.olivcraveiro@gmail.com'
