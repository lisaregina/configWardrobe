function combination(){
    let size = [50, 
                75,
                100,
                120];


    let wall = 250;

    let combo = [];

    for(let i = 0; i < size.length; i ++){ 

        let num = size[i];

        let diff = wall - num;
        
        combo.push([num]);

        for(diff > 0; i++;){
            let num = size[i];
            
            diff = wall - num;

            combo.push([num]);

            if(diff == 0){
                break;
            }
        };

        if(diff == 0){
            break;
        };        
    }
    
    return combo;
}

console.log(combination());