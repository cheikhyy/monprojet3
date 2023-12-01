import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Cheikh',
        bio: 'Hello je suis Devellopeur Front-End .',
        imgSrc: 'https://i.pinimg.com/564x/fe/4a/5d/fe4a5d3acbbc52b189c2e074bf7383c1.jpg',
        profession: 'Developpeur',
      },
      show: false,
      elapsedTime: 0,
    };

    // Démarrez le compteur dès que le composant est monté
    this.interval = setInterval(this.updateElapsedTime, 1000);
  }

  componentWillUnmount() {
    // Nettoyez l'intervalle lorsque le composant est démonté
    clearInterval(this.interval);
  }

  updateElapsedTime = () => {
    this.setState((prevState) => ({
      elapsedTime: prevState.elapsedTime + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;
    const imgStyle={
      width:"20rem",
      height:"20rem",
      borderRadius:".3rem",
    
    }

    return (
      <div style={{textAlign:"center"}}>
        <button  onClick={this.toggleShow}> Clickez ici   </button>

        {show && (
          <div>
            <h2 style={{color:'red'}}>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} style={imgStyle}/>
            <p style={{color:'blue'}}>Profession: {person.profession}</p>
          </div>
        )}

        <p>heure: {elapsedTime} seconde</p>
      </div>
    );
  }
}

export default App;
