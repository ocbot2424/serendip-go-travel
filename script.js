// ════════════════════════════════════════
//  EMAILJS CONFIG
//  Fill these in after creating your free account at emailjs.com
// ════════════════════════════════════════
const EMAILJS_PUBLIC_KEY      = 'YOUR_PUBLIC_KEY';       // Account → API Keys
const EMAILJS_SERVICE_ID      = 'YOUR_SERVICE_ID';       // Email Services tab
const EMAILJS_CONTACT_TMPL    = 'YOUR_CONTACT_TEMPLATE_ID';  // Email Templates tab
const EMAILJS_PLANNER_TMPL    = 'YOUR_PLANNER_TEMPLATE_ID';  // Email Templates tab

// ─── NAVIGATION ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const progress = document.getElementById('progress');
  const scrolled = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = (scrolled / max * 100) + '%';
  if (nav) nav.classList.toggle('scrolled', scrolled > 60);
  revealElements();
});

// Highlight active nav link
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ─── REVEAL ON SCROLL ───
function revealElements() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add('visible');
  });
}
revealElements();
setTimeout(revealElements, 200);
window.addEventListener('load', revealElements);

// ─── PACKAGE FILTER ───
function filterPkg(cat, btn) {
  document.querySelectorAll('.pkg-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pkg-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? 'block' : 'none';
  });
}

// ─── TRIP PLANNER ───
function toggleInterest(chip) { chip.classList.toggle('selected'); }

