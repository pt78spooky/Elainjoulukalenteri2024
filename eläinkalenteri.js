
const kalenteri = document.querySelector(".kalenteri");
const calendarDays = 24;
const kuvateksti = document.querySelector(".kuvaus");
const ilmoitus = document.querySelector(".ilmoitus");

const date = new Date();
const currentDate = date.toLocaleString();
let time = currentDate.slice(0, currentDate.indexOf(" "));
let day = currentDate.slice(0, currentDate.indexOf("."));
day = Number(day);
let month = time.slice(time.indexOf(".")+1, time.lastIndexOf("."));
console.log("day: "+day+" month: "+month);

const openDoor = (path, event) => {
    event.target.parentNode.style.border = "5px solid rgb(255, 0, 0)";
    event.target.parentNode.style.backgroundColor = "rgba(0, 0, 0, 0)";
    event.target.parentNode.style.backgroundImage = `url(./images/${path}.png)`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#FF0000";
}

const errorMessage = (path, event) => {
    const popup = document.createElement('div');
    popup.classList.add("popup");
    ilmoitus.appendChild(popup);
    popup.innerHTML = "Ei ole vielä "+path+".12.";
}

for(let i=0; i<calendarDays; i++){
    const door = document.createElement('div');
    const text = document.createElement("div");

    door.id = `l${i}`;
    door.classList.add("luukut")
    kalenteri.appendChild(door);

    text.classList.add("text");
    text.innerHTML = i+1;
    door.appendChild(text   );

    pvm = i + 1;

    if(day == pvm){
        door.style.animationName = "glowBox";
        door.style.animationDuration = "2s";
        door.style.animationIterationCount = "infinite";
    }

    if(day >= pvm && month == 12){
        text.addEventListener("click", openDoor.bind(null, pvm));
    }
    else{
        text.addEventListener("click", errorMessage.bind(null, pvm));
    }
}
