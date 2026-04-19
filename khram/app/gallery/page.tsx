'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', name: 'Все фото' },
  { id: 'church', name: 'Храм' },
  { id: 'services', name: 'Богослужения' },
  { id: 'events', name: 'Мероприятия' },
  { id: 'parish', name: 'Приход' },
]

const galleryImages = [
  {
    id: 1,
    src: '/images/hero-church.jpg',
    alt: 'Храм Воздвижения Креста Господня - внешний вид',
    category: 'church',
    title: 'Храм Воздвижения Креста Господня',
  },
  {
    id: 2,
    src: '/images/church-interior.jpg',
    alt: 'Интерьер храма',
    category: 'church',
    title: 'Иконостас храма',
  },
  {
    id: 3,
    src: '/images/church-service.jpg',
    alt: 'Божественная Литургия',
    category: 'services',
    title: 'Божественная Литургия',
  },
  {
    id: 4,
    src: '/images/church-history.jpg',
    alt: 'Историческое фото храма',
    category: 'church',
    title: 'Из истории храма',
  },
  {
    id: 5,
    src: '/images/hero-church.jpg',
    alt: 'Праздничное богослужение',
    category: 'services',
    title: 'Праздничная служба',
  },
  {
    id: 6,
    src: '/images/church-interior.jpg',
    alt: 'Убранство храма',
    category: 'church',
    title: 'Убранство храма',
  },
  {
    id: 7,
    src: '/images/church-service.jpg',
    alt: 'Воскресная школа',
    category: 'parish',
    title: 'Воскресная школа',
  },
  {
    id: 8,
    src: '/images/hero-church.jpg',
    alt: 'Крестный ход',
    category: 'events',
    title: 'Крестный ход',
  },
  {
    id: 9,
    src: '/images/church-interior.jpg',
    alt: 'Праздник Пасхи',
    category: 'events',
    title: 'Светлое Христово Воскресение',
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Touch swipe state for lightbox
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const currentIndex =
    selectedImage !== null
      ? filteredImages.findIndex((img) => img.id === selectedImage)
      : -1

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedImage, currentIndex, filteredImages]) // eslint-disable-line

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return

    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current

    // Only register horizontal swipes (ignore scroll attempts)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) handleNext()
      else handlePrev()
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 orthodox-pattern opacity-30" aria-hidden="true" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-balance">
              Фотогалерея
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90">
              Фотографии нашего храма, богослужений и приходской жизни
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter — horizontal scroll on mobile */}
      <section className="py-4 md:py-6 border-b border-border sticky top-16 md:top-20 bg-background z-30">
        <div className="container mx-auto px-4">
          <div
            className="flex gap-2 overflow-x-auto pb-1 -mb-1"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
            role="tablist"
            aria-label="Фильтр по категориям"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                size="sm"
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'flex-shrink-0 transition-all',
                  activeCategory === category.id && 'shadow-md',
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
            aria-label="Галерея фотографий"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.25) }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Открыть фото: ${image.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedImage(image.id)
                    }
                  }}
                >
                  <div className="relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden shadow-sm md:shadow-md">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Zoom icon — desktop hover only */}
                    <div className="absolute inset-0 items-center justify-center hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs md:text-sm font-medium text-balance leading-snug">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">В этой категории пока нет фотографий</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр изображения"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button
              type="button"
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white hover:bg-white/20 rounded-full z-10 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Закрыть"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            {currentIndex > 0 && (
              <button
                type="button"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white hover:bg-white/20 rounded-full z-10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            {/* Next */}
            {currentIndex < filteredImages.length - 1 && (
              <button
                type="button"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white hover:bg-white/20 rounded-full z-10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                aria-label="Следующее фото"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="relative w-full mx-12 md:mx-20 max-w-5xl"
              style={{ maxHeight: '85dvh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages.find((img) => img.id === selectedImage) && (
                <>
                  <Image
                    src={filteredImages.find((img) => img.id === selectedImage)!.src}
                    alt={filteredImages.find((img) => img.id === selectedImage)!.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg"
                    style={{ maxHeight: '80dvh' }}
                    sizes="(max-width: 768px) 90vw, 80vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                    <p className="text-white text-center text-sm font-medium">
                      {filteredImages.find((img) => img.id === selectedImage)!.title}
                    </p>
                    <p className="text-white/50 text-center text-xs mt-0.5">
                      {currentIndex + 1} из {filteredImages.length}
                      {' · '}
                      <span className="md:hidden">смахните для навигации</span>
                      <span className="hidden md:inline">← → для навигации</span>
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}