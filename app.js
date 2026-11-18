/**
 * RailTicket - Core Railway Booking & Train Details Engine
 * Multi-Station Search & 5+ Train Inventory Engine
 */

// Comprehensive Database of 6 Flagship Express Trains
const DETAILED_TRAINS = [
  {
    number: '22436',
    name: 'Vande Bharat Express',
    type: 'Superfast Express (Semi-High Speed)',
    speed: '130 km/h Avg',
    distance: '759 km',
    depTime: '06:00 AM',
    arrTime: '02:00 PM',
    duration: '8h 00m',
    runsOn: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat', 'Sun'],
    pantry: 'Catering & Meals Included',
    rating: '4.8 ★ (1,240 Reviews)',
    classes: [
      { code: 'CC', name: 'AC Chair Car', fare: 1750, seats: 42, status: 'AVAILABLE' },
      { code: 'EC', name: 'Exec Chair Car', fare: 3300, seats: 12, status: 'AVAILABLE' }
    ],
    amenities: [
      { icon: 'fa-wifi', name: 'Free Wi-Fi & Infotainment' },
      { icon: 'fa-plug', name: 'Mobile & Laptop Charging at every seat' },
      { icon: 'fa-utensils', name: 'Hot Breakfast & Snacks' },
      { icon: 'fa-restroom', name: 'Bio-Vacuum Luxury Toilets' },
      { icon: 'fa-shield-halved', name: 'CCTV & Automatic Plug Doors' }
    ],
    stops: [
      { st: 'New Delhi (NDLS)', arr: 'Origin', dep: '06:00 AM', halt: '--', dist: '0 km', pf: '16' },
      { st: 'Aligarh Junction (ALJN)', arr: '07:18 AM', dep: '07:20 AM', halt: '2 min', dist: '131 km', pf: '3' },
      { st: 'Kanpur Central (CNB)', arr: '10:08 AM', dep: '10:12 AM', halt: '4 min', dist: '440 km', pf: '5' },
      { st: 'Prayagraj Junction (PRYJ)', arr: '12:08 PM', dep: '12:10 PM', halt: '2 min', dist: '635 km', pf: '6' },
      { st: 'Varanasi Junction (BSB)', arr: '02:00 PM', dep: 'Terminus', halt: '--', dist: '759 km', pf: '1' }
    ]
  },
  {
    number: '12952',
    name: 'Mumbai Rajdhani Express',
    type: 'Premier Superfast Express',
    speed: '120 km/h Avg',
    distance: '1384 km',
    depTime: '04:55 PM',
    arrTime: '08:35 AM',
    duration: '15h 40m',
    runsOn: ['Daily (All 7 Days)'],
    pantry: 'Full Pantry Car with E-Catering',
    rating: '4.7 ★ (3,890 Reviews)',
    classes: [
      { code: '3A', name: 'AC 3-Tier', fare: 1450, seats: 28, status: 'AVAILABLE' },
      { code: '2A', name: 'AC 2-Tier', fare: 2850, seats: 16, status: 'AVAILABLE' },
      { code: '1A', name: 'AC First Class', fare: 4890, seats: 4, status: 'RAC-2' }
    ],
    amenities: [
      { icon: 'fa-bed', name: 'Clean Linen, Pillows & Blanket' },
      { icon: 'fa-utensils', name: 'Evening Tea, Soup & Royal Dinner' },
      { icon: 'fa-plug', name: 'Individual Reading Lights & Sockets' },
      { icon: 'fa-restroom', name: 'Odorless Bio-Toilets with Soap' },
      { icon: 'fa-user-nurse', name: 'On-Board Housekeeping (OBHS)' }
    ],
    stops: [
      { st: 'New Delhi (NDLS)', arr: 'Origin', dep: '04:55 PM', halt: '--', dist: '0 km', pf: '2' },
      { st: 'Mathura Junction (MTJ)', arr: '06:18 PM', dep: '06:20 PM', halt: '2 min', dist: '141 km', pf: '1' },
      { st: 'Kota Junction (KOTA)', arr: '09:30 PM', dep: '09:40 PM', halt: '10 min', dist: '465 km', pf: '2' },
      { st: 'Ratlam Junction (RTM)', arr: '01:00 AM', dep: '01:05 AM', halt: '5 min', dist: '731 km', pf: '4' },
      { st: 'Vadodara Junction (BRC)', arr: '04:18 AM', dep: '04:28 AM', halt: '10 min', dist: '992 km', pf: '1' },
      { st: 'Surat (ST)', arr: '06:05 AM', dep: '06:10 AM', halt: '5 min', dist: '1122 km', pf: '2' },
      { st: 'Borivali (BVI)', arr: '08:08 AM', dep: '08:10 AM', halt: '2 min', dist: '1354 km', pf: '7' },
      { st: 'Mumbai Central (MMCT)', arr: '08:35 AM', dep: 'Terminus', halt: '--', dist: '1384 km', pf: '1' }
    ]
  },
  {
    number: '20817',
    name: 'Tejas Superfast Express',
    type: 'Smart Superfast Express',
    speed: '115 km/h Avg',
    distance: '980 km',
    depTime: '11:30 AM',
    arrTime: '07:15 PM',
    duration: '7h 45m',
    runsOn: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
    pantry: 'Automatic Vending & Hot Meals',
    rating: '4.7 ★ (850 Reviews)',
    classes: [
      { code: 'CC', name: 'Smart AC Chair Car', fare: 1320, seats: 54, status: 'AVAILABLE' },
      { code: 'EC', name: 'Exec Chair Car', fare: 2450, seats: 14, status: 'AVAILABLE' }
    ],
    amenities: [
      { icon: 'fa-tv', name: 'Personal LCD Entertainment Screens' },
      { icon: 'fa-wifi', name: 'High-speed 4G Onboard Wi-Fi' },
      { icon: 'fa-plug', name: 'USB & Laptop Fast Chargers' },
      { icon: 'fa-bell-concierge', name: 'Attendant Call Buttons at Seat' }
    ],
    stops: [
      { st: 'Origin Station', arr: 'Origin', dep: '11:30 AM', halt: '--', dist: '0 km', pf: '3' },
      { st: 'Central Junction A', arr: '01:45 PM', dep: '01:48 PM', halt: '3 min', dist: '240 km', pf: '1' },
      { st: 'Intercity Hub B', arr: '04:20 PM', dep: '04:25 PM', halt: '5 min', dist: '590 km', pf: '4' },
      { st: 'Destination Terminus', arr: '07:15 PM', dep: 'Terminus', halt: '--', dist: '980 km', pf: '2' }
    ]
  },
  {
    number: '12245',
    name: 'Duronto AC Superfast Express',
    type: 'Point-to-Point Non-Stop',
    speed: '125 km/h Avg',
    distance: '1420 km',
    depTime: '08:20 PM',
    arrTime: '11:45 AM',
    duration: '15h 25m',
    runsOn: ['Sun', 'Tue', 'Wed', 'Fri'],
    pantry: 'All Meals & Mineral Water Included',
    rating: '4.6 ★ (2,100 Reviews)',
    classes: [
      { code: '3A', name: 'AC 3-Tier', fare: 1380, seats: 68, status: 'AVAILABLE' },
      { code: '2A', name: 'AC 2-Tier', fare: 2540, seats: 22, status: 'AVAILABLE' },
      { code: '1A', name: 'AC First Class', fare: 4450, seats: 6, status: 'AVAILABLE' }
    ],
    amenities: [
      { icon: 'fa-gauge-high', name: 'Minimum Commercial Halts' },
      { icon: 'fa-bed', name: 'Premium Sanitized Bedroll Kit' },
      { icon: 'fa-bottle-water', name: 'Complimentary Packaged Water' },
      { icon: 'fa-restroom', name: 'Modular Clean Bio-Toilets' }
    ],
    stops: [
      { st: 'Origin Station', arr: 'Origin', dep: '08:20 PM', halt: '--', dist: '0 km', pf: '5' },
      { st: 'Technical Halt A', arr: '01:30 AM', dep: '01:35 AM', halt: '5 min', dist: '480 km', pf: '1' },
      { st: 'Fueling Junction B', arr: '06:10 AM', dep: '06:15 AM', halt: '5 min', dist: '950 km', pf: '2' },
      { st: 'Destination Terminus', arr: '11:45 AM', dep: 'Terminus', halt: '--', dist: '1420 km', pf: '1' }
    ]
  },
  {
    number: '22819',
    name: 'Humsafar Luxury Express',
    type: 'All-AC 3-Tier Luxury Superfast',
    speed: '110 km/h Avg',
    distance: '1150 km',
    depTime: '01:15 PM',
    arrTime: '06:30 AM',
    duration: '17h 15m',
    runsOn: ['Mon', 'Wed', 'Thu', 'Sat', 'Sun'],
    pantry: 'Tea/Coffee Vending & Regional Dishes',
    rating: '4.5 ★ (1,540 Reviews)',
    classes: [
      { code: '3A', name: 'Special AC 3-Tier', fare: 1280, seats: 95, status: 'AVAILABLE' },
      { code: '3E', name: 'AC 3-Tier Economy', fare: 1090, seats: 45, status: 'AVAILABLE' }
    ],
    amenities: [
      { icon: 'fa-mug-hot', name: 'Coffee / Tea / Milk Vending Machine' },
      { icon: 'fa-temperature-arrow-down', name: 'GPS Passenger Information Screens' },
      { icon: 'fa-wind', name: 'Odor Control & Fire Alarm Sensors' },
      { icon: 'fa-plug', name: 'Comfortable Padded Berths & Charging' }
    ],
    stops: [
      { st: 'Origin Station', arr: 'Origin', dep: '01:15 PM', halt: '--', dist: '0 km', pf: '4' },
      { st: 'Commercial Stop 1', arr: '04:45 PM', dep: '04:50 PM', halt: '5 min', dist: '280 km', pf: '2' },
      { st: 'Commercial Stop 2', arr: '09:20 PM', dep: '09:25 PM', halt: '5 min', dist: '650 km', pf: '3' },
      { st: 'Commercial Stop 3', arr: '02:40 AM', dep: '02:45 AM', halt: '5 min', dist: '960 km', pf: '1' },
      { st: 'Destination Terminus', arr: '06:30 AM', dep: 'Terminus', halt: '--', dist: '1150 km', pf: '6' }
    ]
  },
  {
    number: '12401',
    name: 'Sampark Kranti Superfast Express',
    type: 'Inter-State Superfast Express',
    speed: '105 km/h Avg',
    distance: '1290 km',
    depTime: '09:40 AM',
    arrTime: '03:20 AM',
    duration: '17h 40m',
    runsOn: ['Daily (All 7 Days)'],
    pantry: 'Pantry Car & Snacks Available',
    rating: '4.4 ★ (3,120 Reviews)',
    classes: [
      { code: 'SL', name: 'Sleeper Class', fare: 490, seats: 120, status: 'AVAILABLE' },
      { code: '3A', name: 'AC 3-Tier', fare: 1180, seats: 34, status: 'AVAILABLE' },
      { code: '2A', name: 'AC 2-Tier', fare: 2150, seats: 10, status: 'RAC-4' }
    ],
    amenities: [
      { icon: 'fa-bolt', name: 'Fast Express Speed with Limited Stops' },
      { icon: 'fa-shield-halved', name: 'RPF Police Escort Security' },
      { icon: 'fa-box', name: 'Spacious Luggage Racks' },
      { icon: 'fa-user-check', name: 'Senior Citizen Berth Priority' }
    ],
    stops: [
      { st: 'Origin Station', arr: 'Origin', dep: '09:40 AM', halt: '--', dist: '0 km', pf: '1' },
      { st: 'Divisional Junction 1', arr: '01:10 PM', dep: '01:15 PM', halt: '5 min', dist: '290 km', pf: '2' },
      { st: 'Major Station 2', arr: '05:30 PM', dep: '05:38 PM', halt: '8 min', dist: '620 km', pf: '1' },
      { st: 'State Border Junction 3', arr: '10:45 PM', dep: '10:50 PM', halt: '5 min', dist: '1010 km', pf: '3' },
      { st: 'Destination Terminus', arr: '03:20 AM', dep: 'Terminus', halt: '--', dist: '1290 km', pf: '2' }
    ]
  }
];

