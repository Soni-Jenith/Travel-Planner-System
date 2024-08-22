import React from "react";
import "./CustomiseTrips.css";

function CustomiseTrips() {
  return (
    <>
      <div className="customiseTrip">
        <h1>
          <u>Customise <span>your trip with us</span></u>
        </h1>
        <div className="TripSteps">
          
          <div className="Step">
            <div className="stepNumber"><h1>1</h1></div>
            <div className="description first">
              <h1>Describe your <span>dream Trip</span></h1>
              <p>
                Tell us about your perfect vacation.Destinations, preferences,
                and what you would like to see and do.
              </p>
            </div>
          </div>
          <div className="Step">
            <div className="stepNumber">
                <h1>2</h1>
            </div>
            <div className="description second">
              <h1>Get matched</h1>
              <p>
              Our team connects you with up to two vetted travel specialists,
              who will compete for your business.
              </p>
            </div>
          </div>
          <div className="Step">
            <div className="stepNumber"><h1>3</h1></div>
            <div className="description third">
              <h1>Plan your trip</h1>
              <p>
                Our team connects you with up to two vetted travel specialists, who will compete for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomiseTrips;