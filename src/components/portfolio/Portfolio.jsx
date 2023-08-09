import React from "react";
import "./PortfolioStyle.css";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio-page">
      <div className="port-container">
        <div class="portfolio-header">Portfolio</div>
        <div className="portfolio-section">
          <div className="portfolio-content normal-wrap">
            <div className="portfolio-words">
              <div className="portfolio-name">Habitilist</div>
              <div className="portfolio-desc">
                <p>
                  A final software engineering project made by me, Hubert Louie,
                  and Darryl Xavier. Habitilist is a web app that can record
                  your to do list and Habits in such an easy way. What differs
                  this app from others is its <b>point feature</b> which you
                  will get after completing a habit or to do list. You can use
                  the points to be able to level up your in game character which
                  motivates you more to finish your habits and to do list.
                </p>
              </div>
              <div className="made-with">
                <p>Made with ASP.NET (C#) and CSS</p>
              </div>
              <div className="external-link">
                <a
                  href="https://github.com/Osiris181/Habitilist"
                  target="_blank"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
              </div>
            </div>
            <div className="portfolio-img">
              <img src="./habitilist.png" alt="habitilist" />
            </div>
          </div>
        </div>

        <div className="portfolio-section">
          <div className="portfolio-content reverse">
            <div className="portfolio-img init">
              <img src="./store-del-luna.png" alt="store-del-luna" />
            </div>
            <div className="portfolio-words luna">
              <div className="portfolio-name">
                Store Del <br />
                Luna
              </div>
              <div className="portfolio-desc hci">
                A final Human and Computer Interaction project created by me,
                Reyhan Firmanda, Hubert Louie. Store Del Luna is an online K-Pop
                store that sells albums and merchandises of K-Pop artists. We
                tried to make this website with a<b> clean and simple </b>
                look to be a <b>user friendly</b> and <b>easy to use </b>
                website.
              </div>
              <div className="made-with-hci">
                <p>Made with HTML, CSS, and Javascript</p>
              </div>
              <div className="external-link">
                <a
                  href="https://github.com/Osiris181/Store-Del-Luna"
                  target="_blank"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://www.figma.com/proto/n9q0m1dTveqNQQyqxBXzUg/Store-Del-Luna?scaling=min-zoom&page-id=0%3A1&node-id=134%3A10"
                  target="_blank"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                </a>
                <a
                  href="https://osiris181.github.io/Store-Del-Luna/"
                  target="_blank"
                >
                  <img src="https://img.icons8.com/fluency-systems-regular/144/000000/external-link.png" />
                </a>
              </div>
            </div>
            <div className="portfolio-img mob">
              <img src="./store-del-luna.png" alt="store-del-luna" />
            </div>
          </div>
        </div>

        <div className="portfolio-section down">
          <div className="portfolio-content normal-wrap">
            <div className="portfolio-words">
              <div className="portfolio-name">Event Hub</div>
              <div className="portfolio-desc">
                <p>
                  Also a final Human and Computer Interaction project made by
                  me, Hubert Louie, and Darryl Xavier, Evelin, Ryan Vieri Kwa,
                  and Suclinton. Event Hub is an app that can be used to create
                  or participate in events and also can be used to provide
                  equipments for an event. Since it’s going to be used for that
                  purpose, we decided to make with a <b> clean look</b>. We
                  chose blue as the main color of the app because it resembles
                  the crowd of an event.
                </p>
              </div>
              <div className="made-with">
                <p>Prototype Made with Figma</p>
              </div>
              <div className="external-link">
                <a
                  href="https://www.figma.com/proto/eQpuwwqAdrz0469eQ1kkDU/EventHub?scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A1021&show-proto-sidebar=1&node-id=1%3A1021"
                  target="_blank"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                </a>
              </div>
            </div>
            <div className="portfolio-img">
              <img src="./event-hub.png" alt="event-hub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
