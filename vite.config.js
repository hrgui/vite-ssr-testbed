import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // ssr: {
  //   noExternal: true,
  //   target: "webworker",
  // },
  plugins: [react()],
});
