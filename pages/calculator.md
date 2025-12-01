Calculator

# Derivative Calculator 

<body>
<div id="calculator">
    <div id="calcDisplay"></div>
         <div id="calcButtons">
            <button onclick="calculateDerivative()" id="Enter">Enter</button>
            <button onclick="clearInput()" id="CLR">Clear</button>
            <button id="Operators">+</button>
            <button id="Trigo">Trigo</button>
            <button id="Symbols">√</button>
            <button onclick="undoInput()" id="Undo">&lt</button>
            <button onclick="redoInput()" id="Redo">&gt</button>
        </div>
    <input type="text" id="calcInput"></input>
    <input type="text" id="calcOutput"></input>
</div>

<!-- Dropdown Menus -->
 <div class="OperatorMenu">
            <div class="OperatorMenuItem">
                    <button>+</button>
                    <button>-</button>
                    <button>×</button>
                    <button>÷</button>
                </div>
            </div>

  

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
