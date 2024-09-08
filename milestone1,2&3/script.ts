// listing elements
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
  event.preventDefault();
//type Assertion

const profilePictureInput=document.getElementById('profilePicture') as HTMLInputElement;
const nameElement= document.getElementById('name') as HTMLInputElement;
const emailElement= document.getElementById('email') as HTMLInputElement;
const contactElement= document.getElementById('contact') as HTMLInputElement;
 

const educationElement= document.getElementById('education') as HTMLInputElement;
const experienceElement= document.getElementById('experience') as HTMLInputElement;
const skillsElement= document.getElementById('skills') as HTMLInputElement;
 
if(profilePictureInput && nameElement && emailElement && contactElement  && educationElement && experienceElement && skillsElement ){
  const name= nameElement.value;
  const email= emailElement.value;
  const contact= contactElement.value;
   
  const education= educationElement.value;
  const experience= experienceElement.value;
  const skills= skillsElement.value;
   

//profile picture element
const profilePictureFile=profilePictureInput.files?.[0];
const profilePictureURL=profilePictureFile?URL.createObjectURL(profilePictureFile):'';


//create Output resume
const resumeOutput=
`<h2>@My Profile</h2>
${profilePictureURL? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ''}
<p><strong>Name: </strong> ${name}</p>
<p><strong>Email:</strong> ${ email}</p>
<p><strong>Contact: </strong>${contact}</p>
 
<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>`;

 

const resumeOutputElement= document.getElementById('resumeOutput')
if(resumeOutputElement){
  resumeOutputElement.innerHTML=resumeOutput;
 }

 else{
  console.log('The resume output elements are missing')
 }
 
 }

 else{
  console.error('one or more output elements are missing')
 }

}
)