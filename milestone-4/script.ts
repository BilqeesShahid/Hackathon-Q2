// listing elements
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
  event.preventDefault();
//type Assertion

const profilePictureInput=document.getElementById('profilePicture') as HTMLInputElement;
const nameElement= document.getElementById('name') as HTMLInputElement;
const emailElement= document.getElementById('email') as HTMLInputElement;
const contactElement= document.getElementById('contact') as HTMLInputElement;
const giaicIdElement= document.getElementById('giaicId') as HTMLInputElement;
const quarterElement= document.getElementById('quarter') as HTMLInputElement;

const educationElement= document.getElementById('education') as HTMLInputElement;
const experienceElement= document.getElementById('experience') as HTMLInputElement;
const skillsElement= document.getElementById('skills') as HTMLInputElement;
const syllabusElement= document.getElementById('syllabus') as HTMLInputElement;
const goalsElement= document.getElementById('goals') as HTMLInputElement;

if(profilePictureInput && nameElement && emailElement && contactElement && giaicIdElement && quarterElement &&educationElement && experienceElement && skillsElement && syllabusElement && goalsElement){
  const name= nameElement.value;
  const email= emailElement.value;
  const contact= contactElement.value;
  const giaicId= giaicIdElement.value;
  const quarter= quarterElement.value;
  const education= educationElement.value;
  const experience= experienceElement.value;
  const skills= skillsElement.value;
  const syllabus= syllabusElement.value;
  const goals= goalsElement.value;


//profile picture element
const profilePictureFile=profilePictureInput.files?.[0];
const profilePictureURL=profilePictureFile?URL.createObjectURL(profilePictureFile):'';


//create Output resume
const resumeOutput=
`<h2>@My Profile!</h2>
${profilePictureURL? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ''}
<p><strong>Name: </strong><span id="edit-name" class="editable"></span> ${name}</p>
<p><strong>Email:</strong><span id="edit-email" class="editable"> ${ email}</span></p>
<p><strong>Contact: </strong><span id="edit-contact" class="editable">${contact}</span></p>
<p><strong>GIAICId: </strong><span id="edit-giaicId" class="editable">${giaicId}</span></p>
<p><strong>Quarter: </strong><span id="edit-quarter" class="editable">${quarter}</span></p>

<h3>Education</h3>
<p id="edit-education" class="editable">${education}</p>

<h3>Experience</h3>
<p id="edit-experience" class="editable">${experience}</p>

<h3>Skills</h3>
<p id="edit-skills" class="editable">${skills}</p>

<h3>Syllabus</h3>
<p id="edit-syllabus" class="editable">${syllabus}</p>
<h3>Goals</h3>
<p id="edit-goals" class="editable">${goals}</p>`;

const resumeOutputElement= document.getElementById('resumeOutput')
if(resumeOutputElement){
  resumeOutputElement.innerHTML=resumeOutput;

  makeEditable();
 }

 
 }

 else{
  console.error('one or more output elements are missing')
 }

}
);


function makeEditable(){
  const editableElements= document.querySelectorAll('.editable')
  editableElements.forEach(element  =>  {
    element.addEventListener('click', function(){
      const currentElement= element as HTMLElement;
      const currentValue= currentElement.textContent || "";
      // replace content
      if(currentElement.tagName=== "p" || currentElement.tagName=== "SPAN"){
        const input= document.createElement('input');
        input.type="text"
        input.value=currentValue
        input.classList.add("editing input")
        currentElement.style.display="none"
        currentElement.parentNode?.insertBefore(input,currentElement)
        input.focus();
      }
        
    })
  })
}


