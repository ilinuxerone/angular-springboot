
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

@Pipe({
    name:'filterForm'
})
export class FilterForm implements PipeTransform {
    transform(list: any[], filterField: string, keyword: string) : any{
        
        if (!filterField || !keyword){
            return list;
        }

        return list.filter(item=>{
            let fieldValue = item[filterField];
            return fieldValue.indexOf(keyword) >=0;
        });

    }
}