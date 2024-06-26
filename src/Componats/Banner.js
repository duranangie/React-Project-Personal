import { useState, useEffect } from "react"
import { Container,Row , Col,Nav    } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"



export const Banner = () =>{
    const[activeLink, setActiveLink] = useState('home');
    const[scolled,seScrolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if (window.scrollY > 50){
                seScrolled(true);

            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return ()=> window.removeEventListener("scroll",onScroll);
    },[])

        const onUpdateActiveLink=(value)=>{
        setActiveLink(value)
        }




    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Backend Developer","Frontend Developer","UI/UX Designer"];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState (300 - Math.random() * 10);
    const period = 2000;
    


    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)}
        ;

    },[text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText =  toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0, text.length +1 );


        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta  /2 ) 
        }


        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }








    return(
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">

                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portafolio</span>
                <h1>{'Hi I´m Angie'}<span className="wrap">{text}</span></h1>
                <p>Welcome to my online portfolio! I'm Angie, a backend developer passionate about crafting robust and efficient technological solutions. Explore my projects to see examples of my work in implementing complex algorithms, optimizing databases, and building scalable systems using technologies such as Python, Java, and SQL. Let's bring your technological vision to life together.</p>
              
                <button> <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')} >Let's connect</Nav.Link><ArrowRightCircle size={25}/></button> 

                </Col>

                <Col xs={12} md={6} xl={5}>

                    <img src={headerImg} alt="Headder Img" />
                </Col>
            </Row>
        </Container>
        </section>
    )
}