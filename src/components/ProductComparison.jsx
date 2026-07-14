import React from 'react'

function ProductComparison() {
  const collectionsData = [
    {
      name: "Greca Fortuna",
      price: "From $1,850",
      movement: "Swiss Sellita SW200 Automatic",
      materials: "316L Steel / 18K Yellow Gold Plating",
      caseSize: "41mm Diameter / 11.2mm Thickness",
      waterResistance: "50 Meters (5 ATM)",
      crystal: "Double-AR Treated Sapphire",
      signatureFeature: "Engraved Greca Bezel & Date Magnifier"
    },
    {
      name: "V Dome Series",
      price: "From $2,400",
      movement: "Swiss Ronda Quartz Calibre 5040",
      materials: "High-Polish 904L Steel / Gold Accent Bars",
      caseSize: "43mm Diameter / 12.5mm Thickness",
      waterResistance: "50 Meters (5 ATM)",
      crystal: "Double Curved Sapphire",
      signatureFeature: "Barred Bezel Protection & Medusa Crown"
    },
    {
      name: "Antares",
      price: "From $2,100",
      movement: "Swiss Skeleton Hand-Wound",
      materials: "Matte DLC Titanium & 18K Gold Bridges",
      caseSize: "41mm Diameter / 10.8mm Thickness",
      waterResistance: "50 Meters (5 ATM)",
      crystal: "Faceted Edge Sapphire",
      signatureFeature: "Exposed Escapement & Floating Dial Rings"
    },
    {
      name: "Greca Logo Diver",
      price: "From $2,950",
      movement: "Swiss ETA 2824 Automatic Calibre",
      materials: "Ultra-Hard Brushed 904L Marine Steel",
      caseSize: "44mm Diameter / 13.8mm Thickness",
      waterResistance: "200 Meters (20 ATM)",
      crystal: "Flat Thickened Sapphire",
      signatureFeature: "Uni-directional Ceramic Bezel & Helium Release"
    }
  ]

  const comparisonFields = [
    { label: "Starting Price", key: "price", highlight: true },
    { label: "Calibre & Movement", key: "movement" },
    { label: "Core Materials", key: "materials" },
    { label: "Case Profile", key: "caseSize" },
    { label: "Water Resistance", key: "waterResistance" },
    { label: "Crystal Glass", key: "crystal" },
    { label: "Aesthetic Identity", key: "signatureFeature" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] tracking-[0.4em] text-gold uppercase block mb-3 font-semibold">
          COMPARISON MATRIX
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wider">
          Compare Collections
        </h2>
        <div className="w-12 h-0.5 bg-gold mt-4"></div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto border gold-border bg-luxury-charcoal/30 rounded-sm">
        <table className="w-full min-w-[800px] text-left border-collapse">
          {/* Header Row */}
          <thead>
            <tr className="border-b gold-border bg-[#050505]/80">
              <th className="p-6 font-serif text-xs uppercase tracking-[0.2em] text-gold w-1/5">
                Specification
              </th>
              {collectionsData.map((col) => (
                <th key={col.name} className="p-6 font-serif text-sm tracking-widest text-white w-1/5">
                  <span className="block">{col.name}</span>
                  <span className="text-[10px] text-gray-500 font-sans tracking-normal mt-0.5">Aurelius Ora</span>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body Rows */}
          <tbody>
            {comparisonFields.map((field) => (
              <tr 
                key={field.label}
                className="border-b border-luxury-gray hover:bg-luxury-black/30 transition-colors duration-300"
              >
                {/* Field Title */}
                <td className="p-6 text-[10px] uppercase tracking-widest text-gray-400 font-semibold border-r border-luxury-gray/50">
                  {field.label}
                </td>
                
                {/* Field Values per Collection */}
                {collectionsData.map((col) => (
                  <td 
                    key={col.name} 
                    className={`p-6 text-xs leading-relaxed ${
                      field.highlight 
                        ? 'font-serif text-gold font-semibold text-sm' 
                        : 'text-gray-400'
                    }`}
                  >
                    {col[field.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Disclaimer / Shipping Details */}
      <div className="mt-6 text-center text-[10px] text-gray-500 tracking-wider">
        * Specifications are certified by standard Swiss Horological institutions. Custom engravings and material alternatives are available upon request.
      </div>
    </div>
  )
}

export default ProductComparison