// Current active search results (guaranteed at least 5-6 trains)
let currentSearchResults = [];
let selectedTrain = null;
let selectedClass = null;
let confirmedBooking = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Check user session
  checkUserSession();

  // Set journey date default to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById('journeyDate');
  if (dateInput) {
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  // Load initial search list (defaults to NDLS to MMCT)
  searchTrains();
});

// Check logged in user session
function checkUserSession() {
  try {
    const userRaw = localStorage.getItem('railticket_user');
    const badge = document.getElementById('loggedInUserBadge');
    const signInLink = document.getElementById('signInLink');
    const nameEl = document.getElementById('headerUserName');
    const passengerInput = document.getElementById('passengerName');

    if (userRaw) {
      const user = JSON.parse(userRaw);
      if (user && user.name) {
        if (badge) badge.classList.remove('hidden');
        if (signInLink) signInLink.classList.add('hidden');
        if (nameEl) nameEl.innerText = user.name.split(' ')[0];
        if (passengerInput) passengerInput.value = user.name;
        const mobileInput = document.getElementById('mobileNumber');
        if (mobileInput && user.mobile) mobileInput.value = user.mobile;
      }
    } else {
      if (badge) badge.classList.add('hidden');
      if (signInLink) signInLink.classList.remove('hidden');
    }
  } catch (e) {
    console.error('Session error:', e);
  }
}

