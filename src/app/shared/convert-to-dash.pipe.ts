//Custom pipe practice
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToDash'
})

export class ConvertToDash implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, '@');
    }
}