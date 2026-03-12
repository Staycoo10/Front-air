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
  { id: 'o1', section: 'Airbnb Originals', title: 'Wheelchair curling with Olympian Amos Mosaner', subtitle: 'Cortina d\'Ampezzo, Italy', image: 'https://images.unsplash.com/photo-1542838686-37ed7a9efa38?auto=format&fit=crop&q=80&w=600', price: 31, unit: 'guest', badge: 'Original' },
  { id: 'o2', section: 'Airbnb Originals', title: 'Tapas and trophies with Fernando Morientes', subtitle: 'Coming April 10', image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600', price: 50, unit: 'guest', badge: 'Original' },
  { id: 'o3', section: 'Airbnb Originals', title: 'VIP access to a LALIGA match with Isabel Forner', subtitle: 'Coming April 30', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=600', price: 100, unit: 'guest', badge: 'Original' },
  
  // Bucharest
  { id: 'b1', section: 'Experiences in Bucharest', title: 'Bucharest Highlights Walking Tour', image: 'https://images.unsplash.com/photo-1584646098378-0874589d79b1?auto=format&fit=crop&q=80&w=600', price: 21, unit: 'guest', rating: 4.9, badge: 'Popular' },
  { id: 'b2', section: 'Experiences in Bucharest', title: 'Real Tour on Communism in Romania', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=600', price: 31, unit: 'guest', rating: 4.97, badge: 'Popular' },
  { id: 'b3', section: 'Experiences in Bucharest', title: 'Pubs, Bars & History - The Tipsy Tour', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600', price: 25, unit: 'guest', rating: 5.0, badge: 'Popular' },

  // Milan
  { id: 'm1', section: 'Experiences in Milan', title: 'Make pasta and tiramisù in an Italian home', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600', price: 65, unit: 'guest', badge: 'Popular' },
  { id: 'm2', section: 'Experiences in Milan', title: 'Ride the Bernina Train through Swiss Alps', image: 'https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=80&w=600', price: 120, unit: 'guest', badge: 'Popular' },
  { id: 'm3', section: 'Experiences in Milan', title: 'Private walk through Milan\'s heart', image: 'https://images.unsplash.com/photo-1513581166358-166cdef1559a?auto=format&fit=crop&q=80&w=600', price: 45, unit: 'guest', badge: 'Popular' },
];