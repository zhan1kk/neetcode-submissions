class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = [Number(tokens[0])];
        const operators = ["+", "-", "/", "*"];

        for (let i = 1; i < tokens.length; i++) {
            const t = tokens[i];
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
