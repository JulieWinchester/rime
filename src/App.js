import React from 'react';
import SessionDescriptions from './SessionDescriptions.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';
import ScrollableAnchor from 'react-scrollable-anchor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import data from './data.json';
import './App.css';

function CharacterPortrait(props) {
  return (
    <Col key={props.name} className="character-portrait-container" sm={4} xs={6}>
      <a href="#card" onClick={props.onClick}>
        <Image src={props.img} className="character-portrait img-shadow" alt={props.name} />
      </a>
      <a href="#card" onClick={props.onClick} className="character-portrait-name text-info">{props.name}</a>
    </Col>
  );
}

function shuffleArray(array) {
  const array2 = array.slice();
  let i = array2.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array2[i];
    array2[i] = array2[j];
    array2[j] = temp;
  }
  return array2;
}

function CharacterPortraitGrid(props) {
  let grid = props.characters.map((character, i) => {
    return (
      <CharacterPortrait key={character.name}
        name={character.name}
        img={character.imgpixel}
        onClick={(e) => props.onClick(i, e)}
      />
    );
  });

  if (props.characters.length) {
    return (
      <Row className="justify-content-center character-portrait-grid">
        {grid}
      </Row>
    );
  } else {
    return (
      <div>
        <Row className="justify-content-center">
          <p>The stage is empty, waiting to be filled.</p>
        </Row>
      </div>
    );
  }
}

function CharacterCard(props) {
  if (!props.character) {
    return null;
  }

  return (
    <Row className="justify-content-center media-container">
      <Col xs={11}>
      <Media className="">
            <Media.Body className="align-self-center">
              <h5>{props.character.name}</h5>
              <p>{props.character.desc}</p>
            </Media.Body>
            <Image
              className="align-self-center media-image"
              src={props.character.img}
              alt={props.character.name}
              rounded
            />
      </Media>
      </Col>
      <Col xs={0.5} className="icon-container">
      <FontAwesomeIcon icon={faTimes} size="lg" onClick={props.onClick} />
      </Col>
    </Row>
  );
}

function Session(props) {
  return (
    <div className="session">
      <Row className="justify-content-center">
        <h4>
          {props.session.name}
        </h4>
      </Row>
      <Row className="justify-content-center">
        <a className="return-link" href="#session" onClick={props.onClick}>Return To List of Sessions</a>
      </Row>
      <Row className="justify-content-center" noGutters>
        <SessionDescriptions session={props.session.number} />
      </Row>
    </div>
  );
}

function SessionsList(props) {
  let sessions = props.sessions.map((session, i) => {
    return (
      <Row key={i} className='justify-content-center'>
        <a className="text-info" href="#session" onClick={(e) => props.onClick(i, e)}>{session.name}</a>
      </Row>
    );
  });

  if (props.sessions.length) {
    return (
      <div>
        {sessions}
      </div>
    );
  } else {
    return (
      <div>
        <Row className="justify-content-center">
          <p>The story has not yet begun.</p>
        </Row>
      </div>
    );
  }

  
}

class SessionsPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    }
  }

  handleClick(i, e) {
    // e.preventDefault();
    this.setState({
      current: i,
    });
  }

  handleReturnClick(e) {
    // e.preventDefault();
    this.setState({
      current: null,
    });
  }

  render() {
    if (this.state.current === null) {
      return(
        <div>
          <Row className="justify-content-center">
            <h4>
              {this.props.title}
            </h4>
          </Row>
          <SessionsList 
            sessions={this.props.sessions}
            onClick={(i, e) => this.handleClick(i, e)} 
          />
        </div>
      );  
    } else {
      return (
        <div>
          <Session session={this.props.sessions[this.state.current]} onClick={(e) => this.handleReturnClick(e)}  />
        </div>
      );
    }
  }
}