// Logout
function logoutUser() {
  if (confirm('Are you sure you want to log out?')) {
    localStorage.removeItem('railticket_user');
    window.location.href = 'login.html';
  }
}

// Navigation between Booking and PNR tabs
function showBookingFlow() {
  document.getElementById('bookingSection').classList.remove('hidden');
  document.getElementById('pnrSection').classList.add('hidden');
  document.getElementById('nav-book').className = 'px-2.5 sm:px-3 py-1.5 rounded-lg bg-blue-800 text-white text-xs sm:text-sm';
  document.getElementById('nav-pnr').className = 'px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-blue-800 text-blue-100 hover:text-white transition text-xs sm:text-sm';
}

function showPnrSection() {
  document.getElementById('bookingSection').classList.add('hidden');
  document.getElementById('pnrSection').classList.remove('hidden');
  document.getElementById('nav-book').className = 'px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-blue-800 text-blue-100 hover:text-white transition text-xs sm:text-sm';
  document.getElementById('nav-pnr').className = 'px-2.5 sm:px-3 py-1.5 rounded-lg bg-blue-800 text-white text-xs sm:text-sm';
}

// Swap Stations helper
function swapStationValues() {
  const fromEl = document.getElementById('fromStation');
  const toEl = document.getElementById('toStation');
  const temp = fromEl.value;
  fromEl.value = toEl.value;
  toEl.value = temp;
  searchTrains();
}

