function updateElement(newString, ID) {
    document.getElementById(ID).innerHTML = newString;
    console.log("Executed")
}

function updateTitles(titles) {
    s = "I am "
    typeTime = 100;     //how quickly letters appear
    deleteTime = 100;   //how quickly letters get deleted
    waitTime = 300;     //how long after opening the page the text will start
    waitToDelete = 3000 //How long a message stays before being deleted

    for(let i = 0; i<titles.length; i++) {
        toAdd = titles[i]
        charTime = ((toAdd.length) * typeTime) + ((toAdd.length) * deleteTime)


        setTimeout(addNewTitle, waitTime, s, toAdd, typeTime)
        
        if(i < titles.length - 1) {
            setTimeout(removeTitle, (waitTime + waitToDelete), (s + toAdd), toAdd, deleteTime)
        }

        waitTime = waitTime + charTime + waitToDelete
    }

}

function addNewTitle(s, title, typeTime) {
    for (let i = 0; i < title.length; i++) {
        s = s + title.charAt(i);
        setTimeout(updateElement,(typeTime*i), s, "me")
    }
}

function removeTitle(s, title, deleteTime) {
    for (let i = 0; i < title.length; i++) {
        s = s.substring(0, s.length - 1);
        setTimeout(updateElement,(deleteTime*i), s, "me")
    }
}

////////////////////////////////////////////////////////////

let titles = ["a gamer", "a hard worker", "a dedicated learner", "the right choice."];
setTimeout(updateTitles, 1000,titles)

