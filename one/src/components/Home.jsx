import React from 'react'
import vp from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'


const Home = () => {
  return (
    <>
    <div className='home' id="home">
        <main>
            <h1>TechyStark</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>


    <div className='home2'>
        <img src={vp} alt="none"/>
        <div>
            <p>
                We are one and only solution to the tech problems you face every day.we are leading tech company whose aim is to increase the problem solving ability in children
                tech company whose aim is to increase the problem solving ability in children
            </p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
            <h1>Who We Are</h1>
            <p>
            We are one and only solution to the tech problems you face every day.we are leading tech company whose aim is to increase the problem solving ability in children
            We are one and only solution to the tech problems you face every day.we are leading tech company whose aim is to increase the problem solving ability in children
            We are one and only solution to the tech problems you face every day.we are leading tech company whose aim is to increase the problem solving ability in children
            We are one and only solution to the tech problems you face every day.we are leading tech company whose aim is to increase the problem solving ability in children
            We are one and only solution to the tech problems you face every day.we are leading tech company whose aim is to increase the problem solving ability in children   
            </p>
        </div>
    </div>
    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>
            <div>
                <article style={{animationDelay:"0.1s"}}>
                    <div><AiFillGoogleCircle/><p>Google</p></div>
                </article>
                <article style={{animationDelay:"0.4s"}}>
                    <div><AiFillYoutube/><p>Google</p></div>
                </article>
                <article style={{animationDelay:"0.8s"}}>
                    <div><AiFillAmazonCircle/><p>Google</p></div>
                </article>
                <article style={{animationDelay:"1s"}}>
                    <div><AiFillInstagram/><p>Google</p></div>
                </article>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home