const myFunctions = require('./sample-functions.js');



test('Testing div -- success', () => {
  const target = 2;
  const result = myFunctions.div(10, 5);
  expect(result).toBe(target);
});

test('Testing div -- error if divisor is 0', () => {
  expect(() => myFunctions.div(10, 0)).toThrow('divisor cannot be 0');
});

test('Testing div -- successful neg numbers', () => {
	const target = -2;
	const result = myFunctions.div(10, -5);
	expect(result).toBe(target);
});

test('Testing containsNumbers -- success true', () => {
	const target = true;
	const result = myFunctions.containsNumbers("superc00l");
	expect(result).toBe(target);
});

test('Testing containsNumbers -- success false', () => {
	const result = myFunctions.containsNumbers("notcool");
	expect(result).toBe(false);
});

test('Testing containsNumbers not a string - error', () => {
	expect(() => myFunctions.containsNumbers(12345)).toThrow('input must be a string');
});

test('Testing containsNumbers -- empty string success false', () => {
        const result = myFunctions.containsNumbers("");
        expect(result).toBe(false);
});

test('Testing containsNumbers -- longer text sucess true', () => {
	const result = myFunctions.containsNumbers("hello world this is c00l");
	expect(result).toBe(true);
});
	
