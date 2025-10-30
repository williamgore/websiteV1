function updateElement(newString, ID) {
    document.getElementById(ID).innerHTML = newString;
}

function updateTitles(titles) {
    s = "I am "
    typeTime = 125;     //how quickly letters appear - higher = slower
    deleteTime = 100;   //how quickly letters get deleted - higher = slower
    waitTime = 300;     //how long after opening the page the text will start
    waitToDelete = 3000 //How long a message stays before being deleted

    //looping through the array of strings
    for(let i = 0; i<titles.length; i++) {
        toAdd = titles[i]
        charTime = ((toAdd.length) * typeTime) + ((toAdd.length) * deleteTime)

        //this types out the letters
        setTimeout(addNewTitle, waitTime, s, toAdd, typeTime)
        
        //this deletes the letters, unless its the last one
        //then it will stay
        if(i < titles.length - 1) {
            setTimeout(removeTitle, (waitTime + waitToDelete), (s + toAdd), toAdd, deleteTime)
        }

        waitTime = waitTime + charTime + waitToDelete
    }

}

//types out a string
function addNewTitle(s, title, typeTime) {
    for (let i = 0; i < title.length; i++) {
        s = s + title.charAt(i);
        setTimeout(updateElement,(typeTime*i), s, "me")
    }
}

//deletes the string
function removeTitle(s, title, deleteTime) {
    for (let i = 0; i < title.length; i++) {
        s = s.substring(0, s.length - 1);
        setTimeout(updateElement,(deleteTime*i), s, "me")
    }
}

////////////////////////////////////////////////////////////

let titles = ["a problem solver", "a people person", "a dedicated learner", "the right choice."];
updateTitles(titles)

