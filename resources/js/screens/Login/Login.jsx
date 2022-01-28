import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';
import Button from '../../components/Button';
import InputCode from '../../components/InputCode';
import ApiService from '../../services';
// import baseApi from '../../services/api-base';
import cookie from 'react-cookies';

import './Login.scss';

const Login = () => {
  const [sign, setSign] = useState(true);
  const [verify, setVerify] = useState(true);
  const [dataInput, setDataInput] = useState([]);
  const [messError, setMessError] = useState('');
  const [stringData, setStringData] = useState();
  const [dataAuthen, setDataAuthen] = useState({});
  const history = useHistory();
  // const [token, setToken] = useCookies(['token']);
  // const [,setUserName]=useCookies(['userName']);

  const setAuthentication = (field, value) => {
    setDataAuthen({
      ...dataAuthen,
      [field]: value,
    });
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

  // const callGetUser = async () =>{
  //   try {
  //   const userData =  await ApiService.getUser();
  //   if(userData.data.userName !== null){
  //     setUserName("userName",userData.data.userName);
  //     // setToken("token",api.data.access.token,[2400000]);
  //   console.log(userData);
  //   }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // // useEffect(()=>{
  //   callGetUser();
  // });

  useEffect(() => {
    setStringData(dataInput.join(''));
  }, [dataInput]);
  useEffect(() => {
    setDataAuthen({
      ...dataAuthen,
      ['password']: stringData,
    });
  }, [stringData]);
  const handleChangeSignUp = () => {
    setSign(false);
    setVerify(true);
    setErrors({});
  };
  const handleChangeSignIn = () => {
    setSign(true);
    setVerify(true);
    setErrors({});
  };

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
  const findFormErrorsSignIn = () => {
    const { email } = form;
    const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    const newErrorsSignIn = {};
    if (!email || email === '') newErrorsSignIn.email = 'Required';
    else if (email.length > 250) newErrorsSignIn.email = 'Email is too long!';
    else if (regex.test(email) === false) newErrorsSignIn.email = 'Invalid email address';

    return newErrorsSignIn;
  };
  const findFormErrorsVerify = () => {
    const verifyNumbers = dataInput;
    const newErrorsVerify = {};
    verifyNumbers.map((number) => {
      if (number === '') {
        newErrorsVerify.verify = 'Invalid verification code';
      }
    });
    return newErrorsVerify;
  };

  const findFormErrors = () => {
    const { email, firstName, lastName, checkbox } = form;
    const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    const regName = /^[a-zA-Z ]+$/;
    const newErrors = {};
    if (!email || email === '') newErrors.email = 'Required';
    else if (email.length > 250) newErrors.email = 'Email is too long!';
    else if (regex.test(email) === false) newErrors.email = 'Invalid email address';

    if (!firstName || firstName === '') newErrors.firstName = 'Required';
    else if (firstName.length > 30) newErrors.firstName = 'First name is too long!';
    else if (regName.test(firstName) === false) newErrors.firstName = 'Invalid First name address';

    if (!lastName || lastName === '') newErrors.lastName = 'Required';
    else if (regName.test(lastName) === false) newErrors.lastName = 'Invalid First name address';
    else if (lastName.length > 30) newErrors.lastName = 'Last name is too long!';

    if (!checkbox || checkbox.checked === 0)
      newErrors.checkbox = 'Please accept the terms and conditions to proceed';

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrorsVerify();
    setDataAuthen({
      ...dataAuthen,
      ['password']: stringData,
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessError(newErrors.verify);
    } else {
      setMessError('');
      callPostVerify(dataAuthen);

      history.push('/');
      window.location.reload();
    }
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setVerify(false);
      callPostRegister(form);
    }
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const newErrorsSignIn = findFormErrorsSignIn();
    if (Object.keys(newErrorsSignIn).length > 0) {
      setErrors(newErrorsSignIn);
    } else {
      setVerify(false);
      callPostLogin(form);
    }
  };
  const handleResend = () => {
    callPostLogin(form);
  };
  const callPostRegister = async (data) => {
    try {
      await ApiService.register(data);
    } catch (error) {
      console.error(error);
    }
  };
  const callPostVerify = async (datas) => {
    try {
      const api = await ApiService.authenticate(datas);
      if (api.data.message === 'These credentials do not match our records.') {
        setMessError('Invalid Verification Code');
      } else if (api.data.message === 'Login success') {
        cookie.save('token ', api.data.access.token, { path: '/', maxAge: 2400000 });
        //setToken('token',api.data.access.token);
        // setToken("token",api.data.access.token,[2400000]);
        // console.log("token",api.data.access.token);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const callPostLogin = async (email) => {
    try {
      await ApiService.login(email);
    } catch (error) {
      console.error(error);
    }
  };

  function Login() {
    if (verify) {
      return (
        <div className="box d-flex flex-column justify-content-between">
          <Form.Group className="d-flex flex-column align-items-center py-3 mt-3">
            <h2 className="text-center fw-bold pb-3 mt-3">Sign In</h2>
            <p className="text-center fs-5 pb-3">
              Enter your Osmo email address to receive a verification code to sign in
            </p>
            <Form.Control
              size="lg"
              type="email"
              placeholder=" Email address"
              className="text-input mb-3"
              onChange={(e) => setAuthentication('email', e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            <Button
              className="mt-3"
              onKeyUp={(e) => {
                if (e.key === 13) {
                  e.preventDefault();
                  handleSignIn(e);
                }
              }}
              onClick={(e) => handleSignIn(e)}
            >
              Sign In
            </Button>
          </Form.Group>
          <Form.Group className="d-flex align-items-center justify-content-center my-3 py-3">
            <h5 className="mb-0">Dont have an account?</h5>
            <a href="#" className=" fs-5 ps-3" onClick={() => handleChangeSignUp()}>
              Sign Up
            </a>
          </Form.Group>
        </div>
      );
    } else if (!verify) {
      return (
        <div className="box d-flex flex-column justify-content-between">
          <Form.Group className="d-flex flex-column align-items-center py-3 mt-3">
            <h2 className="text-center fw-bold pb-3 mt-3">Welcome!</h2>
            <Form.Control
              size="lg"
              type="email"
              placeholder={form.email}
              className="text-input mb-3 "
              onChange={(e) => setAuthentication('email', e.target.value)}
              readOnly
              disabled
            />
            <p className="text-center fs-5 pb-3">
              {"You're almost there! Please enter the verification code sent to your email address"}
            </p>
            <Form.Group className=" ">
              <InputCode
                length={6}
                messenger={messError}
                setValueVerify={setDataInput}
                onKeyUp={(e) => {
                  if (e.key === 13) {
                    handleSubmit(e);
                  }
                }}
                onChange={() => setField('password', dataInput)}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Button className="cancel-button me-3" onClick={(e) => handleChangeSignIn(e)}>
                Cancel
              </Button>
              <Button onClick={(e) => handleSubmit(e)}>Verify</Button>
            </Form.Group>
          </Form.Group>
          <Form.Group className="d-flex flex-column align-items-center ">
            <a href="#" onClick={() => handleResend()} className=" fs-5 pt-3">
              Resend Verification Code
            </a>
            <Form.Group className="d-flex align-items-center justify-content-center my-3 py-3">
              <h5 className="mb-0">Dont have an account?</h5>
              <a
                href="#"
                className=" fs-5 ps-3"
                onClick={() => handleChangeSignUp()}
              >
                Sign Up
              </a>
            </Form.Group>
          </Form.Group>
        </div>
      );
    }
  }
  function Register() {
    if (verify) {
      return (
        <div className="box d-flex flex-column justify-content-between">
          <Form.Group className="d-flex flex-column align-items-center py-3 mt-3">
            <h2 className="text-center fw-bold pb-3 mt-3">Sign Up</h2>
            <Form.Group className="input-box d-flex justify-content-between my-3 ">
              <Form.Group className="me-2">
                <Form.Control
                  className="text-input"
                  type="firstname"
                  placeholder=" First Name"
                  size="lg"
                  onChange={(e) => setField('firstName', e.target.value)}
                  isInvalid={!!errors.firstname}
                />
                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="ms-2">
                <Form.Control
                  className="text-input "
                  type="lastname"
                  placeholder=" Last Name"
                  size="lg"
                  onChange={(e) => setField('lastName', e.target.value)}
                  isInvalid={!!errors.lastname}
                />
                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
              </Form.Group>
            </Form.Group>
            <Form.Control
              className="text-input"
              type="email"
              placeholder=" Email address"
              size="lg"
              onChange={(e) => setAuthentication('email', e.target.value)}
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
            <Form.Control.Feedback type="invalid">{errors.checkbox}</Form.Control.Feedback>
            <Button className="my-3" onClick={(e) => handleSignUp(e)}>
              Sign Up
            </Button>
          </Form.Group>
          <Form.Group>
            <Form.Group className="d-flex align-items-center justify-content-center my-3 py-3">
              <h5 className="mb-0">Already have an account?</h5>
              <a href="#" className=" fs-5 ps-3" onClick={handleChangeSignIn}>
                Sign In
              </a>
            </Form.Group>
          </Form.Group>
        </div>
      );
    } else if (!verify) {
      return (
        <div className="box d-flex flex-column justify-content-between">
          <Form.Group className="d-flex flex-column align-items-center py-3 mt-3">
            <h2 className="text-center fw-bold pb-3 mt-3">Welcome!</h2>
            <Form.Control
              size="lg"
              type="email"
              placeholder={form.email}
              className="text-input mb-3"
              onChange={(e) => setAuthentication('email', e.target.value)}
              readOnly
              disabled
            />
            <p className="text-center fs-5 pb-3">
              {"You're almost there! Please enter the verification code sent to your email address"}
            </p>
            <Form.Group className=" ">
              <InputCode
                length={6}
                messenger={messError}
                setValueVerify={setDataInput}
                onChange={() => setField('password', dataInput)}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Button className="cancel-button me-3" onClick={(e) => handleChangeSignUp(e)}>
                Cancel
              </Button>
              <Button onClick={(e) => handleSubmit(e)}>Verify</Button>
            </Form.Group>
          </Form.Group>
          <Form.Group className="d-flex flex-column align-items-center ">
            <a href="#" onClick={() => handleResend()} className=" fs-5 pt-3">
              Resend Verification Code
            </a>
            <Form.Group className="d-flex align-items-center justify-content-center my-3 py-3">
              <h5 className="mb-0">Dont have an account?</h5>
              <a href="#" className=" fs-5 ps-3" onClick={() => handleChangeSignUp()}>
                Sign Up
              </a>
            </Form.Group>
          </Form.Group>
        </div>
      );
    }
  }

  return (
    <div className="login-container">
      <Row>
        <Col className="background"></Col>
        <Col className="login-box d-flex justify-content-center" sm={12} md={6} lg={5} xl={4}>
          {sign ? (
            <Form className="form-box">{Login()}</Form>
          ) : (
            <Form className="form-box ">{Register()}</Form>
          )}
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Login;
