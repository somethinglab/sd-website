import React from 'react'
import { withRouteData } from 'react-static';


import susanne from '../content/pictures/susanne-dannhauer-quadratic.jpg'

class Home extends React.Component {
  componentDidMount () {
    if (window.executeSlick) {
      window.executeSlick()
    } else {
      window.mounted = true
    }
  }
  render () {
    const data = this.props.websiteData
    return (
      <div>
        <div className="container">
          <div className="header">
            <div>
              <h1>{data.attributes.name}</h1>
              <div className="header__box">
                <a href="//ihrguterfaden.de">ihrguterfaden.de</a>
                <a href={`mailto:${data.attributes.email}`}>{data.attributes.email}</a>
                <a href={`tel:${data.attributes.telephone}`}>{data.attributes.telephone}</a>
                <svg width={81} height={78} xmlns="http://www.w3.org/2000/svg" className="header__box-spiral">
                  <path className="header__box-spiral-path" d="M6.607 15.505C1.423 22.302-.826 30.729.272 39.233c1.1 8.505 5.417 16.065 12.156 21.294 11.255 8.733 27.456 6.6 36.116-4.75 7.024-9.213 5.309-22.47-3.822-29.554-7.432-5.766-18.128-4.36-23.845 3.135-4.67 6.124-3.53 14.942 2.54 19.651 4.984 3.866 12.157 2.923 15.992-2.104a9.486 9.486 0 0 0 1.873-7.017 9.45 9.45 0 0 0-3.595-6.296 7.717 7.717 0 0 0-5.78-1.57 7.752 7.752 0 0 0-5.185 3.014c-.487.64-.369 1.554.265 2.046a1.438 1.438 0 0 0 2.03-.267 4.882 4.882 0 0 1 3.266-1.896 4.857 4.857 0 0 1 3.638.988 6.55 6.55 0 0 1 2.49 4.362 6.584 6.584 0 0 1-1.296 4.858c-2.861 3.75-8.214 4.454-11.933 1.568-4.806-3.73-5.708-10.706-2.011-15.556 4.742-6.22 13.619-7.388 19.785-2.602 7.866 6.103 9.344 17.522 3.293 25.457-7.687 10.076-22.068 11.97-32.057 4.22C1.546 48.4-.829 30.04 8.899 17.285 21.182 1.181 44.165-1.842 60.131 10.546c9.744 7.559 15.986 18.494 17.577 30.789 1.592 12.297-1.66 24.485-9.155 34.314-.49.64-.37 1.556.263 2.047a1.436 1.436 0 0 0 2.03-.266c7.968-10.45 11.425-23.402 9.735-36.472-1.692-13.07-8.326-24.691-18.681-32.726C44.664-5.138 19.86-1.876 6.607 15.505z" fill="#000" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="slideshow">
          <div className="slide slide--picture-1">
            <div className="slide__header">Ihr. Guter. Faden.</div>
            <div className="slide__text">
              Ihren Prozess <strong>begleiten.</strong>
            </div>
            <div className="slide__text">
              Ihre Authentizität <strong>bewahren.</strong>
            </div>
            <div className="slide__text">
              Ihr Ziel <strong>bestimmen.</strong>
            </div>
          </div>
          <div className="slide slide--picture-2">
            <div className="slide__header">Auch</div>
            <div className="slide__text">
              Von Herzen <strong>Assistentin.</strong>
            </div>
            <div className="slide__text">
              Voller Vertrauen <strong>Lösungsfinderin.</strong>
            </div>
            <div className="slide__text">
              Aus Leidenschaft <strong>Organisatorin.</strong>
            </div>
          </div>
          <div className="slide slide--picture-3">
            <div className="slide__header">Mit</div>
            <div className="slide__text">
              <strong>Verbundenheit.</strong>
            </div>
            <div className="slide__text">
              <strong>Gelassenheit.</strong>
            </div>
            <div className="slide__text">
              <strong>Klarheit.</strong>
            </div>
          </div>
          <div className="slide slide--picture-4">
            <div className="slide__header">Typisch</div>
            <div className="slide__text">
              <strong>Ausdauer.</strong>
            </div>
            <div className="slide__text">
              <strong>Energie.</strong>
            </div>
            <div className="slide__text">
              <strong>Entschlossenheit.</strong>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="letter">
            <div className="letter__avatar">
              <img src={susanne} alt="Potrait Foto von Susanne Dannhauer" />
            </div>
            <h1>{data.attributes.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: data.body }}
            />
            <div className="letter__author">{data.attributes.author}</div>
          </div>
        </div>
        <div className="letter__cta-container">
          <a href="mailto:s.dannhauer@t-online.de" className="letter__cta">{data.attributes.ctaButton}</a>
        </div>
        <div className="footer">{data.footer}</div>
      </div>
    )
  }
}

export default withRouteData(Home)
