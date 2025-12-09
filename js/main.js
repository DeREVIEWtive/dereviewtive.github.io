window.onload = async () => {
    const URLSearch = new URLSearchParams(window.location.search);
    let page = URLSearch.get("page");
    if (page != null) page = decodeURIComponent(page);
    let lesson = URLSearch.get("lesson");
    if (lesson != null) lesson = decodeURIComponent(lesson);

    let contentRequest = null;
    
    if (lesson != null) {
        contentRequest = await fetch(`/lessons/${lesson}.md`);
    } else {
        contentRequest = await fetch(`/pages/${page ?? "index"}.md`);
    }

    const contentData = await contentRequest.text();

    const breakIndex = contentData.indexOf("\n") + 2;
    const headerText = contentData.slice(0, breakIndex);
    const content = contentData.slice(breakIndex);

    header.textContent = headerText;
    main.innerHTML = marked.parse(content);

    // Special handling for calculator page
    if (page === "calculator") {
        loadCalculator();
    }
};

function loadCalculator() {
    const calculatorHTML = `
        <style>
        #calculator-app .calculator-wrapper {
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            position: relative;
            display: flex;
            gap: 15px;
        }

        #calculator-app .history-panel {
            width: 220px;
            background: #f5f5f5;
            border-radius: 12px;
            padding: 15px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            max-height: 600px;
            overflow-y: auto;
        }

        #calculator-app .history-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            font-weight: 600;
            font-size: 14px;
            color: #2d2d2d;
        }

        #calculator-app .clear-history-btn {
            background: #ff6b6b;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 4px 8px;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.2s;
        }

        #calculator-app .clear-history-btn:hover {
            background: #ff5252;
        }

        #calculator-app .history-item {
            background: white;
            border-radius: 8px;
            padding: 10px;
            margin-bottom: 8px;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid #ddd;
        }

        #calculator-app .history-item:hover {
            border-color: #6b9bd6;
            transform: translateX(2px);
        }

        #calculator-app .history-expression {
            font-family: 'Courier New', monospace;
            font-size: 12px;
            color: #555;
            margin-bottom: 4px;
        }

        #calculator-app .history-result {
            font-family: 'Courier New', monospace;
            font-size: 11px;
            color: #7ba882;
            font-weight: 600;
        }

        #calculator-app .history-empty {
            text-align: center;
            color: #999;
            font-size: 13px;
            padding: 20px;
        }

        #calculator-app .calculator {
            flex: 1;
            background: #d6d6d6;
            border-radius: 15px;
            overflow: visible;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            position: relative;
        }

        #calculator-app .examples-container {
            padding: 10px 15px 5px 15px;
            background: #d6d6d6;
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            align-items: center;
        }

        #calculator-app .examples-label {
            font-size: 12px;
            color: #555;
            font-weight: 600;
            margin-right: 4px;
        }

        #calculator-app .example-btn {
            background: #8b7ba8;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 5px 10px;
            font-size: 12px;
            cursor: pointer;
            font-family: 'Courier New', monospace;
            transition: all 0.2s;
        }

        #calculator-app .example-btn:hover {
            background: #7a6a97;
            transform: translateY(-1px);
        }

        #calculator-app .display-container {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 1000;
            padding: 45px 15px 12px 15px;
            background: #d6d6d6;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            border-radius: 15px 15px 0 0;
        }

        #calculator-app .display {
            width: 100%;
            background: #3d3d3d !important;
            border: none !important;
            border-radius: 10px;
            padding: 14px 16px;
            font-size: 18px;
            color: #ffffff !important;
            text-align: right;
            outline: none;
            box-sizing: border-box;
            font-family: 'Courier New', monospace;
        }

        #calculator-app .display::placeholder {
            color: #888 !important;
        }

        #calculator-app .display-controls {
            position: absolute;
            right: 20px;
            top: 5px;
            display: flex;
            gap: 8px;
            align-items: center;
        }

        #calculator-app .undo-btn,
        #calculator-app .redo-btn,
        #calculator-app .help-btn {
            background: #5a5a5a;
            border: 2px solid #6a6a6a;
            color: #ffffff;
            font-size: 18px;
            cursor: pointer;
            padding: 6px 12px;
            transition: all 0.2s;
            border-radius: 7px;
            font-weight: bold;
            min-width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #calculator-app .help-btn {
            background: #6b9bd6;
            border-color: #5a8bc5;
        }

        #calculator-app .undo-btn:hover:not(:disabled),
        #calculator-app .redo-btn:hover:not(:disabled),
        #calculator-app .help-btn:hover {
            background: #6a6a6a;
            border-color: #7a7a7a;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        #calculator-app .help-btn:hover {
            background: #5a8bc5;
            border-color: #4a7bb5;
        }

        #calculator-app .undo-btn:active:not(:disabled),
        #calculator-app .redo-btn:active:not(:disabled),
        #calculator-app .help-btn:active {
            transform: translateY(0);
        }

        #calculator-app .undo-btn:disabled,
        #calculator-app .redo-btn:disabled {
            background: #3d3d3d;
            border-color: #4d4d4d;
            color: #666;
            cursor: not-allowed;
            opacity: 0.5;
        }

        #calculator-app .clear-display {
            background: #ff6b6b;
            border: 2px solid #ff5252;
            color: white;
            font-size: 22px;
            cursor: pointer;
            padding: 6px 10px;
            border-radius: 7px;
            font-weight: bold;
            min-width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }

        #calculator-app .clear-display:hover {
            background: #ff5252;
            border-color: #ff3838;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(255,107,107,0.4);
        }

        #calculator-app .clear-display:active {
            transform: translateY(0);
        }

        #calculator-app .output-container {
            padding: 0 15px 15px 15px;
            background: #d6d6d6;
            position: relative;
        }

        #calculator-app .output-wrapper {
            position: relative;
        }

        #calculator-app .output {
            width: 100%;
            background: #e8e8e8 !important;
            border: 2px solid #b0b0b0 !important;
            border-radius: 10px;
            padding: 16px;
            font-size: 22px;
            color: #2d2d2d !important;
            text-align: center;
            box-sizing: border-box;
            min-height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow-x: auto;
        }

        #calculator-app .output .katex {
            font-size: 1.3em;
        }

        #calculator-app .copy-btn {
            position: absolute;
            top: 8px;
            right: 8px;
            background: #6b9bd6;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 6px 10px;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        #calculator-app .copy-btn:hover {
            background: #5a8bc5;
            transform: translateY(-1px);
        }

        #calculator-app .copy-btn.copied {
            background: #4CAF50;
        }

        #calculator-app #higher-deriv-btn {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: #7ba882;
            color: white;
            border: none;
            border-radius: 7px;
            padding: 7px 10px;
            font-size: 11px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        #calculator-app #higher-deriv-btn:hover {
            background: #6a9771;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        #calculator-app #show-steps-btn {
            position: absolute;
            bottom: 20px;
            left: 20px;
            background: #6b9bd6;
            color: white;
            border: none;
            border-radius: 7px;
            padding: 7px 10px;
            font-size: 11px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 100;
        }

        #calculator-app #show-steps-btn:hover {
            background: #5a8bc5;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        #calculator-app .steps-container {
            margin-top: 20px;
            background: #f5f5f5;
            border: 2px solid #b0b0b0;
            border-radius: 10px;
            padding: 20px;
            transition: all 0.3s;
        }

        #calculator-app .steps-container.hidden {
            display: none;
        }

        #calculator-app .steps-header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #2d2d2d;
        }

        #calculator-app .steps-content {
            color: #2d2d2d;
        }

        #calculator-app .step-item {
            margin: 15px 0;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border-left: 4px solid #6b9bd6;
            opacity: 0;
            animation: fadeInStep 0.4s ease forwards;
        }

        @keyframes fadeInStep {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        #calculator-app .step-item:nth-child(1) { animation-delay: 0.1s; }
        #calculator-app .step-item:nth-child(2) { animation-delay: 0.2s; }
        #calculator-app .step-item:nth-child(3) { animation-delay: 0.3s; }
        #calculator-app .step-item:nth-child(4) { animation-delay: 0.4s; }
        #calculator-app .step-item:nth-child(5) { animation-delay: 0.5s; }
        #calculator-app .step-item:nth-child(6) { animation-delay: 0.6s; }
        #calculator-app .step-item:nth-child(7) { animation-delay: 0.7s; }

        #calculator-app .step-item.original {
            border-left-color: #9c7fd9;
            background: linear-gradient(to right, #f8f7fb, white);
        }

        #calculator-app .step-title {
            font-weight: 600;
            color: #2d2d2d;
            margin-bottom: 8px;
            font-size: 16px;
        }

        #calculator-app .step-explanation {
            color: #555;
            margin: 5px 0;
            line-height: 1.6;
        }

        #calculator-app .step-formula {
            background: #e8e8e8;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
            font-family: 'Courier New', monospace;
            text-align: center;
        }

        #calculator-app .help-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.6);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        }

        #calculator-app .help-modal.show {
            display: flex;
        }

        #calculator-app .help-content {
            background: white;
            border-radius: 12px;
            padding: 25px;
            max-width: 450px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            position: relative;
        }

        #calculator-app .help-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s;
        }

        #calculator-app .help-close:hover {
            background: #f0f0f0;
            color: #333;
        }

        #calculator-app .help-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #2d2d2d;
        }

        #calculator-app .help-section {
            margin-bottom: 20px;
        }

        #calculator-app .help-section-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #444;
        }

        #calculator-app .shortcut-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            background: #f5f5f5;
            border-radius: 6px;
            margin-bottom: 6px;
        }

        #calculator-app .shortcut-key {
            background: #6b9bd6;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            font-weight: 600;
        }

        #calculator-app .shortcut-desc {
            color: #555;
            font-size: 13px;
        }

        #calculator-app .mode-tabs {
            display: flex;
            background: #c0c0c0;
            padding: 0 20px;
            gap: 5px;
        }

        #calculator-app .mode-tab {
            flex: 1;
            background: none;
            border: none;
            color: #666;
            padding: 12px;
            font-size: 15px;
            cursor: pointer;
            position: relative;
            transition: color 0.3s;
            font-weight: 500;
        }

        #calculator-app .mode-tab.active {
            color: #000;
        }

        #calculator-app .mode-tab.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: #9c7fd9;
        }

        #calculator-app .mode-tab:nth-child(2).active::after {
            background: #7ba882;
        }

        #calculator-app .mode-tab:nth-child(3).active::after {
            background: #d08989;
        }

        #calculator-app .calculator-grids-container {
            position: relative;
            min-height: 320px;
            background: #d6d6d6;
        }

        #calculator-app .calculator-grid {
            display: grid !important;
            grid-template-columns: repeat(7, 1fr) !important;
            grid-template-rows: repeat(5, 1fr) !important;
            gap: 6px;
            padding: 15px;
            background: #d6d6d6;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            opacity: 1;
            transition: opacity 0.2s ease;
        }

        #calculator-app .calculator-grid.hidden {
            opacity: 0;
            pointer-events: none;
            position: absolute;
        }

        #calculator-app .btn {
            background: #4a4a4a !important;
            border: none !important;
            border-radius: 10px !important;
            color: #ffffff !important;
            padding: 14px 6px !important;
            font-size: 15px !important;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 500;
            min-height: 44px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 0 !important;
        }

        #calculator-app .btn:hover {
            background: #5a5a5a !important;
            transform: scale(1.05);
        }

        #calculator-app .btn:active {
            transform: scale(0.95);
        }

        #calculator-app #algebra-grid .btn.function,
        #calculator-app #algebra-grid .btn.variable,
        #calculator-app #algebra-grid .btn.constant {
            background: #8b7ba8 !important;
        }

        #calculator-app #algebra-grid .btn.equals {
            background: #b8a6d9 !important;
            color: #000 !important;
            font-weight: bold;
        }

        #calculator-app #trigonometry-grid .btn.function,
        #calculator-app #trigonometry-grid .btn.variable,
        #calculator-app #trigonometry-grid .btn.constant {
            background: #7ba882 !important;
        }

        #calculator-app #trigonometry-grid .btn.equals {
            background: #a6d9b8 !important;
            color: #000 !important;
            font-weight: bold;
        }

        #calculator-app #calculus-grid .btn.function,
        #calculator-app #calculus-grid .btn.variable,
        #calculator-app #calculus-grid .btn.constant {
            background: #b88b8b !important;
        }

        #calculator-app #calculus-grid .btn.equals {
            background: #f5a6b8 !important;
            color: #000 !important;
            font-weight: bold;
        }

        #calculator-app .btn.operator {
            background: #5a5a5a !important;
        }

        #calculator-app .btn.number {
            background: #4a4a4a !important;
        }

        #calculator-app .btn.zero {
            grid-column: span 1;
        }

        #calculator-app .btn.clear,
        #calculator-app .btn.backspace {
            background: #5a5a5a !important;
        }

        @media (max-width: 768px) {
            #calculator-app .calculator-wrapper {
                flex-direction: column;
            }
            #calculator-app .history-panel {
                width: 100%;
                max-height: 200px;
            }
        }
        </style>
        
        <div class="calculator-wrapper">
            <div class="history-panel">
                <div class="history-header">
                    <span>History</span>
                    <button class="clear-history-btn" id="clear-history">Clear</button>
                </div>
                <div id="history-content">
                    <div class="history-empty">No calculations yet</div>
                </div>
            </div>

            <div class="calculator">
                <div class="examples-container">
                    <span class="examples-label">Try:</span>
                    <button class="example-btn" data-example="x^2">x²</button>
                    <button class="example-btn" data-example="sin(x)">sin(x)</button>
                    <button class="example-btn" data-example="x^3+2*x">x³+2x</button>
                    <button class="example-btn" data-example="(x+1)/(x-1)">(x+1)/(x-1)</button>
                    <button class="example-btn" data-example="cos(x^2)">cos(x²)</button>
                </div>

                <div class="display-container">
                    <input type="text" id="display" class="display" placeholder="Enter expression (e.g., x^2 + 3*x)" readonly>
                    <div class="display-controls">
                        <button class="undo-btn" id="undo-btn" title="Undo (Ctrl+Z)">←</button>
                        <button class="redo-btn" id="redo-btn" title="Redo (Ctrl+Y)">→</button>
                        <button class="help-btn" id="help-btn" title="Keyboard Shortcuts">?</button>
                        <button class="clear-display" title="Clear All">×</button>
                    </div>
                </div>

                <div class="output-container">
                    <div class="output-wrapper">
                        <div id="output" class="output">0</div>
                        <button class="copy-btn" id="copy-btn">📋 Copy</button>
                    </div>
                    <button id="higher-deriv-btn">Get Higher Derivative</button>
                    <button id="show-steps-btn">Show Steps</button>
                    <div id="steps-container" class="steps-container hidden">
                        <div class="steps-header">How to solve your problem</div>
                        <div id="steps-content" class="steps-content"></div>
                    </div>
                </div>
                
                <div class="mode-tabs">
                    <button class="mode-tab active" data-mode="algebra">Algebra</button>
                    <button class="mode-tab" data-mode="trigonometry">Trigonometry</button>
                    <button class="mode-tab" data-mode="calculus">Calculus</button>
                </div>
                
                <div class="calculator-grids-container">
                    <!-- Algebra Mode -->
                    <div class="calculator-grid" id="algebra-grid">
                        <button class="btn function" data-value="sqrt(">√</button>
                        <button class="btn function" data-value="^(1/">ⁿ√</button>
                        <button class="btn operator" data-value="<">&lt;</button>
                        <button class="btn" data-value="(">(</button>
                        <button class="btn" data-value=")">)</button>
                        <button class="btn backspace">⌫</button>
                        <button class="btn clear">AC</button>
                        
                        <button class="btn function" data-value="^2">x²</button>
                        <button class="btn function" data-value="abs(">|x|</button>
                        <button class="btn operator" data-value="<=">≤</button>
                        <button class="btn number" data-value="7">7</button>
                        <button class="btn number" data-value="8">8</button>
                        <button class="btn number" data-value="9">9</button>
                        <button class="btn operator" data-value="/">÷</button>
                        
                        <button class="btn function" data-value="log(">log</button>
                        <button class="btn function" data-value="!">!</button>
                        <button class="btn operator" data-value=">">&gt;</button>
                        <button class="btn number" data-value="4">4</button>
                        <button class="btn number" data-value="5">5</button>
                        <button class="btn number" data-value="6">6</button>
                        <button class="btn operator" data-value="*">×</button>
                        
                        <button class="btn variable" data-value="i">i</button>
                        <button class="btn operator" data-value="%">%</button>
                        <button class="btn operator" data-value=">=">≥</button>
                        <button class="btn number" data-value="1">1</button>
                        <button class="btn number" data-value="2">2</button>
                        <button class="btn number" data-value="3">3</button>
                        <button class="btn operator" data-value="-">−</button>
                        
                        <button class="btn variable" data-value="x">x</button>
                        <button class="btn variable" data-value="y">y</button>
                        <button class="btn constant" data-value="pi">π</button>
                        <button class="btn number zero" data-value="0">0</button>
                        <button class="btn" data-value=".">.</button>
                        <button class="btn equals">&gt;</button>
                        <button class="btn operator" data-value="+">+</button>
                    </div>
                    
                    <!-- Trigonometry Mode -->
                    <div class="calculator-grid hidden" id="trigonometry-grid">
                        <button class="btn function" data-value="sin(">sin</button>
                        <button class="btn function" data-value="cos(">cos</button>
                        <button class="btn function" data-value="tan(">tan</button>
                        <button class="btn" data-value="(">(</button>
                        <button class="btn" data-value=")">)</button>
                        <button class="btn backspace">⌫</button>
                        <button class="btn clear">AC</button>
                        
                        <button class="btn function" data-value="csc(">csc</button>
                        <button class="btn function" data-value="sec(">sec</button>
                        <button class="btn function" data-value="cot(">cot</button>
                        <button class="btn number" data-value="7">7</button>
                        <button class="btn number" data-value="8">8</button>
                        <button class="btn number" data-value="9">9</button>
                        <button class="btn operator" data-value="/">÷</button>
                        
                        <button class="btn function" data-value="arcsin(">arcsin</button>
                        <button class="btn function" data-value="arccos(">arccos</button>
                        <button class="btn function" data-value="arctan(">arctan</button>
                        <button class="btn number" data-value="4">4</button>
                        <button class="btn number" data-value="5">5</button>
                        <button class="btn number" data-value="6">6</button>
                        <button class="btn operator" data-value="*">×</button>
                        
                        <button class="btn function" data-value="^2">x²</button>
                        <button class="btn function" data-value="^3">x³</button>
                        <button class="btn constant" data-value="pi">π</button>
                        <button class="btn number" data-value="1">1</button>
                        <button class="btn number" data-value="2">2</button>
                        <button class="btn number" data-value="3">3</button>
                        <button class="btn operator" data-value="-">−</button>
                        
                        <button class="btn variable" data-value="x">x</button>
                        <button class="btn variable" data-value="y">y</button>
                        <button class="btn operator" data-value="=">=</button>
                        <button class="btn number zero" data-value="0">0</button>
                        <button class="btn" data-value=".">.</button>
                        <button class="btn equals">&gt;</button>
                        <button class="btn operator" data-value="+">+</button>
                    </div>
                    
                    <!-- Calculus Mode -->
                    <div class="calculator-grid hidden" id="calculus-grid">
                        <button class="btn function" data-value="d/dx(">d/dx</button>
                        <button class="btn constant" data-value="∞">∞</button>
                        <button class="btn function" data-value="^(1/">ⁿ√</button>
                        <button class="btn" data-value="(">(</button>
                        <button class="btn" data-value=")">)</button>
                        <button class="btn backspace">⌫</button>
                        <button class="btn clear">AC</button>
                        
                        <button class="btn function" data-value="e^">e^x</button>
                        <button class="btn function" data-value="ln(">ln</button>
                        <button class="btn function" data-value="1/x">1/x</button>
                        <button class="btn number" data-value="7">7</button>
                        <button class="btn number" data-value="8">8</button>
                        <button class="btn number" data-value="9">9</button>
                        <button class="btn operator" data-value="/">÷</button>
                        
                        <button class="btn function" data-value="log(">log</button>
                        <button class="btn function" data-value="^3">x³</button>
                        <button class="btn function" data-value="1/">1/</button>
                        <button class="btn number" data-value="4">4</button>
                        <button class="btn number" data-value="5">5</button>
                        <button class="btn number" data-value="6">6</button>
                        <button class="btn operator" data-value="*">×</button>
                        
                        <button class="btn function" data-value="sqrt(">√</button>
                        <button class="btn function" data-value="abs(">|x|</button>
                        <button class="btn constant" data-value="e">e</button>
                        <button class="btn number" data-value="1">1</button>
                        <button class="btn number" data-value="2">2</button>
                        <button class="btn number" data-value="3">3</button>
                        <button class="btn operator" data-value="-">−</button>
                        
                        <button class="btn variable" data-value="x">x</button>
                        <button class="btn variable" data-value="y">y</button>
                        <button class="btn operator" data-value="=">=</button>
                        <button class="btn number zero" data-value="0">0</button>
                        <button class="btn" data-value=".">.</button>
                        <button class="btn equals">&gt;</button>
                        <button class="btn operator" data-value="+">+</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Help Modal -->
        <div class="help-modal" id="help-modal">
            <div class="help-content">
                <button class="help-close" id="help-close">×</button>
                <div class="help-title">⌨️ Keyboard Shortcuts</div>
                
                <div class="help-section">
                    <div class="help-section-title">Navigation</div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Undo</span>
                        <span class="shortcut-key">Ctrl + Z</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Redo</span>
                        <span class="shortcut-key">Ctrl + Y</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Clear all</span>
                        <span class="shortcut-key">Esc</span>
                    </div>
                </div>

                <div class="help-section">
                    <div class="help-section-title">Actions</div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Calculate</span>
                        <span class="shortcut-key">Enter</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Delete last character</span>
                        <span class="shortcut-key">Backspace</span>
                    </div>
                </div>

                <div class="help-section">
                    <div class="help-section-title">Quick Input</div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Numbers & operators</span>
                        <span class="shortcut-key">0-9, +, -, *, /</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Variables</span>
                        <span class="shortcut-key">x, y</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Parentheses</span>
                        <span class="shortcut-key">( )</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="shortcut-desc">Power</span>
                        <span class="shortcut-key">^</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const calcApp = document.getElementById('calculator-app');
    if (calcApp) {
        calcApp.innerHTML = calculatorHTML;
        
        // Load calculator script if not already loaded
        if (typeof MathSolver === 'undefined') {
            const script = document.createElement('script');
            script.src = 'js/calculator.js';
            document.body.appendChild(script);
            script.onload = () => {
                new MathSolver();
            };
        } else {
            new MathSolver();
        }
    }
}