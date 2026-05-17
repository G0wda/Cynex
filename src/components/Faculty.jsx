const facultyMembers = [
  {
    name: 'Prof Vasudev S Shahapur',
    role: 'Head of the Department',
    focus: 'IoT & Embedded Systems',
  },
  {
    name: 'Prof. Fayaz Ahmed Sheik',
    role: 'Assistant Professor',
    focus: 'Web Technologies, Database Systems',
  },
  {
    name: 'Prof. Joytibha R Chichankar',
    role: 'Assistant Professor',
    focus: 'ToC , AI and Computer Vision',
  },
  {
    name: 'Prof. Savitha S K',
    role: 'Assistant Professor',
    focus: 'Cybersecurity and VAPT',
  },
];

function Faculty() {
  return (
    <section className="section alt-section" id="faculty">
      <div className="section-heading">
        <p className="eyebrow">Team</p>
        <h2>Faculty</h2>
      </div>

      <div className="grid">
        {facultyMembers.map((member) => (
          <article className="card faculty-card" key={member.name + member.focus}>
            <div className="avatar-placeholder">{member.name.charAt(0)}</div>
            <h3>{member.name}</h3>
            <p className="muted">{member.role}</p>
            <p>{member.focus}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Faculty;
