class Portfolio {
	
	constructor()
	{
		this.stocks = [];
	}

	getShares(){
		return this.stocks;
	}
	
	isEmpty() {
		if(this.stocks.length == 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	purchase(symbol, num) {	
		 const findSymbol = this.stocks.findIndex(tuple => tuple[0] == symbol);
                if(findSymbol != -1)
                { 
                        this.stocks[findSymbol][1] += num;
			
                }
                else
                {
                        this.stocks.push([symbol, num]);
                }

	}

	sale(symbol, num)
	{
		const findSymbol = this.stocks.findIndex(tuple => tuple[0] == symbol);
		if(findSymbol != -1)
		{
			if(this.stocks[findSymbol][1] >= num) {
				this.stocks[findSymbol][1] -= num;
		
			}
			else{
				throw new Error('you dont have that amount');
			}
		}
		else
		{
			throw new Error('symbol does not exist');
		}
	}

	getNumStocks()
	{
		return this.stocks.length;
	}
	
	


}


module.exports = Portfolio;
