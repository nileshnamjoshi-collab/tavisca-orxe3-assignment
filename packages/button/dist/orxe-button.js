var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, LitElement } from 'lit-element';
import styles from './button-css';
let OrxeButton = class OrxeButton extends LitElement {
    render() {
        return html `
      <div class="cards">
        <div class="card">
          <h1>Primary Button components</h1>
          <h2>Large</h2>
          <p>
            <button class="primary-btn-large" @click="${this.clicked}">
              Large Button
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
    clicked() {
        console.log('clicked');
    }
};
OrxeButton.styles = styles;
OrxeButton = __decorate([
    customElement('orxe-button')
], OrxeButton);
export default OrxeButton;
