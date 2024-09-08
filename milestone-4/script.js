var _a;
// listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type Assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var giaicIdElement = document.getElementById('giaicId');
    var quarterElement = document.getElementById('quarter');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var syllabusElement = document.getElementById('syllabus');
    var goalsElement = document.getElementById('goals');
    if (profilePictureInput && nameElement && emailElement && contactElement && giaicIdElement && quarterElement && educationElement && experienceElement && skillsElement && syllabusElement && goalsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var giaicId = giaicIdElement.value;
        var quarter = quarterElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var syllabus = syllabusElement.value;
        var goals = goalsElement.value;
        //profile picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //create Output resume
        var resumeOutput = "<h2>@My Profile!</h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n<p><strong>Name: </strong><span id=\"edit-name\" class=\"editable\"></span> ").concat(name_1, "</p>\n<p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n<p><strong>Contact: </strong><span id=\"edit-contact\" class=\"editable\">").concat(contact, "</span></p>\n<p><strong>GIAICId: </strong><span id=\"edit-giaicId\" class=\"editable\">").concat(giaicId, "</span></p>\n<p><strong>Quarter: </strong><span id=\"edit-quarter\" class=\"editable\">").concat(quarter, "</span></p>\n\n<h3>Education</h3>\n<p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n<h3>Syllabus</h3>\n<p id=\"edit-syllabus\" class=\"editable\">").concat(syllabus, "</p>\n<h3>Goals</h3>\n<p id=\"edit-goals\" class=\"editable\">").concat(goals, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input = document.createElement('input');
                input.type = "text";
                input.value = currentValue;
                input.classList.add("editing input");
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
