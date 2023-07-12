import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

// export const counterAtom = atom<number>(0)
export const counterAtom = persistentAtom<number>('hellooo', 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
})
