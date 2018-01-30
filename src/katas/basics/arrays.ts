// basic array typing: type[]
export const numberArray: number[] = [1, 2, 3]

// alternate array typing syntax: Array<type>
export const numberArrayTwo: Array<number> = [4, 5, 6]

// array of union types (can be one of multiple types): (type1|type2\type3)[]
// or Array<type1|type2|type3>
export const mixedArray: (number | string)[] = [1, 'two', 3]

export class User {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

// array of any type. Elements can be of any type (bool, string, number, etc)
export const anyArray: any[] = [true, 'two', 3, new User('Thomas')]

export const arrayOfNumbers: Array<number> = [10, 20, 30]

export const arrayOfUsers: User[] = [new User('Walt'), new User('Hank'), new User('Saul')]

export interface HashUser {
  name: string
}

export const arrayOfUsersOrHashUsers: Array<User | HashUser> = [
  new User('Thomas'),
  { name: 'Baird' },
  { name: 'Peter' },
  new User('Parker')
]
