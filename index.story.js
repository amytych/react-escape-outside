import React, { Component } from "react"
import { storiesOf } from "@storybook/react"

import EscapeOutside from "./index"

class MyComponent extends Component {
  state = { isOpen: false }

  handleEscapeOutside = () => {
    this.setState({ isOpen: false })
  }

  handleOnClick = () => {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <button
          onClick={this.handleOnClick}
          style={{
            marginBottom: "1rem",
            padding: "1rem 2rem",
            color: "#fff",
            backgroundColor: "#333",
            fontSize: "1rem",
            borderRadius: 3,
          }}
        >
          {"Show content"}
        </button>

        {this.state.isOpen && (
          <EscapeOutside
            onEscapeOutside={this.handleEscapeOutside}
            style={{
              width: 500,
              height: 50,
              lineHeight: "50px",
              textAlign: "center",
              border: "1px solid #ccc",
            }}
          >
            Hide me by clicking outside me or by pressing the Escape key.
          </EscapeOutside>
        )}
      </div>
    )
  }
}

storiesOf("EscapeOutside", module).add("default", () => <MyComponent />)
