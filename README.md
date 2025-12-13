# DeREVIEWtive - Educational Derivative Calculator

An interactive web-based calculator designed specifically for Grade 11 students learning calculus. DeREVIEWtive provides symbolic differentiation with step-by-step explanations, making calculus accessible and understandable.


## Overview

DeREVIEWtive is an educational tool that helps students understand derivatives through:
- **Interactive calculation** - Real-time symbolic differentiation
- **Step-by-step solutions** - Detailed explanations of every rule
- **Educational tips** - Learning notes for each step
- **Multiple modes** - Algebra, Trigonometry, and Calculus interfaces
- **Calculation history** - Track and review your work
- **Keyboard shortcuts** - Fast, efficient input

## Features

### Core Calculator Features
- ✅ **Symbolic Differentiation** - Uses math.js for accurate symbolic computation
- ✅ **LaTeX Rendering** - Beautiful mathematical notation with KaTeX
- ✅ **Higher-Order Derivatives** - Calculate 2nd, 3rd, nth derivatives
- ✅ **Multi-Variable Support** - Works with x and y variables
- ✅ **Trigonometric Functions** - sin, cos, tan, csc, sec, cot, arcsin, arccos, arctan
- ✅ **Special Functions** - Logarithms, exponentials, square roots, absolute values

### User Experience Features
-  **Copy to Clipboard** - One-click copy of results
-  **Example Problems** - Quick-start with pre-made examples
-  **Calculation History** - Last 10 calculations saved (persistent)
-  **Keyboard Shortcuts** - Full keyboard support
-  **Undo/Redo** - 50-state history tracking
-  **Smart Error Messages** - Specific, helpful error feedback
-  **Three Calculator Modes** - Algebra, Trigonometry, Calculus

### Educational Features
-  **Original Expression Display** - Always shows what you started with
-  **Step-by-Step Solutions** - Detailed breakdown of every step
-  **Educational Tips** - Learning notes for each differentiation rule
-  **Animated Steps** - Steps appear with smooth animations
-  **Rule Identification** - Automatically identifies which calculus rule to use
-  **Rule Explanations** - Clear explanations of Power Rule, Chain Rule, etc.

### Supported Differentiation Rules
- Power Rule (`x^n → n·x^(n-1)`)
- Product Rule (`u·v → u'·v + u·v'`)
- Quotient Rule (`u/v → (u'·v - u·v')/v²`)
- Chain Rule (composite functions)
- Sum/Difference Rule
- Trigonometric derivatives
- Logarithmic derivatives
- Exponential derivatives

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local server) or any static file server

### Installation

1. **Clone or download the repository**
```bash
git clone https://github.com/yourusername/dereviewtive.git
cd dereviewtive
```

2. **Start a local server**

**Option A: Python**
```bash
python3 -m http.server 5500
```

**Option B: Node.js (if you have npm)**
```bash
npx serve
```

**Option C: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

3. **Open in browser**
```
http://localhost:5500
```

## How to Use

### Basic Usage

1. **Enter an expression** using the on-screen buttons or keyboard
   - Example: `x^3+2*x`

2. **Click the `>` button** or press `Enter` to calculate

3. **View the result** in the output box

4. **Click "Show Steps"** to see detailed explanation

5. **Click "Get Higher Derivative"** for the next derivative

### Using Examples

Click any example button at the top:
- `x²` - Simple power rule
- `sin(x)` - Basic trigonometry
- `x³+2x` - Power rule with sum
- `(x+1)/(x-1)` - Quotient rule
- `cos(x²)` - Chain rule

### Calculator Modes

**Algebra Mode** (Purple)
- Basic arithmetic and algebraic functions
- Square roots, absolute values, factorials
- Inequalities and percentages

**Trigonometry Mode** (Green)
- Trigonometric functions (sin, cos, tan)
- Reciprocal trig functions (csc, sec, cot)
- Inverse trig functions (arcsin, arccos, arctan)

**Calculus Mode** (Red)
- Derivative notation (d/dx)
- Limits (lim)
- Summation (Σ) and integration (∫) notation
- Combinations and permutations

## Keyboard Shortcuts

