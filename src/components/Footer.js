import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import gmail from '../img/social/gmail.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-centered has-text-white-ter" style={{ background: '#354147'}}>
  
              <div className="column social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={gmail}
                    alt="Gmail"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
              </div>
      </footer>
    )
  }
}

export default Footer