// Step Switcher (1 -> 2 -> 3)
function goToStep(step) {
  document.getElementById('step1-search').classList.add('hidden');
  document.getElementById('step2-passenger').classList.add('hidden');
  document.getElementById('step3-ticket').classList.add('hidden');

  // Reset Badges
  ['1', '2', '3'].forEach(num => {
    const badge = document.getElementById(`step-${num}-badge`);
    badge.className = 'flex items-center space-x-2 text-slate-400';
    badge.querySelector('span').className = 'w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold';
  });

  // Activate current step
  const activeBadge = document.getElementById(`step-${step}-badge`);
  activeBadge.className = 'flex items-center space-x-2 text-blue-700';
  activeBadge.querySelector('span').className = 'w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold';

  if (step === 1) {
    document.getElementById('step1-search').classList.remove('hidden');
  } else if (step === 2) {
    document.getElementById('step2-passenger').classList.remove('hidden');
  } else if (step === 3) {
    document.getElementById('step3-ticket').classList.remove('hidden');
  }
}

// ==================== DYNAMIC MULTI-TRAIN SEARCH (MIN 5 TRAINS) ====================

// Generates at least 6 customized trains for ANY selected station pair
function generateTrainsForRoute(fromVal, toVal) {
  const cleanFrom = fromVal.split('-')[0].trim();
  const cleanTo = toVal.split('-')[0].trim();
  const fromCity = cleanFrom.split('(')[0].trim();
  const toCity = cleanTo.split('(')[0].trim();

  // Clone template trains and inject route specifics
  return DETAILED_TRAINS.map((template, idx) => {
    const trainCopy = JSON.parse(JSON.stringify(template));

    // Customize name with route
    if (idx === 0) {
      trainCopy.name = `${fromCity} - ${toCity} Vande Bharat Express`;
    } else if (idx === 1) {
      trainCopy.name = `${fromCity} - ${toCity} Rajdhani Express`;
    } else if (idx === 2) {
      trainCopy.name = `${fromCity} - ${toCity} Tejas Express`;
    } else if (idx === 3) {
      trainCopy.name = `${fromCity} - ${toCity} Duronto Superfast`;
    } else if (idx === 4) {
      trainCopy.name = `${fromCity} - ${toCity} Humsafar Express`;
    } else {
      trainCopy.name = `${fromCity} - ${toCity} Sampark Kranti Express`;
    }

    // Set origin and destination in intermediate stops
    if (trainCopy.stops && trainCopy.stops.length >= 2) {
      trainCopy.stops[0].st = cleanFrom;
      trainCopy.stops[trainCopy.stops.length - 1].st = cleanTo;

      // Ensure nice intermediate station names if generic
      for (let s = 1; s < trainCopy.stops.length - 1; s++) {
        if (trainCopy.stops[s].st.includes('Station') || trainCopy.stops[s].st.includes('Junction') || trainCopy.stops[s].st.includes('Hub')) {
          const midCities = ['Kanpur Central (CNB)', 'Kota Jn (KOTA)', 'Bhopal Jn (BPL)', 'Nagpur Jn (NGP)', 'Vadodara (BRC)', 'Surat (ST)'];
          trainCopy.stops[s].st = midCities[(idx + s) % midCities.length];
        }
      }
    }

    return trainCopy;
  });
}

