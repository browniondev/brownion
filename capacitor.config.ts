import type { CapacitorConfig } from "@capacitor/cli";
import { KeyboardResize } from "@capacitor/keyboard";

const config: CapacitorConfig = {
  appId: "com.marktailor.app",
  appName: "MarkTailor GM",
  webDir: "out",
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
    },
    NativePrint: {

    },

  }
};

export default config;
