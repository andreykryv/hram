import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, BookOpen, Users, Heart, Music, Calendar } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Приходская жизнь',
  description: 'Воскресная школа, молодёжные группы, хор и социальное служение прихода Храма Воздвижения Креста Господня.',
}

const activities = [
  {
    icon: BookOpen,
    title: 'Воскресная школа',
    description: 'Занятия для детей от 5 до 14 лет проводятся каждое воскресенье после Литургии. Дети изучают Закон Божий, историю Церкви, учатся молиться и участвовать в богослужениях.',
    schedule: 'Воскресенье, после Литургии',
    image: '/images/church-interior.jpg',
  },
  {
    icon: Users,
    title: 'Молодёжная группа',
    description: 'Встречи для молодёжи от 15 до 30 лет. Обсуждение вопросов веры, совместные паломничества, волонтёрские проекты и дружеское общение.',
    schedule: 'Суббота, 16:00',
    image: '/images/church-service.jpg',
  },
  {
    icon: Music,
    title: 'Церковный хор',
    description: 'Приглашаем всех желающих присоединиться к нашему хору. Репетиции проводятся два раза в неделю. Опыт пения не обязателен — главное желание славить Бога.',
    schedule: 'Среда и пятница, 18:00',
    image: '/images/church-interior.jpg',
  },
  {
    icon: Heart,
    title: 'Социальное служение',
    description: 'Помощь нуждающимся прихожанам, посещение больных и одиноких, сбор вещей для малоимущих семей. Присоединяйтесь к делам милосердия.',
    schedule: 'По мере необходимости',
    image: '/images/church-service.jpg',
  },
]

const events = [
  {
    title: 'Праздник Рождества Христова',
    date: '7 января',
    description: 'Торжественное богослужение и праздничный концерт воскресной школы',
  },
  {
    title: 'Престольный праздник',
    date: '27 сентября',
    description: 'Воздвижение Креста Господня — главный праздник нашего храма',
  },
  {
    title: 'Пасхальные торжества',
    date: 'По календарю',
    description: 'Ночное богослужение и освящение куличей и пасок',
  },
  {
    title: 'День семьи',
    date: '8 июля',
    description: 'Праздник святых Петра и Февронии — покровителей семьи',
  },
]

export default function ParishLifePage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-service.jpg"
            alt="Приходская жизнь"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground mb-6">
            <Link href="/about">
              <ChevronLeft className="w-4 h-4 mr-2" />
              О храме
            </Link>
          </Button>
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Приходская жизнь
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Наш приход — это живая община верующих людей. 
              Присоединяйтесь к нашим занятиям, группам и добрым делам.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Направления деятельности
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              В нашем приходе есть много возможностей для духовного роста и служения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <Card key={activity.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Calendar className="w-4 h-4" />
                    {activity.schedule}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Основные праздники
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Особые дни в жизни нашего прихода
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <Card key={event.title} className="text-center">
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-3">
                    {event.date}
                  </span>
                  <h3 className="font-serif font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Присоединяйтесь к нам
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-8">
                Мы рады всем, кто хочет стать частью нашей приходской семьи. 
                Приходите на богослужения, записывайтесь в воскресную школу, 
                присоединяйтесь к хору или волонтёрским проектам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">Связаться с нами</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/schedule">Расписание богослужений</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
