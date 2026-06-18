const brideInput = document.getElementById('brideInput');
const groomInput = document.getElementById('groomInput');
const dateInput = document.getElementById('dateInput');
const timeInput = document.getElementById('timeInput');
const locationInput = document.getElementById('locationInput');
const photoPreview = document.getElementById('photoPreview');

const yourName = document.getElementById('yourName');
const invitationName = document.getElementById('invitationName');
const invitationLetter = document.getElementById('invitationLetter');
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


// Update the yourName element with URL parameter if present
const nameParam = getUrlParameter('name');
if (nameParam && yourName) {
  yourName.textContent = `Sự hiện diện của ${decodeURIComponent(nameParam)} là niềm vinh hạnh lớn cho chúng mình, nhớ đến chung vui nhé (^_^)`;
}
const countdownElement = document.getElementById('countdown');
function updateCountdown() {
  const targetDate = new Date(window.inviteConfig.date + ' ' + window.inviteConfig.time);
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
    countdownElement.textContent = `Chúng ta đã bắt đầu! ${targetDate.toLocaleString()}`;
  }
}

// Call updateCountdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

invitationLetter.textContent = `Chúng mình trân trọng kính mời ${decodeURIComponent(nameParam)} đến dự lễ cưới của chú rể doreamon ${config.groom
} và cô dâu xinh đẹp ${config.bride
} vào ngày ${new Date(config.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })} tại ${config.location}`;

applyConfig(config);