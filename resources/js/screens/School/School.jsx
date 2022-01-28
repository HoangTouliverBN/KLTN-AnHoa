import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../../components/Button';
import './School.scss';

const School = () => {
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
            src="https://www.youtube.com/embed/ORQB3w-hWRo"
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
    <div className="schools-container">
      <div className="background-video d-flex flex-column align-items-center">
        <div className="pt-3">
          <h1 className="text-center pt-3">
            <span className="school-h1 align-middle ">
              Schools <div className="hearta d-inline-block ">♥</div> Osmo
            </span>
          </h1>
        </div>
        <div className="button-video d-flex justify-content-center mt-3">
          <button className="button-transform" onClick={() => handleOnClickOpenVideo()}>
            <span className="span-transform"></span>
          </button>
        </div>
      </div>
      <div className="section-schools">
        <div className="d-flex justify-content-center text-center my-3">
          <p className="fs-4">
            More than
            <div className="schools-number mx-1"></div>
            classrooms use Osmo to change the way kids collaborate, create, think critically, and
            communicate.
          </p>
        </div>
        <div className="button-schools d-flex justify-content-center pb-3">
          <Button className="button fw-bold fs-2">Get Osmo for Schools</Button>
        </div>
      </div>
      <ShowModalVideo show={isShowModal} onHide={() => handleClickOutSide()} />
    </div>
  );
};

export default School;
