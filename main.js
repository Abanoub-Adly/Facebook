let FacebookIcons = Array.from(document.querySelectorAll(".facebook-icons .icon"));
let MainInfoIcons = Array.from(document.querySelectorAll(".main-info .m-info"));
let input = document.getElementById("box");
let body = document.querySelector("body");
input.addEventListener("change",(e)=>{
    if(e.currentTarget.checked === true){
        body.classList.add("dark");
    }else{
        body.classList.remove("dark");
    }
})
FacebookIcons.forEach((icon)=>{
    icon.addEventListener("click",(e)=>{
        remove_all_Active();
        e.currentTarget.classList.add("active");
    })
})
MainInfoIcons.forEach((info)=>{
    info.addEventListener("click",(e)=>{
        removeActives();
        e.currentTarget.classList.add("m-info-active");
    })
})
function remove_all_Active(){
    FacebookIcons.forEach((icon)=>{
        icon.classList.remove("active");
    })
}
function removeActives(){
    MainInfoIcons.forEach((info)=>{
        info.classList.remove("m-info-active");
    })
}