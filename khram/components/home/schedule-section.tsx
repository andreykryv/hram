'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const weeklySchedule = [
  {
    day: 'Понедельник',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Вторник',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Среда',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Четверг',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Пятница',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    day: 'Суббота',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '15:00', name: 'Огласительная беседа' },
      { time: '17:00', name: 'Всенощное бдение' },
    ],
  },
  {
    day: 'Воскресенье',
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
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 orthodox-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Расписание
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
            Расписание богослужений
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Регулярное расписание богослужений в нашем храме. 
            В дни праздников расписание может меняться.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weeklySchedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className={`h-full ${day.isHighlight ? 'border-secondary bg-secondary/10' : 'bg-primary-foreground/5 border-primary-foreground/10'}`}>
                <CardContent className="p-5">
                  <h3 className={`font-serif font-bold text-lg mb-3 ${day.isHighlight ? 'text-secondary' : 'text-primary-foreground'}`}>
                    {day.day}
                  </h3>
                  <ul className="space-y-2">
                    {day.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start gap-3">
                        <span className="flex items-center gap-1 text-sm text-secondary font-medium min-w-[50px]">
                          <Clock className="w-3 h-3" />
                          {service.time}
                        </span>
                        <span className="text-sm text-primary-foreground/80">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/schedule">
              Полное расписание
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
