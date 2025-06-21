'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  priority?: boolean
}

const sizeMap = {
  sm: { width: 24, height: 24 },
  md: { width: 32, height: 32 },
  lg: { width: 48, height: 48 },
  xl: { width: 64, height: 64 }
}

export function Logo({ size = 'md', className, priority = true }: LogoProps) {
  const { width, height } = sizeMap[size]
  
  return (
    <div className={cn('relative', className)}>
      <Image
        src="/logo/logo.png"
        alt="AIWebHub - Innovative Web Solutions"
        width={width}
        height={height}
        priority={priority}
        className="object-contain"
        unoptimized
      />
    </div>
  )
}