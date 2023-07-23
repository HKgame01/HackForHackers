const currentDate = document.querySelector(".current-date");

let date = new Date(),
  currYear = date.getFullYear(),
currMonth = date.getMonth;

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
  lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for(let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;  
  }
  
  for(let i = 1; i <= lastDateofMonth; i++) {
    liTag += `<li>${i}</li>`; 
  }

  for(let i = lastDateofMonth; i < 6; i++) {
  liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if(currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = newDate();
    }
    }
    renderCalendar();
  });
});
