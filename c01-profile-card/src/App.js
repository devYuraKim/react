import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="logo192.png" alt="logo"></img>;
}

function Intro() {
  return (
    <div>
      <h1>I have no idea</h1>
      <p>is this supposed to be where the body tag should be?</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div style={{ backgroundColor: skill.color }} className="skill">
      <h1>
        {skill.skill}{" "}
        {skill.level === "advanced"
          ? "💪🏻"
          : skill.level === "intermediate"
          ? "👍🏻"
          : "👼🏻"}
      </h1>
    </div>
  );
}

export default App;
