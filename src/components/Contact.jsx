function Contact() {
  const contactMethods = [
    {
      id: 1,
      icon: "📧",
      title: "Email",
      value: "jari.kovalainen@laurea.fi",
      href: "mailto:jari.kovalainen@laurea.fi",
    },
    {
      id: 2,
      icon: "💼",
      title: "LinkedIn",
      value: "View Profile",
      href: "https://www.linkedin.com/in/jarikovalainen/",
    },
    {
      id: 3,
      icon: "🐙",
      title: "GitHub",
      value: "View Repository",
      href: "https://github.com/Laurea-ammattikorkeakoulu-Tikkurila",
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-background"></div>
      <div className="container">
        <h2 className="section-title contact-title">Get in Touch</h2>
        <p className="contact-intro">
          Interested in collaboration, mentorship, or just want to say hello?
          Reach out through any of the following channels.
        </p>

        <div className="contact-grid">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">{method.icon}</div>
              <h3>{method.title}</h3>
              <p className="contact-value">{method.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
