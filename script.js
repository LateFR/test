function create_element(position){
    let new_li=document.createElement("li")
    new_li.innerText="hi"
    new_li.setAttribute("class","the_li")
    const=document.querySelector("ul")
    if(position=="top"){
        ul.appendChild(new_li)
    }else{
        ul.insertBefore(new_li,ul.firstChild)
    }
    return new_li
}


const recroll=(entries, observer)=>{
    entries.forEach(entry => {
        console.log(entry.target.id)
        if (entry.isIntersecting){
            position = entry.boundingClientRect.top? "top":"bottom"
            const new_element=create_element(position)
            infiniteScrollObserver.observe(new_element)
            entry.remove()
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

console.log("yoooo")
