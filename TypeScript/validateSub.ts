export function isValidSubsequence(array: number[], sequence: number[]) {
    let arrPointer: number = 0;
      let seqPointer: number = 0;
      while(array[arrPointer] && sequence[seqPointer] ) {
          if(sequence[seqPointer] === array[arrPointer]) seqPointer++;
          arrPointer++;
      }
      
      return seqPointer === sequence.length;
  }
  