function solution(n) {
    let result = [];
    while(true) {
        result.push(n)
        if( n === 1 ) break;
        if(n%2===0){ n = n/2;  } else { n = 3 * n +1; }
    }
    
    return result
}