const MarqueeStrip = () => {
  const baseItems = [
    "Cleaning Chemicals", "Floor Cleaners", "Mops & Brushes", "Waste Bins",
    "Hand Wash & Sanitizers", "Paper Napkins", "Garbage Bags", "Cleaning Tools",
    "Air Fresheners", "Nitrile Gloves", "Microfiber Cloths", "Toilet Cleaners"
  ];
  const items = [...baseItems, ...baseItems];

  return (
    <div className="strip" id="home-strip">
      <div className="strip-track">
        {items.map((item, index) => (
          <span key={index} className="strip-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
