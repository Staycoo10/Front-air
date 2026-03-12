export type Service = {
  id: string;
  section: string;
  title: string;
  subtitle?: string;
  image: string;
  price: number;
  unit: string;
  rating?: number;
  badge?: 'Original' | 'Popular';
};

export const mockServices: Service[] = [
  // Airbnb Originals
  { id: 'o1', section: 'Airbnb Originals', title: 'Wheelchair curling with Olympian Amos Mosaner', subtitle: 'Cortina d\'Ampezzo, Italy', image: 'https://pentictonwesternnews.com/wp-content/uploads/sites/11/2026/03/41797362_web1_260319-VMS-ina-wednesday-FORREST_1.jpg', price: 31, unit: 'guest', badge: 'Original' },
  { id: 'o2', section: 'Airbnb Originals', title: 'Tapas and trophies with Fernando Morientes', subtitle: 'Coming April 10', image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600', price: 50, unit: 'guest', badge: 'Original' },
  { id: 'o3', section: 'Airbnb Originals', title: 'VIP access to a LALIGA match with Isabel Forner', subtitle: 'Coming April 30', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=600', price: 100, unit: 'guest', badge: 'Original' },
  { id: 'o4', section: 'Airbnb Originals', title: 'Cooking with a Michelin-starred chef in Paris', subtitle: 'Coming May 15', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600', price: 75, unit: 'guest', badge: 'Original' },
  { id: 'o5', section: 'Airbnb Originals', title: 'Cooking with a Michelin-starred chef in Paris', subtitle: 'Coming May 15', image: 'https://www.institutescoffier.com/wp-content/uploads/2025/02/michelin-star-chef.webp', price: 75, unit: 'guest', badge: 'Original' },
  // Bucharest
  { id: 'b1', section: 'Experiences in Bucharest', title: 'Bucharest Highlights Walking Tour', image: 'https://autumntales.ro/wp-content/uploads/elementor/thumbs/image00023-scaled-qbhc48eytzd9lfsdl0cgtk7ohfq7ckrerzupvjfuio.jpg', price: 21, unit: 'guest', rating: 4.9, badge: 'Popular' },
  { id: 'b2', section: 'Experiences in Bucharest', title: 'Real Tour on Communism in Romania', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=600', price: 31, unit: 'guest', rating: 4.97, badge: 'Popular' },
  { id: 'b3', section: 'Experiences in Bucharest', title: 'Pubs, Bars & History - The Tipsy Tour', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600', price: 25, unit: 'guest', rating: 5.0, badge: 'Popular' },
  { id: 'b4', section: 'Experiences in Bucharest', title: 'Bucharest Food Tour', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/60/80/9b/details.jpg', price: 45, unit: 'guest', rating: 4.85, badge: 'Popular' },
  { id: 'b5', section: 'Experiences in Bucharest', title: 'Bucharest Food Tour', image: 'https://travelnotesandbeyond.com/wp-content/uploads/2021/06/caru-cu-bere-1-of-1.jpg', price: 55, unit: 'guest', rating: 4.85, badge: 'Popular' },
  // Milan
  { id: 'm1', section: 'Experiences in Milan', title: 'Make pasta and tiramisù in an Italian home', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600', price: 65, unit: 'guest', badge: 'Popular' },
  { id: 'm2', section: 'Experiences in Milan', title: 'Ride the Bernina Train through Swiss Alps', image: 'https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=80&w=600', price: 120, unit: 'guest', badge: 'Popular' },
  { id: 'm3', section: 'Experiences in Milan', title: 'Private walk through Milan\'s heart', image: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1144333-active_media/original/984c33f2-c357-4ff0-a83d-b6f5d1eba5df.jpg', price: 45, unit: 'guest', badge: 'Popular' },
  { id: 'm4', section: 'Experiences in Milan', title: 'Milanese aperitivo and local secrets', image: 'https://mediolan.pl/wp-content/uploads/2025/03/aperitivo-na-Naviglio-1200x800.jpg', price: 55, unit: 'guest', badge: 'Popular' },
  { id: 'm5', section: 'Experiences in Milan', title: 'Milanese aperitivo and local secrets', image: 'https://aws-tiqets-cdn.imgix.net/images/content/1ab60ec8edfd41ed82e46a3b34ba5ab3.jpeg?auto=format%2Ccompress&fit=crop&q=70&w=600&s=e29aa743ebaa270495b5d2a3ecfa450e', price: 75, unit: 'guest', badge: 'Popular' }
];