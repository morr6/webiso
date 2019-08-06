var members = [
  {name:"1"},{name:"Zac Efron"},{name:"3"},
  {name:"4"},{name:"5"},{name:"Jane Hunt"},
  {name:"7"},{name:"8"},{name:"9"},
  {name:"10"},{name:"11"},{name:"12"},
  {name:"13"},{name:"Emma Watson"},{name:"15"},
  {name:"16"},{name:"17"},{name:"18"},
  {name:"19"},{name:"20"},{name:"21"}
];

(function() {
  var membersWrapper = document.getElementsByClassName('membersImages')[0];
  
  membersWrapper.innerHTML += members.map(member => 
    "<img class=\"memberImage\" data-name=\""+member.name+"\" onMouseOver=\"onMemberHover(event)\" src=\"assets/membersImages/"+member.name+".png\" />"  
  )
})()

function onMemberHover(event) {
  var memberName = document.getElementsByClassName('memberName')[0];

  memberName.innerHTML = event.target.dataset.name
  console.log(event.target.dataset.name)
}