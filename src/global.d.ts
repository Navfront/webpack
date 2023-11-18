declare module '*.css' {
  interface IClassNames {
    [cn: string]: string
  }

  const classNames: IClassNames
  export = classNames
}
