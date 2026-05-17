const achievements = [
  'Student teams completed mini projects in web development and intelligent systems.',
  'Department conducted technical workshops, coding activities, and seminars.',
  'Students participated in hackathons, paper presentations, and innovation events.',
];

function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="section-heading">
        <p className="eyebrow">Highlights</p>
        <h2>Achievements</h2>
      </div>

      <div className="achievement-list">
        {achievements.map((achievement, index) => (
          <article className="card achievement-card" key={achievement}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{achievement}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
