// types.ts (or at the top of your file)
export type Experience = {
  id: string;
  category: string;
  title: string;
  image: string;
  price: number;
  unit: string;
  rating: number;
  location?: string;
  minBooking?: string;
  isPopular?: boolean;
};

export const mockExperiences: Experience[] = [
  // Chefs
  { id: 'c1', category: 'Chefs', title: 'Authentic Roman meal', image: 'https://i0.wp.com/cibiantiquorum.com/wp-content/uploads/2022/10/IMG_2825.jpg?fit=900%2C675&ssl=1', price: 81, unit: 'guest', rating: 4.97 },
  { id: 'c2', category: 'Chefs', title: 'Hyperlocal, foraged fare by Clair', image: 'https://cdn.prod.website-files.com/68402e9c11c1d852203dc7c8/685e6bdca34aaa067c6a1adb_FullTable_Fairgrounds_DerrickKoch_223_-2-scaled.jpeg', price: 99, unit: 'guest', rating: 5.0, minBooking: 'Minimum $190 to book' },
  { id: 'c3', category: 'Chefs', title: 'Behind the flame and fusion flavors by Erick', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600', price: 68, unit: 'guest', rating: 5.0, minBooking: 'Minimum $118 to book' },
  { id: 'c4', category: 'Chefs', title: 'Vibrant Cali-Mediterranean menus by Liza', image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=600', price: 65, unit: 'group', rating: 5.0 },
  
  // Training
  { id: 't1', category: 'Training', title: 'Yoga and embodiment by Julia', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=600', price: 25, unit: 'guest', rating: 5.0, minBooking: 'Minimum $200 to book' },
  { id: 't2', category: 'Training', title: 'High-energy workouts by Vicky', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600', price: 160, unit: 'guest', rating: 5.0, location: 'Redondo Beach, United States' },
  { id: 't3', category: 'Training', title: 'Restorative fitness by Taylor', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600', price: 68, unit: 'guest', rating: 5.0, location: 'Los Angeles, United States' },
  { id: 't4', category: 'Training', title: 'Total body training by Peter', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', price: 50, unit: 'guest', rating: 5.0, location: 'Pasadena, United States' },

  // Massage
  { id: 'm1', category: 'Massage', title: 'Good Massage Mobile Services', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600', price: 150, unit: 'guest', rating: 5.0, isPopular: true },
  { id: 'm2', category: 'Massage', title: 'Hollywood recovery and relaxation by Daisy & team', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600', price: 60, unit: 'guest', rating: 4.76, location: 'Los Angeles, United States' },
  { id: 'm3', category: 'Massage', title: 'Deep tissue massage by Olga - London', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600', price: 101, unit: 'guest', rating: 5.0 },
  { id: 'm4', category: 'Massage', title: 'Relaxing touch by Michael', image: 'https://lirp.cdn-website.com/666c60da/dms3rep/multi/opt/Massage-640w.png', price: 130, unit: 'guest', rating: 5.0 }
];