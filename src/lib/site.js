/* ============================================================
   SINGLE SOURCE OF TRUTH
   Everything on the site reads from this file. Change a phone
   number, a service, a city, or a photo here and it updates
   everywhere, including metadata, sitemap, and schema.
   ============================================================ */

export const SITE_URL = "https://woolfmanlawnservices.com";

export const BIZ = {
  name: "Woolfman Lawn Services",
  legalName: "Woolfman Lawn Services LLC",
  owner: "Keonte Woolf",
  ownerFull: "Keonte Dwayne Woolf",
  phone: "586-510-0965",
  phoneRaw: "+15865100965",
  phoneAlt: "586-571-5571",
  phoneAltRaw: "+15865715571",
  email: "keontewoolf06@gmail.com",
  hours: "Mon to Sun, 8am to 5pm",
  years: "2",
  tagline: "No job too big or too small",
  // NOT rendered on any page. Used only in LocalBusiness JSON-LD and
  // for Google Business Profile consistency (service-area business).
  address: {
    street: "13359 Marlowe St",
    city: "Detroit",
    region: "MI",
    postalCode: "48227",
    country: "US",
    lat: 42.3739,
    lng: -83.1907,
  },
  social: {
    instagram: "https://www.instagram.com/woolfmanservice",
    facebook: "https://www.facebook.com/share/14nsPPSB4kg/",
  },
};

export const STATS = [
  { value: "150+", label: "Properties serviced" },
  { value: "2 Years", label: "In business" },
  { value: "LLC", label: "Licensed & insured" },
  { value: "5 Cities", label: "Across metro Detroit" },
  { value: "Same Day", label: "Most estimates" },
];

/* ------------------------------------------------------------
   PHOTOS
   Placeholders resolve to picsum.photos so nothing is ever
   broken. To swap in a real photo: drop the file in
   /public/images/ and change src to "/images/your-file.jpg".
   ------------------------------------------------------------ */
const ph = (seed, w = 1600, h = 1000) =>
  `https://picsum.photos/seed/wf-${seed}/${w}/${h}`;

export const PHOTOS = {
  hero: { src: ph("hero", 2000, 1200), alt: "Freshly cut and striped lawn in Detroit, Michigan" },
  heroMobile: { src: ph("hero", 1200, 1600), alt: "Freshly cut and striped lawn in Detroit, Michigan" },
  owner: { src: ph("owner", 1200, 1500), alt: "Keonte Woolf, owner of Woolfman Lawn Services" },
  ownerWide: { src: ph("owner-wide", 1800, 1000), alt: "Keonte Woolf on a job in Detroit" },
  aboutTruck: { src: ph("truck", 1600, 1100), alt: "Woolfman Lawn Services truck and trailer" },
  aboutCrew: { src: ph("crew", 1600, 1100), alt: "The Woolfman Lawn Services crew on a job" },
  areaMap: { src: ph("area", 1600, 1100), alt: "Metro Detroit neighborhood served by Woolfman Lawn Services" },
  cta: { src: ph("cta", 2000, 900), alt: "Cut and edged front lawn in metro Detroit" },
};

export const PEEK = [
  { src: ph("peek-1", 1200, 900), alt: "Front lawn cut and edged in Detroit" },
  { src: ph("peek-2", 1200, 900), alt: "Fresh mulch bed with a clean spade edge" },
  { src: ph("peek-3", 1200, 900), alt: "New sod laid and rolled on a Redford property" },
  { src: ph("peek-4", 1200, 900), alt: "Fall leaf cleanup along a Southfield curb line" },
  { src: ph("peek-5", 1200, 900), alt: "Cleared driveway after a Warren snowfall" },
];

export const ONJOB = Array.from({ length: 12 }, (_, i) => ({
  src: ph(`job-${i + 1}`, 900, 900),
  alt: "Woolfman Lawn Services on the job in metro Detroit",
}));

export const GALLERY = Array.from({ length: 15 }, (_, i) => ({
  src: ph(`gal-${i + 1}`, 1200, 900),
  alt: "Completed landscaping job in metro Detroit",
}));

/* ------------------------------------------------------------ */

