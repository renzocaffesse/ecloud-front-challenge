import { Reserva } from '@/types/reserva';

// Lista mockeada de hoteles con sus datos. En el real vendrían de un CMS o endpoint.
// Si `titleImg` está presente(como viene de Figma), se usa como imagen del título en lugar de texto plano.
export const mockReservas: Reserva[] = [
  {
    id: 'urban',
    image: '/img/reservas/urban.jpg',
    title: 'URBAN',
    titleImg: '/img/reservas/urban-title.svg',
    subtitle: 'Social hub de alta experiencia, para millennials y zetas ejecutivos.',
    amenities: [
      'Habitaciones VIP',
      'Piscina Climatizada',
      'Salón de eventos',
      'Espacio Coworking',
      'Wifi gratis',
    ],
    price: 4560,
  },
  {
    id: 'tribe',
    image: '/img/reservas/tribe.jpg',
    title: 'Tribe',
    titleImg: '/img/reservas/tribe-title.svg',
    subtitle: 'Exploradores, artistas y emprendedores juntos en un lugar único.',
    amenities: [
      'Habitaciones VIP',
      'Piscina',
      'Gastronomía Vegana',
      'Wifi gratis',
    ],
    price: 3190,
  },
  {
    id: 'family',
    image: '/img/reservas/family.jpg',
    title: 'Family',
    titleImg: '/img/reservas/family-title.svg',
    subtitle: 'Vive junto a toda tu familia la mejor experiencia de sus vidas.',
    amenities: [
      'Habitaciones VIP',
      'Piscina Climatizada',
      'Actividades',
      'Spa',
      'Cancha de golf',
      'Wifi gratis',
    ],
    price: 4560,
  },
];
