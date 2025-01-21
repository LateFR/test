function create_element(position){
    let new_li=document.createElement("li")
    new_li.innerText="hi"
    new_li.setAttribute("class","the_li")
    const ul =document.querySelector("ul")
    if(position=="top"){
        ul.insertBefore(new_li,ul.firstChild)
    }else{
        ul.appendChild(new_li)
    }
    return new_li
}


const recroll=(entries, observer)=>{
    entries.forEach(entry => {
        console.log(entry.target.id)
        if (entry.isIntersecting){
            let position = entry.target.getBoundingClientRect().top < 0 ? "top":"bottom"
            const new_element=create_element(position)
            infiniteScrollObserver.observe(new_element)
            entry.target.remove()
        }

    })
}

const infiniteScrollObserver= new IntersectionObserver(recroll,{
    rootMargin:"5px",
    threshold: 0.5
})

for(i=0;i<100;i++){
    const the_new=create_element()
    infiniteScrollObserver.observe(the_new)
}
