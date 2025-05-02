import { Slide } from "@/types/slide";

export async function getHeroSlides(): Promise<Slide[]> {
  return [
    {
      mobileImage: "/img/hero-mobile-1.jpg",
      desktopImage: "/img/hero-desktop-1.jpg",
      title: ["Concepto", "co-living"],
    },
    {
      mobileImage: "/img/hero-mobile-2.jpg",
      desktopImage: "/img/hero-desktop-2.webp",
      title: ["Experiencias", "únicas"],
    },
    {
      mobileImage: "/img/hero-mobile-3.jpg",
      desktopImage: "/img/hero-desktop-3.jpg",
      title: ["Gastronomía", "multi-formato"],
    },
  ];
}
