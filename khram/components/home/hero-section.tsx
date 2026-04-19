'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      className="relative flex items-center"
      style={{
        // Use dvh so mobile browser chrome is accounted for; fall back to 90vh
        minHeight: 'clamp(480px, 90dvh, 900px)',
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-church.jpg"
          alt="Храм Воздвижения Креста Господня"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-5">
              Минская епархия БПЦ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight text-balance"
          >
            Храм Воздвижения Креста Господня
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-primary-foreground/90 mb-7 leading-relaxed"
          >
            Добро пожаловать в наш храм. Мы рады видеть вас на богослужениях
            и приглашаем стать частью нашей приходской семьи.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
            >
              <Link href="/schedule">
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Расписание богослужений
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
            >
              <Link href="/about">
                О храме
                <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 gap-3 max-w-sm"
          >
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3.5">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-secondary-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Ежедневно</p>
                <p className="text-sm font-semibold text-primary-foreground">8:00 - 20:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3.5">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-secondary-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Литургия</p>
                <p className="text-sm font-semibold text-primary-foreground">Вс, 9:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden on touch devices to save space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}