function searchTrains(event) {
  if (event) event.preventDefault();

  const fromVal = document.getElementById('fromStation').value;
  const toVal = document.getElementById('toStation').value;
  const list = document.getElementById('trainList');

  // Prevent same from and to
  if (fromVal === toVal) {
    alert('Source and Destination stations cannot be the same. Please select different stations.');
    return;
  }

  // Generate guaranteed minimum 6 trains for the selected route
  currentSearchResults = generateTrainsForRoute(fromVal, toVal);

  const cleanFrom = fromVal.split('-')[0].trim().split('(')[0].trim();
  const cleanTo = toVal.split('-')[0].trim().split('(')[0].trim();

  // Render comprehensive train cards with collapsible details
  list.innerHTML = `
    <div class="flex items-center justify-between text-xs font-bold text-slate-500 py-1 border-b border-slate-200">
      <span>Showing ${currentSearchResults.length} Direct Express Trains: <strong>${cleanFrom} ➔ ${cleanTo}</strong></span>
      <span class="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
        ✓ Min. 5 Trains Guarantee Active
      </span>
    </div>
  ` + currentSearchResults.map((t) => `
    <div class="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
      
      <!-- Primary Summary Card -->
      <div class="p-5">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div class="flex items-center space-x-3">
            <span class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-bold flex items-center justify-center font-mono text-sm border border-blue-200">
              ${t.number}
            </span>
            <div>
              <div class="flex items-center space-x-2">
                <h3 class="font-extrabold text-base text-slate-900">${t.name}</h3>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wide">
                  ${t.type}
                </span>
              </div>
              <div class="text-xs text-slate-500 flex items-center space-x-2 mt-0.5">
                <span>Runs On: <strong>${t.runsOn.join(', ')}</strong></span>
                <span>•</span>
                <span class="text-emerald-700 font-semibold">${t.rating}</span>
              </div>
            </div>
          </div>

          <!-- Action & Route Details toggle -->
          <div class="flex items-center space-x-2">
            <button type="button" onclick="toggleTrainDetails('details-${t.number}')" class="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center space-x-1.5">
              <i class="fa-solid fa-route text-blue-600"></i>
              <span>View Route & Amenities</span>
              <i class="fa-solid fa-chevron-down text-[10px] ml-1 transition-transform" id="arrow-${t.number}"></i>
            </button>
          </div>
        </div>

        <!-- Timetable & Distance Row -->
        <div class="grid grid-cols-3 gap-2 my-3 p-3 bg-slate-50 rounded-xl text-center items-center">
          <div class="text-left">
            <span class="text-xs text-slate-400 block font-medium">Departure</span>
            <span class="text-base font-extrabold text-slate-900 font-mono">${t.depTime}</span>
            <span class="text-[11px] text-slate-600 block truncate">${fromVal.split('(')[0]}</span>
          </div>

          <div>
            <span class="text-xs font-bold text-slate-500">${t.duration}</span>
            <div class="w-full flex items-center justify-center my-1">
              <div class="w-full h-0.5 bg-slate-300"></div>
              <i class="fa-solid fa-train text-xs text-blue-600 mx-1.5"></i>
              <div class="w-full h-0.5 bg-slate-300"></div>
            </div>
            <span class="text-[11px] text-slate-400 font-medium">${t.distance} (${t.speed})</span>
          </div>

          <div class="text-right">
            <span class="text-xs text-slate-400 block font-medium">Arrival</span>
            <span class="text-base font-extrabold text-slate-900 font-mono">${t.arrTime}</span>
            <span class="text-[11px] text-slate-600 block truncate">${toVal.split('(')[0]}</span>
          </div>
        </div>

        <!-- Available Classes & Instant Booking Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
          ${t.classes.map(cls => `
            <div class="p-2.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition flex flex-col justify-between bg-white">
              <div class="flex items-center justify-between">
                <span class="font-extrabold text-xs text-slate-800 font-mono">${cls.code}</span>
                <span class="font-black text-xs text-blue-700 font-mono">₹${cls.fare}</span>
              </div>
              <span class="text-[10px] text-slate-500 font-medium">${cls.name}</span>
              <div class="mt-2 flex items-center justify-between">
                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  ✓ ${cls.seats} ${cls.status}
                </span>
                <button type="button" onclick="selectTrainAndClass('${t.number}', '${cls.code}')" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold transition shadow-sm">
                  Book
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- COLLAPSIBLE DETAILS SECTION (Intermediate Stations & Amenities) -->
      <div id="details-${t.number}" class="hidden border-t border-slate-200 bg-slate-50/70 p-5 space-y-4">
        
        <!-- Amenities Banner -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center">
            <i class="fa-solid fa-sparkles text-amber-500 mr-1.5"></i> On-Board Facilities & Amenities
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            ${t.amenities.map(a => `
              <div class="flex items-center space-x-2 p-2 bg-white rounded-lg border border-slate-200 text-slate-700 font-medium">
                <i class="fa-solid ${a.icon} text-blue-600 text-sm"></i>
                <span class="text-[11px]">${a.name}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Intermediate Stops Table -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center justify-between">
            <span><i class="fa-solid fa-map-location-dot text-blue-600 mr-1.5"></i> Intermediate Stops & Timetable (${t.stops.length} Stations)</span>
            <span class="text-[11px] text-slate-500 font-normal">Pantry: ${t.pantry}</span>
          </h4>
          <div class="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th class="p-2.5">#</th>
                  <th class="p-2.5">Station Name</th>
                  <th class="p-2.5">Arrival</th>
                  <th class="p-2.5">Departure</th>
                  <th class="p-2.5">Halt</th>
                  <th class="p-2.5">Distance</th>
                  <th class="p-2.5">Platform</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${t.stops.map((stop, sIdx) => `
                  <tr class="hover:bg-slate-50 text-slate-700">
                    <td class="p-2.5 font-bold font-mono text-slate-400">${sIdx + 1}</td>
                    <td class="p-2.5 font-bold text-slate-900">${stop.st}</td>
                    <td class="p-2.5 font-mono">${stop.arr}</td>
                    <td class="p-2.5 font-mono">${stop.dep}</td>
                    <td class="p-2.5 font-semibold text-blue-600">${stop.halt}</td>
                    <td class="p-2.5 text-slate-500">${stop.dist}</td>
                    <td class="p-2.5 font-bold font-mono text-slate-800">PF ${stop.pf}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  `).join('');
}

// Toggle train route & amenities details
function toggleTrainDetails(elementId) {
  const el = document.getElementById(elementId);
  const trainNumber = elementId.replace('details-', '');
  const arrow = document.getElementById(`arrow-${trainNumber}`);
  if (!el) return;

  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  } else {
    el.classList.add('hidden');
    if (arrow) arrow.style.transform = 'rotate(0deg)';
  }
}

// Select train & class and advance to Step 2
function selectTrainAndClass(trainNumber, classCode) {
  // Search in current active results or template database
  selectedTrain = (currentSearchResults && currentSearchResults.find(t => t.number === trainNumber)) ||
                  DETAILED_TRAINS.find(t => t.number === trainNumber) ||
                  DETAILED_TRAINS[0];

  selectedClass = selectedTrain.classes.find(c => c.code === classCode) || selectedTrain.classes[0];

  const fromVal = document.getElementById('fromStation').value;
  const toVal = document.getElementById('toStation').value;
  const journeyDate = document.getElementById('journeyDate').value;

  document.getElementById('selectedTrainTitle').innerText = `${selectedTrain.number} - ${selectedTrain.name}`;
  document.getElementById('selectedTrainMeta').innerText = `${fromVal.split('(')[0]} ➔ ${toVal.split('(')[0]} | Date: ${journeyDate} | Class: ${selectedClass.code} (${selectedClass.name})`;
  document.getElementById('finalFareAmount').innerText = `₹${selectedClass.fare}`;

  goToStep(2);
}

// Backward compatible book now helper
function selectTrainToBook(trainNumber) {
  selectTrainAndClass(trainNumber, '3A');
}

// ==================== BOOKING & E-TICKET ====================

function handleBookingSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('passengerName').value.trim();
  const age = document.getElementById('passengerAge').value;
  const berth = document.getElementById('berthPreference').value;
  const fromVal = document.getElementById('fromStation').value;
  const toVal = document.getElementById('toStation').value;
  const journeyDate = document.getElementById('journeyDate').value;

  // Generate 10-digit PNR
  const randomSuffix = Math.floor(10000000 + Math.random() * 90000000);
  const pnrNumber = `84${randomSuffix}`.slice(0, 10);
  const coachCode = selectedClass ? (selectedClass.code === 'CC' ? 'C1' : 'B3') : 'B3';
  const seatNumber = `${coachCode}-${Math.floor(Math.random() * 50) + 1}`;

  confirmedBooking = {
    pnr: pnrNumber,
    trainNumber: selectedTrain.number,
    trainName: selectedTrain.name,
    from: fromVal.split('-')[0].trim(),
    to: toVal.split('-')[0].trim(),
    date: journeyDate,
    passengerName: name,
    passengerAge: age,
    berth: berth,
    seatNumber: seatNumber,
    classCode: selectedClass ? selectedClass.code : '3A',
    fare: selectedClass ? selectedClass.fare : selectedTrain.classes[0].fare,
    bookingTime: new Date().toLocaleString()
  };

  // Render E-Ticket card
  renderTicketCard(confirmedBooking);

  // Advance to Step 3
  goToStep(3);
}

// Render the Ticket Card
function renderTicketCard(ticket) {
  const container = document.getElementById('printableTicketCard');
  
  container.innerHTML = `
    <!-- Top Header -->
    <div class="flex items-center justify-between border-b-2 border-slate-900 pb-3">
      <div class="flex items-center space-x-2.5">
        <div class="w-10 h-10 bg-blue-800 text-white rounded-lg flex items-center justify-center text-lg font-bold">
          <i class="fa-solid fa-train"></i>
        </div>
        <div>
          <h3 class="font-extrabold text-base text-slate-900 uppercase">RailTicket Electronic Reservation Slip</h3>
          <p class="text-[11px] text-slate-500 font-medium">Standard Railway Reservation Ticket • Confirmed</p>
        </div>
      </div>
      <div class="text-right">
        <span class="text-[10px] text-slate-500 block uppercase font-mono">PNR Number</span>
        <span class="text-xl font-black font-mono text-blue-700 tracking-wider">${ticket.pnr}</span>
      </div>
    </div>

    <!-- Train & Route Details -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
      <div>
        <span class="text-slate-400 block font-medium">Train:</span>
        <span class="font-bold text-slate-800">${ticket.trainNumber} / ${ticket.trainName}</span>
      </div>
      <div>
        <span class="text-slate-400 block font-medium">Date of Journey:</span>
        <span class="font-bold text-slate-800">${ticket.date}</span>
      </div>
      <div>
        <span class="text-slate-400 block font-medium">From Station:</span>
        <span class="font-bold text-slate-800">${ticket.from}</span>
      </div>
      <div>
        <span class="text-slate-400 block font-medium">To Station:</span>
        <span class="font-bold text-slate-800">${ticket.to}</span>
      </div>
    </div>

    <!-- Passenger Details -->
    <div class="p-3 bg-blue-50/70 border border-blue-200 rounded-lg flex flex-wrap items-center justify-between text-xs gap-2">
      <div>
        <span class="text-slate-500 block">Passenger Name</span>
        <span class="font-bold text-sm text-slate-900">${ticket.passengerName} (${ticket.passengerAge} yrs)</span>
      </div>
      <div>
        <span class="text-slate-500 block">Coach / Seat / Berth</span>
        <span class="font-bold text-sm text-blue-800 font-mono">${ticket.seatNumber} (${ticket.berth.split(' ')[0]})</span>
      </div>
      <div>
        <span class="text-slate-500 block">Class / Status</span>
        <span class="font-bold text-xs text-emerald-700 font-mono">${ticket.classCode} • ✓ CONFIRMED</span>
      </div>
      <div>
        <span class="text-slate-500 block">Total Fare Paid</span>
        <span class="font-bold text-sm text-slate-900 font-mono">₹${ticket.fare}.00</span>
      </div>
    </div>

    <!-- QR & Barcode Section -->
    <div class="flex items-center justify-between pt-2">
      <div class="flex items-center space-x-3">
        <div id="ticketQrContainer" class="w-16 h-16 bg-white p-1 border border-slate-300 rounded flex items-center justify-center"></div>
        <div class="text-[11px] text-slate-500">
          <span class="font-bold text-slate-800 block">Scan to Verify</span>
          <span>Valid with any Govt photo ID</span>
        </div>
      </div>
      <div class="text-right text-[11px] text-slate-400 font-mono">
        Booked on: ${ticket.bookingTime}
      </div>
    </div>

    <!-- Visual Barcode -->
    <div class="ticket-barcode rounded"></div>
  `;

  // Generate QR Code
  setTimeout(() => {
    const qrEl = document.getElementById('ticketQrContainer');
    if (qrEl && typeof QRCode !== 'undefined') {
      qrEl.innerHTML = '';
      new QRCode(qrEl, {
        text: `PNR:${ticket.pnr}|TRAIN:${ticket.trainNumber}|PASSENGER:${ticket.passengerName}|SEAT:${ticket.seatNumber}`,
        width: 60,
        height: 60
      });
    }
  }, 50);
}

// ==================== PNR STATUS CHECK ====================

function checkPnrStatus(event) {
  if (event) event.preventDefault();

  const pnrVal = document.getElementById('pnrSearchInput').value.trim();
  const resArea = document.getElementById('pnrResultArea');

  if (!pnrVal || pnrVal.length < 5) {
    alert('Please enter a valid 10-digit PNR number');
    return;
  }

  // If matches current confirmed booking, use it
  let match = confirmedBooking && confirmedBooking.pnr === pnrVal ? confirmedBooking : {
    pnr: pnrVal,
    trainNumber: '12952',
    trainName: 'Mumbai Rajdhani Express',
    from: 'New Delhi (NDLS)',
    to: 'Mumbai Central (MMCT)',
    date: 'Tomorrow',
    passengerName: 'Aditya Sharma',
    passengerAge: '28',
    berth: 'Lower Berth (LB)',
    seatNumber: 'B3-24',
    classCode: '3A',
    fare: 1450,
    bookingTime: 'Today'
  };

  resArea.innerHTML = `
    <div class="bg-white rounded-2xl p-6 shadow-md border border-slate-200 space-y-3">
      <div class="flex items-center justify-between border-b border-slate-100 pb-2">
        <div>
          <span class="text-xs text-slate-400 font-mono">PNR NUMBER</span>
          <h3 class="text-xl font-black font-mono text-blue-700">${match.pnr}</h3>
        </div>
        <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
          ✓ CONFIRMED (Chart Prepared)
        </span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div><span class="text-slate-400 block">Train:</span> <strong>${match.trainNumber} - ${match.trainName}</strong></div>
        <div><span class="text-slate-400 block">Route:</span> <strong>${match.from} ➔ ${match.to}</strong></div>
        <div><span class="text-slate-400 block">Passenger:</span> <strong>${match.passengerName}</strong></div>
        <div><span class="text-slate-400 block">Assigned Seat:</span> <strong class="text-blue-700 font-mono">${match.seatNumber} (${match.berth})</strong></div>
      </div>
    </div>
  `;
  resArea.classList.remove('hidden');
}

// ⚡ 1-Click Presentation Demo
function quickDemoFill() {
  showBookingFlow();
  selectTrainAndClass('12952', '3A');
  setTimeout(() => {
    document.getElementById('passengerName').value = 'Aditya Sharma';
    document.getElementById('passengerAge').value = '28';
  }, 100);
}
