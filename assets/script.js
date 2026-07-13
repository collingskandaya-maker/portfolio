/* ============================================================
   ECOLTECH — script.js (Holiday-Aware + Gallery Slideshow Edition)
   ============================================================ */

// ---------- CONTACT DETAILS ----------
var CONTACT = {
  email: "collingskandaya@gmail.com",
  phone: "0888 460 365",
  whatsapp: "265888460365",
  location: "Blantyre, Malawi 🇲🇼"
};

// ---------- TYPING ROLES ----------
var ROLES = [
  "💻 ICT Professional",
  "🔧 Computer Technician",
  "🛠️ System Support Specialist",
  "🌐 Network Technician",
  "🎮 Gaming Technician",
  "🤖 AI Enthusiast",
  "⚙️ Hardware Repair Expert",
  "🧠 Problem Solver"
];

// ---------- LANGUAGES (spoken) ----------
var LANGUAGES = [
  ["English", "Speaking", 95],
  ["Chichewa", "Speaking", 100]
];

// ---------- ABOUT HIGHLIGHTS ----------
var HIGHLIGHTS = [
  { icon: "🖥️", label: "ICT Support" },
  { icon: "🗳️", label: "Election Device Operation" },
  { icon: "📷", label: "Photography & Editing" },
  { icon: "🗄️", label: "Database Support" },
  { icon: "🤖", label: "AI Fundamentals" },
  { icon: "⚙️", label: "Technical Maintenance" }
];

// ---------- STATISTICS ----------
var STATS = [
  { value: 100, suffix: "+", label: "Computers Repaired", emoji: "💻" },
  { value: 100, suffix: "%", label: "Good Communication Skills", emoji: "🗣️" },
  { value: 50, suffix: "+", label: "Operating Systems Installed", emoji: "🪟" },
  { value: 30, suffix: "+", label: "Networks Configured", emoji: "🌐" },
  { value: 100, suffix: "%", label: "Dedication", emoji: "🔥" }
];

// ---------- SKILLS ----------
var SKILL_CATEGORIES = [
  {
    id: "Communication",
    label: "🗣️ Good Communication & Integrity",
    skills: [
      ["Integrity", 100], ["Conversation", 95], ["Public Speaking", 89],
      ["Teamwork/Collaboration", 90], ["Active Listener", 99],
      ["Clear & Confident Speaking", 93], ["Professional Communication", 100],
      ["Good Ideas & Effective Expression", 90]
    ]
  },
  {
    id: "os", label: "🪟 Operating Systems",
    skills: [["Windows", 96], ["Linux", 78], ["macOS", 96]]
  },
  {
    id: "net", label: "🌐 Networking",
    skills: [["Routers", 88], ["Switches", 85], ["LAN Setup", 90], ["WiFi Config", 92], ["Troubleshooting", 94]]
  },
  {
    id: "hw", label: "🔧 Hardware",
    skills: [
      ["Laptop Repair", 95], ["Desktop Repair", 94], ["RAM Upgrade", 97],
      ["Console & Controller Repair", 85], ["SSD Installation", 96], ["BIOS Update", 62],
      ["Motherboard Diagnosis", 86], ["Printer Installation", 92], ["HW Maintenance", 93]
    ]
  },
  {
    id: "camera", label: "📷 Photography & Editing",
    skills: [["Portrait", 95], ["Events", 78], ["Outdoor", 95], ["Indoor", 78], ["Image Retouching", 90]]
  },
  {
    id: "sw", label: "💽 Software",
    skills: [
      ["Microsoft Office", 93], ["Windows Install", 96], ["Linux Install", 86], ["macOS Install", 89],
      ["Virus Removal", 91], ["Data Recovery", 84], ["Drivers Install", 95], ["SW Troubleshooting", 92]
    ]
  },
  {
    id: "game", label: "🎮 Gaming Support",
    skills: [
      ["Game Installation", 95], ["Game Troubleshooting", 90], ["Gaming Optimization", 88],
      ["Steam Setup", 92], ["Fix Controllers", 90], ["Console Deep Cleaning & Thermal Paste Replacement", 85]
    ]
  },
  {
    id: "elec", label: "⚡ Electronics",
    skills: [["Basic Soldering", 80], ["Circuit Testing & Repair", 75]]
  },
  {
    id: "design", label: "🎨 Graphic Design",
    skills: [
      ["Wedding Cards", 92], ["Birthday Cards", 90], ["Business Cards", 88],
      ["Flyers & Posters", 87], ["Certificates", 85], ["Logos", 80]
    ]
  },
  {
    id: "ai", label: "🤖 AI Literacy",
    skills: [["Prompt Engineering", 90], ["AI Productivity Tools", 88], ["ChatGPT Workflows", 92]]
  },
  {
    id: "soft", label: "🌟 Soft Skills",
    skills: [["Leadership", 90], ["Critical Thinking", 91], ["Time Management", 88]]
  }
];

// ---------- SERVICES ----------
var SERVICES = [
  ["💻", "Computer Repair", "Full diagnosis and repair of desktop and laptop faults."],
  ["💼", "Laptop Repair", "Screen, keyboard, battery replacement, and physical fixes."],
  ["🖥️", "Desktop Maintenance", "Component replacement, hardware upgrades, and internal cleaning."],
  ["🪟", "Windows Installation", "Clean installs, upgrades, and configuration of Windows operating systems."],
  ["🍏", "macOS Installation", "macOS setup, recovery, and clean reinstallation."],
  ["🐧", "Linux Installation", "Ubuntu, Mint, and basic Linux distribution setups or dual-boots."],
  ["🎮", "Game Installation", "Setting up PC games, resolving launch errors, and offline game configurations."],
  ["⚡", "Software Troubleshooting", "Fixing application crashes, error loops, and stubborn software bugs."],
  ["🌐", "Network Setup", "Local Area Network (LAN) cabling, router setups, and switch configurations."],
  ["📶", "WiFi Configuration", "Setting up and securing home or small office wireless networks."],
  ["🖨️", "Printer Setup", "Local printer installation, network sharing, and driver configuration."],
  ["💾", "Data Backup", "Transferring and backing up essential customer files safely."],
  ["🛡️", "Virus Removal", "Malware cleanup, ad-ware removal, and basic security configuration."],
  ["⚙️", "Computer Optimization", "Upgrading components (RAM/SSD) and tuning settings to speed up slow machines."],
  ["🎨", "Graphic Design", "Custom layout designs for posters, flyers, corporate branding, and logos."],
  ["💍", "Wedding Card Design", "Elegant, tailor-made invitations and wedding cards under the Ecol brand."],
  ["📄", "CV & Document Design", "Formatting professional resumes and clear business documents."],
  ["🔩", "Hardware Soldering", "Basic hardware soldering, controller repair, and small electronics maintenance."],
  ["🤖", "AI Workflows", "Assisting users in leveraging ChatGPT and prompt engineering for everyday productivity."]
];

