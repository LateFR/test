for(i=0;i<100;i++){
  new_li=document.createElement("li")
  new_li.innerText="hi"
  new_li.setAttribute("class","the_li")
  document.querySelector("ul").appendChild(new_li)
}

function toggle_opacity(){
  li_elements=document.querySelectorAll(".the_li")
  li_elements.forEach((element)=>{
    element.classList.toggle("visible")
  })
}
