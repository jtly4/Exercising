// Creating a map for exercises
var exercises = new Map([
    ["Chest", ["Bench Press", "Incline Dumbbell", 
            "Pec Fly", "Dumbell Incline Chest Press"]],
    ["Shoulder", ["Lateral Raises", "Dumbell Overhead Press", "Rear Delt Flies"]],
    ["Back", ["Lat Pulldowns", "Seated Cable Row", "Unilateral Seated Row"]],
    ["Bicep", ["Dumbell Curls", "Hammer Curls", "Preacher Curls"]],
    ["Tricep", ["Tricep pushdowns", "Skullcrushers", "Dips"]],
    ["Quadricep", ["Squat", "Leg Extension", "Bulgarian Split Squat"]],
    ["Hamstring", ["Leg Curl", "Romanian Deadlift"]],
    ["Glute", ["Hip Thrust", "Weighted Lunge"]],
    ["Calf", ["Calf Raises"]],
    ["Abdominals", ["Situps", "Roll Outs", "Crunches", "Leg Lifts"]]
]);

/*
var exercises2 = new Map([
    [["Bench Press", "Incline Dumbbell", 
    "Pec Fly", "Dumbell Incline Chest Press"], "Chest" ],
    [["Lateral Raises", "Dumbell Overhead Press", "Rear Delt Flies"], "Shoulder"],
    [["Lat Pulldowns", "Seated Cable Row", "Unilateral Seated Row"], "Back"],
    [["Dumbell Curls", "Hammer Curls", "Preacher Curls"], "Bicep"],
    [["Tricep pushdowns", "Skullcrushers", "Dips"], "Tricep"],
    [["Squat", "Leg Extension", "Bulgarian Split Squat"], "Quadricep"],
    [["Leg Curl", "Romanian Deadlift"], "Hamstring"],
    [["Hip Thrust", "Weighted Lunge"], "Glute"],
    [["Calf Raises"], "Calf"],
    [["Situps", "Roll Outs", "Crunches", "Leg Lifts"], "Abdominals"]
]);
*/

var muscleImages = new Map([
    ["Chest", "images/muscle/chest.png"],
    ["Abdominals", "images/muscle/abdominals.png"],
    ["Bicep", "images/muscle/bicep.png"],
    ["Quads", "images/muscle/quads.png"],
    ["Shoulder", "images/muscle/shoulder.png"],
    ["Back", "images/muscle/back.png"],
    ["Calf", "images/muscle/calf.png"],
    ["Glutes", "images/muscle/glutes.png"],
    ["Hamstring", "images/muscle/hamstring.png"],
    ["Tricep", "images/muscle/tricep.png"],
])

var exerciseList;
var muscleGroupImg;
var muscleName;


function showCards() {
    const cardContainer = document.getElementById("exercise_card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".exercise_card");

    // traverse keys of map
    for (const musGroup of exercises) {
        
        // identifies muscle group
        let muscleName = musGroup;
        // retrieves values/exercises
        let exerciseList = exercises.get(musGroup);

        //traverse keys of images
        for (const muscle of muscleImages){
            // if it is the same muscle group, retrieve the img
            if (exercises[musGroup] == muscleImages[muscle]) {
                let muscleGroupImg = muscleImages.get(muscle);
            }
        }
        
        const nextCard = templateCard.cloneNode(true);
        editCardMuscle(card, muscleName, muscleGroupImg, exerciseList);
        cardContainer.appendChild(nextCard);
    }

    
}


// adds a title and image and exercise list
function editCardMuscle(card, muscle, muscleImage, exList) {
    card.style.display = "block";
    
    // card titled after muscle
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = muscle;

    // card image of muscle
    const cardImage = card.querySelector("img");
    cardImage.src = muscleImage;
    cardImage.alt = muscle + " Muscle";

    // card content
    const cardExercises = card.querySelector("p");
    cardContent = exList;    
}


// This calls the addCards() function when the page is first loaded
document.addEventListener("ExercisesContentLoaded", showCards);

/*
// This is an array of strings (TV show titles)
let titles = [
    "Fresh Prince of Bel Air",
    "Curb Your Enthusiasm",
    "East Los High",
    "My Story"
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = FRESH_PRINCE_URL;
        } 
        else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } 
        else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        }
        else if (i == 3) {
            imageURL = MY_STORY_URL;
        }


        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
*/