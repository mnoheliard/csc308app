class Portfolio {
	
	constructor()
	{
		this.stocks = [];
	}
	
	#findSymbol(symbol)
        {
                const findSymbol = this.stocks.findIndex(tuple => tuple[0] == symbol);
                return findSymbol;
        }

	getStocks(symbol){
		if(symbol != undefined)
		{
			const index = this.#findSymbol(symbol);
			if(index != -1)
			{
				return this.stocks[index][1];
			}
			else 
			{
				return 0;
			}
		}

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
		 const index = this.#findSymbol(symbol);
                if(index != -1)
                { 
                        this.stocks[index][1] += num;
			
                }
                else
                {
                        this.stocks.push([symbol, num]);
                }

	}

	sale(symbol, num)
	{

		const index = this.#findSymbol(symbol);
		if(index <= -1)
		{
			throw new Error('symbol does not exist');
		}

		else if(index != -1)
		{
			if(this.stocks[index][1] >= num) {

				this.stocks[index][1] -= num;
				if(this.stocks[index][1] == 0)
				{
					this.stocks.splice(index, 1);
				}

		
			}
			else{
				throw new Error('Not possible to sell this number of shares.');
			}
		}
		
	}

	getNumStocks()
	{
		return this.stocks.length;
	}
	
	


}
/*Reflection
 * While completing this assignment, I was able to follow most of the TDD cycle.
 * I did write test cases before completing the task, and I did try to refactor 
 * before moving on but, I would sometimes move on from a task
 * before refactoring. Once I had moved on from a task and had more information I would go back
 * to refactor it. However, it wasn't the best move because when I did update it, I would then have to 
 * update everything else so they wouldn't fail their test.
 *
 * After practicing TDD, I thought it was a great way to first test out how you
 * want your program to work and give you reminders on what you should include
 * It gave me a more clear mind on what I need to code and how I should do it
 * before I even started the coding the class. I will continue to try and use this approach
 * as I complete other assignments and projects.
 *
 * 
 * */

module.exports = Portfolio;
