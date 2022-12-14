AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/mitacs.jpg",
    place: "MITACS (Western University, Ontario, CA)",
    time: "(July, 2022 - October, 2022)",
    desp: "<li>Attended a fully-funded internship under the supervision of Dr. George Knopf at Western University.</li> <li>Developed a pipeline to extract all the information inside sealed historical books that are too fragile to open.</li> <li>Represented all the content of book in 3-Dimentional spaces.</li>",
  },
  {
    title: "Computer Vision Intern",
    cardImage: "assets/images/experience-page/aimage.png",
    place: "AI MAGE, Bengaluru, IN",
    time: "(Dec, 2021 - March, 2022)",
    desp: "<li>Developed a Multiclass Learning Model for Fashion Tagging and Segmentation system</li><li>Deployed on AWS Lambda and AWS Fargate for serverless worry free deployment.</li><li>Utilized docker for better compatibility of project over different developing environments</li><li>Developed a CI/CD (Continues Integration / Continues Deployment) pipeline on AWS to make easy deployment of further changes to the project</li>",
  },
  {
    title: "Jr. Machine Learning Engineer",
    cardImage: "assets/images/experience-page/omdena.png",
    place: "Omdena, Remote",
    time: "(Sep, 2021 - Dec, 2021)",
    desp: "<li>Developed a deep vision engine for rooftop solar photovoltaic analysis to improve the scalability and automation of the energy simulation platform which includes Rooftop area detection using segmentation, Obstacle detection, and Calculation of solar potential</li><li>Worked in a team of 50 members from all over the Globe and helped in four different tasks.</li><li>The model is currently being used in Helsinki City for the optimization of a solar panel placement</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "ICETCI 2021 ML Challenge",
    cardImage: "assets/images/experience-page/icetci2021.png",
    description:
      "Secured the third position in a computer vision competition  on “Machine Learning-based Feature Extraction of Electrical Substations from Satellite Data” with IoU of 83.24%.",
  },
  {
    title: "Double Slash Hackathon",
    cardImage: "assets/images/experience-page/slash.png",
    description:
      "Presented a methodology for sending videos to faraway places using text SMS to help rural education and secured the second runned up position in the hackathon",
  },
  {
    title: "HackX by IEEE VIT Valore",
    cardImage: "assets/images/experience-page/hackx.jpg",
    description:
      "Secured 3rd rank by Developing a Deep learning based model to detect drowsy driver and alert him",
  },
  {
    title: "Geo-Innovation Challenge by DST",
    cardImage: "assets/images/experience-page/dst.jpeg",
    description:
      "Presented a proposal to benifit fishermen titled 'Pridiction of Protential Fishing Zones using marine traffic and Oceansat-2 data' and secured 1st position in the challenge",
  },
  {
    title: "Exibit our work at UNWGIC 2022",
    cardImage: "assets/images/experience-page/unwgic.jpg",
    description:
      "Presented our work on 'Pridiction of Protential Fishing Zones using marine traffic and Oceansat-2 data' at United Nations   World Geospatial Information Congress ",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Indian Society for Applied Research & Development",
    subtitle: "Data Analyst",
    image: "assets/images/experience-page/isard.jpeg",
    desp: "I performed data analysis on HIV data which was collected by ISARD over duration of 3 years",
    href: "https://isardorg.in/home",
  },
  {
    title: "Moksha Orphanage and Old Age Home",
    subtitle: "Volunteer",
    image: "assets/images/experience-page/moksha.jpg",
    desp: "Spent time with childen and senior citizen",
    href: "http://www.moksha-oldagehome.org/",
  },
  {
    title: "Omdena",
    subtitle: "Jr. Machine learning Engineer",
    image: "assets/images/experience-page/omdena.png",
    desp: "Developed a deep vision engine for rooftop solar photovoltaic analysis to improve the scalability and automation of the energy simulation platform which includes Rooftop area detection using segmentation, Obstacle detection, and Calculation of solar potential",
    href: "https://wafflehacks.org/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
