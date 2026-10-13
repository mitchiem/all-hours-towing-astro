export interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  region: string;
  description?: string;
  localInfo?: string;
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
  },
  {
    id: 'centerville',
    name: 'Centerville',
    slug: 'centerville',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Fast 24/7 towing and roadside assistance in Centerville, GA, with rapid response from our Macon base.',
    localInfo: `Centerville sits directly between Macon and Warner Robins on the Houston County side of the line. Our trucks reach the Galleria Mall corridor, Houston Lake Road, and GA-41 in minutes rather than the 20-plus minutes a Macon-only dispatch might take. Commuters bound for Robins AFB pass through Centerville daily, and we keep a truck staged on the Warner Robins edge for exactly that shift-change traffic.`,
    majorRoads: ['Houston Lake Rd', 'GA-41', 'Russell Pkwy'],
    nearbyLocations: ['warner-robins', 'byron', 'perry', 'bonaire'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '15 miles'
    }
  },
  {
    id: 'perry',
    name: 'Perry',
    slug: 'perry',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Professional towing and roadside assistance in Perry, GA, home of the Georgia National Fairgrounds, from our Macon base.',
    localInfo: `Perry is Houston County\'s southern anchor and the host city for the Georgia National Fair each October, when I-75 exits 135-136 carry heavy event traffic. All Hours Towing pre-stages trucks during fair weekends and rodeos so a breakdown near the fairgrounds never waits long. We also cover the US-341 and GA-96 corridors that tie Perry to Fort Valley and the surrounding farm country.`,
    majorRoads: ['I-75', 'US-341', 'GA-96'],
    nearbyLocations: ['centerville', 'bonaire', 'fort-valley'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '25 miles'
    }
  },
  {
    id: 'bonaire',
    name: 'Bonaire',
    slug: 'bonaire',
    state: 'GA',
    region: 'Middle Georgia',
    description: '24/7 towing and roadside assistance for Bonaire, GA and the south Warner Robins area.',
    localInfo: `Bonaire is a fast-growing Houston County community south of Warner Robins, threaded by GA-96 and GA-247. Our nearest staging point sits just up the road, so homeowners, school traffic, and Robins AFB commuters in Big Indian Creek and Southfield Plantation get a quick response. We know the rural side roads off GA-96 where a breakdown can feel isolated.`,
    majorRoads: ['GA-96', 'GA-247', 'South Houston Rd'],
    nearbyLocations: ['warner-robins', 'perry', 'centerville'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '20 miles'
    }
  },
  {
    id: 'fort-valley',
    name: 'Fort Valley',
    slug: 'fort-valley',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Reliable towing and emergency roadside assistance in Fort Valley, GA, Peach County, from our Macon base.',
    localInfo: `Fort Valley is the Peach County seat and home to Fort Valley State University. We cover campus move-in traffic, the GA-49 and GA-96 cross-town routes, and US-341 running south toward Perry. When students, staff, or farm equipment haulers need a tow, our Macon base is less than 20 miles up GA-49.`,
    majorRoads: ['GA-49', 'GA-96', 'US-341'],
    nearbyLocations: ['byron', 'perry', 'roberta', 'musella-ga'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '18 miles'
    }
  },
  {
    id: 'lizella',
    name: 'Lizella',
    slug: 'lizella',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Fast towing and roadside assistance for Lizella, GA and Lake Tobesofkee, from our Macon headquarters.',
    localInfo: `Lizella is Bibb County\'s west side, wrapped around Lake Tobesofkee and reached by GA-74 or the I-475 bypass. Our Macon headquarters is only ten miles east, making Lizella one of the fastest response zones in our network. We regularly recover vehicles near the lake ramps, Sandy Beach, and the quiet residential roads off Skipper Road.`,
    majorRoads: ['GA-74', 'I-475', 'Skipper Rd'],
    nearbyLocations: ['macon', 'roberta'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '10 miles'
    }
  },
  {
    id: 'roberta',
    name: 'Roberta',
    slug: 'roberta',
    state: 'GA',
    region: 'Middle Georgia',
    description: '24/7 towing and roadside assistance in Roberta, GA, Crawford County, from our Macon base.',
    localInfo: `Roberta is the Crawford County seat on US-341, just 16 miles west of Macon. Its US-341 and US-80 corridors carry commuter and farm traffic through rolling peach country. We cover the Crawford County High School zone and send our nearest wrecker fast for anything from a dead battery to an off-road recovery.`,
    majorRoads: ['US-341', 'US-80', 'GA-128'],
    nearbyLocations: ['macon', 'fort-valley', 'musella-ga'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '16 miles'
    }
  },
  {
    id: 'musella',
    name: 'Musella',
    slug: 'musella-ga',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Local towing and roadside assistance for Musella, GA in Crawford County, near Dickey Farms.',
    localInfo: `Musella is a small Crawford County community best known for Dickey Farms and its peach orchards along US-341. Our crew knows the orchard roads and rural driveways here, and a Macon-based truck reaches Musella in about fifteen minutes. We treat each call with the personal, family-owned standard our regulars expect.`,
    majorRoads: ['US-341', 'GA-42'],
    nearbyLocations: ['roberta', 'fort-valley'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '14 miles'
    }
  },
  {
    id: 'gray',
    name: 'Gray',
    slug: 'gray',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Fast towing and roadside assistance for Gray, GA, Jones County seat, from our Macon base.',
    localInfo: `Gray is the Jones County seat on GA-18, one of the busiest commuter routes into Macon. Our trucks meet rush-hour breakdowns on GA-18 and US-129 close to the county courthouse and downtown. We also reach the rural Round Oak and Haddock communities where cell service thins out and a known local tow is worth the call.`,
    majorRoads: ['GA-18', 'US-129', 'GA-11'],
    nearbyLocations: ['macon', 'milledgeville', 'forsyth'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '15 miles'
    }
  },
  {
    id: 'forsyth',
    name: 'Forsyth',
    slug: 'forsyth',
    state: 'GA',
    region: 'Middle Georgia',
    description: '24/7 towing and roadside assistance in Forsyth, GA, Monroe County, from our Macon base.',
    localInfo: `Forsyth is the Monroe County seat on I-75 between Macon and Atlanta, with exits 185-188 busy throughout the day. We handle traveler breakdowns along the rest-stop corridor, historic downtown tows, and recoveries on the steep approach roads around High Falls State Park. A Macon truck reaches most of Forsyth in under twenty-five minutes.`,
    majorRoads: ['I-75', 'US-23', 'GA-83'],
    nearbyLocations: ['gray', 'macon', 'jackson'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '25 miles'
    }
  },
  {
    id: 'milledgeville',
    name: 'Milledgeville',
    slug: 'milledgeville',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Reliable towing and roadside assistance for Milledgeville, GA and Lake Sinclair, from our Macon base.',
    localInfo: `Milledgeville is Baldwin County\'s seat and home to Georgia College & State University and Lake Sinclair. We cover campus move-in weeks, the US-441 corridor, and boat trailers stuck at lake ramps with winch-equipped trucks. The historic Central State Hospital campus roads need a driver who knows the area, and ours do.`,
    majorRoads: ['US-441', 'GA-22', 'GA-24'],
    nearbyLocations: ['gray', 'gordon'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '32 miles'
    }
  },
  {
    id: 'jackson',
    name: 'Jackson',
    slug: 'jackson',
    state: 'GA',
    region: 'Middle Georgia',
    description: '24/7 towing and roadside assistance in Jackson, GA, Butts County, from our Macon base.',
    localInfo: `Jackson is the Butts County seat on US-23, with High Falls State Park just to the south and I-75 nearby. We recover vehicles on the park\'s steep access roads and the US-23/GA-36 corridors through town. Our Macon crew reaches Jackson quickly for both commuter breakdowns and rural recoveries.`,
    majorRoads: ['US-23', 'GA-36', 'I-75'],
    nearbyLocations: ['forsyth', 'covington'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '35 miles'
    }
  },
  {
    id: 'jeffersonville',
    name: 'Jeffersonville',
    slug: 'jeffersonville',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Fast towing and roadside assistance for Jeffersonville, GA, Twiggs County seat, from our Macon base.',
    localInfo: `Jeffersonville is the Twiggs County seat along I-16, one of the main freight routes into Savannah. We handle highway breakdowns and the US-80/GA-96 corridors with fast dispatch from Macon. The Ocmulgee River lowlands nearby flood after heavy rain, and our winch trucks are ready for soft-ground recoveries.`,
    majorRoads: ['I-16', 'US-80', 'GA-96'],
    nearbyLocations: ['dry-branch', 'macon', 'gordon'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '25 miles'
    }
  },
  {
    id: 'dry-branch',
    name: 'Dry Branch',
    slug: 'dry-branch',
    state: 'GA',
    region: 'Middle Georgia',
    description: 'Local 24/7 towing and roadside assistance for Dry Branch, GA, Twiggs County.',
    localInfo: `Dry Branch is a rural Twiggs County community along US-80 and GA-96, a short hop from I-16. When a vehicle strands on the county roads or a traveler breaks down just off the interstate, we are the nearest reliable tow. Our drivers know the back roads between Dry Branch and Jeffersonville.`,
    majorRoads: ['US-80', 'GA-96', 'I-16'],
    nearbyLocations: ['jeffersonville', 'macon'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '20 miles'
    }
  },
  {
    id: 'gordon',
    name: 'Gordon',
    slug: 'gordon',
    state: 'GA',
    region: 'Middle Georgia',
    description: '24/7 towing and recovery for Gordon, GA, Wilkinson County, from our Macon base.',
    localInfo: `Gordon is a Wilkinson County town in the heart of Georgia\'s kaolin belt, served by GA-18 and GA-243. Heavy trucks hauling clay move through daily, and we assist with light and medium-duty tows plus off-road recovery. A Macon-based wrecker reaches Gordon and the surrounding mine roads quickly.`,
    majorRoads: ['GA-18', 'GA-243', 'GA-57'],
    nearbyLocations: ['jeffersonville', 'dry-branch', 'milledgeville'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '30 miles'
    }
  },
  {
    id: 'covington',
    name: 'Covington',
    slug: 'covington',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: 'Professional towing and roadside assistance in Covington, GA, Newton County, on I-20 east of Atlanta.',
    localInfo: `Covington anchors Newton County around its historic downtown square and the I-20 exits 92-93 corridor. We serve Atlanta-bound commuters and event traffic at the square with pre-staged trucks and fast interstate dispatch. Our drivers know the Alcovy River low-water crossings and the neighborhoods ringing the square.`,
    majorRoads: ['I-20', 'US-278', 'GA-81'],
    nearbyLocations: ['conyers', 'oxford', 'porterdale', 'social-circle'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '65 miles'
    }
  },
  {
    id: 'conyers',
    name: 'Conyers',
    slug: 'conyers',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: '24/7 towing and roadside assistance in Conyers, GA, Rockdale County, on the I-20 freight corridor.',
    localInfo: `Conyers is Rockdale County\'s hub on I-20, a major freight and Atlanta-commuter corridor. We coordinate with law enforcement on tractor-trailer recoveries and handle Olde Town\'s narrow historic streets with care. The Georgia International Horse Park\'s year-round events make Conyers a steady towing market we cover directly.`,
    majorRoads: ['I-20', 'GA-138', 'GA-20'],
    nearbyLocations: ['covington', 'loganville', 'monroe'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '70 miles'
    }
  },
  {
    id: 'oxford',
    name: 'Oxford',
    slug: 'oxford',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: 'Reliable towing and roadside assistance in Oxford, GA, Newton County, near Oxford College.',
    localInfo: `Oxford is home to Oxford College of Emory University and sits just off I-20 via GA-81. We serve campus traffic, the historic district, and the rural roads through Dried Indian Creek. Whether a student\'s battery dies or a visitor locks keys in a car, our nearest truck responds quickly.`,
    majorRoads: ['I-20', 'GA-81', 'Stone St'],
    nearbyLocations: ['covington', 'porterdale'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '62 miles'
    }
  },
  {
    id: 'porterdale',
    name: 'Porterdale',
    slug: 'porterdale',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: '24/7 towing and roadside assistance in Porterdale, GA, Newton County, on the Yellow River.',
    localInfo: `Porterdale is a former mill village on the Yellow River with a tight-knit street grid and a growing Historic District. We navigate the Mill Village and North Porterdale neighborhoods carefully and reach I-20 through GA-81. Our locals-first service shows in every driveway recovery and jump start here.`,
    majorRoads: ['GA-81', 'I-20'],
    nearbyLocations: ['covington', 'oxford'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '63 miles'
    }
  },
  {
    id: 'social-circle',
    name: 'Social Circle',
    slug: 'social-circle',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: 'Fast towing and roadside assistance in Social Circle, GA, Walton County, off I-20.',
    localInfo: `Social Circle is a Walton County railroad town with a well-preserved Historic District and the storied Blue Willow Inn. We cover I-20 access, the GA-11 and GA-229 corridors, and the quiet streets around downtown. Our drivers treat the historic neighborhood with the care it requires.`,
    majorRoads: ['I-20', 'GA-11'],
    nearbyLocations: ['covington', 'monroe', 'mansfield'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '65 miles'
    }
  },
  {
    id: 'mansfield',
    name: 'Mansfield',
    slug: 'mansfield',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: 'Local towing and roadside assistance in Mansfield, GA, Newton County, off GA-11.',
    localInfo: `Mansfield is a small Newton County community known for the historic Carmichael House, reached by GA-11 with I-20 a short drive away. We respond quickly to rural breakdowns around East Mansfield and the surrounding countryside. Every call gets the personal touch of a family-owned service.`,
    majorRoads: ['GA-11', 'I-20'],
    nearbyLocations: ['social-circle', 'covington', 'newborn'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '66 miles'
    }
  },
  {
    id: 'monroe',
    name: 'Monroe',
    slug: 'monroe',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: '24/7 towing and roadside assistance in Monroe, GA, Walton County seat, on US-78.',
    localInfo: `Monroe is the Walton County seat on the US-78 Atlanta-Athens connector, with heavy truck and commuter traffic. We handle courthouse-square event tows, Piedmont Walton Hospital recoveries, and tight driveway work in the old residential sections. The Alcovy River flood zones nearby get our safety-first response.`,
    majorRoads: ['US-78', 'GA-11', 'GA-83'],
    nearbyLocations: ['loganville', 'social-circle', 'jersey'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '68 miles'
    }
  },
  {
    id: 'loganville',
    name: 'Loganville',
    slug: 'loganville',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: 'Reliable towing and roadside assistance in Loganville, GA, on US-78 between Atlanta and Athens.',
    localInfo: `Loganville straddles Walton and Gwinnett counties along US-78 and GA-20, carrying steady suburban-Atlanta traffic. We serve Bay Creek Park, the Town Center, and the Laurel Mist and Cedar Ridge neighborhoods with quick response and careful driveway recoveries.`,
    majorRoads: ['US-78', 'GA-20', 'GA-81'],
    nearbyLocations: ['monroe', 'conyers'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '72 miles'
    }
  },
  {
    id: 'newborn',
    name: 'Newborn',
    slug: 'newborn',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: '24/7 towing and roadside assistance in Newborn, GA, Newton County, off GA-142.',
    localInfo: `Newborn is a quiet Newton County community on GA-142 and GA-229 with a proud Historic District. Our drivers know the back roads and countryside around Newborn and respond personally to every call, from dead batteries to off-road recoveries on the rural lanes.`,
    majorRoads: ['GA-142', 'GA-229'],
    nearbyLocations: ['mansfield', 'social-circle'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '60 miles'
    }
  },
  {
    id: 'jersey',
    name: 'Jersey',
    slug: 'jersey',
    state: 'GA',
    region: 'East Metro Atlanta',
    description: 'Local towing and roadside assistance in Jersey, GA, Walton County, on GA-138.',
    localInfo: `Jersey is a rural Walton County community on GA-138 near the Alcovy River, with I-20 a short drive south. We cover the quiet country roads and family neighborhoods with quick, personal service. A short ETA from our east-metro staging keeps Jersey drivers from waiting long.`,
    majorRoads: ['GA-138', 'I-20'],
    nearbyLocations: ['monroe', 'loganville'],
    image: '/placeholder.svg',
    nearestServiceCenter: {
      name: 'Macon Service Center',
      address: '450 Martin Luther King Jr. Blvd, Macon, GA 31201',
      distance: '70 miles'
    }
  },
];

export const getCityBySlug = (slug: string) => {
  return allCities.find(city => city.slug === slug);
};

export const getCitiesByRegion = (region: string) => {
  return allCities.filter(city => city.region === region);
};
