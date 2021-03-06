// @flow

export type BabelPresets = Array<string | Array<string | Object>>;
export type BabelPlugins = Array<string>;

export type EnvConfig = {
  browsers: string,
  electron: ?string,
  isEnvPresetEnabled: boolean,
  isElectronEnabled: boolean,
  isBuiltInsEnabled: boolean,
  isNodeEnabled: boolean,
  builtIns: string | false,
  forceAllTransforms: boolean,
  shippedProposals: boolean,
  version?: any,
  node: ?string,
};

export type EnvFeatures = {
  [feature: string]: Array<number>,
};

export type LoadScriptCallback = (success: boolean) => void;

export type PluginConfig = {
  baseUrl?: string,
  isPreLoaded?: boolean,
  label: string,
  package: string,
  version?: any,
  instanceName?: string,
  files?: Array<string>,
};

export type MultiPackagesConfig = PluginConfig & {
  packages: Array<PluginConfig>,
};

export type PluginConfigs = Array<PluginConfig>;

export type LazyLoadedState = {
  didError: boolean,
  isLoaded: boolean,
  isLoading: boolean,
  config: Object,
};

export type BabelState = LazyLoadedState & {
  availablePresets: Array<any>,
  build: any,
  errorMessage?: string,
  circleciRepo: string,
  config: PluginConfig,
  version: any,
};

export type EnvState = LazyLoadedState & {
  build: number,
  errorMessage?: string,
  circleciRepo: string,
  config: PluginConfig,
  version: any,
  isEnabled: boolean,
};

export type ShippedProposalsState = LazyLoadedState & {
  errorMessage?: string,
  config: MultiPackagesConfig,
  isEnabled: boolean,
};

export type PluginState = LazyLoadedState & {
  config: PluginConfig,
  isEnabled: boolean,
};

export type PluginStateMap = { [name: string]: PluginState };

export type SourceType = "script" | "module" | "unambiguous";

export type CompileConfig = {
  debugEnvPreset: boolean,
  envConfig: ?EnvConfig,
  evaluate: boolean,
  presets: BabelPresets,
  plugins: BabelPlugins,
  prettify: boolean,
  sourceMap: boolean,
  sourceType: SourceType,
};

export type ReplState = {
  babili: boolean,
  browsers: string,
  build: string,
  builtIns: string | boolean,
  circleciRepo: string,
  code: string,
  debug: boolean,
  evaluate: boolean,
  fileSize: boolean,
  sourceType: SourceType,
  isEnvPresetTabExpanded: boolean,
  isPresetsTabExpanded: boolean,
  isSettingsTabExpanded: boolean,
  forceAllTransforms: boolean,
  shippedProposals: boolean,
  lineWrap: boolean,
  presets: ?string,
  prettier: boolean,
  showSidebar: boolean,
  targets: string,
  version: any,
  envVersion: string,
};

type BabelPresetTargetsMap = {
  [key: string]: string,
};

type BabelNamedPresetAndTarget = {
  name: string,
  targets: BabelPresetTargetsMap,
};

export type BabelPresetEnvResult = {
  modulePlugin: string,
  polyfills: ?Array<string>,
  polyfillsWithTargets: ?Array<BabelNamedPresetAndTarget>,
  targets: BabelPresetTargetsMap,
  transformations: Array<string>,
  transformationsWithTargets: Array<BabelNamedPresetAndTarget>,
};

export type SidebarTabSection = "env" | "plugins" | "presets" | "settings";
