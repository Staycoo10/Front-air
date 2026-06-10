export type QuickLink = {
  id: string;
  title: string;
  path: string;
  image: string; // Adăugăm această proprietate
};

export const mockQuickLinks: QuickLink[] = [
  { 
    id: 'ql1', 
    title: 'Despre noi', 
    path: '/despre-noi', 
    image: 'https://i.pcmag.com/imagery/articles/07IDqpm1hTlSNl1Eamwz700-1.fit_lim.size_1600x900.v1569488958.jpg' 
  },
  { 
    id: 'ql2', 
    title: 'Contact', 
    path: '/contact', 
    image: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt1a805240919340d9/getting-started-with-airbnb-for-work-optimized.jpg' 
  },
  { 
    id: 'ql3', 
    title: 'Contul tău', 
    path: '/login', 
    image: 'https://www.siteminder.com/wp-content/uploads/2023/11/Airbnb-Host-Login.png' 
  },
];