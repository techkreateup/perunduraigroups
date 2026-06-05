import { assetUrl } from '../utils/assetUrl';

export const categories = [
  {
    id: 'surgical',
    title: 'Surgical Instruments',
    sub: 'OT-grade stainless steel tools',
    banner: assetUrl('perundurai/banner/surgicalinstrumentsbanner.jpg'),
    description: 'Precision-engineered tools for modern surgical procedures.'
  },
  {
    id: 'wound',
    title: 'Wound Care',
    sub: 'Dressings, sutures & antiseptics',
    banner: assetUrl('perundurai/banner/woundbanner.jpg'),
    description: 'Professional solutions for wound management and skin protection.'
  },
  {
    id: 'iv',
    title: 'IV & Infusion',
    sub: 'IV sets, fluids & cannulas',
    banner: assetUrl('perundurai/banner/Vbanner.jpg'),
    description: 'Critical care solutions for fluid delivery and venous access.'
  },
  {
    id: 'diag',
    title: 'Diagnostic Supplies',
    sub: 'Monitors, meters & test kits',
    banner: assetUrl('perundurai/banner/diabanner.jpg'),
    description: 'Precise monitoring and screening tools for early detection.'
  },
  {
    id: 'ppe',
    title: 'PPE & Protection',
    sub: 'Gloves, masks & gowns',
    banner: assetUrl('perundurai/banner/ppebanner.jpg'),
    description: 'Certified personal protective equipment for healthcare safety.'
  },
  {
    id: 'pharma',
    title: 'Pharmaceutical',
    sub: 'OTC, Rx & specialty drugs',
    banner: assetUrl('perundurai/banner/pharmbanner.jpg'),
    description: 'Authorized distributor of premium branded and generic medicines.'
  }
];

