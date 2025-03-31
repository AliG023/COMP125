window.onload = function greeting(){
    const user = window.prompt("Please enter your name:");
    if (user){
        alert(`Welcome, ${user}! Have a great day!!`);
    }
}

const previousCourseButton = document.getElementById('previousCourses');
previousCourseButton.addEventListener('click', oldCourseAddition);

const colorChange = document.getElementById('colorChange');
colorChange.addEventListener('click', colorSwap);

const addReact = document.getElementById('addReact');
addReact.addEventListener('click', reactAddition);


const courseList = document.getElementById('courseList');
const courses = Array.from(courseList.getElementsByTagName('li'));

const oldCourseList = ['COMP100 - Programming 1', 'COMP120 - Software Engineering Fundamentals', 'COMP213 - Web Interface Design', 'COMM171 - Communications 2' , 'MATH175 - Math']

function oldCourseAddition() {
    if (!document.getElementById('semester1Header')) {
        const semester1 = document.createElement('h2');
        semester1.textContent = 'Semester 1 - Course List';
        semester1.id = 'semester1Header';
        courseList.appendChild(semester1);

        oldCourseList.forEach(course => {
            const newCourse = document.createElement('li');
            newCourse.textContent = course;
            courseList.appendChild(newCourse);
        });
    }
}

const goals = document.getElementById('careerMission');
const goalsList = Array.from(goals.getElementsByTagName('li'));

function colorSwap(){
    goalsList.forEach(goal =>{
        goal.classList.toggle('color-swap');
    })
}

const skills = document.getElementById('skillsList');
const skillsList = Array.from(skills.getElementsByTagName('li'));

function reactAddition() {
    if(!document.getElementById('react')){
        const addReact = document.createElement('li');
        addReact.textContent = 'React';
        addReact.id = 'react';
        skills.insertBefore(addReact, skills.firstChild);
    }
}