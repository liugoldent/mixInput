import React, { Component } from 'react'
import ReactMarkdown from "react-markdown";

const placeholder =
  `
  # Simple React Markdown Previewer
  ## You can use GitHub flavored markdown into the editor and see the preview beside as you type
  `;
class ReactTest extends Component{
  render () {
    return (
      <ReactMarkdown source='{placeholder}'/>
    )
  }
}

export default ReactTest
