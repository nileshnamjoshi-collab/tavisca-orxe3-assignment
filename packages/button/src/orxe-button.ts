/**
 * @packageDocumentation
 * @module Button
 */

import { html, customElement, LitElement, property } from 'lit-element';
import styles from './button-css';

@customElement('orxe-button')
export default class OrxeButton extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  /**
   *
   * @memberof OrxeButton
   * This is used to give the type of a button(primary-button, secondary-button or tertiary-button)
   */
  @property({ type: String, reflect: true, attribute: 'btn-type' })
  buttonType = 'secondary-btn';

  /**
   *
   * @memberof OrxeButton
   * This is used to give the size of a button(large-button, medium-button or small-button)
   */
  @property({ type: String, reflect: true, attribute: 'btn-size' })
  buttonSize = 'small-btn';

  @property({ type: String, reflect: true, attribute: 'icon-type' })
  iconType = '';

  @property({ type: String, reflect: true, attribute: 'btn-label' })
  buttonLabel = 'Seconday';

  /**
   *
   * @memberof OrxeButton
   * this property is used to disable the button
   */
  @property({ type: Boolean, reflect: true, attribute: 'btn-disable' })
  disabled = false;

  /**
   *
   * @memberof OrxeCard
   * This property will set the aria-label
   */
  @property({ type: String, reflect: true, attribute: 'a11y-label' })
  a11yLabel = 'button';

  render() {
    if (this.buttonType === 'icon') {
      return html`
        ${this._renderIconButton()}
      `;
    }

    if (this.buttonType === 'link-btn') {
      return html`
        ${this._renderLinkButton()}
      `;
    }
    if (this.buttonType === 'tertiary-btn' && this.disabled) {
      return html`
        ${this._renderTertiaryDisabled()}
      `;
    }
    return html`
      <button
        data-testid="button__container"
        class="container"
        @click="${() => this._handleClickEvent()}"
        btn-disable=${this.disabled}
        btn-size=${this.buttonSize}
        aria-label="${this.a11yLabel}"
        btn-type=${this.buttonType}
      >
        ${this.buttonLabel}
        <slot></slot>
      </button>
    `;
  }

  private _renderIconButton() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div @click="${() => this._handleClickEvent()}">
        <i
          class="fa fa-${this.iconType}"
          btn-size=${this.buttonSize}
          btn-disable=${this.disabled}
        ></i>
      </div>
    `;
  }

  private _renderLinkButton() {
    return html`
      <a
        href="#link"
        class="link-container"
        btn-size=${this.buttonSize}
        @click="${() => this._handleClickEvent()}"
      >
        ${this.buttonLabel}
      </a>
    `;
  }

  private _renderTertiaryDisabled() {
    return html`
      <button
        data-testid="tertiary__container"
        class="tertiary-disabled"
        aria-label="${this.a11yLabel}"
      >
        ${this.buttonLabel}
      </button>
    `;
  }

  _handleClickEvent(): void {
    const event = new CustomEvent('ButtonEvent', {
      detail: {
        message: 'Button clicked',
      },
    });
    this.dispatchEvent(event);
  }

  static styles = styles;
}
