import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  <span className="home-text">Do Less.</span>
                  <br></br>
                  <span>Care More.</span>
                  <br></br>
                </h1>
                <span className="home-caption">
                  Effortlessly transform doctor-patient conversations into EHRs,
                  say good bye to manual prescription writing with our
                  speech-to-prescription tech, and explore our medical case
                  studies.
                </span>
              </header>
              <div className="home-buttons"></div>
            </main>
            <div className="home-highlight"></div>
          </div>
          <div className="home-image"></div>
        </div>
      </section>
      <section className="home-section1">
        <header className="home-header1">
          <header className="home-left">
            <span className="section-head">
              <span>Generative ai in healthcare</span>
              <br></br>
            </span>
            <h2 className="home-heading1 section-heading">Our Services</h2>
          </header>
          <div className="home-right"></div>
        </header>
        <main className="home-cards">
          <section className="home-card">
            <main className="home-content1">
              <h1 className="home-header2">Effortless EHR Documentation</h1>
              <p className="home-description">
                <span>
                  Effortlessly convert patient conversations into clear and
                  accurate Electronic Health Record (EHR) documents
                </span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </p>
            </main>
          </section>
          <section className="home-card1">
            <main className="home-content2">
              <h1 className="home-header3">
                <span>Speech To Prescription</span>
                <br></br>
              </h1>
              <p className="home-description1">
                <span>
                  {' '}
                  Simplify prescription writing with voice recognition
                  technology, convert speech to prescription in real time
                </span>
                <br className="home-text14"></br>
                <br></br>
                <br></br>
                <br></br>
              </p>
            </main>
          </section>
          <section className="home-card2">
            <main className="home-content3">
              <h1 className="home-header4">Explore Medical Cases Studies</h1>
              <p className="home-description2">
                <span>
                  {' '}
                  Access our rich respository of real medical cases to stay
                  informed and make informed decisions, providing healthcare
                  professionals with valuable insights 
                </span>
                <br className="home-text19"></br>
                <br></br>
              </p>
            </main>
          </section>
        </main>
      </section>
      <section className="home-section3">
        <div className="home-cube"></div>
        <div className="home-help"></div>
      </section>
      <section className="home-section4">
        <main className="home-content4">
          <header className="home-header5">
            <div className="home-buttons1"></div>
            <h2 className="home-heading2 section-heading">
              Say goodbye to manual prescription writing !
            </h2>
            <img alt="image" src="/3-700w.png" className="home-image1" />
          </header>
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content5">
          <main className="home-main-content">
            <div className="home-content6">
              <header className="home-main1">
                <div className="home-header6">
                  <span className="home-text21 Heading">Vantali AI</span>
                  <span className="home-text22">
                    Ready to get more from your conversations?
                  </span>
                </div>
                <div className="home-socials"></div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text23">
                © 2022 Vantali AI. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main2">
              <h1 className="home-heading3">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy button">
                  <span className="home-text24">-&gt;</span>
                  <span className="home-text25">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
          </main>
          <section className="home-copyright1">
            <span className="home-text28">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container2">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
