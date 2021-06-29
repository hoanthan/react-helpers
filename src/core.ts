export type OperatorFunc = (input: any) => any

export function pipe<TIn = any, TOut = any>(input: TIn, ...operators: OperatorFunc[]): TOut {
    let operator: OperatorFunc
    let currentValue: any = input
    while(operators.length) {
        operator = operators.shift()!
        const nextValue = operator(currentValue)
        if(!nextValue) throw new Error('Invalid operator. An operator must return a value')
        currentValue = nextValue
    }
    return currentValue
}