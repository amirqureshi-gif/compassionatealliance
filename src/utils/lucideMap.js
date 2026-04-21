import {
  Ambulance,
  Award,
  BookOpen,
  Calendar,
  DollarSign,
  FileText,
  Globe,
  Heart,
  Home,
  MapPin,
  Shield,
  Star,
  TrendingUp,
  Users,
  Utensils,
} from 'lucide-react';

const MAP = {
  Ambulance,
  Award,
  BookOpen,
  Calendar,
  DollarSign,
  FileText,
  Globe,
  Heart,
  Home,
  MapPin,
  Shield,
  Star,
  TrendingUp,
  Users,
  Utensils,
};

export function resolveLucideIcon(name) {
  return MAP[name] || Shield;
}