function generateItinerary() {
  const arr = document.getElementById('arrDate').value;
  const dep = document.getElementById('depDate').value;
  const num = document.getElementById('numTrav').value || '2';
  const interests = [...document.querySelectorAll('.interest-chip.selected')].map(c => c.textContent.trim());

  if (!arr || !dep) { alert('Please select your travel dates!'); return; }

  const start = new Date(arr), end = new Date(dep);
  const days = Math.round((end - start) / (1000 * 60 * 60 * 24));
  if (days < 1) { alert('Please select valid dates.'); return; }

  const dayPlans = [
    { title: 'Arrival in Colombo', content: 'Airport transfer to your hotel. Evening stroll along Galle Face Green. Welcome dinner featuring Sri Lankan cuisine.' },
    { title: 'Colombo City Exploration', content: 'Gangaramaya Temple, Pettah spice market, National Museum, and the vibrant Slave Island neighbourhood.' },
    { title: 'Journey to Sigiriya', content: 'Scenic drive north. Afternoon visit to Dambulla Cave Temples. Check in to a jungle lodge near Sigiriya.' },
    { title: 'Sigiriya Rock Fortress', content: 'Sunrise climb of the legendary Lion Rock. Afternoon visit to Polonnaruwa ancient city ruins.' },
    { title: 'Kandy — Sacred City', content: 'Drive to the hill capital. Temple of the Sacred Tooth Relic, Kandy Lake, traditional Kandyan dance show.' },
    { title: 'Tea Country — Ella', content: 'Iconic train journey through tea plantations to Ella. Nine Arch Bridge, local tea estate visit.' },
    { title: 'Yala Safari', content: 'Early morning and late afternoon game drives in Yala — spotting leopards, elephants, sloth bears & crocodiles.' },
    { title: 'Mirissa Beach', content: 'Whale watching boat trip at dawn. Afternoon relaxing on the golden sands of Mirissa. Fresh seafood dinner.' },
    { title: 'Galle Fort', content: 'Explore the UNESCO-listed Dutch Fort. Boutique galleries, lighthouse walk, turtle hatchery at Rekawa.' },
    { title: 'Departure Day', content: 'Morning at leisure. Transfer to Colombo Bandaranaike International Airport with wonderful memories.' },
  ];

  let html = `<div style="color:var(--gold);font-size:0.7rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:1.5rem">✦ Your Personalised ${days}-Day Sri Lanka Itinerary for ${num} Traveller${num>1?'s':''}</div>`;

  for (let i = 0; i < Math.min(days, 10); i++) {
    const plan = dayPlans[i] || { title: `Free Exploration Day ${i+1}`, content: 'Your personal day to explore, rest, or discover hidden gems with your guide.' };
    html += `<div class="itin-day"><div class="itin-day-title">Day ${i+1} — ${plan.title}</div><div class="itin-day-content">${plan.content}</div></div>`;
  }

  if (interests.length > 0) {
    html += `<div style="border-top:1px solid rgba(201,151,58,0.3);padding-top:1rem;margin-top:1rem"><div class="itin-day-title">Tailored for your interests</div><div class="itin-day-content">Based on your preferences (${interests.join(', ')}), we'll incorporate special activities and experiences into your itinerary.</div></div>`;
  }

  html += `<div style="margin-top:1.5rem"><a href="contact.html" class="btn-primary" style="cursor:pointer">✉️ Send Me This Itinerary</a></div>`;

  const result = document.getElementById('itinerary-result');
  result.innerHTML = html;
  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ─── FAQ ───
function toggleFaq(el) {
  el.classList.toggle('open');
  el.querySelector('span').textContent = el.classList.contains('open') ? '×' : '+';
  const ans = el.nextElementSibling;
  ans.classList.toggle('open');
}

// ─── LIVE CHAT ───
function toggleChat() {
  document.getElementById('chatBubble').classList.toggle('show');
}
function sendChat() {
  const input = document.querySelector('.chat-bubble input');
  const raw = input.value.trim();
  if (!raw) {
    input.classList.add('err');
    setTimeout(() => input.classList.remove('err'), 1500);
    return;
  }
  if (raw.length > 500) {
    input.classList.add('err');
    return;
  }
  input.value = '';
  input.classList.remove('err');
  document.querySelector('.chat-bubble p').textContent = '✅ Thanks! A travel specialist will respond within minutes.';
}

// ─── VALIDATION & SANITIZATION UTILITIES ───

/**
 * Strip HTML tags and encode dangerous characters to prevent XSS.
 */
function sanitize(str) {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/`/g, '&#x60;');
}

/** Remove any HTML tags from a string entirely (for internal use, not display). */
function stripTags(str) {
  return str.replace(/<[^>]*>/g, '');
}

function isValidEmail(email) {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
}

function isValidPhone(phone) {
  // Allow +, digits, spaces, hyphens, parentheses; 7–20 digits total
  const digits = phone.replace(/\D/g, '');
  return /^[+\d\s\-().]+$/.test(phone) && digits.length >= 7 && digits.length <= 20;
}

function isValidName(name) {
  // Letters (including accented), spaces, hyphens, apostrophes; 2–100 chars
  return /^[\p{L}\s'\-\.]{2,100}$/u.test(name);
}

function isValidNationality(val) {
  return /^[\p{L}\s'\-,\.]{2,60}$/u.test(val);
}

function setFieldError(inputId, errId, message) {
  const input = document.getElementById(inputId);
  const errEl = document.getElementById(errId);
  if (!input || !errEl) return;
  input.classList.add('err');
  errEl.textContent = message;
  errEl.classList.add('show');
}

function clearFieldError(inputId, errId) {
  const input = document.getElementById(inputId);
  const errEl = document.getElementById(errId);
  if (input) input.classList.remove('err');
  if (errEl) { errEl.textContent = ''; errEl.classList.remove('show'); }
}

// ─── CONTACT ───
function submitContact() {
  let valid = true;

  // Clear previous errors
  ['contactName','contactEmail','contactPhone','contactEnquiry','contactDates','contactMessage'].forEach((id, i) => {
    clearFieldError(id, id + 'Err');
  });

  const nameEl    = document.getElementById('contactName');
  const emailEl   = document.getElementById('contactEmail');
  const phoneEl   = document.getElementById('contactPhone');
  const enquiryEl = document.getElementById('contactEnquiry');
  const messageEl = document.getElementById('contactMessage');

  if (!nameEl || !emailEl) return; // not on contact page

  const name    = stripTags(nameEl.value.trim());
  const email   = emailEl.value.trim();
  const phone   = phoneEl ? phoneEl.value.trim() : '';
  const enquiry = enquiryEl ? enquiryEl.value : '';
  const message = stripTags(messageEl ? messageEl.value.trim() : '');

  // Name: required, valid characters
  if (!name) {
    setFieldError('contactName', 'contactNameErr', 'Please enter your full name.');
    valid = false;
  } else if (!isValidName(name)) {
    setFieldError('contactName', 'contactNameErr', 'Name may only contain letters, spaces, hyphens or apostrophes.');
    valid = false;
  }

  // Email: required, valid format
  if (!email) {
    setFieldError('contactEmail', 'contactEmailErr', 'Please enter your email address.');
    valid = false;
  } else if (!isValidEmail(email)) {
    setFieldError('contactEmail', 'contactEmailErr', 'Please enter a valid email address.');
    valid = false;
  }

  // Phone: optional but validate format when provided
  if (phone && !isValidPhone(phone)) {
    setFieldError('contactPhone', 'contactPhoneErr', 'Please enter a valid phone number including country code.');
    valid = false;
  }

  // Enquiry type: required
  if (!enquiry) {
    setFieldError('contactEnquiry', 'contactEnquiryErr', 'Please select an enquiry type.');
    valid = false;
  }

  // Message: required, reasonable length
  if (!message) {
    setFieldError('contactMessage', 'contactMessageErr', 'Please tell us a little about your trip plans.');
    valid = false;
  } else if (message.length < 10) {
    setFieldError('contactMessage', 'contactMessageErr', 'Please provide a bit more detail (at least 10 characters).');
    valid = false;
  }

  if (!valid) return;

  const btn = document.querySelector('#contact .btn-primary');
  const originalText = btn ? btn.textContent : '';
  if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

  const datesEl = document.getElementById('contactDates');
  const travelDates = datesEl ? stripTags(datesEl.value.trim()) : '';

  const enquiryLabels = {
    custom: 'Custom Tour Planning', package: 'Package Booking',
    honeymoon: 'Honeymoon Package', group: 'Group Tours', general: 'General Enquiry'
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TMPL, {
    to_name:      sanitize(name),
    to_email:     email,
    phone:        phone ? sanitize(phone) : 'Not provided',
    enquiry_type: enquiryLabels[enquiry] || enquiry,
    travel_dates: travelDates ? sanitize(travelDates) : 'Not specified',
    message:      sanitize(message)
  }, EMAILJS_PUBLIC_KEY)
  .then(() => {
    if (btn) { btn.textContent = originalText; btn.disabled = false; }
    alert('✅ Thank you for your enquiry! A confirmation has been sent to ' + email + '. Our team will contact you within 24 hours.');
    nameEl.value = '';
    emailEl.value = '';
    if (phoneEl) phoneEl.value = '';
    if (enquiryEl) enquiryEl.value = '';
    if (datesEl) datesEl.value = '';
    if (messageEl) messageEl.value = '';
  })
  .catch(() => {
    if (btn) { btn.textContent = originalText; btn.disabled = false; }
    alert('⚠️ Something went wrong sending your email. Please try again or contact us directly at hello@serendipgo.com');
  });
}