export const SERVICES = [
  {
    slug: "lawn-maintenance",
    name: "Lawn Maintenance",
    tag: "Most requested",
    season: "April to October",
    short:
      "Weekly or biweekly cutting, edging, and trimming, with every hard surface blown off before we leave.",
    card:
      "Same crew, same day each week, so you always know when we are coming. We cut, edge, line trim, and clear every walk and driveway before we pull away. Call or send the form and we will price your lot for free.",
    intro:
      "Reliable weekly and biweekly lawn care for homeowners across Detroit and the surrounding metro. Same crew, same day, every week.",
    body: [
      "Most lawns in our service area take under thirty minutes, and we run tight routes so your yard gets cut on the same day each week. You do not have to be home and you do not have to chase us for a schedule.",
      "Every visit ends the same way. Beds and walks get edged, fences and posts get line trimmed, and the driveway, walkway, and porch get blown off. We never leave clippings on your concrete.",
      "There is no contract. Weekly and biweekly service runs until you tell us to stop, and the price does not change unless the scope does.",
    ],
    includes: [
      "Cut and stripe the full lawn",
      "Edge all beds, walks, and driveway",
      "Line trim fences, posts, and obstacles",
      "Blow off drive, walk, and porch",
    ],
    photo: ph("svc-lawn", 1400, 1000),
  },
  {
    slug: "mulching",
    name: "Mulching",
    tag: "Best value upgrade",
    season: "April to June",
    short:
      "Clean spade edges and fresh mulch, laid at an even depth so beds hold color all season.",
    card:
      "Fresh mulch is the fastest way to change how a property looks from the street. We pull weeds, cut a crisp edge, and lay mulch even so beds hold color and stay clean. Send a photo and we will quote it free.",
    intro:
      "The single fastest upgrade to how a property looks from the street, and one of the most requested jobs we do every spring.",
    body: [
      "We start by hand pulling existing weeds and clearing out old debris, then cut a crisp spade edge along every bed line. That edge is what separates a professional mulch job from a homeowner one.",
      "Mulch goes down at an even two to three inch depth. Too thin and the color fades by July. Too thick and it starves the plants. We get it right and haul every bag and scrap off your property.",
      "Most front bed jobs are done in a single visit. Larger properties with beds all the way around usually take a day.",
    ],
    includes: [
      "Hand pull existing weeds",
      "Cut a fresh spade edge on every bed",
      "Even two to three inch mulch depth",
      "Haul away all debris and packaging",
    ],
    photo: ph("svc-mulch", 1400, 1000),
  },
  {
    slug: "sod-installation",
    name: "Sod Installation",
    tag: null,
    season: "April to October",
    short:
      "New lawn graded, laid tight, and rolled flat, ready to water the same day we finish.",
    card:
      "Bare spots, mud runs, or a full front yard replacement. We grade the base, lay fresh sod seam to seam, roll it flat, and walk you through the first two weeks of watering. Free quote either way.",
    intro:
      "Bare patches, mud runs, or a full front yard replacement. We install fresh sod and set you up so it takes.",
    body: [
      "The install is only half the job. We remove the old turf and debris first, then grade and prep the soil so the new sod sits flat and makes contact everywhere. Skipping that step is why most sod jobs fail.",
      "Sod goes down tight, seam to seam, then gets rolled so the roots press into the soil. You can water the same day we finish.",
      "Before we leave, we walk you through the first two weeks of watering. Follow it and the lawn knits in fast.",
    ],
    includes: [
      "Remove old turf and debris",
      "Grade and prep the soil base",
      "Lay and roll fresh sod",
      "Written watering schedule for the first two weeks",
    ],
    photo: ph("svc-sod", 1400, 1000),
  },
  {
    slug: "leaf-removal",
    name: "Leaf Removal",
    tag: "Fall",
    season: "October to November",
    short:
      "Full property cleanup, beds and curb line included, with everything hauled off your lot.",
    card:
      "We clear the lawn, beds, window wells, and curb line, then haul it all off. Book one cleanup or set a recurring fall schedule so leaves never get ahead of you. Ask us for a free price.",
    intro:
      "A full fall cleanup that clears the whole property, not just the middle of the lawn.",
    body: [
      "We clear the lawn, the beds, the window wells, and the curb line. Leaves left in beds over winter mat down and kill what is underneath, so we get those too.",
      "Everything gets bagged and hauled off your property. Nothing gets blown into the street or left at the curb for you to deal with.",
      "Book a single cleanup at the end of the season, or set a recurring schedule through October and November so the leaves never get ahead of you.",
    ],
    includes: [
      "Clear lawn, beds, and window wells",
      "Clear the curb line and gutter edge",
      "Bag and haul everything off site",
      "One time or recurring schedule",
    ],
    photo: ph("svc-leaf", 1400, 1000),
  },
  {
    slug: "snow-removal",
    name: "Snow Removal",
    tag: "Winter",
    season: "November to March",
    short:
      "Driveways, walks, and salt, cleared overnight so you can get out in the morning.",
    card:
      "Seasonal contracts and per storm clearing. We run routes overnight so your drive and walk are open before you leave for work, with salt available for ice. Lock in a price before winter.",
    intro:
      "Seasonal contracts and per storm clearing across metro Detroit, run overnight so your drive is open before work.",
    body: [
      "We run our routes overnight and into the early morning. The goal is simple: your driveway and walk are open before you need to leave.",
      "We clear the full driveway including the apron at the street, plus walkways and steps. Salt is available on request for ice on walks and porches.",
      "Seasonal contracts get priority on the route and a locked price for the whole winter. Per storm clearing is available when the route allows.",
    ],
    includes: [
      "Full driveway and street apron",
      "Walkways, steps, and porch",
      "Salt available on request",
      "Seasonal contract or per storm",
    ],
    photo: ph("svc-snow", 1400, 1000),
  },
  {
    slug: "bush-trimming",
    name: "Bush Trimming",
    tag: null,
    season: "May to September",
    short:
      "Hedges and foundation shrubs shaped back to a clean line, with beds swept and debris hauled.",
    card:
      "Overgrown shrubs hide your house. We shape hedges and foundation plantings back to a clean line, clear the dead growth, and sweep the beds behind us. Send a photo and we will price it free.",
    intro:
      "Overgrown shrubs hide a house. We shape them back to a clean line and clean up behind ourselves.",
    body: [
      "Foundation plantings and hedges get shaped back to an even line so the house shows again. We work to the shape of the plant, not just a flat cut across the top.",
      "Dead growth gets cleared out of the middle so the shrub can fill back in properly next season.",
      "Beds and walks get swept and every clipping gets hauled off. You should not be able to tell we were there except that the yard looks better.",
    ],
    includes: [
      "Shape hedges and foundation shrubs",
      "Clear out dead interior growth",
      "Sweep beds, walks, and drive",
      "Haul away all clippings",
    ],
    photo: ph("svc-bush", 1400, 1000),
  },
  {
    slug: "tree-trimming",
    name: "Tree Trimming",
    tag: null,
    season: "Year round",
    short:
      "Low limbs, deadwood, and clearance over driveways and rooflines on small to mid size trees.",
    card:
      "Limb up for clearance, pull deadwood, and shape small to mid size trees. If a job needs a climber or a bucket truck we will tell you straight. Free assessment either way, just ask.",
    intro:
      "Clearance work, deadwood removal, and shaping on small to mid size trees around your property.",
    body: [
      "Low limbs over a driveway or scraping a roofline get taken back for clearance. Deadwood gets pulled before it comes down on its own.",
      "Shaping and thinning lets light through to the lawn underneath, which matters more than most homeowners expect if you have thin grass in the shade.",
      "If a job needs a climber or a bucket truck, we will tell you straight and point you to someone who has one. We would rather lose the job than do it wrong.",
    ],
    includes: [
      "Clearance over drive and roofline",
      "Deadwood removal",
      "Shaping and thinning",
      "Full debris haul off",
    ],
    photo: ph("svc-tree", 1400, 1000),
  },
];

