'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Renato Craveiro
        </Link>
        <i><TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Developer / Infraestructure Technician
        </TextEffect></i>
      </div>

      <a href="https://www.linkedin.com/in/renato-craveiro" target="_blank" rel="noopener noreferrer">
        <img
          src="pfp.jpg"
          alt="Renato Craveiro - Profile Picture"
          className="h-30 w-30 rounded-full object-cover hover:opacity-80 transition-opacity"
        />
      </a>
    </header>
  )
}
