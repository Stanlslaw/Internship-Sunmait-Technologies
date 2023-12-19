const ProjectSearch = document.querySelector("#search-projects-cards");
const ProjectsListRoot =document.querySelector("#projects-list");

const CardsData =
    [
        {
            cardHeader: "Spring Boot",
            cardDescription:" Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
            cardImagePath:"./icons/spring-boot.svg"
        },
        {
            cardHeader: "Spring Framework",
            cardDescription:"Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
            cardImagePath:"./icons/spring-framework.svg"
        },
        {
            cardHeader: "Spring Data",
            cardDescription:"Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
            cardImagePath:"./icons/spring-data.svg"
        },
        {
            cardHeader: "Spring Cloud",
            cardDescription:"Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
            cardImagePath:"./icons/spring-cloud.svg"
        },
        {
            cardHeader: "Spring Cloud Data Flow",
            cardDescription:"Provides an orchestration service for composable data microservice applications on modern runtimes.",
            cardImagePath:"./icons/spring-data-flow.svg"
        },
        {
            cardHeader: "Spring Security",
            cardDescription:" Protects your application with comprehensive and extensible authentication and authorization support.",
            cardImagePath:"./icons/spring-security.svg"
        },

    ]

function CreateProjectListCard({cardHeader,cardDescription,cardImagePath}){
    return (`
    <article class="project-card">
        <a class="card-container" href="#">
            <div class="card-image-container">
                 <img src="${cardImagePath}"/>
            </div>
            <h1 class="card-h">
                ${cardHeader}
            </h1>
            <p class="card-desc">
                ${cardDescription}
            </p>
         </a>
    </article>
    `)
}
function CreateProjectList(data){
    if(data.length===0){
        ProjectsListRoot.innerHTML="<h2 style=\"text-align: center;width:100%; font-family: 'Open Sans',sans-serif;\">No results</h2>"
        return;
    }
    let childrenHtml="";
    data.forEach(el => {
        childrenHtml+=CreateProjectListCard(el);
    });
    ProjectsListRoot.innerHTML=childrenHtml;
}
function FilterProjectsList(data,searchText){
    return data.filter(el=>{
        return  el.cardHeader.toLowerCase().includes(searchText.toLowerCase())
    })
}
function HandleInput(text){
    if(text.length!==0){
        CreateProjectList(FilterProjectsList(CardsData,text))
    }
    else{
        CreateProjectList(CardsData)
    }
}
function debounce(func, ms) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
  }

ProjectSearch.addEventListener('input',debounce((e)=>HandleInput(e.target.value),300))
CreateProjectList(CardsData)





