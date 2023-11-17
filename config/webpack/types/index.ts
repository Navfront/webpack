export interface Options {
  buildMode: BuildMode
  port: number
  paths: Paths
}

export type BuildMode = 'development' | 'production'

export interface Paths {
  entry: string
  output: string
  public: string
}

export type PluginsOptions = {
  buildMode: BuildMode
  htmlPath: string
}

export type RulesOptions = {
  buildMode: BuildMode
}

export type OutputOptions = {
  outputPath: string
}

export type DevelopmentOptions = {
  buildMode: BuildMode
  publicPath: string
  port?: number
}
