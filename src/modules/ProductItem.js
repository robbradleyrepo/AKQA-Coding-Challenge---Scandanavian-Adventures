import React from 'react';
import data from "../data.json"; 

 
export default function ProductItem() {
	
	// Load JSON
	const ProductItem = JSON.parse(JSON.stringify(data.featured));
	const primaryData = ProductItem[0]; 

	return (
		<> 
			{ProductItem.map((data, key) => {
				if (data.id != primaryData.id) {
						return (					
							
							<div className="c-block" key={key}>
								
								{/* should be a background */}
								<img src={data.media.large.url} />
								
								<h2>{data.title}</h2>
								<p>From {data.price.currencyCode} {data.price.value} {data.price.unit} </p>
								<p>{data.body}</p>
							
							</div>
									
						);
					} 
				})
			} 
		</>
  );
};
