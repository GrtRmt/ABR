import React, { useState, useMemo } from 'react';
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Settings,
  PlusCircle,
  Tag,
} from 'lucide-react';
import { BlogPost } from '../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface NewsSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  onOpenAdmin: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  posts,
  onSelectPost,
  onOpenAdmin,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter only published posts for the public view
  const publishedPosts = useMemo(() => {
    return posts.filter((p) => p.published);
  }, [posts]);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    publishedPosts.forEach((p) => set.add(p.category));
    return ['all', ...Array.from(set)];
  }, [publishedPosts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return publishedPosts;
    return publishedPosts.filter((p) => p.category === selectedCategory);
  }, [publishedPosts, selectedCategory]);

  return (
    <section
      id="nieuws"
      className="py-24 bg-white border-b border-slate-200/70 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="accent" className="px-3 py-1 font-semibold text-xs tracking-wide uppercase">
                <Newspaper className="w-3.5 h-3.5 text-blue-700 mr-1.5 inline" />
                Kennis, Advies & Actualiteit
              </Badge>
              <Badge variant="secondary" className="px-2.5 py-1 text-xs">
                Kantoor Ledegem
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Laatste nieuws & financieel advies
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Blijf op de hoogte van wijzigingen in verzekeringen, fiscale pensioenregelingen, rentetrends en nuttige schadepreventietips van ons team.
            </p>
          </div>

          {/* Admin Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <Button
              id="btn-open-news-admin"
              variant="outline"
              size="sm"
              onClick={onOpenAdmin}
              className="border-slate-300 text-slate-700 hover:text-[#0B2545] hover:border-slate-400 bg-slate-50/50 flex items-center gap-2 h-10 px-4 rounded-xl text-xs font-semibold shadow-2xs transition-all"
            >
              <Settings className="w-3.5 h-3.5 text-slate-500" />
              <span>Nieuws Beheren</span>
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#0B2545] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                  }`}
                >
                  {cat === 'all' ? 'Alle artikelen' : cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-8 space-y-3">
            <p className="text-slate-500 font-medium">
              Geen artikelen gevonden in deze categorie.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenAdmin}
              className="mt-2"
            >
              <PlusCircle className="w-4 h-4 mr-1.5" />
              Plaats een nieuw artikel
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                id={`blog-card-${post.id}`}
                className="flex flex-col justify-between overflow-hidden bg-white border-slate-200/90 hover:border-blue-300 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                onClick={() => onSelectPost(post)}
              >
                {/* Photo container */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" className="bg-[#0B2545]/90 backdrop-blur-xs text-white text-[11px] font-medium border-none shadow-xs">
                      {post.category}
                    </Badge>
                  </div>
                  {post.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900 shadow-xs">
                        <Sparkles className="w-3 h-3" />
                        Uitgelicht
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <CardHeader className="p-6 space-y-2.5 pb-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <CardTitle className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0B2545] transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 py-2 flex-1">
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#0B2545] group-hover:translate-x-1 transition-transform">
                    Lees artikel
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
