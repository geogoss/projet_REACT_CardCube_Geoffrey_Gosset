import './CardBody.css'

function CardBody() {
    return (
        <div>
            <p className='pBody'>Our equilibruim collection promotes balance and calm.</p>
            <div className='alignement'>
                <div className='pSvg1'>

                    <div>
                        <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>
                    </div>
                    <div>
                        <p className='pSousSvg1'>0.041ETH</p>
                    </div>
                </div>
                <div className='pSvg1'>

                    <div>
                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
                    </div>
                    <div>
                        <p className='pSousSvg2'>3 days left</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default CardBody;