// ---------- EXPERIENCE ----------
var EXPERIENCE = [
  ["2023 — Present", "ICT Technician & Systems Support", "Freelance / Contract",
    "Providing independent hardware repair, OS installation, local network setups, and general IT troubleshooting for clients in Blantyre."],
  ["2024", "Election Management Device (EMD) Operator", "Malawi Electoral Commission",
    "Operated Election Management Devices to register voters. Captured biometric records including fingerprints and facial details, generated registration QR codes, and handled local data verification loops."],
  ["2025 — 2026", "Biometric Voter Verification Identification Clerk (BVVIC)", "Malawi Electoral Commission",
    "Managed on-site voter verification devices during operational phases. Scanned registration cards, verified user identities using facial and fingerprint lookups, and performed immediate hardware troubleshooting to maintain device uptime."],
  ["2023 — 2024", "Technical Support", "IT Assistant Roles",
    "Handled basic user technical support, peripheral installations, printer setups, malware removal, and data recovery tasks."]
];

// ---------- EDUCATION ----------
var EDUCATION = [
  ["Pending", "Advanced Diploma in Information Technology", "Under Review / Expected",
    "Comprehensive training in planning ICT support delivery, configuring networked systems, software maintenance, and structural equipment diagnosis."],
  ["2024", "AI Career Essentials Certificate", "ALX Africa",
    "Completed structured training focusing on professional development, technical communication, prompt engineering, and workflow automation using AI tools."],
  ["2023", "Diploma in Information Technology", "Malawi Polytechnic College",
    "Acquired foundational training in computing, software installation, system maintenance, and basic technical support operations (GOLA framework)."],
  ["2022", "Malawi School Certificate of Education (MSCE)", "Secondary Education",
    "Completed secondary education with a strong focus on scientific disciplines."]
];

// ---------- PORTFOLIO PROJECTS ----------
var PROJECTS = [
  { title: "Voter Registration & Verification voter", cat: "ICT",
    img: ["assets/images/election-ict.png", "assets/images/election-ict1.png"],
    desc: "Worked directly with individual biometric for voter registration and verification , troubleshooting system.",
    tags: ["BVIDO","EMD Operations","Diagnostics"] },
  { title: "Local LAN & WiFi Configuration", cat: "Networking & Communication",
    img: ["assets/images/network-setup.png"],
    desc: "Implemented physical network cabling, router settings, WiFi Secure and wireless configurations to optimize internet access within local spaces.",
    tags: ["Routers", "Switches", "LAN Setup" ] },
  { title: "Graphic Design", cat: "Graphic Design",
    img: ["assets/images/design-work.png"],
    desc: "Created customized print materials including unique wedding invitation suites, certificates, logos, and promotional business posters.",
    tags: ["Graphic Design", "Branding", "Print Layout"] },
  { title: "Console & Electronics Maintenance", cat: "Computer Repair",
    img: ["assets/images/laptop-repair.png", "assets/images/gaming-setup.png", "assets/images/electronics.png"],
    desc: "Changing thermal paste , deep cleaning of gaming hardware, and minor component soldering.",
    tags: ["Hd Upgrades", "Soldering Basics", "Console Fixes"] },
  { title: "Cinematic & Photography", cat: "Graphic Design",
    img: ["assets/images/photographer.png", "assets/images/photo-edit.png", "assets/images/portrait.png", "assets/images/file_0000.png"],
    desc: "Executed high-resolution portrait and event , retouching, skin textures preservation, and custom color grading.",
    tags: ["Photography", "Image Editing", "Adobe Suite"] },
  { title: "Technical Communication & customer Support", cat: "Networking & Communication",
    img: ["assets/images/communication.png"],
    desc: "Applied strong skills to bridge complex technical processes and customer repair needs.",
    tags: ["customer Support", "Teamwork", "Time Management"] },
  { title: "System Hardware Rebuilds", cat: "Computer Repair",
    img: ["assets/images/desktop-repair.png"],
    desc: "Revived slow hardware component by upgrades including SSD conversions & RAM configurations",
    tags: ["RAM Upgrades", "SSD Setup", "System Optimization"] },
  { title: "AI Productivity Implementations", cat: "AI",
    img: ["assets/images/ai-project.png"],
    desc: "Designed prompt templates and tailored AI-driven text workflows to accelerate documentation development and administrative research tasks.",
    tags: ["ChatGPT", "Prompt Engineering", "Workflow Automation"] }
];
var PROJECT_CATS = ["All", "ICT", "Networking & Communication", "Graphic Design", "Computer Repair", "AI"];

// ---------- GALLERY ----------
var GALLERY = [
  ["assets/images/desktop-repair.png", "Hardware maintenance session 🔧"],
  ["assets/images/network-setup.png", "Local network routing setup 🌐"],
  ["assets/images/design-work.png", "Custom branding and card designs ✏️"],
  ["assets/images/laptop-repair.png", "Laptop assembly configuration 💻"],
  ["assets/images/electronics.png", "Hardware soldering maintenance ⚡"],
  ["assets/images/gaming-setup.png", "Console internal cleaning 🎮"],
  ["assets/images/election-ict.png", "Biometric unit operational support 🗳️"],
  ["assets/images/ai-project.png", "AI-assisted technical workflow 🤖"]
];

