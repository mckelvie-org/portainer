import { displayVersion } from './displayVersion';

describe('displayVersion', () => {
  it('shows the image tag of a patched build', () => {
    expect(displayVersion('2.45.3', '2.45.3-mck')).toBe('2.45.3-mck');
  });

  it('shows the plain version for stock images', () => {
    expect(displayVersion('2.45.3', '2.45.3')).toBe('2.45.3');
    expect(displayVersion('2.45.3', 'N/A')).toBe('2.45.3');
    expect(displayVersion('2.45.3', '')).toBe('2.45.3');
    expect(displayVersion('2.45.3', undefined)).toBe('2.45.3');
  });

  it('does not mistake another version for a suffix', () => {
    expect(displayVersion('2.45.3', '2.45.30')).toBe('2.45.3');
    expect(displayVersion('2.45.3', 'latest')).toBe('2.45.3');
  });
});
