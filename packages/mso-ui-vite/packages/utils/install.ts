import type { App, AppContext, Plugin } from "vue";

export type SFCWithInstall<T> = T & Plugin;

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};

export const withInstall = <T>(main: T) => {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    app.component((main as any).name, main);
  };
};

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn as SFCInstallWithContext<T>;
};
