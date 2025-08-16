export interface AddressFormat {
  name: string;
  flag: string;
  streets: string[];
  cities: string[];
  states?: string[];
  postalCodeFormat: string;
  addressFormat: (data: { street: string; city: string; state?: string; postal: string }) => string;
}

export const addressData: Record<string, AddressFormat> = {
  US: {
    name: 'United States',
    flag: '🇺🇸',
    streets: [
      'Main Street', 'First Street', 'Second Street', 'Park Avenue', 'Oak Street', 'Maple Avenue',
      'Cedar Lane', 'Pine Street', 'Elm Street', 'Washington Street', 'Church Street', 'High Street',
      'School Street', 'State Street', 'Broad Street', 'Market Street', 'Union Street', 'Water Street',
      'Mill Street', 'North Street', 'South Street', 'East Street', 'West Street', 'Center Street',
      'Franklin Street', 'Lincoln Avenue', 'Madison Avenue', 'Jefferson Street', 'Roosevelt Avenue'
    ],
    cities: [
      'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio',
      'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus',
      'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington', 'Boston',
      'El Paso', 'Nashville', 'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas', 'Memphis',
      'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento'
    ],
    states: [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
      'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
      'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ],
    postalCodeFormat: '#####',
    addressFormat: ({ street, city, state, postal }) => 
      `${Math.floor(Math.random() * 9999) + 1} ${street}\n${city}, ${state} ${postal}`
  },
  UK: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    streets: [
      'High Street', 'Church Street', 'Victoria Street', 'King Street', 'Queen Street', 'Station Road',
      'Mill Lane', 'School Lane', 'Park Road', 'New Street', 'Manor Road', 'The Avenue',
      'Albert Street', 'George Street', 'Chapel Street', 'York Street', 'Windsor Road', 'Richmond Road',
      'Oxford Street', 'Cambridge Road', 'London Road', 'Manchester Road', 'Birmingham Road',
      'Liverpool Street', 'Bristol Road', 'Gloucester Road', 'Worcester Road', 'Leicester Street'
    ],
    cities: [
      'London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Bristol', 'Sheffield', 'Leeds',
      'Edinburgh', 'Leicester', 'Coventry', 'Bradford', 'Cardiff', 'Belfast', 'Nottingham',
      'Hull', 'Newcastle', 'Stoke-on-Trent', 'Southampton', 'Derby', 'Portsmouth', 'Brighton',
      'Plymouth', 'Northampton', 'Reading', 'Luton', 'Wolverhampton', 'Bolton', 'Bournemouth',
      'Norwich', 'Swindon', 'Swansea', 'Southend-on-Sea', 'Middlesbrough', 'Milton Keynes'
    ],
    postalCodeFormat: '## ###',
    addressFormat: ({ street, city, postal }) => 
      `${Math.floor(Math.random() * 999) + 1} ${street}\n${city}\n${postal}`
  },
  CA: {
    name: 'Canada',
    flag: '🇨🇦',
    streets: [
      'Main Street', 'First Avenue', 'Second Avenue', 'King Street', 'Queen Street', 'Church Street',
      'University Avenue', 'College Street', 'Bloor Street', 'Yonge Street', 'Bay Street', 'Front Street',
      'Richmond Street', 'Adelaide Street', 'Wellington Street', 'Dundas Street', 'Elm Street',
      'Maple Avenue', 'Oak Street', 'Pine Street', 'Cedar Avenue', 'Birch Street', 'Willow Avenue'
    ],
    cities: [
      'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City',
      'Hamilton', 'Kitchener', 'London', 'Victoria', 'Halifax', 'Oshawa', 'Windsor', 'Saskatoon',
      'St. Catharines', 'Regina', 'Sherbrooke', 'Kelowna', 'Barrie', 'Abbotsford', 'Sudbury',
      'Kingston', 'Saguenay', 'Thunder Bay', 'Kamloops', 'Saint John', 'Moncton', 'Chatham-Kent'
    ],
    states: [
      'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
      'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
      'Quebec', 'Saskatchewan', 'Yukon'
    ],
    postalCodeFormat: '### ###',
    addressFormat: ({ street, city, state, postal }) => 
      `${Math.floor(Math.random() * 9999) + 1} ${street}\n${city}, ${state}\n${postal}`
  },
  AU: {
    name: 'Australia',
    flag: '🇦🇺',
    streets: [
      'George Street', 'King Street', 'Queen Street', 'Collins Street', 'Bourke Street', 'Flinders Street',
      'Elizabeth Street', 'Swanston Street', 'Russell Street', 'Spring Street', 'Little Collins Street',
      'Lonsdale Street', 'La Trobe Street', 'Spencer Street', 'William Street', 'Pitt Street',
      'Castlereagh Street', 'Kent Street', 'Sussex Street', 'York Street', 'Clarence Street',
      'Macquarie Street', 'Philip Street', 'Hunter Street', 'Martin Place', 'Circular Quay'
    ],
    cities: [
      'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle',
      'Wollongong', 'Logan City', 'Geelong', 'Hobart', 'Townsville', 'Cairns', 'Darwin',
      'Toowoomba', 'Ballarat', 'Bendigo', 'Albury', 'Launceston', 'Mackay', 'Rockhampton',
      'Bunbury', 'Bundaberg', 'Coffs Harbour', 'Wagga Wagga', 'Hervey Bay', 'Mildura'
    ],
    states: [
      'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia',
      'Tasmania', 'Australian Capital Territory', 'Northern Territory'
    ],
    postalCodeFormat: '####',
    addressFormat: ({ street, city, state, postal }) => 
      `${Math.floor(Math.random() * 999) + 1} ${street}\n${city} ${state} ${postal}`
  },
  DE: {
    name: 'Germany',
    flag: '🇩🇪',
    streets: [
      'Hauptstraße', 'Bahnhofstraße', 'Kirchstraße', 'Gartenstraße', 'Schulstraße', 'Poststraße',
      'Berliner Straße', 'Münchener Straße', 'Hamburger Straße', 'Frankfurter Straße', 'Kölner Straße',
      'Lindenstraße', 'Rosenstraße', 'Parkstraße', 'Friedhofstraße', 'Marktstraße', 'Ringstraße',
      'Mozartstraße', 'Goethestraße', 'Schillerstraße', 'Beethovenstraße', 'Kantstraße'
    ],
    cities: [
      'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf',
      'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg',
      'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim',
      'Augsburg', 'Wiesbaden', 'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig', 'Chemnitz'
    ],
    postalCodeFormat: '#####',
    addressFormat: ({ street, city, postal }) => 
      `${street} ${Math.floor(Math.random() * 999) + 1}\n${postal} ${city}`
  },
  FR: {
    name: 'France',
    flag: '🇫🇷',
    streets: [
      'Rue de la Paix', 'Avenue des Champs-Élysées', 'Rue Saint-Honoré', 'Boulevard Saint-Germain',
      'Rue de Rivoli', 'Avenue Montaigne', 'Rue du Faubourg Saint-Honoré', 'Place Vendôme',
      'Rue de la République', 'Avenue de la Liberté', 'Rue Victor Hugo', 'Place de la Mairie',
      'Rue Jean Jaurès', 'Avenue Charles de Gaulle', 'Rue Gambetta', 'Place de l\'Église',
      'Rue Pasteur', 'Avenue Foch', 'Rue Voltaire', 'Place de la République', 'Rue Nationale'
    ],
    cities: [
      'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier',
      'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Grenoble',
      'Dijon', 'Angers', 'Nîmes', 'Villeurbanne', 'Saint-Denis', 'Le Mans', 'Aix-en-Provence',
      'Clermont-Ferrand', 'Brest', 'Limoges', 'Tours', 'Amiens', 'Perpignan', 'Metz'
    ],
    postalCodeFormat: '#####',
    addressFormat: ({ street, city, postal }) => 
      `${Math.floor(Math.random() * 999) + 1} ${street}\n${postal} ${city}`
  },
  JP: {
    name: 'Japan',
    flag: '🇯🇵',
    streets: [
      'Chuo-dori', 'Honcho', 'Sakura-dori', 'Midori-cho', 'Asahi-cho', 'Nishi-cho', 'Higashi-cho',
      'Minami-cho', 'Kita-cho', 'Shin-machi', 'Hon-machi', 'Eki-mae', 'Ginza', 'Shibuya',
      'Shinjuku', 'Harajuku', 'Roppongi', 'Akasaka', 'Nihonbashi', 'Marunouchi', 'Omotesando'
    ],
    cities: [
      'Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kawasaki', 'Kyoto',
      'Saitama', 'Hiroshima', 'Sendai', 'Kitakyushu', 'Chiba', 'Sakai', 'Niigata', 'Hamamatsu',
      'Kumamoto', 'Sagamihara', 'Shizuoka', 'Okayama', 'Kagoshima', 'Himeji', 'Akita', 'Fukuyama'
    ],
    postalCodeFormat: '###-####',
    addressFormat: ({ street, city, postal }) => 
      `${postal}\n${city} ${street} ${Math.floor(Math.random() * 99) + 1}-${Math.floor(Math.random() * 99) + 1}`
  }
};

export function generateRandomAddress(countryCode: string): { 
  address: string; 
  country: string; 
  flag: string 
} {
  const country = addressData[countryCode];
  if (!country) {
    throw new Error(`Country ${countryCode} not supported`);
  }

  const street = country.streets[Math.floor(Math.random() * country.streets.length)];
  const city = country.cities[Math.floor(Math.random() * country.cities.length)];
  const state = country.states ? country.states[Math.floor(Math.random() * country.states.length)] : undefined;
  
  // Generate postal code based on format
  const postal = country.postalCodeFormat.replace(/#/g, () => Math.floor(Math.random() * 10).toString());
  
  return {
    address: country.addressFormat({ street, city, state, postal }),
    country: country.name,
    flag: country.flag
  };
}