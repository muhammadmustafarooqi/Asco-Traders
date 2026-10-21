declare module 'lucide-react' {
  import type { ComponentType, SVGProps } from 'react';

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
    color?: string;
  }

  export type LucideIcon = ComponentType<LucideProps>;

  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const BadgeCheck: LucideIcon;
  export const Calendar: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Clock: LucideIcon;
  export const Diamond: LucideIcon;
  export const Eye: LucideIcon;
  export const Gem: LucideIcon;
  export const Handshake: LucideIcon;
  export const Headset: LucideIcon;
  export const Headphones: LucideIcon;
  export const Heart: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Menu: LucideIcon;
  export const Palette: LucideIcon;
  export const Phone: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Smile: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Target: LucideIcon;
  export const UserCog: LucideIcon;
  export const X: LucideIcon;
  export const Zap: LucideIcon;

  const icons: Record<string, LucideIcon>;
  export default icons;
}
