// Single source of truth for site-wide constants.
// Add here instead of copy-pasting URLs/markup across pages.
export const RESUME_EMBED_URL =
	"https://docs.google.com/document/d/e/2PACX-1vSWZYbJNZoLJTBQ7rmHvI7-M6x9I9e0opny4eqCBcgDx_85IERYLlH2to3KrbCCeNpffZbyhsnSqMMs/pub?embedded=true";

export const RESUME_EDIT_URL =
	"https://docs.google.com/document/d/1zs6QkI8oJYTMTC_cTw3M9sSPVFO32v0IhQNRrL3xIgE/edit?usp=sharing";

export const GITHUB_URL = "http://github.com/ethanl21";

export const LINKEDIN_URL = "https://www.linkedin.com/in/ethan-lew-97825b167/";

export const MENU_LINKS = [
	{ name: "File" },
	{ name: "Edit" },
	{ name: "View" },
	{ name: "Window" },
	{ name: "Help" },
] as const;

// Public Cloudflare test key (always passes). The contact page swaps to this
// at runtime on local hostnames, so `pnpm build && wrangler dev` works with
// no extra flags. Harmless in production output: dummy tokens are rejected
// by the real secret.
export const CF_TURNSTILE_TEST_SITEKEY = "1x00000000000000000000AA";

export const CF_TURNSTILE_SITEKEY =
	// Explicit override wins (e.g. `CF_TURNSTILE_SITEKEY=... pnpm build`).
	process.env.CF_TURNSTILE_SITEKEY ||
	// Otherwise the always-pass dummy key outside production builds.
	(import.meta.env.DEV
		? CF_TURNSTILE_TEST_SITEKEY
		: "0x4AAAAAAEsTTvVcx-Bo52Yw");
