const Portfolio = require('./stock-portfolio');

describe('Portfolio class', () => {
	test('2.1 testing portfolio set up works', () => {
		const portfolio = new Portfolio();

		expect(portfolio.getStocks()).toEqual([]);
	});

	test('2.2 checking whether portfolio checks if empty shares', () => {
		const portfolio = new Portfolio();
		expect(portfolio.isEmpty()).toEqual(true);
	});

	test('2.3 a purschase does update the portfolio', () => {
		const portfolio = new Portfolio();
		portfolio.purchase("adobe", 5);
		expect(portfolio.getStocks()).toEqual([["adobe", 5]]);
	});
	test('2.3 a purschase, but symbol exists already', () => {
		const portfolio = new Portfolio();
                portfolio.purchase("adobe", 5);
		portfolio.purchase("adobe", 5);
                expect(portfolio.getStocks()).toEqual([["adobe", 10]]);
        });

	test('2.4 a sale, substracts the shares from the symbol', () => {
		const portfolio = new Portfolio();
		portfolio.purchase("adobe", 5);
		portfolio.sale("adobe", 2);
		expect(portfolio.getStocks()).toEqual([["adobe", 3]]);
	});
	test('2.4 a sale, but that sumbol doenst exist', () => {
		const portfolio = new Portfolio();
                portfolio.purchase("notAdobe", 5);
                
                expect(() => portfolio.sale("adobe", 2)).toThrow('symbol does not exist');
	});

	test('2.5 get the amount of stocks', () => {
		const portfolio = new Portfolio();
		portfolio.purchase("GMR", 5);
		portfolio.purchase("RBLX", 10);
		expect(portfolio.getNumStocks()).toEqual(2);
	});

	test('2.6 check that empty shares are not in stock list', () => {
		const portfolio = new Portfolio();
                portfolio.purchase("GMR", 5);
                portfolio.purchase("RBLX", 10);
		portfolio.sale("RBLX", 10);
                expect(portfolio.getStocks()).toEqual([["GMR", 5]]);
	});

	test('2.7 how many shares a certain symbol has', () => {
		const portfolio = new Portfolio();
		portfolio.purchase("GMR", 5);
		portfolio.purchase("RBLX", 5);
		expect(portfolio.getStocks("RBLX")).toEqual(5);
	});
	test('2.7 how many shares for a symbol doesnt exist', () => {
		const portfolio = new Portfolio();
		portfolio.purchase("GRM", 5);
		expect(portfolio.getStocks("RBLX")).toEqual(0);
	});

	 test('2.8 a sale, but the amount being sold is not enough', () => {
                 const portfolio = new Portfolio();
                portfolio.purchase("adobe", 5);

                expect(() => portfolio.sale("adobe", 6)).toThrow('Not possible to sell this number of shares.');
        });


	

});
