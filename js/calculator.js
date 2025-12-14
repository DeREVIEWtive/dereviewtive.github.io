class MathSolver {
  constructor() {
    this.display = document.getElementById('display');
    this.output = document.getElementById('modal-output');
    this.stepsContent = document.getElementById('steps-content');
    this.higherOutput = document.getElementById('higher-output');

    if (!this.display || !this.output) return;

    this.currentMode = 'algebra';
    this.expression = '';
    this.currentDerivative = null;
    this.derivativeOrder = 0;
    this.derivativeVariable = 'x'; // Variable to differentiate with respect to
    this.currentSteps = [];
    this.originalExpression = '';
    this.lastResult = '';
    this.allDerivatives = []; // Track all derivatives for display

    this.history = [''];
    this.historyIndex = 0;
    this.calculationHistory = [];

    this.init();
  }

  init() {
    document.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', (e) => this.switchMode(e.target.dataset.mode));
    });

    document.querySelectorAll('.calculator .btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleButtonClick(e));
    });

    document.querySelectorAll('.example-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const example = e.target.dataset.example;
        this.expression = example;
        this.updateDisplay();
        this.addToHistory(this.expression);
      });
    });

    const clearBtn = document.querySelector('.clear-display');
    if (clearBtn) clearBtn.addEventListener('click', () => this.clear());

    const undoBtn = document.getElementById('undo-btn');
    if (undoBtn) undoBtn.addEventListener('click', () => this.undo());

    const redoBtn = document.getElementById('redo-btn');
    if (redoBtn) redoBtn.addEventListener('click', () => this.redo());

    const helpBtn = document.getElementById('help-btn');
    if (helpBtn) helpBtn.addEventListener('click', () => this.toggleHelp());

    const helpClose = document.getElementById('help-close');
    const helpModal = document.getElementById('help-modal');
    if (helpClose) helpClose.addEventListener('click', () => this.toggleHelp());
    if (helpModal) {
      helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) this.toggleHelp();
      });
    }

    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) copyBtn.addEventListener('click', () => this.copyResult());

    // ✅ Result modal tab switching
    document.querySelectorAll('.result-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tabName = e.target.dataset.tab;
        
        document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        
        document.querySelectorAll('.result-tab-content').forEach(c => c.classList.remove('active'));
        const targetTab = document.getElementById(`${tabName}-tab`);
        if (targetTab) targetTab.classList.add('active');

        // Initialize the Higher Derivative tab when clicked
        if (tabName === 'higher') {
          this.getHigherDerivative();
        }
      });
    });

    const clearHistoryBtn = document.getElementById('clear-history');
    if (clearHistoryBtn) clearHistoryBtn.addEventListener('click', () => this.clearCalculationHistory());

    // ✅ Get Higher Derivative button
    const getHigherBtn = document.getElementById('get-higher-btn');
    if (getHigherBtn) getHigherBtn.addEventListener('click', () => this.getHigherDerivativeStep());

    document.addEventListener('keydown', (e) => this.handleKeyboard(e));

    this.loadCalculationHistory();
    this.updateUndoRedoButtons();
  }

  addToExpression(value) {
    this.expression += value;
    this.updateDisplay();
    this.addToHistory(this.expression);
  }

  backspace() {
    this.expression = this.expression.slice(0, -1);
    this.updateDisplay();
    this.addToHistory(this.expression);
  }

  clear() {
    this.expression = '';
    this.currentDerivative = null;
    this.derivativeOrder = 0;
    this.derivativeVariable = 'x';
    this.currentSteps = [];
    this.originalExpression = '';
    this.allDerivatives = [];
    this.updateDisplay();
    this.addToHistory(this.expression);
    this.renderOutput('0');
  }

  updateDisplay() {
    this.display.value = this.expression;
  }

  toggleHelp() {
    const helpModal = document.getElementById('help-modal');
    if (helpModal) helpModal.classList.toggle('show');
  }

  copyResult() {
    if (this.lastResult) {
      navigator.clipboard.writeText(this.lastResult).then(() => {
        const copyBtn = document.getElementById('copy-btn');
        if (copyBtn) {
          copyBtn.textContent = '✓ Copied!';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = '📋 Copy';
            copyBtn.classList.remove('copied');
          }, 2000);
        }
      });
    }
  }

  loadCalculationHistory() {
    const stored = localStorage.getItem('calculationHistory');
    if (stored) {
      try {
        this.calculationHistory = JSON.parse(stored);
        this.renderCalculationHistory();
      } catch (e) {
        this.calculationHistory = [];
      }
    }
  }

  addToCalculationHistory(expression, result) {
    const item = {
      expression,
      result,
      timestamp: Date.now()
    };

    this.calculationHistory.unshift(item);

    if (this.calculationHistory.length > 10) {
      this.calculationHistory = this.calculationHistory.slice(0, 10);
    }

    localStorage.setItem('calculationHistory', JSON.stringify(this.calculationHistory));
    this.renderCalculationHistory();
  }

  renderCalculationHistory() {
    const historyContent = document.getElementById('history-content');
    if (!historyContent) return;

    if (this.calculationHistory.length === 0) {
      historyContent.innerHTML = '<div class="history-empty">No calculations yet</div>';
      return;
    }

    historyContent.innerHTML = '';

    this.calculationHistory.forEach(item => {
      const historyItem = document.createElement('div');
      historyItem.className = 'history-item';
      historyItem.dataset.expression = item.expression;

      const expr = document.createElement('div');
      expr.className = 'history-expression';
      expr.textContent = item.expression;

      const result = document.createElement('div');
      result.className = 'history-result';
      result.textContent = `→ ${item.result}`;

      historyItem.appendChild(expr);
      historyItem.appendChild(result);
      historyContent.appendChild(historyItem);

      historyItem.addEventListener('click', (e) => {
        const expr = e.currentTarget.dataset.expression;
        this.expression = expr;
        this.updateDisplay();
        this.addToHistory(this.expression);
        
        const historyModal = document.getElementById('history-modal');
        if (historyModal) historyModal.classList.remove('show');
      });
    });
  }

  clearCalculationHistory() {
    this.calculationHistory = [];
    localStorage.removeItem('calculationHistory');
    this.renderCalculationHistory();
  }

  addToHistory(expr) {
    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }

    this.history.push(expr);
    this.historyIndex = this.history.length - 1;

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

    if (undoBtn) undoBtn.disabled = this.historyIndex <= 0;
    if (redoBtn) redoBtn.disabled = this.historyIndex >= this.history.length - 1;
  }

  switchMode(mode) {
    this.currentMode = mode;

    document.querySelectorAll('.mode-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.mode === mode);
    });

    document.querySelectorAll('.calculator-grid').forEach(grid => grid.classList.add('hidden'));
    
    if (mode === 'letters') {
      const lettersGrid = document.getElementById('letters-grid');
      if (lettersGrid) lettersGrid.classList.remove('hidden');
    } else {
      const target = document.getElementById(`${mode}-grid`);
      if (target) target.classList.remove('hidden');
    }
  }

  handleButtonClick(e) {
    const btn = e.target;

    if (btn.classList.contains('backspace')) {
      this.backspace();
    } else if (btn.classList.contains('clear')) {
      this.clear();
    } else if (btn.classList.contains('equals')) {
      this.calculate();
    } else if (btn.dataset.value) {
      this.addToExpression(btn.dataset.value);
    } else if (btn.dataset.action === 'powerPrompt') {
      const power = prompt('Enter power (e.g., 2 for x², 3 for x³):');
      if (power !== null && power.trim() !== '') {
        this.addToExpression(`^(${power.trim()})`);
      }
    }
  }

  normalizeExpressionForMathJs(input) {
    return input
      .replace(/pi/gi, 'PI')
      .replace(/√/g, 'sqrt')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/∞/g, 'Infinity')
      .replace(/\s+/g, '')
      .trim();
  }

  calculate() {
    if (!this.expression.trim()) {
      this.renderOutput('0');
      return;
    }

    try {
      let expr = this.normalizeExpressionForMathJs(this.expression);

      // implicit differentiation
      if (expr.includes('=')) {
        this.calculateImplicitDerivative(expr);
        document.getElementById('result-modal')?.classList.add('show');
        this.resetToOutputTab();
        return;
      }

      const hasVariables = /[a-z]/i.test(
        expr.replace(/pi|e|sin|cos|tan|log|ln|sqrt|abs|csc|sec|cot|arcsin|arccos|arctan/gi, '')
      );

      if (hasVariables || this.expression.includes('d/dx')) {
        this.calculateDerivative(expr);
      } else {
        this.calculateNumerical(expr);
      }
      
      document.getElementById('result-modal')?.classList.add('show');
      this.resetToOutputTab();
    } catch (error) {
      console.error('Calculation error:', error);
      this.showBetterError(error, this.expression);
      document.getElementById('result-modal')?.classList.add('show');
      this.resetToOutputTab();
    }
  }

  resetToOutputTab() {
    document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.result-tab-content').forEach(c => c.classList.remove('active'));
    
    const outputTab = document.querySelector('.result-tab[data-tab="output"]');
    const outputContent = document.getElementById('output-tab');
    if (outputTab) outputTab.classList.add('active');
    if (outputContent) outputContent.classList.add('active');

    // Reset higher derivative tab message
    if (this.higherOutput) {
      if (this.currentDerivative) {
        this.higherOutput.textContent = 'Click here to calculate higher derivative';
      } else {
        this.higherOutput.textContent = 'Calculate a derivative first';
      }
    }
  }

  calculateNumerical(expr) {
    try {
      const result = math.evaluate(expr);
      const formatted = math.format(result, { precision: 14 });

      this.renderOutput(formatted);
      this.lastResult = formatted;
      this.currentSteps = [];
      this.currentDerivative = null;
      this.renderSteps();
      
      this.addToCalculationHistory(this.expression, formatted);
    } catch (error) {
      console.error('Numerical calculation error:', error);
      throw error;
    }
  }

  showBetterError(error, expr) {
    let errorMessage = 'Invalid expression';

    const openParens = (expr.match(/\(/g) || []).length;
    const closeParens = (expr.match(/\)/g) || []).length;

    if (openParens > closeParens) errorMessage = 'Missing closing parenthesis ")"';
    else if (closeParens > openParens) errorMessage = 'Missing opening parenthesis "("';
    else if (expr.includes('d/dx') && expr.split('d/dx').length > 2) errorMessage = 'Cannot use d/dx multiple times';
    else if (expr.includes('=') && expr.split('=').length > 2) errorMessage = 'Equation can only have one = sign';
    else if (expr.endsWith('+') || expr.endsWith('-') || expr.endsWith('*') || expr.endsWith('/')) errorMessage = 'Expression cannot end with operator';

    this.renderOutput(`\\text{❌ ${errorMessage}}`);
    this.lastResult = `❌ ${errorMessage}`;
    this.currentSteps = [];
    this.currentDerivative = null;
    this.renderSteps();
  }

  buildDerivativeTips(expr) {
    const tips = [];
    if (expr.includes('^')) tips.push("Power Rule: d/dx(x^n) = n·x^(n-1)");
    if (/sin|cos|tan|csc|sec|cot/i.test(expr)) tips.push("Trig Rules: d/dx(sin x)=cos x, d/dx(cos x)=-sin x, etc.");
    if (/\w+\s*\(/.test(expr)) tips.push("Chain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x)");
    if (expr.includes('*')) tips.push("Product Rule (when needed): (uv)' = u'v + uv'");
    if (expr.includes('/')) tips.push("Quotient Rule (when needed): (u/v)' = (u'v - uv')/v²");
    return tips.join(" • ") || "Apply standard differentiation rules.";
  }

  calculateDerivative(expr) {
    try {
      let cleaned = expr;

      // Detect which variable to differentiate with respect to
      let derivVar = 'x'; // default to x
      
      // Check if d/dX notation is used (e.g., d/dy, d/dt, etc.)
      const ddMatch = cleaned.match(/d\/d([a-z])/i);
      if (ddMatch) {
        derivVar = ddMatch[1].toLowerCase();
        cleaned = cleaned.replace(/d\/d[a-z]\s*\(\s*/gi, '');
        if (cleaned.endsWith(')')) cleaned = cleaned.slice(0, -1);
        cleaned = cleaned.trim();
      } else {
        // Auto-detect variable from expression
        // Remove constants and functions to find variables
        const withoutConstants = cleaned.replace(/pi|e|sin|cos|tan|log|ln|sqrt|abs|csc|sec|cot|arcsin|arccos|arctan/gi, '');
        const variables = withoutConstants.match(/[a-z]/gi);
        
        if (variables && variables.length > 0) {
          // Get unique variables
          const uniqueVars = [...new Set(variables.map(v => v.toLowerCase()))];
          
          // If only one variable, use it
          if (uniqueVars.length === 1) {
            derivVar = uniqueVars[0];
          }
          // If multiple variables, prefer x, then y, then alphabetically first
          else if (uniqueVars.includes('x')) {
            derivVar = 'x';
          } else if (uniqueVars.includes('y')) {
            derivVar = 'y';
          } else {
            derivVar = uniqueVars.sort()[0];
          }
        }
      }
      
      this.derivativeVariable = derivVar;
      this.originalExpression = cleaned;

      const node = math.parse(cleaned);
      const rawDerivative = math.derivative(node, derivVar);
      const simplified = math.simplify(rawDerivative);
      const expanded = math.expand(simplified); // Expand to prevent factoring

      this.currentDerivative = expanded;
      this.derivativeOrder = 1;
      
      // Store first derivative
      this.allDerivatives = [{
        order: 1,
        expression: expanded,
        latex: this.toTexSafe(expanded),
        text: expanded.toString(),
        variable: derivVar
      }];

      const tips = this.buildDerivativeTips(cleaned);

      this.currentSteps = [
        {
          title: "📝 Original Problem",
          explanation: "Differentiate:",
          latex: `f(${derivVar}) = ${this.toTexSafe(node)}`,
          educationalNote: tips
        },
        {
          title: `Step 1: Apply d/d${derivVar}`,
          explanation: "Take the derivative of the whole function:",
          latex: `\\frac{d}{d${derivVar}}\\left(${this.toTexSafe(node)}\\right)`
        },
        {
          title: "Step 2: Compute derivative (unsimplified)",
          explanation: "Apply differentiation rules to each part:",
          latex: `f'(${derivVar}) = ${this.toTexSafe(rawDerivative)}`
        },
        {
          title: "Step 3: Simplify",
          explanation: "Simplify the expression to a cleaner form:",
          latex: `f'(${derivVar}) = ${this.toTexSafe(expanded)}`
        },
        {
          title: "✓ Final Answer",
          explanation: "Derivative:",
          latex: `f'(${derivVar}) = ${this.toTexSafe(expanded)}`,
          isFinal: true
        }
      ];

      let latexOut = expanded.toTex();
      latexOut = this.cleanLatex(latexOut);

      const resultStr = expanded.toString();
      this.lastResult = resultStr;

      this.renderAllDerivatives();
      this.renderSteps();
      this.addToCalculationHistory(this.expression, resultStr);
    } catch (error) {
      console.error('Derivative error:', error);
      this.showBetterError(error, this.expression);
    }
  }

  // ✅ Use original correct implicit derivative logic
  calculateImplicitDerivative(expr) {
    try {
      const parts = expr.split('=');
      if (parts.length !== 2) {
        this.renderOutput('\\text{❌ Equation must have exactly one = sign}');
        this.lastResult = '❌ Equation must have exactly one = sign';
        this.currentSteps = [];
        this.currentDerivative = null;
        this.renderSteps();
        return;
      }

      const leftSide = parts[0].trim();
      const rightSide = parts[1].trim();

      const leftNode = math.parse(leftSide);
      const rightNode = math.parse(rightSide);

      const result = this.computeImplicitDerivative(leftNode, rightNode);

      this.currentDerivative = null; // Implicit derivatives don't support higher derivatives
      this.derivativeOrder = 1;
      this.originalExpression = expr;

      this.currentSteps = [
        {
          title: "📝 Original Equation",
          explanation: "We have an implicit equation with both x and y:",
          latex: `${this.toTexSafe(leftNode)} = ${this.toTexSafe(rightNode)}`,
          educationalNote: "Since y is implicitly a function of x, we need implicit differentiation."
        },
        {
          title: "Step 1: Differentiate implicitly",
          explanation: "Apply d/dx to both sides. For y terms, use chain rule: d/dx(y)=dy/dx",
          latex: `\\frac{d}{dx}\\left(${this.toTexSafe(leftNode)}\\right) = \\frac{d}{dx}\\left(${this.toTexSafe(rightNode)}\\right)`
        },
        {
          title: "Step 2: Apply partial derivatives",
          explanation: "Compute derivatives treating y as a function of x:",
          latex: `${result.meta.latex_dLdx} + ${result.meta.latex_dLdy}\\,\\frac{dy}{dx} = ${result.meta.latex_dRdx} + ${result.meta.latex_dRdy}\\,\\frac{dy}{dx}`
        },
        {
          title: "Step 3: Collect dy/dx terms",
          explanation: "Move all dy/dx terms to one side:",
          latex: `${result.meta.latex_collect_left} \\,\\frac{dy}{dx} = ${result.meta.latex_collect_right}`
        },
        {
          title: "Step 4: Solve for dy/dx",
          explanation: "Divide both sides by the coefficient of dy/dx:",
          latex: `\\frac{dy}{dx} = \\frac{${result.meta.latex_num}}{${result.meta.latex_den}}`
        },
        {
          title: "Step 5: Simplify",
          explanation: "Factor out common terms if possible:",
          latex: result.meta.latex_simplified
        },
        {
          title: "✓ Final Answer",
          explanation: "The implicit derivative is:",
          latex: `\\frac{dy}{dx} = ${result.meta.latex_simplified_rhs}`,
          isFinal: true
        }
      ];

      this.renderOutput(result.latex);
      this.lastResult = result.text;
      this.renderSteps();

      this.addToCalculationHistory(this.expression, result.text);
    } catch (error) {
      console.error('Implicit differentiation error:', error);
      this.renderOutput('\\text{❌ Error in implicit differentiation}');
      this.lastResult = '❌ Error in implicit differentiation';
      this.currentSteps = [];
      this.currentDerivative = null;
      this.renderSteps();
    }
  }



  // ✅ Original correct computeImplicitDerivative method
  computeImplicitDerivative(leftNode, rightNode) {
    const dLdx = math.derivative(leftNode, 'x');
    const dLdy = math.derivative(leftNode, 'y');
    const dRdx = math.derivative(rightNode, 'x');
    const dRdy = math.derivative(rightNode, 'y');

    // dy/dx = (dRdx - dLdx) / (dLdy - dRdy)
    const numeratorNode = new math.OperatorNode('-', 'subtract', [dRdx, dLdx]);
    const denominatorNode = new math.OperatorNode('-', 'subtract', [dLdy, dRdy]);

    let dyNode = new math.OperatorNode('/', 'divide', [numeratorNode, denominatorNode]);
    dyNode = math.simplify(dyNode);
    dyNode = math.expand(dyNode); // Expand to prevent factoring

    const texOptions = { implicit: 'hide' };

    const latex_dLdx = this.toTexSafe(dLdx, texOptions);
    const latex_dLdy = this.toTexSafe(dLdy, texOptions);
    const latex_dRdx = this.toTexSafe(dRdx, texOptions);
    const latex_dRdy = this.toTexSafe(dRdy, texOptions);

    const latex_num = this.toTexSafe(numeratorNode, texOptions);
    const latex_den = this.toTexSafe(denominatorNode, texOptions);

    const simplified_rhs = this.toTexSafe(dyNode, texOptions);

    return {
      latex: `\\frac{dy}{dx} = ${simplified_rhs}`,
      text: `dy/dx = ${dyNode.toString().replace(/\*/g, '')}`,
      meta: {
        latex_dLdx,
        latex_dLdy,
        latex_dRdx,
        latex_dRdy,
        latex_num,
        latex_den,
        latex_collect_left: `(${latex_dLdy} - ${latex_dRdy})`,
        latex_collect_right: `(${latex_dRdx} - ${latex_dLdx})`,
        latex_simplified: `\\frac{dy}{dx} = ${simplified_rhs}`,
        latex_simplified_rhs: simplified_rhs
      }
    };
  }

  renderSteps() {
    if (!this.stepsContent) return;

    this.stepsContent.innerHTML = '';

    if (this.currentSteps.length === 0) {
      this.stepsContent.innerHTML = '<div class="history-empty">Calculate a derivative to see steps</div>';
      return;
    }

    this.currentSteps.forEach((step) => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'step-item';

      const stepTitle = document.createElement('div');
      stepTitle.className = 'step-title';
      stepTitle.textContent = step.isFinal ? `✓ ${step.title}` : step.title;

      const stepExplanation = document.createElement('div');
      stepExplanation.className = 'step-explanation';
      stepExplanation.textContent = step.explanation;

      const stepFormula = document.createElement('div');
      stepFormula.className = 'step-formula';

      if (step.latex) {
        try {
          katex.render(step.latex, stepFormula, {
            throwOnError: false,
            displayMode: true
          });
        } catch (e) {
          stepFormula.textContent = step.latex;
        }
      } else if (step.formula) {
        stepFormula.textContent = step.formula;
      } else {
        stepFormula.textContent = '';
      }

      stepDiv.appendChild(stepTitle);
      stepDiv.appendChild(stepExplanation);
      stepDiv.appendChild(stepFormula);

      if (step.educationalNote) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'step-explanation';
        noteDiv.style.marginTop = '8px';
        noteDiv.style.fontStyle = 'italic';
        noteDiv.style.color = '#666';
        noteDiv.innerHTML = `💡 <strong>Tip:</strong> ${step.educationalNote}`;
        stepDiv.appendChild(noteDiv);
      }

      this.stepsContent.appendChild(stepDiv);
    });
  }

  // ✅ Initialize Higher Derivative display (called after first derivative calculation)
  initializeHigherDerivative() {
    if (!this.currentDerivative) {
      if (this.higherOutput) {
        try {
          katex.render('\\text{Calculate a derivative first}', this.higherOutput, {
            throwOnError: false,
            displayMode: true
          });
        } catch (e) {
          this.higherOutput.textContent = 'Calculate a derivative first';
        }
      }
      const getHigherBtn = document.getElementById('get-higher-btn');
      if (getHigherBtn) getHigherBtn.style.display = 'none';
      return;
    }

    const derivVar = this.derivativeVariable || 'x';
    
    // Show button for calculating next derivative
    const getHigherBtn = document.getElementById('get-higher-btn');
    if (getHigherBtn) getHigherBtn.style.display = 'inline-block';

    if (this.higherOutput) {
      try {
        katex.render(`\\text{Click "Get Higher Derivative" to calculate } f^{\\prime\\prime}(${derivVar}), f^{\\prime\\prime\\prime}(${derivVar}), \\text{ etc.}`, this.higherOutput, {
          throwOnError: false,
          displayMode: true
        });
      } catch (e) {
        this.higherOutput.textContent = `Click "Get Higher Derivative" to calculate f''(${derivVar}), f'''(${derivVar}), etc.`;
      }
    }
  }

  // ✅ Calculate the next higher derivative (2nd, 3rd, 4th, etc.)
  getHigherDerivativeStep() {
    if (!this.currentDerivative) {
      if (this.higherOutput) {
        try {
          katex.render('\\text{Calculate a derivative first}', this.higherOutput, {
            throwOnError: false,
            displayMode: true
          });
        } catch (e) {
          this.higherOutput.textContent = 'Calculate a derivative first';
        }
      }
      return;
    }

    try {
      const derivVar = this.derivativeVariable || 'x'; // Use detected variable
      
      // Check if current derivative is zero
      const simplified = math.simplify(this.currentDerivative);
      if (simplified.toString() === '0') {
        if (this.higherOutput) {
          try {
            katex.render('\\text{All higher derivatives are } 0', this.higherOutput, {
              throwOnError: false,
              displayMode: true
            });
          } catch (e) {
            this.higherOutput.textContent = 'All higher derivatives are 0';
          }
        }
        // Hide the button since we can't go further
        const getHigherBtn = document.getElementById('get-higher-btn');
        if (getHigherBtn) getHigherBtn.style.display = 'none';
        return;
      }

      // Calculate next derivative
      const previousDerivative = this.currentDerivative;
      const nextDerivative = math.derivative(this.currentDerivative, derivVar);
      const nextSimplified = math.simplify(nextDerivative);
      const nextExpanded = math.expand(nextSimplified); // Expand to prevent factoring
      
      this.currentDerivative = nextExpanded;
      this.derivativeOrder++;

      const orderSuperscript = this.derivativeOrder === 2 ? "''" : 
                             this.derivativeOrder === 3 ? "'''" :
                             `^{(${this.derivativeOrder})}`;
      
      const orderText = this.derivativeOrder === 2 ? '2nd' :
                       this.derivativeOrder === 3 ? '3rd' :
                       `${this.derivativeOrder}th`;

      // Add to allDerivatives array
      this.allDerivatives.push({
        order: this.derivativeOrder,
        expression: nextExpanded,
        latex: this.toTexSafe(nextExpanded),
        text: nextExpanded.toString(),
        variable: derivVar
      });

      // Generate steps for this derivative calculation
      const newSteps = [
        {
          title: `📈 Computing ${orderText} Derivative`,
          explanation: `Now let's find f${orderSuperscript}(${derivVar}) by differentiating f${this.derivativeOrder === 2 ? "'" : this.derivativeOrder === 3 ? "''" : `^{(${this.derivativeOrder-1})}`}(${derivVar}):`,
          latex: `f${this.derivativeOrder === 2 ? "'" : this.derivativeOrder === 3 ? "''" : `^{(${this.derivativeOrder-1})}`}(${derivVar}) = ${this.toTexSafe(previousDerivative)}`
        },
        {
          title: `Step 1: Apply d/d${derivVar}`,
          explanation: `Take the derivative of f${this.derivativeOrder === 2 ? "'" : this.derivativeOrder === 3 ? "''" : `^{(${this.derivativeOrder-1})}`}(${derivVar}):`,
          latex: `\\frac{d}{d${derivVar}}\\left(${this.toTexSafe(previousDerivative)}\\right)`
        },
        {
          title: `Step 2: Compute derivative`,
          explanation: "Apply differentiation rules:",
          latex: `f${orderSuperscript}(${derivVar}) = ${this.toTexSafe(nextDerivative)}`
        },
        {
          title: `Step 3: Simplify`,
          explanation: "Simplify the expression:",
          latex: `f${orderSuperscript}(${derivVar}) = ${this.toTexSafe(nextExpanded)}`
        },
        {
          title: `✓ ${orderText} Derivative Result`,
          explanation: `The ${orderText} derivative is:`,
          latex: `f${orderSuperscript}(${derivVar}) = ${this.toTexSafe(nextExpanded)}`,
          isFinal: true
        }
      ];

      // Append new steps to existing steps
      this.currentSteps = [...this.currentSteps, ...newSteps];

      let latex = nextExpanded.toTex();
      latex = this.cleanLatex(latex);

      const resultStr = nextExpanded.toString();
      this.lastResult = resultStr;

      // Update the Higher Derivative tab display
      if (this.higherOutput) {
        try {
          katex.render(`f${orderSuperscript}(${derivVar}) = ${latex}`, this.higherOutput, {
            throwOnError: false,
            displayMode: true
          });
        } catch (e) {
          this.higherOutput.textContent = `f${orderSuperscript}(${derivVar}) = ${resultStr}`;
        }
      }

      // Render updated steps (cumulative)
      this.renderSteps();
      
      // Update output to show all derivatives
      this.renderAllDerivatives();

      this.addToCalculationHistory(`d^${this.derivativeOrder}/d${derivVar}^${this.derivativeOrder} (${this.originalExpression})`, resultStr);
      
      // Check if next derivative would be zero and hide button if so
      if (nextExpanded.toString() === '0') {
        const getHigherBtn = document.getElementById('get-higher-btn');
        if (getHigherBtn) getHigherBtn.style.display = 'none';
      }
    } catch (error) {
      console.error('Higher derivative error:', error);
      if (this.higherOutput) {
        this.higherOutput.textContent = 'Error calculating higher derivative';
      }
    }
  }

  // ✅ Render all derivatives in the Output tab
  renderAllDerivatives() {
    if (!this.output) return;
    
    if (this.allDerivatives.length === 0) {
      this.renderOutput('0');
      return;
    }

    const derivVar = this.derivativeVariable || 'x';

    // If only first derivative, show it normally
    if (this.allDerivatives.length === 1) {
      this.renderOutput(this.allDerivatives[0].latex);
      return;
    }

    // Build LaTeX for all derivatives
    let allDerivativesLatex = '\\begin{aligned}';
    
    this.allDerivatives.forEach((deriv, index) => {
      const prime = deriv.order === 1 ? "'" :
                   deriv.order === 2 ? "''" :
                   deriv.order === 3 ? "'''" :
                   `^{(${deriv.order})}`;
      
      const var_to_use = deriv.variable || derivVar;
      allDerivativesLatex += `\nf${prime}(${var_to_use}) &= ${deriv.latex}`;
      if (index < this.allDerivatives.length - 1) {
        allDerivativesLatex += ' \\\\';
      }
    });
    
    allDerivativesLatex += '\n\\end{aligned}';

    try {
      katex.render(allDerivativesLatex, this.output, {
        throwOnError: false,
        displayMode: true
      });
    } catch (error) {
      console.error('Rendering error:', error);
      // Fallback to simple text rendering
      let textOutput = this.allDerivatives.map(deriv => {
        const prime = "'".repeat(Math.min(deriv.order, 3)) + (deriv.order > 3 ? `(${deriv.order})` : '');
        const var_to_use = deriv.variable || derivVar;
        return `f${prime}(${var_to_use}) = ${deriv.text}`;
      }).join('\n');
      this.output.textContent = textOutput;
    }
  }

  // Kept for backward compatibility (now just initializes)
  getHigherDerivative() {
    this.initializeHigherDerivative();
  }

  toTexSafe(node, options = { parenthesis: 'auto', implicit: 'show' }) {
    if (!node) return '';
    try {
      return this.cleanLatex(node.toTex(options));
    } catch (e) {
      return String(node ?? '');
    }
  }

  cleanLatex(latex) {
    latex = String(latex || '');
    latex = latex.replace(/\\cdot/g, '');
    latex = latex.replace(/\\,/g, '');
    latex = latex.replace(/\s+/g, ' ');
    return latex.trim();
  }

  renderOutput(content) {
    if (!this.output) return;

    try {
      if (
        typeof content === 'string' &&
        (content.includes('\\') || content.includes('^') || content.includes('_') || content.includes('frac'))
      ) {
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
    const key = e.key;

    if (e.ctrlKey && key === 'z' && !e.shiftKey) {
      this.undo();
      e.preventDefault();
      return;
    }

    if ((e.ctrlKey && key === 'y') || (e.ctrlKey && e.shiftKey && key === 'z')) {
      this.redo();
      e.preventDefault();
      return;
    }

    if (key >= '0' && key <= '9') { this.addToExpression(key); e.preventDefault(); }
    else if (key === '.') { this.addToExpression('.'); e.preventDefault(); }
    else if (key === '+') { this.addToExpression('+'); e.preventDefault(); }
    else if (key === '-') { this.addToExpression('-'); e.preventDefault(); }
    else if (key === '*') { this.addToExpression('*'); e.preventDefault(); }
    else if (key === '/') { this.addToExpression('/'); e.preventDefault(); }
    else if (key === '(' || key === ')') { this.addToExpression(key); e.preventDefault(); }
    else if (key === '^') { this.addToExpression('^'); e.preventDefault(); }
    else if (/^[a-zA-Z]$/.test(key)) { this.addToExpression(key.toLowerCase()); e.preventDefault(); }
    else if (key === 'Enter' || key === '=') { this.calculate(); e.preventDefault(); }
    else if (key === 'Escape') { this.clear(); e.preventDefault(); }
    else if (key === 'Backspace') { this.backspace(); e.preventDefault(); }
  }
}

