import heroHearthImg from '../assets/images/hero_culinary_hearth_1791195889704.jpg';
import wagyuImg from '../assets/images/signature_dish_wagyu_1791195907167.jpg';
import crudoImg from '../assets/images/signature_dish_crudo_1791195919325.jpg';
import diningInteriorImg from '../assets/images/restaurant_interior_dining_1791195930241.jpg';

export { heroHearthImg, wagyuImg, crudoImg, diningInteriorImg };

export interface MenuItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: 'tasting' | 'hearth' | 'crudo' | 'botanical' | 'dessert' | 'beverage';
  description: string;
  provenance: string;
  dietary: string[];
  winePairing?: string;
  featured?: boolean;
  image?: string;
}

export interface TastingCourse {
  courseNumber: number;
  courseName: string;
  dishName: string;
  description: string;
  winePairing: string;
  origin: string;
}

export interface CulinaryProvisionItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  serves: string;
  includes: string[];
  image?: string;
}

export const RESTAURANT_INFO = {
  name: 'AURELIA',
  tagline: 'Woodfire & Botanical Gastronomy',
  accolades: 'Two Michelin Stars 2025 · 2026 Selection · James Beard Foundation Nominee',
  address: {
    street: '428 Vignes Street, Suite 100',
    neighborhood: 'Downtown Arts District',
    city: 'Los Angeles, CA 90013',
    valet: 'Complimentary valet parking available at our private porte-cochère on Vignes St.'
  },
  phone: '+1 (213) 555-0198',
  email: 'concierge@aurelia-la.com',
  hours: [
    { days: 'Tuesday – Thursday', lunch: 'Closed', dinner: '5:30 PM – 10:00 PM' },
    { days: 'Friday & Saturday', lunch: '12:00 PM – 2:30 PM', dinner: '5:00 PM – 11:00 PM' },
    { days: 'Sunday', lunch: '11:30 AM – 3:00 PM', dinner: '5:00 PM – 9:30 PM' },
    { days: 'Monday', lunch: 'Closed', dinner: 'Closed (Private Buyouts Only)' }
  ],
  policies: {
    dressCode: 'Smart Casual & Relaxed Elegance. We kindly request guests refrain from athletic wear and beachwear.',
    corkage: '$75 per 750ml bottle (maximum 2 bottles per party), waived with purchase of a reserve bottle from our cellar.',
    children: 'We welcome guests aged 10 and older for our tasting menu experience.'
  }
};

export const TASTING_MENU: TastingCourse[] = [
  {
    courseNumber: 1,
    courseName: 'First Amuse',
    dishName: 'Charred Sunchoke & Golden Osetra Caviar',
    description: 'Crisped sunchoke skin tartlet, smoked cultured crème fraîche, emulsion of roasted pine oil.',
    winePairing: '2016 Champagne Jacques Selosse Initial Blanc de Blancs',
    origin: 'Golden Osetra Caviar, Petrossian · Sunchokes, Thorne Family Farm'
  },
  {
    courseNumber: 2,
    courseName: 'Raw & Marine',
    dishName: 'Hokkaido Scallop Crudo',
    description: 'Thinly sliced hand-dived scallops, blood orange reduction, compressed winter melon, finger lime pearls, borage blossom.',
    winePairing: '2021 Keller Riesling Trocken Kirchspiel GG, Rheinhessen',
    origin: 'Wild Scallops, Hokkaido · Citrus, San Joaquin Organic Orchard'
  },
  {
    courseNumber: 3,
    courseName: 'Hearth Botanical',
    dishName: 'Ember-Roasted Maitake & Black Truffle',
    description: 'Wild forest maitake grilled over Japanese binchotan, fermented truffle glaze, 48-hour bone broth reduction.',
    winePairing: '2020 Domaine Dujac Morey-Saint-Denis, Burgundy',
    origin: 'Foraged Mushrooms, Oregon Coastal Range · Winter Truffles, Périgord'
  },
  {
    courseNumber: 4,
    courseName: 'Coastal Catch',
    dishName: 'Wild Brittany Turbot on the Bone',
    description: 'Slowly roasted on the ember rack, brown butter fumet, salt-marsh samphire, charred ramp condiment.',
    winePairing: '2019 Domaine Leflaive Puligny-Montrachet, Burgundy',
    origin: 'Day-boat Turbot, Brittany Coast · Samphire, Monterey Marine Herbs'
  },
  {
    courseNumber: 5,
    courseName: 'The Woodfire Hearth',
    dishName: 'A5 Miyazaki Wagyu & Glazed Chanterelles',
    description: 'Seared directly over almond wood and binchotan embers, bone marrow jus, smoked Maldon crystals, baby leek confit.',
    winePairing: '2017 Château Lynch-Bages, Pauillac, Bordeaux',
    origin: 'A5 Wagyu, Miyazaki Prefecture · Almond Wood, Central Valley Orchards'
  },
  {
    courseNumber: 6,
    courseName: 'Palate Intermezzo',
    dishName: 'Bergamot Granite & Shiso Dew',
    description: 'Chilled wild citrus snow, compressed green strawberries, micro purple shiso infusion.',
    winePairing: 'Bespoke Non-Alcoholic Botanical Extraction: Meyer Lemon & Pine Needle',
    origin: 'Heirloom Bergamot, Ojai Foothills'
  },
  {
    courseNumber: 7,
    courseName: 'Dolce Finale',
    dishName: 'Smoked Bourbon Caramel & Roasted Fig Soufflé',
    description: 'Single-estate Madagascar chocolate, warm bourbon caramel infusion, roasted Mission fig gelato.',
    winePairing: '1998 Château d’Yquem, Sauternes',
    origin: 'Grand Cru Dark Chocolate, Valrhona · Mission Figs, Santa Barbara'
  }
];

