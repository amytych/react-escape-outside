import React, { Component, PropTypes } from "react"

export default class EscapeOutside extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onEscapeOutside: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.onEscape = this.onEscape.bind(this)
    this.onClick = this.onClick.bind(this)
    this.getRef = this.getRef.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onEscape)
    document.addEventListener("click", this.onClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onEscape)
    document.removeEventListener("click", this.onClick, true)
  }

  onEscape(e) {
    if (e.keyCode === 27) this.props.onEscapeOutside()
  }

  onClick(e) {
    if (!this.ref.contains(e.target)) this.props.onEscapeOutside(e)
  }

  getRef(ref) {
    this.ref = ref
  }

  render() {
    const props = Object.assign({}, this.props)
    const { children } = props

    delete props.onEscapeOutside
    delete props.children

    return (
      <div
        { ...props }
        ref={ this.getRef }
      >
        { children }
      </div>
    )
  }
}
