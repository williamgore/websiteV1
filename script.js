function updateElement(newString, ID) {
    document.getElementById(ID).innerHTML = newString;
    console.log("Executed")
}

function updateTitles(titles) {
    s = "I am "
    waitTime = 0;
    waitToDelete = 3000

    for(let i = 0; i<titles.length; i++) {
        toAdd = titles[i]
        charTime = ((toAdd.length) * 100) * 2


        setTimeout(addNewTitle, waitTime, s, toAdd)
        
        if(i < titles.length - 1) {
            setTimeout(removeTitle, (waitTime + waitToDelete), (s + toAdd), toAdd)
        }

        waitTime = waitTime + charTime + waitToDelete
    }

}

function addNewTitle(s, title) {
    for (let i = 0; i < title.length; i++) {
        s = s + title.charAt(i);
        setTimeout(updateElement,(100*i), s, "me")
    }
}

function removeTitle(s, title) {
    for (let i = 0; i < title.length; i++) {
        s = s.substring(0, s.length - 1);
        setTimeout(updateElement,(100*i), s, "me")
    }
}

////////////////////////////////////////////////////////////

let titles = ["a gamer", "a hard worker", "a dedicated learner", "the right choice."];
setTimeout(updateTitles, 1000,titles)

