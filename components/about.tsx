export default function About() {
  const skills = ["Selenium", "Appium", "Postman", "Burp Suite", "pytest", "unittest", "Jenkins", "Git/GitHub"]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a QA Engineer with 1+ year of hands-on experience in both manual and automation testing. I specialize
              in ensuring application quality through comprehensive testing strategies, including functional,
              regression, API, and security testing.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Currently at xelpmoc tech and design, I work on web and mobile applications, automating test cases and
              identifying vulnerabilities. I'm passionate about building efficient test frameworks and collaborating
              with development teams to deliver high-quality products.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Core Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-background rounded-lg border border-border text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
