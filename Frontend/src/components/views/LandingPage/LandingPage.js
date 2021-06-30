import React from 'react'
import { useState, useEffect } from 'react'
import {Icon} from 'antd';


function LandingPage(props) {
    return (
        <header id='header'>
            <div className='intro'>
                <div className='overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2 intro-text'>
                                <div className='headertop'>
                                    International Conference on Application Frameworks
                                    <span></span>
                                </div>
                                <p>But don't take our word for it, here's what past attendees have said:
                                    ...
                                    “A great example of a virtual conference that actually felt like a conference, with interaction with real people – not just a bunch of webinars to watch. Kudos to the GOTO team.”
                                    Robin Moffatt, senior developer advocate at Confluent
                                    ...
                                    “The combination of topics, sessions and speakers is really great. It is the essence of GOTO in an online format!”
                                    Michael Repplinger, team leader at Dillinger
                                    ...
                                    "Incredible job by the team at GOTO for creating an immersive, educational and fun remote conference experience!"
                                    Garrett Smith, founder at Guild AI</p>
                                <a
                                    href='#features'
                                    className='btn btn-custom btn-lg page-scroll'
                                >
                                    Register Now
                                </a>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        )

}//test1

export default LandingPage