// ---------- TESTIMONIALS ----------
var TESTIMONIALS = [
  ["Grace M.", "Blantyre", "Excellent service! Fixed my laptop hardware issue efficiently and saved my existing files without data loss."],
  ["James P.", "Local Office Client", "Reliable work on our network infrastructure. The local shared folder setup works flawlessly across our rooms."],
  ["Thoko B.", "Design Client", "Very unique creative output on our event invitations. The print quality instructions were exact."],
  ["Kelvin C.", "Gaming Hardware Client", "He did an incredible job clearing out console overheating problems. Great thermal maintenance work."],
  ["Linda K.", "System User", "Cleared a bad virus loop that was crashing my browser and gave me solid advice to keep it running smoothly."]
];

// ---------- BLOG POSTS ----------
var BLOG_POSTS = [
  ["🪟 Windows Tips", "Practical Tips to Revive a Lagging Laptop", "Simple configurations to disable background applications and manage disk storage space efficiently.", "Jan 2025", "4 min"],
  ["🐧 Linux", "Setting Up Dual Boot on Legacy Hardware", "A basic primer on selecting lightweight Linux distributions to extend the utility of old machines.", "Feb 2025", "5 min"],
  ["🎮 Gaming", "Maintaining Gaming Consoles and Controllers", "A breakdown of thermal degradation factors, cleaning tools, and joystick drift preventative steps.", "Mar 2025", "6 min"],
  ["🔧 Hardware", "Why Swapping to an SSD Changes Everything", "An explanation of mechanical drive physical read ceilings compared to flash memory options.", "Apr 2025", "4 min"],
  ["🤖 AI", "Leveraging Prompt Frameworks as an IT Support Specialist", "How to structure technical syntax questions to get clear, targeted diagnostic code answers quickly.", "May 2025", "5 min"]
];

/* ============================================================
   HOLIDAYS CONFIGURATION
   ============================================================ */
var HOLIDAYS = [
  { month: 1, day: 1, name: "New Year's Day", emoji: "🎆", msg: "Happy New Year! Welcome to a fresh chapter of tech innovation.", theme: "holiday-newyear", banner: "hb-newyear", fireworks: true },
  { month: 1, day: 15, name: "John Chilembwe Day", emoji: "🇲🇼", msg: "Happy John Chilembwe Day! Honoring our national heritage.", theme: "holiday-national", banner: "hb-national" },
  { month: 2, day: 14, name: "Valentine's Day", emoji: "❤️", msg: "Happy Valentine's Day! Spreading love and technology.", theme: "holiday-valentines", banner: "hb-valentines" },
  { month: 3, day: 3, name: "Martyrs' Day", emoji: "🕊️", msg: "Observe Martyrs' Day. Reflecting on our history.", theme: "holiday-national", banner: "hb-national" },
  { month: 3, day: 8, name: "International Women's Day", emoji: "🌸", msg: "Happy International Women's Day! Celebrating women in tech.", theme: "holiday-mothers", banner: "hb-mothers" },
  { month: 5, day: 1, name: "Labour Day", emoji: "🛠️", msg: "Happy Labour Day! Celebrating dedication, craft, and hard work.", theme: "holiday-labour", banner: "hb-labour" },
  { month: 5, day: 14, name: "Kamuzu Day", emoji: "🇲🇼", msg: "Happy Kamuzu Day! Remembering the founding legacy.", theme: "holiday-national", banner: "hb-national" },
  { month: 7, day: 6, name: "Independence Day", emoji: "🎉", msg: "Happy Independence Day Malawi! Celebrating liberty and growth.", theme: "holiday-independence", banner: "hb-independence", fireworks: true },
  { month: 10, day: 15, name: "Mother's Day", emoji: "💐", msg: "Happy Mother's Day! Honoring the foundation of our families.", theme: "holiday-mothers", banner: "hb-mothers" },
  { month: 12, day: 25, name: "Christmas Day", emoji: "🎄", msg: "Merry Christmas! Wishing you peace, joy, and technical success.", theme: "holiday-christmas", banner: "hb-christmas", fireworks: true },
  { month: 12, day: 26, name: "Elvish's Birthday", emoji: "🎂", msg: "Today is Elvish's Birthday! Celebrating life and technology.", theme: "holiday-birthday", banner: "hb-birthday", fireworks: true }
];

/* ============================================================
   CORE ENGINE
   ============================================================ */
function el(id) { return document.getElementById(id); }

// ----- Disable right-click for visitors -----
document.addEventListener("contextmenu", function (e) { e.preventDefault(); });

// ----- Loader -----
window.addEventListener("load", function () {
  setTimeout(function () { el("loader").classList.add("gone"); }, 1400);
});

// ----- Navbar -----
var navbar = el("navbar");
var navLinks = el("navLinks");
el("menuBtn").onclick = function () { navLinks.classList.toggle("open"); };
navLinks.addEventListener("click", function (e) {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});
window.addEventListener("scroll", function () {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  el("topBtn").classList.toggle("show", window.scrollY > 600);
});

// ----- Typing effect -----
(function typing() {
  var target = el("typing"), roleIdx = 0, charIdx = 0, deleting = false;
  function tick() {
    // Split into full Unicode code points so emoji (surrogate pairs) are never sliced in half.
    var chars = Array.from(ROLES[roleIdx]);
    charIdx += deleting ? -1 : 1;
    target.textContent = chars.slice(0, charIdx).join("");
    var delay = deleting ? 30 : 65;
    if (!deleting && charIdx === chars.length) { delay = 1600; deleting = true; }
    else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; delay = 300; }
    setTimeout(tick, delay);
  }
  tick();
})();

// ----- About highlights -----
el("highlights").innerHTML = HIGHLIGHTS.map(function (h) {
  return '<div class="highlight"><span class="hi">' + h.icon + "</span><span>" + h.label + "</span></div>";
}).join("");

