'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'

const weeklySchedule = [
  {
    day: 'Понедельник',
    dayShort: 'Пн',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Вторник',
    dayShort: 'Вт',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Среда',
    dayShort: 'Ср',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Четверг',
    dayShort: 'Чт',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Пятница',
    dayShort: 'Пт',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Суббота',
    dayShort: 'Сб',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '15:00', name: 'Огласительная беседа' },
      { time: '17:00', name: 'Всенощное бдение' },
    ],
  },
  {
    day: 'Воскресенье',
    dayShort: 'Вс',
    services: [
      { time: '7:00', name: 'Ранняя Литургия' },
      { time: '9:00', name: 'Поздняя Литургия' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
    isHighlight: true,
  },
]

export function ScheduleSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }

    checkScroll()
    container.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)

    return () => {
      container.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
     <section className="py-10 md:py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-3">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Расписание
          </div>
               <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 text-balance">
            Расписание богослужений
          </h2>
             <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Регулярное расписание богослужений в нашем храме.
            В дни праздников расписание может меняться.
          </p>
        </motion.div>

      
        {/* Carousel wrapper with arrows */}
        <div className="relative">
          {/* Left arrow - appears when scrolled right */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-border rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors -ml-5 md:-ml-6"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="list"
            aria-label="Расписание по дням недели"
          >
            {weeklySchedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="flex-shrink-0 w-[280px] sm:w-auto sm:max-w-none"
                role="listitem"
              >
                <Card
                  className={`h-full border-2 ${
                    day.isHighlight
                      ? 'border-secondary bg-secondary/5'
                      : 'border-border bg-card'
                  }`}
                >
                  <CardContent className="p-4 md:p-5">
                    {/* Day header */}
                    <div className="flex items-center justify-between mb-3">
                      <h3
                        className={`font-serif font-bold ${
                          day.isHighlight ? 'text-secondary-foreground' : 'text-foreground'
                        }`}
                      >
                        <span className="text-base md:text-lg">{day.day}</span>
                      </h3>
                      {day.isHighlight && (
                        <span className="text-secondary">★</span>
                      )}
                    </div>

                 {/* Services list - compact */}
                    <ul className="space-y-2" aria-label={`Богослужения в ${day.day}`}>
                      {day.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="flex items-center gap-1 text-xs md:text-sm text-primary font-semibold min-w-[50px] mt-0.5">
                            <Clock className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                            {service.time}
                          </span>
                          <span className="text-xs md:text-sm text-muted-foreground leading-snug">
                            {service.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        {/* Right arrow - always visible on mobile */}
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-border rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors -mr-5 md:-mr-6"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Button
            asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/schedule">
              Полное расписание
              <ChevronRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}