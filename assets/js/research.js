/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Machine Learning based Extraction of Electrical Substations from High Resolution Satellite Data: Outcome of the ICETCI 2021 Challenge",
    authors:
      "Sreenivasan G; Anju Bajpai; Prakasa Rao D S; Girish Kumar T P; Naman Garg",
    conferences:
      "Internation Confrence on Emerging Techniques in Computational Intelligence (ICETCI) 2021",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/segmentation.png",
    citation: {
      },
    abstract:
      "The creation of geospatial databases of large power infrastructure such as substations is essential for the planning and management of electricity transmission and distribution. Achieving this task through conventional mapping techniques involves great effort in terms of time, manpower and financial resources. Automatically extracting power infrastructure from high-resolution satellite data using Machine Learning Algorithms is a promising option. However, feature extraction of power infrastructure such as electrical substations is a new challenge since not many attempts have been made in this domain. To nurture the development of deep learning algorithms which can provide solutions for automatic feature extraction of substations, we have undertaken a Challenge at the International Conference on Emerging Techniques in Computational Intelligence (ICETCI-2021). The goal was to explore the feasibility of extracting electrical substations from high resolution satellite data using deep learning algorithms. We evaluated the algorithms for their effectiveness in extracting electrical substations in terms of the accuracy of feature extraction and efficiency of the models with respect to computational resource utilization. We describe the competition design, process and evaluation, and present an overview of the different Machine Learning solutions, and the top three best solutions that provided the best accuracy and efficiency for substation extraction.",
    absbox: "absPopup1",
  },

  {
    title: "Finite Element Analysis of Zygomatico Maxillary Complex.",
    authors:
      "Interdeciplinary Project: Deaprtment of Computing Technologies & Department of Maxillofacial Surgery",
    conferences:
      "Approved and funded (~US$8500) by Indian Counsil of Medical Research (ICMR)",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/max.png",
    citation: {
     },
    abstract:
      "We will implement the technique of fitting a plate to fix the fractured cheekbone  to redefine the lost symmetry of a face owing to a fracture of the cheekbone in an accident. The size of the plate that will help to fix the fractured cheekbone will be determined so that custom plates can be built to bring back the face to perfect symmetry",
    absbox: "absPopup2",
  },

  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
