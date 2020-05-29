declare module "@capacitor/core" {
  interface PluginRegistry {
    InAppPurchases: InAppPurchasesPlugin;
  }
}

export interface InAppPurchasesPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
