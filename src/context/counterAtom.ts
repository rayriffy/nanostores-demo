import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

// NOTE: comment L7-L10, and uncomment L6 to see normal behavior of an atom

// export const counterAtom = atom<number>(0)
export const counterAtom = persistentAtom<number>('hellooo', 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
})
