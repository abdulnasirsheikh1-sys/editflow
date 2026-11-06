/* ==========================================================================
   EditFlow Studio | Abdul Nasir Sheikh Portfolio JavaScript
   Official Google Drive Work Portfolio Integration
   ========================================================================== */

// Official Google Drive Work Folder URL
const GOOGLE_DRIVE_WORK_URL = "https://drive.google.com/drive/folders/1KfkCy_ff3lMvjNrhfWJ9F4xzKMV2mVLD?usp=sharing";

// Structured Drive Portfolio Categories (No fake footage, links direct to Drive)
const driveFolders = [
  {
    id: "youtube",
    title: "YouTube Long-Form & Documentary Edits",
    category: "youtube",
    categoryLabel: "YouTube Content",
    folderIcon: "fa-brands fa-youtube",
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10 border-red-500/20",
    badge: "Long Form",
    software: ["premiere", "aftereffects"],
    softwareNames: ["Adobe Premiere Pro", "After Effects"],
    description: "High-retention storytelling, pacing optimization, narrative structure, multi-cam syncing, and custom motion graphics overlays.",
    highlights: ["Retention Pacing", "Multi-Cam Sync", "Motion Infographics", "Vocal Normalization"],
    sampleCount: "Multiple 4K Video Files"
  },
  {
    id: "reels",
    title: "Viral Reels, TikTok & YouTube Shorts (9:16)",
    category: "reels",
    categoryLabel: "Vertical Short-Form",
    folderIcon: "fa-solid fa-mobile-screen-button",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-500/10 border-pink-500/20",
    badge: "9:16 Viral",
    software: ["aftereffects", "filmora", "premiere"],
    softwareNames: ["After Effects", "Filmora", "Premiere"],
    description: "High-energy vertical videos with dynamic word-by-word animated captions, fast pattern interrupts, sound impacts, and hook-optimized cuts.",
    highlights: ["Animated Subtitles", "Hormozi / Gadzhi Pacing", "SFX Impact Drops", "First 3-Sec Hooks"],
    sampleCount: "High-Volume Reel Deliverables"
  },
  {
    id: "commercial",
    title: "Commercials, Brand Promos & Product Ads",
    category: "commercial",
    categoryLabel: "Commercials & Ads",
    folderIcon: "fa-solid fa-bullhorn",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    badge: "Brand & E-Com",
    software: ["premiere", "aftereffects", "filmora"],
    softwareNames: ["Premiere Pro", "After Effects", "Filmora"],
    description: "Sleek, conversion-driven commercial edits featuring rhythmic beat-sync cuts, speed ramping, brand color grading, and crisp audio mixing.",
    highlights: ["Beat-Synced Rhythms", "Speed Ramping", "Teal & Orange Grade", "Product Callouts"],
    sampleCount: "Full HD & 4K Master Renders"
  },
  {
    id: "motion",
    title: "After Effects Motion Graphics, VFX & Titles",
    category: "motion",
    categoryLabel: "Motion & VFX",
    folderIcon: "fa-solid fa-wand-magic-sparkles",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    badge: "VFX & Animation",
    software: ["aftereffects"],
    softwareNames: ["Adobe After Effects"],
    description: "Kinetic typography, 3D camera tracking, custom title sequences, particle effects, saber glow, and smooth logo reveals.",
    highlights: ["Kinetic Typography", "3D Camera Tracking", "Custom VFX & Glow", "Logo Openers"],
    sampleCount: "After Effects Compositions"
  },
  {
    id: "podcast",
    title: "Podcast Multi-Cam Cuts & Talking Head Edits",
    category: "youtube",
    categoryLabel: "Podcast & Interviews",
    folderIcon: "fa-solid fa-microphone-lines",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    badge: "Multi-Angle",
    software: ["premiere", "aftereffects"],
    softwareNames: ["Premiere Pro", "After Effects"],
    description: "Seamless multi-speaker switching, background noise reduction, audio sweetening, dynamic B-roll cutaways, and punchy chapter markers.",
    highlights: ["Multi-Angle Auto Switch", "Audio Sweetening", "B-Roll Cutaways", "Chapter Transitions"],
    sampleCount: "Full Episodes & Short Clips"
  },
  {
    id: "grading",
    title: "Color Grading & Cinematic Master Deliveries",
    category: "commercial",
    categoryLabel: "Post-Production",
    folderIcon: "fa-solid fa-palette",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    badge: "Color & Finish",
    software: ["premiere", "aftereffects"],
    softwareNames: ["Lumetri Color", "After Effects"],
    description: "Professional camera Log (Sony S-Log, Canon C-Log, D-Log) transforms to Rec.709, cinematic LUT stylization, skin tone protection, and film grain.",
    highlights: ["Log to Rec.709", "Skin Tone Balance", "Dynamic Range Polish", "High Bitrate Master"],
    sampleCount: "Master Export Profiles"
  }
];

