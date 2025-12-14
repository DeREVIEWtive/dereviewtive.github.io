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

  // ✅ Toggle calculator page layout
  document.body.classList.toggle("is-calculator", page === "calculator");

  // Special handling for calculator page
  if (page === "calculator") {
    loadCalculator();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const icon = document.getElementById("icon");

  if (!sidebar || !icon) return;

  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("open");
  });

  sidebar.querySelectorAll(".submenu a").forEach((a) => {
    a.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  });
});


function loadCalculator() {
  const lettersButtons = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (ch) =>
        `<button class="btn variable" data-value="${ch}">${ch}</button>`
    )
    .join("");

  const calculatorHTML = `
    <style>
    #calculator-app .calculator-wrapper {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
    }

    #calculator-app .calculator {
      background: #d6d6d6;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    #calculator-app .examples-container {
      padding: 6px 12px;
      background: #d6d6d6;
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      align-items: center;
      border-bottom: 2px solid #b0b0b0;
      flex-shrink: 0;
    }

    #calculator-app .examples-label {
      font-size: 12px;
      color: #555;
      font-weight: 700;
      margin-right: 4px;
    }

    #calculator-app .example-btn {
      background: #8b7ba8;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 4px 8px;
      font-size: 11px;
      cursor: pointer;
      font-family: 'Courier New', monospace;
      transition: all 0.2s;
    }

    #calculator-app .example-btn:hover {
      background: #7a6a97;
      transform: translateY(-1px);
    }

    #calculator-app .display-container {
      padding: 8px 12px;
      background: #d6d6d6;
      border-bottom: 2px solid #b0b0b0;
      position: relative;
      flex-shrink: 0;
    }

    #calculator-app .display {
      width: 100%;
      background: #3d3d3d !important;
      border: none !important;
      border-radius: 10px;
      padding: 12px 14px;
      font-size: 18px;
      color: #ffffff !important;
      text-align: right;
      outline: none;
      box-sizing: border-box;
      font-family: 'Courier New', monospace;
    }

    #calculator-app .display-controls {
      position: absolute;
      right: 18px;
      top: 14px;
      display: flex;
      gap: 6px;
      align-items: center;
      z-index: 5;
    }

    #calculator-app .undo-btn,
    #calculator-app .redo-btn,
    #calculator-app .help-btn {
      background: #5a5a5a;
      border: 2px solid #6a6a6a;
      color: #ffffff;
      font-size: 16px;
      cursor: pointer;
      padding: 5px 10px;
      transition: all 0.2s;
      border-radius: 7px;
      font-weight: bold;
      min-width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #calculator-app .undo-btn:hover,
    #calculator-app .redo-btn:hover,
    #calculator-app .help-btn:hover { background: #6a6a6a; }

    #calculator-app .undo-btn:disabled,
    #calculator-app .redo-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    #calculator-app .clear-display {
      background: #ff6b6b;
      border: 2px solid #ff5252;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      padding: 5px 10px;
      transition: all 0.2s;
      border-radius: 7px;
      font-weight: bold;
      min-width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #calculator-app .clear-display:hover { background: #ff5252; }

    /* ✅ Only 2 action buttons now */
    #calculator-app .result-actions {
      display: flex;
      gap: 8px;
      padding: 8px 12px;
      background: #d6d6d6;
      border-bottom: 2px solid #b0b0b0;
      flex-wrap: wrap;
      flex-shrink: 0;
    }

    #calculator-app .action-btn {
      background: #6b9bd6;
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 10px 12px;
      cursor: pointer;
      font-weight: 900;
      font-size: 13px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.20);
      flex: 1;
      min-width: 180px;
    }

    #calculator-app .action-btn.history { background: #d9a66b; }

    /* Get Higher Derivative Button */
    #calculator-app .get-higher-btn {
      background: #9c7fd9;
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 12px 24px;
      cursor: pointer;
      font-weight: 700;
      font-size: 14px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.20);
      transition: all 0.2s;
    }

    #calculator-app .get-higher-btn:hover {
      background: #8b6fc9;
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(0,0,0,0.25);
    }

    #calculator-app .get-higher-btn:active {
      transform: translateY(0);
    }

    #calculator-app .higher-derivative-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    #calculator-app .mode-tabs {
      display: flex;
      background: #c0c0c0;
      padding: 0 12px;
      gap: 4px;
      flex-shrink: 0;
    }

    #calculator-app .mode-tab {
      flex: 1;
      background: none;
      border: none;
      color: #666;
      padding: 10px 8px;
      font-size: 14px;
      cursor: pointer;
      position: relative;
      transition: color 0.3s;
      font-weight: 500;
    }

    #calculator-app .mode-tab.active { color: #000; }

    #calculator-app .mode-tab.active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: #9c7fd9;
    }

    #calculator-app .mode-tab:nth-child(2).active::after { background: #7ba882; }
    #calculator-app .mode-tab:nth-child(3).active::after { background: #d08989; }
    #calculator-app .mode-tab:nth-child(4).active::after { background: #6a6a6a; }

    #calculator-app .keypad-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      min-height: 0;
    }

    #calculator-app #letters-grid {
      display: grid;
      grid-template-columns: repeat(13, 1fr);
      gap: 6px;
      padding: 10px 12px;
      background: #d6d6d6;
    }

    #calculator-app #letters-grid.hidden { display: none !important; }

    #calculator-app #letters-grid .btn.variable {
      min-width: 36px;
      min-height: 44px;
      padding: 8px 4px;
      font-size: 15px;
      border-radius: 10px !important;
      background: #5a5a5a;
    }

    #calculator-app .calculator-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 6px;
      padding: 10px 12px;
      background: #d6d6d6;
    }

    #calculator-app .calculator-grid.hidden { display: none !important; }

    #calculator-app .btn {
      background: #4a4a4a;
      border: none;
      border-radius: 12px;
      color: #ffffff;
      padding: 16px 6px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 500;
      min-height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #calculator-app .btn:hover {
      background: #5a5a5a;
      transform: scale(1.05);
    }

    #calculator-app .btn:active { transform: scale(0.95); }

    #algebra-grid .btn.function,
    #algebra-grid .btn.variable,
    #algebra-grid .btn.constant { background: #8b7ba8; }

    #algebra-grid .btn.equals {
      background: #b8a6d9;
      color: #000;
      font-weight: bold;
    }

    #trigonometry-grid .btn.function,
    #trigonometry-grid .btn.variable,
    #trigonometry-grid .btn.constant { background: #7ba882; }

    #trigonometry-grid .btn.equals {
      background: #a6d9b8;
      color: #000;
      font-weight: bold;
    }

    #calculus-grid .btn.function,
    #calculus-grid .btn.variable,
    #calculus-grid .btn.constant { background: #b88b8b; }

    #calculus-grid .btn.equals {
      background: #f5a6b8;
      color: #000;
      font-weight: bold;
    }

    #calculator-app .btn.operator { background: #5a5a5a; }
    #calculator-app .btn.number { background: #4a4a4a; }
    #calculator-app .btn.zero { grid-column: span 1; }
    #calculator-app .btn.clear,
    #calculator-app .btn.backspace { background: #5a5a5a; }

    #calculator-app .copy-btn {
      background: #6b9bd6;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 800;
    }
    #calculator-app .copy-btn.copied { background: #4CAF50; }

    /* Help Modal */
    #calculator-app .help-modal {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    }

    #calculator-app .help-modal.show { display: flex; }

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

    #calculator-app .help-section { margin-bottom: 20px; }
    #calculator-app .help-section-title {
      font-size: 16px;
      font-weight: 800;
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
      gap: 10px;
    }

    #calculator-app .shortcut-key {
      background: #6b9bd6;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      font-weight: 800;
      white-space: nowrap;
    }

    #calculator-app .shortcut-desc {
      color: #555;
      font-size: 13px;
      font-weight: 600;
    }

    /* ✅ Unified Result Modal with tabs */
    #calculator-app .calc-modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.55);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 20000;
      padding: 10px;
    }
    #calculator-app .calc-modal.show { display: flex; }

    #calculator-app .calc-modal-card {
      background: #fff;
      width: min(920px, 94vw);
      max-height: 86vh;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.35);
      border: 2px solid #b0b0b0;
      display: flex;
      flex-direction: column;
    }

    #calculator-app .calc-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px;
      background: #e8e8e8;
      border-bottom: 2px solid #b0b0b0;
      font-weight: 900;
      flex-shrink: 0;
    }

    #calculator-app .calc-modal-close {
      background: #ff6b6b;
      border: none;
      color: #fff;
      width: 34px;
      height: 34px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 20px;
      line-height: 1;
      font-weight: 900;
    }

    /* ✅ Result modal tabs */
    #calculator-app .result-modal-tabs {
      display: flex;
      background: #f5f5f5;
      border-bottom: 2px solid #ddd;
    }

    #calculator-app .result-tab {
      flex: 1;
      background: none;
      border: none;
      padding: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #666;
      cursor: pointer;
      transition: all 0.2s;
      border-bottom: 3px solid transparent;
    }

    #calculator-app .result-tab.active {
      color: #000;
      background: #fff;
      border-bottom-color: #6b9bd6;
    }

    #calculator-app .calc-modal-body {
      padding: 16px;
      overflow: auto;
      flex: 1;
      min-height: 0;
    }

    #calculator-app .result-tab-content {
      display: none;
    }

    #calculator-app .result-tab-content.active {
      display: block;
    }

    #calculator-app .modal-output {
      background: #f5f5f5;
      border: 2px solid #d0d0d0;
      border-radius: 10px;
      padding: 16px;
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-x: auto;
    }

    #calculator-app .modal-output .katex { font-size: 1.25em; }

    #calculator-app .step-item {
      margin: 12px 0;
      padding: 14px;
      background: white;
      border-radius: 8px;
      border-left: 4px solid #6b9bd6;
    }

    #calculator-app .step-title {
      font-weight: 900;
      color: #2d2d2d;
      margin-bottom: 8px;
      font-size: 15px;
    }

    #calculator-app .step-explanation {
      color: #555;
      margin: 5px 0;
      line-height: 1.5;
      font-weight: 600;
    }

    #calculator-app .step-formula {
      background: #e8e8e8;
      padding: 10px;
      border-radius: 6px;
      margin: 10px 0;
      font-family: 'Courier New', monospace;
      text-align: center;
      font-weight: 700;
      overflow-x: auto;
    }

    /* History modal */
    #calculator-app .history-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    #calculator-app .clear-history-btn {
      background: #ff6b6b;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 600;
    }

    #calculator-app .clear-history-btn:hover { background: #ff5252; }

    #calculator-app .history-item {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: all 0.2s;
      border: 2px solid #ddd;
    }

    #calculator-app .history-item:hover {
      border-color: #6b9bd6;
      background: #fff;
      transform: translateX(3px);
    }

    #calculator-app .history-expression {
      font-family: 'Courier New', monospace;
      font-size: 14px;
      color: #555;
      margin-bottom: 6px;
      font-weight: 600;
      white-space: normal;
      word-break: break-word;
    }

    #calculator-app .history-result {
      font-family: 'Courier New', monospace;
      font-size: 13px;
      color: #7ba882;
      font-weight: 700;
      white-space: normal;
      word-break: break-word;
    }

    #calculator-app .history-empty {
      text-align: center;
      color: #999;
      font-size: 14px;
      padding: 40px 20px;
      font-style: italic;
    }

    /* Mobile responsive */
    @media (max-width: 699px) {
      #calculator-app .calculator-wrapper {
        padding: 0;
      }

      #calculator-app .display-container {
        padding: 6px 8px;
        padding-top: 44px;
      }

      #calculator-app .display {
        font-size: 16px;
        padding: 10px 12px;
      }

      #calculator-app .display-controls {
        top: 6px;
        right: 8px;
        gap: 4px;
      }

      #calculator-app .undo-btn,
      #calculator-app .redo-btn,
      #calculator-app .help-btn,
      #calculator-app .clear-display {
        min-width: 30px;
        height: 30px;
        font-size: 14px;
        padding: 4px 8px;
      }

      #calculator-app .result-actions {
        gap: 4px;
        padding: 6px 8px;
      }

      #calculator-app .action-btn {
        min-width: 140px;
        font-size: 12px;
        padding: 8px 6px;
      }

      #calculator-app .calculator-grid {
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
        padding: 8px;
      }

      #calculator-app .btn {
        padding: 10px 4px;
        font-size: 14px;
        min-height: 42px;
      }

      #calculator-app #letters-grid {
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
        padding: 8px;
      }

      #calculator-app #letters-grid .btn.variable {
        min-width: 32px;
        min-height: 38px;
        font-size: 13px;
        padding: 6px 2px;
      }

      #calculator-app .examples-container {
        padding: 4px 8px;
      }

      #calculator-app .example-btn {
        font-size: 10px;
        padding: 3px 6px;
      }

      #calculator-app .calc-modal-card {
        width: 98vw;
        max-height: 92vh;
      }

      #calculator-app .calc-modal-body {
        padding: 12px;
      }

      #calculator-app .mode-tabs {
        padding: 0 8px;
      }

      #calculator-app .mode-tab {
        padding: 8px 4px;
        font-size: 12px;
      }

      #calculator-app .result-tab {
        font-size: 12px;
        padding: 10px 6px;
      }
    }

    @media (max-width: 400px) {
      #calculator-app #letters-grid {
        grid-template-columns: repeat(6, 1fr);
      }

      #calculator-app #letters-grid .btn.variable {
        min-width: 30px;
        min-height: 36px;
        font-size: 12px;
      }

      #calculator-app .action-btn {
        min-width: 120px;
        font-size: 11px;
      }
    }
    </style>

    <div class="calculator-wrapper">
      <div class="calculator">
        <div class="examples-container">
          <span class="examples-label">Try:</span>
          <button class="example-btn" data-example="x^2">x²</button>
          <button class="example-btn" data-example="sin(x)">sin(x)</button>
          <button class="example-btn" data-example="(x+1)/(x-1)">(x+1)/(x-1)</button>
          <button class="example-btn" data-example="cos(x^2)">cos(x²)</button>
        </div>

        <div class="display-container">
          <div class="display-controls">
            <button class="undo-btn" id="undo-btn" title="Undo (Ctrl+Z)">↶</button>
            <button class="redo-btn" id="redo-btn" title="Redo (Ctrl+Y)">↷</button>
            <button class="help-btn" id="help-btn" title="Keyboard Shortcuts">?</button>
            <button class="clear-display" title="Clear (Esc)">×</button>
          </div>
          <input type="text" id="display" class="display" placeholder="Enter expression (e.g., x^2 + 3*x)" autocomplete="off">
        </div>

        <!-- ✅ Only 2 action buttons now -->
        <div class="result-actions">
          <button class="action-btn" id="open-result-btn">View Output</button>
          <button class="action-btn history" id="open-history-btn">History</button>
        </div>

        <div class="mode-tabs">
          <button class="mode-tab active" data-mode="algebra">Algebra</button>
          <button class="mode-tab" data-mode="trigonometry">Trigonometry</button>
          <button class="mode-tab" data-mode="calculus">Calculus</button>
          <button class="mode-tab" data-mode="letters">Letters</button>
        </div>

        <div class="keypad-section">
          <!-- Algebra Mode -->
          <div class="calculator-grid" id="algebra-grid">
            <button class="btn function" data-value="sqrt(">√</button>
            <button class="btn function" data-value="abs(">|x|</button>
            <button class="btn operator" data-value="<"><</button>
            <button class="btn" data-value="(">(</button>
            <button class="btn" data-value=")">)</button>
            <button class="btn backspace">⌫</button>
            <button class="btn clear">AC</button>

            <button class="btn function" data-value="^2">x²</button>
            <button class="btn function" data-action="powerPrompt">□</button>
            <button class="btn operator" data-value="<=">≤</button>
            <button class="btn number" data-value="7">7</button>
            <button class="btn number" data-value="8">8</button>
            <button class="btn number" data-value="9">9</button>
            <button class="btn operator" data-value="/">÷</button>

            <button class="btn function" data-value="log(">log</button>
            <button class="btn variable" data-value="i">i</button>
            <button class="btn operator" data-value=">">></button>
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
            <button class="btn equals">Enter</button>
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

            <button class="btn function" data-action="powerPrompt">□</button>
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
            <button class="btn equals">Enter</button>
            <button class="btn operator" data-value="+">+</button>
          </div>

          <!-- Calculus Mode -->
          <div class="calculator-grid hidden" id="calculus-grid">
            <button class="btn function" data-value="d/dx(">d/dx</button>
            <button class="btn constant" data-value="∞">∞</button>
            <button class="btn function" data-action="powerPrompt">□</button>
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
            <button class="btn equals">Enter</button>
            <button class="btn operator" data-value="+">+</button>
          </div>

          <!-- Letters grid -->
          <div id="letters-grid" class="hidden">
            ${lettersButtons}
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Unified Result Modal with tabs -->
    <div class="calc-modal" id="result-modal">
      <div class="calc-modal-card">
        <div class="calc-modal-header">
          <div>Results</div>
          <button class="calc-modal-close" id="close-result-modal">×</button>
        </div>
        
        <!-- Tabs for Output / Steps / Higher Derivative -->
        <div class="result-modal-tabs">
          <button class="result-tab active" data-tab="output">Output</button>
          <button class="result-tab" data-tab="steps">Steps</button>
          <button class="result-tab" data-tab="higher">Higher Derivative</button>
        </div>

        <div class="calc-modal-body">
          <!-- Output Tab -->
          <div class="result-tab-content active" id="output-tab">
            <div class="modal-output" id="modal-output">0</div>
            <div style="display:flex;justify-content:flex-end;margin-top:12px;">
              <button class="copy-btn" id="copy-btn">📋 Copy</button>
            </div>
          </div>

          <!-- Steps Tab -->
          <div class="result-tab-content" id="steps-tab">
            <div id="steps-content"></div>
          </div>

          <!-- Higher Derivative Tab -->
          <div class="result-tab-content" id="higher-tab">
            <div class="higher-derivative-container">
              <div class="modal-output" id="higher-output">Calculate a derivative first</div>
              <div style="display:flex;justify-content:center;margin-top:16px;">
                <button class="get-higher-btn" id="get-higher-btn" style="display:none;">Get Higher Derivative</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- History Modal -->
    <div class="calc-modal" id="history-modal">
      <div class="calc-modal-card">
        <div class="calc-modal-header">
          <div>Calculation History</div>
          <button class="calc-modal-close" id="close-history-modal">×</button>
        </div>
        <div class="calc-modal-body">
          <div class="history-modal-header">
            <span style="font-weight:700;color:#555;">Past Calculations</span>
            <button class="clear-history-btn" id="clear-history">Clear All</button>
          </div>
          <div id="history-content">
            <div class="history-empty">No calculations yet</div>
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
            <span class="shortcut-key">x, y, a-z</span>
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

  const calcApp = document.getElementById("calculator-app");
  if (calcApp) {
    calcApp.innerHTML = calculatorHTML;

    // Mode switching
    document.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const mode = e.target.dataset.mode;
        
        document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        
        document.getElementById('algebra-grid').classList.add('hidden');
        document.getElementById('trigonometry-grid').classList.add('hidden');
        document.getElementById('calculus-grid').classList.add('hidden');
        document.getElementById('letters-grid').classList.add('hidden');
        
        if (mode === 'letters') {
          document.getElementById('letters-grid').classList.remove('hidden');
        } else {
          document.getElementById(`${mode}-grid`).classList.remove('hidden');
        }
      });
    });

    // ✅ Result modal tabs switching
    document.querySelectorAll('.result-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tabName = e.target.dataset.tab;
        
        document.querySelectorAll('.result-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        
        document.querySelectorAll('.result-tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(`${tabName}-tab`).classList.add('active');
      });
    });

    // ✅ Result modal open/close
    const openResultBtn = document.getElementById('open-result-btn');
    const resultModal = document.getElementById('result-modal');
    const closeResultModal = document.getElementById('close-result-modal');

    if (openResultBtn && resultModal && closeResultModal) {
      openResultBtn.addEventListener('click', () => resultModal.classList.add('show'));
      closeResultModal.addEventListener('click', () => resultModal.classList.remove('show'));
      resultModal.addEventListener('click', (e) => {
        if (e.target === resultModal) resultModal.classList.remove('show');
      });
    }

    // History modal
    const openHistoryBtn = document.getElementById('open-history-btn');
    const historyModal = document.getElementById('history-modal');
    const closeHistoryModal = document.getElementById('close-history-modal');

    if (openHistoryBtn && historyModal && closeHistoryModal) {
      openHistoryBtn.addEventListener('click', () => historyModal.classList.add('show'));
      closeHistoryModal.addEventListener('click', () => historyModal.classList.remove('show'));
      historyModal.addEventListener('click', (e) => {
        if (e.target === historyModal) historyModal.classList.remove('show');
      });
    }

    // Load calculator script if not already loaded
    if (typeof MathSolver === "undefined") {
      const script = document.createElement("script");
      script.src = "js/calculator.js";
      document.body.appendChild(script);
      script.onload = () => {
        const solver = new MathSolver();
        
        // ✅ Auto-open result modal when Enter/= is pressed
        solver.autoShowResult = () => {
          if (resultModal) resultModal.classList.add('show');
        };
      };
    } else {
      new MathSolver();
    }
  }
}