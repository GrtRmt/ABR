import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  Plus,
  Edit2,
  Trash2,
  Image as ImageIcon,
  Upload,
  Check,
  Eye,
  AlertCircle,
  FileText,
  RotateCcw,
  Sparkles,
  Calendar,
  Layers,
  Save,
  ShieldAlert,
} from 'lucide-react';
import { BlogPost } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface AdminNewsPageProps {
  posts: BlogPost[];
  onSavePost: (post: BlogPost) => void;
  onDeletePost: (postId: string) => void;
  onResetDefaults: () => void;
  onClose: () => void;
  onPreviewPost: (post: BlogPost) => void;
}

const PRESET_IMAGES = [
  { label: 'Advies & Kantoor', url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Wonen & Bouw', url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Preventie & Huis', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Financieel Overleg', url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80' },
  { label: 'KMO & Ondernemen', url: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Familie & Zekerheid', url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80' },
];

const CATEGORIES = [
  'Verzekeringen',
  'Fiscaliteit & Pensioen',
  'Wonen & Krediet',
  'Schadepreventie',
  'Zelfstandigen & KMO',
  'Sparen & Beleggen',
  'Kantoor & Visie',
];

export const AdminNewsPage: React.FC<AdminNewsPageProps> = ({
  posts,
  onSavePost,
  onDeletePost,
  onResetDefaults,
  onClose,
  onPreviewPost,
}) => {
  const [activeTab, setActiveTab] = useState<'list' | 'editor'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageCaption, setImageCaption] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Remaut Verzekeringen');
  const [authorRole, setAuthorRole] = useState('Onafhankelijk Makelaar');
  const [published, setPublished] = useState(true);
  const [featured, setFeatured] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const showFeedback = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleStartNew = () => {
    setEditingPost(null);
    setTitle('');
    setCategory(CATEGORIES[0]);
    setCustomCategory('');
    setImageUrl(PRESET_IMAGES[0].url);
    setImageCaption('');
    setExcerpt('');
    setContent('');
    setAuthor('Remaut Verzekeringen');
    setAuthorRole('Onafhankelijk Makelaar');
    setPublished(true);
    setFeatured(false);
    setActiveTab('editor');
  };

  const handleStartEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    if (CATEGORIES.includes(post.category)) {
      setCategory(post.category);
      setCustomCategory('');
    } else {
      setCategory('Ander');
      setCustomCategory(post.category);
    }
    setImageUrl(post.imageUrl);
    setImageCaption(post.imageCaption || '');
    setExcerpt(post.excerpt);
    setContent(post.content);
    setAuthor(post.author);
    setAuthorRole(post.authorRole || '');
    setPublished(post.published);
    setFeatured(Boolean(post.featured));
    setActiveTab('editor');
  };

  // Image Upload handler (File to Data URL)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showFeedback('Selecteer een geldig afbeeldingsbestand (JPG, PNG, WebP).', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setImageUrl(event.target.result);
        showFeedback('Foto succesvol ingeladen!');
      }
    };
    reader.readAsDataURL(file);
  };

  // Save handler
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      showFeedback('Vul een titel in voor het artikel.', 'error');
      return;
    }

    if (!content.trim()) {
      showFeedback('Vul de inhoud van het artikel in.', 'error');
      return;
    }

    if (!imageUrl.trim()) {
      showFeedback('Selecteer of upload een foto voor het artikel.', 'error');
      return;
    }

    const finalCategory = category === 'Ander' && customCategory.trim() ? customCategory.trim() : category;

    // Automatic calculation of reading time (avg 200 words/min)
    const wordCount = content.trim().split(/\s+/).length;
    const calcReadTime = `${Math.max(1, Math.round(wordCount / 180))} min leestijd`;

    // Dutch formatted date
    const today = new Date();
    const dateFormatted = today.toLocaleDateString('nl-BE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const postToSave: BlogPost = {
      id: editingPost ? editingPost.id : `post-${Date.now()}`,
      title: title.trim(),
      slug: (editingPost ? editingPost.slug : title.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) || 'artikel',
      date: editingPost ? editingPost.date : dateFormatted,
      category: finalCategory,
      imageUrl: imageUrl.trim(),
      imageCaption: imageCaption.trim() || undefined,
      excerpt: excerpt.trim() || content.trim().slice(0, 160) + '...',
      content: content.trim(),
      author: author.trim() || 'Remaut Verzekeringen',
      authorRole: authorRole.trim() || undefined,
      readTime: calcReadTime,
      published,
      featured,
    };

    onSavePost(postToSave);
    showFeedback(editingPost ? 'Artikel succesvol bijgewerkt!' : 'Nieuw artikel succesvol geplaatst!');
    setActiveTab('list');
    setEditingPost(null);
  };

  const handleDelete = (post: BlogPost) => {
    if (window.confirm(`Weet u zeker dat u het artikel "${post.title}" wilt verwijderen?`)) {
      onDeletePost(post.id);
      showFeedback('Artikel verwijderd.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="flex items-center gap-2 border-slate-300 text-slate-700 hover:bg-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Terug naar website</span>
            </Button>
            <div>
              <h1 className="text-2xl font-black text-[#0B2545] tracking-tight">
                Nieuwsbeheer & Blog Portal
              </h1>
              <p className="text-xs text-slate-500">
                Remaut Verzekeringen & Fintro Ledegem • Beheerdersomgeving
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === 'list' && (
              <Button
                onClick={handleStartNew}
                className="bg-[#0B2545] hover:bg-[#133D72] text-white flex items-center gap-2 font-bold text-sm shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Nieuw artikel plaatsen</span>
              </Button>
            )}
            {activeTab === 'editor' && (
              <Button
                variant="outline"
                onClick={() => setActiveTab('list')}
                className="text-slate-700"
              >
                <span>Terug naar overzicht</span>
              </Button>
            )}
          </div>
        </div>

        {/* Feedback Alert */}
        {notification && (
          <div
            className={`p-4 rounded-xl flex items-center justify-between gap-3 text-sm font-medium animate-in fade-in ${
              notification.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <div className="flex items-center gap-2">
              {notification.type === 'success' ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600" />
              )}
              <span>{notification.message}</span>
            </div>
          </div>
        )}

        {/* TAB 1: LIST VIEW */}
        {activeTab === 'list' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0B2545]" />
                <h2 className="text-lg font-bold text-slate-900">
                  Gepubliceerde en opgeslagen artikelen ({posts.length})
                </h2>
              </div>

              <button
                onClick={() => {
                  if (window.confirm('Wilt u de artikelen herstellen naar de oorspronkelijke voorbeeldberichten?')) {
                    onResetDefaults();
                    showFeedback('Artikelen hersteld naar standaardberichten.');
                  }
                }}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
                title="Herstel de standaard artikelen"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Herstel voorbeelden</span>
              </button>
            </div>

            {posts.length === 0 ? (
              <Card className="p-12 text-center space-y-4 bg-white">
                <p className="text-slate-500">Er zijn momenteel geen blogberichten.</p>
                <Button onClick={handleStartNew} className="bg-[#0B2545] text-white">
                  Plaats uw eerste artikel
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    className="p-4 sm:p-5 bg-white border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-xs transition-shadow"
                  >
                    <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                      <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80';
                          }}
                        />
                      </div>

                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="accent" className="text-[10px] uppercase font-bold">
                            {post.category}
                          </Badge>
                          {post.published ? (
                            <Badge variant="success" className="text-[10px]">
                              Gepubliceerd
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-[10px] bg-amber-50 text-amber-800 border-amber-200">
                              Concept
                            </Badge>
                          )}
                          {post.featured && (
                            <span className="text-[10px] text-amber-600 font-bold flex items-center gap-0.5">
                              <Sparkles className="w-3 h-3" />
                              Uitgelicht
                            </span>
                          )}
                        </div>

                        <h3 className="font-bold text-slate-900 text-base truncate" title={post.title}>
                          {post.title}
                        </h3>

                        <p className="text-xs text-slate-500 line-clamp-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-0.5">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>Door {post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onPreviewPost(post)}
                        className="text-xs text-slate-700 hover:text-[#0B2545] h-9 px-3"
                        title="Artikel bekijken"
                      >
                        <Eye className="w-3.5 h-3.5 sm:mr-1.5" />
                        <span className="hidden sm:inline">Bekijk</span>
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleStartEdit(post)}
                        className="text-xs text-slate-700 hover:text-blue-700 h-9 px-3"
                        title="Bewerken"
                      >
                        <Edit2 className="w-3.5 h-3.5 sm:mr-1.5" />
                        <span className="hidden sm:inline">Bewerk</span>
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post)}
                        className="text-xs text-red-600 hover:bg-red-50 hover:border-red-200 h-9 px-3"
                        title="Verwijderen"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: ARTICLE EDITOR */}
        {activeTab === 'editor' && (
          <form onSubmit={handleSave} className="space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-[#0B2545]">
                  {editingPost ? 'Artikel bewerken' : 'Nieuw artikel plaatsen'}
                </h2>
                <p className="text-xs text-slate-500">
                  Een post bestaat uit een representatieve foto en een gedetailleerd artikel.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span>Direct publiceren op website</span>
                </label>
              </div>
            </div>

            {/* Title & Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Titel van het artikel *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Bijv. Nieuwe regels voor de brandverzekering in 2026..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2545] text-sm text-slate-900 font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Categorie
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2545] text-sm text-slate-900 bg-white"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                  <option value="Ander">Ander (aangepast)...</option>
                </select>

                {category === 'Ander' && (
                  <input
                    type="text"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    placeholder="Eigen categorie..."
                    className="w-full mt-2 px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900"
                  />
                )}
              </div>
            </div>

            {/* PHOTO SECTION (Upload, Presets or URL) */}
            <div className="space-y-3 p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-blue-700" />
                <span>Foto van het artikel *</span>
              </label>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Photo Input Controls */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <span className="text-xs text-slate-600 block mb-1.5 font-semibold">
                      Optie 1: Upload een foto vanaf uw toestel
                    </span>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="news-image-upload-input"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-white hover:bg-slate-50 text-slate-800 border-slate-300 flex items-center gap-2 text-xs"
                      >
                        <Upload className="w-3.5 h-3.5 text-blue-600" />
                        <span>Kies foto van computer / gsm</span>
                      </Button>
                      <span className="text-[11px] text-slate-500">
                        PNG, JPG of WebP (wordt direct bewaard)
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-600 block mb-1.5 font-semibold">
                      Optie 2: Of selecteer een financiële voorbeeldfoto
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {PRESET_IMAGES.map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => setImageUrl(preset.url)}
                          className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                            imageUrl === preset.url
                              ? 'bg-[#0B2545] text-white border-[#0B2545]'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-600 block mb-1.5 font-semibold">
                      Optie 3: Of voer een directe afbeeldings-URL in
                    </span>
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#0B2545] text-xs text-slate-800 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1 font-semibold">
                      Fotobijschrift (optioneel)
                    </label>
                    <input
                      type="text"
                      value={imageCaption}
                      onChange={(e) => setImageCaption(e.target.value)}
                      placeholder="Bijv. Ons kantoor aan de Stationsstraat in Ledegem..."
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800 bg-white"
                    />
                  </div>
                </div>

                {/* Photo Preview Card */}
                <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-xs font-semibold text-slate-400 mb-2">
                    Fotovoorbeeld
                  </span>
                  <div className="w-full h-36 rounded-lg overflow-hidden bg-slate-100 relative border border-slate-200">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="Voorbeeld"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80';
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400 text-xs">
                        Geen foto gekozen
                      </div>
                    )}
                  </div>
                  {imageCaption && (
                    <p className="text-[11px] text-slate-500 mt-1 italic text-center truncate w-full">
                      {imageCaption}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Excerpt (Korte samenvatting) */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Korte samenvatting (excerpt)
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                placeholder="Een korte inleiding van 1-2 zinnen voor het overzicht..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2545] text-sm text-slate-900"
              />
            </div>

            {/* Article Content */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Volledig artikel (inhoud) *
                </label>
                <span className="text-[11px] text-slate-400">
                  Tip: gebruik <code className="bg-slate-100 px-1 py-0.5 rounded">### Tussentitel</code> of <code className="bg-slate-100 px-1 py-0.5 rounded">- Lijstitem</code>
                </span>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                placeholder="Schrijf hier het volledige artikel. Gebruik lege regels tussen alinea's..."
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2545] text-sm text-slate-900 font-sans leading-relaxed"
              />
            </div>

            {/* Author & Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-slate-100">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Auteur
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Functie van auteur
                </label>
                <input
                  type="text"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  placeholder="Bijv. Zaakvoerder / Kredietbemiddelaar"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-800"
                />
              </div>

              <div className="flex items-center gap-4 pt-6">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-400"
                  />
                  <span>Markeer als « Uitgelicht »</span>
                </label>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setActiveTab('list');
                  setEditingPost(null);
                }}
                className="text-slate-700"
              >
                Annuleren
              </Button>
              <Button
                type="submit"
                id="btn-save-blog-post"
                className="bg-[#0B2545] hover:bg-[#133D72] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm"
              >
                <Save className="w-4 h-4" />
                <span>{editingPost ? 'Wijzigingen opslaan' : 'Artikel publiceren'}</span>
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
