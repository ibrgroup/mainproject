// global.d.ts
interface WindowEventMap {
  beforeinstallprompt: BeforeInstallPromptEvent;
}

declare interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<UserChoice>;
}

interface UserChoice {
  outcome: string;
  platform?: string[];
}