Calculator

# Derivative Calculator 

<body>
<div id="calculator">
    <div id="calcDisplay"></div>
         <div id="calcButtons">
            <div id="OperatorMenu">
            <div id="Operators">+</div>
            <div id="OperatorMenuItem">
                <div>+</div>
                <div>-</div>
                <div>×</div>
                <div>÷</div>
            </div>
            </div>
            <!-- <div id="TrigoMenu">
            <div id="Trigo">Trigo</div>
            </div>
             <div class="TrigoMenuItem">
                <div>sine</div>
                <div>cosine</div>
                <div>tangent</div>
                <div>cosecant</div>
                <div>secant</div>
                <div>cotangent</div>
             </div> -->
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
