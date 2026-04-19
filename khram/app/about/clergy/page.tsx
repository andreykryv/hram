import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Phone, Mail } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Духовенство',
  description: 'Священнослужители Храма Воздвижения Креста Господня в Минске.',
}

const clergy = [
  {
    name: 'Протоиерей Иоанн Петров',
    title: 'Настоятель храма',
    image: '/images/priest-1.jpg',
    bio: 'Родился в 1970 году. Окончил Минскую духовную семинарию и академию. Рукоположен во священники в 1995 году. Настоятель храма с 2010 года. Женат, имеет троих детей.',
    duties: ['Совершение всех богослужений', 'Духовное окормление прихода', 'Исповедь', 'Беседы со взрослыми'],
  },
  {
    name: 'Иерей Николай Сидоров',
    title: 'Штатный священник',
    image: '/images/priest-2.jpg',
    bio: 'Родился в 1985 году. Окончил Минскую духовную семинарию. Рукоположен во священники в 2012 году. Служит в нашем храме с 2015 года. Женат, имеет двоих детей.',
    duties: ['Совершение богослужений', 'Исповедь', 'Огласительные беседы', 'Воскресная школа'],
  },
]

export default function ClergyPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-service.jpg"
            alt="Духовенство храма"
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
              Духовенство
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Познакомьтесь со священнослужителями нашего прихода, 
              которые совершают богослужения и духовно окормляют верующих.
            </p>
          </div>
        </div>
      </section>

      {/* Clergy list */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {clergy.map((priest, index) => (
              <Card key={priest.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative aspect-square lg:aspect-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={priest.image}
                        alt={priest.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className={`lg:col-span-2 p-8 md:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
                        {priest.title}
                      </span>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {priest.name}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {priest.bio}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold text-foreground mb-3">Обязанности:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {priest.duties.map((duty) => (
                            <li key={duty} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {duty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Связаться со священником
            </h2>
            <p className="text-muted-foreground mb-8">
              Если у вас есть вопросы духовного характера или вы хотите договориться о встрече, 
              свяжитесь с нами любым удобным способом.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href="tel:+375291220196"
                className="flex items-center justify-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-medium text-foreground">+375 (29) 122-01-96</p>
                </div>
              </a>
              <a
                href="mailto:kvhram@mail.by"
                className="flex items-center justify-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">kvhram@mail.by</p>
                </div>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Исповедь совершается перед каждой Литургией и во время вечерних богослужений. 
              Для более длительной беседы рекомендуем предварительно договориться о встрече.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Узнайте больше о нашем приходе
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/about/history">История храма</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/schedule">Расписание богослужений</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
