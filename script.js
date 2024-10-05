gsap.registerPlugin(ScrollTrigger);

gsap.to(".quote", {
  scrollTrigger: {
    trigger: ".quote-container",
    start: "top 80%",
    end: "bottom 100%",
    scrub: true,
    
   
  },
  opacity: 1,
  x: -0,
  duration: 1,
  stagger:0.2
});
gsap.from("header",{
    opacity:0,
    delay:1,
    duration:2

})
gsap.from(".main",{
    opacity:0,
    scale:0,
    duration:1.5,
    delay:1.5

})
gsap.to(".cards", {
    scrollTrigger: {
      trigger: "#aboutSection",
      start: "top 50%",
      end: "bottom 100%",
      scrub: true,
      
    },
    opacity: 1,
    y: -0,
    duration: 1.5,
    stagger:0.2
  });


  // JavaScript for Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('popupModal');
  const closeBtn = document.querySelector('.close');
  const teamMembers = document.querySelectorAll('.team-member');

  teamMembers.forEach(member => {
      member.querySelector('button').addEventListener('click', () => {
          document.getElementById('popupImage').src = member.dataset.image;
          document.getElementById('popupName').textContent = member.dataset.name;
          document.getElementById('popupRole').textContent = member.dataset.role;
          document.getElementById('popupDescription').textContent = member.dataset.description;
          document.getElementById('popupContact').textContent = member.dataset.contact;
          modal.style.display = 'block';
      });
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});

  


