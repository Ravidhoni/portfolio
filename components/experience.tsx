export default function Experience() {
  const experiences = [
    {
      role: "QA Engineer (Manual & Automation)",
      company: "xelpmoc tech and design",
      period: "2024 - Present",
      description:
        "Performing functional, regression, and performance testing on web and mobile applications. Automating test cases using Selenium and Appium. Conducting API testing with Postman and Burp Suite. Working on FitnessGram project ensuring quality for both website and mobile platforms.",
    },
    {
      role: "Cybersecurity Virtual Intern",
      company: "Palo Alto Networks",
      period: "Sep - Nov 2022",
      description:
        "Conducted security assessments to identify vulnerabilities in web applications. Gained hands-on experience with Metasploit, Wireshark, Nmap, and Burp Suite. Performed ethical hacking exercises to understand penetration testing techniques.",
    },
    {
      role: "Python Development Intern",
      company: "Techno Hacks",
      period: "Jul 2023",
      description:
        "Developed Python-based projects including ATM simulator and currency converter. Improved problem-solving skills and coding efficiency through real-world applications.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors"
            >
              <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background" />

              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-accent font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-foreground/60 mb-3">{exp.period}</p>
                <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
