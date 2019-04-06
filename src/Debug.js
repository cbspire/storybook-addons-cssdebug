import React, { Component, Fragment } from 'react';
import { Icons, IconButton } from '@storybook/components';

const iframeId = 'storybook-preview-iframe';

export default class ViewportTool extends Component {
  constructor(props) {
    super(props);
    this.debug_el = null;
    this.toggle = this.toggle.bind(this)
  }

  /*
  componentDidMount() {
    const iframe = window.document.getElementById(iframeId)
    const iframeDoc = iframe.contentDocument;
    const root = iframeDoc.getElementById('root')
    root.style.padding = "3rem";
    root.style.display = "flex";
  }
  */

  toggle() {
    const iframe = window.document.getElementById(iframeId)
    const iframeDoc = iframe.contentDocument;

    if (this.debug_el) {
      iframeDoc.body.removeChild(this.debug_el);
      this.debug_el = null;
      return
    }
    
    this.debug_el = iframeDoc.createElement("style");
    const text_node = window.document.createTextNode(`#root *:not(path):not(g):not(.debug-exlude) { color: hsla(210, 100%, 100%, 0.9) !important; background: hsla(210, 100%,  50%, 0.5) !important; outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important; box-shadow: none !important; filter: none !important; }`);
    this.debug_el.append(text_node);
    iframeDoc.body.appendChild(this.debug_el);
  }

  render() {
    
    return (
      <Fragment>
          <IconButton key="cssdebug" title="Change the size of the preview" onClick={this.toggle}>
            <Icons icon="wrench" />
          </IconButton>
      </Fragment>
    );
  }
}