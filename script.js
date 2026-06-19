const brideInput = document.getElementById('brideInput');
const groomInput = document.getElementById('groomInput');
const dateInput = document.getElementById('dateInput');
const timeInput = document.getElementById('timeInput');
const locationInput = document.getElementById('locationInput');
const photoPreview = document.getElementById('photoPreview');

const yourName = document.getElementById('yourName');
const invitationName = document.getElementById('invitationName');
const invitationLetter = document.getElementById('invitationLetter');
const invitationTime = document.getElementById('invitationTime');
const gnb = document.getElementById('gnb');
const namesText = document.getElementById('namesText');
const dateText = document.getElementById('dateText');
const timeText = document.getElementById('timeText');
const locationText = document.getElementById('locationText');
const noteText = document.getElementById('noteText');

const inviteForm = document.getElementById('inviteForm');

// Function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const defaultConfig = {
  bride: 'Bride',
  groom: 'Groom',
  date: 'June 15, 2026',
  time: '6:00 PM',
  location: 'Restaurant Name',
  note: 'A warm night with food, laughter, and memories.',
  imagePath: 'Images/couple-placeholder.svg'
};

const config = window.inviteConfig ? { ...defaultConfig, ...window.inviteConfig } : defaultConfig;

function updateInvitation(values) {
  const bride = values.bride.trim() || defaultConfig.bride;
  const groom = values.groom.trim() || defaultConfig.groom;
  const date = values.date.trim() || defaultConfig.date;
  const time = values.time.trim() || defaultConfig.time;
  const location = values.location.trim() || defaultConfig.location;
  const note = values.note ? values.note.trim() : defaultConfig.note;

}

function applyConfig(initialConfig) {
  if (brideInput) {
    brideInput.value = initialConfig.bride;
  }
  if (groomInput) {
    groomInput.value = initialConfig.groom;
  }
  if (dateInput) {
    dateInput.value = initialConfig.date;
  }
  if (timeInput) {
    timeInput.value = initialConfig.time;
  }
  if (locationInput) {
    locationInput.value = initialConfig.location;
  }
  if (noteText) {
    noteText.textContent = initialConfig.note || defaultConfig.note;
  }

  if (photoPreview && initialConfig.imagePath) {
    photoPreview.src = initialConfig.imagePath;
  }

  updateInvitation(initialConfig);
}

// Function to hide the loading page
function hideLoadingPage() {
  const loadingPage = document.getElementById('loadingPage');
  if (loadingPage) {
    loadingPage.classList.add('hidden');
  }
}

// Update the yourName element with URL parameter if present
const nameParam = getUrlParameter('name');
if (nameParam && yourName) {
  yourName.textContent = `Sự hiện diện của ${decodeURIComponent(nameParam)} là niềm vinh hạnh lớn cho chúng mình, nhớ đến chung vui nhé (^_^)`;
}
const countdownElement = document.getElementById('countdown');
function updateCountdown() {
  const targetDate = new Date(window.inviteConfig.date + 'T' + window.inviteConfig.time + '+07:00').getTime();
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const Day = days > 0 ? `${days} ngày` : '';
    const Hour = hours > 0 ? `${hours} giờ` : '';
    const Minute = minutes > 0 ? `${minutes} phút` : '';
    const Second = seconds > 0 ? `${seconds} giây` : '';
    if (days >= 0) { 
    countdownElement.innerHTML = `
      <p>${Day} ${Hour} ${Minute} ${Second}</p>
    `;}
  } else {
    countdownElement.textContent = `Hôn lễ đã diễn ra! Cảm ơn ${decodeURIComponent(nameParam)} đã đến chung vui cùng chúng mình!`;
  }
}

// Call updateCountdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

invitationLetter.innerHTML = `Thay mặt một nửa còn lại, tụi mình trân trọng kính mời ${decodeURIComponent(nameParam)} đến dự lễ cưới`;
//<br>Chú rể doreamon<br>${config.groom
//}<br>cô dâu xinh đẹp<br>${config.bride
//}`;
gnb.innerHTML = `<table>
  <tr>
    <th>Chú rể</th>
    <th>Cô dâu</th>
  </tr>
  <tr>
    <td>Quang Chính</td>
    <td>Ngọc Châu</td>
  </tr>
</table>`;
invitationTime.innerHTML = `Vào lúc 17:30<br>Ngày ${new Date(config.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}`;
applyConfig(config);

