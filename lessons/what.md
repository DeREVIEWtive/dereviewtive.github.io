What is Derivative?

# What is Derivative?
The computation of the slope of a tangent line, the instantaneous rate of change of a function, and the instantaneous velocity of an object at <math>><mi>x</mi><mo>=</mo><mi>a</mi></math> all required us to compute the following limit
      <math display="block">
        <munder>
          <mo>lim</mo>
          <mrow>
            <mi>x</mi>
            <mo>→</mo>
            <mi>a</mi>
          </mrow>
        </munder>
        <mfrac>
          <mrow>
            <mi>f</mi>
            <mo>(</mo>
            <mi>x</mi>
            <mo>)</mo>
            <mo>−</mo>
            <mi>f</mi>
            <mo>(</mo>
            <mi>a</mi>
            <mo>)</mo>
          </mrow>
          <mrow>
            <mi>x</mi>
            <mo>−</mo>
            <mi>a</mi>
          </mrow>
        </mfrac>
      </math>
We also saw that with a small change of notation this limit could also be written as,
      <math display="block">
        <munder>
          <mo>lim</mo>
          <mrow>
            <mi>h</mi>
            <mo>→</mo>
            <mn>0</mn>
          </mrow>
        </munder>
        <mfrac>
          <mrow>
            <mi>f</mi>
            <mo>(</mo>
            <mi>a</mi>
            <mo>+</mo>
            <mi>h</mi>
            <mo>)</mo>
            <mo>−</mo>
            <mi>f</mi>
            <mo>(</mo>
            <mi>a</mi>
            <mo>)</mo>
          </mrow>
          <mi>h</mi>
        </mfrac>
      </math>
This is such an important limit and it arises in so many places that we give it a name. We call it a derivative.
## Defintion of the Derivative
The derivative of <math><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></math> with respect to <math><mi>x</mi></math> is the function <math><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></math> and is defined as,
      <math display="block">
        <mrow>
          <msup>
            <mi>f</mi>
            <mo>′</mo>
          </msup>
          <mo stretchy="false">(</mo>
          <mi>x</mi>
          <mo stretchy="false">)</mo>
          <mo>=</mo>
          <munder>
            <mo>lim</mo>
            <mrow>
              <mi>h</mi>
              <mo>→</mo>
              <mn>0</mn>
            </mrow>
          </munder>
          <mfrac>
            <mrow>
              <mi>f</mi>
              <mo stretchy="false">(</mo>
              <mi>x</mi>
              <mo>+</mo>
              <mi>h</mi>
              <mo stretchy="false">)</mo>
              <mo>−</mo>
              <mi>f</mi>
              <mo stretchy="false">(</mo>
              <mi>x</mi>
              <mo stretchy="false">)</mo>
            </mrow>
            <mi>h</mi>
          </mfrac>
        </mrow>
      </math>
Note that we replaced all the <math><mi>a</mi></math>'s in with <math><mi>x</mi></math>'s to acknowledge the fact that the derivative is a function as well. We often “read” <math><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></math> as “f prime of x”.

Here are some examples of derivatives using the definition.

### Example 1
Find the derivative of the following function using the definition of the derivative.
      <math display="block"><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>18</mn><mi>x</mi><mo>+</mo><mn>40</mn></math>
      <div>
So, all we really need to do is to put this function into the definition of the derivative, and do some algebra. While, admittedly, the algebra will get somewhat unpleasant at times, but it’s just algebra so don’t get excited about the fact that we’re now computing derivatives.
First put the function into the definition of the derivative.
        <math display="block">
          <msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo>
          <mo>=</mo>
          <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder>
          <mfrac><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy="false">)</mo><mo>−</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>h</mi></mfrac>
          <mo>=</mo>
          <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder>
          <mfrac><mrow><mn>3</mn><msup><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy="false">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>18</mn><mo stretchy="false">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy="false">)</mo><mo>+</mo><mn>40</mn><mo>−</mo><mo stretchy="false">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>18</mn><mi>x</mi><mo>+</mo><mn>40</mn><mo stretchy="false">)</mo></mrow><mi>h</mi></mfrac>
        </math>
