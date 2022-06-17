function StringPeriods(str) {
    let result = -1;
    let isFinished = false;
    let index = 1;
  
    if (str.length <= 1) {
      return result;
    }
  
    while(!isFinished) {
      if (index === str.length - 1) {
        isFinished = true;
        continue;
      }
  
      const test = str.slice(0, index);
      const regex = new RegExp(test, 'g');
      const matches = str.match(regex);
  
      if (matches.length > 1 && matches.join('') === str) {
        result = test;
      }
  
  
      index++;
    }
  
    return result;
  }
  
  console.log(StringPeriods('affedaaffed'));