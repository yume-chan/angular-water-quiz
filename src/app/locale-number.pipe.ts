import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'localeNumber' })
export class LocaleNumberPipe implements PipeTransform {
    transform(value: number): string {
        return value.toLocaleString();
    }
}