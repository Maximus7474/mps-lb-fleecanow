import Config from '@common/config';

interface AppConfig {
  // Basic metadata
  identifier: string;
  name: string;
  description: string;
  developer?: string;

  // UI and display
  ui: string;
  icon?: string;
  images?: string[];
  landscape?: boolean;
  fixBlur?: boolean;

  // App behavior
  defaultApp?: boolean;
  size?: number;
  price?: number;
  game?: boolean;

  // Lifecycle funcs
  onOpen?: () => void;
  onClose?: () => void;
  onDelete?: () => void;
}


const url: string = GetResourceMetadata(GetCurrentResourceName(), "ui_page", 0);

export const appConfig: AppConfig = {
  identifier: Config.Identifier,
  name: Config.AppName,
  description: Config.AppDescription,
  developer: Config.AppDeveloper,

  defaultApp: Config.DefaultApp,
  size: 59812,

  images: [
    `https://cfx-nui-${GetCurrentResourceName()}/ui/dist/screenshot-light.png`,
    `https://cfx-nui-${GetCurrentResourceName()}/ui/dist/screenshot-dark.png`,
  ],

  ui: url.includes('http') ? url : `${GetCurrentResourceName()}/${url}`,
  icon: url.includes('http')
    ? `${url}/public/icon.png`
    : `https://cfx-nui-${GetCurrentResourceName()}/ui/dist/icon.png`,

  fixBlur: true,

  onClose: () => {
    exports['lb-phone'].DisableWalkableCam();
  },
};
