const MarqueeStrip = () => {
  const baseItems = [
    "Surgical Instruments", "IV & Infusion Sets", "Wound Care", "PPE & Protection",
    "Pharmaceuticals", "Diagnostics", "Hospital Consumables", "Cold Chain Products"
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
