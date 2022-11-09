import './style.css'
import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector(".experience-canvas"))

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C#', 'Ms Office', 'Python',
    'Sql', 'Git', 'Three.js',
    'Java', 'Firebase', 'Android Studio',
];

var tagCloud = TagCloud('.sphere', myTags,{

    // radius in px
    radius: 150,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
  
    // interact with cursor move on mouse out
    keep: true
  
  }); 