import React from "react";
// import html from "./chapters/4.html";

class ImportHtml extends React.Component {
  constructor(props) {
    super(props);
    this.state = { html: '<span />' };
  }

  componentDidMount() {    
    fetch(this.props.path)
      .then((res) => res.text())
      .then((html) => {
        this.setState({ html: html })
      })
  }

  render() {
    let html = {__html: this.state.html};

    return (
      <div>
        <div className="post" dangerouslySetInnerHTML={html}></div>
      </div>
    )
  }
}

export default ImportHtml;