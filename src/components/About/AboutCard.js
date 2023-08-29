import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aniq Shehyar Raid </span>
            from <span className="purple"> Bekasi, Indonesia.</span>
            <br />I'm 13 y.o, I'm currently learning Js and React.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you can dream it, you can do it!"{" "}
          </p>
          <footer className="blockquote-footer">Aniq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