export const CITIES = [
  {
    slug: "detroit",
    name: "Detroit",
    primary: true,
    zips: "48227, 48228, 48219, 48235, 48221",
    blurb: "Our home base. Same week service on most streets.",
    intro:
      "Woolfman Lawn Services is based in Detroit and most of our routes run right here. If you are inside the city, we can usually get you on the schedule the same week.",
    body: [
      "Detroit lots come in every shape. Narrow city lots on the west side, double lots where a neighbor came down, corner lots with twice the edging. We price by what is actually there rather than a flat rate off a map.",
      "We run weekly and biweekly maintenance across the west side and northwest Detroit, plus mulch, sod, and full cleanups on request. In winter the same routes turn into snow routes.",
    ],
    services: ["lawn-maintenance", "mulching", "leaf-removal", "snow-removal"],
  },
  {
    slug: "redford",
    name: "Redford",
    zips: "48239, 48240",
    blurb: "Weekly and biweekly maintenance routes.",
    intro:
      "Redford sits right on our main route out of Detroit, which means tight scheduling and a crew that is already in the area.",
    body: [
      "Most Redford properties are consistent lot sizes with mature trees, which makes them straightforward to price and quick to service on a weekly rotation.",
      "Fall is the busy season out here. Those mature trees drop a lot, so recurring leaf removal through October and November is worth setting up before the first drop.",
    ],
    services: ["lawn-maintenance", "leaf-removal", "bush-trimming", "snow-removal"],
  },
  {
    slug: "southfield",
    name: "Southfield",
    zips: "48033, 48034, 48075, 48076",
    blurb: "Mulch, sod, and full property cleanups.",
    intro:
      "In Southfield we do a lot of bed work. Mulch, edging, and shrub shaping on properties where the landscaping was put in well and just needs upkeep.",
    body: [
      "Southfield homes tend to have real bed structure around the foundation, which means a fresh spade edge and even mulch changes the whole look of the property for a fraction of what people expect.",
      "We also handle sod repair on the irrigated lawns out here, where a bad zone or heavy shade has thinned a section out.",
    ],
    services: ["mulching", "sod-installation", "bush-trimming", "lawn-maintenance"],
  },
  {
    slug: "west-bloomfield",
    name: "West Bloomfield",
    zips: "48322, 48323, 48324",
    blurb: "Larger lots, bush and tree trimming.",
    intro:
      "West Bloomfield properties run larger, with more trees and more bed line. That changes what a yard needs and how we price it.",
    body: [
      "On bigger lots the trimming work matters as much as the cut. Shrub shaping, clearance limbs over drives, and deadwood removal keep a large property from looking neglected even when the lawn is perfect.",
      "We quote larger lots in person rather than off a photo, so you get a real number instead of a range that moves later.",
    ],
    services: ["lawn-maintenance", "bush-trimming", "tree-trimming", "mulching"],
  },
  {
    slug: "warren",
    name: "Warren",
    zips: "48088, 48089, 48091, 48092, 48093",
    blurb: "Seasonal contracts and snow removal.",
    intro:
      "Warren is where a lot of our seasonal work lives. Full year coverage from the first cut in April through the last plow in March.",
    body: [
      "Consistent lot sizes across Warren make it easy to run a tight weekly route, which is why we can hold a reliable service day out here through the whole season.",
      "Snow contracts fill up first in Warren. If you want a locked price and route priority for winter, set it up before the first storm rather than after.",
    ],
    services: ["lawn-maintenance", "snow-removal", "leaf-removal", "mulching"],
  },
];

