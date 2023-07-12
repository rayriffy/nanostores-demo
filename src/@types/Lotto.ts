export interface Lotto {
  status: string
  response: {
    date: string
    endpoint: string
    prizes: {
      id: string
      name: string
      reward: string
      amount: number
      number: string[]
    }[]
  }
}
