import { Lock } from "lucide-react";

const page = () => {
  return (
    <div>
      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-6">
          Featured Work
        </h2>

        <div className="bg-card border border-border py-8 px-5 rounded-xl">
          <h3 className="font-medium mb-1 flex items-center justify-center gap-2">
            JWT Authentication Service
            <Lock className="w-4 h-4" />
          </h3>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            <span className="block my-2 font-semibold text-black text-xs">
              (Currently Under Development)
            </span>
            A secure JWT-based authentication and authorization system with
            HTTP-only cookies, refresh token handling, and protected routes.
            Built with a structured backend architecture (controllers, services,
            middleware) using Drizzle ORM, including validation & auth flows
            like signup, login, and logout.
          </p>

          <a
            className="text-sm text-primary font-medium"
            href="https://github.com/Yousifmaqdasi/Authentication-Authorization-Service"
            target="_blank"
          >
            Take me to project →
          </a>
        </div>
      </section>
    </div>
  );
};

export default page;
