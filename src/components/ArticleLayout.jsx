import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ThumbsUp, ThumbsDown, MessageSquare, Share2, ArrowRight } from 'lucide-react';

export default function ArticleLayout({ 
  title, 
  description, 
  date, 
  readTime, 
  category, 
  heroImage, 
  children,
  relatedProject
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 pb-20">
      <Helmet>
        <title>{title} | Yasir Basheer</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Navigation */}
      <nav className="w-full px-4 md:px-8 py-6 max-w-[1000px] mx-auto border-b border-gray-200 mb-10">
        <Link to="/articles" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft size={16} /> Back to Articles
        </Link>
      </nav>

      <article className="max-w-[1000px] mx-auto px-4 md:px-8">
        {/* Article Header */}
        <header className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            {category}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1] max-w-4xl">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span>By Yasir Basheer</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </header>

        {/* Hero Visual */}
        {heroImage && (
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-xl border border-gray-200 bg-white flex items-center justify-center">
            <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Article Body & Sidebar */}
        <div className="flex flex-col md:flex-row gap-12 relative">
          
          {/* Floating Social Actions (Desktop) */}
          <div className="hidden md:flex flex-col gap-4 sticky top-32 h-fit">
            <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm group">
              <ThumbsUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-600 hover:bg-red-50 transition-all shadow-sm group">
              <ThumbsDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <a href="#comments" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green-600 hover:border-green-600 hover:bg-green-50 transition-all shadow-sm group">
              <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 hover:bg-gray-100 transition-all shadow-sm group">
              <Share2 size={20} />
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-[700px] text-lg text-gray-700 leading-relaxed [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>li]:mb-2 [&>strong]:text-gray-900">
            {children}
          </div>
        </div>

        {/* Mobile Social Actions */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-12 py-6 border-t border-b border-gray-200">
          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium">
            <ThumbsUp size={20} /> Like
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 font-medium">
            <ThumbsDown size={20} />
          </button>
          <a href="#comments" className="flex items-center gap-2 text-gray-500 hover:text-green-600 font-medium">
            <MessageSquare size={20} /> Comment
          </a>
        </div>

        {/* Related Project Block */}
        {relatedProject && (
          <div className="max-w-[700px] mx-auto ml-0 md:ml-24 mt-20 bg-gray-900 text-white p-8 md:p-10 rounded-3xl shadow-xl">
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">See It In Action</h3>
            <h2 className="text-3xl font-bold mb-4">{relatedProject.title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{relatedProject.description}</p>
            <Link to={relatedProject.link} className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              View Case Study <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Comments Section */}
        <div id="comments" className="max-w-[700px] mx-auto ml-0 md:ml-24 mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-8">Discussion (0)</h3>
          
          {/* Comment Input */}
          <div className="flex gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="flex-1">
              <textarea 
                className="w-full bg-white border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all resize-none" 
                rows="3" 
                placeholder="What are your thoughts on this?"
              ></textarea>
              <div className="flex justify-end mt-3">
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-black transition-colors">
                  Post Comment
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 py-10 bg-white rounded-2xl border border-gray-100 border-dashed">
            No comments yet. Be the first to start the conversation!
          </div>
        </div>
      </article>
    </div>
  );
}