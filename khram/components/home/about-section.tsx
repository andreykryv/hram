'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Church, Users, BookOpen, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Church,
    title: 'Богослужения',
    description: 'Ежедневные богослужения по уставу Православной Церкви',
  },
  {
    icon: Users,
    title: 'Приходская семья',
    description: 'Дружная община верующих людей всех возрастов',
  },
  {
    icon: BookOpen,
    title: 'Воскресная школа',
    description: 'Духовное образование для детей и взрослых',
  },
  {
    icon: Heart,
    title: 'Благотворительность',
    description: 'Помощь нуждающимся и социальное служение',
  },
]

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/church-interior.jpg"
                alt="Интерьер храма"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              О нашем храме
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Храм Воздвижения Креста Господня в Минске
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Наш храм — место молитвы, духовного возрастания и общения верующих людей. 
              История прихода насчитывает многие годы служения Богу и людям. 
              Мы приглашаем всех желающих присоединиться к нашей приходской семье.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              В храме совершаются все Таинства Православной Церкви: Крещение, Венчание, 
              Исповедь, Причастие, Соборование. Работает воскресная школа для детей 
              и проводятся беседы для взрослых.
            </p>

            <Button asChild>
              <Link href="/about">
                Подробнее о храме
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
