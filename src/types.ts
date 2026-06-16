/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageType = 'beranda' | 'tentang-kami' | 'layanan' | 'galeri' | 'hubungi-kami' | 'admin';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  description?: string;
  fallbackType?: 'drilling' | 'tower' | 'engine' | 'celebration' | 'children' | 'pump' | 'gush';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

export interface AppStats {
  value: string;
  label: string;
}
