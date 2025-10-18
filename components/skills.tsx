export default function Skills() {
  const skillCategories = [
    {
      category: "Automation & Tools",
      skills: ["Selenium", "Appium", "Postman", "Burp Suite", "Jenkins", "Git", "VS Code", "PyCharm"],
    },
    {
      category: "Testing Types",
      skills: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "API Testing",
        "Security Testing",
        "Performance Testing",
      ],
    },
    {
      category: "Programming & Frameworks",
      skills: ["Python", "pytest", "unittest", "Cucumber (Knowledge)", "SQL"],
    },
    {
      category: "DevOps & Version Control",
      skills: ["Git", "GitHub", "CI/CD Basics", "Jenkins Integration"],
    },
    {
      category: "Front-End Technologies",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
    },
    {
      category: "Operating Systems",
      skills: ["Windows", "Linux"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 hover:border-accent transition-colors"
            >
              <h3 className="text-lg font-bold mb-4 text-accent">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