// ----- Languages (spoken) -----
(function renderLanguages() {
  var box = el("langBlock");
  if (!box) return;
  box.innerHTML = '<p class="lang-title">🗣️ Languages</p>' +
    LANGUAGES.map(function (l) {
      return '<div class="lang-item">' +
        '<div class="lang-top"><span>' + l[0] + '</span><b>' + l[1] + '</b></div>' +
        '<div class="lang-bar"><div class="lang-fill" data-level="' + l[2] + '"></div></div>' +
        '</div>';
    }).join("");
  setTimeout(function () {
    box.querySelectorAll(".lang-fill").forEach(function (f) {
      f.style.width = f.dataset.level + "%";
    });
  }, 400);
})();

// ----- Stats -----
el("stats").innerHTML = STATS.map(function (s) {
  return '<div class="card glow-card stat reveal"><div class="s-emoji">' + s.emoji +
    '</div><div class="s-value gradient-text" data-target="' + s.value + '" data-suffix="' + s.suffix +
    '">0</div><div class="s-label">' + s.label + "</div></div>";
}).join("");

function animateCounter(node) {
  var target = parseInt(node.dataset.target), suffix = node.dataset.suffix, start = null;
  function step(t) {
    if (!start) start = t;
    var p = Math.min((t - start) / 1800, 1);
    node.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ----- Skills -----
var activeSkillCat = 0;
el("skillTabs").innerHTML = SKILL_CATEGORIES.map(function (c, i) {
  return '<button class="filter-btn' + (i === 0 ? " active" : "") + '" onclick="showSkills(' + i + ', this)">' + c.label + "</button>";
}).join("");

function showSkills(i, btn) {
  activeSkillCat = i;
  var tabs = el("skillTabs").children;
  for (var t = 0; t < tabs.length; t++) tabs[t].classList.remove("active");
  if (btn) btn.classList.add("active");
  var R = 42, C = 2 * Math.PI * R;
  el("skillsGrid").innerHTML =
    '<svg width="0" height="0"><defs><linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '<stop offset="0%" stop-color="#00e5ff"/><stop offset="55%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#7c3aed"/>' +
    "</linearGradient></defs></svg>" +
    SKILL_CATEGORIES[i].skills.map(function (s) {
      return '<div class="card skill"><div class="ring-wrap">' +
        '<svg width="110" height="110" viewBox="0 0 100 100">' +
        '<circle class="ring-bg" cx="50" cy="50" r="' + R + '"/>' +
        '<circle class="ring-fg" cx="50" cy="50" r="' + R + '" stroke-dasharray="' + C + '" stroke-dashoffset="' + C + '" data-level="' + s[1] + '"/>' +
        '</svg><div class="ring-val">' + s[1] + '%</div></div>' +
        '<div class="skill-name">' + s[0] + "</div></div>";
    }).join("");
  setTimeout(function () {
    var rings = el("skillsGrid").querySelectorAll(".ring-fg");
    rings.forEach(function (r) {
      r.style.strokeDashoffset = C * (1 - parseInt(r.dataset.level) / 100);
    });
  }, 60);
}
showSkills(0, null);
el("skillTabs").children[0].classList.add("active");

// ----- Services -----
el("servicesGrid").innerHTML = SERVICES.map(function (s) {
  return '<a href="#contact" class="card service reveal"><span class="sv-emoji">' + s[0] +
    "</span><h3>" + s[1] + "</h3><p>" + s[2] + "</p></a>";
}).join("");

// ----- Timelines -----
function timelineHTML(items) {
  return items.map(function (t) {
    return '<div class="card t-item reveal"><span class="t-period">' + t[0] + "</span><h4>" + t[1] +
      '</h4><p class="t-org">' + t[2] + '</p><p class="t-desc">' + t[3] + "</p></div>";
  }).join("");
}
el("expTimeline").innerHTML = timelineHTML(EXPERIENCE);
el("eduTimeline").innerHTML = timelineHTML(EDUCATION);

// ----- Portfolio -----
var projectSliderIntervals = [];

function filterProjects(cat, btn) {
  var tabs = el("projectFilters").children;
  for (var t = 0; t < tabs.length; t++) tabs[t].classList.remove("active");
  if (btn) btn.classList.add("active");

  projectSliderIntervals.forEach(clearInterval);
  projectSliderIntervals = [];

  var list = cat === "All" ? PROJECTS : PROJECTS.filter(function (p) { return p.cat === cat; });

  el("projectsGrid").innerHTML = list.map(function (p, projectIndex) {
    var isArray = Array.isArray(p.img);
    var firstImage = isArray ? p.img[0] : p.img;
    var totalImages = isArray ? p.img.length : 1;

    var navigationHTML = '';
    if (totalImages > 1) {
      navigationHTML =
        '<button class="slider-arrow prev" onclick="changeProjectImg(' + projectIndex + ', -1, event)">&#10094;</button>' +
        '<button class="slider-arrow next" onclick="changeProjectImg(' + projectIndex + ', 1, event)">&#10095;</button>';
    }

    return '<article class="card project" data-project-idx="' + projectIndex + '">' +
      '<div class="p-img slider-container" id="slider-proj-' + projectIndex + '" data-current="0" data-images="' + encodeURIComponent(JSON.stringify(p.img)) + '">' +
      '<img src="' + firstImage + '" alt="' + p.title + '" loading="lazy"/>' +
      navigationHTML +
      '<span class="p-cat">' + p.cat + '</span>' +
      '</div>' +
      '<div class="p-body"><h3>' + p.title + '</h3><p>' + p.desc + '</p><div class="p-tags">' +
      p.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") +
      '</div></div></article>';
  }).join("");

  list.forEach(function (p, projectIndex) {
    if (Array.isArray(p.img) && p.img.length > 1) {
      var interval = setInterval(function () {
        changeProjectImg(projectIndex, 1, null);
      }, 10000);
      projectSliderIntervals.push(interval);
    }
  });
}

function changeProjectImg(projIdx, direction, event) {
  if (event) event.stopPropagation();
  var container = document.getElementById("slider-proj-" + projIdx);
  if (!container) return;
  var images = JSON.parse(decodeURIComponent(container.dataset.images));
  var currentIdx = parseInt(container.dataset.current);
  var newIdx = (currentIdx + direction + images.length) % images.length;
  container.dataset.current = newIdx;
  var imgElement = container.querySelector("img");
  if (imgElement) { imgElement.src = images[newIdx]; }
}

filterProjects("All", null);

// ----- GALLERY SLIDESHOW (one image, auto-rotates every 10s) -----
var gsIndex = 0;
var gsInterval;

function initGallerySlideshow() {
  if (GALLERY.length === 0) return;

  el("gsDots").innerHTML = GALLERY.map(function (_, i) {
    return '<button class="gs-dot" onclick="showGallerySlide(' + i + ')"></button>';
  }).join("");

  showGallerySlide(0);

  gsInterval = setInterval(function () {
    stepGallerySlide(1);
  }, 10000);
}

function showGallerySlide(i) {
  gsIndex = i;
  var img = el("gsImg");

  img.style.opacity = "0";
  setTimeout(function () {
    img.src = GALLERY[i][0];
    img.alt = GALLERY[i][1];
    el("gsCaption").textContent = GALLERY[i][1];
    el("gsCounter").textContent = (i + 1) + " / " + GALLERY.length;
    img.style.opacity = "1";
  }, 300);

  var dots = el("gsDots").children;
  for (var d = 0; d < dots.length; d++) {
    dots[d].classList.toggle("active", d === i);
  }
}

function stepGallerySlide(dir) {
  var newIdx = (gsIndex + dir + GALLERY.length) % GALLERY.length;
  showGallerySlide(newIdx);
  clearInterval(gsInterval);
  gsInterval = setInterval(function () {
    stepGallerySlide(1);
  }, 10000);
}

initGallerySlideshow();

// ----- Lightbox (shared by gallery) -----
var lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;
  el("lbImg").src = GALLERY[i][0];
  el("lbCaption").textContent = GALLERY[i][1] + "  (" + (i + 1) + " / " + GALLERY.length + ")";
  el("lightbox").classList.add("open");
}
function closeLightbox() { el("lightbox").classList.remove("open"); }
function stepLightbox(dir) { openLightbox((lbIndex + dir + GALLERY.length) % GALLERY.length); }
el("lightbox").addEventListener("click", function (e) { if (e.target === this) closeLightbox(); });
document.addEventListener("keydown", function (e) {
  if (!el("lightbox").classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") stepLightbox(1);
  if (e.key === "ArrowLeft") stepLightbox(-1);
});

// ----- Testimonials -----
var tIndex = 0;
el("tDots").innerHTML = TESTIMONIALS.map(function (_, i) {
  return '<button class="t-dot" onclick="showTestimonial(' + i + ')"></button>';
}).join("");

function showTestimonial(i) {
  tIndex = i;
  var t = TESTIMONIALS[i];
  el("tStars").textContent = "★★★★★";
  el("tText").textContent = '"' + t[2] + '"';
  el("tName").textContent = t[0];
  el("tRole").textContent = t[1];
  var dots = el("tDots").children;
  for (var d = 0; d < dots.length; d++) dots[d].classList.toggle("active", d === i);
}
function stepTestimonial(dir) { showTestimonial((tIndex + dir + TESTIMONIALS.length) % TESTIMONIALS.length); }
showTestimonial(0);
setInterval(function () { stepTestimonial(1); }, 5000);

// ----- Blog -----
el("blogGrid").innerHTML = BLOG_POSTS.map(function (p) {
  return '<article class="card post reveal"><div class="post-top"><span class="post-tag">' + p[0] +
    '</span><span class="post-date">' + p[3] + "</span></div><h3>" + p[1] + "</h3><p>" + p[2] +
    '</p><div class="post-read">⏱️ ' + p[4] + " read</div></article>";
}).join("");

// ----- Contact info cards -----
el("contactInfo").innerHTML =
  '<a class="card c-item reveal" href="mailto:' + CONTACT.email + '"><span class="c-icon">📧</span><span><div class="c-label">Email</div><div class="c-value">' + CONTACT.email + "</div></span></a>" +
  '<a class="card c-item reveal" href="tel:' + CONTACT.phone.replace(/\s/g, "") + '"><span class="c-icon">📱</span><span><div class="c-label">Phone</div><div class="c-value">' + CONTACT.phone + "</div></span></a>" +
  '<a class="card c-item reveal" href="https://wa.me/' + CONTACT.whatsapp + '"><span class="c-icon">💬</span><span><div class="c-label">WhatsApp</div><div class="c-value">Chat on WhatsApp</div></span></a>' +
  '<div class="card c-item reveal"><span class="c-icon">📍</span><span><div class="c-label">Location</div><div class="c-value">' + CONTACT.location + "</div></span></div>";

// ----- Contact form -----
function sendMessage(e) {
  e.preventDefault();
  var subject = encodeURIComponent("[eTech] " + el("fSubject").value);
  var body = encodeURIComponent(
    "Name: " + el("fName").value + "\nEmail: " + el("fEmail").value +
    "\nPhone: " + el("fPhone").value + "\n\n" + el("fMessage").value
  );
  window.location.href = "mailto:" + CONTACT.email + "?subject=" + subject + "&body=" + body;
  return false;
}

// ----- Download CV -----
function downloadCV() {
  var cv = [
    "ELVISH KANDAYA — ICT PROFESSIONAL",
    "==========================================",
    "Email: " + CONTACT.email + " | Phone: " + CONTACT.phone,
    "Location: " + CONTACT.location,
    "",
    "PROFILE",
    "ICT Professional specializing in computer repair, operating systems configuration,",
    "biometric identification systems, and local networking.",
    "",
    "LANGUAGES",
    LANGUAGES.map(function (l) { return "- " + l[0] + " (" + l[1] + ")"; }).join("\n"),
    "",
    "EXPERIENCE",
    EXPERIENCE.map(function (x) { return "- " + x[1] + " — " + x[2] + " (" + x[0] + ")"; }).join("\n"),
    "",
    "EDUCATION",
    EDUCATION.map(function (x) { return "- " + x[1] + " — " + x[2] + " (" + x[0] + ")"; }).join("\n"),
    "",
    "SKILLS",
    "Windows, Linux, macOS | Networking (LAN Setup, WiFi, routers, switches)",
    "Hardware & software repair | Gaming configuration | Basic Soldering",
    "Graphic design & Branding | Prompt Engineering"
  ].join("\n");
  var blob = new Blob([cv], { type: "text/plain" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Elvish-Kandaya-CV.txt";
  a.click();
  URL.revokeObjectURL(a.href);
}

// ----- Reveal on scroll + counters -----
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      var counters = entry.target.querySelectorAll("[data-target]");
      counters.forEach(animateCounter);
      if (entry.target.dataset.target) animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(function (n) { observer.observe(n); });

// ----- Footer year -----
el("year").textContent = new Date().getFullYear();

/* ============================================================
   HOLIDAY & GREETING ENGINE (with returning visitor detection)
   ============================================================ */
function closeHolidayBanner() {
  el("holidayBanner").classList.remove("show");
  document.body.classList.remove("banner-open");
}

function findFixedHoliday(month, day, year) {
  for (var h = 0; h < HOLIDAYS.length; h++) {
    if (HOLIDAYS[h].month === month && HOLIDAYS[h].day === day) return HOLIDAYS[h];
  }
  // Dynamic Easter calculation
  var f = Math.floor;
  var a = year % 19, b = f(year / 100), c = year % 100;
  var d = f(b / 4), e2 = b % 4, g = f((8 * b + 13) / 25);
  var hh = (19 * a + b - d - g + 15) % 30, i = f(c / 4), k = c % 4;
  var l = (32 + 2 * e2 + 2 * i - hh - k) % 7, m = f((a + 11 * hh + 22 * l) / 451);
  var p = (hh + l - 7 * m + 114), easterMonth = f(p / 31), easterDay = (p % 31) + 1;
  var goodFriday = new Date(year, easterMonth - 1, easterDay - 2);
  var easterMonday = new Date(year, easterMonth - 1, easterDay + 1);

  if (month === easterMonth && day === easterDay) {
    return { name: "Easter Sunday", emoji: "✝️", msg: "Happy Easter Sunday! Wishing you a renewed and blessed season.", theme: "holiday-easter", banner: "hb-easter" };
  } else if (month === (goodFriday.getMonth() + 1) && day === goodFriday.getDate()) {
    return { name: "Good Friday", emoji: "✝️", msg: "Observe Good Friday. Wishing you a peaceful and thoughtful holiday.", theme: "holiday-easter", banner: "hb-easter" };
  } else if (month === (easterMonday.getMonth() + 1) && day === easterMonday.getDate()) {
    return { name: "Easter Monday", emoji: "✝️", msg: "Happy Easter Monday! Enjoying the blessings of the season.", theme: "holiday-easter", banner: "hb-easter" };
  }
  return null;
}

function calculateHolidaySystem() {
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var year = now.getFullYear();

  // 1. Time-of-day greeting
  var timeGreet;
  if (hour >= 5 && hour < 12) timeGreet = "Good morning";
  else if (hour >= 12 && hour < 17) timeGreet = "Good afternoon";
  else if (hour >= 17 && hour < 22) timeGreet = "Good evening";
  else timeGreet = "Good night";

  // 2. Returning visitor detection
  var isReturning = false;
  try {
    isReturning = localStorage.getItem("ecoltech_visited") === "true";
    localStorage.setItem("ecoltech_visited", "true");
  } catch (e) { /* localStorage not available */ }

  var welcomeSuffix = isReturning ? ", welcome back again! 👋 I'm" : " 👋 I'm";

  // 3. Work out the festive mode + the "wish" to display
  //    festive controls background + effects; wish controls banner + hero greeting
  var fixed = findFixedHoliday(month, day, year);
  var festive = null;   // "christmas" | "newyear" | "birthday" | "national"
  var wish = null;

  // Set the wish for ANY holiday found in your array
  if (fixed) {
    wish = fixed;
  }

  // Set special festive animation flags for specific months/days
  if (month === 12 && day === 26) {
    festive = "birthday";
  } else if (month === 1 && day >= 1 && day <= 31) {
    festive = "newyear";
  } else if (month === 12 && day >= 1 && day <= 31) {
    festive = "christmas";
  } else if (fixed && fixed.fireworks) {
    festive = "national"; // Triggers fireworks for Independence Day, etc.
  }

  // 4. Apply hero greeting
  var heroEl = el("heroGreeting");
  if (heroEl) {
    if (wish) {
      heroEl.textContent = wish.emoji + " " + wish.msg.split("!")[0] + "!" + (isReturning ? " Welcome back! I'm" : " I'm");
    } else {
      heroEl.textContent = timeGreet + welcomeSuffix;
    }
  }

  // 5. Show holiday banner (Works for EVERY holiday now!)
  if (wish) {
    var banner = el("holidayBanner");
    el("hbEmoji").textContent = wish.emoji;
    el("hbText").textContent = wish.msg;
    banner.className = "holiday-banner show";
    if (wish.banner) banner.classList.add(wish.banner);
    document.body.classList.add("banner-open");
  }

  // 6. Apply festive effects (Keeps normal background, loads banners & fireworks for all)
  if (festive === "christmas") {
    buildChristmasScene();
    if (day === 25) launchFireworks({ mode: "normal" });
  } else if (festive === "newyear") {
    if (day === 1) launchFireworks({ mode: "normal"});
  } else if (festive === "birthday") {
    launchFireworks({ mode: "cake" });
  } else if (wish && wish.fireworks) {
    // This catches Independence Day or any other list holiday with fireworks: true
    launchFireworks({ mode: "normal" });
  }
}

document.addEventListener("DOMContentLoaded", calculateHolidaySystem);

/* ============================================================
   CHRISTMAS SCENE — bare green tree + colour-changing light bubbles
   ============================================================ */
function buildChristmasScene() {
  if (document.querySelector(".festive-layer")) return;
  var layer = document.createElement("div");
  layer.className = "festive-layer";

  // Bare / outline green tree (low opacity so it never hides the words)
  var tree = document.createElement("div");
  tree.className = "xmas-tree";
  tree.innerHTML =
    '<svg viewBox="0 0 200 260" fill="none" stroke="#22c55e" stroke-width="2.4" stroke-linejoin="round">' +
    '<polygon points="100,10 140,80 60,80" />' +
    '<polygon points="100,55 155,140 45,140" />' +
    '<polygon points="100,105 172,205 28,205" />' +
    '<rect x="88" y="205" width="24" height="34" stroke="#a16207" />' +
    '<path d="M100 4 l6 12 13 2 -9 9 2 13 -12 -6 -12 6 2 -13 -9 -9 13 -2 z" stroke="#facc15" />' +
    '</svg>';
  layer.appendChild(tree);

  // Colour-changing "bubbles" (Christmas lights) that take turns glowing
  var count = 16;
  for (var i = 0; i < count; i++) {
    var light = document.createElement("span");
    light.className = "xmas-light";
    light.style.left = (5 + Math.random() * 90) + "%";
    light.style.top = (8 + Math.random() * 80) + "%";
    light.style.animationDelay = (Math.random() * 6).toFixed(2) + "s, " + (Math.random() * 8).toFixed(2) + "s";
    layer.appendChild(light);
  }

  document.body.appendChild(layer);
}

/* ============================================================
   FIREWORKS CANVAS ENGINE (normal / cake / text bursts)
   ============================================================ */
function launchFireworks(options) {
  options = options || {};
  var mode = options.mode || "normal";
  var bannerText = options.text || "";

  var canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.zIndex = "-1";
  canvas.style.pointerEvents = "none";
  document.body.appendChild(canvas);

  var ctx = canvas.getContext("2d");
  var particles = [];
  var textBursts = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function Particle(x, y, color, emoji) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.emoji = emoji || null;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 4 + 2;
    this.size = emoji ? (Math.random() * 10 + 14) : 2.2;
    this.alpha = 1;
    this.decay = Math.random() * 0.015 + 0.010;
    this.rot = Math.random() * Math.PI;
  }
  Particle.prototype.update = function () {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + 0.04;
    this.speed *= 0.99;
    this.alpha -= this.decay;
    this.rot += 0.03;
  };
  Particle.prototype.draw = function () {
    ctx.save();
    ctx.globalAlpha = Math.max(this.alpha, 0);
    if (this.emoji) {
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.font = this.size + "px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.emoji, 0, 0);
    } else {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };

  function burst() {
    var xT = Math.random() * canvas.width;
    var yT = Math.random() * (canvas.height * 0.55);
    if (mode === "cake") {
      // Birthday: cake fireworks (cake emoji shrapnel + sparkles)
      var cakeEmojis = ["🎂", "🧁", "🎉", "✨"];
      var pick = cakeEmojis[Math.floor(Math.random() * cakeEmojis.length)];
      for (var c = 0; c < 18; c++) particles.push(new Particle(xT, yT, null, pick));
      var hue = Math.random() * 360;
      for (var s = 0; s < 20; s++) particles.push(new Particle(xT, yT, "hsl(" + hue + ", 100%, 68%)"));
    } else {
      var hue2 = Math.random() * 360;
      var col = "hsl(" + hue2 + ", 100%, 65%)";
      for (var i = 0; i < 45; i++) particles.push(new Particle(xT, yT, col));
    }
  }

  function TextBurst(x, y) {
    this.x = x;
    this.y = y;
    this.scale = 0.2;
    this.alpha = 1;
    this.hue = Math.random() * 360;
  }
  TextBurst.prototype.update = function () {
    this.scale += 0.04;
    this.alpha -= 0.012;
  };
  TextBurst.prototype.draw = function () {
    ctx.save();
    ctx.globalAlpha = Math.max(this.alpha, 0);
    ctx.translate(this.x, this.y);
    ctx.scale(this.scale, this.scale);
    var size = Math.min(canvas.width / 12, 64);
    ctx.font = "800 " + size + "px 'Segoe UI', Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "hsl(" + this.hue + ", 100%, 65%)";
    ctx.shadowColor = "hsl(" + this.hue + ", 100%, 60%)";
    ctx.shadowBlur = 24;
    ctx.fillText(bannerText, 0, 0);
    ctx.restore();
  };

  var textTimer = 0;

  function renderLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.035) burst();

    // New Year: periodically explode the words on screen
    if (mode === "text") {
      textTimer++;
      if (textTimer > 150) {
        textTimer = 0;
        var tx = canvas.width * (0.3 + Math.random() * 0.4);
        var ty = canvas.height * (0.25 + Math.random() * 0.3);
        textBursts.push(new TextBurst(tx, ty));
        // extra celebratory bursts around the text
        for (var b = 0; b < 2; b++) burst();
      }
      textBursts = textBursts.filter(function (t) { return t.alpha > 0; });
      textBursts.forEach(function (t) { t.update(); t.draw(); });
    }

    particles = particles.filter(function (p) { return p.alpha > 0; });
    particles.forEach(function (p) { p.update(); p.draw(); });
    requestAnimationFrame(renderLoop);
  }
  renderLoop();
}

/* ============================================================
   AI CHATBOT (EcolBot)
   ============================================================ */
function toggleBot() { el("botPanel").classList.toggle("open"); }

function botAnswer(raw) {
  var q = raw.toLowerCase();
  if (/(hi|hello|hey|moni)\b/.test(q))
    return "Hello 👋 I'm EcolBot, Elvish's assistant! Ask me about his skills, services, experience, education, or how to contact him. ⚡";
  if (q.indexOf("service") >= 0 || q.indexOf("offer") >= 0 || q.indexOf("repair") >= 0 || q.indexOf("fix") >= 0)
    return "Elvish offers " + SERVICES.length + " services including: " +
      SERVICES.slice(0, 8).map(function (s) { return s[0] + " " + s[1]; }).join(", ") +
      " and more! Check the Services section. 🛠️";
  if (q.indexOf("skill") >= 0 || q.indexOf("know") >= 0 || q.indexOf("tech") >= 0)
    return "Elvish's skills cover " + SKILL_CATEGORIES.length + " areas: " +
      SKILL_CATEGORIES.map(function (c) { return c.label; }).join(", ") +
      ". Strongest fields are hardware diagnosis, system recovery, installation, and local networking setups. 💪";
  if (q.indexOf("language") >= 0 || q.indexOf("speak") >= 0 || q.indexOf("chichewa") >= 0 || q.indexOf("english") >= 0)
    return "🗣️ Elvish speaks " + LANGUAGES.map(function (l) { return l[0]; }).join(" and ") + " fluently.";
  if (q.indexOf("experience") >= 0 || q.indexOf("work") >= 0 || q.indexOf("election") >= 0 || q.indexOf("biometric") >= 0)
    return "Experience: " + EXPERIENCE.map(function (x) { return x[1] + " (" + x[2] + ")"; }).join(" · ") +
      ". He has strong operational experience with biometric data units for electoral processing. 🗳️";
  if (q.indexOf("education") >= 0 || q.indexOf("study") >= 0 || q.indexOf("diploma") >= 0 || q.indexOf("school") >= 0)
    return "Education: " + EDUCATION.map(function (x) { return "🎓 " + x[1] + " — " + x[2]; }).join(" · ");
  if (q.indexOf("contact") >= 0 || q.indexOf("email") >= 0 || q.indexOf("phone") >= 0 || q.indexOf("whatsapp") >= 0 || q.indexOf("hire") >= 0 || q.indexOf("reach") >= 0)
    return "Reach Elvish at 📧 " + CONTACT.email + ", 📱 " + CONTACT.phone +
      ", or WhatsApp 💬. He's based in " + CONTACT.location + " and responds fast! ⚡";
  if (q.indexOf("who") >= 0 || q.indexOf("about") >= 0 || q.indexOf("elvish") >= 0)
    return "Elvish Kandaya, aka 'Ecol' ⚡, is an ICT Professional from Malawi 🇲🇼 — focused on technical hardware maintenance, operating systems deployment, gaming technical support, creative graphic layouts, and AI application workflows.";
  if (q.indexOf("price") >= 0 || q.indexOf("cost") >= 0 || q.indexOf("charge") >= 0)
    return "Pricing depends on the job specifications. Contact him for a direct quote via phone: " + CONTACT.phone + ".";
  if (q.indexOf("game") >= 0 || q.indexOf("gaming") >= 0)
    return "🎮 Elvish handles game setups, system optimizations, error troubleshooting, and internal console thermal maintenance.";
  if (q.indexOf("ai") >= 0 || q.indexOf("chatgpt") >= 0)
    return "🤖 Elvish holds an AI Career Essentials certificate from ALX Africa and helps integrate tailored prompt engineering workflows for desktop productivity tasks.";
  if (q.indexOf("design") >= 0 || q.indexOf("card") >= 0 || q.indexOf("wedding") >= 0 || q.indexOf("logo") >= 0)
    return "🎨 Yes! He builds tailored designs for wedding invitations, birthday items, custom corporate cards, posters, and vector logos.";
  if (q.indexOf("where") >= 0 || q.indexOf("location") >= 0 || q.indexOf("malawi") >= 0)
    return "📍 Elvish is located in " + CONTACT.location + ". Provides on-site support in Blantyre and surrounding areas.";
  if (q.indexOf("thank") >= 0 || q.indexOf("bye") >= 0)
    return "You're welcome! 😊 Reach out anytime. Ecol's got your tech covered. ⚡";
  return "Great question! 🤔 I can tell you about Elvish's skills, services, experience, education or contact details. Try: 'What services do you offer?'";
}

function botAddMsg(text, who) {
  var div = document.createElement("div");
  div.className = "msg " + who;
  div.textContent = text;
  el("botBody").appendChild(div);
  el("botBody").scrollTop = el("botBody").scrollHeight;
}

function botSend(e) {
  if (e) e.preventDefault();
  var input = el("botText");
  var text = input.value.trim();
  if (!text) return false;
  var initialChips = el("initial-suggestions");
  if (initialChips) initialChips.remove();
  botAddMsg(text, "user");
  input.value = "";
  setTimeout(function () { botAddMsg(botAnswer(text), "bot"); }, 700);
  return false;
}

function botSuggest(text) {
  var initialChips = el("initial-suggestions");
  if (initialChips) initialChips.remove();
  botAddMsg(text, "user");
  setTimeout(function () { botAddMsg(botAnswer(text), "bot"); }, 700);
}

// Bot initialization
botAddMsg("Hey there! 👋 I'm EcolBot — Elvish's AI assistant. Ask me anything about his skills, services or experience! ⚡", "bot");
(function () {
  var sug = document.createElement("div");
  sug.className = "bot-sug";
  sug.id = "initial-suggestions";
  ["What services do you offer?", "Tell me about your skills", "How can I contact you?"].forEach(function (s) {
    var b = document.createElement("button");
    b.textContent = s;
    b.onclick = function () { botSuggest(s); };
    sug.appendChild(b);
  });
  el("botBody").appendChild(sug);
})();

// ----- Project filter buttons -----
el("projectFilters").innerHTML = PROJECT_CATS.map(function (c, i) {
  return '<button class="filter-btn' + (i === 0 ? " active" : "") + '" onclick="filterProjects(\'' + c + '\', this)">' + c + "</button>";
}).join("");
