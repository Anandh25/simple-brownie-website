const searchicon1 = document.querySelector("#searchicon1");
const srchicon1 = document.querySelector("#srchicon1");
const search1 = document.querySelector("#searchinput1");

const searchicon2 = document.querySelector("#searchicon2");
const srchicon2 = document.querySelector("#srchicon2");
const search2 = document.querySelector("#searchinput2");

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

searchicon1.addEventListener("click", () => {
    search1.style.display = "flex";
    searchicon1.style.display = "none";
})

searchicon2.addEventListener("click", () => {
    search2.style.display = "flex";
    searchicon2.style.display = "none";
})

bar.addEventListener("click", () => {
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener("click", () => {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})