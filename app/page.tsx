import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyJoin from '@/components/WhyJoin';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyJoin />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}