console.log('countries.js loaded'); // Debug

const countryData = {
  "000-019": { name: "United States (UPC-A compatible)", flag: "🇺🇸" },
  "020-029": { name: "United States (restricted circulation numbers)", flag: "🇺🇸" },
  "030-039": { name: "United States (drugs, National Drug Code)", flag: "🇺🇸" },
  "040-049": { name: "United States (restricted circulation within a company)", flag: "🇺🇸" },
  "050-059": { name: "United States (reserved for future use)", flag: "🇺🇸" },
  "060-099": { name: "United States (UPC-A compatible)", flag: "🇺🇸" },
  "100-139": { name: "United States", flag: "🇺🇸" },
  "200-299": { name: "GS1 (restricted circulation within a region)", flag: "🌍" },
  "300-379": { name: "France and Monaco", flag: "🇫🇷" },
  "380": { name: "Bulgaria", flag: "🇧🇬" },
  "383": { name: "Slovenia", flag: "🇸🇮" },
  "385": { name: "Croatia", flag: "🇭🇷" },
  "387": { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
  "389": { name: "Montenegro", flag: "🇲🇪" },
  "390": { name: "Kosovo", flag: "🇽🇰" },
  "400-440": { name: "Germany", flag: "🇩🇪" },
  "450-459": { name: "Japan", flag: "🇯🇵" },
  "460-469": { name: "Russia", flag: "🇷🇺" },
  "470": { name: "Kyrgyzstan", flag: "🇰🇬" },
  "471": { name: "Taiwan", flag: "🇹🇼" },
  "474": { name: "Estonia", flag: "🇪🇪" },
  "475": { name: "Latvia", flag: "🇱🇻" },
  "476": { name: "Azerbaijan", flag: "🇦🇿" },
  "477": { name: "Lithuania", flag: "🇱🇷" },
  "479": { name: "Sri Lanka", flag: "🇱🇰" },
  "480": { name: "Philippines", flag: "🇵🇭" },
  "481": { name: "Belarus", flag: "🇧🇾" },
  "482": { name: "Ukraine", flag: "🇺🇦" },
  "483": { name: "Turkmenistan", flag: "🇹🇲" },
  "484": { name: "Moldova", flag: "🇲🇩" },
  "485": { name: "Armenia", flag: "🇦🇲" },
  "486": { name: "Georgia", flag: "🇬🇪" },
  "487": { name: "Kazakhstan", flag: "🇻🇮" },
  "488": { name: "Tajikistan", flag: "🇹🇯" },
  "489": { name: "Hong Kong", flag: "🇭🇰" },
  "490-499": { name: "Japan (original)", flag: "🇯🇵" },
  "500-509": { name: "United Kingdom", flag: "🇬🇧" },
  "520-521": { name: "Greece", flag: "🇬🇷" },
  "528": { name: "Lebanon", flag: "🇱🇧" },
  "529": { name: "Cyprus", flag: "🇨🇾" },
  "530": { name: "Albania", flag: "🇦🇱" },
  "531": { name: "North Macedonia", flag: "🇲🇰" },
  "535": { name: "Malta", flag: "🇲🇹" },
  "539": { name: "Ireland", flag: "🇮🇪" },
  "540-549": { name: "Belgium and Luxembourg", flag: "🇧🇪🇱🇺" },
  "560": { name: "Portugal", flag: "🇵🇹" },
  "569": { name: "Iceland", flag: "🇮🇸" },
  "570-579": { name: "Denmark, Faroe Islands, and Greenland", flag: "🇩🇰" },
  "590": { name: "Poland", flag: "🇵🇱" },
  "594": { name: "Romania", flag: "🇷🇴" },
  "599": { name: "Hungary", flag: "🇭🇺" },
  "600-601": { name: "South Africa", flag: "🇿🇦" },
  "603": { name: "Ghana", flag: "🇬🇭" },
  "604": { name: "Senegal", flag: "🇸🇳" },
  "605": { name: "Uganda", flag: "🇺🇬" },
  "606": { name: "Angola", flag: "🇦🇴" },
  "607": { name: "Oman", flag: "🇴🇲" },
  "608": { name: "Bahrain", flag: "🇧🇭" },
  "609": { name: "Mauritius", flag: "🇲🇺" },
  "611": { name: "Morocco", flag: "🇲🇦" },
  "612": { name: "Somalia", flag: "🇸🇴" },
  "613": { name: "Algeria", flag: "🇩🇿" },
  "615": { name: "Nigeria", flag: "🇳🇬" },
  "616": { name: "Kenya", flag: "🇰🇪" },
  "617": { name: "Cameroon", flag: "🇨🇲" },
  "618": { name: "Ivory Coast", flag: "🇨🇮" },
  "619": { name: "Tunisia", flag: "🇹🇳" },
  "620": { name: "Tanzania", flag: "🇹🇿" },
  "621": { name: "Syria", flag: "🇸🇾" },
  "622": { name: "Egypt", flag: "🇪🇬" },
  "623": { name: "Brunei", flag: "🇧🇳" },
  "624": { name: "Libya", flag: "🇱🇾" },
  "625": { name: "Jordan", flag: "🇯🇴" },
  "626": { name: "Iran", flag: "🇮🇷" },
  "627": { name: "Kuwait", flag: "🇰🇼" },
  "628": { name: "Saudi Arabia", flag: "🇸🇦" },
  "629": { name: "United Arab Emirates", flag: "🇦🇪" },
  "630": { name: "Qatar", flag: "🇶🇦" },
  "631": { name: "Namibia", flag: "🇳🇦" },
  "632": { name: "Rwanda", flag: "🇷🇼" },
  "640-649": { name: "Finland", flag: "🇫🇮" },
  "680-681": { name: "China", flag: "🇨🇳" },
  "690-699": { name: "China", flag: "🇨🇳" },
  "700-709": { name: "Norway", flag: "🇳🇴" },
  "729": { name: "Israel", flag: "🇮🇱" },
  "730-739": { name: "Sweden", flag: "🇸🇪" },
  "740": { name: "Guatemala", flag: "🇬🇹" },
  "741": { name: "El Salvador", flag: "🇸🇻" },
  "742": { name: "Honduras", flag: "🇭🇳" },
  "743": { name: "Nicaragua", flag: "🇳🇮" },
  "744": { name: "Costa Rica", flag: "🇨🇷" },
  "745": { name: "Panama", flag: "🇵🇦" },
  "746": { name: "Dominican Republic", flag: "🇩🇴" },
  "750": { name: "Mexico", flag: "🇲🇽" },
  "754-755": { name: "Canada", flag: "🇨🇦" },
  "759": { name: "Venezuela", flag: "🇻🇪" },
  "760-769": { name: "Switzerland and Liechtenstein", flag: "🇨🇭" },
  "770-771": { name: "Colombia", flag: "🇨🇴" },
  "773": { name: "Uruguay", flag: "🇺🇾" },
  "775": { name: "Peru", flag: "🇵🇪" },
  "777": { name: "Paraguay", flag: "🇵🇾" },
  "778": { name: "Chile", flag: "🇨🇱" },
  "779": { name: "Argentina", flag: "🇦🇷" },
  "780": { name: "Chile", flag: "🇨🇱" },
  "781": { name: "Argentina", flag: "🇦🇷" },
  "782": { name: "Paraguay", flag: "🇵🇾" },
  "786": { name: "Ecuador", flag: "🇪🇨" },
  "789-790": { name: "Brazil", flag: "🇧🇷" },
  "800-839": { name: "Italy, San Marino, and Vatican City", flag: "🇮🇹" },
  "840-849": { name: "Spain and Andorra", flag: "🇪🇸" },
  "850": { name: "Cuba", flag: "🇨🇺" },
  "858": { name: "Slovakia", flag: "🇸🇰" },
  "859": { name: "Czech Republic", flag: "🇨🇿" },
  "860": { name: "Serbia", flag: "🇷🇸" },
  "865": { name: "Mongolia", flag: "🇲🇳" },
  "867": { name: "North Korea", flag: "🇰🇵" },
  "868-869": { name: "Turkey", flag: "🇹🇷" },
  "870-879": { name: "Netherlands", flag: "🇳🇱" },
  "880-881": { name: "South Korea", flag: "🇰🇷" },
  "883": { name: "Myanmar", flag: "🇲🇲" },
  "884": { name: "Cambodia", flag: "🇰🇭" },
  "885": { name: "Thailand", flag: "🇹🇭" },
  "888": { name: "Singapore", flag: "🇸🇬" },
  "890": { name: "India", flag: "🇮🇳" },
  "893": { name: "Vietnam", flag: "🇻🇳" },
  "894": { name: "Bangladesh", flag: "🇧🇩" },
  "896": { name: "Pakistan", flag: "🇵🇰" },
  "899": { name: "Indonesia", flag: "🇮🇩" },
  "900-919": { name: "Austria", flag: "🇦🇹" },
  "930-939": { name: "Australia", flag: "🇦🇺" },
  "940-949": { name: "New Zealand", flag: "🇳🇿" },
  "950": { name: "GS1 Global Office", flag: "🌍" },
  "951": { name: "EPC General Identifier (GID)", flag: "🌍" },
  "952": { name: "GS1 Demonstrations and Examples", flag: "🌍" },
  "955": { name: "Malaysia", flag: "🇲🇾" },
  "958": { name: "Macau", flag: "🇲🇴" },
  "960-969": { name: "GS1 Global Office: GTIN-8 allocations", flag: "🌍" },
  "977": { name: "Serial publications (ISSN)", flag: "📖" },
  "978-979": { name: "Bookland (ISBN)", flag: "📚" },
  "980": { name: "Refund receipts", flag: "🧾" },
  "981-983": { name: "GS1 coupon identification (common currency)", flag: "💵" },
  "990-999": { name: "GS1 coupon identification", flag: "💵" }
};

// Pre-process countryData into a prefix lookup table
console.log('Building prefix lookup'); // Debug
const prefixLookup = {};
try {
  for (let range in countryData) {
    const [start, end] = range.split('-').map(num => parseInt(num));
    if (isNaN(end)) {
      // Single prefix (e.g., "894")
      prefixLookup[start.toString().padStart(3, '0')] = countryData[range];
    } else {
      // Range (e.g., "000-019")
      for (let i = start; i <= end; i++) {
        prefixLookup[i.toString().padStart(3, '0')] = countryData[range];
      }
    }
  }
  console.log('Prefix lookup built:', Object.keys(prefixLookup).length, 'entries'); // Debug
} catch (error) {
  console.error('Failed to build prefix lookup:', error);
}

function getCountryByEANPrefix(prefix) {
  console.log('getCountryByEANPrefix called with:', prefix); // Debug
  try {
    const cleanPrefix = prefix.trim().padStart(3, '0');
    console.log(`Looking up prefix: "${cleanPrefix}"`); // Debug
    const result = prefixLookup[cleanPrefix] || { name: "Unknown Origin", flag: "❓" };
    console.log(`Match:`, result); // Debug
    return result;
  } catch (error) {
    console.error('Error in getCountryByEANPrefix:', error);
    return { name: "Unknown Origin", flag: "❓" };
  }
}

export { countryData, getCountryByEANPrefix };
