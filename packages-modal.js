// Package Modal System for Serendip Go Travel
// Handles package details modal with Contact Us button

// Package data - detailed information for each package
const packageDetails = {
  'quick-escape': {
    category: 'Quick Escape',
    title: 'Highlights of Sri Lanka',
    duration: '3-4 Days',
    description: 'Perfect for travelers with limited time who want to experience the essence of Sri Lanka. This carefully crafted itinerary covers the must-see cultural and historical landmarks, giving you a comprehensive introduction to the island\'s rich heritage.',
    highlights: [
      'Sigiriya Rock Fortress - Climb the iconic 5th-century fortress (UNESCO)',
      'Temple of the Sacred Tooth Relic in Kandy - One of Buddhism\'s most sacred sites',
      'Traditional Kandyan dance performance - Vibrant cultural entertainment',
      'Royal Botanical Gardens - 147 acres of exotic flora and orchids',
      'Spice garden tour - Discover Sri Lanka\'s aromatic spice heritage',
      'Comfortable 3-4 star accommodation throughout',
      'Private air-conditioned vehicle with English-speaking driver-guide'
    ]
  },
  'week-adventure': {
    category: 'Week Adventure',
    title: 'Cultural Triangle & Hill Country',
    duration: '7-8 Days',
    description: 'One week exploring ancient cities, lush tea plantations, and scenic hill stations. The perfect introduction to Sri Lanka covering cultural heritage, colonial history, and breathtaking mountain landscapes.',
    highlights: [
      'Dambulla Cave Temple - Ancient Buddhist temple complex (UNESCO)',
      'Polonnaruwa ancient ruins - Medieval capital with stunning architecture',
      'Nuwara Eliya tea factory tour - Learn about world-famous Ceylon tea',
      'Scenic train journey through hills - One of the world\'s most beautiful train rides',
      'Ella\'s Nine Arch Bridge - Iconic colonial-era railway bridge',
      'Authentic Sri Lankan cuisine experiences',
      'Mix of cultural sites and natural beauty'
    ]
  },
  'extended-tour': {
    category: 'Extended Tour',
    title: 'Complete Island Explorer',
    duration: '10-12 Days',
    description: 'A comprehensive journey covering cultural sites, wildlife safaris, tea country, and pristine beaches. Experience the full diversity of Sri Lanka from ancient kingdoms to tropical coastlines.',
    highlights: [
      'Cultural Triangle - Sigiriya, Polonnaruwa, and Anuradhapura (UNESCO sites)',
      'Yala National Park wildlife safari - Spot leopards, elephants, and exotic birds',
      'Tea country experience - Nuwara Eliya plantations and scenic train ride',
      'Galle Fort - 17th-century Dutch colonial heritage (UNESCO)',
      'South coast beach relaxation - Unwind on pristine golden sands',
      'Authentic village experiences and local interactions',
      'Perfect balance of culture, nature, and leisure'
    ]
  },
  'grand-tour': {
    category: 'Grand Tour',
    title: 'Ultimate Sri Lanka Discovery',
    duration: '14-16 Days',
    description: 'Two weeks of immersive exploration covering every corner of the island. From ancient kingdoms to tropical beaches, wildlife safaris to mountain hikes - experience it all at a comfortable pace.',
    highlights: [
      'All UNESCO World Heritage Sites - Complete cultural immersion',
      'Multiple wildlife safaris - Yala, Minneriya, and Udawalawe national parks',
      'Hill country and tea estates - Extended time in scenic highlands',
      'East and South coast beaches - Experience both coastlines',
      'Traditional village experiences - Authentic local interactions',
      'Ayurvedic spa treatments - Traditional wellness sessions',
      'Flexible pacing with free time to explore independently'
    ]
  },
  'ultimate-journey': {
    category: 'Ultimate Journey',
    title: 'Grand Sri Lanka Odyssey',
    duration: '19-21 Days',
    description: 'The ultimate deep-dive into Sri Lankan culture, nature, and adventure. This extended journey allows extended stays in each region, off-the-beaten-path experiences, and complete island immersion.',
    highlights: [
      'Complete cultural heritage circuit - All major and minor historical sites',
      'Extended wildlife experiences - Multiple safaris with expert naturalists',
      'Off-the-beaten-path destinations - Hidden gems and local secrets',
      'Local community immersion - Home-stays and village interactions',
      'Both coasts and highlands exploration - Complete geographical diversity',
      'Cooking classes and cultural workshops',
      'Leisurely pace with ample free time for personal exploration'
    ]
  },
  'cultural-heritage': {
    category: 'Cultural & Heritage',
    title: 'Ancient Kingdoms Trail',
    duration: '8 Days',
    description: 'Journey through 2,500 years of history exploring UNESCO World Heritage Sites and sacred Buddhist temples. Perfect for history enthusiasts and cultural explorers.',
    highlights: [
      'Anuradhapura sacred city - First capital with ancient stupas',
      'Polonnaruwa medieval capital - Well-preserved ruins and Buddha statues',
      'Sigiriya and Dambulla - Iconic rock fortress and cave temples (UNESCO)',
      'Kandy Temple of the Tooth - Most sacred Buddhist relic',
      'Traditional craft workshops - Wood carving, batik, and pottery',
      'Expert cultural guides with deep historical knowledge',
      'Visits to active monasteries and Buddhist ceremonies'
    ]
  },
  'wildlife-nature': {
    category: 'Wildlife & Nature',
    title: 'Safari & Wildlife Adventure',
    duration: '7 Days',
    description: 'Encounter leopards, elephants, and exotic birds in their natural habitats. Sri Lanka\'s premier wildlife experience across multiple national parks with expert naturalists.',
    highlights: [
      'Yala leopard safari - Highest leopard density in the world',
      'Minneriya elephant gathering - Up to 300 wild elephants',
      'Udawalawe elephant transit home - Orphaned elephant rehabilitation',
      'Whale watching in Mirissa - Blue whales and dolphins',
      'Bird watching in wetlands - Over 400 species of birds',
      'Eco-lodges and tented camps - Immersive nature stays',
      'Private jeep safaris with experienced trackers'
    ]
  },
  'beach-relaxation': {
    category: 'Beach & Relaxation',
    title: 'Tropical Paradise Escape',
    duration: '6 Days',
    description: 'Unwind on pristine beaches with turquoise waters and swaying palms. Perfect for those seeking relaxation, water sports, and coastal luxury.',
    highlights: [
      'South coast beach resorts - Luxury beachfront accommodations',
      'Galle Fort sunset walk - Historic Dutch fort by the ocean',
      'Snorkeling and water sports - Coral reefs and marine life',
      'Ayurvedic spa treatments - Traditional wellness and relaxation',
      'Fresh seafood dining - Beachside restaurants and local catches',
      'Yoga sessions on the beach - Morning and sunset classes',
      'Turtle hatchery visit - Release baby turtles into the ocean'
    ]
  },
  'adventure-activities': {
    category: 'Adventure & Activities',
    title: 'Thrills & Trails Adventure',
    duration: '9 Days',
    description: 'Adrenaline-pumping activities from white-water rafting to mountain trekking. Designed for adventure enthusiasts seeking active experiences.',
    highlights: [
      'White-water rafting in Kitulgala - Grade 2-3 rapids',
      'Hiking Adam\'s Peak or Knuckles Range - Challenging mountain treks',
      'Rock climbing and zip-lining - Aerial adventures',
      'Mountain biking through villages - Rural exploration',
      'Surfing in Arugam Bay - World-class surf breaks',
      'Canyoning and waterfall rappelling - Extreme adventures',
      'Camping under the stars - Wilderness experiences'
    ]
  },
  'spiritual-wellness': {
    category: 'Spiritual & Wellness',
    title: 'Mindfulness & Ayurveda Retreat',
    duration: '10 Days',
    description: 'Rejuvenate mind, body, and spirit with authentic Ayurvedic treatments, yoga, and meditation in serene natural settings.',
    highlights: [
      'Traditional Ayurveda consultations - Personalized wellness plans',
      'Daily yoga and meditation sessions - Expert instructors',
      'Temple blessings and spiritual tours - Buddhist and Hindu sites',
      'Herbal spa treatments - Authentic Ayurvedic therapies',
      'Organic wellness cuisine - Healing meals and detox programs',
      'Pranayama and breathing workshops - Ancient techniques',
      'Peaceful retreat settings - Mountain or coastal sanctuaries'
    ]
  },
  'family-friendly': {
    category: 'Family Friendly',
    title: 'Family Island Adventure',
    duration: '10 Days',
    description: 'Kid-friendly activities and cultural experiences designed for families. Comfortable pacing with fun activities suitable for all ages.',
    highlights: [
      'Elephant orphanage visit - Feed and bathe baby elephants',
      'Easy wildlife safaris - Child-friendly jeep tours',
      'Beach days with water activities - Snorkeling, swimming, sandcastles',
      'Turtle hatchery experience - Release baby turtles',
      'Interactive cultural workshops - Mask painting, cooking classes',
      'Scenic train ride - Exciting journey through mountains',
      'Family-friendly accommodations - Connecting rooms and pools'
    ]
  },
  'couples-romance': {
    category: 'Couples & Romance',
    title: 'Romantic Honeymoon Escape',
    duration: '7 Days',
    description: 'Intimate experiences for couples including private dinners, luxury stays, and breathtaking romantic settings. Perfect for honeymoons and anniversaries.',
    highlights: [
      'Private candlelit beach dinners - Exclusive oceanfront dining',
      'Couples spa treatments - Romantic wellness sessions',
      'Scenic train journey for two - First-class mountain views',
      'Boutique hotel stays - Luxury romantic accommodations',
      'Sunset viewing points - Sigiriya Rock, Galle Fort, beaches',
      'Private guides and vehicles - Intimate, personalized service',
      'Champagne experiences - Sunset toasts and celebrations'
    ]
  },
  'solo-travelers': {
    category: 'Solo Travelers',
    title: 'Independent Explorer Journey',
    duration: '8 Days',
    description: 'Flexible itinerary with opportunities to meet fellow travelers while maintaining independence. Safe, solo-friendly experiences throughout.',
    highlights: [
      'Safe, solo-friendly accommodations - Social hostels or boutique hotels',
      'Mix of guided tours and free time - Balance of structure and freedom',
      'Local community experiences - Authentic interactions',
      'Budget-conscious options - Value without compromising quality',
      'Easy public transport routes - Train and bus adventures',
      'Solo traveler meet-ups - Connect with like-minded explorers',
      'Flexible scheduling - Adapt itinerary to your pace'
    ]
  },
  'luxury-escapes': {
    category: 'Luxury Escapes',
    title: 'Ultra-Luxury Sri Lanka',
    duration: '12 Days',
    description: 'Indulge in 5-star boutique resorts, private guides, exclusive experiences, and personalized service. The finest Sri Lanka has to offer.',
    highlights: [
      '5-star boutique accommodations - Luxury hotels and eco-resorts',
      'Private chauffeur and expert guide - Dedicated personal service',
      'Helicopter transfers available - Scenic aerial journeys',
      'VIP cultural site access - Private tours outside regular hours',
      'Michelin-level dining experiences - Finest cuisine and wine',
      'Luxury safari camps - Glamping in style',
      'Personalized concierge service - Every detail handled'
    ]
  },
  'group-adventures': {
    category: 'Group Adventures',
    title: 'Small Group Discovery',
    duration: '9 Days',
    description: 'Join like-minded travelers in small groups for shared experiences and new friendships. Maximum 12 travelers per departure.',
    highlights: [
      'Maximum 12 travelers per group - Intimate group size',
      'Shared transport and activities - Cost-effective travel',
      'Group dining experiences - Social meals and cultural exchanges',
      'English-speaking tour leader - Expert throughout the journey',
      'Cost-effective pricing - Share costs, maximize experiences',
      'Pre-departure online meet-up - Connect before you travel',
      'Mix of group and free time - Balance of together and solo'
    ]
  }
};

// Open package modal
function openPackageModal(packageId) {
  const modal = document.getElementById('packageModal');
  const modalData = packageDetails[packageId];
  
  if (!modalData) {
    console.error('Package not found:', packageId);
    return;
  }
  
  // Update modal content
  document.getElementById('modalCategory').textContent = modalData.category;
  document.getElementById('modalTitle').textContent = modalData.title;
  document.getElementById('modalDuration').textContent = modalData.duration;
  document.getElementById('modalDesc').textContent = modalData.description;
  
  // Update highlights
  const highlightsList = document.getElementById('modalHighlights');
  highlightsList.innerHTML = modalData.highlights.map(h => `<li>${h}</li>`).join('');
  
  // Show modal with animation
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);
  document.body.style.overflow = 'hidden';
}

// Close package modal
function closePackageModal() {
  const modal = document.getElementById('packageModal');
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

// Initialize modal listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Close on overlay click
  const modalOverlay = document.getElementById('packageModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === this) {
        closePackageModal();
      }
    });
  }
  
  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePackageModal();
    }
  });
});
