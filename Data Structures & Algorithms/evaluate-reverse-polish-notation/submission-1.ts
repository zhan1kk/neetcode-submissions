class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = [];
        const operators = ["+", "-", "/", "*"];

        for (let t of tokens) {
            if (operators.includes(t)) {
                const second = stack.pop();
                const first = stack.pop();
                switch (t) {
                    case "+":
                        stack.push(first + second);
                        break;
                    case "-":
                        stack.push(first - second);
                        break;
                    case "*":
                        stack.push(first * second);
                        break;
                    case "/":
                        stack.push(Math.trunc(first / second));
                        break;
                }
            } else {
                stack.push(Number(t));
            }
        }
        return stack.pop();
    }
}
