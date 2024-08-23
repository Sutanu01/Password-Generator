//EASY CODE-->
const P1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const P2 = "0123456@._?#789"
const len = 12
let box=document.getElementById("password")

let btn=document.getElementsByTagName("button")[0]
btn.addEventListener("click",()=>{
    let password = ""
    while (password.length < len) {
        let a = P1[Math.floor(Math.random() * P1.length)]
        let b = P2[Math.floor(Math.random() * P2.length)]
        if (password.length < 9)
            password += a;
        else
            password += b;
    }
    box.value=password
})
//COPY PASSWORD CODE-->
let disp=document.getElementsByClassName("display")[0]
let image=disp.getElementsByTagName("img")[0]
image.addEventListener("click",()=>{
    image.style.width="20px"
    setTimeout(()=>{
        image.style.width="30px"
    },1000)
    box.select()
    document.execCommand("copy")
})