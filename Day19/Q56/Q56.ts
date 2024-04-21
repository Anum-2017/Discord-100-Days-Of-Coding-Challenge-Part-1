//Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

function keepOnlyStrings(items: any[]): string[] {
    return items.filter(item => typeof item === 'string');
}

const mixedItems: any[] = [1, 'apple', true, 'banana', 45, 'mango'];
const stringsOnly: string[] = keepOnlyStrings(mixedItems);
console.log(stringsOnly); 
