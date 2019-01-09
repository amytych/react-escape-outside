import { configure } from "@storybook/react"

function loadStories() {
  require("../index.story.js")
}

configure(loadStories, module)
