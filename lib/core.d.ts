export declare type OperatorFunc = (input: any) => any;
export declare function pipe<TIn = any, TOut = any>(input: TIn, ...operators: OperatorFunc[]): TOut;
