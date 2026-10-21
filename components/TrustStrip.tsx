import { ShieldCheck, Zap, Clock, Headphones } from 'lucide-react';
import { siteConfig, type TrustItem } from '@/lib/site';

const iconMap = {
  ShieldCheck,
  Zap,
  Clock,
  Headphones,
};

export function TrustStrip() {
  return (
    <section aria-label="Key Advantages" className="w-full bg-surface/35 backdrop-blur-md border-y border-line/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {siteConfig.trustItems.map((item: TrustItem, index: number) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`flex flex-col items-center justify-center text-center py-6 px-4 ${
                  index === 1
                    ? 'border-l border-line/60'
                    : index === 2
                    ? 'border-t border-line/60 lg:border-t-0 lg:border-l'
                    : index === 3
                    ? 'border-t border-l border-line/60 lg:border-t-0'
                    : ''
                }`}
              >
                {/* 40px line icon in accent */}
                <IconComponent
                  className="w-10 h-10 text-accent stroke-[1.5] mb-2 sm:mb-3 drop-shadow-[0_0_8px_rgba(63,203,248,0.4)]"
                  aria-hidden="true"
                />
                {/* Label only */}
                <span className="font-heading font-medium text-ink text-sm sm:text-base tracking-wide">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
