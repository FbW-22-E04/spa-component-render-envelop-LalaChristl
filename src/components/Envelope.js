import React from 'react'
import image from '../image/postage.jpeg'
import './Envelope.css'

function Envelope(props) {
  return (
    <div className='container'>
      <div className='top-container'>
        <div>
          <p>{props.sender}</p>
          <p>{props.senderAddress}</p>
        </div>
        <div className='image-container'><img src={image} alt="" /></div>
      </div>
      <div className='bottom-container'>
        <p>{props.receiver}</p>
        <p>{props.receiverAddress}</p>
       
      </div>
    </div>
  )
}

export default Envelope









// function Envelope({ fromPerson, toPerson }) {

// 	return (
// 		<main className="envelope">
// 			<section className="fromPerson">
// 				<AddressLabel person={fromPerson} />
// 			</section>
// 			<section className="toPerson">
// 				<AddressLabel person={toPerson} />
// 			</section>
// 			<Stamp image={StampImage} />
// 		</main>
// 	);
// }


