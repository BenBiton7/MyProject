var myArr = [];
 
const handleData = () => {
  var myObject = new Object();
  myObject.theMission = document.getElementById("theMission").value;
  const hebrewDate = document.getElementById("dateOfMission").value.split("-");
  let newDate = ""
  if (hebrewDate.length>1) {
    newDate =  hebrewDate[2]+("/")+hebrewDate[1]+("/")+hebrewDate[0]
  } 
  myObject.dateOfMission = newDate;
  myObject.timeOfMission = document.getElementById("timeOfMission").value;
  myArr.push(myObject);
  saveItemsToStorage();
  renderData();
  makeFade(myArr.length - 1);
   document.getElementById("myForm").reset();
};
function saveItemsToStorage (){
  localStorage.setItem("Array data",JSON.stringify(myArr));
};
const renderData = () => {
  var data = "";
  var storedData = JSON.parse(localStorage.getItem("Array data"));
  if (!storedData) {
    return ; 
  }
  storedData.map((item,index) => { 
    data += `
    <div id="note-${index}" class="note">
    <button onclick="onDelete(${index})" class="delete-btn">X</button>
      <h3>${item.theMission}</h3>
      <div class="note-date">
      <p class= "date">${item.dateOfMission}</p>
      <p class="date">${item.timeOfMission}</p>
      </div>
    </div>
    `;
    document.getElementById("myRes").innerHTML = data;
  });
};
renderData();

const onDelete = (index) => {
  myArr.splice(index, 1);
  saveItemsToStorage();
  var divToRemove = document.getElementById(`note-${index}`)
  divToRemove.remove();
  renderData();
}
const makeFade = (length) => {
  var lastAddedNote = document.getElementById(`note-${length}`);
  lastAddedNote.classList.add('fade-in');
}
