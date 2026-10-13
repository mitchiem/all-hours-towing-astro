export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alfonso 'All Hours' Lester",
    position: 'Founder & Lead Operator',
    description: '40+ years experience, Wreckmaster Level 4/5 certified, founded the company on the same roads he still serves today',
    image: '/all-hours-towing-service-fleet.webp'
  },
  {
    id: 2,
    name: 'Terrance Ellis',
    position: 'Wreckmaster Certified Operator',
    description: 'Wreckmaster certified with advanced winching training, hazardous material awareness, and accident scene management',
    image: '/all-hours-towing-service-fleet.webp'
  },
  {
    id: 3,
    name: "Alfonso 'Lex' Lester",
    position: 'Lead Technician',
    description: 'CDL certified with advanced recovery training, specializing in heavy-duty towing and equipment transport',
    image: '/all-hours-towing-service-fleet.webp'
  },
  {
    id: 4,
    name: "'Jr' Terrance Ellis",
    position: 'Tow & Chainsaw Specialist',
    description: 'Specialized in motorcycle towing, flatbed transport, and chainsaw operations with a perfect safety record',
    image: '/all-hours-towing-service-fleet.webp'
  },
  {
    id: 5,
    name: 'Kevin A. Ellis',
    position: 'Tow & Chainsaw Specialist',
    description: 'Flatbed and wheel-lift specialist, experienced in storage building transport and land clearing operations',
    image: '/all-hours-towing-service-fleet.webp'
  }
];
