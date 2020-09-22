import { OrxeButton } from '../';
import '@testing-library/jest-dom';

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

  function getByTestId(id: string): HTMLElement {
    return btn.shadowRoot.querySelector(`[data-testId=${id}]`);
  }

  it('should render should get call', () => {
    expect(btn.render()).toBeTruthy();
  });

  it('Should checkbox have attribute checkbox-disabled', async () => {
    const btnContainer = getByTestId('checkbox-container');
    expect(btnContainer).toHaveClass('card');
    expect(btnContainer).toHaveAttribute('class', 'card');
  });

  it('should have click event', () => {
    expect(btn.clicked()).toBeUndefined();
  });
});
