const toggler = document.querySelector('.toggler');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const toggleIcon = document.querySelector('.toggle-icon');

toggler.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
});

toggleIcon.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
});
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
}));

const speakers = [
  {
    name: 'Jason Butler',
    description: 'simply dummy text of the printing and typesetting industry and has been the industry\'s ever since the 1500s, when an unknown printer',
    image: 'images/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray.jpeg',
    role: 'Head of Programmes Lead Faci in charge ',
  },

  {
    name: 'Brandel Smith',
    description: 'simply dummy text of the printing and typesetting industry and has been the industry\'s  ever since the 1500s, when an unknown printer',
    image: 'images/african-woman-successful-entrepreneur-wearing-glasses-face-portrait.jpeg',
    role: 'curriculum Developer Lead Faci in charge ',
  },
  {
    name: 'Tade Johnson',
    description: 'simply dummy text of the printing and typesetting industry and has been the industry\'s  ever since the 1500s, when an unknown printer',
    image: 'images/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign.jpeg.crdownload',
    role: 'Instructor Lead Faci in charge ',
  },
  {
    name: 'Michael Brian',
    description: 'simply dummy text of the printing and typesetting industry and has been the industry\'s  ever since the 1500s, when an unknown printer',
    image: 'images/happy-successful-businessman-posing-outside.jpeg',
    role: 'Edtech Coach Lead Faci in ',
  },
  {
    name: 'Ariel Tamad-Lee',
    description: 'simply dummy text of the printing and typesetting industry and has been the industry\'s ever since the 1500s, when an unknown printer.',
    image: 'images/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign.jpeg.crdownload',
    role: 'Student Team Lead Faci in charge ',
  },
  {
    name: 'Amie Sanderson',
    description: 'simply dummy text of the printing and typesetting industry and has been the industry\'s  ever since the 1500s, when an unknown printer.',
    image: 'images/confident-professional-businesswoman-cross-arms-chest-looking-selfassured-camera-smiling-standing-white-background.jpeg',
    role: 'Lead Faci in charge of everything',
  },
];
const works = document.querySelector('.team');
const newWorks = speakers.map((speaker) => `<div class="grid person">
    <div class="para-div flex">
        <img src=${speaker.image}
         class="img5">
         <div class='para'><p class= 'speaker-head'>${speaker.name}</p>
    <p class="desc1">${speaker.role}</p>
     <p class="desc2">${speaker.description}</p></div>
    </div>
    
    </div>`).join('');

document.addEventListener('DOMContentLoaded', () => {
  works.innerHTML = newWorks;
});
