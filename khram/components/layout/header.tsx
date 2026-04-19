'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Clock, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Главная', href: '/' },
  { 
    name: 'О храме', 
    href: '/about',
    children: [
      { name: 'История храма', href: '/about/history' },
      { name: 'Духовенство', href: '/about/clergy' },
      { name: 'Приходская жизнь', href: '/about/parish-life' },
    ]
  },
  { name: 'Расписание', href: '/schedule' },
  { 
    name: 'Для новоначальных', 
    href: '/beginners',
    children: [
      { name: 'Первые шаги в храме', href: '/beginners/first-steps' },
      { name: 'Основы веры', href: '/beginners/basics' },
      { name: 'Как исповедоваться', href: '/beginners/confession-guide' },
      { name: 'Подготовка к причастию', href: '/beginners/communion-guide' },
    ]
  },
  { 
    name: 'Требы', 
    href: '/services',
    children: [
      { name: 'Крещение', href: '/services/baptism' },
      { name: 'Венчание', href: '/services/wedding' },
      { name: 'Освящение', href: '/services/blessing' },
      { name: 'Отпевание', href: '/services/funeral' },
    ]
  },
  { name: 'Новости', href: '/news' },
  { name: 'Галерея', href: '/gallery' },
  { name: 'Контакты', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+375291220196" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+375 (29) 122-01-96</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Ежедневно: 8:00 - 20:00</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/kvhram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header 
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-md' 
            : 'bg-background'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors">
                <CrossIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif text-lg font-bold text-foreground leading-tight">
                  Храм Воздвижения
                </h1>
                <p className="text-sm text-muted-foreground">
                  Креста Господня
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1',
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    )}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-card rounded-lg shadow-lg border border-border overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                'block px-4 py-3 text-sm transition-colors',
                                pathname === child.href
                                  ? 'text-primary bg-primary/10'
                                  : 'text-foreground hover:text-primary hover:bg-muted'
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/schedule">Расписание служб</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border bg-background overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 rounded-md text-base font-medium transition-colors',
                        pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 rounded-md text-sm transition-colors',
                              pathname === child.href
                                ? 'text-primary bg-primary/10'
                                : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile contact info */}
                <div className="pt-4 mt-4 border-t border-border">
                  <a 
                    href="tel:+375291220196" 
                    className="flex items-center gap-2 px-4 py-2 text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+375 (29) 122-01-96</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7V2z" />
    </svg>
  )
}
