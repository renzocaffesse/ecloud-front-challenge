import { HotelCardProps } from '@/types/hotel';

// Mock de hoteles con imágenes diferenciadas para mobile/desktop
// Se usa una imagen PNG para el título por no contar con la fuente original
export const mockHoteles: HotelCardProps[] = [
  {
    id: 'urban',
    image: '/img/hoteles/urban-hotel.jpg',
    imageMobile: '/img/hoteles/urban-mobile.jpg',
    titleImg: '/img/titles/urban-title.png',
    location: 'Arequipa',
    description:
      'Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar.',
    amenities: ['bed', 'gastro', 'activities'],
    color: 'rgba(61, 99, 169, 1)',
  },
  {
    id: 'tribe',
    image: '/img/hoteles/tribe-hotel.jpg',
    imageMobile: '/img/hoteles/tribe-mobile.jpg',
    titleImg: '/img/titles/tribe-title.png',
    location: 'Arequipa',
    description:
      'Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar.',
    amenities: ['bed', 'gastro', 'activities'],
    color: 'rgba(43, 43, 43, 1)',
  },
  {
    id: 'family',
    image: '/img/hoteles/family-hotel.jpg',
    imageMobile: '/img/hoteles/family-mobile.jpg',
    titleImg: '/img/titles/family-title.png',
    location: 'Arequipa',
    description:
      'Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar.',
    amenities: ['bed', 'gastro', 'activities'],
    color: 'rgba(170, 34, 117, 1)',
  },
];
