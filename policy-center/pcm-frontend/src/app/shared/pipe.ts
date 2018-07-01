
import {Pipe, PipeTransform} from '@angular/core'
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Pipe({
    name:'Upper'
})
export class Upper implements PipeTransform {
    transform(value: string, ...args: any[]):any {
        return value.toUpperCase();
    }
}