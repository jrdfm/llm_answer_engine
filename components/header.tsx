'use client'

import React from 'react'
import Link from 'next/link'
import { IconAI } from './ui/icons'
import { cn } from '@/lib/utils'

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full p-0 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="p-2">
        <a href="/">
          <span className="sr-only">Morphic</span>
        </a>
      </div>
    </header>
  )
}

export default Header