const throttleFunction=(func, delay)=>{
  let prev = 0; 
  return (...args) => {
    let now = new Date().getTime(); 
    if(now - prev> delay){ 
      prev = now;
      return func(...args);  
    }
  }
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
    var div = document.createElement("div");
    div.classList.add("imageContainer");
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';
    var img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHwxfDB8fHww")
    div.appendChild(img);
    document.body.appendChild(div);
    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration:0.6
    })
    gsap.to(img, {
        y: "100%",
        ease: Power2,
        delay: .6
    })
    setTimeout(() => {
        div.remove();
    }, 2000);

}, 400));