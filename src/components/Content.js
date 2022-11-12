import React from 'react'
import MultiProgress from 'react-multi-progress'

import { IoNewspaperOutline } from 'react-icons/io5'

import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowsAlt, AiOutlineBug, AiOutlineMail} from 'react-icons/ai'

import { RiPictureInPictureFill} from 'react-icons/ri'

import { ImBlocked} from 'react-icons/im'

import { FiMinimize} from 'react-icons/fi'

import { BiError} from 'react-icons/bi'

import { HiOutlineServer} from 'react-icons/hi'




function Content() {
  return (
    <>
    <div className='content'>
        <div className='upper-part'>
            <div className='card1'>
                <div className='card1-heading'>
                    <p>Assets</p>
                    <p>1842</p>
                </div>
                <div className='card1-progress-bar'>
                    
                <MultiProgress
                round={false}
			elements={[
				{
					value: 35,
					color: "greenyellow",
				},{
                    value: 25,
					color: "blue",
                    round:false,
                   
                },
                {
					value: 15,
					color: "lightblue",
				},
                {
					value: 10,
                    round:false,
					color: "green",
				},
			]}
		/>
        <div className='colors'> 

    <div className='color-1' >            
        <div className='greenyellow'>
           <p>368VPC</p>
                </div>
        </div>
        <div className='color-1' >
                <div className='blue'>
                    <p>276 Buckets</p>
                </div>
                </div>
                <div className='color-1' >
                <div className='lightblue'>
                    <p>184 Securitygroup</p>

                </div>
                </div>

                <div className='color-1' >
                <div className='green'>
                     <p>147 workedLoaded</p>
                </div>
                </div>

        </div>
                  
                </div>

                <div className='info'>
                    
                </div>
                
                  
            </div>




            <div className='card2'>
            <div className='card1'>
                <div className='card1-heading'>
                    <p>Alerts</p>
                    <p>40</p>
                </div>
                <div className='card1-progress-bar'>
                    
                <MultiProgress
                round={false}
			elements={[
				{
					value: 35,
					color: "greenyellow",
				},{
                    value: 25,
					color: "blue",
                    round:false,
                   
                },
                {
					value: 15,
					color: "lightblue",
				},
                {
					value: 10,
                    round:false,
					color: "green",
				},
			]}
		/>
        <div className='colors'> 

    <div className='color-1' >            
        <div className='greenyellow'>
           <p>368VPC</p>
                </div>
        </div>
        <div className='color-1' >
                <div className='blue'>
                    <p>276 Buckets</p>
                </div>
                </div>
                <div className='color-1' >
                <div className='lightblue'>
                    <p>184 Securitygroup</p>

                </div>
                </div>

                <div className='color-1' >
                <div className='green'>
                     <p>147 workedLoaded</p>
                </div>
                </div>

        </div>
                  
                </div>
                
                  
            </div>


            </div>



            <div className='card3'>
            <img src={require('./Chart.png')} />
            </div>



           
        </div>
        <div className='lower-section'>
            <div className='section-1'>
                <div className='risk-section'>
                    <h2>Major Risks</h2>
                    <ul className='risks'>
                        <li><IoNewspaperOutline/> Data At Risk</li>
                        <li><AiOutlineBug/> Malware</li>
                        <li><AiOutlineArrowsAlt/> Lateral Movement</li>
                        <li><RiPictureInPictureFill/> Unpatched Resources</li>
                        <li><ImBlocked/> Outdated services</li>
                        <li><FiMinimize/> Authentication Risk</li>

                    </ul>
                </div>

            </div>




            <div className='section-2'>
                <h2>Top 5 Data At risk</h2>
                <div className='section-21'>
                    <div className='section21-content'>


                    <BiError/> cv-bucket
                    <div className='table-content'>
                        <p>Email(28)</p>
                        <p><AiOutlineMail/></p>
                    </div>
                    <div className='table-content'>
                        <p>Credit Card Details(21)</p>
                        <p><HiOutlineServer/></p>
                    </div>


                    <div className='section-21-button'>
                        <p id="btn">Internet facing</p>
                        <p id='btn'>Pill</p>
                    </div>
                    <p>1 Day ago</p>
                    </div>
                    <div className='section21-content'>


                    <BiError/> Customer files bucket
                    <div className='table-content'>
                        <p>Email(28)</p>
                        <p><AiOutlineMail/></p>
                    </div>
                    <div className='table-content'>
                        <p>Credit Card Details(21)</p>
                        <p><HiOutlineServer/></p>
                    </div>


                    <div className='section-21-button'>
                        <p id="btn">Internet facing</p>
                        <p id='btn'>Pill</p>
                    </div>
                    <p>1 Day ago</p>
                    </div>
                    
                    <div className='section21-content'>


                    <BiError/>eks-dev-aws-dev
                    <div className='table-content'>
                        <p>Email(28)</p>
                        <p><AiOutlineMail/></p>
                    </div>
                    <div className='table-content'>
                        <p>Credit Card Details(21)</p>
                        <p><HiOutlineServer/></p>
                    </div>


                    <div className='section-21-button'>
                        <p id="btn">Internet facing</p>
                        <p id='btn'>Pill</p>
                    </div>
                    <p>1 Day ago</p>
                    </div>
                </div>

                {/* <div className='section-21'>
                    
                    
                </div> */}
                 <div className='arrow'>
            <AiOutlineArrowLeft style={{

                border:'1px solid white'
            }
            }/>
            <AiOutlineArrowRight style={{

            border:'1px solid white'
            }
                }/>
            </div> 

            </div>

          
 
        </div>


    </div>
    </>
  )
}

export default Content