Be careful and make sure that you properly deal with parenthesis when doing the subtracting.
Now, we know from the previous chapter that we can’t just plug in <math><mi>h</mi><mo>=</mo><mn>0</mn></math> since this will give us a division by zero error. So, we are going to have to do some work. In this case that means multiplying everything out and distributing the minus sign through on the second term. Doing this gives,
        <math display="block">
            <msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo>
            <mo>=</mo>
            <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder>
            <mfrac><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mi>h</mi><mo>+</mo><mn>3</mn><msup><mi>h</mi><mn>2</mn></msup><mo>−</mo><mn>18</mn><mi>x</mi><mo>−</mo><mn>18</mn><mi>h</mi><mo>+</mo><mn>40</mn><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>18</mn><mi>x</mi><mo>−</mo><mn>40</mn></mrow><mi>h</mi></mfrac>
            <mo>=</mo>
            <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder>
            <mfrac><mrow><mn>6</mn><mi>x</mi><mi>h</mi><mo>+</mo><mn>3</mn><msup><mi>h</mi><mn>2</mn></msup><mo>−</mo><mn>18</mn><mi>h</mi></mrow><mi>h</mi></mfrac>
        </math>
Notice that every term in the numerator that didn’t have an <math><mi>h</mi></math> in it canceled out and we can now factor an <math><mi>h</mi></math> out of the numerator which will cancel against the <math><mi>h</mi></math> in the denominator. After that we can compute the limit.
        <math display="block">
            <msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo>
            <mo>=</mo>
            <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder>
            <mfrac><mrow><mi>h</mi><mo stretchy="false">(</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>h</mi><mo>−</mo><mn>18</mn><mo stretchy="false">)</mo></mrow><mi>h</mi></mfrac>
            <mo>=</mo>
            <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder>
            <mrow><mo stretchy="false">(</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>h</mi><mo>−</mo><mn>18</mn><mo stretchy="false">)</mo></mrow>
            <mo>=</mo>
            <mn>6</mn><mi>x</mi><mo>−</mo><mn>18</mn>
        </math>
So, the derivative is,
        <math display="block">
          <msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mn>6</mn><mi>x</mi><mo>−</mo><mn>18</mn>
        </math>
    </div>
</div>

Let’s work one more example. This one will be a little different, but it’s got a point that needs to be made.
## Example 2
Determine <math><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo></math> for <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo>|</mo><mi>x</mi><mo>|</mo></math>.
      <div>
### Solution
Since this problem is asking for the derivative at a specific point we’ll go ahead and use that in our work. It will make our life easier and that’s always a good thing.
So, plug into the definition and simplify.
        <math display="block">
          <mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo></mrow>
          <mo>=</mo><munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>f</mi><mo stretchy="false">(</mo><mn>0</mn><mo>+</mo><mi>h</mi><mo stretchy="false">)</mo><mo>−</mo><mi>f</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo></mrow><mi>h</mi></mfrac>
          <mo>=</mo><munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo>|</mo><mn>0</mn><mo>+</mo><mi>h</mi><mo>|</mo><mo>−</mo><mo>|</mo><mn>0</mn><mo>|</mo></mrow><mi>h</mi></mfrac>
          <mo>=</mo><munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo>|</mo><mi>h</mi><mo>|</mo></mrow><mi>h</mi></mfrac>
        </math>
