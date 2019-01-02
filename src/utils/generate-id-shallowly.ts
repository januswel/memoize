import getId from './get-id'

const table: { [key: string]: (arg: any) => string | never } = {
  boolean: (arg: boolean) => `b:${arg}`,
  number: (arg: number) => `n:${arg}`,
  object: (arg: object) => `o:${getId(arg)}`,
  string: (arg: string) => `s:${arg}`,
  function: () => {
    throw new Error('can not generate id for functions')
  },
}

export default (args: Array<any>): string => args.map(arg => table[typeof arg](arg)).join(',')
