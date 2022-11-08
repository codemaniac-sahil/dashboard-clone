import React from 'react'
import MultiProgress from 'react-multi-progress'


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

    </div>
    </>
  )
}

export default Content