We saw a situation like this back when we were looking at limits at infinity. As in that section we can’t just cancel the h’s. We will have to look at the two one sided limits and recall that
        <math display="block">
          <mrow><mo>|</mo><mi>h</mi><mo>|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left"><mtr><mtd><mi>h</mi></mtd><mtd><mtext>if </mtext><mi>h</mi><mo>≥</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>−</mo><mi>h</mi></mtd><mtd><mtext>if </mtext><mi>h</mi><mo>&lt;</mo><mn>0</mn></mtd></mtr></mtable></mrow>
        </math>
        <math display="block">
          <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><msup><mn>0</mn><mo>−</mo></msup></mrow></munder><mfrac><mrow><mo>|</mo><mi>h</mi><mo>|</mo></mrow><mi>h</mi></mfrac>
          <mo>=</mo><munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><msup><mn>0</mn><mo>−</mo></msup></mrow></munder><mfrac><mrow><mo>−</mo><mi>h</mi></mrow><mi>h</mi></mfrac>
          <mspace width="1em"></mspace><mtext>because </mtext><mi>h</mi><mo>&lt;</mo><mn>0</mn><mtext> in a left-hand limit.</mtext>
          <mo>=</mo><munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><msup><mn>0</mn><mo>−</mo></msup></mrow></munder><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo>
          <mo>=</mo><mo>−</mo><mn>1</mn>
        </math>
        <math display="block">
          <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><msup><mn>0</mn><mo>+</mo></msup></mrow></munder><mfrac><mrow><mo>|</mo><mi>h</mi><mo>|</mo></mrow><mi>h</mi></mfrac>
          <mo>=</mo><munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><msup><mn>0</mn><mo>+</mo></msup></mrow></munder><mfrac><mi>h</mi><mi>h</mi></mfrac>
          <mspace width="1em"></mspace><mtext>because </mtext><mi>h</mi><mo>&gt;</mo><mn>0</mn><mtext> in a right-hand limit.</mtext>
          <mo>=</mo><munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><msup><mn>0</mn><mo>+</mo></msup></mrow></munder><mn>1</mn>
          <mo>=</mo><mn>1</mn>
        </math>
The two one-sided limits are different and so
    <math display="block">
          <munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo>|</mo><mi>h</mi><mo>|</mo></mrow><mi>h</mi></mfrac>
          <mspace width="1em"></mspace><mtext>doesn’t exist.</mtext>
        </math>
However, this is the limit that gives us the derivative that we’re after.
If the limit doesn’t exist then the derivative doesn’t exist either.
      </div>
In this example we have finally seen a function for which the derivative doesn’t exist at a point. This is a fact of life that we’ve got to be aware of. Derivatives will not always exist. Note as well that this doesn’t say anything about whether or not the derivative exists anywhere else. In fact, the derivative of the absolute value function exists at every point except the one we just looked at, <math><mi>x</mi><mo>=</mo><mn>0</mn></math>.
The preceding discussion leads to the following definition.
## Definition 
Function <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> is called differentiable at <math><mi>x</mi><mo>=</mo><mi>a</mi></math> if <math><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo></math> exists and <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> is called differentiable on an interval if the derivative exists for each point in that interval.

The next theorem shows us a very nice relationship between functions that are continuous and those that are differentiable.
## Theorem
If <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> is differentiable at <math><mi>x</mi><mo>=</mo><mi>a</mi></math> then <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> is continuous at <math><mi>x</mi><mo>=</mo><mi>a</mi></math>.
Note that this theorem does not work in reverse. Consider <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo>|</mo><mi>x</mi><mo>|</mo></math> and take a look at,
      <math display="block">
        <munder><mo>lim</mo><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo>
        <mo>=</mo><munder><mo>lim</mo><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mo>|</mo><mi>x</mi><mo>|</mo>
        <mo>=</mo><mn>0</mn>
        <mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo>
      </math>
So, <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo>|</mo><mi>x</mi><mo>|</mo></math> is continuous at <math><mi>x</mi><mo>=</mo><mn>0</mn></math> but we’ve just shown above in Example 4 that <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo>|</mo><mi>x</mi><mo>|</mo></math> is not differentiable at <math><mi>x</mi><mo>=</mo><mn>0</mn></math>.
</div>
 

 
<style>
mi { 
  font-size: 18px;
}
</style>


