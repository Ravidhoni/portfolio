export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            QA Engineer & Test Automation Specialist
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Ensuring Quality Through
          <span className="gradient-text"> Precision Testing</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          1+ year of experience in manual and automation testing. Specialized in Selenium, Appium, API testing, and
          security testing. Passionate about building robust test frameworks and ensuring application excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
