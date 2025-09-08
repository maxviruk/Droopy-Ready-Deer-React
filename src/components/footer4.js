import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text15">
                    <span>{/*locale-text_5lo4RG*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text21">
                    <span>{/*locale-text_dvcFX-*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text16">
                    <span>{/*locale-text_DyzOPG*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text17">
                    <span>{/*locale-text_8VvQkq*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text19">
                    <span>{/*locale-text_Gwq_UY*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                <span>{/*locale-text_sOORNK*/}</span>
              </span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text14">
                      <span>{/*locale-text_tTWwUR*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text20">
                      <span>{/*locale-text_bPQlVK*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text18">
                      <span>{/*locale-text_aZvzyT*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  privacyLink: undefined,
  link1: undefined,
  link3: undefined,
  link4: undefined,
  logoAlt: 'Studio Name',
  cookiesLink: undefined,
  link5: undefined,
  termsLink: undefined,
  link2: undefined,
}

Footer4.propTypes = {
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
  link1: PropTypes.element,
  link3: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.element,
  link5: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
}

export default Footer4
