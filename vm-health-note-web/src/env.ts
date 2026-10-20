// This app declares no auth dependency, no external URL and no configurations.env
// keys, so window._env_ carries nothing the app reads. The shim still throws if
// /env-config.js never loaded, so a broken mount shows up here.
type Env = Record<string, never>;

declare global {
  interface Window {
    _env_: Env;
  }
}

if (!window._env_) {
  throw new Error(
    "window._env_ not set — /env-config.js failed to load. " +
      "The platform mounts this file; if you see this locally, host " +
      "/env-config.js from your dev server.",
  );
}

export const env: Env = window._env_;
