
function create_element(){
    new_li=document.createElement("li")
    new_li.innerText="hi"
    new_li.setAttribute("class","the_li")
    document.querySelector("ul").appendChild(new_li)
    retrun new_li
}

const recroll=(entries, observer)=>{
    if (entries.isIntersecting){
        new_li=create_element()
        infiniteScrollObserver(new_li)
    }
}


const infiniteScrollObserver= new IntersectionObserver(recroll,{
    rootMargin:"5px",
    threshold: 0.0
})

for(i=0;i<100;i++){
    new_li=create_element()
    infiniteScrollObserver.observe(new_li)
}

document.querySelectorAll("the_li").forEach(new_li=>{
      infinitScrollObserver.observe(new_li)
})
