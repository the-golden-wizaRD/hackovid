import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import currentUser from './currentUser'
import hackathons from './hackathons'
import featured from './featured'

class UserLogoContainer extends React.Component {
  render() {
    return (
      <div>
        <img id="userImage"
          src={currentUser.user.profilePic}
          alt="profile pic" >
        </img>
      </div>
    );
  }
}
ReactDOM.render(
  <UserLogoContainer />,
  document.getElementById('userLogoContainer')
);

class Hackathons extends React.Component {
  getData() {
    const hackathon = hackathons.map((value) => {
      return (
        <div class="hackathonCards">
          <div className="frontFace">
            <div className="hackathonPoster">
              <img className="posterImg"
                src={value.poster} alt={value.name} >
              </img>
            </div>
            <div className="nameHolder">
              <span className="hackathonName">{value.name}</span>
            </div>
          </div>
          <div className="backFace">
            <button className="backFaceText">
              <a href={value.website} target="_blank" rel="noopener noreferrer">{value.name}</a>
            </button>
            <p className="backFaceText">Organised by <br></br>{value.organizer}</p>
            <p className="backFaceText">{value.start}<br></br>to<br></br>{value.end}</p>
            <button className="backFaceText">
              <a href={value.website} target="_blank" rel="noopener noreferrer">Details</a>
            </button>
            <br></br>
            <a href={value.fbLink} className="backFaceSocialIcons" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </a> &nbsp;&nbsp;
            <a href={value.github} className="backFaceSocialIcons" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </a> &nbsp;&nbsp;
          </div>
        </div>);
    });
    return hackathon;
  }
  render() {
    return (
      <div className="cardHolder">
        {this.getData()}
      </div>
    );
  }
}
ReactDOM.render(
  <Hackathons />,
  document.getElementById('hackathons')
);

class Featured extends React.Component {
  getFeatured() {
    const features = featured.map((value) => {
      return (
        <div className = "featurePosts">
          <div className="featurePoster">
            <img className = "featureImg" src={value.poster} alt={value.name}></img>
          </div>
          <div className="featureDescriptionDiv">
            <p class = "featureName">{value.name}</p>
            <p className = "featureDescription">
              <p>
                {value.description}
              </p>
              <p>
                duration : {value.start} to {value.end}
              </p>
              <p>
                entry fee : {value.fees}
              </p>
              <button className = "featureRegister">
                <a href = {value.website} target="_blank" rel="noopener noreferrer">Register</a>
              </button>
            </p>
            <p className="featureSocialIcons">
              <a href={value.fbLink} target="_blank" rel="noopener noreferrer">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
              </a> &nbsp;&nbsp;
              <a href={value.github} target="_blank" rel="noopener noreferrer">
                <i class="fa fa-github-square" aria-hidden="true"></i>
              </a> &nbsp;&nbsp;
            </p>
            <p className ="featuredWord">featured</p>
          </div>
        </div>
      );
    });
    return features;
  }
  render(){
    return(this.getFeatured());
  }
}
ReactDOM.render(
  <Featured />,
  document.getElementById('featured')
);
