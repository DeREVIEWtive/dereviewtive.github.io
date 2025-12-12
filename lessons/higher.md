Higher Order of Derivatives

# Higher Order of Derivatives
Let’s start this section with the following function.

  <math display="block">
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>5</mn>
    <msup>
      <mi>x</mi>
      <mn>3</mn>
    </msup>
    <mo>−</mo>
    <mn>3</mn>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <mn>10</mn>
    <mi>x</mi>
    <mo>−</mo>
    <mn>5</mn>
</math>

By this point we should be able to differentiate this function without any problems. Doing this we get,

<math display="block">
    <msup>
      <mi>f</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>15</mn>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>−</mo>
    <mn>6</mn>
    <mi>x</mi>
    <mo>+</mo>
    <mn>10</mn>
</math>

Now, this is a function and so it can be differentiated. Here is the notation that we’ll use for that, as well as the derivative.

<math display="block">
    <msup>
      <mi>f</mi>
      <mo>″</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <msup>
          <mi>f</mi>
          <mo>′</mo>
        </msup>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
      </mrow>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mn>30</mn>
    <mi>x</mi>
    <mo>−</mo>
    <mn>6</mn>
</math>

This is called the second derivative and <math><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> is now called the first derivative.
Again, this is a function, so we can differentiate it again. This will be called the third derivative. Here is that derivative as well as the notation for the third derivative.

<math display="block">
    <msup>
      <mi>f</mi>
      <mo>‴</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <msup>
          <mi>f</mi>
          <mo>″</mo>
        </msup>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
      </mrow>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mn>30</mn>
</math>

Continuing, we can differentiate again. This is called, oddly enough, the fourth derivative. We’re also going to be changing notation at this point. We can keep adding on primes, but that will get cumbersome after a while.

<math display="block">
    <msup>
      <mi>f</mi>
      <mrow>
        <mo stretchy="false">(</mo>
        <mn>4</mn>
        <mo stretchy="false">)</mo>
      </mrow>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <msup>
          <mi>f</mi>
          <mo>‴</mo>
        </msup>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
      </mrow>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mn>0</mn>
  </math>

This process can continue but notice that we will get zero for all derivatives after this point. This set of derivatives leads us to the following fact about the differentiation of polynomials.

## Fact
If <math><mi>p</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> is a polynomial of degree <math><mi>n</mi></math> (i.e. the largest exponent in the polynomial) then,
<math display="block">
  <msup>
      <mi>p</mi>
      <mrow>
        <mo stretchy="false">(</mo>
        <mi>k</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>0</mn>
    <mspace width="1em" />
    <mtext>for </mtext>
    <mi>k</mi>
    <mo>≥</mo>
    <mi>n</mi>
    <mo>+</mo>
    <mn>1</mn>
</math>

We will need to be careful with the “non-prime” notation for derivatives. Consider each of the following.

<math display="block">
    <msup>
      <mi>f</mi>
      <mrow>
        <mo stretchy="false">(</mo>
        <mn>2</mn>
        <mo stretchy="false">)</mo>
      </mrow>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mi>f</mi>
      <mo>″</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mspace width="2em" />
    <msup>
      <mi>f</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mrow>
        <mo stretchy="false">[</mo>
        <mi>f</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">]</mo>
      </mrow>
      <mn>2</mn>
    </msup>
</math>

The presence of parenthesis in the exponent denotes differentiation while the absence of parenthesis denotes exponentiation.

Collectively the second, third, fourth, etc. derivatives are called higher order derivatives.
Let’s take a look at some examples of higher order derivatives.

## Example 1: Find the first four derivatives for each of the following
a) <math><mi>R</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><msup><mi>t</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><mo>+</mo><msup><mi>e</mi><mi>t</mi></msup></math>
### Solution
There really isn’t a lot to do here other than do the derivatives.

<math display="block">
    <msup><mi>R</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mn>6</mn><mi>t</mi><mo>+</mo><mn>4</mn><msup><mi>t</mi><mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo>+</mo><msup><mi>e</mi><mi>t</mi></msup>
</math>
  
<math display="block">
    <msup><mi>R</mi><mo>″</mo></msup><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mn>6</mn><mo>−</mo><mn>2</mn><msup><mi>t</mi><mrow><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></msup><mo>+</mo><msup><mi>e</mi><mi>t</mi></msup>
</math>

<math display="block">
    <msup><mi>R</mi><mo>‴</mo></msup><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><msup><mi>t</mi><mrow><mo>−</mo><mfrac><mn>5</mn><mn>2</mn></mfrac></mrow></msup><mo>+</mo><msup><mi>e</mi><mi>t</mi></msup>
</math>

<math display="block">
    <msup><mi>R</mi><mrow><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn>15</mn><mn>2</mn></mfrac><msup><mi>t</mi><mrow><mo>−</mo><mfrac><mn>7</mn><mn>2</mn></mfrac></mrow></msup><mo>+</mo><msup><mi>e</mi><mi>t</mi></msup>
</math>

Notice that differentiating an exponential function is very simple. It doesn’t change with each differentiation.
b) <math><mi>y</mi><mo>=</mo><mi>cos</mi><mi>x</mi></math>

