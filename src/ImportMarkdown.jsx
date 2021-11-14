import Markdown from 'markdown-to-jsx';
import React from "react";

class ImportMarkdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { md: '' };
  }

  componentDidMount() {
    fetch(this.props.path)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md: md })
      })
  }
  
  render() {
    return (
      <div className="post">
        <Markdown>
         {this.state.md}
        </Markdown>
      </div>
    )
  }
}

export default ImportMarkdown;