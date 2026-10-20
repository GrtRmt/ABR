import React, { useState } from 'react';
import { Header } from './components/Header';
import { AbrHero } from './components/AbrHero';
import { TrustIndicators } from './components/TrustIndicators';
import { AbrCoreExplainer } from './components/AbrCoreExplainer';
import { AbrBouwCheck } from './components/AbrBouwCheck';
import { AbrCoverageTabs } from './components/AbrCoverageTabs';
import { AbrCalculatorSection } from './components/AbrCalculatorSection';
import { AbrWhyClientSection } from './components/AbrWhyClientSection';
import { AbrComparisonSection } from './components/AbrComparisonSection';
import { AbrProcessSection } from './components/AbrProcessSection';
import { AbrCasesSection } from './components/AbrCasesSection';
import { CredibilitySection } from './components/CredibilitySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AbrQuoteModal, AbrQuoteInitialParams } from './components/AbrQuoteModal';
import { AbrDocumentsModal } from './components/AbrDocumentsModal';
import { DamageClaimModal } from './components/DamageClaimModal';
import { AppointmentModal } from './components/AppointmentModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { FloatingShareWidget } from './components/FloatingShareWidget';
import { ArticleModal } from './components/ArticleModal';
import { AdminNewsPage } from './components/AdminNewsPage';
import { BlogPost } from './types';
import {
  getStoredBlogPosts,
  saveStoredBlogPosts,
  resetStoredBlogPosts,
} from './data/newsData';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isDamageClaimOpen, setIsDamageClaimOpen] = useState(false);
  const [quoteParams, setQuoteParams] = useState<AbrQuoteInitialParams | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('ABR Bouwverzekering');

  // Blog / News State
  const [posts, setPosts] = useState<BlogPost[]>(() => getStoredBlogPosts());
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  const handleOpenAppointment = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
  };

  const handleOpenQuoteWithParams = (params: AbrQuoteInitialParams) => {
    setQuoteParams(params);
    setIsQuoteOpen(true);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSavePost = (updatedPost: BlogPost) => {
    setPosts((prev) => {
      const exists = prev.some((p) => p.id === updatedPost.id);
      const next = exists
        ? prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
        : [updatedPost, ...prev];
      saveStoredBlogPosts(next);
      return next;
    });
  };

  const handleDeletePost = (postId: string) => {
    setPosts((prev) => {
      const next = prev.filter((p) => p.id !== postId);
      saveStoredBlogPosts(next);
      return next;
    });
  };

  const handleResetDefaults = () => {
    const defaultPosts = resetStoredBlogPosts();
    setPosts(defaultPosts);
  };

  // If Admin mode is active, render the dedicated Admin Portal
  if (isAdminOpen) {
    return (
      <div className="min-h-screen bg-slate-50">
        <AdminNewsPage
          posts={posts}
          onSavePost={handleSavePost}
          onDeletePost={handleDeletePost}
          onResetDefaults={handleResetDefaults}
          onClose={() => setIsAdminOpen(false)}
          onPreviewPost={(post) => setSelectedArticle(post)}
        />

        {/* Article Preview Modal inside Admin */}
        <ArticleModal
          post={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onOpenAppointment={handleOpenAppointment}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] pb-16 sm:pb-0">
      {/* Sticky Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Top Navbar */}
      <Header
        onOpenAppointment={handleOpenAppointment}
        onOpenQuoteModal={() => {
          setQuoteParams(null);
          setIsQuoteOpen(true);
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* HERO ABR SECTION */}
        <AbrHero
          onOpenQuoteModal={() => {
            setQuoteParams(null);
            setIsQuoteOpen(true);
          }}
          onOpenAppointment={handleOpenAppointment}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* TRUST INDICATORS: Certified Advisor, 24/7 Availability, Expert Local Service */}
        <TrustIndicators />

        {/* 1. WAT IS ABR? */}
        <AbrCoreExplainer
          onOpenQuoteModal={() => {
            setQuoteParams(null);
            setIsQuoteOpen(true);
          }}
        />

        {/* 2. WAARBORGEN (Afdeling 1 & 2) */}
        <AbrCoverageTabs
          onOpenQuoteModal={() => {
            setQuoteParams(null);
            setIsQuoteOpen(true);
          }}
        />

        {/* 3. WEL / NIET (IPID CONFORMITEIT) */}
        <AbrComparisonSection onOpenDocumentsModal={() => setIsDocsOpen(true)} />

        {/* 4. WAAROM BOUWHEER */}
        <AbrWhyClientSection
          onOpenQuoteModal={() => {
            setQuoteParams(null);
            setIsQuoteOpen(true);
          }}
        />

        {/* 5. BOUWCHECK TOOL */}
        <AbrBouwCheck
          onOpenQuoteWithParams={handleOpenQuoteWithParams}
          onOpenAppointment={handleOpenAppointment}
        />

        {/* 6. STAPPENPLAN (Praktische Tijdlijn) */}
        <AbrProcessSection
          onOpenQuoteModal={() => {
            setQuoteParams(null);
            setIsQuoteOpen(true);
          }}
        />

        {/* 7. CASES (Praktijkvoorbeelden & Schadedossiers) */}
        <AbrCasesSection
          onOpenQuoteModal={() => {
            setQuoteParams(null);
            setIsQuoteOpen(true);
          }}
        />

        {/* 8. PREMIEWIJZER (Interactieve Calculator & Simulator) */}
        <AbrCalculatorSection onOpenQuoteWithParams={handleOpenQuoteWithParams} />

        {/* 9. FAQ (Veelgestelde Vragen) */}
        <FaqSection />

        {/* 10. CONTACT (Afspraakformulier & Directe Contactlijnen) */}
        <ContactSection
          initialService={preselectedService}
          onOpenDamageClaim={() => setIsDamageClaimOpen(true)}
        />

        {/* KANTOOR & BEREIKBAARHEID LEDEGEM */}
        <LocationSection onOpenAppointment={() => handleOpenAppointment('Kantoorbezoek ABR')} />

        {/* BETROUWBAARHEID & ZEKERHEID */}
        <CredibilitySection />
      </main>

      {/* FOOTER */}
      <Footer
        onOpenAppointment={() => handleOpenAppointment('ABR advies via footer')}
        onOpenQuoteModal={() => {
          setQuoteParams(null);
          setIsQuoteOpen(true);
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* ABR Quote Request Modal */}
      <AbrQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialParams={quoteParams}
      />

      {/* ABR Documents & IPID Viewer Modal */}
      <AbrDocumentsModal
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
        onOpenQuoteModal={() => {
          setIsDocsOpen(false);
          setQuoteParams(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Online Damage Claim Modal */}
      <DamageClaimModal
        isOpen={isDamageClaimOpen}
        onClose={() => setIsDamageClaimOpen(false)}
      />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        preselectedService={preselectedService}
      />

      {/* Full Article Reader Modal */}
      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Mobile Floating Action Bar */}
      <MobileQuickBar
        onOpenAppointment={() => handleOpenAppointment('Mobiele afspraak')}
        onOpenQuoteModal={() => {
          setQuoteParams(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Floating Share Action Button on side */}
      <FloatingShareWidget />

      {/* Floating Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
