/*skill section*/

let isForm = false;

function onAddSkill() {
  const skillForm = document.getElementById("onSkillAdd");
  skillForm.classList.toggle("form-card-none");
  isForm = !isForm;
}

function onBackSkill(){
  const skillForm = document.getElementById("onSkillAdd");
  skillForm.classList.add("form-card-none");
  isForm = false;
}

function onSubmitSkill(){

   

    let imageInput=document.getElementById("imageUrl").value.trim();
   let titleInput=document.getElementById("skillTitle").value.trim();
   let paraInput=document.getElementById("description").value.trim();
   let errowMsg=document.getElementById("errorMsg");
   if ((!imageInput || !titleInput || !paraInput)){
    errorMsg.textContent = "Please fill in all fields.";
    errowMsg.classList.add("errow-msg")
    return
   }
   else{
 errorMsg.textContent = "";
  const ulElement = document.getElementById("addSkill");

     const liElement = document.createElement("li");
     liElement.classList.add("col-12", "col-md-6", "col-lg-3");
     
  const skillCard = document.createElement("div");
  skillCard.classList.add("skill-card", "text-white", "p-4", "m-1", "shadow");

  
  const imgElement = document.createElement("img");
  imgElement.src = imageInput;
  imgElement.classList.add("skill-icon", "mb-3");
  imgElement.alt = `${titleInput} Icon`;

  const titleElement = document.createElement("h2");
  titleElement.textContent = titleInput;

  const paraElement = document.createElement("p");
  paraElement.textContent = paraInput;

  
  skillCard.appendChild(imgElement);
  skillCard.appendChild(titleElement);
  skillCard.appendChild(paraElement);
  liElement.appendChild(skillCard);
  ulElement.appendChild(liElement);

   document.getElementById("skillForm").reset();
   
   }

    
   onBackSkill();

  }

  /*skill section ending*/


  /*project section*/

  let isProject= false;

  
function onAddProject() {
  const projectForm = document.getElementById("onProjectAdd");
  projectForm.classList.toggle("form-card-none");
  isProject=!isProject;
}

function onBackProject(){
  const projectForm = document.getElementById("onProjectAdd");
  projectForm.classList.add("form-card-none");
  isProject = false;
}
function onSubmitProject() {
  let projectImage = document.getElementById("projectImageUrl").value.trim();
  let projectTitle = document.getElementById("projectTitle").value.trim();
  let projectDescription = document.getElementById("projectDescription").value.trim();
  let projectErrorMsg = document.getElementById("projectErrorMsg");

  if (!projectTitle || !projectImage || !projectDescription) {
    projectErrorMsg.textContent = "Please fill in all fields of project.";
    projectErrorMsg.classList.add("errow-msg");
    return;
  } else {
    projectErrorMsg.textContent = "";

    const ulElement = document.getElementById("newProject");

    const projectLiEl = document.createElement("li");
    projectLiEl.classList.add("col-12", "col-md-6", "col-lg-3");

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card", "text-white", "p-4", "m-1", "shadow");

    const imgEl = document.createElement("img");
    imgEl.src = projectImage;
    imgEl.classList.add("project-icon", "mb-3");
    imgEl.alt = `${projectTitle} Icon`;

    const titleEl = document.createElement("h2");
    titleEl.textContent = projectTitle;

    const paraEl = document.createElement("p");
    paraEl.textContent = projectDescription;

    projectCard.appendChild(imgEl);
    projectCard.appendChild(titleEl);
    projectCard.appendChild(paraEl);
    projectLiEl.appendChild(projectCard);
    ulElement.appendChild(projectLiEl);

    document.getElementById("projectForm").reset();
    onBackProject();
  }
}

/*project section end*/