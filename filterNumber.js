

function filterNumbers(arr, criterion) {
    switch(criterion) {
        case 'even':
            return arr.filter(num => num % 2 === 0);
      
        case 'odd':
            return arr.filter(num => num % 2 !== 0);
    
        case 'negetive':
            return arr.filter(num=> num<0);
    
        case 'positive':
            return arr.filter(num=>num>0);
        default:
            return arr;
    }
}
console.log(filterNumbers([1, 2, 3, 4, 5, 6], 'even')); 
console.log(filterNumbers([1, 2, 3, 4, 5, 6], 'odd')); 
console.log(filterNumbers([-1, -2, 3, 4, -5, 6], 'negative')); 
console.log(filterNumbers([-1, -2, 3, 4, -5, 6], 'positive')); 


