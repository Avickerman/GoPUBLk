import React from "react";
import Hero from "../../components/Hero";
import "./About.css";
import pic1 from "./entrepreneur.jpg";
import pic2 from "./angelinvestor-300x300.jpg";
const About = () => (
  <div>
    <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
      <h1>GoPUBLk</h1>
    </Hero>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1>The Mission of GoPUBLk</h1>
            <p>Connecting Entrepreneurs and Angel Investors. Fostering Relationships, Effecting Opportunity.
              <hr></hr>
              </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src={pic1} alt="Card image cap"></img>
                  <div class="card-body">
                  <h5 class="card-title">Benefits For Entrepreneurs</h5>
                  <ul>
                    <li>High Exposure</li>
                    <li>Diverse Investor Backgrounds</li>
                    <li>Mentorship</li>
                    <li>Low Barrier to Entry</li>
                  </ul>
                  <a href="/create" class="btn btn-primary">Submit Your Project</a>
                  </div>
                </div>
          </div>
          <div className="col-md-6">
          <div class="card" style="width: 18rem;">
                <img class="card-img-top" src={pic2} alt="Card image cap"></img>
                  <div class="card-body">
                  <h5 class="card-title">Benefits For Investors</h5>
                  <ul>
                    <li>Broad range of industries</li>
                    <li>Highly detailed business plans</li>
                    <li>Ease of use</li>
                    <li>Low barrier to entry</li>
                  </ul>
                  <a href="/search" class="btn btn-primary">Browse Projects</a>
                  </div>
                </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
);

export default About;
