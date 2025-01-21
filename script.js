function create_element(){
    let new_li=document.createElement("li")
    new_li.innerText="hi"
    new_li.setAttribute("class","the_li")
    document.querySelector("ul").appendChild(new_li)
    return new_li
}

const recroll=(entries, observer)=>{
    entries.forEach(entry => {
        console.log(entry.target.id)
        if (entry.isIntersecting){
            const new_element=create_element()
            infiniteScrollObserver.observe(new_element)
        }
    }
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
