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
    image: 'https://scontent.fkiv7-1.fna.fbcdn.net/v/t39.30808-6/494268671_1266317955500334_145360501761658815_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=CAF_tXhnV3EQ7kNvwGOZCZ_&_nc_oc=Adl8er0WXPCJjInmBwpjtwzd3At7Ghdkwecl1ouayTKRF2CnZiIVVV1IJ9chhEwB7og&_nc_zt=23&_nc_ht=scontent.fkiv7-1.fna&_nc_gid=j-2tOl45NlNjo0aWEBAaOA&_nc_ss=8&oh=00_Afyi0rNSYerKH8bcbfkxcPA6SiMumCpm26MpsYAX8D-6Mg&oe=69B8C2A3' 
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