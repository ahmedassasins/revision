function iterateAndlogwithfor(n){
    for(var i=0;i<n;i=i+1){
        if(i%2===0){
            console.log(i+'is even')
        }
    else{
        console.log(i+'is odd')
}}
}
function iterateAndlogwithwhile(n){
    var i=0
    while(i<n){
        if(i%2===0){
            console.log(i+'is even')
        }
        else{
            console.log(i+'is odd')
        }
        i=i+1}
    }
    /*******************************  2   *************************/

    function reverseIterateAndlogwithfor(n){
        for (var i=n-1;i>0;i=i-1){
            if (i%2===0){
                console.log(i+'is even')
            }
            else{
                console.log (i+'is odd')
            }}

    }
    function reverseIterateAndlogwithwhile(n){
        var i=n-1
        while (i>=0){
            if (i%2===0){
                console.log(i+'is even')
            }
            else{
                console.log (i+'is odd')
            }
            i=i-1
        }
    }

    function reverseIterarteAndlogrecursively(n){
        var x=n-1
        if(x<0){
            return
        }
        if(x%2===0){
            console.log(x+'is even')
        }
        else{
             console.log(x+'is odd')
        }
    
    return reverseIterarteAndlogrecursively(n-1)
    }

    /********************************* 3 ***************************/

    function weirdDivisionwithfor(n){
        for (var i=1;i<=n;i++){
            if((i%3===0)&&(i%5!==0)){
                console.log('julia')}
                else if((i%5===0)&&(i%3!==0)){
                    console.log('james')}
                else if ((i%3===0)&&(i%5===0)){
                    console.log('juliajames')}
                    else{
                        console.log(i)}
                    }
                }
                function weirddivisionwithwhile(n){
                    var i=1
                    while(i<=n){
                        if((i%3===0)&&(i%5!==0)){
                            console.log('julia')}
                            else if((i%5===0)&&(i%3!==0)){
                                console.log('james')}
                                else if ((i%3===0)&&(i%5===0)){
                                    console.log('juliajames')}
                                    else{
                                        console.log(i)}
                                        i=i+1
                                    }}
                                
                
    
