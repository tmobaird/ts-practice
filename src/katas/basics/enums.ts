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

export enum MLBNamesByCity {
  Chicago = 'Cubs',
  Washington = 'Nationals'
}

/*
 This is the example of a number enum
 number enums allow you to set any start value you want
 (in this case 5), and all non explicitly set values after
 will be sequential number values (ie. 6, 7, 8).
*/
export enum Counter {
  First = 5,
  Second
}
