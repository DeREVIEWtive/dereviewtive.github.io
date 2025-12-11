Rules of Differentiation

# Derivative Properties and Formulas
This section introduces a collection of formulas and properties that will allow us to avoid using the definition whenever possible to make things easier for us. Starting with the basic properties (only given in "prime" notation to make it simpler to understand.)
## Properties
### Sum/Difference Rule
<math display="block">
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <mi>f</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo>±</mo>
        <mi>g</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
      </mrow>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <msup>
      <mi>f</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>±</mo>
    <msup>
      <mi>g</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
</math>

In other words, to differentiate a sum or difference all we need to do is differentiate the individual terms and then put them back together with the appropriate signs. Note as well that this property is not limited to two functions.

### Multiple Rule
Where <math><mi>c</mi></math> is any number.
<math display="block">
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <mi>c</mi>
        <mi>f</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
      </mrow>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mi>c</mi>
    <msup>
      <mi>f</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
</math>

### Derivative of a Constant Function
If <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>c</mi></math> then <math><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></math>.The derivative of a constant is zero.

### Power Rule
If <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi>x</mi><mi>n</mi></msup></math> then <math><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>n</mi><msup><mi>x</mi><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></msup></math>, where <math><mi>n</mi></math> is any number.

This formula is sometimes called the power rule. All we are doing here is bringing the original exponent down in front and multiplying and then subtracting one from the original exponent.


Note as well that in order to use this formula <math><mi>n</mi></math> must be a number, it can’t be a variable. Also note that the base, the <math><mi>x</mi></math>, must be a variable, it can’t be a number. It will be tempting in some later sections to misuse the Power Rule when we run into some functions where the exponent isn’t a number and/or the base isn’t a variable.

### Example 1
Differentiate the following function:
<math display="block">
      <mi>f</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mn>11</mn>
      <msup>
        <mi>x</mi>
        <mn>10</mn>
      </msup>
      <mo>−</mo>
      <mn>6</mn>
      <msup>
        <mi>x</mi>
        <mn>3</mn>
      </msup>
      <mo>+</mo>
      <mn>10</mn>
      <mi>x</mi>
      <mo>−</mo>
      <mn>26</mn>
</math>

### Solution
In this case we have the sum and difference of four terms, so we will differentiate each of the terms using the first property from above and then put them back together with the proper sign. Also, for each term with a multiplicative constant, remember that all we need to do is “factor” the constant out (using the second property) and then do the derivative.

<math display="block">
    <msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>11</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><msup><mi>x</mi><mn>9</mn></msup>
    <mo>−</mo>
    <mn>6</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><msup><mi>x</mi><mn>2</mn></msup>
    <mo>+</mo>
    <mn>10</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><msup><mi>x</mi><mn>0</mn></msup>
    <mo>−</mo>
    <mn>0</mn>
</math>
<math display="block"
    <msup><mi>f</mi><mo>'</mo></msup><mo strechy="false">(</mo><mi>x</mi><mo strechy= "false">)</mo>
    <mo>=</mo>
    <mn>110</mn><msup><mi>x</mi><mn>9</mn></msup>
    <mo>−</mo>
    <mn>18</mn><msup><mi>x</mi><mn>2</mn></msup>
    <mo>+</mo>
    <mn>10</mn>
</math>

Notice that in the third term the exponent was a one, and so upon subtracting 1 from the original exponent we get a new exponent of zero. Now recall that <math><msup><mi>x</mi><mn>0</mn></msup><mo>=</mo><mn>1</mn></math>. Don’t forget to do any basic arithmetic that needs to be done, such as any multiplication and/or division in the coefficients.

### Example 2
Differentiate the following function:
<math display="block">
      <mi>y</mi>
      <mo>=</mo>
      <mn>8</mn>
      <msup><mi>z</mi><mn>3</mn></msup>
      <mo>−</mo>
      <mfrac>
        <mn>1</mn>
        <mrow>
          <mn>3</mn>
          <msup><mi>z</mi><mn>5</mn></msup>
        </mrow>
      </mfrac>
      <mo>+</mo>
      <mi>z</mi>
      <mo>−</mo>
      <mn>23</mn>
