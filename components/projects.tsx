export default function Projects() {
  const projects = [
    {
      title: "API Testing Automation Platform",
      description:
        "A tool that makes testing APIs easier and faster. It combines everything you need - test creation, management, and reporting - all in one place. Built with React and FastAPI, it lets you record browser tests automatically and see results in real-time.",
      tags: ["React", "FastAPI", "Playwright", "Pytest", "SQLAlchemy", "TailwindCSS", "Recharts"],
      highlights: [
        "All-in-one testing platform - replaces multiple tools",
        "Fast test execution with smart backend processing",
        "Automatic browser test recording - no manual coding needed",
        "Live dashboard showing test results and performance",
        "Ready for team collaboration and CI/CD pipelines",
      ],
    },
    {
      title: "FitnessGram - Web & Mobile Testing",
      description:
        "Tested a fitness app on both website and mobile to make sure it works perfectly. Automated the most important tests to save time, and checked for security issues to keep user data safe.",
      tags: ["Selenium", "Appium", "Postman", "Burp Suite", "Manual Testing"],
      highlights: [
        "Automated 70% of tests - less manual work",
        "Cut testing time in half with smart automation",
        "Found 85% of bugs before users saw them",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Featured Projects</h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed text-lg">{project.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-accent">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