export const A_LA_CARTE_MENU: MenuItem[] = [
  // Raw & Crudo
  {
    id: 'crudo-1',
    name: 'Hokkaido Scallop Crudo',
    subtitle: 'Blood orange reduction, finger lime pearls & wild borage',
    price: 36,
    category: 'crudo',
    description: 'Hand-dived scallops sliced wafer-thin, finished with cold-pressed Sicilian olive oil, winter blood orange glaze, and compressed melon crisp.',
    provenance: 'Wild Scallops, Hokkaido Japan · Blood Oranges, Ojai Organics',
    dietary: ['Gluten-Free', 'Pescatarian'],
    winePairing: '2021 Keller Riesling Trocken Kirchspiel',
    featured: true,
    image: crudoImg
  },
  {
    id: 'crudo-2',
    name: 'Bluefin Toro & Charred Shishito Tartare',
    subtitle: 'Fermented black garlic, toasted sesame tuile & nori caviar',
    price: 42,
    category: 'crudo',
    description: 'Sustainably ranched bluefin belly hand-chopped with charred shishito oil, aged tamari pearls, and crispy hearth flatbread.',
    provenance: 'Bluefin Tuna, Kindai Fishery · Shishito, Weiser Family Farms',
    dietary: ['Pescatarian'],
    winePairing: '2020 Domaine Tempier Bandol Rosé'
  },
  {
    id: 'crudo-3',
    name: 'Heritage Beetroot Carpaccio',
    subtitle: 'Whipped goat curd, smoked walnuts, blackberry verjus',
    price: 28,
    category: 'crudo',
    description: 'Slow-baked in salt crust then sliced translucent, layered with artisanal Drake Family goat curd and roasted hazelnut praline.',
    provenance: 'Beets, Rutiz Family Farm · Goat Curd, Drake Family Farms',
    dietary: ['Vegetarian', 'Gluten-Free'],
    winePairing: '2022 Matthiasson Linda Vista Chardonnay'
  },

  // Hearth & Embers
  {
    id: 'hearth-1',
    name: 'A5 Miyazaki Wagyu Ribeye',
    subtitle: 'Glazed chanterelles, bone marrow jus & smoked sea salt',
    price: 98,
    category: 'hearth',
    description: '6oz center-cut A5 Japanese Wagyu kissed by almond wood flame, served with hearth-seared golden chanterelles and 72-hour roasted bone jus.',
    provenance: 'Miyazaki Prefecture, Japan · Chanterelles, Pacific Northwest',
    dietary: ['Gluten-Free'],
    winePairing: '2017 Château Lynch-Bages Pauillac',
    featured: true,
    image: wagyuImg
  },
  {
    id: 'hearth-2',
    name: 'Wild Brittany Turbot on the Bone',
    subtitle: 'Brown butter fumet, sea samphire & charred Meyer lemon',
    price: 68,
    category: 'hearth',
    description: 'Whole line-caught turbot roasted gently suspended above white oak coals, bathed in frothy noisette butter and fresh coastal succulents.',
    provenance: 'Day-boat Turbot, Brittany · Sea Samphire, Half Moon Bay',
    dietary: ['Gluten-Free', 'Pescatarian'],
    winePairing: '2019 Domaine Leflaive Puligny-Montrachet'
  },
  {
    id: 'hearth-3',
    name: 'Sonoma Dry-Aged Liberty Duck',
    subtitle: 'Fermented lavender honey, charred endive & sour cherry jus',
    price: 64,
    category: 'hearth',
    description: '21-day dry-aged duck breast with crispy spiced lacquered skin, charred white chicory, and preserved stone fruit reduction.',
    provenance: 'Liberty Duck, Sonoma County · Lavender Honey, Carpinteria',
    dietary: ['Gluten-Free'],
    winePairing: '2018 Domaine Serene Evenstad Reserve Pinot Noir'
  },

  // Botanical & Earth
  {
    id: 'botanical-1',
    name: 'Ember-Roasted Maitake & Chanterelles',
    subtitle: 'Black truffle emulsion, 48-hr fermented allium glaze',
    price: 34,
    category: 'botanical',
    description: 'Cluster of wild maitake charred over open coals until caramelized, brushed with fermented garlic blossom honey and shaved Périgord truffle.',
    provenance: 'Maitake, Oregon Coast · Black Truffles, Périgord France',
    dietary: ['Vegetarian', 'Gluten-Free'],
    winePairing: '2020 Domaine Dujac Morey-Saint-Denis'
  },
  {
    id: 'botanical-2',
    name: 'Coal-Roasted Sunchoke & Emmer Agnolotti',
    subtitle: 'Cultured brown butter, crispy sage & aged Parmigiano Reggiano',
    price: 38,
    category: 'botanical',
    description: 'Hand-pinched pasta made from stone-milled ancient emmer wheat, filled with smooth coal-roasted sunchoke purée and finished with 36-month Vacche Rosse.',
    provenance: 'Organic Emmer Wheat, Tehachapi Grain Project · Cheese, Parma',
    dietary: ['Vegetarian'],
    winePairing: '2021 Gaja Ca’Marcanda Promis, Tuscany'
  },
  {
    id: 'botanical-3',
    name: 'Charred Heirloom Brassicas',
    subtitle: 'Whipped smoked tahini, pickled mustard seeds & crisp buckwheat',
    price: 26,
    category: 'botanical',
    description: 'Romanesco and purple sprouting broccoli blistered on the grate, tossed with sesame dressing, golden raisins, and toasted buckwheat groats.',
    provenance: 'Brassicas, Coleman Family Farms · Sesame, Wadaman Osaka',
    dietary: ['Vegetarian', 'Gluten-Free'],
    winePairing: '2022 Domaine Sigalas Assyrtiko, Santorini'
  },

  // Dolci & Pastry
  {
    id: 'dessert-1',
    name: 'Smoked Bourbon Caramel Soufflé',
    subtitle: 'Roasted Mission fig gelato & single-origin dark chocolate',
    price: 24,
    category: 'dessert',
    description: 'Freshly baked to order, rising dramatically above French copper ramekins. Poured tableside with warm bourbon caramel and sea salt.',
    provenance: 'Valrhona Grand Cru Dark Chocolate · Figs, Santa Barbara',
    dietary: ['Vegetarian'],
    winePairing: '1998 Château d’Yquem, Sauternes'
  },
  {
    id: 'dessert-2',
    name: 'Fermented Wild Honey Semifreddo',
    subtitle: 'Ember-toasted almond crumble, bee pollen & Meyer lemon curd',
    price: 22,
    category: 'dessert',
    description: 'Chilled velvet parfait of meadowfoam honey, crowned with crisp honeycomb brittle and candied citrus peel.',
    provenance: 'Wildflower Honey, Topanga Canyon Apiaries',
    dietary: ['Vegetarian', 'Gluten-Free'],
    winePairing: '2020 Kracher Cuvée Beerenauslese, Austria'
  },

  // Cellar & Libations
  {
    id: 'cellar-1',
    name: 'The Hearth Negroni',
    subtitle: 'Smoked mezcal, Campari, house vermouth steeped with roasted cacao nibs',
    price: 26,
    category: 'beverage',
    description: 'Crafted with artisanal Mexican Mezcal, botanical bitter orange liqueur, sweet vermouth rested in charred oak casks, and flamed orange peel.',
    provenance: 'Single Village Mezcal, Oaxaca · Botanicals, House Distillate',
    dietary: ['Gluten-Free']
  },
  {
    id: 'cellar-2',
    name: 'Botanical Quince & Shiso Tonic',
    subtitle: 'Zero-proof craft distillation with sparkling verjus and herbal mist',
    price: 18,
    category: 'beverage',
    description: 'Hand-distilled botanicals of poached quince, mountain pine needles, and garden shiso, lifted with crisp sparkling mineral water.',
    provenance: 'Quince, Tehachapi Foothills · Mountain Pine, Angeles National Forest',
    dietary: ['Gluten-Free', 'Vegetarian']
  }
];

