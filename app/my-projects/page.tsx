import ProjectCard from "@/components/ProjectCard";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-15 mt-15">
      <div className="flex flex-col items-center px-4">
        <div className="max-w-3xl text-center space-y-6">
          <span className="text-base tracking-widest font-medium bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            PORTFOLIO
          </span>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-2">
            Projects I've Built 
          </h1>

          <p className="text-muted-foreground text-sm">(And actively improving)</p>

          <p className="text-base text-muted-foreground leading-relaxed">
            My collection of projects, experiments, and systems I've built while
            growing as a developer.
          </p>

          <p className="hidden md:block text-base text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
            I design and build both frontend experiences and backend systems,
            from clean, responsive interfaces to authentication flows and
            scalable APIs.
          </p>
        </div>
      </div>

      <div className="space-y-15 md:flex md:flex-row md:flex-wrap gap-9 md:m-8">
        <ProjectCard
          projectName="JWT Authentication Service (Under development) "
          projectDescription="A secure JWT-based authentication and authorization system with HTTP-only cookies, refresh 
          token handling, and protected routes. Built with a structured backend architecture 
          including validation and auth flows such as authenticating users and managing user sessions, 
          while emphasizing security best practices and scalable design patterns."
          projectLink="https://github.com/Yousifmaqdasi/Authentication-Authorization-Service"
          projectImage="/fabio-oyXis2kALVg-unsplash.jpg"
        />

        <ProjectCard
          projectName="ADHD-Focused Productivity App (Under development) "
          projectDescription="A productivity application designed to support users with ADHD and similar focus challenges by 
          reducing overwhelm and improving task clarity. It centralizes school assignments by syncing with APIs, 
          calendars, and communication platforms, and breaks tasks into simple, actionable steps to help users stay 
          focused and organized while maintaining a clean and intuitive user experience."
          projectLink=""
          projectImage="/mario-gogh-VBLHICVh-lI-unsplash.jpg"
        />

        <ProjectCard
          projectName="Movie & Watchlist App"
          projectDescription="A movie browsing application inspired by TMDB that lets users explore, search, and filter 
          popular movies using an external API. The app includes features like rating and watchlist management, so users 
          can keep track of movies they like or want to watch later, while practicing API integration and building 
          interactive, user-friendly interfaces."
          projectLink="https://github.com/YoViking/filmkollen"
          projectImage="/myke-simon-atsUqIm3wxo-unsplash.jpg"
        />

        <ProjectCard
          projectName="Accounting & Consulting App"
          projectDescription="A simple web application for an accounting and consulting business. While the functionality 
          is minimal and the design intentionally straightforward, the project was built for a real use case and provided 
          practical value by serving as a hands-on opportunity to strengthen my skills in layout structure, 
          reusable components, and building clear, user-friendly interfaces."
          projectLink="https://www.neoekonomi.se/"
          projectImage="/sean-pollock-PhYq704ffdA-unsplash.jpg"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
