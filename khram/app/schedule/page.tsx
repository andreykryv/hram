import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, Clock, Bell, ChevronRight, Star } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Расписание богослужений',
  description: 'Расписание богослужений Храма Воздвижения Креста Господня в Минске. Литургия, вечерня, утреня.',
}

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

const upcomingHolidays = [
  {
    date: '14 октября',
    name: 'Покров Пресвятой Богородицы',
    services: ['8:00 — Божественная Литургия', '17:00 — Праздничное всенощное бдение'],
  },
  {
    date: '4 ноября',
    name: 'Казанская икона Божией Матери',
    services: ['8:00 — Божественная Литургия'],
  },
  {
    date: '21 ноября',
    name: 'Собор Архистратига Михаила',
    services: ['8:00 — Божественная Литургия'],
  },
  {
    date: '4 декабря',
    name: 'Введение во храм Пресвятой Богородицы',
    services: ['8:00 — Божественная Литургия', '17:00 — Праздничное всенощное бдение'],
  },
]

const sacramentSchedule = [
  {
    name: 'Исповедь',
    schedule: 'Перед каждой Литургией и во время вечернего богослужения',
  },
  {
    name: 'Крещение',
    schedule: 'Суббота и воскресенье после Литургии (по предварительной записи)',
  },
  {
    name: 'Венчание',
    schedule: 'По согласованию со священником (кроме постов)',
  },
  {
    name: 'Соборование',
    schedule: 'В период Великого поста, а также по необходимости',
  },
  {
    name: 'Отпевание',
    schedule: 'Ежедневно по согласованию',
  },
]

export default function SchedulePage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Расписание богослужений"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Расписание
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Расписание богослужений
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Регулярное расписание богослужений в нашем храме. 
              В дни великих праздников расписание может изменяться.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly schedule */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="weekly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="weekly">Неделя</TabsTrigger>
                <TabsTrigger value="holidays">Праздники</TabsTrigger>
                <TabsTrigger value="sacraments">Таинства</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="weekly">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {weeklySchedule.map((day) => (
                  <Card 
                    key={day.day} 
                    className={`${day.isHighlight ? 'border-secondary bg-secondary/5 md:col-span-2 lg:col-span-1' : ''} ${day.isSpecial ? 'border-primary/50' : ''}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`font-serif text-xl font-bold ${day.isHighlight ? 'text-secondary-foreground' : 'text-foreground'}`}>
                          {day.day}
                        </h3>
                        {day.isHighlight && (
                          <Star className="w-5 h-5 text-secondary" fill="currentColor" />
                        )}
                      </div>
                      <ul className="space-y-3">
                        {day.services.map((service, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="flex items-center gap-1 text-sm text-primary font-medium min-w-[55px]">
                              <Clock className="w-3 h-3" />
                              {service.time}
                            </span>
                            <div>
                              <span className="text-sm text-foreground">{service.name}</span>
                              {service.note && (
                                <p className="text-xs text-muted-foreground mt-0.5">{service.note}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="holidays">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Ближайшие праздники
                  </h2>
                  <p className="text-muted-foreground">
                    Праздничные богослужения в ближайшие месяцы
                  </p>
                </div>
                <div className="space-y-4">
                  {upcomingHolidays.map((holiday) => (
                    <Card key={holiday.name}>
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="sm:w-32 shrink-0">
                            <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                              {holiday.date}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-serif font-bold text-foreground mb-2">
                              {holiday.name}
                            </h3>
                            <ul className="space-y-1">
                              {holiday.services.map((service, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <ChevronRight className="w-3 h-3 text-primary" />
                                  {service}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sacraments">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Расписание таинств
                  </h2>
                  <p className="text-muted-foreground">
                    Когда и как можно приступить к церковным таинствам
                  </p>
                </div>
                <div className="space-y-4">
                  {sacramentSchedule.map((sacrament) => (
                    <Card key={sacrament.name}>
                      <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="sm:w-40 shrink-0">
                          <h3 className="font-serif font-bold text-foreground">
                            {sacrament.name}
                          </h3>
                        </div>
                        <div className="flex-1 text-muted-foreground">
                          {sacrament.schedule}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Important notes */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-2">
                  Важная информация
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>В дни великих праздников и во время постов расписание может изменяться. Следите за объявлениями.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Для совершения таинств Крещения и Венчания необходима предварительная запись и беседа со священником.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Исповедь совершается перед началом каждой Литургии. Приходите заблаговременно.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>По всем вопросам обращайтесь по телефону: +375 (29) 122-01-96</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
