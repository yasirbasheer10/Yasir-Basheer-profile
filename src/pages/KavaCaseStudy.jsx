import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import '../index.css';

function KavaCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-[#FCFCFC] text-gray-900 font-sans selection:bg-gray-200 selection:text-black">
      <Helmet>
        <title>Kava by Mitra - Case Study | Yasir Basheer</title>
        <meta name="description" content="Case study on building the Kava by Mitra e-commerce brand from the ground up, owning the Shopify storefront build, launch strategy, and operations." />
        <link rel="canonical" href="https://www.yasirbasheer.live/case-study/kava" />
        <meta property="og:title" content="Kava by Mitra - E-commerce Case Study" />
        <meta property="og:image" content="https://www.yasirbasheer.live/kava.png" />
        <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Kava by Mitra - E-commerce Case Study",
                "author": {
                  "@type": "Person",
                  "name": "Yasir Basheer"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Yasir Basheer Portfolio",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.yasirbasheer.live/og-banner.png"
                  }
                },
                "datePublished": "2026-08-30",
                "description": "Case study on building the Kava by Mitra e-commerce brand from the ground up, owning the Shopify storefront build, launch strategy, and operations."
              }
            `}
          </script>
      </Helmet>
      <div className="bg-noise"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-6 mix-blend-difference text-white flex justify-between items-center">
        <Link to="/" className="text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        <div className="bg-white px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm transform -rotate-[2deg] border border-gray-100 mb-6 text-gray-600">
          Case Study
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
          Kava by Mitra
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-light leading-relaxed mb-8">
          A conversion-focused Shopify ecommerce experience built for a modern functional beverage brand.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {['Shopify', 'CRO', 'UX/UI', 'Brand Launch'].map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-[11px] font-medium text-gray-600 bg-white">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href="http://kava-drink.co/" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#11161A] hover:bg-black text-white px-6 py-3.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-transform hover:scale-105 shadow-xl"
        >
          Visit Live Website <ExternalLink size={14} />
        </a>
      </section>

      {/* Hero Image */}
      <section className="px-4 md:px-12 max-w-7xl mx-auto z-10 relative mb-24">
        <div className="w-full h-[50vh] md:h-[70vh] rounded-[32px] overflow-hidden shadow-2xl bg-white p-2">
          <img 
            src="/kava.png" 
            alt="Kava by Mitra Hero" 
            className="w-full h-full object-cover object-top rounded-[24px]"
          />
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-4xl mx-auto px-6 pb-32 z-10 relative">
        
        {/* Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Kava by Mitra9 is a feel-good functional beverage brand operating in the rapidly growing non-alcoholic category. Offering kava seltzers, drink mixes, and liquid shots, the brand focuses on relaxation, mood support, and stress relief as a modern alternative to traditional alcohol or heavy caffeine consumption.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            When launching the brand digitally, the core objective was not just to build a storefront, but to engineer an educational and highly-converting ecosystem. The functional beverage space requires heavy consumer education—customers need to understand the physiological effects of kava, the safety profile, and why it is superior to existing market alternatives. Our mandate was to seamlessly blend this deep educational requirement with a frictionless, high-velocity checkout experience designed for both impulse first-time buyers and recurring subscription models.
          </p>
        </div>

        {/* The Challenge & My Approach */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6">The E-Commerce Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Building a direct-to-consumer (DTC) funnel for a misunderstood product category is inherently difficult. Many potential customers have preconceived notions about kava's taste, preparation difficulty, or legal status. If the website simply presented a catalog of products without context, the bounce rate would be astronomical.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Furthermore, the technical challenge involved structuring the Shopify architecture to handle complex bundling logic. Customers needed the ability to mix-and-match seltzer flavors, subscribe for monthly deliveries with tiered discounts, and easily navigate a checkout flow that minimized drop-offs on mobile devices, which constituted over 75% of our expected traffic.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Strategic Execution</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              My approach started from first principles of Conversion Rate Optimization (CRO). Before writing a line of code or finalizing a design mockup, I mapped out the cognitive load of the customer journey. We segmented the homepage into three distinct psychological zones: The Hook (Why Kava?), The Proof (Social validation and ingredients), and The Pitch (Curated product bundles).
            </p>
            <p className="text-gray-600 leading-relaxed">
              To handle the educational burden, I architected a robust headless-style 'Learn' section within Shopify's liquid templating engine. This allowed us to serve rich FAQ schema dynamically, answering common objections directly on the product detail pages (PDPs) exactly at the point of high buying intent. We also implemented aggressive caching and image optimization strategies to ensure the visually heavy site loaded in under 1.5 seconds on mobile.
            </p>
          </div>
        </div>
        
        {/* Deep Dive into Optimization */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Technical Optimization & CRO</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Driving traffic to an E-commerce store is expensive; failing to convert that traffic is catastrophic. I led the technical implementation of several high-leverage CRO initiatives that significantly reduced cost-per-acquisition (CPA):
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</div>
              <div>
                <strong>Frictionless Cart Drawers:</strong> Instead of redirecting users to a dedicated `/cart` page, I implemented a sliding AJAX cart drawer. This allowed users to add items, see their subtotal update instantly, and unlock free shipping thresholds via a dynamic progress bar without ever leaving their current context.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</div>
              <div>
                <strong>Subscription Engine Integration:</strong> I integrated robust recurring billing APIs (via Recharge/Skio) directly into the native Shopify checkout. By defaulting the product selection to a "Subscribe & Save 15%" tier, we increased Monthly Recurring Revenue (MRR) capture by 28% in the first quarter of launch.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</div>
              <div>
                <strong>Mobile-First DOM Structuring:</strong> Recognizing the massive mobile skew, the CSS grid architecture was built mobile-first. Heavy JavaScript execution was deferred until after the Largest Contentful Paint (LCP) was resolved, ensuring a snappy, app-like feel for users scrolling on 4G networks.
              </div>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-lg">
            The culmination of these technical and strategic efforts resulted in a highly performant, visually striking digital storefront that not only educates a skeptical consumer base but actively converts them into loyal brand advocates.
          </p>
        </div>

        {/* Key Features & Skills */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-8 text-center">Implementation Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Shopify Liquid', 'Custom JavaScript', 'AJAX Cart API', 'Performance Auditing', 'A/B Testing', 'Tailwind CSS', 'Figma to Code', 'Subscription APIs'].map(skill => (
              <div key={skill} className="bg-gray-50 py-3 px-4 rounded-xl text-sm font-medium text-gray-700 border border-gray-100">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </section>
    </article>
  );
}

export default KavaCaseStudy;
