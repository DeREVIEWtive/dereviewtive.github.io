Calculator

# Derivative Calculator 

<body>
<div id="calculator">
    <div id="calcDisplay"></div>
         <div id="calcButtons">
            <div id="OperatorMenu">
            <div id="Operators">+</div>
            </div>
            <div id="OperatorMenuItem">
                <div>+</div>
                <div>-</div>
                <div>×</div>
                <div>÷</div>
            </div>
            <div id="Trigo">Trigo</div>
            <div id="Symbols">√</div>
            <div onclick="calculate()" id="Enter">Enter</div>
            <div onclick="clearInput()" id="CLR">Clear</div>
            <div onclick="undoInput()" id="Undo">&lt</div>
            <div onclick="redoInput()" id="Redo">&gt</div>
        </div>
        <input type="text" id="calcInput"></input>
        <output name="result" for="calcInput" id="calcOutput"></output>
</div>


<!-- Dropdown Menus -->

  

<div class="TrigoMenu">
    <div class="TrigoMenuItem">
        <button>sine</button>
        <button>cosine</button>
        <button>tangent</button>
        <button>cosecant</button>
         <button>secant</button>
        <button>cotangent</button>
    </div>
</div>

<div class="SymbolsMenu">
    <div class="SymbolsMenuItem">
        <button>√</button>
        <button>n√</button>
        <button>π</button>
        <button>e</button>
        <button>i</button>
    </div>
</div>

<script src="calculator.js"></script>
</body>