### Solution
Again, let’s just do some derivatives.
<math display="block"><mi>y</mi><mo>=</mo><mi>cos</mi><mi>x</mi></math>
<math display="block"><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo>−</mo><mi>sin</mi><mi>x</mi></math>
<math display="block"><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mo>−</mo><mi>cos</mi><mi>x</mi></math>
<math display="block"><msup><mi>y</mi><mo>‴</mo></msup><mo>=</mo><mi>sin</mi><mi>x</mi></math>
<math display="block"><msup><mi>y</mi><mrow><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></msup><mo>=</mo><mi>cos</mi><mi>x</mi></math>

Note that cosine (and sine) will repeat every four derivatives. The other four trig functions will not exhibit this behavior. You might want to take a few derivatives to convince yourself of this.

c) <math><mi>f</mi><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>sin</mi><mo stretchy="false">(</mo><mn>3</mn><mi>y</mi><mo stretchy="false">)</mo><mo>+</mo><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msup><mo>+</mo><mi>ln</mi><mo stretchy="false">(</mo><mn>7</mn><mi>y</mi><mo stretchy="false">)</mo></math>

### Solution
In the previous two examples we saw some patterns in the differentiation of exponential functions, cosines and sines. We need to be careful however since they only work if there is just a <math><mi>t</mi></math> or an <math><mi>x</mi></math> in the argument. This is the point of this example. In this example we will need to use the chain rule on each derivative.

<math display="block">
    <msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo>
    <mo>=</mo><mn>3</mn><mi>cos</mi><mo stretchy="false">(</mo><mn>3</mn><mi>y</mi><mo stretchy="false">)</mo>
    <mo>−</mo><mn>2</mn><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msup>
    <mo>+</mo><mfrac><mn>1</mn><mi>y</mi></mfrac>
    <mo>=</mo><mn>3</mn><mi>cos</mi><mo stretchy="false">(</mo><mn>3</mn><mi>y</mi><mo stretchy="false">)</mo>
    <mo>−</mo><mn>2</mn><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msup>
    <mo>+</mo><msup><mi>y</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup>
</math>

<math display="block">
    <msup><mi>f</mi><mo>″</mo></msup><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo>
    <mo>=</mo><mo>−</mo><mn>9</mn><mi>sin</mi><mo stretchy="false">(</mo><mn>3</mn><mi>y</mi><mo stretchy="false">)</mo>
    <mo>+</mo><mn>4</mn><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msup>
    <mo>−</mo><msup><mi>y</mi><mrow><mo>−</mo><mn>2</mn></mrow></msup>
</math>

<math display="block">
    <msup><mi>f</mi><mo>‴</mo></msup><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo>
    <mo>=</mo><mo>−</mo><mn>27</mn><mi>cos</mi><mo stretchy="false">(</mo><mn>3</mn><mi>y</mi><mo stretchy="false">)</mo>
    <mo>−</mo><mn>8</mn><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msup>
    <mo>+</mo><mn>2</mn><msup><mi>y</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup>
</math>

<math display="block">
    <msup><mi>f</mi><mrow><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo>
    <mo>=</mo><mn>81</mn><mi>sin</mi><mo stretchy="false">(</mo><mn>3</mn><mi>y</mi><mo stretchy="false">)</mo>
    <mo>+</mo><mn>16</mn><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msup>
    <mo>−</mo><mn>6</mn><msup><mi>y</mi><mrow><mo>−</mo><mn>4</mn></mrow></msup>
</math>

So, we can see with slightly more complicated arguments the patterns that we saw for exponential functions, sines and cosines no longer completely hold.


<style>
mi { 
  font-size: 24px;
}

mn {
  font-size: 21px;
}

mo {
  font-size: 19px;
}
</style>