import ProjectCard from "@/components/ProjectCards";

const ProjectCards = () => {
  return (
    <div className="flex flex-col gap-15">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Projects I've Built</h1>

        <p className="text-sm text-muted-foreground mt-2">
          A collection of my work and experiments
        </p>
      </div>

      <ProjectCard
        projectName="JWT Authentication Service (Under Development)"
        projectDescription="A secure JWT-based authentication and authorization system withHTTP-only cookies, refresh 
        token handling, and protected routes. Built with a structured backend architecture 
        including validation & auth flows."
        projectLink="https://github.com/Yousifmaqdasi/Authentication-Authorization-Service"
        projectImage="/fabio-oyXis2kALVg-unsplash.jpg"
      ></ProjectCard>

      <ProjectCard
        projectName="ADHD-Focused Productivity App (Under Development)"
        projectDescription="A productivity application built to support users with ADHD and similar focus challenges by 
        reducing overwhelm and improving task clarity. It centralizes school assignments by syncing with APIs, 
        calendars, and communication platforms, and breaks tasks into simple, actionable steps to help users stay 
        focused and organized."
        projectLink=""
        projectImage="/mario-gogh-VBLHICVh-lI-unsplash.jpg"
      ></ProjectCard>

      <ProjectCard
        projectName="Movie & Watchlist App"
        projectDescription="A movie browsing application inspired by TMDB that allows users to explore, search, 
        and filter popular movies through an external API. The app includes features such as rating, watchlist 
        management, and user authentication, enabling users to track and organize their favorite films."
        projectLink="https://github.com/YoViking/filmkollen"
        projectImage="/myke-simon-atsUqIm3wxo-unsplash.jpg"
      ></ProjectCard>
    </div>
  );
};

export default ProjectCards;


