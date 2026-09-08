import type { Fetcher } from "@cloudflare/workers-types";

interface Env {
	ASSETS: Fetcher;
	TURNSTILE_SECRET: string;
	CONTACT_EMAIL: string;
}

export default {
	async fetch(req: Request, env: Env): Promise<Response> {
		const url = new URL(req.url);

		if (url.pathname === "/api/reveal-email") {
			if (req.method !== "POST")
				return new Response("Method Not Allowed", { status: 405 });

			const { token } = (await req.json().catch(() => ({}))) as {
				token?: string;
			};

			const verify = await fetch(
				"https://challenges.cloudflare.com/turnstile/v0/siteverify",
				{
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
					body: new URLSearchParams({
						secret: env.TURNSTILE_SECRET,
						response: token ?? "",
					}),
				},
			);
			const result = (await verify.json()) as { success: boolean };

			if (!result.success)
				return Response.json({ error: "verification failed" }, { status: 403 });
			return Response.json({ email: env.CONTACT_EMAIL });
		}

		return env.ASSETS.fetch(req as never) as unknown as Response;
	},
};
