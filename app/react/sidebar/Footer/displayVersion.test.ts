import {
  displayVersion,
  forkCommitUrl,
  forkImageTagUrl,
  isPatchedBuild,
} from './displayVersion';

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

describe('isPatchedBuild', () => {
  it('is true only for the version plus a suffix', () => {
    expect(isPatchedBuild('2.45.3', '2.45.3-mck')).toBe(true);
    expect(isPatchedBuild('2.45.3', '2.45.3')).toBe(false);
    expect(isPatchedBuild('2.45.3', '2.45.30')).toBe(false);
    expect(isPatchedBuild('2.45.3', undefined)).toBe(false);
  });
});

describe('fork links', () => {
  it('links the image tag on Docker Hub and the commit on GitHub', () => {
    expect(forkImageTagUrl('2.45.3-mck')).toBe(
      'https://hub.docker.com/r/sammck/portainer-ce/tags?name=2.45.3-mck'
    );
    expect(forkCommitUrl('8963849f0')).toBe(
      'https://github.com/mckelvie-org/portainer/commit/8963849f0'
    );
  });
});
