import React, { useState } from 'react';
import { Accordion, Breadcrumb, Col, Form, Row } from 'react-bootstrap';
import { Button } from '../../components';
import './Referral.scss';
const Referral = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }
  };
  const findFormErrors = () => {
    const { email, firstname, lastname, checkbox, emailFr } = form;
    const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    const regName = /^[a-zA-Z ]+$/;
    const newErrors = {};
    if (!email || email === '') newErrors.email = 'Required';
    else if (email.length > 250) newErrors.email = 'Email is too long!';
    else if (regex.test(email) === false) newErrors.email = 'Invalid email address';

    if (!emailFr || emailFr === '') newErrors.emailFr = 'Required';
    else if (emailFr.length > 250) newErrors.emailFr = 'Email is too long!';
    else if (regex.test(emailFr) === false) newErrors.emailFr = 'Invalid email address';

    if (!firstname || firstname === '') newErrors.firstname = 'Required';
    else if (firstname.length > 30) newErrors.firstname = 'First name is too long!';
    else if (regName.test(firstname) === false) newErrors.firstname = 'Invalid First name address';

    if (!lastname || lastname === '') newErrors.lastname = 'Required';
    else if (regName.test(lastname) === false) newErrors.lastname = 'Invalid First name address';
    else if (lastname.length > 30) newErrors.lastname = 'Last name is too long!';

    if (!checkbox || checkbox.checked === 0)
      newErrors.checkbox = 'Please accept the terms and conditions to proceed';
    return newErrors;
  };
  const constantFAQ = {
    item: [
      {
        id: 1,
        title: 'Which iPads and Fire tablets are cimpatible?',
        content: (
          <div>
            <ul className="osmo-p">
              <li>
                <strong>Compatible iPads:</strong> All iPads except iPad (Gen 1 — 4) and iPad Mini
                1.
                <ul className="osmo-p">
                  <li>
                    The
                    <a href="/en/shopping/accessories/osmo-replacement-reflector/" tabIndex="-1">
                      Reflector for iPad 2021
                    </a>
                    is required for the iPad Mini 6, Air 4, iPad Pro 11, and iPad Pro 12.9 (Gen 3 —
                    5).
                  </li>
                  <li>The minimum iOS version needed is iOS 10. </li>
                </ul>
              </li>
              <li>
                <strong>Compatible Fire Tablets:</strong> Fire 7 (9th Gen), Fire HD 8 (8th &amp;
                10th Gen), Fire HD 10 (9th &amp; 11th Gen).
                <ul className="osmo-p">
                  <li>The Kids &amp; Pro models are compatible with cases removed.</li>
                  <li>
                    The
                    <a href="/en/shopping/accessories/osmo-reflector-adapter-fire-8/" tabIndex="-1">
                      Osmo Reflector Adapter
                    </a>
                    is required for the HD 8 (10th Gen) and the HD 10 (11th Gen).
                  </li>
                  <li>The minimum Fire OS version needed is 7. </li>
                </ul>
              </li>
            </ul>
            <p>
              <em>
                NOTE: Some Osmo games may only be compatible with select devices. Please refer to
                our complete compatibility list
                <a
                  href="https://support.playosmo.com/hc/en-us/articles/115010156067-Which-devices-is-Osmo-compatible-with"
                  className="ga-external"
                  tabIndex="-1"
                >
                  here
                </a>
                for more information.
              </em>
            </p>
          </div>
        ),
      },
      {
        id: 2,
        title: 'What do I need to play Osmo games on my compatible iPad and Fire tablets?',
        content: (
          <div>
            <p>To play any Osmo game, you will need:</p>
            <ul className="osmo-p">
              <li>
                <strong>A compatible device that’s connected to the internet.</strong> Osmo works
                with most iPads and select Amazon Fire tablets. To confirm that your device supports
                Osmo, please see compatibility models above.
              </li>
              <li>
                <strong>The appropriate Osmo base and red reflector for your device.</strong>
                <ul className="osmo-p">
                  <li>
                    If you have a compatible Fire tablet, you need an Osmo Fire base &amp;
                    reflector.
                  </li>
                  <li>
                    If you have a compatible iPad, you need an Osmo iPad base &amp; reflector.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              The bases and reflectors are <strong>NOT</strong> interchangeable between iPads and
              Fire tablets. All Osmo Kits include a base &amp; reflector, and they are also sold as
              a separate item on our
              <a href="/en/" tabIndex="-1">
                website
              </a>
              or Amazon.com.
            </p>
          </div>
        ),
      },
      {
        id: 3,
        title: 'How do I set up my Osmo?',
        content: (
          <div>
            <ul className="osmo-p">
              <li>
                iPad users: See our helpful step-by-step video
                <a href="https://s.playosmo.com/iedU" className="ga-external" tabIndex="-1">
                  here
                </a>
                , or written instructions
                <a href="https://s.playosmo.com/kehJ" className="ga-external" tabIndex="-1">
                  here
                </a>
                .
              </li>
              <li>
                Fire users: See our helpful step-by-step video
                <a href="https://s.playosmo.com/SefR" className="ga-external" tabIndex="-1">
                  here
                </a>
                , or written instructions
                <a href="https://s.playosmo.com/zegC" className="ga-external" tabIndex="-1">
                  here
                </a>
                .
              </li>
              <li>
                To redeem digital games, see our helpful step-by-step video
                <a href="https://youtu.be/8boA6xlP4zY" className="ga-external" tabIndex="-1">
                  here
                </a>
                .
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: 4,
        title: 'What does Osmo do?',
        content: (
          <div>
            <p>
              Osmo makes hands-on learning games in which players use objects in the real world to
              interact with the digital world shown on their iPad or Fire tablets.
            </p>
          </div>
        ),
      },
      {
        id: 5,
        title: "What's unique about Osmo?",
        content: (
          <div>
            <p>
              At Osmo, we believe in the decades of research that illustrate
              <strong>children learn best from hands-on education</strong>. Osmo’s games are geared
              toward <strong>embodied learning</strong>, meaning our games teach abstract concepts
              by connecting them to objects and actions in the physical world. Osmo games
              <strong>promote embodied learning through physical-digital interactions</strong>.
            </p>
            <p>
              Our in-house team of child development researchers work with our designers to make
              sure every Osmo game reflects the principles of embodied learning. In Coding Awbie,
              for instance, players learn how to write lines of code by connecting and arranging
              physical coding blocks. Players of Pizza Co. must make quick calculations with topping
              and money tiles to deliver yummy pies and correct change to waiting customers. And in
              Tangram, players think through spatial relations to build increasingly complex shapes
              from smaller ones.
            </p>
          </div>
        ),
      },
      {
        id: 6,
        title: 'What skills do Osmo games promote?',
        content: (
          <div>
            <p>
              At Osmo, we take pride in creating learning games that are at once delightful and
              designed to grow young minds. We offer games for a wide range of academic subjects,
              including:
            </p>
            <ul className="osmo-p">
              <li>
                <strong>Coding</strong> (Coding Awbie, Coding Jam, Coding Duo)
              </li>
              <li>
                <strong>Math</strong> (Numbers, Pizza Co.)
              </li>
              <li>
                <strong>Drawing</strong> (Monster, Super Studio, Masterpiece)
              </li>
              <li>
                <strong>Spelling</strong> (Words)
              </li>
              <li>
                <strong>Fundamentals of Physics</strong> (Newton)
              </li>
              <li>
                <strong>Spatial relational skills</strong> (Tangram)
              </li>
              <li>
                <strong>World geography</strong> (Detective Agency)
              </li>
            </ul>
            <p>
              In addition to teaching traditional subject matter, Osmo games foster
              <strong>
                social-emotional skills like problem-solving, creativity and perseverance
              </strong>
              . Every Osmo game requires the player to use reasoning to arrive at the correct
              answer, or even to chart a new path entirely.
            </p>
            <p>
              In Monster, for example, players draw pictures with the Creative Board to shape the
              story that Mo the Monster is telling on their screen. When kids play Monster together,
              they learn how to communicate and collaborate in order to progress in the narrative.
              In this way, Monster is a useful tool for growing interpersonal skills in early
              childhood.
            </p>
          </div>
        ),
      },
      {
        id: 7,
        title: 'What ages is Osmo designed for?',
        content: (
          <div>
            <p>
              Most Osmo games are designed for <strong>ages 5–12</strong>. Monster and Super Studio
              are appropriate for ages 4+.
            </p>
            <p>
              For younger children, we recommend the brand-new
              <strong>Osmo Little Genius Starter Kit</strong>, which includes four games designed
              specifically for kids <strong>ages 3–5</strong>. These games teach pre-reading,
              storytelling and fine motor skill development.
            </p>
          </div>
        ),
      },
      {
        id: 8,
        title: 'How does Osmo work with my device camera',
        content: (
          <div>
            <p>
              The Osmo Reflector bounces an image of the player’s game piece arrangement or drawing
              into the device camera. The Osmo app then processes this image and either recreates
              the image on the screen or translates its effect onto the story in the digital world.
              Because Osmo uses a covered reflector to only capture images in a bounded area, your
              child’s privacy is always protected.
            </p>
          </div>
        ),
      },
      {
        id: 9,
        title: 'What do I need to play Osmo?',
        content: (
          <div>
            <p>To play any Osmo game, you will need:</p>
            <ul className="osmo-p">
              <li>
                <p>
                  <strong>A compatible device that’s connected to the internet.</strong> Osmo works
                  with most iPads and Amazon Fire tablets. To confirm that your device supports
                  Osmo, please review our
                  <a
                    href="https://support.playosmo.com/hc/en-us/articles/115010156067-Which-devices-is-Osmo-compatible-with"
                    className="ga-external"
                    tabIndex="-1"
                  >
                    compatibility guide.
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <strong>The appropriate Osmo base and red reflector for your device.</strong>
                  Every Osmo kit includes the Osmo Base and Reflector for either iPad or Amazon Fire
                  tablet. Bases and reflectors for iPad and Amazon Fire tablets are available for
                  purchase in our store.
                </p>
              </li>
            </ul>
            <p>
              Game pieces are required for add on games available in the app store and can be
              purchased in our store.
            </p>
          </div>
        ),
      },
      {
        id: 10,
        title: 'What happens if I lose or break a game piece, a red reflector, or the base?',
        content: (
          <div>
            <p>
              <strong>
                For lost or broken game pieces: We’re happy to replace lost or broken game pieces
                free of charge, within reason, for the first 90 days.
              </strong>
              You can request replacement pieces through your myOsmo account by selecting
              “Replacements” from the dropdown menu and filling out the form. We’ll send an email
              confirmation once you submit your request, as well as a notification when your
              replacement ships.
            </p>
            <p>
              For a lost or broken red reflector or base: Replacement reflectors and bases are
              available for purchase in our store.
            </p>
          </div>
        ),
      },
      {
        id: 11,
        title: 'What languages is Osmo available in?',
        content: (
          <div>
            <ul className="osmo-p">
              <li>The Little Genius Starter Kit games are available in both English and French.</li>
              <li>The Genius Starter Kit games are available in English, French, and German.</li>
              <li>
                The Monster game is available in both English and Spanish. Osmo Monster’s Spanish
                narrator is noted actor Jaime Camil of Jane the Virgin and Coco.
              </li>
              <li>
                We currently do not offer narration in languages besides English for our other games
                at this time; however, you can opt to have on-screen prompts translated into Danish,
                Dutch, French, German, Italian, Japanese, Simplified Chinese, Spanish, Swedish, and
                Traditional Chinese by changing your device’s language settings.
              </li>
              <li>We currently offer Osmo Words tiles for the standard western alphabet only.</li>
            </ul>
          </div>
        ),
      },
    ],
  };

  return (
    <div className="referral-container">
      <Breadcrumb className="breadcrumb-referral-container mb-3">
        <Breadcrumb.Item href="" className="home-breadcrumb text-decoration-none">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="breadcrumb-referral">
          Refer a friend
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="give-20">
        <Row className="d-flex">
          <Col className=" align-items-end d-flex flex-column justify-content-end" xs={6}>
            <div className="osmo-col  ">
              <h1 className="osmo-t">Give 20%, Get $20 in Credit</h1>
              <p className="osmo-t">
                Refer your friends! They get 20% off their first purchase of $50 or more, and you’ll
                get $20 in Osmo credit in return. Here’s how to get started:
              </p>
              <Col className="referral-credits-stripe-list">
                <Row className="referral-credits-stripe-step ">
                  <div className="d-flex align-items-center">
                    <h1 className="me-2">1</h1>
                    <div className="ms-2">Sign-up for Osmo’s referral program below</div>
                  </div>
                </Row>
                <Row className="referral-credits-stripe-step">
                  <div className="d-flex align-items-center">
                    <h1 className="me-2">2</h1>
                    <div className="ms-2">Share your referral link via email</div>
                  </div>
                </Row>
                <Row className="referral-credits-stripe-step">
                  <div className="d-flex align-items-center">
                    <h1 className="me-2">3</h1>
                    <div className="ms-2">
                      Get $20 in credits after your friends make their first purchase
                    </div>
                  </div>
                </Row>
              </Col>
            </div>
          </Col>
          <Col className="align-items-center" xs={6}>
            <div className="mask">
              <div className=" d-flex justify-content-start">
                <img
                  src="https://images.playosmo.com/referral-page/credits.png?auto=format&fm=png&dpr=1&ixlib=react-9.3.0&w=455&h=325&q=75"
                  alt=""
                  width="75%"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="sign-up-now  d-flex justify-content-center">
        <Form.Group className=" d-flex flex-column align-items-start py-3 mt-3 col-lg-7 col-12">
          <h2 className="fw-bold pb-3 mt-3">Sign Up Now and Start Referring!</h2>
          <p>Enter your details and create an account so we know who to send credits to!</p>
          <Form.Group className="input-box d-flex my-3 ">
            <Form.Group className="input-box me-1">
              <Form.Control
                className="text-input"
                type="firstname"
                placeholder=" First Name"
                size="lg"
                onChange={(e) => setField('firstname', e.target.value)}
                isInvalid={!!errors.firstname}
              />
              <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="input-box ms-1">
              <Form.Control
                className="text-input "
                type="lastname"
                placeholder=" Last Name"
                size="lg"
                onChange={(e) => setField('lastname', e.target.value)}
                isInvalid={!!errors.lastname}
              />
              <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
          <Form.Control
            className="text-input"
            type="email"
            placeholder=" Email address"
            size="lg"
            onChange={(e) => setField('email', e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          <Form.Group className="d-flex justify-content-center pt-3 ">
            <Form.Check
              type="checkbox"
              className=" me-2 "
              onChange={(e) => setField('checkbox', e.target.checked)}
              isInvalid={!!errors.checkbox}
            />
            <Form.Group>
              I agree to the terms and conditions of Tangible Play Inc. Please view the
              <a href="#" className="ms-1 ">
                Terms and Conditions
              </a>
            </Form.Group>
          </Form.Group>
          <p className="fw-bold my-3">Please enter your friend’s email address</p>
          <Form.Control
            className="text-input mb-3"
            type="email"
            placeholder=" Email address"
            size="lg"
            onChange={(e) => setField('email', e.target.value)}
            isInvalid={!!errors.emailFr}
          />
          <Form.Control.Feedback type="invalid">{errors.emailFr}</Form.Control.Feedback>
          <div className="input-box d-flex justify-content-end">
            <Button className="my-3 " onClick={(e) => handleSubmit(e)}>
              Submit
            </Button>
          </div>
        </Form.Group>
      </div>
      <div className="faq-referral d-flex justify-content-center">
        <div className="faq-list-item col-lg-7 col-12 align-self-center py-3 mt-3">
          <div>
            <h2 className="fw-bold pb-3 mt-3">FAQs</h2>
          </div>
          {constantFAQ.item.map((data, index) => {
            return (
              <Accordion key={index} className="questions">
                <Accordion.Header>
                  <span className="faq-title fw-bold">{data.title}</span>
                </Accordion.Header>
                <Accordion.Body className="faq-content"> {data.content}</Accordion.Body>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Referral;
