import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text17">
                    <span>{/*locale-text_sfL7dS*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text19">
                    <span>{/*locale-text_JM0QDT*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text21">
                    <span>{/*locale-text_1HSajc*/}</span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text18">
                    <span>{/*locale-text_V1s74z*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                <span>{/*locale-text_Ip7n45*/}</span>
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text20">
                    <span>{/*locale-text_hpSvYD*/}</span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text16">
                    <span>{/*locale-text_p0p4-J*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                <span>{/*locale-text_Tmwyun*/}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2Description: undefined,
  location1ImageAlt: 'Office Location',
  heading1: undefined,
  location1Description: undefined,
  content1: undefined,
  location2: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1675503623452-5f3b46c4a7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzMyMzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  location2ImageAlt: 'Email Icon',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1632401538069-6d4063b1f5bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzMyMzA4N3w&ixlib=rb-4.1.0&q=80&w=1080',
  location1: undefined,
}

Contact10.propTypes = {
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location1Description: PropTypes.element,
  content1: PropTypes.element,
  location2: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1: PropTypes.element,
}

export default Contact10
