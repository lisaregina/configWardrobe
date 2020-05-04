const Combination=() =>{
    module.exports ={
};
};

    function combination(){
        var size = [50, 
                    75,
                    100,
                    120];

        const wall = 250;

        var combo = []; //hier kommen die Kombinationen hinein mit combo.push()

        var sum = 0;            
        
        for(let i=0; sum < wall; i++){             //5*50
            let index;
            index = size[i];

            sum += index;
            combo.push(index);

            if(sum < wall){
                sum += index;
                combo.push(index);
            }else{break;}
           
        }
        console.log(combo)
    };

    combination();