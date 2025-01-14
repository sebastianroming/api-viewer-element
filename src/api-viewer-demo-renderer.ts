import { LitElement, html, customElement, css, property } from 'lit-element';
import { CSSPropertyInfo, KnobValues, SlotValue } from './lib/types.js';
import { renderer } from './lib/renderer.js';

@customElement('api-viewer-demo-renderer')
export class ApiViewerDemoRenderer extends LitElement {
  @property({ type: String }) tag = '';

  @property({ attribute: false, hasChanged: () => true })
  knobs: KnobValues = {};

  @property({ attribute: false, hasChanged: () => true })
  slots: SlotValue[] = [];

  @property({ attribute: false, hasChanged: () => true })
  cssProps: CSSPropertyInfo[] = [];

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 1.5rem;
        border-top: solid 1px var(--ave-border-color);
      }
    `;
  }

  protected render() {
    return html`
      ${renderer(this.tag, this.knobs, this.slots, this.cssProps)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'api-viewer-demo-renderer': ApiViewerDemoRenderer;
  }
}
