/**
 * SectionVideo
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Component
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Button from '../../components/Button';

// Style
import './SectionVideo.scss';

// Title of section
const Title = ({ children, content, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {content && <h2> {content} </h2>}
      {children && <div> {children} </div>}
    </div>
  );
};
Title.displayName = 'Title';
Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  content: PropTypes.string,
};

// Subtitle of section
const SubTitle = ({ children, content, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {content && <p> {content} </p>}
      {children && <div> {children} </div>}
    </div>
  );
};
SubTitle.displayName = 'SubTitle';
SubTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  content: PropTypes.string,
};

// Section video
const SectionVideo = ({
  children,
  className,
  preView,
  showButtoncontrols,
  linkVideo,
  rowReverse,
  shadowColor,
  classNameMask,
  onClickPreView,
  showIconPreView,
  poster,
  xsDetail,
  xsVideo,
  refPreview,
  imgPreview,
  buttonControlsBottom,
  ...props
}) => {
  const Title = React.Children.map(children, (child) =>
    child.type.displayName === 'Title' ? child : null
  );
  const SubTitle = React.Children.map(children, (child) =>
    child.type.displayName === 'SubTitle' ? child : null
  );

  const [motion, setMotion] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);

  function handleOnClickWithVideo() {
    setMotion(!motion);
    const vid = document.getElementById('section-myVideo');
    motion ? vid.pause() : vid.play();
  }
  function handleOnClickOpenVideo() {
    setMotion(false);
    setIsShowModal(true);
    const vid = document.getElementById('section-myVideo').pause();
    return vid;
  }

  function handleClickOutSide() {
    setIsShowModal(false);
    handleOnClickWithVideo();
  }

  // Modal video
  function ShowModalVideo(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        contentClassName="section-Modal"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="530px"
            src={linkVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
            tabIndex="-1"
          ></iframe>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className={['section-video', className].join(' ').trim()} {...props}>
      <section>
        <section className="section-video-container">
          <Container fluid="xl">
            <Row xs={1} md={2} className={rowReverse && 'flex-row-reverse'}>
              <Col xl={xsDetail} className="align-items-center d-flex">
                <Row>
                  <Row>{Title}</Row>
                  <Row>{SubTitle}</Row>
                </Row>
              </Col>
              <Col xl={xsVideo} className="align-items-center d-flex">
                <div>
                  <div className="section-video-video-preview position-relative">
                    <div
                      className={[
                        'section-video-video-shadow position-absolute d-block',
                        classNameMask,
                      ]
                        .join(' ')
                        .trim()}
                      style={{
                        backgroundColor: shadowColor,
                      }}
                    ></div>
                    <div
                      className={[
                        'section-video-video-preview-link position-relative d-block',
                        classNameMask,
                      ]
                        .join(' ')
                        .trim()}
                      onClick={() => {
                        onClickPreView();
                        linkVideo && handleOnClickOpenVideo();
                      }}
                    >
                      {imgPreview && (
                        <div className="section-img-logo">
                          <div className="section-img-target">
                            <img className="section-img-img" width="auto" src={imgPreview}></img>
                          </div>
                        </div>
                      )}

                      <div className="section-video-video position-relative">
                        <div className="section-video-video-player position-relative ">
                          <video
                            preload="auto"
                            loop
                            width="100%"
                            height="100%"
                            playsInline
                            autoPlay={true}
                            id="section-myVideo"
                            poster={poster}
                            muted
                            ref={refPreview}
                          >
                            {preView && <source src={preView} type="video/mp4"></source>}
                          </video>
                        </div>
                      </div>

                      {showIconPreView && (
                        <i
                          style={{ fontSize: '89px' }}
                          className="bi bi-play-fill section-video-icon-play"
                        ></i>
                      )}
                    </div>
                    {showButtoncontrols && (
                      <Button
                        textColor="white"
                        type={buttonControlsBottom && 'secondary'}
                        className={[
                          'section-video-button',
                          !buttonControlsBottom && 'position-absolute',
                          buttonControlsBottom && 'section-video-button-bottom',
                        ]
                          .join(' ')
                          .trim()}
                        onClick={() => {
                          handleOnClickWithVideo();
                        }}
                      >
                        {motion ? 'Reduce Motion' : 'Enable Motion'}
                        {buttonControlsBottom && (
                          <i className="bi bi-play-fill section-video-button-icon"></i>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      {/* // modal video */}
      <ShowModalVideo show={isShowModal} onHide={() => handleClickOutSide()} />
    </div>
  );
};

SectionVideo.Title = Title;
SectionVideo.SubTitle = SubTitle;

SectionVideo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  classNameMask: PropTypes.string,
  preView: PropTypes.string,
  showButtoncontrols: PropTypes.bool,
  linkVideo: PropTypes.string,
  rowReverse: PropTypes.bool,
  shadowColor: PropTypes.string,
  onClickPreView: PropTypes.func,
  showIconPreView: PropTypes.bool,
  poster: PropTypes.string,
  xsDetail: PropTypes.number,
  xsVideo: PropTypes.number,
  refPreview: PropTypes.any,
  imgPreview: PropTypes.string,
  buttonControlsBottom: PropTypes.bool,
};

SectionVideo.defaultProps = {
  xsDetail: 6,
  xsVideo: 6,
  rowReverse: false,
  shadowColor: '#eee',
  showIconPreView: true,
  buttonControlsBottom: false,
  preView: 'https://videos.playosmo.com/homepage/homepageMWLaunch.webm',
  showButtoncontrols: true,
  onClickPreView: () => {},
  linkVideo:
    '//www.youtube.com/embed/e4gPtF3rySA?autoplay=1&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0',
};

export default SectionVideo;
