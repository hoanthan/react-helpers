import React from 'react';
import { Observable } from 'rxjs';
declare type Props = {
    children: Observable<any>;
    as?: React.ComponentType;
};
declare const Async: React.NamedExoticComponent<Props>;
export default Async;
