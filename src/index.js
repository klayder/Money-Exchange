// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var bills={
		"H":50,
		"Q":25,
		"D":10,
		"N":5,
		"P":1
	};
	var totalCoins={};
    if(currency>10000) 
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    else{
	    if(currency<0){return totalCoins}


	    else{
	    	var remainder=currency;
	    	for (var key in bills){
	    		var temp=calculateBillsNumb(remainder,bills[key]);
	    		remainder=calculateRemainder(remainder,bills[key],temp);
	    		if(temp>0){
	    			totalCoins[key]=temp;
	    		}
	    	}
	    	return (totalCoins);

	    }

	    function calculateRemainder(summ,bill,billsNumb){
	    	return summ-bill*billsNumb;
	    }
	    function calculateBillsNumb(remainder, bill){
	    	return (remainder-remainder%bill)/bill;
	    }
	}
}

