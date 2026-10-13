export interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  region: string;
  description?: string;
  majorRoads: string[];
  nearbyLocations: string[];
  image: string;
  nearestServiceCenter: {
    name?: string;
    address: string;
    distance: string;
  };
}

export const allCities: City[] = [
  {
    id: 'macon',
    name: 'Macon',
    slug: 'macon',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Fast, reliable towing and roadside assistance from our central Macon headquarters at 450 Martin Luther King Jr. Blvd, serving all of Macon-Bibb County.',
    majorRoads: ['I-75', 'I-16', 'US-23'],
    nearbyLocations: ['warner-robins', 'byron'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '0 miles'
    }
  },
  {
    id: 'warner-robins',
    name: 'Warner Robins',
    slug: 'warner-robins',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Professional 24/7 towing and roadside assistance for Warner Robins and Robins AFB area, with fast response from our Macon base.',
    majorRoads: ['Watson Blvd', 'Russell Pkwy', 'GA-247'],
    nearbyLocations: ['macon', 'byron'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '20 miles'
    }
  },
  {
    id: 'byron',
    name: 'Byron',
    slug: 'byron',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Reliable towing and emergency roadside assistance for Byron, GA, with quick access from I-75 and GA-49.',
    majorRoads: ['I-75', 'GA-49'],
    nearbyLocations: ['macon', 'warner-robins'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '12 miles'
    }
  }
];

export const getCityBySlug = (slug: string) => {
  return allCities.find(city => city.slug === slug);
};

export const getCitiesByRegion = (region: string) => {
  return allCities.filter(city => city.region === region);
};
