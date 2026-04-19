import { PageWrapper } from '@/components/layout'
import {
  HeroSection,
  AnnouncementsSection,
  AboutSection,
  ScheduleSection,
  SacramentsSection,
  ContactSection,
} from '@/components/home'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <AnnouncementsSection />
      <AboutSection />
      <ScheduleSection />
      <SacramentsSection />
      <ContactSection />
    </PageWrapper>
  )
}
