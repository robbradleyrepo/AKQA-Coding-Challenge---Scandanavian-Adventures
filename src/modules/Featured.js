import React, { useState, useEffect } from 'react';
import data from "../data.json";
import BookingPanel from "./BookingPanel"; 

export default function Featured() {
	
	// Reponsive/Resize for Background Image
	// Todo: CLOSE Modal on Resize

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	
	useEffect(() => {
		
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};
		
		window.addEventListener('resize', handleWindowResize);
		
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		}
	}, []);

	// Set Booking Panel : Inactive
	const [isShowModal, setIsShowModal] = useState(false);
	
	// Load JSON
	const featuredData = JSON.parse(JSON.stringify(data.featured));
	const primaryData = featuredData[0]; 
  
	return (
		<>
			<section className="full-width">
				
				{featuredData.map((data, key) => {
						
						if (data.id === primaryData.id) {

							// move to breakpoint partial, import and pass here for scalability
							let desktopImage = data.media.large.url;
							let mobileImage = data.media.small.url;
							const imageUrl = windowWidth >= 768 ? desktopImage : mobileImage;
			
							return (					
								
									<div className="c-hero" style={{backgroundImage: `url(${imageUrl})` }}>
										<div className="c-hero__content" key={key}>
											<h2>{data.title}</h2>
											<p>From {data.price.currencyCode} {data.price.value} {data.price.unit} </p>
											
											<a href="#" className="e-button white" onClick={() => setIsShowModal(!isShowModal)}>Book Experience </a>
											<p>(button actually works!)</p>
										</div>
									</div> 
							);
						}

						else {
							// map through other ids to see what content is available OR default content
						}

					})
				}
			</section>
			
			<BookingPanel isShow={isShowModal} onCancel={() => setIsShowModal(false)} />
		</>
  );
};
