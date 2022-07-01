import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  static override styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name = "World";

  protected override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "simple-greeting": SimpleGreeting;
  }
}
