import { Pipe, PipeTransform } from '@angular/core';

//titlecase
@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any) {
    return value

      .toLowerCase()

      .split(' ')

      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))

      .join(' ');

  };
}

//filterpipe for searching
@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, foodName: string) {

    if (!value) return value;
    if (!foodName) return value;
    return value.filter((item: any) => {
      return item.toLowerCase().includes(foodName)
    })

  }
    
}

//truncate and ellipsis
@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

  transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 25;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

//filter to search for parent component
@Pipe({
  name: 'filter1'
})
export class filter1 implements PipeTransform {

  transform(value: any, parentCustomer: string) {

    if (!value) return value;
    if (!parentCustomer) return value;
    return value.filter((customer: any) => {
      return customer.toLowerCase().includes(parentCustomer)
    })

  }
}