function Thesis() {
  const steps = [
    {
      number: 1,
      icon: "💡",
      title: "Topic Selection",
      description: "Define your thesis topic and research objectives",
    },
    {
      number: 2,
      icon: "📋",
      title: "Planning & Proposal",
      description: "Develop a timeline, methodology, and proposal outline",
    },
    {
      number: 3,
      icon: "🚀",
      title: "Implementation & Guidance",
      description: "Execute your work with regular feedback and mentoring",
    },
  ];

  return (
    <section id="thesis" className="section thesis-section">
      <div className="thesis-background"></div>
      <div className="container">
        <h2 className="section-title thesis-title">Thesis Supervision</h2>
        <p className="thesis-intro">
          Supervising Bachelor's and Master's theses in web and full-stack
          development. I guide students through every stage of their thesis
          journey.
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Thesis;
