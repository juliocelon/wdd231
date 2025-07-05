

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// CSE Courses

const cseCourses = document.querySelector("#cse-courses");

cseCourses.addEventListener("click", () => {

    document.querySelector(".course").innerHTML = ""; // Clean the previos content (cards created)

    let coursesOfCSE = courses.filter(course => {
        return course.subject == "CSE";
    });

    createCourses(coursesOfCSE);

});

// WDD Courses

const wddCourses = document.querySelector("#wdd-courses");

wddCourses.addEventListener("click", () => {

    document.querySelector(".course").innerHTML = ""; // Clean the previos content (cards created)

    let coursesOfWDD = courses.filter(course => {
        return course.subject == "WDD";
    });

    createCourses(coursesOfWDD);

});

// All Courses

const allCourses = document.querySelector("#all-courses");

allCourses.addEventListener("click", () => {

    document.querySelector(".course").innerHTML = ""; // Clean the previos content (cards created)

    createCourses(courses);

});

createCourses(courses);


// Create course Cards

function createCourses(courses) {

    const container = document.querySelector(".course");

    courses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        if (course.completed == true) {
            card.innerHTML = `
                <button
                    type="button"
                    title="${course.subject}-${course.number}" 
                    id="${course.subject}-${course.number}"
                    style="background-color: #0000FF; color: white; border: none; ">
                    ✔ ${course.subject} ${course.number}
                </button>`;
        } else {
            card.innerHTML = `
                <button
                    type="button"
                    title="${course.subject}-${course.number}" 
                    id="${course.subject}-${course.number}"
                    style="background-color:#666666; color: white; border: none;">
                    ◯ ${course.subject} ${course.number}
                </button>`;
        }


        container.appendChild(card);

        // Getting all the credits

        const totalCredits = courses.reduce((total, course) => {
            return total + course.credits;
        }, 0);

        // Getting the obtained credits

        const obtainedCredits = courses.filter(course => course.completed).
            reduce((totalObtainedCredits, course) => {
                return totalObtainedCredits + course.credits;
            }, 0);

        const allCredits = document.querySelector("#totalCredits");
        allCredits.innerHTML = `The total credits for course listed above is ${totalCredits} (${obtainedCredits} obtained)`;

    });
}
