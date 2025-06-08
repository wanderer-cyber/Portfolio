const hamburger=document.getElementById('hamburger')
const sidebar=document.getElementById('sidebar')

hamburger.addEventListener("click",()=>{
    sidebar.classList.toggle('active');
});

document.querySelectorAll(".sidnav li a").forEach(link=>{
    link.addEventListener("click",()=>{
        sidebar.classList.toggle("active");
    });
});

AOS.init();