</math>
  
### Solution
Now in this function the second term is not correctly set up for us to use the power rule. The power rule requires that the term be a variable to a power only and the term must be in the numerator. So, prior to differentiating we first need to rewrite the second term into a form that we can deal with.
  <math display="block">
      <mi>y</mi>
      <mo>=</mo>
      <mn>8</mn>
      <msup><mi>z</mi><mn>3</mn></msup>
      <mo>−</mo>
      <mfrac><mn>1</mn><mn>3</mn></mfrac>
      <msup><mi>z</mi><mrow><mo>−</mo><mn>5</mn></mrow></msup>
      <mo>+</mo>
      <mi>z</mi>
      <mo>−</mo>
      <mn>23</mn>
</math>
Note that we left the 3 in the denominator and only moved the variable up to the numerator. Remember that the only thing that gets an exponent is the term that is immediately to the left of the exponent. If we’d wanted the three to come up as well we’d have written:

<math display="block">
    <mfrac>
      <mn>1</mn>
      <msup>
        <mrow>
          <mo stretchy="false">(</mo>
          <mn>3</mn>
          <mi>z</mi>
          <mo stretchy="false">)</mo>
        </mrow>
        <mn>5</mn>
      </msup>
    </mfrac>
</math>

Now that we’ve gotten the function rewritten into a proper form that allows us to use the Power Rule we can differentiate the function. Here is the derivative for this part.

<math display="block">
    <msup><mi>y</mi><mo>′</mo></msup>
    <mo>=</mo>
    <mn>24</mn>
    <msup><mi>z</mi><mn>2</mn></msup>
    <mo>+</mo>
    <mfrac><mn>5</mn><mn>3</mn></mfrac>
    <msup><mi>z</mi><mrow><mo>−</mo><mn>6</mn></mrow></msup>
    <mo>+</mo>
    <mn>1</mn>
</math>

### Product Rule

If the two functions <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and <math><mi>g</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> are differentiable (i.e. the derivative exists) then the product is differentiable and,
<math display="block">
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <mi>f</mi>
        <mi>g</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <msup>
    <mi>f</mi>
    <mo>′</mo>
    </msup>
    <mi>g</mi>
    <mo>+</mo>
    <mi>f</mi>
    <msup>
      <mi>g</mi>
      <mo>′</mo>
   </msup>
</math>

### Example 1
Differentiate the following function:

<math display="block">
      <mi>y</mi>
      <mo>=</mo>
      <mroot>
        <msup><mi>x</mi><mn>2</mn></msup>
        <mn>3</mn>
      </mroot>
      <mo stretchy="false">(</mo>
      <mn>2</mn>
      <mi>x</mi>
      <mo>−</mo>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo stretchy="false">)</mo>
</math>
  
### Solution
Before computing the derivative, we should convert the radical to a fractional exponent as always.

