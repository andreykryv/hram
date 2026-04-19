'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

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
  return (
    <section className="py-14 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 orthodox-pattern opacity-10" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Расписание
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance">
            Расписание богослужений
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-sm md:text-base">
            Регулярное расписание богослужений в нашем храме.
            В дни праздников расписание может меняться.
          </p>
        </motion.div>

        {/*
          Mobile: horizontal scroll carousel
          Tablet+: 2-col grid
          Desktop: 4-col grid
        */}
        <div
          className="
            flex gap-3
            overflow-x-auto pb-3 -mx-4 px-4
            sm:mx-0 sm:px-0
            sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0
            lg:grid-cols-3
            xl:grid-cols-4
          "
          style={{ WebkitOverflowScrolling: 'touch' }}
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
              /* Fixed width on mobile so cards don't collapse */
              className="flex-shrink-0 w-[calc(50vw-1.5rem)] min-w-[160px] max-w-[220px] sm:w-auto sm:max-w-none"
              role="listitem"
            >
              <Card
                className={`h-full ${
                  day.isHighlight
                    ? 'border-secondary bg-secondary/10'
                    : 'bg-primary-foreground/5 border-primary-foreground/10'
                }`}
              >
                <CardContent className="p-4">
                  {/* Day name: full on sm+, short on mobile */}
                  <h3
                    className={`font-serif font-bold mb-3 ${
                      day.isHighlight ? 'text-secondary' : 'text-primary-foreground'
                    }`}
                  >
                    <span className="hidden sm:inline text-lg">{day.day}</span>
                    <span className="sm:hidden text-base">{day.dayShort}</span>
                  </h3>

                  <ul className="space-y-2" aria-label={`Богослужения в ${day.day}`}>
                    {day.services.map((service, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex items-center gap-1 text-xs text-secondary font-semibold min-w-[46px] mt-0.5">
                          <Clock className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                          {service.time}
                        </span>
                        <span className="text-xs text-primary-foreground/80 leading-snug">
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

        {/* Scroll hint — only on mobile */}
        <p className="text-center text-xs text-primary-foreground/50 mt-2 sm:hidden" aria-hidden="true">
          ← Листайте →
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
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