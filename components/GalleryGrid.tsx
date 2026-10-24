'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, X, ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { galleryProjects, galleryCategories, type GalleryProject } from '@/lib/gallery';
import { siteConfig } from '@/lib/site';

const noScrollbar = '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(null);

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === selectedCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setActiveProject(filteredProjects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveProject(filteredProjects[prevIndex]);
  };

  return (
    <section
      id="gallery-showcase"
      aria-label="Architectural Lighting Projects Showcase"
      className="relative w-full max-w-[100vw] py-12 sm:py-16 lg:py-24 bg-[#000613] overflow-hidden scroll-mt-20"
    >
      {/* Background ambient lighting streaks */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30" aria-hidden="true">
        <Image
          src="/asco_separate_images_webp/glue-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0, 6, 19, 0.7) 0%, rgba(0, 6, 19, 0.98) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ CATEGORY FILTER BAR ============ */}
        <div className="rounded-2xl border border-primary/40 bg-[#00102a]/70 backdrop-blur-md p-3 sm:p-4 shadow-[0_0_24px_rgba(6,161,255,0.15)] mb-10 sm:mb-14 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter gallery by category"
            className={`flex md:flex-wrap items-center gap-2 overflow-x-auto md:overflow-visible p-1 -m-1 ${noScrollbar}`}
          >
            {galleryCategories.map((cat) => {
              const count =
                cat === 'All Projects'
                  ? galleryProjects.length
                  : galleryProjects.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-primary to-accent text-[#000613] shadow-[0_0_18px_rgba(63,203,248,0.55)]'
                      : 'border border-primary/40 bg-[#000814]/70 text-ink-muted hover:text-ink hover:border-accent/70 hover:bg-[#001438]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`min-w-[1.25rem] text-center text-[10px] leading-none px-1.5 py-1 rounded-full font-bold ${
                      isSelected
                        ? 'bg-[#000613]/25 text-[#000613]'
                        : 'bg-primary/20 text-accent'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-ink-muted font-medium self-end md:self-auto shrink-0">
            Showing <span className="text-accent font-bold">{filteredProjects.length}</span> installations
          </div>
        </div>

        {/* ============ PROJECTS CARD GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-2xl border border-primary/50 bg-[#000d24]/90 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(6,161,255,0.18)] hover:border-accent hover:shadow-[0_0_36px_rgba(63,203,248,0.35)] transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#000814]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={idx < 3}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient vignette and cyan sheen overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#000d24] via-transparent to-black/30"
                />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#000613]/85 text-accent border border-primary/50 backdrop-blur-md shadow-[0_0_12px_rgba(6,161,255,0.4)]">
                    {project.category}
                  </span>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-3.5 z-10 flex items-center gap-1.5 text-ink/90 text-xs font-medium bg-[#000613]/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-line/40">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-ink group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-ink-muted text-xs sm:text-[13px] leading-relaxed mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-line/50 flex items-center justify-between gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-accent font-medium truncate">
                    <Zap className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.productUsed}</span>
                  </span>

                  <span className="shrink-0 text-accent font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ============ LIGHTBOX ZOOM MODAL ============ */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl rounded-3xl border border-primary/60 bg-[#000d24] overflow-hidden shadow-[0_0_50px_rgba(6,161,255,0.4)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#000814]/80 border border-primary/60 text-ink hover:text-accent hover:border-accent flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav Arrows */}
            <button
              type="button"
              onClick={handlePrevProject}
              aria-label="Previous project"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#000814]/80 border border-primary/60 text-ink hover:text-accent hover:border-accent flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNextProject}
              aria-label="Next project"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#000814]/80 border border-primary/60 text-ink hover:text-accent hover:border-accent flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full bg-[#000814] overflow-hidden">
              <Image
                src={activeProject.image}
                alt={activeProject.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#000d24] via-transparent to-black/30"
              />
            </div>

            {/* Modal Details Footer */}
            <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span className="px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/40">
                    {activeProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-ink-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {activeProject.location}
                  </span>
                </div>

                <h2 id="modal-project-title" className="font-heading font-bold text-xl sm:text-2xl text-ink">
                  {activeProject.title}
                </h2>
                <p className="text-ink-muted text-xs sm:text-sm mt-2 leading-relaxed">
                  {activeProject.description}
                </p>
                <p className="text-accent text-xs sm:text-sm mt-3 font-semibold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 shrink-0" />
                  Product: {activeProject.productUsed}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.primaryNumber}?text=${encodeURIComponent(
                    `Hello ASCO, I was admiring the ${activeProject.title} in your gallery (${activeProject.location}). I would like to inquire about a similar lighting design for my project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-[#000613] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(6,161,255,0.45)] hover:shadow-[0_0_28px_rgba(63,203,248,0.7)] transition-all cursor-pointer"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/contact#inquiry-form"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/70 bg-[#00102a]/80 text-accent font-semibold text-xs sm:text-sm hover:border-accent hover:bg-primary/20 transition-all cursor-pointer"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GalleryGrid;
