import { Observable, Observer } from 'rxjs';
export declare function useValue$<TIn = any, TOut = any>(input$: Observable<TIn>, observer?: Observer<TOut>): TOut | undefined;