function Parchment() {
  React.useEffect(() => {
    function handleResize() {
      var content = document.querySelector('#parchment');
      var container = document.querySelector('#contain');

      // SVG feTurbulence can modify all others elements, that's why "parchment" is in absolute position.
      // so for a better effect, absolute height is defined by his content.
      content.style.height = container.offsetHeight + 'px';    
    }

    handleResize();

    window.addEventListener('resize', handleResize)
  })

  return (
    <div id="parchment-container">
      <div id="parchment"></div>
      <div id="contain">
        <p id="parchment-title">Never-ending Night in the Icy North!</p>
        <p id="parchment-subtitle"><i>Esteemed society mage seeks members for mission of relief and discovery!</i></p>
        <p>Every tavern up and down the Sword Coast is abuzz with the news out of the far north - the Ten Towns of Icewind Dale lie under a mysterious eternal night, the sun never brightening to more than a hazy twilight at mid-day. Is the wintry goddess Auril to blame? Dark rumors whisper that Ten Towners are going to desperate and gruesome lengths to appease the Frostmaiden!</p>
        <p>Stout-hearted types are called to join an expedition to bring aid to the beleaguered folk of Icewind Dale, led by Vellynne Harpell. Both outsiders and Dale locals are welcome. Lady Vellynne, reknowned magus of the Arcane Brotherhood and scion of a wealthy and famous family, reportedly also seeks to uncover how the frozen curse might be lifted. But given the secretive nature of the Arcanes, who is to say what other motives might lurk beneath the ice? After all, Icewind Dale is the end of the world, a place of exiles and vagabonds, and a land of secrets and hidden pasts buried in the snow…</p>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCharacter: null,
      characters: shuffleArray(data.characters),
      sessions: data.sessions,
      coverImg: data.coverImg,
      logoImg: data.logoImg,
      title: data.title,
      subtitle: data.subtitle,
      copy: data.copy,
      characterListTitle: data.characterListTitle,
      sessionsListTitle: data.sessionsListTitle,
      shipTitle: data.shipTitle,
      graveyardTitle: data.graveyardTitle,
      graveyard: data.graveyard,
      author: data.author,
      authorEmail: data.authorEmail,
      testVar: "",
    }
  }

  handleClick(i, e) {
    this.setState({
      currentCharacter: this.state.characters[i],
    });
  }

  handleCardCloseClick(e) {
    e.preventDefault();
    this.setState({
      currentCharacter: null,
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.coverImg} className="App-header" alt="The Frostmaiden menaces a hapless traveler" />
        <Container className="App">
          <img src={this.state.logoImg} className="App-logo" alt="D&D Icewind Dale: Rime of the Frostmaiden" />
          <Row className="justify-content-center top-spacing-4" noGutters>
            <p dangerouslySetInnerHTML={{__html: this.state.copy}} />
          </Row>

          <Row className="justify-content-center middle-divider" noGutters></Row>

          <Row className="justify-content-center">
            <Parchment />
          </Row>

          <Row className="justify-content-center middle-divider" noGutters></Row>

          <Row className="justify-content-center">
            <h4>
              {this.state.characterListTitle}
            </h4>
          </Row>
          <CharacterPortraitGrid 
            characters={this.state.characters} 
            onClick={(i, e) => this.handleClick(i, e)}
          />
          <ScrollableAnchor id={'card'}>
            <Row className="justify-content-center top-spacing bottom-spacing">
              <CharacterCard 
                character={this.state.currentCharacter} 
                onClick={(e) => this.handleCardCloseClick(e)} 
              />
            </Row>
          </ScrollableAnchor>

          <ScrollableAnchor id={'session'}>
            <Row className="justify-content-center middle-divider" noGutters></Row>
          </ScrollableAnchor>

          <SessionsPane sessions={this.state.sessions} title={this.state.sessionsListTitle} />

          <Row className="justify-content-center bottom-divider" noGutters></Row>
          <Row className="footer justify-content-center">
            <Col>
              <span>
                {this.state.author}
              </span>
            </Col>
            <Col>
              <span>
                {this.state.authorEmail}
              </span>
            </Col>
          </Row>  
        </Container>
      </div>
    );
  }
}

export default App;
