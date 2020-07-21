import React from "react";
import { useTransition, animated } from "react-spring";
import data from "../data.json";
import '../scss/header.scss';
import '../scss/booking-panel.scss';
import '../scss/forms/master.scss';
import '../scss/forms/number-selector.scss';

function BookingPanel({ isShow, onCancel }) {

  // Load JSON
	const featuredData = JSON.parse(JSON.stringify(data.featured));
  
  const props = useTransition(isShow, null, {
    from: { opacity: 0, marginTop: "-50vw" },
    enter: { opacity: 1, marginTop: "0px" },
    leave: { opacity: 0, marginTop: "-50vw" }
  });

  const propsWrapper = useTransition(isShow, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.7 },
    leave: { opacity: 0 }
  });

  return (
    <>
      {propsWrapper.map(({ item, props, key }) => {
        return item ? (
          <animated.div
            key={key}
            style={props}
            onClick={onCancel}
            className="c-booking-panel__close"
          />
        ) : null;
      })}
      {props.map(({ item, props, key }) => {
        return item ? (
          <animated.div key={key} style={props} className="c-booking-panel">
            <header>
              <h1>Scandanivan Adventures</h1>
              <nav>
                <button type="button" onClick={onCancel}>CLOSE</button>
              </nav>
            </header>
            <div className="c-booking-panel__container" role="dialog" id="dialog1" aria-labelledby="dialog1_label" aria-modal="true">
              
              {featuredData.map((data, key) => {

                if (data.id === "winter-tour-gothenburg") {
                  return (					
                        <>                    
                          {/* content actual: image  */}

                          <div className="c-booking-panel__image">
                            <img src={data.media.large.url} alt="" />
                            {/* todo: responsive detect */}
                          </div>

                          {/* content actual: form  */}
                          <div className="c-booking-panel__form">
                            <div className="c-booking-panel__form--inner" >  
                            
                        
                                <h2>{data.title}</h2>
                                <p>From {data.price.currencyCode} {data.price.value} {data.price.unit} </p>
                                
                                <form className="f-forms" role="group">

                                    {/* Adults */}
                                    <div class="f-forms__element" id="f-forms__element__3c">
                                      <label for="f-forms__element-input__1a">
                                          <span class="f-forms__element--label">Adults </span>
                                      </label>
                                      <div class="f-forms--number-selector-wrapper">
                                          <i class="minus-indicator disabled">-</i>
                                          <input id="f-forms__element-input__1a" 
                                              class="f-forms--number-selector__input" 
                                              type="number" 
                                              aria-required="false" 
                                              aria-describedby="f-forms__element-input__1a" />
                                          <i class="plus-indicator">+</i>    
                                      </div>
                                    </div>

                                    {/* Children */}
                                    <div class="f-forms__element" id="f-forms__element__1b">
                                      <label for="f-forms__element-input__1b">
                                          <span class="f-forms__element--label">Children </span>
                                      </label>
                                      <div class="f-forms--number-selector-wrapper">
                                          <i class="minus-indicator disabled">-</i>
                                          <input id="f-forms__element-input__1b" 
                                              class="f-forms--number-selector__input" 
                                              type="number" 
                                              aria-required="false" 
                                              aria-describedby="f-forms__element-input__1b" />
                                          <i class="plus-indicator">+</i>    
                                      </div>
                                    </div>

                                    <div>Total: XXX</div>

                                    {/* replace with submit/post */}
                                    <div class="f-forms__element"> 
                                      <a href="#" className="e-button black">Book Experience </a>
                                    </div>

                                    {/* error handling */}
                                    <div class="f-forms__validation--notice">
                                        Please answer all mandatory questions above before continuing.
                                    </div>

                                </form>

                            </div>
                          </div>

                          {/* content actual: product desc  */}
                          <div className="c-booking-panel__copy">
                            <p>{data.body}</p>
                          </div>
                        </>
                  );
                } // end if

              })}
 
             
            
            </div>
          </animated.div>
        ) : null;
      })}
    </>
  );
}

export default BookingPanel;