export const productsByCat = {
  surgical: [
    { name: 'Allis Tissue Forceps', desc: 'Precision grip, reliable clamping', img: assetUrl('perundurai/Surgical instruments/Allis Tissue Forceps.jpg') },
    { name: 'Mayo Scissors', desc: 'Straight & curved, tungsten carbide', img: assetUrl('perundurai/Surgical instruments/Mayo Scissors.jpg') },
    { name: 'Scalpel & Blades', desc: 'Carbon steel and stainless steel', img: assetUrl('perundurai/Surgical instruments/Scalpel Blade.jpg') },
    { name: 'Needle Holders', desc: 'Mayo-Hegar, secure grip jaws', img: assetUrl('perundurai/Surgical instruments/Mayo-Hegar Needle Holder.jpg') },
    { name: 'Retractors', desc: 'Langenbeck, durable and precise', img: assetUrl('perundurai/Surgical instruments/Langenbeck Retractor.webp') },
    { name: 'Hemostats', desc: 'Kocher and Mosquito clamps', img: assetUrl('perundurai/Surgical instruments/Kocher Forceps.jpg') },
    { name: 'Babcock Forceps', desc: 'Atraumatic tissue grasping', img: assetUrl('perundurai/Surgical instruments/Babcock Forceps.jpg') },
    { name: 'Bone Rongeur', desc: 'High strength orthopaedic tool', img: assetUrl('perundurai/Surgical instruments/Bone Rongeur.jpg') },
    { name: 'Halsted Mosquito', desc: 'Fine surgical hemostat', img: assetUrl('perundurai/Surgical instruments/Halsted Mosquito Clamp.jpg') },
    { name: 'Metzenbaum Scissors', desc: 'Delicate tissue dissection', img: assetUrl('perundurai/Surgical instruments/Metzenbaum Scissors.jpg') }
  ],
  wound: [
    { name: 'Steri-Strips', desc: 'Wound closure strips, hypoallergenic', img: assetUrl('perundurai/Wound care/Steri-Strip.jpg') },
    { name: 'Gauze Pads', desc: 'Sterile dressing, high absorbency', img: assetUrl('perundurai/Wound care/Sterile Gauze Pads.jpg') },
    { name: 'Film Dressings', desc: 'Tegaderm, waterproof transparent', img: assetUrl('perundurai/Wound care/Tegaderm Film Dressing.jpg') },
    { name: 'Crepe Bandages', desc: 'Elastic and firm support rolls', img: assetUrl('perundurai/Wound care/Crepe Bandage.webp') },
    { name: 'Antiseptics', desc: 'Povidone-Iodine & Chlorhexidine', img: assetUrl('perundurai/Wound care/Povidone-Iodine Solution.jpg') },
    { name: 'Hydrocolloid', desc: 'Exudate management, promotes healing', img: assetUrl('perundurai/Wound care/Hydrocolloid Dressing.jpg') },
    { name: 'Chlorhexidine', desc: 'Surgical skin preparation', img: assetUrl('perundurai/Wound care/Chlorhexidine Gluconate.jpg') },
    { name: 'Nylon Sutures', desc: 'Non-absorbable monofilament', img: assetUrl('perundurai/Wound care/Nylon Suture.jpg') },
    { name: 'Silver Sulfadiazine', desc: 'Topical burn therapy', img: assetUrl('perundurai/Wound care/Silver Sulfadiazine Cream.webp') },
    { name: 'Vicryl Sutures', desc: 'Synthetic absorbable braided', img: assetUrl('perundurai/Wound care/Vicryl Suture.jpeg') }
  ],
  iv: [
    { name: '3-Way Stopcocks', desc: 'Luer lock, 360° rotation, lipid resistant', img: assetUrl('perundurai/IV infusion/Three-Way Stopcock.jpg') },
    { name: 'Burette Sets', desc: '110ml/150ml, micro drip (60 drops/ml)', img: assetUrl('perundurai/IV infusion/Burette Chamber Set.webp') },
    { name: 'Extension Lines', desc: 'Pressure monitoring, various lengths', img: assetUrl('perundurai/IV infusion/Extension Set Luer Lock.jpg') },
    { name: 'Infusion Drip Set', desc: 'Unolok, Dispovan — 2ml to 50ml', img: assetUrl('perundurai/IV infusion/IV Infusion Drip Set.jpg') },
    { name: 'CVC Catheters', desc: 'Multi-lumen, polyurethane construction', img: assetUrl('perundurai/IV infusion/Central Venous Catheter.jpg') },
    { name: 'IV Cannulas', desc: 'With injection port & wings, all gauges', img: assetUrl('perundurai/IV infusion/IV Cannula.jpg') },
    { name: 'Dextrose 5% (D5W)', desc: 'Intravenous energy source', img: assetUrl('perundurai/IV infusion/Dextrose-5-D5W.jpg') },
    { name: 'Normal Saline 0.9%', desc: 'Standard isotonic fluid', img: assetUrl('perundurai/IV infusion/Normal-Saline-0-9.webp') },
    { name: "Ringer's Lactate", desc: 'Electrolyte replenishment', img: assetUrl("perundurai/IV infusion/Ringer's Lactate.png") },
    { name: 'Syringe Pump', desc: 'Controlled precision dosing', img: assetUrl('perundurai/IV infusion/Syringe Infusion Pump.webp') }
  ],
  diag: [
    { name: 'BP Monitors', desc: 'Digital & mercurial models available', img: assetUrl('perundurai/Diagnostic Supplies/Digital BP Monitor.jpg') },
    { name: 'Glucometers', desc: 'Accu-Chek, One Touch compatible', img: assetUrl('perundurai/Diagnostic Supplies/Glucometer.png') },
    { name: 'Pulse Oximeter', desc: 'OLED display, high accuracy sensor', img: assetUrl('perundurai/Diagnostic Supplies/Pulse Oximeter.jpg') },
    { name: 'Stethoscopes', desc: 'Littmann Cardiology & Classic types', img: assetUrl('perundurai/Diagnostic Supplies/Stethoscope.jpg') },
    { name: 'Urine Strips', desc: '10-parameter professional dipsticks', img: assetUrl('perundurai/Diagnostic Supplies/Urine Dipstick Strips.jpg') },
    { name: 'Thermometers', desc: 'Digital & Non-contact Infrared (NCIT)', img: assetUrl('perundurai/Diagnostic Supplies/Digital Thermometer.jpg') },
    { name: '12-Lead ECG', desc: 'Advanced cardiac tracking', img: assetUrl('perundurai/Diagnostic Supplies/12-Lead ECG Machine.webp') },
    { name: 'HemoCue Analyzer', desc: 'Point-of-care hemoglobin test', img: assetUrl('perundurai/Diagnostic Supplies/HemoCue Analyzer.jpg') },
    { name: 'Patient Monitor', desc: 'Multi-parameter signs tracking', img: assetUrl('perundurai/Diagnostic Supplies/Monitor.jpg') },
    { name: 'Rapid Antigen Kit', desc: 'Fast infectious screening', img: assetUrl('perundurai/Diagnostic Supplies/Rapid Antigen Test Kit.avif') }
  ],
  ppe: [
    { name: 'Surgical Gloves', desc: 'Sterile latex, powder-free, assorted sizes', img: assetUrl('perundurai/PPE/Sterile Latex Surgical Gloves.jpg') },
    { name: 'Surgical Masks', desc: 'Premium 3-ply, BFE >99% certification', img: assetUrl('perundurai/PPE/3-Ply Surgical Mask.jpg') },
    { name: 'Surgical Gowns', desc: 'SMS reinforced, AAMI Level 2 protection', img: assetUrl('perundurai/PPE/Disposable Surgical Gown.jpg') },
    { name: 'Coverall Suits', desc: 'Tyvek material, fluid and viral barrier', img: assetUrl('perundurai/PPE/Tyvek Coverall Suit.webp') },
    { name: 'Safety Goggles', desc: 'Anti-fog, indirect ventilation design', img: assetUrl('perundurai/PPE/safety-goggles.jpg') },
    { name: 'N95 Respirators', desc: 'NIOSH approved, high filtration safety', img: assetUrl('perundurai/PPE/N95 Respirator Mask.jpg') },
    { name: 'Lead Apron', desc: 'X-Ray radiation protection shield', img: assetUrl('perundurai/PPE/Lead Apron.jpg') },
    { name: 'Nitrile Gloves', desc: 'Latex-free examination strength', img: assetUrl('perundurai/PPE/Nitrile Examination Gloves.jpg') },
    { name: 'Shoe Covers', desc: 'Disposable sanitary floor protection', img: assetUrl('perundurai/PPE/Shoe Covers.jpg') },
    { name: 'Surgical Bouffant', desc: 'Breathable non-woven head protection', img: assetUrl('perundurai/PPE/Surgical Bouffant.webp') }
  ],
  pharma: [
    { name: 'Antibiotics', desc: 'Augmentin, Azithromycin, Cephalexin', img: assetUrl('perundurai/Pharmaceutical/Amoxicillin-Clavulanate.webp') },
    { name: 'Analgesics', desc: 'Paracetamol, Diclofenac, Tramadol', img: assetUrl('perundurai/Pharmaceutical/Paracetamol Tablets.jpg') },
    { name: 'Injectables', desc: 'Vancomycin, Ondansetron, Midazolam', img: assetUrl('perundurai/Pharmaceutical/Vancomycin Injection.webp') },
    { name: 'Antidiabetics', desc: 'Metformin, Glibenclamide, Insulin', img: assetUrl('perundurai/Pharmaceutical/Metformin 500mg.jpg') },
    { name: 'Cardiovascular', desc: 'Atorvastatin, Amlodipine, Ramipril', img: assetUrl('perundurai/Pharmaceutical/Atorvastatin 20mg.webp') },
    { name: 'Gastrointestinal', desc: 'Omeprazole, Pantoprazole, Antacids', img: assetUrl('perundurai/Pharmaceutical/Omeprazole 20mg.jpeg') },
    { name: 'Epinephrine', desc: 'Anaphylaxis emergency care API', img: assetUrl('perundurai/Pharmaceutical/Epinephrine Injection.webp') },
    { name: 'Insulin Vials', desc: 'Diabetes glycemic control', img: assetUrl('perundurai/Pharmaceutical/Insulin Vials.webp') },
    { name: 'Morphine Sulphate', desc: 'Severe pain management', img: assetUrl('perundurai/Pharmaceutical/Morphine Injection.jpg') },
    { name: 'Ondansetron 4mg', desc: 'Intravenous anti-nausea control', img: assetUrl('perundurai/Pharmaceutical/Ondansetron 4mg.jpg') }
  ]
};
