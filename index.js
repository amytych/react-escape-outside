import React, { Component } from "react"
import PropTypes from "prop-types"

export default class EscapeOutside extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onEscapeOutside: PropTypes.func.isRequired,
    mouseEvent: PropTypes.string,
    touchEvent: PropTypes.string,
  }
  static defaultProps = {
    mouseEvent: "click",
    touchEvent: "touchend",
  }

  constructor() {
    super()
    this.onEscape = this.onEscape.bind(this)
    this.onClick = this.onClick.bind(this)
    this.getRef = this.getRef.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onEscape)
    document.addEventListener(this.props.mouseEvent, this.onClick, true)
    document.addEventListener(this.props.touchEvent, this.onClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onEscape)
    document.removeEventListener(this.props.mouseEvent, this.onClick, true)
    document.removeEventListener(this.props.touchEvent, this.onClick, true)
  }

  onEscape(e) {
    if (e.keyCode === 27) this.props.onEscapeOutside()
  }

  onClick(e) {
    if (this.ref && !this.ref.contains(e.target)) this.props.onEscapeOutside(e)
  }

  getRef(ref) {
    this.ref = ref
  }

  render() {
    const props = Object.assign({}, this.props)
    const { children } = props

    delete props.onEscapeOutside
    delete props.children
    delete props.mouseEvent
    delete props.touchEvent

    return (
      <div ref={this.getRef} {...props}>
        {children}
      </div>
    )
  }
}
