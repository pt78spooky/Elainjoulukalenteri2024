
const kalenteri = document.querySelector(".kalenteri");
const calendarDays = 24;
const kuvateksti = document.querySelector(".kuvaus");

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
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#FF0000";
}

const errorMessage = (path, event) => {
    console.log("not yet "+path+".12");
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
    let kuvapolku = `./images/${pvm}.png`;

    if(day == pvm){
        door.style.boxShadow = "0px 0px 40px white";
    }

    if(day >= pvm && month == 11){
        text.addEventListener("click", openDoor.bind(null, kuvapolku));
    }
    else{
        text.addEventListener("click", errorMessage.bind(null, pvm));
    }
}