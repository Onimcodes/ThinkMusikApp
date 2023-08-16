import React, {useState} from 'react'
import closebtn from '../../assets/close.png'
import moneyIcon from '../../assets/moneybag.svg'
const Modal = ({modal, isModalActive, toggleModal}) => {

    React.useEffect(() => {
        if (isModalActive) {
            document.body.classList.remove('modal-open');
        } else {
            document.body.classList.add('modal-open');
          
        }
    
        // Clean up the effect when the component unmounts
        return () => {
          document.body.classList.remove('modal-open');
        };
      }, [!isModalActive]);
  return (

    <div>
        <div className="overview__modal-bg" style={{display: isModalActive ? "none" : "flex"}}>
            <div className="overview__modal-container">
                <div className="overview__modal-image">
                    <img src={modal.imgUrl} alt="" />
                </div>
                <div className="overview__modal-content">
                    <div className="overflow__modal-close_btn" onClick={toggleModal} >
                        <img src={closebtn} alt="" />
                    </div>
                   <div className="overview__modal-about">
                        <div className="overview__modal-title">
                            <img src={moneyIcon} alt="" /><span>{modal.heading}</span>

                        </div>
                        <p className="overview__modal-sub-title">
                            {modal.subheading}
                        </p>
                        <div className="overview__others">
                            <h2>Your Referral Link</h2>
                            <div className="modal__textbar">
                            https://thinkmusik.com/dh48djdrd
                            </div>
                            <button className='overview__modal-button'>
                                Copy Link 
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M8.05079 6.78517V14.042C8.05079 14.5232 8.24193 14.9846 8.58216 15.3249C8.9224 15.6651 9.38385 15.8562 9.86501 15.8562H15.3077M8.05079 6.78517V4.97095C8.05079 4.48979 8.24193 4.02834 8.58216 3.68811C8.9224 3.34788 9.38385 3.15674 9.86501 3.15674H14.025C14.2656 3.15679 14.4963 3.25239 14.6663 3.42252L18.6703 7.42649C18.8404 7.59657 18.936 7.82726 18.9361 8.06782V14.042C18.9361 14.5232 18.7449 14.9846 18.4047 15.3249C18.0645 15.6651 17.603 15.8562 17.1219 15.8562H15.3077M8.05079 6.78517H6.23658C5.75542 6.78517 5.29397 6.97631 4.95373 7.31654C4.6135 7.65677 4.42236 8.11822 4.42236 8.59938V17.6705C4.42236 18.1516 4.6135 18.6131 4.95373 18.9533C5.29397 19.2935 5.75542 19.4847 6.23658 19.4847H13.4934C13.9746 19.4847 14.436 19.2935 14.7763 18.9533C15.1165 18.6131 15.3077 18.1516 15.3077 17.6705V15.8562" stroke="#D1D2D6" stroke-width="2.17706" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                   </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal