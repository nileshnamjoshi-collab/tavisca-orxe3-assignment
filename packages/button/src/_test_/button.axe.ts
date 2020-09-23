import { OrxeButton } from '../';

import { toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-button-axe', () => {
  let Button;

  beforeEach(async () => {
    OrxeButton;
    document.body.appendChild(document.createElement('Button'));
    Button = document.querySelector('Button') as OrxeButton;
  });

  afterEach(() => {
    Button.remove();
  });

  it('should have Button', () => {
    expect(Button).toBeTruthy();
  });
});
