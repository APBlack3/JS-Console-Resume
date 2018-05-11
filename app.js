let name = 'Pete Black';
let fullName = name.toUpperCase();

let career = 'Starving Musician/Coding Student';
let description = 'I am an aspiring farmer and musician who hopes to develop coding skills in order to finance my ridiculous dreams.'

let interests = ['Gardening', 'Music', 'History', 'Bouldering', 'Cooking'];
let positions = [
    {
        companyName: 'I am Bham - Innovate Birmingham',
        jobTitle: 'Web Development Student',
        description: 'Learning and applying various programming languages to establish myself as a full stack web developer.'
    },
    {
        companyName: 'Hot & Hot Fish Club',
        jobTitle: 'Server Assistant',
        description: 'Assisted servers and bartenders in their functions to create a satisfying and enjoyable experience for guests'
    },
    {
        companyName: 'Pappadeaux',
        jobTitle: 'Server/Bartender',
        description: 'Provided high-level service and rapport with guests for their dining experience; crafted and/or delivered alcoholic beverages to guests'
    }
];

let skills = [
    {
        skillName: 'HTML and CSS',
        isCool: 'No'
    },
    {
        skillName: 'Javascript',
        isCool: 'Yes'
    },
    {
        skillName: 'Percussion',
        isCool: 'Yes'
    },
    {
        skillName: 'Direct Sales',
        isCool: 'Yes'
    },
    {
        skillName: 'Permaculture',
        isCool: 'Yes'
    }
];

//Create function to call position array
function displayPositions() {
    for (i = 0; i < positions.length; i++) {
        console.log('Company Name: ' + positions[i].companyName);
        console.log('Job Title: ' + positions[i].jobTitle);
        console.log('Description: ' + positions[i].description);
        console.log('\n');
    }
}

//Create function to call skills array
function displaySkills() {
    for (i = 0; i < skills.length; i++) {
        if(skills[i].isCool == 'Yes') {
            console.log('* BAM: ' + skills[i].skillName);
        }else {
            console.log('* ' + skills[i].skillName);
        }
    }
}

//Create function to display interests array
function displayInterests() {
    for (i = 0; i < interests.length; i++) {
        console.log('* ' + interests[i]);
    }
}



//Name
console.log('Name: ' + fullName);
//Career
console.log('Career: ' + career);
//Description
console.log('Description: ' + description);
console.log('\n');
//Interests
console.log('My Interests:');
displayInterests();
console.log('\n');
//Positions
console.log('My Experience:');




displayPositions();
console.log('\n' + 'My Skills:')
displaySkills();

