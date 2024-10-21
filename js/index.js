// get your html file and js file linked up (using console log)
console.log('hitting script file');

// create a getInputValue function that: 
// - takes in a parameter called 'id'
// - grabs the input using the id parameter
// - returns the value of the input
// reuse this function to get all 5 input values
const getInputValue = (id) => {
    const input = document.getElementById(id);
    return input.value;
}

// create a generateMadLibs function that will generate the mad libs message AND show it to users
const generateMadLibs = () => {
    // build mad libs text
    const typeOfBird = getInputValue('typeOfBird');
    const roommateName = getInputValue('roommateName');
    const noun = getInputValue('noun');
    const liquid = getInputValue('liquid');
    const bodyPart = getInputValue('bodyPart');

    const madLibs = `It was a cold October day. I woke to the smell of ${typeOfBird} roasting in the kitchen.
    My roommate said, "See if ${roommateName} needs a fresh ${noun}." 
    So I carried a glass of ${liquid} into ${roommateName}'s room.
    When I got there, I couldn't believe my ${bodyPart}!`;

    // show mad libs text to users
    const madLibsText = document.getElementById('mad-libs');
    madLibsText.textContent = madLibs;
}