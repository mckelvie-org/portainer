/**
 * The version to display for this build. Patched builds of this fork are tagged with the upstream version plus a
 * suffix (e.g. image tag "2.45.3-mck" for version "2.45.3"); show that tag so the UI makes clear it isn't a stock
 * release. Only the displayed text changes: the server version itself must stay a plain release version, because it
 * is compared for database migrations and agent compatibility. Stock images, whose image tag is the version itself
 * (or unset), display the version unchanged.
 */
export function displayVersion(version: string, imageTag?: string) {
  if (imageTag && imageTag.startsWith(`${version}-`)) {
    return imageTag;
  }

  return version;
}
