import { html, customElement, LitElement, property } from 'lit-element';
import styles from './button-css';

@customElement('orxe-button')
export default class OrxeButton extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  @property({ attribute: false })
  primayBtndata = {
    label: 'Large',
    displayName: 'Large Button',
    class: 'primary-btn-large',
    arialabel: 'Primay large button',
  };

  @property({ type: String, reflect: true, attribute: 'a11y-button-label' })
  a11yButtonLabel = this.primayBtndata.arialabel;

  render() {
    return html`
      <div class="cards">
        <div class="card">
          <h1>Primary Button components</h1>
          <h2>${this.primayBtndata.label}</h2>
          <p>
            <button
              a11y-label=${this.a11yButtonLabel}
              class="${this.primayBtndata.class}"
              @click="${this.clicked}"
            >
              ${this.primayBtndata.displayName}
            </button>
          </p>
          <h2>Medium</h2>
          <p>
            <button class="primary-btn-medium" @click="${this.clicked}">
              Medium Button
            </button>
          </p>
          <h2>Small</h2>
          <p>
            <button class="primary-btn-small" @click="${this.clicked}">
              Small Button
            </button>
          </p>
          <h2>Disabled</h2>
          <p>
            <button
              disabled
              class="primary-btn-large btn-disable"
              @click="${this.clicked}"
            >
              Disabled Button
            </button>
          </p>
        </div>
        <div data-testId="checkbox-container" class="card">
          <h1>Secondary Button components</h1>
          <h2>Large</h2>
          <p>
            <button class="secondary-btn-large" @click="${this.clicked}">
              Large Button
            </button>
          </p>
          <h2>Medium</h2>
          <p>
            <button class="secondary-btn-medium" @click="${this.clicked}">
              Button
            </button>
          </p>
          <h2>Small</h2>
          <p>
            <button class="secondary-btn-small" @click="${this.clicked}">
              Button
            </button>
          </p>
          <h2>Disabled</h2>
          <p>
            <button
              disabled
              class="secondary-btn-large btn-disable"
              @click="${this.clicked}"
            >
              Disabled Button
            </button>
          </p>
        </div>
        <div class="card">
          <h1>Tertiary Button</h1>
          <h2>Large</h2>
          <p>
            <button
              class="tertiary-btn-large tertiary-txt tertiary-btn-border"
              @click="${this.clicked}"
            >
              Button
            </button>
          </p>
          <h2>Medium</h2>
          <p>
            <button
              class="tertiary-btn-medium tertiary-txt tertiary-btn-border"
              @click="${this.clicked}"
            >
              Button
            </button>
          </p>
          <h2>Small</h2>
          <p>
            <button
              class="tertiary-btn-small tertiary-txt-small tertiary-btn-border"
              @click="${this.clicked}"
            >
              Button
            </button>
          </p>
          <h2>Disabled</h2>
          <p>
            <button
              disabled
              class="tertiary-btn-large tertiary-txt tertiary-btn-disable"
              @click="${this.clicked}"
            >
              Button
            </button>
          </p>
        </div>
        <div class="card">
          <h1>Link Button</h1>
          <h2>Large</h2>
          <p>
            <a class="link-btn link-txt" @click="${this.clicked}">
              <img src="icon.svg" alt="Icon List" />
              Button
            </a>
          </p>
          <h2>Small</h2>
          <p>
            <a class="link-btn link-txt-small" @click="${this.clicked}">
              Button
            </a>
          </p>
        </div>
        <div class="card">
          <h1>Icon Link Button</h1>
          <h2>Large</h2>
          <p>
            <a class="link-btn link-txt" @click="${this.clicked}">
              Button
            </a>
          </p>
          <h2>Small</h2>
          <p>
            <a class="link-btn link-txt-small" @click="${this.clicked}">
              Button
            </a>
          </p>
        </div>
      </div>
    `;
  }

  /**
   *  Event for component button
   */
  clicked() {
    console.log('clicked');
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
