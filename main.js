let homeContent = `
    <div class="homeContainer">
        <div class="homeContent">
            <div class="flex-center">
                <div id="welcome">Hello, I'm <br/><span id="name">Clarissa Labrum</span>,<br/>A Web Developer</div>
            </div>
            <div class="flex-center message">
                <div>
                    <p>I made this website to show people that I know how to do some things with a computer.</p> 
                    <p>I started working in front end web developement in 2021.</p> 
                    <p>Hope you enjoy your time exploring my work!</p>
                </div>
            </div>
        </div>
        <div class="sideThing">
            <div>
                <span>Education:</span>
                <p class="education">Bachelors in Computational Mathematics</p>
                <p>Minor in Computer Science</p>
            </div>
            <div>
                <span>Experience:</span>
                <p>1+ years</p>
            </div>
            <div>
                <span>Location:</span>
                <p>Payson, Utah</p>
            </div>
            <div>
                <span>Interests:</span>
                <p>Hiking</p>
                <p>Sitcoms</p>
                <p>Sports</p>
                <p>Harry Potter</p>
                <p>Running</p>
            </div>
        </div>
    </div>
`

let resumeContent = `
    <link rel="stylesheet" href="./styles/resume.css">
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
`

let projectContent = `
    <link rel="stylesheet" href="./styles/projects.css">
    <div class="projectTilesContatiner">
        <div class="projectTile">
            <div class="projectHeader">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="projectTile">
            <div class="projectHeader">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="projectTile">
            <div class="projectHeader">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="projectTile">
            <div class="projectHeader">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="projectTile">
            <div class="projectHeader">
                Project Title
            </div>
            <div class="projectContent">

            </div>
        </div>
        <div class="modal">

    </div>
`

let aboutmeContent = `
    <link rel="stylesheet" href="./styles/aboutme.css">
    <div class="aboutmeContainer">
        <div class="aboutme-gallery">
            <div>    
                <img src='./media/bryce.jpg' width='2444' height='3342' />
                <p class='aboutme-description'> 
                    I've officially been to 8 National Parks and multiple State Parks.  
                    Bryce competes with Mesa Verde for my favorite.
                </p>
            </div>
            <div>    
                <img src='./media/college.jpg' width='2444' height='3342' />
                <p class='aboutme-description'> 
                    I started out at Snow College doing Civil Engineering
                    and then switched over to the way cooler math degree at USU.
                </p>
            </div>
            <div>    
                <img src='./media/hogwarts.jpg' width='2444' height='3342' />
                <p class='aboutme-description'> 
                    Here's a list of series I have watched/read over 10 times: 
                    Harry Potter, The Office, Big Bang Theory, New Girl, 
                    & Parks and Rec
                </p>
            </div>
            <div>    
                <img src='./media/nasa.jpg' width='2444' height='3342' />
                <p class='aboutme-description'> 
                    I find space exploration fascinating and if you happen to be from 
                    NASA or SpaceX I want you to know I would pay to work there!
                </p>
            </div>
            <div>    
                <img src='./media/running.jpg' width='2444' height='3342' />
                <p class='aboutme-description'> 
                    Here's my favorite picture of me running. 
                </p>
            </div>
            <div>    
                <img src='./media/tyson.jpg' width='2444' height='3342' />
                <p class='aboutme-description'> 
                    I've been married to this cute guy since 2016
                </p>
            </div>
        </div>
    </div>
`

const content = {
    "HOME": homeContent,
    "RESUME": resumeContent,
    "PROJECTS": projectContent,
    "ABOUT ME": aboutmeContent
}

const loadContent = (name) => {
    let contentElement = document.getElementById("content");
    contentElement.innerHTML = content[name];
}

const loadLink = (name) => {
    let linksContainer = document.getElementById("links");
    let linkElement = document.createElement("a");

    const removeActive = () => {
        let links = document.getElementsByClassName("active");
        Array.prototype.forEach.call(links, function(link){
            link.className = "pageLink";
        });
    }

    linkElement.classList.add("pageLink");
    linkElement.appendChild(document.createTextNode(name));
    linkElement.addEventListener("click", () => {
        removeActive();
        linkElement.classList.add("active");
        loadContent(name);
    });

    linksContainer.appendChild(linkElement);
}

const initMenuButton = () => {
    const menuButton = document.querySelector('#menuButton');

    const toggleLinks = () => {
        const linksContainer = document.querySelector('#links');
        linksContainer.classList.toggle('open');
    }

    menuButton.addEventListener('click', toggleLinks)
};

const initThemeButton = () => {
    const page = document.querySelector("body");
    const themeButton = document.querySelector('#themeButton');

    const toggleTheme = () => {
        page.classList.toggle("light");
        page.classList.toggle("dark");
    
        toggleIconTheme();
        localStorage.setItem("darkTheme", page.classList.contains("dark"));
    }

    if (localStorage.darkTheme === true || page.classList.contains("dark")) {
        toggleTheme();
    }

    themeButton.addEventListener("click", toggleTheme);
}

const toggleIconTheme = () => {
    const page = document.querySelector("body");
    const menuIcon = document.querySelector('.menu-icon');
    const themeIcon = document.querySelector('.theme-icon');

    if (page.classList.contains("light")) {
        themeIcon.src = "./media/moon.svg";
        menuIcon.src = "./media/menu.svg";
    } else {
        themeIcon.src = "./media/sun.svg";
        menuIcon.src = "./media/menu-night.svg";
    }
}

let init = () => {
    loadContent("HOME")
    loadLink("HOME");
    loadLink("RESUME");
    loadLink("PROJECTS");
    loadLink("ABOUT ME");
    document.getElementsByClassName("pageLink")[0].classList.add("active");
    initMenuButton();
    initThemeButton();
}

window.onload = init;