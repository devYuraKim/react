import "./App.css";

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
      <Skill name="React😀" color="blue" />
      <Skill name="Spring Boot😀" color="green" />
      <Skill name="Java😀" color="brown" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      <h1>{props.name}</h1>
    </div>
  );
}

export default App;
