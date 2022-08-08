//Nathaniel Xoese Anku (10947729)
//I Nathaniel Xoese Anku endorse this code.
function primeNumAverage(max)
{
    var store  = [], i, j, primes = []; var sum = 0; var average;
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    for(let i = 0; i < primes.length; i++){
        sum += primes[i]
    }
    average = sum/primes.length;
    return average;
}

console.log(primeNumAverage(30));
