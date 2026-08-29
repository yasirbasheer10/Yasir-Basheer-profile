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
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Kava by Mitra9 is a feel-good beverage brand offering non-alcoholic kava products, including kava seltzers, drink mixes, and shots. The brand focuses on relaxation, mood support, stress relief, and a modern alternative to traditional relaxation products. The website needed to clearly present the product range, educate customers about kava, and create a smooth shopping experience for both first-time buyers and returning customers.
          </p>
        </div>

        {/* The Challenge & My Approach */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed">
              The main challenge was to build an ecommerce experience around a product category that requires both education and trust. Many customers may not fully understand what kava is, how it works, or which product format is right for them. The website needed to combine strong product discovery, clear educational content, compliance-focused messaging, and a simple path to purchase.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">My Approach</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I focused on creating a Shopify experience that balances brand storytelling with conversion-focused ecommerce. The homepage and shop structure were designed to highlight key product categories such as seltzers, drink mixes, and shots, while giving users quick access to product pricing, bundles, and add-to-cart actions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              To support customer confidence, educational sections were included to explain what kava is, its benefits, how it differs from other relaxation products, and how customers can use it safely. The Learn and FAQ sections help answer important questions around product effects, usage, shipping, returns, and compliance.
            </p>
          </div>
        </div>

        {/* Key Features & Skills */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-6">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span> Structured product catalog with category sections</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span> Bundle-building functionality</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span> Subscription/save messaging</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span> FAQ content and educational pages</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span> Newsletter capture & Mobile-friendly flow</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span> Benefit-focused content (relaxation, mood support)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Skills Used</h3>
              <div className="flex flex-wrap gap-2">
                {['Shopify Development', 'Ecommerce UX', 'Responsive Design', 'Product Page Optimization', 'Collection Setup', 'Bundle Flow Planning', 'FAQ Structuring', 'Basic SEO', 'Conversion Layouts'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-gray-50 text-gray-700 text-sm border border-gray-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <hr className="my-10 border-gray-100" />
          
          <div>
            <h3 className="text-xl font-semibold mb-4">The Result</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              The final website gives Kava by Mitra9 a stronger ecommerce presence with a clear product journey, educational support, and a conversion-focused Shopify structure. Customers can quickly explore products, understand the benefits of kava, compare formats, build bundles, and complete purchases with more confidence.
            </p>
          </div>
        </div>

      </section>
    </article>
  );
}

export default KavaCaseStudy;