export const CULINARY_PROVISIONS: CulinaryProvisionItem[] = [
  {
    id: 'box-1',
    name: 'The Woodfire Experience at Home',
    subtitle: 'Curated 4-Course Finishing Box for Two',
    price: 185,
    description: 'Chef Elena’s signature courses prepared and vacuum-sealed with precise hearth-finishing instructions, herb bouquets, and artisanal bread.',
    serves: '2 Guests',
    includes: [
      'Hokkaido Scallop Crudo with Blood Orange Dressing',
      'Wild Chanterelle & Truffle Bone Broth Reduction',
      '2x Center-Cut Prime Wagyu Striploins ready for grill or cast-iron',
      'Smoked Salt Cultured Butter & 48-Hour Sourdough Loaf',
      'Two Bourbon Caramel Dessert Pots with Spiced Crumble'
    ],
    image: wagyuImg
  },
  {
    id: 'box-2',
    name: 'Sommelier Reserve Wine Duo',
    subtitle: 'Hand-Selected Cellar Pairings with Tasting Journal',
    price: 135,
    description: 'Curated by Master Sommelier Marcus Wright to accompany fine hearth dishes. Includes producer notes and cellar aging guide.',
    serves: '2 Bottles (750ml each)',
    includes: [
      '1x 2020 Domaine Dujac Morey-Saint-Denis (Burgundy, France)',
      '1x 2021 Keller Riesling Trocken Kirchspiel GG (Rheinhessen, Germany)',
      'Aurelia Linen Wine Tote & Sommelier Tasting Notes'
    ]
  },
  {
    id: 'box-3',
    name: 'Artisanal Hearth Bread & Butter Collection',
    subtitle: '48-Hour Heritage Sourdough & Smoked Bone Marrow Butter',
    price: 34,
    description: 'Stone-milled whole grain boules baked fresh in our stone oven each morning, paired with two house-churned cultured butters.',
    serves: '3–4 Guests',
    includes: [
      '1x Whole Tehachapi Heritage Grain Sourdough Boule',
      '1x Glass Jar Smoked Fleur de Sel Cultured Butter (200g)',
      '1x Glass Jar Roasted Garlic & Honey Bone Marrow Butter (200g)'
    ]
  },
  {
    id: 'box-4',
    name: 'The Botanical Pantry Gift Vault',
    subtitle: 'House-Infused Condiments & Single-Harvest Finishing Salts',
    price: 52,
    description: 'The kitchen secret ingredients crafted by Chef Elena Vance. Presented in an embossed gift box with wax seal.',
    serves: 'Culinary Gift Box',
    includes: [
      'Ember-Charred Chili & Fermented Garlic Oil (250ml)',
      'Wild Mountain Pine & Blackberry Verjus (200ml)',
      'Mesquite-Smoked Maldon Finishing Salt Jar (150g)',
      'Lavender Blossom Wild Honey (180g)'
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Elena Vance',
    role: 'Executive Chef & Co-Owner',
    bio: 'Trained at L’Arpège in Paris and Asador Etxebarri in the Basque Country, Chef Elena crafts menus governed by primal fire, open embers, and rare botanical varietals.'
  },
  {
    name: 'Marcus Wright',
    role: 'Master Sommelier & Beverage Director',
    bio: 'Curator of Aurelia’s 1,800-bin cellar, Marcus focuses on biodynamic, low-intervention estates across classic Old World terroirs and emergent coastal vineyards.'
  },
  {
    name: 'Theo Martin',
    role: 'Head Baker & Fermentation Director',
    bio: 'Oversees the restaurant’s 48-hour sourdough program and koji fermentation chambers, utilizing heirloom grains from California’s Central Valley.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Elena Vance coaxing staggering elegance from raw flame and smoke. Aurelia is arguably the most thrilling culinary opening on the Pacific coast this decade.',
    source: 'The Los Angeles Times',
    critic: 'Bill Addison, Chief Food Critic',
    year: '2025'
  },
  {
    quote: 'The balance between primal woodfire power and ethereal botanical subtlety is peerless. Two stars awarded with absolute conviction.',
    source: 'The Michelin Guide',
    critic: 'Inspectors Note',
    year: '2026'
  },
  {
    quote: 'A temple of contemplative gastronomy. The Hokkaido scallop crudo alone is worth traversing continents.',
    source: 'World’s 50 Best Discovery',
    critic: 'Academy Selection',
    year: '2025'
  }
];
