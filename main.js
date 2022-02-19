
let homeContent = `
    <div class="homeContent">
        <div id="welcome">Hey There!</div>
        <p>
            I made this website to show people that I know how to do some things with a computer. 
            I started working in front end web developement in 2021. Hope you enjoy your time exploring my work!
        </p>
    </div>
`

let resumeContent = `
    <div style="padding-block-end: 1px;">
        <div class="resumeContainer">
            <h2>Work Experience</h2>
        <div>
            <h3>Software Dev Engineer 1</h3> Church of Jesus Christ of Latter-Day Saints, August 2021 to Current.  
            <p>
                Was hired as a contractor through TekSystems before internship was to end. Continued on the same team as internship working on churchofjesuschrist.org/study and churchofjesuschrist.org/inspiration.
            </p>
        </div>     
        <div>
            <h3>Software Engineering Internship</h3> Church of Jesus Christ of Latter-Day Saints, May 2021 to August 2021. 
            <p>
                Working on the front end of multiple websites. Tasks include fixing bugs, adding accessibility, adding new features and enhancing current ones. Website frameworks include node.js, React and Redux.
            </p>
        </div> 
        <div>
            <h3>Front End Engineering Intern</h3> Landvoice, Feb 2021 to Apr 2021.
            <p>
                As an intern I was a part of the software development process. I was involved in testing the current application to find and report bugs using Jira and Browser stack. I was also involved in building end to end test using Cypress.
            </p>
        </div> 
        <h2>Education</h2>
        <div>
            <b>B.S Degree, Computational Mathematics Major, Computer Science Minor</b> 2020, Utah State University, Logan, UT. Graduated Summa Cum Laude. Recipient of Transfer Resident Dean Scholarship. 3.92 GPA. 
        </div>
        <h2>Technical Skills</h2>
        <div>
            <p>
                <b>Skilled:</b> React, Redux, JavaScript, HTML, CSS, Java, C++, OOP, Git, Jira
            </p>
            <p>
                <b>Experience With:</b> Jest, React Testing Library, node.js, Cypress, Browser Stack, SQL, PostgreSQL, Android Studios, C#, Python, Cypher, PostScript, NewLisp, Kotlin, Prolog, Haskell
            </p>
        </div>
        <h2>Projects/Courses</h2>
        <div>
            <p>
                <b>CS 2410 Graphical User Interfaces (GUIs)</b> Learned how to develop android apps using Java and Android Studios. Built apps like a calculator, a Madlibs game, and a full functioning contacts app. The contacts app can be found on my Github.
            </p>
            <p>
                <b>CS 2450 Software Engineering</b> I Learned the principles of the software process including agile design, software requirement, software analysis, software design, software testing and quality management, project management. Included a semester long group project using C++.
            </p>
            <p>
                <b>CS 4700 Programming Languages</b> The focus of the class was to learn about the structure of different programming languages. The class covered topics like semantics and syntax and included five assignments where a new language was used for each assignment. 
            </p>
        </div>
    </div>
`

let projectContent = `
    <div class="projectTilesContatiner">
        <div class="projectTile">
            <div class="projectImage">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="projectTile">
            <div class="projectImage">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="projectTile">
            <div class="projectImage">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="projectTile">
            <div class="projectImage">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="projectTile">
            <div class="projectImage">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="modal">

    </div>
`

let aboutmeContent = `
    <div class="aboutmeTile">
        <img class='aboutmeImage' src='./media/ClarissaBryce.jpg' width='2444' height='3342' />
        <div class="aboutmeContent">Some interesting facts will probably go here</div>
    </div>
`

let content = {
    "HOME": homeContent,
    "RESUME": resumeContent,
    "PROJECTS": projectContent,
    "ABOUT ME": aboutmeContent
}

let loadContent = (name) => {
    let contentElement = document.getElementById("content");
    contentElement.innerHTML = content[name];
}

let removeActive = () => {
    let links = document.getElementsByClassName("active");
    Array.prototype.forEach.call(links, function(link){
        link.className = "pageLink";
    });
}

let loadLink = (name) => {
    let linksContainer = document.getElementById("links");

    let linkElement = document.createElement("div");

    linkElement.classList.add("pageLink");
    linkElement.appendChild(document.createTextNode(name));
    linkElement.addEventListener("click", () => {
        removeActive();
        linkElement.classList.add("active");
        loadContent(name);
    });

    linksContainer.appendChild(linkElement);
}

let init = () => {
    loadContent("HOME")
    loadLink("HOME");
    loadLink("RESUME");
    loadLink("PROJECTS");
    loadLink("ABOUT ME");
    document.getElementsByClassName("pageLink")[0].classList.add("active");
}

window.onload = init;