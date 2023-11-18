declare module '*.css' {
  interface IClassNames {
    [cn: string]: string
  }

  const classNames: IClassNames
  export = classNames
}

declare module '*.jpg'
declare module '*.png'
declare module '*.webp'