// --- Render Drive Portfolio Folders ---
function renderDriveFolders(filter = 'all') {
  const container = document.getElementById('drive-portfolio-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? driveFolders 
    : driveFolders.filter(f => f.category === filter);

  container.innerHTML = filtered.map(item => {
    // Software tag badges
    const softwareBadges = item.software.map(sw => {
      if (sw === 'premiere') return `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-950/70 text-purple-300 border border-purple-500/30">Pr Premiere</span>`;
      if (sw === 'aftereffects') return `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-950/70 text-indigo-300 border border-indigo-500/30">Ae After Effects</span>`;
      if (sw === 'filmora') return `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-teal-950/70 text-teal-300 border border-teal-500/30">Fi Filmora</span>`;
      return '';
    }).join(' ');

    const highlightsList = item.highlights.map(h => `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-zinc-900/90 text-zinc-300 border border-white/5">
        <i class="fa-solid fa-check text-[10px] text-emerald-400"></i> ${h}
      </span>
    `).join('');

    return `
      <div class="glass-card-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 group relative overflow-hidden">
        <!-- Top Folder Header -->
        <div>
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="w-13 h-13 p-3.5 rounded-2xl ${item.iconBg} border flex items-center justify-center ${item.iconColor} text-2xl group-hover:scale-110 transition-transform">
              <i class="${item.folderIcon}"></i>
            </div>
            <div class="flex flex-col items-end gap-1">
              <span class="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/5 text-zinc-300 border border-white/10">
                ${item.badge}
              </span>
              <span class="text-[10px] font-mono text-zinc-500">
                ${item.sampleCount}
              </span>
            </div>
          </div>

          <!-- Software Tags -->
          <div class="flex flex-wrap gap-1.5 mb-3">
            ${softwareBadges}
          </div>

          <!-- Title -->
          <h3 class="text-lg sm:text-xl font-extrabold text-white font-heading group-hover:text-red-400 transition-colors mb-2">
            ${item.title}
          </h3>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
            ${item.description}
          </p>

          <!-- Highlights -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${highlightsList}
          </div>
        </div>

        <!-- Action Row -->
        <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <a 
            href="${GOOGLE_DRIVE_WORK_URL}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/25 transition-all group-hover:scale-[1.02]"
          >
            <i class="fa-brands fa-google-drive text-sm"></i>
            <span>View Work in Google Drive</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1 opacity-80"></i>
          </a>

          <a 
            href="https://wa.me/918080652163?text=Hi%20Abdul%2C%20I%20saw%20your%20'${encodeURIComponent(item.title)}'%20folder%20in%20Google%20Drive%20and%20want%20to%20discuss%20a%20project!" 
            target="_blank" 
            class="p-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-colors flex items-center justify-center"
            title="Chat about this on WhatsApp"
          >
            <i class="fa-brands fa-whatsapp text-lg"></i>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// --- Setup Filter Tabs ---
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-red-600', 'text-white', 'shadow-lg', 'shadow-red-600/30');
        b.classList.add('bg-zinc-800/60', 'text-zinc-300', 'hover:bg-zinc-700/60');
      });
      btn.classList.remove('bg-zinc-800/60', 'text-zinc-300', 'hover:bg-zinc-700/60');
      btn.classList.add('bg-red-600', 'text-white', 'shadow-lg', 'shadow-red-600/30');

      const filterVal = btn.getAttribute('data-filter');
      renderDriveFolders(filterVal);
    });
  });
}

// --- Interactive WhatsApp Quote Generator ---
function initQuoteGenerator() {
  const projectTypeSelect = document.getElementById('quote-project-type');
  const videoLengthSelect = document.getElementById('quote-length');
  const turnaroundSelect = document.getElementById('quote-turnaround');
  const estOutput = document.getElementById('quote-est-output');
  const sendQuoteBtn = document.getElementById('quote-whatsapp-btn');

  function calculateQuote() {
    if (!projectTypeSelect || !videoLengthSelect || !turnaroundSelect || !estOutput || !sendQuoteBtn) return;

    const turnaround = turnaroundSelect.value;
    let baseDays = "2-3 Days";
    let styleNote = "Standard Quality Polish";

    if (turnaround === 'express') {
      baseDays = "Within 24 Hours";
      styleNote = "Priority Rush Queue";
    }

    let summaryText = `${projectTypeSelect.options[projectTypeSelect.selectedIndex].text} (${videoLengthSelect.options[videoLengthSelect.selectedIndex].text})`;
    estOutput.innerHTML = `
      <div class="text-red-400 font-bold">${summaryText}</div>
      <div class="text-xs text-zinc-400 mt-1"><i class="fa-solid fa-clock text-cyan-400 mr-1"></i> Delivery: <span class="text-zinc-200 font-medium">${baseDays}</span> (${styleNote})</div>
    `;

    const customMessage = `Hi Abdul! I checked your work on Google Drive and want to inquire about a project:
- Service: ${projectTypeSelect.options[projectTypeSelect.selectedIndex].text}
- Video Length: ${videoLengthSelect.options[videoLengthSelect.selectedIndex].text}
- Timeline: ${turnaroundSelect.options[turnaroundSelect.selectedIndex].text}

Can you share your best quote and next availability?`;

    sendQuoteBtn.setAttribute('href', `https://wa.me/918080652163?text=${encodeURIComponent(customMessage)}`);
  }

  if (projectTypeSelect) projectTypeSelect.addEventListener('change', calculateQuote);
  if (videoLengthSelect) videoLengthSelect.addEventListener('change', calculateQuote);
  if (turnaroundSelect) turnaroundSelect.addEventListener('change', calculateQuote);

  calculateQuote();
}

// --- Copy Email to Clipboard ---
function copyEmail() {
  const email = "abdulnasirsheikh1@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
      toast.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
      }, 2500);
    }
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
}

// --- Live Counter Animation ---
function initLiveCounters() {
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const speed = target / 40;

          const updateCount = () => {
            count += speed;
            if (count < target) {
              counter.innerText = Math.floor(count) + suffix;
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target + suffix;
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
}

// --- Mobile Navigation Menu Toggle ---
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
}

// --- Global Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderDriveFolders('all');
  setupFilters();
  initQuoteGenerator();
  initLiveCounters();
});
