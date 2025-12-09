class MathSolver {
    constructor() {
        this.display = document.getElementById('display');
        this.output = document.getElementById('output');
        
        if (!this.display || !this.output) return;
        
        this.currentMode = 'algebra';
        this.expression = '';
        this.currentDerivative = null;
        this.derivativeOrder = 0;
        this.currentSteps = [];
        this.originalExpression = '';
        this.lastResult = '';
        
        // History for undo/redo
        this.history = [''];
        this.historyIndex = 0;
        
        // Calculation history
        this.calculationHistory = [];
        
        this.init();
    }
    
    init() {
        // Mode switching
        document.querySelectorAll('.mode-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchMode(e.target.dataset.mode));
        });
        
        // Button clicks
        document.querySelectorAll('.calculator .btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleButtonClick(e));
        });
        
        // Example buttons
        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const example = e.target.dataset.example;
                this.expression = example;
                this.updateDisplay();
                this.addToHistory(this.expression);
            });
        });
        
        // Clear display button
        const clearBtn = document.querySelector('.clear-display');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clear();
            });
        }
        
        // Undo button
        const undoBtn = document.getElementById('undo-btn');
        if (undoBtn) {
            undoBtn.addEventListener('click', () => this.undo());
        }
        
        // Redo button
        const redoBtn = document.getElementById('redo-btn');
        if (redoBtn) {
            redoBtn.addEventListener('click', () => this.redo());
        }
        
        // Help button
        const helpBtn = document.getElementById('help-btn');
        if (helpBtn) {
            helpBtn.addEventListener('click', () => this.toggleHelp());
        }
        
        // Help modal close
        const helpClose = document.getElementById('help-close');
        const helpModal = document.getElementById('help-modal');
        if (helpClose) {
            helpClose.addEventListener('click', () => this.toggleHelp());
        }
        if (helpModal) {
            helpModal.addEventListener('click', (e) => {
                if (e.target === helpModal) this.toggleHelp();
            });
        }
        
        // Copy button
        const copyBtn = document.getElementById('copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyResult());
        }
        
        // Higher derivative button
        const higherDerivBtn = document.getElementById('higher-deriv-btn');
        if (higherDerivBtn) {
            higherDerivBtn.addEventListener('click', () => this.getHigherDerivative());
        }
        
        // Show steps button
        const showStepsBtn = document.getElementById('show-steps-btn');
        if (showStepsBtn) {
            showStepsBtn.addEventListener('click', () => this.toggleSteps());
        }
        
        // Clear history button
        const clearHistoryBtn = document.getElementById('clear-history');
        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener('click', () => this.clearCalculationHistory());
        }
        
        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Initialize button states
        this.updateUndoRedoButtons();
        this.loadCalculationHistory();
    }
    
    toggleHelp() {
        const helpModal = document.getElementById('help-modal');
        if (helpModal) {
            helpModal.classList.toggle('show');
        }
    }
    
    copyResult() {
        const copyBtn = document.getElementById('copy-btn');
        if (!this.lastResult) {
            return;
        }
        
        navigator.clipboard.writeText(this.lastResult).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '✓ Copied!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Copy failed:', err);
        });
    }
    
    addToCalculationHistory(expression, result) {
        this.calculationHistory.unshift({
            expression: expression,
            result: result,
            timestamp: new Date().getTime()
        });
        
        // Keep only last 10
        if (this.calculationHistory.length > 10) {
            this.calculationHistory = this.calculationHistory.slice(0, 10);
        }
        
        this.saveCalculationHistory();
        this.renderCalculationHistory();
    }
    
    saveCalculationHistory() {
        try {
            localStorage.setItem('calcHistory', JSON.stringify(this.calculationHistory));
        } catch (e) {
            console.log('Could not save history');
        }
    }
    
    loadCalculationHistory() {
        try {
            const saved = localStorage.getItem('calcHistory');
            if (saved) {
                this.calculationHistory = JSON.parse(saved);
                this.renderCalculationHistory();
            }
        } catch (e) {
            console.log('Could not load history');
        }
    }
    
    clearCalculationHistory() {
        this.calculationHistory = [];
        this.saveCalculationHistory();
        this.renderCalculationHistory();
    }
    
    renderCalculationHistory() {
        const historyContent = document.getElementById('history-content');
        if (!historyContent) return;
        
        if (this.calculationHistory.length === 0) {
            historyContent.innerHTML = '<div class="history-empty">No calculations yet</div>';
            return;
        }
        
        historyContent.innerHTML = this.calculationHistory.map(item => `
            <div class="history-item" data-expression="${this.escapeHtml(item.expression)}">
                <div class="history-expression">${this.escapeHtml(item.expression)}</div>
                <div class="history-result">→ ${this.escapeHtml(item.result)}</div>
            </div>
        `).join('');
        
        // Add click handlers
        document.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const expr = e.currentTarget.dataset.expression;
                this.expression = expr;
                this.updateDisplay();
                this.addToHistory(this.expression);
            });
        });
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    addToHistory(expr) {
        // Remove any future history if we're not at the end
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }
        
        // Add new state
        this.history.push(expr);
        this.historyIndex = this.history.length - 1;
        
        // Limit history to 50 items
        if (this.history.length > 50) {
            this.history.shift();
            this.historyIndex--;
        }
        
        this.updateUndoRedoButtons();
    }
    
    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.expression = this.history[this.historyIndex];
            this.updateDisplay();
            this.updateUndoRedoButtons();
        }
    }
    
    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.expression = this.history[this.historyIndex];
            this.updateDisplay();
            this.updateUndoRedoButtons();
        }
    }
    
    updateUndoRedoButtons() {
        const undoBtn = document.getElementById('undo-btn');
        const redoBtn = document.getElementById('redo-btn');
        
        if (undoBtn) {
            undoBtn.disabled = this.historyIndex <= 0;
        }
        
        if (redoBtn) {
            redoBtn.disabled = this.historyIndex >= this.history.length - 1;
        }
    }
    
    switchMode(mode) {
        this.currentMode = mode;
        
        document.querySelectorAll('.mode-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.mode === mode) {
                tab.classList.add('active');
            }
        });
        
        document.querySelectorAll('.calculator-grid').forEach(grid => {
            grid.classList.add('hidden');
        });
        document.getElementById(`${mode}-grid`).classList.remove('hidden');
    }
    
    handleButtonClick(e) {
        const btn = e.target;
        
        if (btn.classList.contains('clear')) {
            this.clear();
        } else if (btn.classList.contains('backspace')) {
            this.backspace();
        } else if (btn.classList.contains('equals')) {
            this.calculate();
        } else if (btn.dataset.value) {
            this.addToExpression(btn.dataset.value);
        }
    }
    
    addToExpression(value) {
        this.expression += value;
        this.updateDisplay();
        this.addToHistory(this.expression);
    }
    
    clear() {
        this.expression = '';
        this.currentDerivative = null;
        this.derivativeOrder = 0;
        this.currentSteps = [];
        this.originalExpression = '';
        this.lastResult = '';
        this.updateDisplay();
        this.renderOutput('0');
        this.hideSteps();
        this.addToHistory(this.expression);
    }
    
    backspace() {
        this.expression = this.expression.slice(0, -1);
        this.updateDisplay();
        this.addToHistory(this.expression);
    }
    
    updateDisplay() {
        if (this.display) {
            this.display.value = this.expression;
        }
    }
    
 calculate() {
    if (!this.expression.trim()) {
        this.renderOutput('0');
        return;
    }
    
    try {
        let expr = this.expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-')
            .replace(/π/g, 'pi')
            .replace(/√/g, 'sqrt');
        
        // Check for implicit differentiation (has = sign)
        if (expr.includes('=')) {
            console.log('Detected implicit differentiation');
            this.calculateImplicitDerivative();
            return;
        }
        
        const hasVariables = /[a-z]/i.test(expr.replace(/pi|e|sin|cos|tan|log|ln|sqrt|abs|csc|sec|cot|arcsin|arccos|arctan/gi, ''));
        
        if (hasVariables || this.expression.includes('d/dx')) {
            this.calculateDerivative();
        } else {
            this.calculateNumerical();
        }
    } catch (error) {
        console.error('Calculation error:', error);
        this.showBetterError(error, this.expression);
    }
}
    
    calculateNumerical() {
        try {
            let expr = this.expression
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/−/g, '-')
                .replace(/π/g, 'pi');
            
            const result = math.evaluate(expr);
            const formatted = math.format(result, { precision: 14 });
            this.renderOutput(formatted);
            this.lastResult = formatted;
            
            this.addToCalculationHistory(this.expression, formatted);
            
            this.currentDerivative = null;
            this.derivativeOrder = 0;
            this.currentSteps = [];
            this.originalExpression = '';
            this.hideSteps();
        } catch (error) {
            console.error('Numerical calc error:', error);
            this.showBetterError(error, this.expression);
        }
    }
    
    showBetterError(error, expr) {
        let errorMessage = 'Error';
        
        // Check for common errors
        const openParens = (expr.match(/\(/g) || []).length;
        const closeParens = (expr.match(/\)/g) || []).length;
        
        if (openParens > closeParens) {
            errorMessage = 'Missing closing parenthesis ")"';
        } else if (closeParens > openParens) {
            errorMessage = 'Missing opening parenthesis "("';
        } else if (expr.includes('d/dx') && expr.split('d/dx').length > 2) {
            errorMessage = 'Cannot use d/dx multiple times';
        } else if (expr.includes('=') && expr.split('=').length > 2) {
            errorMessage = 'Equation can only have one = sign';
        } else if (/[a-z]/i.test(expr.replace(/pi|e|sin|cos|tan|log|ln|sqrt|abs|x|y/gi, ''))) {
            errorMessage = 'Unknown variable (use x or y only)';
        } else if (expr.includes('//') || expr.includes('**') || expr.includes('++')) {
            errorMessage = 'Invalid operator syntax';
        } else if (expr.endsWith('+') || expr.endsWith('-') || expr.endsWith('*') || expr.endsWith('/')) {
            errorMessage = 'Expression cannot end with operator';
        } else {
            errorMessage = 'Invalid expression';
        }
        
        this.renderOutput(`\\text{❌ ${errorMessage}}`);
    }
    
    calculateDerivative() {
        try {
            let expr = this.expression;
            
            if (expr.includes('d/dx')) {
                expr = expr.replace(/d\/dx\s*\(\s*/g, '');
                if (expr.endsWith(')')) {
                    expr = expr.slice(0, -1);
                }
            }
            
            expr = expr
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/−/g, '-')
                .replace(/π/g, 'pi')
                .replace(/√\(/g, 'sqrt(');
            
            expr = expr.trim();
            this.originalExpression = expr;
            
            console.log('Expression to differentiate:', expr);
            
            const node = math.parse(expr);
            const derivative = math.derivative(node, 'x');
            const simplified = math.simplify(derivative);
            
            this.currentDerivative = simplified;
            this.derivativeOrder = 1;
            
            // Generate detailed steps with original expression
            this.currentSteps = this.generateDetailedSteps(expr, node, derivative, simplified);
            
            let latex = simplified.toTex();
            latex = this.cleanLatex(latex);
            
            const resultStr = simplified.toString();
            this.lastResult = resultStr;
            
            this.renderOutput(latex);
            this.addToCalculationHistory(this.expression, resultStr);
            
        } catch (error) {
            console.error('Derivative error:', error);
            this.showBetterError(error, this.expression);
        }
    }
    
calculateImplicitDerivative() {
    try {
        let expr = this.expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-')
            .replace(/π/g, 'pi')
            .replace(/√\(/g, 'sqrt(');
        
        console.log('Processing implicit differentiation:', expr);
        
        // Split by = sign
        const parts = expr.split('=');
        if (parts.length !== 2) {
            this.renderOutput('\\text{❌ Equation must have exactly one = sign}');
            return;
        }
        
        let leftSide = parts[0].trim();
        let rightSide = parts[1].trim();
        
        console.log('Left side:', leftSide);
        console.log('Right side:', rightSide);
        
        this.originalExpression = expr;
        
        // Parse both sides
        let leftNode, rightNode;
        try {
            leftNode = math.parse(leftSide);
            rightNode = math.parse(rightSide);
        } catch (parseError) {
            console.error('Parse error:', parseError);
            this.renderOutput('\\text{❌ Cannot parse equation}');
            return;
        }
        
        // Get the result
        try {
            const result = this.computeImplicitDerivative(leftNode, rightNode, leftSide, rightSide);
            
            this.currentDerivative = null;
            this.derivativeOrder = 1;
            
            // Generate steps
            this.currentSteps = this.generateImplicitStepsDetailed(leftSide, rightSide, result);
            
            // Display result
            console.log('Rendering result:', result.latex);
            this.renderOutput(result.latex);
            this.lastResult = result.text;
            
            this.addToCalculationHistory(this.expression, result.text);
            
        } catch (computeError) {
            console.error('Computation error:', computeError);
            this.renderOutput('\\text{❌ Error computing derivative}');
            return;
        }
        
    } catch (error) {
        console.error('Implicit differentiation error:', error);
        console.error('Error stack:', error.stack);
        this.renderOutput('\\text{❌ Error in implicit differentiation}');
    }
}

    
computeImplicitDerivative(leftNode, rightNode) {
  try {
    // 1. Derivatives
    const dLdx = math.derivative(leftNode, 'x');
    const dLdy = math.derivative(leftNode, 'y');
    const dRdx = math.derivative(rightNode, 'x');
    const dRdy = math.derivative(rightNode, 'y');

    // 2. Build dy/dx node: (dRdx - dLdx) / (dLdy - dRdy)
    const numeratorNode = new math.OperatorNode(
      '-', 'subtract', [dRdx, dLdx]
    );
    const denominatorNode = new math.OperatorNode(
      '-', 'subtract', [dLdy, dRdy]
    );

    let dyNode = new math.OperatorNode(
      '/', 'divide', [numeratorNode, denominatorNode]
    );

    // 3. Simplify the whole expression
    dyNode = math.simplify(dyNode);

    // 4. Split into numerator / denominator if it’s still a fraction
    let numNode = dyNode;
    let denNode = math.parse('1');

    if (dyNode.isOperatorNode && dyNode.op === '/') {
      numNode = dyNode.args[0];
      denNode = dyNode.args[1];
    }

    // ---- helpers for formatting ----
    function formatLatex(node) {
      const texOptions = { implicit: 'hide' };
      // hide implicit mult AND strip explicit \cdot
      return node.toTex(texOptions).replace(/\\cdot\s*/g, '');
    }

    function formatText(node) {
      // remove explicit "*" from string version
      return node.toString().replace(/\*/g, '');
    }

    // Use the helpers here
    const latexNum = formatLatex(numNode);
    const latexDen = formatLatex(denNode);
    const latexDy  = formatLatex(dyNode);

    return {
      // you can use latexDy directly, or build it from num/den:
      // latex: `\\frac{dy}{dx} = ${latexDy}`,
      latex: `\\frac{dy}{dx} = ${latexDy}`,
      text: `dy/dx = ${formatText(dyNode)}`,
      numerator: formatText(numNode),
      denominator: formatText(denNode)
    };

  } catch (error) {
    console.error('Error in computeImplicitDerivative:', error);
    throw error;
  }
}


    
// simplifyFraction(num, den) {
//     // Try to simplify the fraction by factoring out common terms
//     let numerator = num;
//     let denominator = den;
    
//     // Remove outer parentheses if they wrap the entire expression
//     if (numerator.startsWith('(') && numerator.endsWith(')')) {
//         numerator = numerator.slice(1, -1);
//     }
//     if (denominator.startsWith('(') && denominator.endsWith(')')) {
//         denominator = denominator.slice(1, -1);
//     }
    
//     // Try to find common numerical factors
//     const numMatch = numerator.match(/^-?\d+/);
//     const denMatch = denominator.match(/^-?\d+/);
    
//     if (numMatch && denMatch) {
//         const numCoeff = parseInt(numMatch[0]);
//         const denCoeff = parseInt(denMatch[0]);
//         const gcd = this.gcd(Math.abs(numCoeff), Math.abs(denCoeff));
        
//         if (gcd > 1) {
//             const newNumCoeff = numCoeff / gcd;
//             const newDenCoeff = denCoeff / gcd;
            
//             numerator = numerator.replace(/^-?\d+/, newNumCoeff.toString());
//             denominator = denominator.replace(/^-?\d+/, newDenCoeff.toString());
            
//             console.log('After GCD factoring:', gcd);
//             console.log('New numerator:', numerator);
//             console.log('New denominator:', denominator);
//         }
//     }
    
//     // Clean up display - keep multiplication explicit
//     numerator = numerator.replace(/\*/g, ' * ');
//     denominator = denominator.replace(/\*/g, ' * ');
    
//     return {
//         numerator: numerator,
//         denominator: denominator
//     };
// }
    
    gcd(a, b) {
        // Greatest common divisor
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    toLatex(expr) {
        // Convert expression to LaTeX format
        return expr
            .replace(/\s*\*\s*/g, ' ')
            .replace(/\^/g, '^')
            .trim();
    }
    
    generateImplicitStepsDetailed(leftSide, rightSide, result) {
        const steps = [];
        
        // Step 0: Original equation
        steps.push({
            title: "📝 Original Equation",
            explanation: "We have an implicit equation with both x and y:",
            formula: `${this.formatExpression(leftSide)} = ${this.formatExpression(rightSide)}`,
            educationalNote: "Since y is implicitly a function of x, we need implicit differentiation!",
            isOriginal: true
        });
        
        // Step 1: Differentiate implicitly
        steps.push({
            title: "Step 1: Differentiate Implicitly",
            explanation: "Apply d/dx to both sides. For y terms, use chain rule: d/dx(y) = (dy/dx)",
            formula: `d/dx[${this.formatExpression(leftSide)}] = d/dx[${this.formatExpression(rightSide)}]`,
            educationalNote: "Remember: d/dx(y^n) = n·y^(n-1)·(dy/dx)"
        });
        
        // Step 2: Write differentiated form
        const leftNode = math.parse(leftSide);
        const rightNode = math.parse(rightSide);
        const dLeft_dx = math.derivative(leftNode, 'x');
        const dLeft_dy = math.derivative(leftNode, 'y');
        const dRight_dx = math.derivative(rightNode, 'x');
        
        steps.push({
            title: "Step 2: Apply Differentiation Rules",
            explanation: "Differentiate each term:",
            formula: `For x terms: use normal rules\nFor y terms: use chain rule (multiply by dy/dx)`,
            educationalNote: "The (dy/dx) appears from the chain rule on y terms"
        });
        
        // Step 3: Group dy/dx terms
        steps.push({
            title: "Step 3: Collect dy/dx Terms",
            explanation: "Move all dy/dx terms to one side:",
            formula: `(${result.denominatorOriginal}) * (dy/dx) = ${result.numeratorOriginal}`,
            educationalNote: "Factor out dy/dx from all terms containing it"
        });
        
        // Step 4: Solve for dy/dx
        steps.push({
            title: "Step 4: Solve for dy/dx",
            explanation: "Divide both sides by the coefficient of dy/dx:",
            formula: `dy/dx = (${result.numeratorOriginal}) / (${result.denominatorOriginal})`,
            educationalNote: "Isolate dy/dx by dividing"
        });
        
        // Step 5: Simplify (if different)
        if (result.numerator !== result.numeratorOriginal || result.denominator !== result.denominatorOriginal) {
            steps.push({
                title: "Step 5: Simplify",
                explanation: "Factor out common terms if possible:",
                formula: `dy/dx = (${result.numerator}) / (${result.denominator})`,
                educationalNote: "Always simplify to the cleanest form!"
            });
        }
        
        // Final step
        steps.push({
            title: "✓ Final Answer",
            explanation: "The implicit derivative is:",
            formula: result.text,
            isFinal: true,
            educationalNote: "This shows how y changes with respect to x along the curve!"
        });
        
        return steps;
    }
    
    generateDetailedSteps(originalExpr, parsedNode, derivative, simplified) {
        const steps = [];
        const ruleType = this.identifyRule(originalExpr);
        
        // Step 0: Show original expression
        steps.push({
            title: "📝 Original Problem",
            explanation: `You want to find the derivative of:`,
            formula: `f(x) = ${this.formatExpression(originalExpr)}`,
            educationalNote: "This is what we're starting with. Let's break it down step by step!",
            isOriginal: true
        });
        
        // Step 1: Identify the problem
        steps.push({
            title: "Problem",
            explanation: `Find the derivative with respect to x`,
            formula: `We need: f'(x) = d/dx[${this.formatExpression(originalExpr)}]`,
            educationalNote: "We need to find f'(x), which represents the rate of change of the function."
        });
        
        // Step 2: Identify the rule
        steps.push({
            title: `Identify the Rule`,
            explanation: this.getDetailedRuleExplanation(ruleType, originalExpr),
            formula: this.getRuleFormula(ruleType),
            educationalNote: this.getRuleEducationalNote(ruleType)
        });
        
        // Step 3: Apply the rule (with intermediate steps)
        const intermediateSteps = this.getIntermediateSteps(originalExpr, ruleType);
        if (intermediateSteps.length > 0) {
            intermediateSteps.forEach((step, index) => {
                steps.push({
                    title: `Apply the Rule - Part ${index + 1}`,
                    explanation: step.explanation,
                    formula: step.formula,
                    educationalNote: step.note
                });
            });
        }
        
        // Step 4: Simplify
        steps.push({
            title: "Simplify",
            explanation: "Combine like terms and simplify the expression",
            formula: `f'(x) = ${simplified.toString()}`,
            educationalNote: "Always simplify your final answer to make it cleaner and easier to understand."
        });
        
        // Step 5: Final Answer
        steps.push({
            title: "Final Answer",
            explanation: "The derivative of the function is:",
            formula: `f'(x) = ${simplified.toString()}`,
            isFinal: true,
            educationalNote: "This represents the instantaneous rate of change of f(x) at any point x."
        });
        
        return steps;
    }
    
    identifyRule(expr) {
        // Check for multiple operations
        const hasProduct = expr.includes('*') && !expr.includes('/');
        const hasQuotient = expr.includes('/');
        const hasTrig = /sin|cos|tan|csc|sec|cot/.test(expr);
        const hasExp = expr.includes('e^') || (expr.includes('e') && expr.includes('^'));
        const hasLog = /log|ln/.test(expr);
        const hasPower = /\^/.test(expr);
        const hasSum = expr.includes('+') || (expr.includes('-') && !expr.startsWith('-'));
        
        // Prioritize complex rules
        if (hasQuotient) {
            return "Quotient Rule";
        }
        if (hasProduct && hasTrig) {
            return "Product Rule with Trigonometry";
        }
        if (hasProduct) {
            return "Product Rule";
        }
        if (hasTrig && (hasPower || hasProduct)) {
            return "Chain Rule with Trigonometry";
        }
        if (hasTrig) {
            return "Trigonometric Derivative";
        }
        if (hasExp) {
            return "Exponential Rule";
        }
        if (hasLog) {
            return "Logarithmic Rule";
        }
        if (hasPower && hasSum) {
            return "Power Rule with Sum";
        }
        if (hasPower) {
            return "Power Rule";
        }
        if (hasSum) {
            return "Sum Rule";
        }
        
        return "Basic Derivative";
    }
    
    getDetailedRuleExplanation(ruleType, expr) {
        const explanations = {
            "Power Rule": "When you have x raised to a power (x^n), bring down the exponent as a coefficient and reduce the exponent by 1.",
            "Power Rule with Sum": "First, break down the expression into separate terms. Then apply the Power Rule to each term individually.",
            "Product Rule": "When multiplying two functions, the derivative is: (first function)' × (second function) + (first function) × (second function)'",
            "Quotient Rule": "When dividing two functions u(x)/v(x), use: [u'(x)×v(x) - u(x)×v'(x)] / [v(x)]²",
            "Chain Rule with Trigonometry": "For composite functions like sin(u), first find the derivative of the outer function, then multiply by the derivative of the inner function.",
            "Trigonometric Derivative": "Use the standard trigonometric derivative formulas.",
            "Product Rule with Trigonometry": "Combine the Product Rule with trigonometric derivatives.",
            "Sum Rule": "The derivative of a sum equals the sum of the derivatives. Differentiate each term separately.",
            "Exponential Rule": "For e^x, the derivative is simply e^x. For e^(u), multiply by the derivative of u.",
            "Logarithmic Rule": "For ln(x), the derivative is 1/x. For log(x), the derivative is 1/(x·ln(10)).",
            "Basic Derivative": "Apply the constant and linear function rules."
        };
        return explanations[ruleType] || "Apply the appropriate differentiation technique.";
    }
    
    getRuleFormula(ruleType) {
        const formulas = {
            "Power Rule": "If f(x) = x^n, then f'(x) = n·x^(n-1)",
            "Power Rule with Sum": "d/dx(a·x^n + b·x^m + c) = a·n·x^(n-1) + b·m·x^(m-1) + 0",
            "Product Rule": "d/dx[u(x)·v(x)] = u'(x)·v(x) + u(x)·v'(x)",
            "Quotient Rule": "d/dx[u(x)/v(x)] = [u'(x)·v(x) - u(x)·v'(x)] / [v(x)]²",
            "Chain Rule with Trigonometry": "d/dx[sin(u)] = cos(u)·u'  |  d/dx[cos(u)] = -sin(u)·u'",
            "Trigonometric Derivative": "d/dx(sin x) = cos x  |  d/dx(cos x) = -sin x  |  d/dx(tan x) = sec²x",
            "Product Rule with Trigonometry": "Combine: d/dx[u·v] = u'·v + u·v' with trig derivatives",
            "Sum Rule": "d/dx[f(x) + g(x)] = f'(x) + g'(x)",
            "Exponential Rule": "d/dx(e^x) = e^x  |  d/dx(e^u) = e^u · u'",
            "Logarithmic Rule": "d/dx(ln x) = 1/x  |  d/dx(log x) = 1/(x·ln 10)",
            "Basic Derivative": "d/dx(c) = 0  |  d/dx(x) = 1"
        };
        return formulas[ruleType] || "";
    }
    
    getRuleEducationalNote(ruleType) {
        const notes = {
            "Power Rule": "Remember: The power comes down as a multiplier, and you subtract 1 from the original power.",
            "Power Rule with Sum": "This is one of the most common rules in calculus. Each term is independent!",
            "Product Rule": "Think: 'derivative of first times second, plus first times derivative of second'",
            "Quotient Rule": "Memory tip: 'Lo d-Hi minus Hi d-Lo, over Lo-Lo' (Low × derivative of High - High × derivative of Low, all over Low squared)",
            "Chain Rule with Trigonometry": "Work from outside to inside: differentiate the outer function, keep the inside, then multiply by the derivative of the inside.",
            "Trigonometric Derivative": "Memorize these! They're fundamental in calculus.",
            "Product Rule with Trigonometry": "Break it down into smaller parts: identify u and v, find their derivatives, then apply the product rule.",
            "Sum Rule": "This makes derivatives easier! You can break complex expressions into simpler parts.",
            "Exponential Rule": "e^x is special: it's its own derivative!",
            "Logarithmic Rule": "Natural log (ln) has a simpler derivative than common log.",
            "Basic Derivative": "These are the building blocks of all derivative rules."
        };
        return notes[ruleType] || "Pay attention to the structure of the function to choose the right rule.";
    }
    
    getIntermediateSteps(expr, ruleType) {
        const steps = [];
        
        // Parse the expression to get its structure
        try {
            if (ruleType === "Power Rule with Sum") {
                // Break down term by term
                const terms = expr.split('+').map(t => t.trim());
                
                steps.push({
                    explanation: "Break the expression into separate terms:",
                    formula: terms.map((t, i) => `Term ${i + 1}: ${t}`).join(' | '),
                    note: "We can differentiate each term independently because of the Sum Rule."
                });
                
                steps.push({
                    explanation: "Apply the Power Rule to each term:",
                    formula: this.showTermByTermDerivative(expr),
                    note: "For each term cx^n, the derivative is c·n·x^(n-1)"
                });
                
            } else if (ruleType === "Product Rule") {
                steps.push({
                    explanation: "Identify u(x) and v(x) in the product:",
                    formula: this.identifyProductTerms(expr),
                    note: "Label the two parts being multiplied."
                });
                
                steps.push({
                    explanation: "Find u'(x) and v'(x) separately:",
                    formula: this.showProductDerivatives(expr),
                    note: "Differentiate each part on its own before combining."
                });
                
            } else if (ruleType === "Quotient Rule") {
                steps.push({
                    explanation: "Identify the numerator u(x) and denominator v(x):",
                    formula: this.identifyQuotientTerms(expr),
                    note: "The top is u(x) and the bottom is v(x)."
                });
                
                steps.push({
                    explanation: "Calculate u'(x) and v'(x):",
                    formula: this.showQuotientDerivatives(expr),
                    note: "Find each derivative before substituting into the formula."
                });
            }
            
        } catch (error) {
            console.log('Error generating intermediate steps:', error);
        }
        
        return steps;
    }
    
    showTermByTermDerivative(expr) {
        // Simplified version - shows concept
        let result = "Applying Power Rule to each term separately";
        
        if (expr.includes('x^3')) result += " | d/dx(x³) = 3x²";
        if (expr.includes('x^2')) result += " | d/dx(x²) = 2x";
        if (expr.includes('2*x') || expr.includes('2x')) result += " | d/dx(2x) = 2";
        if (/\d+$/.test(expr)) result += " | d/dx(constant) = 0";
        
        return result;
    }
    
    identifyProductTerms(expr) {
        const parts = expr.split('*');
        if (parts.length >= 2) {
            return `u(x) = ${parts[0].trim()}  |  v(x) = ${parts.slice(1).join('*').trim()}`;
        }
        return "u(x) and v(x) identified from the expression";
    }
    
    showProductDerivatives(expr) {
        return "Calculate u'(x) and v'(x) using appropriate rules, then substitute into product rule formula";
    }
    
    identifyQuotientTerms(expr) {
        const parts = expr.split('/');
        if (parts.length >= 2) {
            return `Numerator u(x) = ${parts[0].trim()}  |  Denominator v(x) = ${parts[1].trim()}`;
        }
        return "Identify numerator and denominator";
    }
    
    showQuotientDerivatives(expr) {
        return "Find u'(x) and v'(x), then apply: [u'·v - u·v'] / v²";
    }
    
    formatExpression(expr) {
        return expr
            .replace(/\*/g, '·')
            .replace(/pi/g, 'π')
            .replace(/\^/g, '^');
    }
    
    toggleSteps() {
        const stepsContainer = document.getElementById('steps-container');
        const showStepsBtn = document.getElementById('show-steps-btn');
        
        if (!stepsContainer) return;
        
        if (stepsContainer.classList.contains('hidden')) {
            if (this.currentSteps.length === 0) {
                alert('Calculate a derivative first to see the step-by-step solution!');
                return;
            }
            this.showSteps();
            showStepsBtn.textContent = 'Hide Steps';
        } else {
            this.hideSteps();
            showStepsBtn.textContent = 'Show Steps';
        }
    }
    
    showSteps() {
        const stepsContainer = document.getElementById('steps-container');
        const stepsContent = document.getElementById('steps-content');
        
        if (!stepsContainer || !stepsContent) return;
        
        stepsContent.innerHTML = '';
        
        this.currentSteps.forEach((step, index) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'step-item';
            
            // Add original class for first step
            if (step.isOriginal) {
                stepDiv.classList.add('original');
            }
            
            const stepTitle = document.createElement('div');
            stepTitle.className = 'step-title';
            
            if (step.isFinal) {
                stepTitle.textContent = `✓ ${step.title}`;
                stepDiv.style.borderLeftColor = '#4CAF50';
            } else if (step.isOriginal) {
                stepTitle.textContent = step.title;
            } else {
                stepTitle.textContent = `${step.title}`;
            }
            
            const stepExplanation = document.createElement('div');
            stepExplanation.className = 'step-explanation';
            stepExplanation.textContent = step.explanation;
            
            const stepFormula = document.createElement('div');
            stepFormula.className = 'step-formula';
            stepFormula.textContent = step.formula;
            
            stepDiv.appendChild(stepTitle);
            stepDiv.appendChild(stepExplanation);
            stepDiv.appendChild(stepFormula);
            
            // Add educational note if present
            if (step.educationalNote) {
                const noteDiv = document.createElement('div');
                noteDiv.className = 'step-explanation';
                noteDiv.style.marginTop = '8px';
                noteDiv.style.fontStyle = 'italic';
                noteDiv.style.color = '#666';
                noteDiv.innerHTML = `💡 <strong>Tip:</strong> ${step.educationalNote}`;
                stepDiv.appendChild(noteDiv);
            }
            
            stepsContent.appendChild(stepDiv);
        });
        
        stepsContainer.classList.remove('hidden');
    }
    
    hideSteps() {
        const stepsContainer = document.getElementById('steps-container');
        const showStepsBtn = document.getElementById('show-steps-btn');
        
        if (stepsContainer) {
            stepsContainer.classList.add('hidden');
        }
        if (showStepsBtn) {
            showStepsBtn.textContent = 'Show Steps';
        }
    }
    
    getHigherDerivative() {
        if (!this.currentDerivative) {
            this.renderOutput('\\text{Calculate a derivative first}');
            return;
        }
        
        try {
            const simplified = math.simplify(this.currentDerivative);
            if (simplified.toString() === '0') {
                this.renderOutput('0');
                this.lastResult = '0';
                this.currentSteps = [{
                    title: "Higher Order Derivative",
                    explanation: `The ${this.getOrdinalNumber(this.derivativeOrder + 1)} derivative is zero`,
                    formula: `f${"'".repeat(this.derivativeOrder + 1)}(x) = 0`,
                    educationalNote: "When the derivative reaches zero, all subsequent derivatives will also be zero. This means the rate of change has become constant."
                }];
                return;
            }
            
            const nextDerivative = math.derivative(this.currentDerivative, 'x');
            const nextSimplified = math.simplify(nextDerivative);
            this.currentDerivative = nextSimplified;
            this.derivativeOrder++;
            
            // Generate educational steps for higher derivative
            this.currentSteps = this.generateHigherDerivativeSteps(simplified, nextSimplified);
            
            let latex = nextSimplified.toTex();
            latex = this.cleanLatex(latex);
            
            const resultStr = nextSimplified.toString();
            this.lastResult = resultStr;
            
            this.renderOutput(latex);
            this.addToCalculationHistory(`${this.getOrdinalNumber(this.derivativeOrder + 1)} derivative of ${this.originalExpression}`, resultStr);
            this.hideSteps();
            
        } catch (error) {
            console.error('Higher derivative error:', error);
            this.renderOutput('\\text{Error}');
        }
    }
    
    generateHigherDerivativeSteps(previousDerivative, currentDerivative) {
        const steps = [];
        const orderName = this.getOrdinalNumber(this.derivativeOrder + 1);
        
        // Add original expression reminder
        steps.push({
            title: "📝 Original Expression",
            explanation: `Remember, we started with:`,
            formula: `f(x) = ${this.formatExpression(this.originalExpression)}`,
            educationalNote: `Now we're finding the ${orderName} derivative.`,
            isOriginal: true
        });
        
        steps.push({
            title: "Previous Result",
            explanation: `We're finding the ${orderName} derivative of the original function`,
            formula: `f${"'".repeat(this.derivativeOrder)}(x) = ${previousDerivative.toString()}`,
            educationalNote: `The ${orderName} derivative tells us about the rate of change of the ${this.getOrdinalNumber(this.derivativeOrder)} derivative.`
        });
        
        steps.push({
            title: "Apply Derivative Rules",
            explanation: "Differentiate the previous result using the same rules",
            formula: `Taking d/dx of the previous result`,
            educationalNote: "Higher derivatives follow the same rules as first derivatives!"
        });
        
        steps.push({
            title: "Final Answer",
            explanation: `The ${orderName} derivative is:`,
            formula: `f${"'".repeat(this.derivativeOrder + 1)}(x) = ${currentDerivative.toString()}`,
            isFinal: true,
            educationalNote: this.getHigherDerivativeNote(this.derivativeOrder + 1)
        });
        
        return steps;
    }
    
    getHigherDerivativeNote(order) {
        const notes = {
            2: "The second derivative tells us about concavity (whether the function curves up or down).",
            3: "The third derivative relates to the rate of change of concavity.",
            4: "Fourth and higher derivatives have applications in physics and engineering.",
        };
        return notes[order] || `The ${this.getOrdinalNumber(order)} derivative shows how the ${this.getOrdinalNumber(order - 1)} derivative changes.`;
    }
    
    getOrdinalNumber(n) {
        const ordinals = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
        return ordinals[n] || `${n}th`;
    }
    
    cleanLatex(latex) {
        latex = latex.replace(/\\cdot/g, '');
        latex = latex.replace(/\\,/g, '');
        latex = latex.replace(/\s+/g, ' ');
        return latex.trim();
    }
    
    renderOutput(content) {
        if (!this.output) return;
        
        try {
            if (content.includes('\\') || content.includes('^') || content.includes('_') || content.includes('frac')) {
                katex.render(content, this.output, {
                    throwOnError: false,
                    displayMode: true
                });
            } else {
                this.output.textContent = content;
            }
        } catch (error) {
            console.error('Rendering error:', error);
            this.output.textContent = content;
        }
    }
    
    handleKeyboard(e) {
        if (!this.display) return;
        
        const key = e.key;
        const calcApp = document.getElementById('calculator-app');
        if (!calcApp || !calcApp.querySelector('.calculator')) return;
        
        // Ctrl+Z for undo
        if (e.ctrlKey && key === 'z' && !e.shiftKey) {
            this.undo();
            e.preventDefault();
            return;
        }
        
        // Ctrl+Y or Ctrl+Shift+Z for redo
        if ((e.ctrlKey && key === 'y') || (e.ctrlKey && e.shiftKey && key === 'z')) {
            this.redo();
            e.preventDefault();
            return;
        }
        
        if (key >= '0' && key <= '9') {
            this.addToExpression(key);
            e.preventDefault();
        } else if (key === '.') {
            this.addToExpression('.');
            e.preventDefault();
        } else if (key === '+') {
            this.addToExpression('+');
            e.preventDefault();
        } else if (key === '-') {
            this.addToExpression('-');
            e.preventDefault();
        } else if (key === '*') {
            this.addToExpression('*');
            e.preventDefault();
        } else if (key === '/') {
            this.addToExpression('/');
            e.preventDefault();
        } else if (key === '(' || key === ')') {
            this.addToExpression(key);
            e.preventDefault();
        } else if (key === '^') {
            this.addToExpression('^');
            e.preventDefault();
        } else if (key === 'x' || key === 'X') {
            this.addToExpression('x');
            e.preventDefault();
        } else if (key === 'y' || key === 'Y') {
            this.addToExpression('y');
            e.preventDefault();
        } else if (key === 'Enter' || key === '=') {
            this.calculate();
            e.preventDefault();
        } else if (key === 'Escape') {
            this.clear();
            e.preventDefault();
        } else if (key === 'Backspace') {
            this.backspace();
            e.preventDefault();
        }
    }
}