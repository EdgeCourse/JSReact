import React from 'react';
import './App.css';

class CardInput extends React.Component {
  render() {
    return (
      <fieldset>
        <input
          name={this.props.name}
          id={this.props.id}
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder}
          required
        />
      </fieldset>
    );
  }
}

class CardTextarea extends React.Component {
  render() {
    return (
      <fieldset>
        <textarea
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.placeholder}
          required
        ></textarea>
      </fieldset>
    );
  }
}

class CardBtn extends React.Component {
  render() {
    return (
      <fieldset>
        <button
          className={this.props.className}
          type={this.props.type}
          value={this.props.value}
        >
          {this.props.value}
        </button>
      </fieldset>
    );
  }
}
/*
class CardProfileLinks extends React.Component {
  render() {
    const profileLinks = ['twitter', 'linkedin', 'facebook'];

    const linksList = profileLinks.map((link, index) => (
      <li key={index}>
        <button>
          <i className={'fa fa-' + link}></i>
        </button>
      </li>
    ));

    return (
      <div className="card-social-links">
        <ul className="social-links">{linksList}</ul>
      </div>
    );
  }
}
*/
class CardFront extends React.Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
            </div>
            <div className="col-xs-6 side-front-content">
              <h1>React</h1>
              <p>
          About us
              </p>
              <p>
                We are great
              </p>
              <p>
               We are so busy
              </p>
            </div>
          </div>
        </div>
      </div>
    );}
}

class CardBack extends React.Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Let's get in touch!</h1>
          <form formAction="" className="card-form">
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactFirstName"
                  id="contactFirstName"
                  type="text"
                  placeholder="Your first name"
                />
              </div>
              <div className="col-xs-6">
                <CardInput
                  name="contactLastName"
                  id="contactLastName"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactEmail"
                  id="contactEmail"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="col-xs-6">
                <CardInput
                  name="contactSubject"
                  id="contactSubject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <CardTextarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Your message"
            />

            <CardBtn
              className="btn btn-primary"
              type="submit"
              value="Send message"
            />
          </form>

          {/*<CardProfileLinks />*/}
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CardBack />
          <CardFront />
        </div>
      </div>
    );
  }
}

export default Card;
