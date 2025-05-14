export type HotelCardProps = {
  id: string;
  image: string;
  imageMobile: string;
  titleImg: string;
  location: string;
  description: string;
  amenities: ('bed' | 'gastro' | 'activities')[];
  color: string;
};
