import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { syncUser, sendWelcomeEmail } from "../../../inngest/sync-user-welcome-emails";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUser,
    sendWelcomeEmail,
  ],
});
