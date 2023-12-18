const closeMenuButton = document.querySelector('#close-mobile-menu');
const openMenuButton = document.querySelector('#open-mobile-menu');
const mobileMenu=document.querySelector("#mobile-menu")

let OpenMenuItems=[];


const MenuData=[
    {
        header: "Why Spring",
        sub:[
            "Overview",
            "Microservices",
            "Reactive",
            "Even Driven",
            "Cloud",
            "Web Applications",
            "Serverless",
            "Batch",
        ]
    },
    {
        header: "Learn",
        sub:[
            "Overview",
            "Quickstart",
            "Guides",
            "Blog",
        ]
    },
    {
        header: "Projects",
        sub:[
            "Overview",
            "Spring Boot",
            "Spring Framework",
            "Spring Cloud",
            "Spring Cloud Data Flow",
            "Spring Data",
            "Spring Integration",
            "Spring Batch",
            "Spring Security",
            "View all projects",
            "",
            "DEVELOPMENT TOOLS",
            "Spring Tools 4",
            "Spring intializr",
        ]
    },
    {
        header: "Academy",
        sub:[
            "Courses",
            "Get Certified",
        ]
    }
]

function CreateMobileMenu(menuData){
    let MenuHtml="";
    menuData.forEach((el,index) => {
        MenuHtml+=CreateMobileMenuItem(el,index);
    });
    mobileMenu.querySelector(".mobile-menu-container").innerHTML=MenuHtml
}

function CreateMobileMenuItem(itemData,index){
    return (`
    <div class="mobile-menu-item">
        <div class="menu-header-container" onClick="OpenCloseMenuItem(event)">
            <h2 itemId="${index}">${itemData.header}</h2>
         </div>
        <ul class="menu-body" style="display: none;" itemId="${index}">
           ${itemData.sub.map(el=>`<li>${el}</li>`)}
        </ul>
        </div>
    `)
}
function OpenCloseMenuItem(e){
    e.stopPropagation()
   let headerAfter=e.currentTarget.querySelector("h2")
   let body=e.currentTarget.parentNode.querySelector(".menu-body");
   let itemId= headerAfter.getAttribute("itemId");
   if(!OpenMenuItems.includes(itemId)){
    headerAfter.style.setProperty('--arrow-rotate', '-225deg');
    body.style.display="block"
    OpenMenuItems.push(itemId);
   }
   else{
    headerAfter.style.setProperty('--arrow-rotate', '-45deg');
    body.style.display="none"
    OpenMenuItems.splice(OpenMenuItems.indexOf(itemId))
   }
   
}
CreateMobileMenu(MenuData);
closeMenuButton.addEventListener("click",()=>{
    mobileMenu.style.display="none"
})

openMenuButton.addEventListener("click",()=>{
    mobileMenu.style.display="block"
})
