
function create_element(){
    const new_li=document.createElement("li")
    new_li.innerText="hi"
    new_li.setAttribute("class","the_li")
    document.querySelector("ul").appendChild(new_li)
    retrun new_li
}

const recroll=(entries, observer)=>{
    if (entries.isIntersecting){
        const new_element=create_element()
        infiniteScrollObserver(new_element)
    }
}


const infiniteScrollObserver= new IntersectionObserver(recroll,{
    rootMargin:"5px",
    threshold: 0.0
})

for(i=0;i<100;i++){
    const the_new=create_element()
    infiniteScrollObserver.observe(the_new)
}

document.querySelectorAll("the_li").forEach(new_li=>{
      infinitScrollObserver.observe(new_li)
})
