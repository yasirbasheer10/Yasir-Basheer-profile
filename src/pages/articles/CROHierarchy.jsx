import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Target, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function CROHierarchy() {
  return (
    <ArticleLayout
      title="The CRO Hierarchy of Needs"
      description="A definitive framework for prioritizing Conversion Rate Optimization in E-commerce, from basic site speed to advanced multivariate testing."
      date="August 30, 2026"
      readTime="6 min read"
      category="CRO & E-Commerce"
      relatedProject={{
        title: "Scaling E-Commerce Conversions",
        description: "See how we applied this exact framework to increase D2C sales and streamline the checkout flow.",
        link: "/case-study/kava"
      }}
    >
      <p className="text-xl text-gray-500 leading-relaxed font-light mb-8">
        Conversion Rate Optimization (CRO) is often treated as a dark art—a process of randomly changing button colors and moving text blocks in hopes of generating more revenue. In my experience scaling engineering teams for high-volume E-commerce brands, this approach almost always fails.
      </p>
      
      <blockquote className="text-2xl font-serif italic text-gray-900 border-l-4 border-black pl-6 my-12 py-2 bg-gray-50 rounded-r-2xl pr-4">
        "You cannot optimize a checkout flow if the page takes 6 seconds to load. You have to build from the ground up."
      </blockquote>

      <h2>The Problem with Random Testing</h2>
      <p>
        Most teams jump straight to advanced A/B testing before ensuring their foundational user experience is actually sound. Testing psychological triggers before fixing broken UI is like painting a car that has no engine.
      </p>

      <div className="my-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
            <Zap size={24} />
          </div>
          <h2 className="!mt-0 !mb-0 text-2xl font-bold">Level 1: Functional and Fast</h2>
        </div>
        <p>
          Before you run a single A/B test, your platform must be functional across all devices and lightning fast. 
        </p>
        <ul className="space-y-4 mt-6">
          <li className="flex gap-3 items-start !mb-0">
            <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Core Web Vitals:</strong> LCP, FID, and CLS must be in the green. Every second of delay drops conversion by up to 7%.</span>
          </li>
          <li className="flex gap-3 items-start !mb-0">
            <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Bug-Free Basics:</strong> Are there hidden JS console errors blocking add-to-cart events on Safari?</span>
          </li>
          <li className="flex gap-3 items-start !mb-0">
            <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Mobile Responsiveness:</strong> Over 70% of traffic is mobile. If the mobile tap targets are too small, you are losing money.</span>
          </li>
        </ul>
      </div>

      <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 my-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
            <Target size={20} />
          </div>
          <h2 className="!mt-0 !mb-0 text-xl font-bold text-orange-900">Level 2: Frictionless UX</h2>
        </div>
        <p className="text-orange-800">
          Once the site is fast, you must remove friction. Friction is anything that makes the user think harder than they need to.
        </p>
        <p className="text-orange-800">
          This includes streamlining the checkout process (offering Apple Pay, Google Pay, Shop Pay), removing mandatory account creation, and ensuring site search is highly tolerant of typos.
        </p>
      </div>

      <div className="my-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
            <TrendingUp size={24} />
          </div>
          <h2 className="!mt-0 !mb-0 text-2xl font-bold">Level 3: Advanced Optimization</h2>
        </div>
        <p>
          Only when Levels 1 and 2 are mastered should you begin multivariate testing. This is the tip of the pyramid where you test psychological triggers:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <h4 className="font-bold mb-2">Scarcity vs. Urgency</h4>
            <p className="text-sm text-gray-500">Testing "Only 2 left" against "Sale ends in 1 hour".</p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <h4 className="font-bold mb-2">Price Anchoring</h4>
            <p className="text-sm text-gray-500">Displaying struck-out MSRP next to the discounted price.</p>
          </div>
        </div>
      </div>
      
      <hr className="my-10 border-gray-200" />
      
      <p className="font-medium text-xl">
        <strong>Conclusion:</strong> Stop testing button colors on a slow website. Fix the foundation, remove the friction, and then optimize the psychology.
      </p>
    </ArticleLayout>
  );
}