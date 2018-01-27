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
