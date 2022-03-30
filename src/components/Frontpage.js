
import { Redirect, useHistory } from 'react-router-dom';
import { checkUser, logOut, SignInWithG } from '../FireBase.js'
import './Frontpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Frontpage() {


    let history = useHistory();
    const redi = () => {
        history.push('home');
    };

    //<button onClick={SignInWithG} type={"button"} className="login-with-google-btn">Sign-In with Google</button>
    return (
        <><div className='MainContent'>
            
        <Container>
            <Row>
                <Col>
                <h1>Hi, I'm AIMEE.</h1>
                <h4>An Artifical Medical Intelligence and Diagnostic System</h4>
                <h5>Please Sign-In to continue and figure out what's wrong with you :)</h5></Col>
                <Col>
                <img src='assets/final-logo.png'></img>
                </Col>
                </Row>
                </Container>
                
                <button onClick={() => {
                    SignInWithG();
                    redi();
                } } type={"button"} className="login-with-google-btn">Sign-In with Google</button>

                <button onClick={redi}>Re</button>
                <button onClick={logOut}>
                    Sign-Out
                </button>

                <button onClick={checkUser}>
                    Check-User
                </button>
                <h1>{localStorage.getItem("email")}</h1>
            </div></>
    );
}
export default Frontpage;