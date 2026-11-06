/**
 * Where this fork's patched builds are published: the About box links a patched build's image tag and git commit
 * there. Change these when publishing elsewhere.
 */
export const FORK_IMAGE_REPO = 'sammck/portainer-ce';
export const FORK_SOURCE_URL = 'https://github.com/mckelvie-org/portainer';

/**
 * Whether this is a patched build of this fork: one tagged with the upstream version plus a suffix (e.g. image tag
 * "2.45.3-mck" for version "2.45.3"). Stock images are tagged with the version itself (or have no tag set).
 */
export function isPatchedBuild(version: string, imageTag?: string) {
  return !!imageTag && imageTag.startsWith(`${version}-`);
}

/**
 * The version to display for this build: the image tag for a patched build, so the UI makes clear it isn't a stock
 * release, and the version otherwise. Only the displayed text changes: the server version itself must stay a plain
 * release version, because it is compared for database migrations and agent compatibility.
 */
export function displayVersion(version: string, imageTag?: string) {
  return imageTag && isPatchedBuild(version, imageTag) ? imageTag : version;
}

export function forkImageTagUrl(imageTag: string) {
  return `https://hub.docker.com/r/${FORK_IMAGE_REPO}/tags?name=${encodeURIComponent(imageTag)}`;
}

export function forkCommitUrl(commit: string) {
  return `${FORK_SOURCE_URL}/commit/${encodeURIComponent(commit)}`;
}
