var bio = {
    "name": "Cheng Guo",
    "role": "Graduate Student",
    "welcomeMessage": "Hi, I'm learning web development in my spare time. Contact me if you have any advice or project opportunities.",
    "contacts": {
        "mobile number": "+86-15555156707",
        "email": "g7845123@gmail.com",
        "github": "g7845123",
        "blog": "Under construction",
        "location": "Deyang, Sichuan, China"
    },
    "skills": [
        "Python (Familiar)", "HTML (Know about)", "CSS (Know about)", "JavaScript (Know about)"
    ],
    "bioPic": "images/cheng.jpg"
}

var education = {
    "schools" : [
      {
        "name": "University of Science and Technology of China",
        "location": "Hefei, Anhui, China",
        "degree": "Master Degree Candidate",
        "majors": ["Biomedical Engineering"],
        "dates attended": "Sep 2012 - Jun 2015",
        "url": "http://en.ustc.edu.cn/"
      },
      {
        "name": "University of Science and Technology of China",
        "location": "Hefei, Anhui, China",
        "degree": "Bachelor",
        "majors": ["Life Science"],
        "dates attended": "Sep 2008 - Jun 2012",
        "url": "http://en.ustc.edu.cn/"
      }
    ],
    "onlineCourses": [
     {
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates attended": "Nov 2014 - Present",
        "url": "https://www.udacity.com/course/nd001"
     }
    ]
};

var work = {
  "jobs": [
    {
      "employer": "Oriental Elite Corporation",
      "title": "Math Trainner (Part time)",
      "location": "Hefei, Anhui, China",
      "dates worked": "Mar 2010 - Jun 2014",
      "description": "I served as a trainner and provide educational service for high school students in the mastery of math skills. At least half of my trainees got 800/800 in SAT Subject Test Math Level 2 and 5/5 in AP Calculus (including AB & BC)"
    }
  ]
};

var projects = {
    "projects": [
      {
        "title": "Development of an algorithm based on Hidden Markov Model for analyzing Next Generation Sequencing data",
        "dates worked": "Sep 2012 - Dec 2014",
        "description": "This is my thesis for Masters Degree in University of Science and Technology of China. In this project, I first do literature research and find drawbacks in exsiting algorithms. Next, I try to overcome the drawbacks in current approaches by proposing and implementing a Hidden Markov Model besed method, with its best parameter estimated by expectation-maximization (EM) algorithm. Finally, I compare my method with competing algorithms and find a significant performance advantage",
        "images": [
          "images/ExomeHMM_workflow.png",
        ]
      },
      {
        "title": "Page mock",
        "dates worked": "Nov 2014",
        "description": "This is a project for Front-End Web Developer Nanodegree provided by Udacity. In this project, I was provided with a design mockup as a picture and I was required to replicate that design in HTML and CSS. According to the auto-grading system, my code achieved a mismatch rate of 0.87%",
        "images": [
          "images/Pagemock_overlap.png",
        ]
      }
    ]
};

function addContacts(selector) {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
  $(selector).append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $(selector).append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $(selector).append(formattedGithub);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  $(selector).append(formattedBlog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $(selector).append(formattedLocation);
}

bio.display = function () {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  addContacts("#topContacts");
  addContacts("#footerContacts");
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);
  if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (skill in bio.skills) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedSkill);
      }
  }
}

work.display = function () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job]["dates worked"]);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

projects.display = function () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project]["dates worked"]);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        //console.log(formattedImage);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

education.display = function () {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school]["dates attended"]); 
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    var majorStr = education.schools[school].majors.join();
    //console.log(majorStr);
    var formattedMajor = HTMLschoolMajor.replace("%data%", majorStr);
    $(".education-entry:last").append(formattedMajor);
  }
  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course]["dates attended"]);
    $(".education-entry:last").append(formattedDates);
    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedUrl);
  }
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
