export type Expect<T extends true> = T

export type Equal<X, Y> =
  (<T>() => T extends X ? true : false) extends
  (<T>() => T extends Y ? true : false) ? true : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true