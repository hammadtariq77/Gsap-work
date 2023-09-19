var main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")

main.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.x+"px"
    cursor.style.top=e.y+"px"
console.log(e.x)
})
gsap.to('#page1 #text',{
    transform:'translateX(-128%)',
   scrollTrigger:{
        trigger:"#page1 ",
        scroller:"body",
        markers:true,
        start:'top 0',
        end:"top -250%",
        scrub:2,
        pin:true
        
    }
    
})


