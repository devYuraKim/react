import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      {faqs.map((faq) => (
        <Accordion faq={faq} />
      ))}
    </div>
  );
}

function Accordion({ faq }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="accordion">
      <div
        className={`item ${clicked ? "open" : ""}`}
        onClick={() => setClicked(!clicked)}
      >
        <div className="number">number</div>
        <div className="title">{faq.title}</div>
        <div className="icon"> {clicked ? "➖" : "➕"}</div>

        {clicked ? (
          <>
            <div className="content-box">{faq.text}</div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
