import { assetUrl } from '../utils/assetUrl';

export const categories = [
  {
    id: 'chemicals',
    title: 'Cleaning Chemicals',
    sub: 'Floor, surface & washroom cleaners',
    banner: assetUrl('thiyash/productstats/cleaning-chemicals.webp'),
    description: 'Professional grade cleaning solutions and chemicals for industrial and commercial maintenance.'
  },
  {
    id: 'tools',
    title: 'Cleaning Tools',
    sub: 'Mops, brushes & cleaning accessories',
    banner: assetUrl('thiyash/productstats/cleaning-tools.png'),
    description: 'Durable tools and equipment for efficient everyday cleaning operations.'
  },
  {
    id: 'hygiene',
    title: 'Hygiene & Sanitization',
    sub: 'Hand care, paper products & sanitizers',
    banner: assetUrl('thiyash/productstats/hygiene-products.jpeg'),
    description: 'Essential hygiene products including sanitizers, premium tissues, and protective gear.'
  },
  {
    id: 'laundry',
    title: 'Laundry Care',
    sub: 'Detergents, softeners & fabric care',
    banner: assetUrl('thiyash/banner/cleaning_liquids_cover.jpeg'),
    description: 'Advanced laundry solutions designed for high-performance cleaning and fabric longevity.'
  }
];

export const productsByCat = {
  chemicals: [
    { name: 'Floor Cleaner', desc: 'Pine scented germicidal floor cleaner', img: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400' },
    { name: 'Glass Cleaner', desc: 'Streak-free window and glass formula', img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400' },
    { name: 'Toilet Bowl Cleaner', desc: 'Heavy duty limescale remover', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400' }
  ],
  hygiene: [
    { name: 'Hand Sanitizer', desc: '70% Alcohol based instant hand sanitizer', img: assetUrl('thiyash/hygiene-sanitization/sanitizer.jpg') },
    { name: 'Surface Sanitizer', desc: 'Powerful disinfectant for all surfaces', img: assetUrl('thiyash/hygiene-sanitization/surface-sanitizer.jpg') },
    { name: 'Disinfectant Spray', desc: 'Multi-surface germ protection spray', img: assetUrl('thiyash/hygiene-sanitization/disinfectant-spray.avif') },
    { name: 'Room Spray', desc: 'Long-lasting refreshing room fragrance', img: assetUrl('thiyash/hygiene-sanitization/room-spray.jpeg') },
    { name: 'Paper Napkins', desc: 'White beverage and dinner napkins', img: assetUrl('thiyash/hygiene-sanitization/paper-napkin.webp') },
    { name: 'Hand Paper Towels', desc: 'Premium 2-ply multifold towels', img: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400' },
    { name: 'Toilet Tissue Rolls', desc: 'Bulk pack 2-ply soft toilet rolls', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400' },
    { name: 'T-Roll Dispenser', desc: 'Lockable wall-mounted dispenser', img: assetUrl('thiyash/hygiene-sanitization/t-roll-dispenser.jpg') },
    { name: 'Rubber Gloves', desc: 'Nitrile Examination Gloves', img: assetUrl('perundurai/PPE/Nitrile Examination Gloves.jpg') },
    { name: 'Work Aprons', desc: 'Waterproof PVC heavy duty apron', img: assetUrl('thiyash/hygiene-sanitization/apron.webp') },
    { name: 'Facial Tissues', desc: 'Soft 3-ply premium facial tissues', img: assetUrl('thiyash/hygiene-sanitization/facial-tissues.jpg') },
    { name: 'Safety Masks', desc: '3-Ply Surgical Mask', img: assetUrl('perundurai/PPE/3-Ply Surgical Mask.jpg') }
  ],
  laundry: [
    { name: 'Liquid Detergent', desc: 'High-performance laundry cleaning liquid', img: assetUrl('thiyash/laundry-care/Liquid Detergen.jpeg') },
    { name: 'Fabric Softener', desc: 'Makes clothes soft and fragrant', img: assetUrl('thiyash/laundry-care/Fabric Softener.jpeg') },
    { name: 'Stain Remover', desc: 'Tough on stains, gentle on fabric', img: assetUrl('thiyash/laundry-care/Stain Remover.jpeg') },
    { name: 'Bleaching Solution', desc: 'Powerful white fabric restoration', img: assetUrl('thiyash/laundry-care/Bleaching Solution.jpeg') },
    { name: 'Laundry Bags', desc: 'Durable laundry collection bags', img: assetUrl('thiyash/laundry-care/Laundry Bags.jpeg') },
    { name: 'Linen Conditioner', desc: 'Premium care for hospitality linen', img: assetUrl('thiyash/laundry-care/Linen Conditioner.jpeg') },
    { name: 'Odor Neutralizer', desc: 'Removes tough odors from fabrics', img: assetUrl('thiyash/laundry-care/Odor Neutralizer.jpeg') },
    { name: 'Dryer Sheets', desc: 'Reduces static and adds softness', img: assetUrl('thiyash/laundry-care/Dryer Sheets.jpeg') },
    { name: 'Fabric Freshener', desc: 'Long-lasting scent for all fabrics', img: assetUrl('thiyash/laundry-care/Fabric Freshener.jpeg') },
    { name: 'Naphthalene Balls', desc: 'Protects clothes from moths and odors', img: assetUrl('thiyash/laundry-care/naphthalene balls.jpeg') }
  ],
  tools: [
    { name: 'Cotton Wet Mop', desc: 'Heavy duty loop end industrial mop', img: assetUrl('thiyash/cleaning-tools/mop.jpg') },
    { name: 'Floor Wiper', desc: 'Streak-free professional floor squeegee', img: assetUrl('thiyash/cleaning-tools/floor wiper.jpg') },
    { name: 'Soft Broom', desc: 'High-quality grass broom for indoors', img: assetUrl('thiyash/cleaning-tools/broom.jpg') },
    { name: 'Floor Scrubber', desc: 'Heavy duty brush for tough stains', img: assetUrl('thiyash/cleaning-tools/sruber.jpg') },
    { name: 'Cleaning Bucket', desc: '13L HDPE durable cleaning bucket', img: assetUrl('thiyash/cleaning-tools/plastic-13l-blue-hdpe-home-water-bucket-888.jpg') },
    { name: 'Vacuum Cleaner', desc: 'Industrial grade wet and dry vacuum', img: assetUrl('thiyash/cleaning-tools/vaccum cleaner.webp') },
    { name: 'Dustpan Set', desc: 'Long-handle dustpan and brush set', img: assetUrl('thiyash/cleaning-tools/dustpan.webp') },
    { name: 'Pedal Bin', desc: 'Hands-free plastic pedal dustbin', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400' },
    { name: 'Garbage Bags', desc: 'Heavy duty black trash bags', img: assetUrl('thiyash/cleaning-tools/garbagebag.jpg') },
    { name: 'Dustbin', desc: 'Heavy duty trash bin', img: 'https://plus.unsplash.com/premium_photo-1664392292014-9b4e83e12bb5' }
  ]
};
