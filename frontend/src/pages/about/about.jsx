import React from "react";
import Header from "../../components/navHeader/navHeader.jsx";
import Footer from "../../components/Footer/footer";
import "./about.scss";

import ModalMenuPage from "../../components/modalMenuMobile/modalMenu.jsx";

export default function about(props) {
  const { modalState, setModalState } = props;
  return (
    <>
      <Header modalState={modalState} setModalState={setModalState} />
      <div className="about">
        <div className="aboutText">
          <h2 className="aboutTitle">About</h2>
          <p className="text">
            thanks for snapping a look. Let's get in touch!
          </p>
          <div className="link">
            <span class="icon">&#8618;</span>
            <a href="https://www.linkedin.com/in/luis-abraham-velazquez-angulo-73a8ab1a6/">
              Linkedin
            </a>
          </div>
          <div>
            <span class="icon">&#8618;</span>
            <a href="luisabraham.velazquez@gmail.com">Email</a>
          </div>
        </div>
        <div className="aboutTopycs">
          <div className="aboutMySelf">
            <div className="imgMySelf">
              <img src="/images/personal_gallery_3.png" alt="gallery_1" />
              <img src="/images/personal_gallery_5.jpg" alt="gallery_5" />
            </div>
            <div className="textMySelf">
              <h1>Hi there, I'm Abraham.</h1>
              <p>
                Just a little bit about me— My name is Abraham Velazquez,
                originally from Guaymas and currently residing in Toronto,
                Canada. I'm deeply passionate about engineering, specializing in
                mechatronics, and web development. Constantly seeking new
                knowledge and embracing challenges are driving forces in my
                life.
              </p>
              <p>
                In addition to my professional pursuits, I find solace and
                fulfillment in my hobbies. Embracing a fitness lifestyle not
                only nourishes my body but also nurtures my mind, instilling
                discipline and resilience that transcend into every aspect of my
                life. Personal growth is a journey I embark on daily, exploring
                new avenues of self-improvement and discovering the limitless
                potential within myself.
              </p>
              <p>
                In my free time, you'll find me coding and exploring new
                projects. I'm driven by a relentless pursuit of innovation and
                excellence, always eager to make a difference."
              </p>
            </div>
          </div>
          <div className="believeIt">
            <h1>I Believe that...</h1>
            <p>
              Technology should seamlessly integrate into our lives. My passion
              lies in leveraging my skills in mechatronics engineering and web
              development to simplify and enhance people's daily experiences. By
              combining technical expertise with creativity and empathy, I
              strive to create solutions that empower individuals to overcome
              challenges and write their own success stories
            </p>
          </div>
          <div className="thoughts">
            <img src="/images/personal_gallery_1.png" alt="gallery_1" />
            <h1>The world</h1>
            <p>
              The universe has always been my greatest muse, influencing every
              aspect of my design journey. Whether drawing inspiration from the
              natural world, exploring architectural marvels, or learning from
              the diverse perspectives of mentors, colleagues, and friends, I
              find endless creativity and guidance in the world around me.
            </p>
            <p>
              My personal story and identity are deeply intertwined with the
              rich tapestry of experiences the world offers. With each new
              chapter, I eagerly anticipate the opportunities for growth and
              discovery that lie ahead.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ModalMenuPage modalState={modalState} setModalState={setModalState} />
    </>
  );
}
