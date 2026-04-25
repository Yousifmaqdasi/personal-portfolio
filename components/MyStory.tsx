const MyStory = () => {
  return (
    <section className="text-left p-7 rounded-xl md:text-center md:w-4/5">
      <h2 className="text-xl font-semibold tracking-tight mb-5.5 ">
        My Journey Into Full-Stack Development
      </h2>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 m-auto">
        My name is Yousif. I’m 23 years old and currently an aspiring full-stack
        developer.
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 m-auto">
        My journey started as a curiosity and over time, it became something
        that I now genuinely enjoy. I like figuring things out, solving problems
        and pushing myself to the fullest.
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        I’m currently focused on growing as a full-stack developer and am
        actively seeking an internship (LIA) between December 2026 and May 2027.
        If you’d like to connect or learn more about my work, feel free to reach
        out via email:
      </p>

      <a
        href="mailto:yousifmaqdasi@icloud.com"
        className="block text-primary underline hover:opacity-80 text-sm mb-2"
      >
        yousifmaqdasi@icloud.com
      </a>

      <p className="text-sm text-muted-foreground">
        You can also connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/yousif-maqdasi-731578382/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:opacity-80"
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
};

export default MyStory;