(function() {
  const slidesEl = document.getElementById('slide') || document.getElementById('slides');
  if (!slidesEl) return;

  const URI = "https://drive.google.com/thumbnail";
  const IMAGE_SIZE = "w1000";
  const imgList = [
    '1pDUGV7lFQQehYFxYtIaC-WzMVufEdzrj',
    '1Kfni9nzD2ZIwkgXM_os9F_Jp-Szmnanx',
    '15AkqZTalE-ZLNj8EHkCFVnHDG7IPSbTw',
    '1RbnyCZ9dOUDs7um1eyBteZi6H5gCEozR',
    '123jLd2PAHEKyumqQohM1LKRY7NGZKMLd',
    '1PhwGo5Sgj85kuoH0RNtyre5anPjR9RJm',
    '1Me-mKr94AAu4s56nbl-OWQCw6yDy1vNa',
    '17f3XMnuepIP__vvHz6IkiuTrTlSVfm_f',
    '1mFeX9fwv-oEZa3WWmaRVd2Z4DD-_gLNb',
    '15RXi97YGUcv1IXPDXjqoXw5c8Hq5_KBp',
    '1z3zcfuXBzwrhCJihmvQG4FSphewbZCJ8',
    '11oppJSUrKnIoRGAv8EY2kyfWBATF5Vac',
  ];
  const slides = [];
  let index = 0;
  let timer = null;


  function loadByName(name) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ ok: true, el: img });
      img.onerror = () => resolve({ ok: false });
      img.src = `${URI}?id=${name}&sz=${IMAGE_SIZE}`;
      img.setAttribute('draggable', 'false');
      img.style.userSelect = 'none';
    });
  }

  async function initSlides() {
    for (const name of imgList) {
      const result = await loadByName(name);
      if (result.ok) {
        result.el.alt = `Slide Wedding ${name}`;
        slides.push(result.el);
      }
    }

    if (slides.length === 0) {
      const placeholder = document.createElement('div');
      placeholder.style.padding = '40px';
      placeholder.style.color = '#99a0b0';
      placeholder.style.textAlign = 'center';
      placeholder.innerText = 'No slide images found in Images/. Add image files or update imgList in script.js.';
      slidesEl.appendChild(placeholder);
      hideLoadingPage();
      return;
    }

    for (const img of slides) {
      const wrapper = document.createElement('div');
      wrapper.className = 'image-wrapper';
      wrapper.appendChild(img);
      slidesEl.appendChild(wrapper);
    }

    updateSlidePosition();
    startAutoplay();
    try {
      await Promise.all(slides.map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve())));
    } catch (e) {
      // ignore decode failures
    }
    
    hideLoadingPage();
  }

  function updateSlidePosition() {
    const container = document.getElementById('slides');
    const width = slidesEl.clientWidth;
    slidesEl.style.transform = `translateX(${-index * width}px)`;
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlidePosition();
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlidePosition();
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlidePosition();
    }, 4000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  window.addEventListener('resize', () => requestAnimationFrame(updateSlidePosition));
  slidesEl.addEventListener('mouseenter', stopAutoplay);
  slidesEl.addEventListener('mouseleave', startAutoplay);

  let startX = null;
  let startY = null;
  let tracking = false;
  const SWIPE_THRESHOLD = 40;

  function handleSwipe(dx, dy) {
    if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < SWIPE_THRESHOLD) return false;
    tracking = false;
    if (dx > 0) prevSlide(); else nextSlide();
    return true;
  }

  slidesEl.addEventListener('touchstart', (event) => {
    if (!event.touches || event.touches.length !== 1) return;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    tracking = true;
  }, { passive: true });

  slidesEl.addEventListener('touchmove', (event) => {
    if (!tracking || !event.touches || event.touches.length !== 1) return;
    const dx = event.touches[0].clientX - startX;
    const dy = event.touches[0].clientY - startY;
    if (handleSwipe(dx, dy)) {
      event.preventDefault();
    }
  }, { passive: false });

  slidesEl.addEventListener('touchend', () => {
    tracking = false;
    startX = startY = null;
  });

  slidesEl.addEventListener('touchcancel', () => {
    tracking = false;
    startX = startY = null;
  });

  slidesEl.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' || event.pointerType === 'pen' || event.pointerType === 'touch') {
      startX = event.clientX;
      startY = event.clientY;
      tracking = true;
      slidesEl.setPointerCapture && slidesEl.setPointerCapture(event.pointerId);
    }
  });

  slidesEl.addEventListener('pointermove', (event) => {
    if (!tracking || startX === null || startY === null) return;
    const dx = startX - event.clientX;
    const dy = startY - event.clientY;
    if (Math.abs(dx) < Math.abs(dy)) return;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      tracking = false;
      if (dx > 0) nextSlide(); else prevSlide();
    }
  });

  slidesEl.addEventListener('pointerup', () => {
    tracking = false;
    startX = startY = null;
  });

  slidesEl.addEventListener('pointercancel', () => {
    tracking = false;
    startX = startY = null;
  });

  initSlides();

  
})();