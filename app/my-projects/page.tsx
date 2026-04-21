import ProjectCard from "@/components/ProjectCards";

const ProjectCards = () => {
  return (
    <div className="flex flex-col gap-15">
      <ProjectCard
        projectName="JWT Authentication Service"
        projectDescription="A secure JWT-based authentication and authorization system withHTTP-only cookies, refresh 
        token handling, and protected routes.Built with a structured backend architecture (controllers, services, 
        middleware) using Drizzle ORM, including validation & auth flowslike signup, login, and logout."
        projectLink="https://github.com/Yousifmaqdasi/Authentication-Authorization-Service"
        projectImage="/fabio-oyXis2kALVg-unsplash.jpg"
      ></ProjectCard>

      <ProjectCard
        projectName="JWT Authentication Service"
        projectDescription="A secure JWT-based authentication and authorization system withHTTP-only cookies, refresh 
        token handling, and protected routes.Built with a structured backend architecture (controllers, services, 
        middleware) using Drizzle ORM, including validation & auth flowslike signup, login, and logout."
        projectLink=""
        projectImage=""
      ></ProjectCard>

      <ProjectCard
        projectName="JWT Authentication Service"
        projectDescription="A secure JWT-based authentication and authorization system withHTTP-only cookies, refresh 
        token handling, and protected routes.Built with a structured backend architecture (controllers, services, 
        middleware) using Drizzle ORM, including validation & auth flowslike signup, login, and logout."
        projectLink=""
        projectImage=""
      ></ProjectCard>

      <ProjectCard
        projectName="JWT Authentication Service"
        projectDescription="A secure JWT-based authentication and authorization system withHTTP-only cookies, refresh 
        token handling, and protected routes.Built with a structured backend architecture (controllers, services, 
        middleware) using Drizzle ORM, including validation & auth flowslike signup, login, and logout."
        projectLink=""
        projectImage=""
      ></ProjectCard>
    </div>
  );
};

export default ProjectCards;
