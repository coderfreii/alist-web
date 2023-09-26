declare module "aplayer"
declare namespace aliyun {
  class Config {
    setToken(token: { token: string }): any
  }
  function config(options: { mount: Element; url: string }): Config
}

declare namespace my_namespace {
  function a(): any
}