### Navigation
| Shortcut | Action |
|----------|--------|
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Esc` | Clear all |
| `?` | Show keyboard shortcuts help |

### Input
| Key | Action |
|-----|--------|
| `0-9` | Numbers |
| `+`, `-`, `*`, `/` | Operators |
| `x`, `y` | Variables |
| `^` | Exponent |
| `(`, `)` | Parentheses |
| `.` | Decimal point |
| `Enter` | Calculate |
| `Backspace` | Delete last character |

## Project Structure
```
DeREVIEWtive/
├── index.html              # Main HTML file
├── about.html              # About page
├── faq.html               # FAQ page
├── js/
│   ├── main.js            # Page loader & calculator HTML
│   └── calculator.js      # Calculator logic & functionality
├── styles/
│   ├── main.css           # Global styles
│   └── calculator-style.css  # Calculator-specific styles (optional)
├── pages/
│   ├── index.md           # Home page content
│   ├── calculator.md      # Calculator page content
│   └── faq.md            # FAQ content
├── lessons/
│   ├── what.md           # What is Derivative lesson
│   ├── rules.md          # Rules of Differentiation
│   ├── trigo.md          # Trigonometric Functions
│   ├── higher.md         # Higher Order Derivatives
│   ├── implicit.md       # Implicit Differentiation
│   └── related.md        # Related Rates
├── LICENSE               # Project license
└── README.md            # This file
```

## Technologies Used

### Core Libraries
- **[Math.js v11.11.0](https://mathjs.org/)** - Symbolic mathematics
- **[KaTeX v0.16.9](https://katex.org/)** - LaTeX rendering
- **[Marked.js](https://marked.js.org/)** - Markdown parsing
- **[Font Awesome 6.5.1](https://fontawesome.com/)** - Icons

### Vanilla Technologies
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)

### Browser APIs Used
- **LocalStorage** - Persistent calculation history
- **Clipboard API** - Copy results to clipboard
- **CSS Animations** - Step reveal animations

## Design Principles

1. **Student-Friendly** - Clear, intuitive interface designed for Grade 11 learners
2. **Educational First** - Every feature teaches, not just calculates
3. **Responsive** - Works on desktop, tablet, and mobile
4. **Accessible** - Keyboard navigation, clear contrast, readable fonts
5. **Fast** - Instant calculations, smooth animations
6. **Reliable** - Comprehensive error handling

## Tested Examples

The calculator has been tested with:

### Power Rule
- `x^2` → `2x`
- `x^3` → `3x²`
- `x^3+2*x` → `3x²+2`

### Product Rule
- `x*sin(x)` → `sin(x) + x·cos(x)`

### Quotient Rule
- `(3*x^2-2*x+5)/(x+1)` → Simplified quotient
- `1/x` → `-1/x²`

### Chain Rule
- `sin(x^2)` → `2x·cos(x²)`
- `cos(x^2)` → `-2x·sin(x²)`

### Trigonometric
- `sin(x)` → `cos(x)`
- `cos(x)` → `-sin(x)`
- `tan(x)` → `sec²(x)`

### Higher Derivatives
- Any expression: Calculate up to 10th derivative or until zero

## Known Limitations

1. **Single Variable Only** - Currently differentiates with respect to x only
2. **Implicit Differentiation** - Not yet implemented
3. **Integration** - Buttons present but not functional
4. **Limits** - Notation supported but calculation not implemented
5. **Complex Numbers** - Limited support for imaginary unit i

## Future Enhancements

- [ ] Graph visualization (f(x) and f'(x) side by side)
- [ ] Implicit differentiation support
- [ ] Partial derivatives (multi-variable)
- [ ] Integration calculation
- [ ] Limit evaluation
- [ ] Practice mode with random problems
- [ ] Dark mode toggle
- [ ] Export to LaTeX/PDF
- [ ] User accounts with saved work
- [ ] Mobile app version

## Educational Use

This calculator is designed for:
- **Grade 11 Calculus Students** - Learning derivatives
- **Teachers** - Demonstrating calculus concepts
- **Self-Learners** - Understanding differentiation step-by-step

**Not intended for:**
- ❌ Exam cheating (learn, don't just copy!)
- ❌ Professional engineering calculations (use Wolfram Alpha)
- ❌ Research mathematics (use MATLAB or Mathematica)


*Happy deriving! ✨*