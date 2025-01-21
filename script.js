for(i=0;i<100;i++){
  new_li=document.createElement("li")
  new_li.innerText="hi"
  new_li.setAttribute("class","the_li")
  document.querySelector("ul").appendChild(new_li)
}

function toggle_opacity(li_element){
    element.classList.toggle("visible")
  })
}
const recroll=(entries, observer)=>{
  entries.forEach(element=>{
    toggle_opacity(element)
  })
}

const infinitScrollObserver= new IntersectionObserver(recroll,{
  rootMargin:"5px",
  threshold: 0.0
})
