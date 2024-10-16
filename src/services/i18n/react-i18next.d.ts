import "react-i18next";

import website from "./website/en.json";
import pages_content from "./pages_content/en.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "website";
    resources: {
      website: typeof website;
      pages_content: typeof pages_content;
    };
  }
}
