const num: number = 5
let phrase: string = 'Typescript is awesome'
const bool: boolean = true

export const showNumber = (): number => {
  return num
}

export const showString = (): string => {
  return phrase
}

export const showBoolean = (): boolean => {
  return bool
}

/*
 Enums only work with string and number values
 The example below shows how we set our initial index
 for values of each.

 Reply.No == =0 // true
 Reply.Yes === 1 // true
  */
export enum Reply {
  No = 0,
  Yes
}

// Example of string enum
export enum Greeting {
  Normal = 'Hello, friend',
  Cowboy = 'Howdy, partner',
  Yoda = 'Old friend, hello'
}