export const FAQS = [
  {
    q: "How much does a lawn cut cost?",
    a: "Price comes down to lot size and how often we come out. Weekly service is cheaper per visit than biweekly because the grass never gets away from us. We give you an exact number before we start and it does not change unless the scope does.",
  },
  {
    q: "Do you require a contract?",
    a: "No. Weekly and biweekly maintenance runs until you tell us to stop. Seasonal snow contracts are the one exception, and those are written out and priced before winter starts.",
  },
  {
    q: "How fast can you get out here?",
    a: "Most estimates go out the same day. New maintenance customers are usually on the route within the week, and one time jobs like mulch or cleanups depend on how full the schedule is that week.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Woolfman Lawn Services is a licensed and insured LLC with two years in business and over one hundred fifty properties serviced.",
  },
  {
    q: "What areas do you serve?",
    a: "Detroit is our home base, and we run routes through Redford, Southfield, West Bloomfield, and Warren. If you are just outside one of those, call and ask. We add streets when the route makes sense.",
  },
  {
    q: "Do I need to be home when you come?",
    a: "No. As long as we can get to the yard we will service it. Just let us know about gate codes, locked fences, or a dog in the yard when you book.",
  },
  {
    q: "What if I am not happy with the work?",
    a: "Call or text the same day and we come back out. We would rather redo it than have you tell a neighbor we cut corners.",
  },
  {
    q: "Do you handle commercial properties?",
    a: "Right now we focus on residential homeowners. That is where we do our best work and it keeps our routes tight, which is how we hold a reliable service day.",
  },
];

export const PROCESS = [
  { n: "01", t: "You send the details", d: "Fill out the estimate form or call. Takes about a minute." },
  { n: "02", t: "We price it", d: "Same day quote in most cases, with the scope written out." },
  { n: "03", t: "You get a service day", d: "A day and a window that we hold week after week." },
  { n: "04", t: "You look at the yard", d: "Not right? Tell us same day and we come back out." },
];

export const PROMISES = [
  {
    t: "We treat it like our own",
    d: "That is not a slogan we borrowed off another site. Every property gets the same attention we would give our own, whether it is a simple cut or a full cleanup.",
  },
  {
    t: "Licensed and insured LLC",
    d: "Two years in business, properly licensed, and fully insured. If something goes wrong on your property, you are covered.",
  },
  {
    t: "Same crew, same day",
    d: "You get a service day and we hold it. No guessing which week we show up or wondering if we forgot you.",
  },
  {
    t: "We clean up behind us",
    d: "Beds edged, walks blown off, clippings gone. You should not be able to tell we were there except that it looks better.",
  },
  {
    t: "A real price up front",
    d: "You get an exact number before we start, not a range that moves after the work is done.",
  },
  {
    t: "Fix it same day",
    d: "If it is not right when we pull away, call and we come back out. No argument, no invoice for the return trip.",
  },
];

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
export const getCity = (slug) => CITIES.find((c) => c.slug === slug);
export const cityNames = CITIES.map((c) => c.name);
