'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const weeklySchedule = [
  {
    day: 'Понедельник',
    dayShort: 'Пн',
    services: [
      { time: '8:00', name: 'Утренние молитвы, часы' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Вторник',
    dayShort: 'Вт',
    services: [
      { time: '8:00', name: 'Утренние молитвы, часы' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Среда',
    dayShort: 'Ср',
    services: [
      { time: '8:00', name: 'Божественная Литургия' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Четверг',
    dayShort: 'Чт',
    services: [
      { time: '8:00', name: 'Утренние молитвы, часы' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Пятница',
    dayShort: 'Пт',
    services: [
      { time: '8:00', name: 'Божественная Литургия' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Суббота',
    dayShort: 'Сб',
    services: [
      { time: '8:00', name: 'Божественная Литургия' },
      { time: '15:00', name: 'Огласительная беседа', note: 'Для родителей и крёстных' },
      { time: '17:00', name: 'Всенощное бдение' },
    ],
    isSpecial: true,
  },
  {
    day: 'Воскресенье',
    dayShort: 'Вс',
    services: [
      { time: '7:00', name: 'Ранняя Божественная Литургия' },
      { time: '9:30', name: 'Поздняя Божественная Литургия', note: 'С проповедью' },
      { time: '12:00', name: 'Молебен' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
    isHighlight: true,
  },
]

export function ScheduleSection() {
  return (
    <section className="timetable py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-3">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Расписание
          </div>
          <h2 className="timetable__title font-serif text-3xl font-bold text-foreground mb-2">
            Еженедельное расписание
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Регулярное расписание богослужений в нашем храме.
            В дни праздников расписание может меняться.
          </p>
        </motion.div>

        <div className="timetable__slider-wrap">
          <div className="timetable__slider">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weeklySchedule.map((day) => (
                <div key={day.day} className="timetable__item">
                  <div className="timetable__item-inner">
                    <div className={`timetable__date ${day.isHighlight ? 'timetable__date-today' : ''}`}>
                      <span className="date-num">{day.dayShort}</span>
                      <span>{day.day}</span>
                    </div>

                    <div className="timetable__desc">
                      <ul className="timetable__list">
                        {day.services.map((service, index) => (
                          <li key={index}>
                            <div className="timetable__time">
                              <span>{service.time}</span>
                            </div>
                            <div className="timetable__name">{service.name}</div>
                            {service.note && (
                              <div className="text-xs text-muted-foreground mt-1">{service.note}</div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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