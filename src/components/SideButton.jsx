import React from 'react'
import './SideButton.css'

const SideButton = () => {
  return (
    <div className='social'>
        <a href="https://www.facebook.com/tanakorn.muwinitkul/" target="_blank"  rel="noopener noreferrer">Facebook <i className="fab fa-facebook"></i></a>
        <a href="https://github.com/flukninja" target="_blank"  rel="noopener noreferrer">Github <i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/tanakorn-muwinitkul" target="_blank"  rel="noopener noreferrer">Linkedin <i className="fab fa-linkedin"></i></a>
        <a href="https://www.youtube.com/channel/UCcwp-goy3cM_TW3ZMJWDYQg" target="_blank"  rel="noopener noreferrer">Youtube <i className="fab fa-youtube"></i></a>
        <a href="mailto:tanakornfmu@gmail.com" target="_blank"  rel="noopener noreferrer">Email <i className="fas fa-envelope"></i></a>
        <a href="https://drive.google.com/file/d/1EBBMqaD8wXktcuHDeEdMWFZh4Q3nEFMV/view?usp=sharing" target="_blank"  rel="noopener noreferrer">Resume <i className="far fa-file"></i></a>
    </div>
  )
}

export default SideButton