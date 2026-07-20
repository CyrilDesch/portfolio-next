import { NextRequest, NextResponse } from "next/server";
import nextI18nextConfig from "../next-i18next.config";

const PUBLIC_FILE = /\.(.*)$/;

export async function proxy(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === "default") {
    const locale =
      req.headers
        .get("accept-language")
        ?.split(",")?.[0]
        .split("-")?.[0]
        .split(";")?.[0]
        .toLowerCase() || nextI18nextConfig.i18n.defaultLocale;

    // Redirecting to the default locale gets normalized back to the
    // unprefixed path by Next.js, which would loop this redirect forever.
    if (
      locale === nextI18nextConfig.i18n.defaultLocale ||
      !nextI18nextConfig.i18n.locales.includes(locale)
    ) {
      return;
    }

    return NextResponse.redirect(
      new URL(
        `/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`,
        req.url,
      ),
    );
  }
}
