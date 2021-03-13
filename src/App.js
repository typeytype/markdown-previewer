import React from "react";
import Badge from "react-bootstrap/Badge";
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "This is a React Markdown Previewer app. Please use both the app and its code freely.  \n# Hello,  \n _Can anybody hear me?_  \n**I'm not sure**  \n~~Scratch that~~  \n## Hello! Anybody there?  \n > Perhaps a block quote will rustle up a response?  \nNo? Then no one will mind if I shamelessly plug [my website](https://mrmontyhall.com)?"
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "30vw",
      height: "30vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      backgroundColor: '#d3d3d3'
    };

    var outputStyle = {
      width: "80vw",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="primary">
                  React Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="mt-4">
            <div className="col-md-12">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input text-center">
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                </textarea>
              </div>
            </div>
            <hr></hr>

            <div className="mt-4 col-md-12">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="light">
                    Markdown Preview
                  </Badge>
                </h4>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}