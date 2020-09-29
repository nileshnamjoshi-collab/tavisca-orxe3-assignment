import { OrxeButton } from '../';
import { toHaveAttribute } from '@testing-library/jest-dom/matchers';
expect.extend({
  toHaveAttribute,
});
describe('orxe-button', () => {
  let btn;
  beforeEach(async function() {
    OrxeButton;
    btn = (await document.body.appendChild(
      document.createElement('orxe-button')
    )) as OrxeButton;
  });

  afterEach(async function() {
    await btn.remove();
  });
  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (btn.hasOwnProperty(property)) {
        btn[property] = properties[property];
      }
    }
    await btn.requestUpdate();
  }

  function getByTestId(id: string): HTMLElement {
    return btn.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('should check default value for properties of button', () => {
    expect(btn.buttonType).toEqual('secondary-btn');
    expect(btn.buttonSize).toEqual('small-btn');
    expect(btn.disabled).toBeFalsy();
    expect(btn.iconType).toEqual('');
  });

  it('Should check button is primary button if no buttonType is given', async () => {
    const container = getByTestId('container');
    expect(container).toHaveAttribute('button-type', 'secondary-btn');
  });

  it('Should set secondary button Type', async () => {
    await setProperties({ buttonType: 'secondary-btn' });
    const container = getByTestId('container');
    expect(container).toHaveAttribute('button-type', 'secondary-btn');
  });
});
