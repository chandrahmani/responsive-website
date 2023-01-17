import React from "react"
import { Button } from "../Navbar/Button"
import '../../App.css'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <>
            <div className="hero-container">
                <video src="https://static.videezy.com/system/resources/previews/000/040/982/original/alb_dgraf011_1080p.mp4" autoPlay loop muted />
                <h1>ADENTURE AWAITS</h1>
                <p>What are you waiting for?</p>

                <div className="hero-btns">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSzie='btn--large'>
                        GET STARTED
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSzie='btn--large'>
                        WATCH TRAILER
                    </Button>

                </div>
            </div>
        </>
    )
}

export default HeroSection