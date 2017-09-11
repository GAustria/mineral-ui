import { runUxPinCodeCommand } from '../../utils/command/runUxPinCodeCommand';

describe('--help option', () => {
  it('it prints help for --dump option', () => {
    // when
    return runUxPinCodeCommand('./', '--help').then((output) => {
      // then
      expect(output).toContain('--dump');
      expect(output).toContain('Show all information about the design system repository and NOT send to UXPin');
    });
  });
});
