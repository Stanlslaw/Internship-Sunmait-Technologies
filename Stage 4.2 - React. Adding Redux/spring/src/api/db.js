import springBootImage from "./images/spring-boot.svg"
import springCloudImage from "./images/spring-cloud.svg"
import springDataImage from "./images/spring-data.svg"
import springDataFlowImage from "./images/spring-data-flow.svg"
import springFrameworkImage from "./images/spring-framework.svg"
import springSecurityImage from "./images/spring-security.svg"

const CardsData =
    [
        {
            cardHeader: "Spring Boot",
            cardDescription:" Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
            cardImage: springBootImage
        },
        {
            cardHeader: "Spring Framework",
            cardDescription:"Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
            cardImage: springFrameworkImage
        },
        {
            cardHeader: "Spring Data",
            cardDescription:"Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
            cardImage: springDataImage
        },
        {
            cardHeader: "Spring Cloud",
            cardDescription:"Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
            cardImage: springCloudImage
        },
        {
            cardHeader: "Spring Cloud Data Flow",
            cardDescription:"Provides an orchestration service for composable data microservice applications on modern runtimes.",
            cardImage: springDataFlowImage
        },
        {
            cardHeader: "Spring Security",
            cardDescription:" Protects your application with comprehensive and extensible authentication and authorization support.",
            cardImage: springSecurityImage
        },

    ]

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
        },
        {
            header: "Solutions",
            sub:[
                "Overview",
                "Spring Runtime",
                "Spring Consulting",
                "Spring Academy For Teams",
                "Spring Advisories",
            ]
        },
        {
            header: "Community",
            sub:[
                "Overview",
                "Events",
                "Team"
            ]
        }
    ]
    

export {CardsData,MenuData}