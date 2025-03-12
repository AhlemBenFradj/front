import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row, Tab, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebasecredential';
import { Imagesdata } from '../../../common/commonimages';

const isProd = process.env.NODE_ENV == 'production'

export default function FirebaseSignIn() {

    const [err, setError] = useState("");
    const [loading, setLoader] = useState(false);
    const [data, setData] = useState({
        "email": "root",
        "password": "root",
    })
    const { email, password } = data;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setError("");
    }
    const Login = (e) => {
        setLoader(true)
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            user => { console.log(user); RouteChange(); setLoader(false) }).catch(err => { console.log(err); setError(err.message); setLoader(false) })
    }
    let navigate = useNavigate();
    const RouteChange = () => {
        let path = `${import.meta.env.BASE_URL}indexpage/`;
        navigate(path);
    }

    const Login1 = (_e) => {

        if (data.email == "root" && data.password == "root") {
            RouteChange();
        }
        else {
            setError("The Auction details did not Match")
            setData({
                "email": "root",
                "password": "root",
            })
        }
    }
    return (

        <div>
            <div className="main-container container-fluid">
                <Row className="no-gutter">
                    <Col md={6} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
                        <Row className="wd-100p mx-auto text-center">
                            <Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
                                <img src={Imagesdata("pngs8")} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} lg={6} xl={5} className="bg-white py-4">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                            <Nav variant="pills" className="justify-content-center authentication-tabs my-5">

                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='react'>
                                    <div className="login align-items-center py-2">
                                        <div className="p-0">
                                            <Row>
                                                <Col md={10} lg={10} xl={9} className="mx-auto">
                                                    <div className="card-sigin">
                                                        <div className="mb-5 d-flex">
                                                            <Link to="#"><img src={Imagesdata("favicon")} className="sign-favicon-a ht-40" alt="logo" />
                                                                <img src={Imagesdata("faviconWhite")} className="sign-favicon-b ht-40" alt="logo" />
                                                            </Link>
                                                            <h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Agence WebPlus </h1>
                                                        </div>
                                                        <div className="card-sigin">
                                                            <div className="main-signup-header">
                                                                <h2>Welcome back!</h2>
                                                                <h5 className="fw-semibold mb-4">Please sign in to continue.</h5>
                                                                <Form action="#">
                                                                    <Form.Group>
                                                                        <Form.Label className="mb-2">Email</Form.Label>
                                                                        <Form.Control className="mb-3" name="email" placeholder="Enter your email" type="text"
                                                                            required
                                                                        />{" "}
                                                                    </Form.Group>
                                                                    <Form.Group>
                                                                        <Form.Label className="mb-2">Password</Form.Label>
                                                                        <Form.Control className="mb-3" name="password" placeholder="Password" type="password" required />{" "}
                                                                    </Form.Group>
                                                                    <Link className="btn btn-main-primary btn-block" to={`${import.meta.env.BASE_URL}indexpage/`}>
                                                                        Sign In
                                                                    </Link>

                                                                </Form>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* <!-- End --> */}
                                    </div>

                                </Tab.Pane>
                                <Tab.Pane eventKey='firebase'>

                                    <div className="login align-items-center py-2">
                                        <div className="p-0">
                                            <Row>
                                                <Col md={10} lg={10} xl={9} className="mx-auto">
                                                    <div className="card-sigin">
                                                        <div className="mb-5 d-flex">
                                                            <Link to="#"><img src={Imagesdata("favicon")} className="sign-favicon-a ht-40" alt="logo" />
                                                                <img src={Imagesdata("faviconWhite")} className="sign-favicon-b ht-40" alt="logo" />
                                                            </Link>
                                                            <h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1>
                                                        </div>
                                                        <div className="card-sigin">
                                                            <div className="main-signup-header">
                                                                <h2>Welcome back!</h2>
                                                                <h5 className="fw-semibold mb-4">Please sign in to continue.</h5>
                                                                {err && <Alert variant="danger">{err}</Alert>}
                                                                <Form action="#">
                                                                    <Form.Group>
                                                                        <Form.Label className="mb-2">Email</Form.Label>
                                                                        <Form.Control className="mb-3" name="email" placeholder="Enter your email" type="text" value={email} onChange={changeHandler} required />{" "}
                                                                    </Form.Group>
                                                                    <Form.Group>
                                                                        <Form.Label className="mb-2">Password</Form.Label>
                                                                        <Form.Control className="mb-3" name="password" placeholder="Enter your password" type="password" value={password} onChange={changeHandler} required />{" "}
                                                                    </Form.Group>
                                                                    <Button className="btn-main-primary btn-block" onClick={Login}>
                                                                        Sign In{loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}
                                                                    </Button>
                                                                    <Row className="row-xs">
                                                                        <Col sm={6} className="">
                                                                            <Button className="btn-block"><i className="fab fa-facebook-f"></i> Signup with Facebook</Button>
                                                                        </Col>
                                                                        <Col sm={6} className="mg-t-10 mg-sm-t-0">
                                                                            <Button className="btn-info btn-block btn-b"><i className="fab fa-twitter"></i> Signup with Twitter</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </Form>
                                                                <div className="main-signin-footer mt-5">
                                                                    <p><Link to="#">Forgot password?</Link></p>
                                                                    <p>Don't have an account? <Link to={`${import.meta.env.BASE_URL}FirebaseAuthentication/FirebaseSignUp`}>Create an Account</Link></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* <!-- End --> */}
                                    </div>

                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                    {/* <!-- End --> */}
                </Row>
            </div>
        </div>
    )
}
