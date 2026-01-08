export {};

declare global {
  interface Window {
    clustora?: {
      init: (config: any) => void;
    };
  }
}
