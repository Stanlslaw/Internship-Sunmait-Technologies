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
           ${itemData.sub.map(el=>`<li>${el}</li>`).join('')}
        </ul>
        </div>
    `)
}
function OpenCloseMenuItem(e){
   const headerAfter=e.currentTarget.querySelector("h2")
   const body=e.currentTarget.parentNode.querySelector(".menu-body");
   const itemId= headerAfter.getAttribute("itemId");
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

const closeMenuHandler = () => {
    mobileMenu.style.display = "none";
    openMenuButton.addEventListener("click", openMenuHandler);
    closeMenuButton.removeEventListener("click", closeMenuHandler);
};

const openMenuHandler = () => {
    mobileMenu.style.display = "block";
    openMenuButton.removeEventListener("click", openMenuHandler);
    closeMenuButton.addEventListener("click", closeMenuHandler);
};
openMenuButton.addEventListener("click", openMenuHandler);