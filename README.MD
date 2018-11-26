# React Escape Outside

Higher Order Component to close wrapped component by pressing ESC key or
clicking outside. Combines two separate funcionalities I often find
useful together.

## Usage
`npm i react-escape-outside --save`

```jsx
import EscapeOutside from "react-escape-outside"

class MyComponent extends Component {

  constructor() {
    super()

    this.state = {
      isOpen: false,
    }

    this.handleEscapeOutside = this.handleEscapeOutside.bind(this)
  }

  //… more of your own code, e.g to open your modal

  handleEscapeOutside() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <EscapeOutside onEscapeOutside={ this.handleEscapeOutside }>
        <div>Some content that will be closed</div>
      </EscapeOutside>
    )
  }
}
```

## Specify mouse and touch event

Mouse and touch handlers are attached to `click` and `touchend` events but you can override these defaults with `mouseEvent` and `touchEvent` props.

Make sure to escape outside from time to time!

:ocean: :sunny: :cloud: :palm_tree: :evergreen_tree: :mushroom: :herb:
:honeybee: :bear: :frog: :crocodile:
