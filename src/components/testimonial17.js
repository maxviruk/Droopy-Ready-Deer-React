import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text32">
                  <span>{/*locale-text_NgtN7O*/}</span>
                </span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text31">
                  <span>{/*locale-text_loYjIf*/}</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            <span>{/*locale-text_6K3P60*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            <span>{/*locale-text_cyPHfh*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">
                        <span>{/*locale-text_kxNQgT*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            <span>{/*locale-text_cPBzd8*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            <span>{/*locale-text_HHI1Jk*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text34">
                        <span>{/*locale-text__kPxxR*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            <span>{/*locale-text_d6etzj*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            <span>{/*locale-text_yUz8Qt*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text35">
                        <span>{/*locale-text_m7dqWy*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            <span>{/*locale-text_o5aRM5*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            <span>{/*locale-text_2w-WjJ*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        <span>{/*locale-text_Fv1Rrm*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Alt: 'Image of Michael Johnson',
  author3Name: undefined,
  author2Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzMyMzA4N3w&ixlib=rb-4.1.0&q=80&w=1080',
  author4Position: undefined,
  author1Position: undefined,
  author2Alt: 'Image of Jane Smith',
  author1Name: undefined,
  author2Position: undefined,
  review1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1690845540833-1fbc77e5bca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzMyMzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  heading1: undefined,
  author3Position: undefined,
  author1Alt: 'Image of John Doe',
  review2: undefined,
  author4Alt: 'Image of Sarah Lee',
  review3: undefined,
  review4: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzMyMzA4OHw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1632377082403-214778bec07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NzMyMzA4N3w&ixlib=rb-4.1.0&q=80&w=1080',
}

Testimonial17.propTypes = {
  author3Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author2Name: PropTypes.element,
  author4Src: PropTypes.string,
  author4Position: PropTypes.element,
  author1Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author2Position: PropTypes.element,
  review1: PropTypes.element,
  author3Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  author3Position: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  author4Alt: PropTypes.string,
  review3: PropTypes.element,
  review4: PropTypes.element,
  author2Src: PropTypes.string,
  author4Name: PropTypes.element,
  author1Src: PropTypes.string,
}

export default Testimonial17