<math display="block">
    <mi>y</mi>
    <mo>=</mo>
    <msup>
      <mi>x</mi>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </msup>
    <mo stretchy="false">(</mo>
    <mn>2</mn>
    <mi>x</mi>
    <mo>−</mo>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">)</mo>
</math>

Now let’s take the derivative. So, we take the derivative of the first function times the second then add on to that the first function times the derivative of the second function.

<math display="block">
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mfrac>
      <mn>2</mn>
      <mn>3</mn>
    </mfrac>
    <msup>
      <mi>x</mi>
      <mrow>
        <mo>−</mo>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </mrow>
    </msup>
    <mo stretchy="false">(</mo>
    <mn>2</mn>
    <mi>x</mi>
    <mo>−</mo>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">)</mo>
    <mo>+</mo>
    <msup>
      <mi>x</mi>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </msup>
    <mo stretchy="false">(</mo>
    <mn>2</mn>
    <mo>−</mo>
    <mn>2</mn>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
</math>

This is NOT what we got in the previous section for this derivative. However, with some simplification we can arrive at the same answer.

<math display="block">
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mfrac>
      <mn>4</mn>
      <mn>3</mn>
    </mfrac>
    <msup>
      <mi>x</mi>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </msup>
    <mo>−</mo>
    <mfrac>
      <mn>2</mn>
      <mn>3</mn>
    </mfrac>
    <msup>
      <mi>x</mi>
      <mfrac>
        <mn>5</mn>
        <mn>3</mn>
      </mfrac>
    </msup>
    <mo>+</mo>
    <mn>2</mn>
    <msup>
      <mi>x</mi>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </msup>
    <mo>−</mo>
    <mn>2</mn>
    <msup>
      <mi>x</mi>
      <mfrac>
        <mn>5</mn>
        <mn>3</mn>
      </mfrac>
    </msup>
    <mo>=</mo>
    <mfrac>
      <mn>10</mn>
      <mn>3</mn>
    </mfrac>
    <msup>
      <mi>x</mi>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </msup>
    <mo>−</mo>
    <mfrac>
      <mn>8</mn>
      <mn>3</mn>
    </mfrac>
    <msup>
      <mi>x</mi>
      <mfrac>
        <mn>5</mn>
        <mn>3</mn>
      </mfrac>
    </msup>
</math>


### Quotient Rule

If the two functions <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and <math><mi>g</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> are differentiable (i.e. the derivative exists) then the quotient is differentiable and,
<math display="block">
    <msup>
      <mrow>
        <mrow>
          <mo>(</mo>
          <mfrac>
            <mi>f</mi>
            <mi>g</mi>
          </mfrac>
          <mo>)</mo>
        </mrow>
      </mrow>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <msup>
          <mi>f</mi>
          <mo>′</mo>
        </msup>
        <mi>g</mi>
        <mo>−</mo>
        <mi>f</mi>
        <msup>
          <mi>g</mi>
          <mo>′</mo>
        </msup>
      </mrow>
      <mrow>
        <msup>
          <mi>g</mi>
          <mn>2</mn>
        </msup>
      </mrow>
    </mfrac>
</math>
Note that the numerator of the quotient rule is very similar to the product rule so be careful to not mix the two up!

### Example 1
Differentiate the following function:
<math display="block">
      <mi>W</mi>
      <mo stretchy="false">(</mo>
      <mi>z</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mn>3</mn>
          <mi>z</mi>
          <mo>+</mo>
          <mn>9</mn>
        </mrow>
        <mrow>
          <mn>2</mn>
          <mo>−</mo>
          <mi>z</mi>
        </mrow>
      </mfrac>
</math>
  
### Solution

There isn’t a lot to do here other than to use the quotient rule. Here is the work for this function.
<math display="block">
    <msup>
      <mi>W</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>z</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mn>3</mn>
        <mo stretchy="false">(</mo>
        <mn>2</mn>
        <mo>−</mo>
        <mi>z</mi>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <mo stretchy="false">(</mo>
        <mn>3</mn>
        <mi>z</mi>
        <mo>+</mo>
        <mn>9</mn>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">(</mo>
        <mo>−</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mrow>
      <msup>
        <mrow>
          <mo stretchy="false">(</mo>
          <mn>2</mn>
          <mo>−</mo>
          <mi>z</mi>
          <mo stretchy="false">)</mo>
        </mrow>
        <mn>2</mn>
      </msup>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>15</mn>
      <msup>
        <mrow>
          <mo stretchy="false">(</mo>
          <mn>2</mn>
          <mo>−</mo>
          <mi>z</mi>
          <mo stretchy="false">)</mo>
        </mrow>
        <mn>2</mn>
      </msup>
    </mfrac>
</math>

### Example 2
Differentiate the following function:

<math display="block">
        <mi>h</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mn>4</mn>
            <msqrt>
              <mi>x</mi>
            </msqrt>
          </mrow>
          <mrow>
            <msup>
              <mi>x</mi>
              <mn>2</mn>
            </msup>
            <mo>−</mo>
            <mn>2</mn>
          </mrow>
        </mfrac>
</math>
  
### Solution

Again, not much to do here other than use the quotient rule. Don’t forget to convert the square root into a fractional exponent.
<math display="block">
    <msup>
      <mi>h</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mn>4</mn>
        <mo stretchy="false">(</mo>
        <mfrac>
          <mn>1</mn>
          <mn>2</mn>
        </mfrac>
        <mo stretchy="false">)</mo>
        <msup>
          <mi>x</mi>
          <mrow>
            <mo>−</mo>
            <mfrac>
              <mn>1</mn>
              <mn>2</mn>
            </mfrac>
          </mrow>
        </msup>
        <mo stretchy="false">(</mo>
        <msup>
          <mi>x</mi>
          <mn>2</mn>
        </msup>
        <mo>−</mo>
        <mn>2</mn>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <mn>4</mn>
        <msup>
          <mi>x</mi>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
        </msup>
        <mo stretchy="false">(</mo>
        <mn>2</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <msup>
        <mrow>
          <mo stretchy="false">(</mo>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
          <mo>−</mo>
          <mn>2</mn>
          <mo stretchy="false">)</mo>
        </mrow>
        <mn>2</mn>
      </msup>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mn>2</mn>
        <msup>
          <mi>x</mi>
          <mfrac>
            <mn>3</mn>
            <mn>2</mn>
          </mfrac>
        </msup>
        <mo>−</mo>
        <mn>4</mn>
        <msup>
          <mi>x</mi>
          <mrow>
            <mo>−</mo>
            <mfrac>
              <mn>1</mn>
              <mn>2</mn>
            </mfrac>
          </mrow>
        </msup>
        <mo>−</mo>
        <mn>8</mn>
        <msup>
          <mi>x</mi>
          <mfrac>
            <mn>3</mn>
            <mn>2</mn>
          </mfrac>
        </msup>
      </mrow>
      <msup>
        <mrow>
          <mo stretchy="false">(</mo>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
          <mo>−</mo>
          <mn>2</mn>
          <mo stretchy="false">
        </mrow>
        <mn>2</mn>
      </msup>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>−</mo>
        <mn>6</mn>
        <msup>
          <mi>x</mi>
          <mfrac>
            <mn>3</mn>
            <mn>2</mn>
          </mfrac>
        </msup>
        <mo>−</mo>
        <mn>4</mn>
        <msup>
          <mi>x</mi>
          <mrow>
            <mo>−</mo>
            <mfrac>
              <mn>1</mn>
              <mn>2</mn>
            </mfrac>
          </mrow>
        </msup>
      </mrow>
      <msup>
        <mrow>
          <mo stretchy="false">(</mo>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
          <mo>−</mo>
          <mn>2</mn>
          <mo stretchy="false">)</mo>
        </mrow>
        <mn>2</mn>
      </msup>
    </mfrac>
</math>


## Chain Rule

Suppose that we have two functions <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and <math><mi>g</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and they are both differentiable. 
If we define <math><mi>F</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi>f</mi><mo>∘</mo><mi>g</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> then the derivative of <math><mi>F</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> is,
<math display="block">
    <msup>
      <mi>F</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mi>f</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>g</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <msup>
      <mi>g</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
  </math>
If we have <math><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>u</mi><mo stretchy="false">)</mo></math> and <math><mi>u</mi><mo>=</mo><mi>g</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> then the derivative of <math><mi>y</mi></math> is,
<math display="block">
    <mfrac>
      <mrow>
        <mi>d</mi>
        <mi>y</mi>
      </mrow>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mi>d</mi>
        <mi>y</mi>
      </mrow>
      <mrow>
        <mi>d</mi>
        <mi>u</mi>
      </mrow>
    </mfrac>
    <mfrac>
      <mrow>
        <mi>d</mi>
        <mi>u</mi>
      </mrow>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
  </math>

### Example 1
Use the Chain Rule to differentiate <math><mi>R</mi><mo stretchy="false">(</mo><mi>z</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mrow><mn>5</mn><mi>z</mi><mo>−</mo><mn>8</mn></mrow></msqrt></math>.
### Solution
We can think of this as a composition of two functions:
<math display="block">
    <mrow>
      <mi>f</mi>
      <mo stretchy="false">(</mo>
      <mi>z</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <msqrt>
        <mi>z</mi>
      </msqrt>
      <mspace width="2em" />
      <mi>g</mi>
      <mo stretchy="false">(</mo>
      <mi>z</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mn>5</mn>
      <mi>z</mi>
      <mo>−</mo>
      <mn>8</mn>
    </mrow>
</math>

Their derivatives are:
<math display="block">
    <mrow>
      <msup>
        <mi>f</mi>
        <mo>′</mo>
      </msup>
      <mo stretchy="false">(</mo>
      <mi>z</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mfrac>
        <mn>1</mn>
        <mrow>
          <mn>2</mn>
          <msqrt>
            <mi>z</mi>
          </msqrt>
        </mrow>
      </mfrac>
      <mspace width="2em" />
      <msup>
        <mi>g</mi>
        <mo>′</mo>
      </msup>
      <mo stretchy="false">(</mo>
      <mi>z</mi>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mn>5</mn>
    </mrow>
</math>
Using the chain rule, we get:
<math display="block">
    <msup>
      <mi>R</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>z</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mi>f</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>g</mi>
    <mo stretchy="false">(</mo>
    <mi>z</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <msup>
      <mi>g</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>z</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mi>f</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mn>5</mn>
    <mi>z</mi>
    <mo>−</mo>
    <mn>8</mn>
    <mo stretchy="false">)</mo>
    <mo>⋅</mo>
    <mn>5</mn>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mn>2</mn>
        <msqrt>
          <mrow>
            <mn>5</mn>
            <mi>z</mi>
            <mo>−</mo>
            <mn>8</mn>
          </mrow>
        </msqrt>
      </mrow>
    </mfrac>
    <mo>⋅</mo>
    <mn>5</mn>
    <mo>=</mo>
    <mfrac>
      <mn>5</mn>
      <mrow>
        <mn>2</mn>
        <msqrt>
          <mrow>
            <mn>5</mn>
            <mi>z</mi>
            <mo>−</mo>
            <mn>8</mn>
          </mrow>
        </msqrt>
      </mrow>
    </mfrac>
</math>
A more intuitive way to remember the chain rule is to identify an "inside function" and an "outside function". Let’s rewrite the function from the example:
<math display="block">
    <mi>R</mi>
    <mo stretchy="false">(</mo>
    <mi>z</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <mn>5</mn>
        <mi>z</mi>
        <mo>−</mo>
        <mn>8</mn>
        <mo stretchy="false">)</mo>
      </mrow>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
    </msup>
</math>
Here, the inside function is <math><mn>5</mn><mi>z</mi><mo>−</mo><mn>8</mn></math>, and theoutside function is raising that to the power of <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. The derivative is then:(derivative of the outside function, leaving the inside function alone) times(derivative of the inside function).

<math display="block">
    <msup>
      <mi>R</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>z</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mrow>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
      <msup>
        <mrow>
          <mo stretchy="false">(</mo>
          <mn>5</mn>
          <mi>z</mi>
          <mo>−</mo>
          <mn>8</mn>
          <mo stretchy="false">)</mo>
        </mrow>
        <mrow>
          <mo>−</mo>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
        </mrow>
      </msup>
    </mrow>
    <mo>⋅</mo>
    <mrow>
      <mo stretchy="false">(</mo>
      <mn>5</mn>
      <mo stretchy="false">)</mo>
    </mrow>
</math>

The outside function is always the last operation you would perform when evaluating. For instance, to find <math><mi>R</mi><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></math>, you would first evaluate <math><mn>5</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>−</mo><mn>8</mn></math> and then take the square root of the result. The square root is the last operation, making it the outside function.



<style>
mi { 
  font-size: 24px;
}

mo {
  font-size: 19px;
}
</style>