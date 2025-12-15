Implicit Differentiation

# Implicit Differentiation
To this point we’ve done quite a few derivatives, but they have all been derivatives of functions of the form <math><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>. Unfortunately, not all the functions that we’re going to look at will fall into this form.

Let’s take a look at an example of a function like this.

## Example 1

### Solution
There are actually two solution methods for this problem.
Solution 1:
This is the simple way of doing the problem. Just solve for <math><mi>y</mi></math> to get the function in the form that we’re used to dealing with and then differentiate.

<math display="block">
    <mi>y</mi>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mi>x</mi>
    </mfrac>
    <mspace width="1em" />
    <mo>⇒</mo>
    <mspace width="1em" />
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mo>−</mo>
    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
    </mfrac>
</math>

So, that’s easy enough to do. However, there are some functions for which this can’t be done. That’s where the second solution technique comes into play.

Solution 2:
In this case we’re going to leave the function in the form that we were given and work with it in that form. However, let’s recall from the first part of this solution that if we could solve for <math><mi>y</mi></math> then we will get <math><mi>y</mi></math> as a function of <math><mi>x</mi></math>

In other words, if we could solve for <math><mi>y</mi></math> (as we could in this case but won’t always be able to do) we get <math><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>. Let’s rewrite the equation to note this.

<math display="block"><mi>x</mi><mi>y</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn></math>

Be careful here and note that when we write <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> we don’t mean <math><mi>y</mi></math> times <math><mi>x</mi></math>. What we are noting here is that <math><mi>y</mi></math> is some (probably unknown) function of <math><mi>x</mi></math>. This is important to recall when doing this solution technique.

The next step in this solution is to differentiate both sides with respect to <math><mi>x</mi></math> as follows,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mn>1</mn>
    <mo stretchy="false">)</mo>
</math>

The right side is easy. It’s just the derivative of a constant. The left side is also easy, but we’ve got to recognize that we’ve actually got a product here, the <math><mi>x</mi></math> and the <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>. So, to do the derivative of the left side we’ll need to do the product rule. Doing this gives,

<math display="block">
    <mo stretchy="false">(</mo>
    <mn>1</mn>
    <mo stretchy="false">)</mo>
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>+</mo>
    <mi>x</mi>
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>0</mn>
</math>

Now, recall that we have the following notational way of writing the derivative.

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
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
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
</math>

Using this we get the following,

<math display="block">
    <mi>y</mi>
    <mo>+</mo>
    <mi>x</mi>
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mn>0</mn>
</math>

Note that we dropped the <math><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> on the <math><mi>y</mi></math> as it was only there to remind us that the <math><mi>y</mi></math> was a function of <math><mi>x</mi></math> and now that we’ve taken the derivative it’s no longer really needed. We just wanted it in the equation to recognize the product rule when we took the derivative.

So, let’s now recall just what were we after. We were after the derivative, <math><msup><mi>y</mi><mo>′</mo></msup></math>, and notice that there is now a <math><msup><mi>y</mi><mo>′</mo></msup></math> in the equation. So, to get the derivative all that we need to do is solve the equation for <math><msup><mi>y</mi><mo>′</mo></msup></math>.

<math display="block">
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mo>−</mo>
    <mfrac>
      <mi>y</mi>
      <mi>x</mi>
    </mfrac>
</math>

There it is. Using the second solution technique this is our answer. This is not what we got from the first solution however. Or at least it doesn’t look like the same derivative that we got from the first solution. Recall however, that we really do know what <math><mi>y</mi></math> is in terms of <math><mi>x</mi></math> and if we plug that in we will get,

<math display="block">
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mo>−</mo>
    <mfrac>
      <mrow>
        <mn>1</mn>
        <mo>/</mo>
        <mi>x</mi>
      </mrow>
      <mi>x</mi>
    </mfrac>
    <mo>=</mo>
    <mo>−</mo>
    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
    </mfrac>
</math>

Which is what we got from the first solution. Regardless of the solution technique used we should get the same derivative.

The process that we used in the second solution to the previous example is called implicit differentiation and that is the subject of this section. In the previous example we were able to just solve for <math><mi>y</mi></math> and avoid implicit differentiation. However, in the remainder of the examples in this section we either won’t be able to solve for <math><mi>y</mi></math> or, as we’ll see in one of the examples below, the answer will not be in a form that we can deal with.

In the second solution above we replaced the <math><mi>y</mi></mrow></math> with <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and then did the derivative. Recall that we did this to remind us that <math><mi>y</mi></math> is in fact a function of <math><mi>x</mi></math>. We’ll be doing this quite a bit in these problems, although we rarely actually write <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>. So, before we actually work anymore implicit differentiation problems let’s do a quick set of “simple” derivatives that will hopefully help us with doing derivatives of functions that also contain a <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>.
  
## Example 2
a) <math><msup><mrow><mo stretchy="false">(</mo><mn>5</mn><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mn>5</mn></msup></math>, <math><msup><mrow><mo stretchy="false">[</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow><mn>5</mn></msup></math>, <math><msup><mrow><mo stretchy="false">[</mo><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow><mn>5</mn></msup></math>
With the first function here we’re being asked to do the following,

<math hdisplay="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">[</mo>
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <mn>5</mn>
        <msup>
          <mi>x</mi>
          <mn>3</mn>
        </msup>
        <mo>−</mo>
        <mn>7</mn>
        <mi>x</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mrow>
      <mn>5</mn>
    </msup>
    <mo stretchy="false">]</mo>
    <mo>=</mo>
    <mn>5</mn>
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <mn>5</mn>
        <msup>
          <mi>x</mi>
          <mn>3</mn>
        </msup>
        <mo>−</mo>
        <mn>7</mn>
        <mi>x</mi>
        <mo>+</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mrow>
      <mn>4</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mn>15</mn>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>−</mo>
    <mn>7</mn>
    <mo stretchy="false">)</mo>
</math>

and this is just the chain rule. We differentiated the outside function (the exponent of 5) and then multiplied that by the derivative of the inside function (the stuff inside the parenthesis).

For the second function we’re going to do basically the same thing. We’re going to need to use the chain rule. The outside function is still the exponent of 5 while the inside function this time is simply <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>. We don’t have a specific function here, but that doesn’t mean that we can’t at least write down the chain rule for this function. Here is the derivative for this function,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <msup>
      <mrow>
        <mo stretchy="false">[</mo>
        <mi>f</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">]</mo>
      </mrow>
      <mn>5</mn>
    </msup>
    <mo>=</mo>
    <mn>5</mn>
    <msup>
      <mrow>
        <mo stretchy="false">[</mo>
        <mi>f</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">]</mo>
      </mrow>
      <mn>4</mn>
    </msup>
    <msup>
      <mi>f</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</>
</math>

We don’t actually know what <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> is so when we do the derivative of the inside function all we can do is write down notation for the derivative, i.e. <math><msup><mi>f</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>.

With the final function here we simply replaced the <math><mi>f</mi></math> in the second function with a <math><mi>y</mi></math> since most of our work in this section will involve <math><mi>y</mi></math>’s instead of <math><mi>f</mi></math>’s. Outside of that this function is identical to the second. So, the derivative is,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <msup>
      <mrow>
        <mo stretchy="false">[</mo>
        <mi>y</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">]</mo>
      </mrow>
      <mn>5</mn>
    </msup>
    <mo>=</mo>
    <mn>5</mn>
    <msup>
      <mrow>
        <mo stretchy="false">[</mo>
        <mi>y</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">]</mo>
      </mrow>
      <mn>4</mn>
    </msup>
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</
    <mo stretchy="false">)</mo>
</math>
  
b) <math><mi>sin</mi><mo stretchy="false">(</mo><mn>3</mn><mo>−</mo><mn>6</mn><mi>x</mi><mo stretchy="false">)</mo></math>, <math><mi>sin</mi><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></math>

The first function to differentiate here is just a quick chain rule problem again so here is it’s derivative,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">[</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mn>3</mn>
    <mo>−</mo>
    <mn>6</mn>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">]</mo>
    <mo>=</mo>
    <mo>−</mo>
    <mn>6</mn>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mn>3</mn>
    <mo>−</mo>
    <mn>6</mn>
    <mi>x</mi>
    <mo stretchy="false">)</>
</math>

For the second function we didn’t bother this time with using <math><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and just jumped straight to <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> for the general version. 

This is still just a general version of what we did for the first function. The outside function is still the sine and the inside is given by <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and while we don’t have a formula for <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and so we can’t actually take its derivative we do have a notation for its derivative. Here is the derivative for this function,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">[</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">]</mo>
    <mo>=</mo>
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</>
</math>
  
c) <math><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>9</mn><mi>x</mi></mrow></msup></math>, <math><msup><mi>e</mi><mrow><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></msup></math>

In this part we’ll just give the answers for each and leave out the explanation that we had in the first two parts.

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <msup>
      <mi>e</mi>
      <mrow>
        <msup>
          <mi>x</mi>
          <mn>2</mn>
        </msup>
        <mo>−</mo>
        <mn>9</mn>
        <mi>x</mi>
      </mrow>
    </msup>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mo stretchy="false">(</mo>
    <mn>2</mn>
    <mi>x</mi>
    <mo>−</mo>
    <mn>9</mn>
    <mo stretchy="false">)</mo>
    <msup>
      <mi>e</mi>
      <mrow>
        <msup>
          <mi>x</mi>
          <mn>2</mn>
        </msup>
        <mo>−</mo>
        <mn>9</mn>
        <mi>x</mi>
      </mrow>
    </msup>
</math>
<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <msup>
      <mi>e</mi>
      <mrow>
        <mi>y</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </msup>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <msup>
      <mi>e</mi>
      <mrow>
        <mi>y</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </msup>
</math>

So, in this set of examples we were just doing some chain rule problems where the inside function was <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> instead of a specific function. This kind of derivative shows up all the time in doing implicit differentiation so we need to make sure that we can do them. Also note that we only did this for three kinds of functions but there are many more kinds of functions that we could have used here.

So, it’s now time to do our first problem where implicit differentiation is required, unlike the first example where we could actually avoid implicit differentiation by solving for <math><mi>y</mi></math>.

## Example 3
<math display="block">
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mi>y</mi>
      <mn>2</mn>
    </msup>
    <mo>=</mo>
    <mn>9</mn>
</math>

### Solution
Now, this is just a circle and we can solve for <math><mi>y</mi></math> which would give,

<math mdisplay="block">
    <mi>y</mi>
    <mo>=</mo>
    <mo>±</mo>
    <msqrt>
      <mn>9</mn>
      <mo>−</mo>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
    </msqrt>
</math>

Prior to starting this problem, we stated that we had to do implicit differentiation here because we couldn’t just solve for <math><mi>y</mi></math> and yet that’s what we just did. So, why can’t we use “normal” differentiation here? The problem is the “<math><mo>±</mo></math>”. With this in the “solution” for <math><mi>y</mi></math> we see that <math><mi>y</mi></math> is in fact two different functions. Which should we use? Should we use both? We only want a single function for the derivative and at best we have two functions here.

So, in this example we really are going to need to do implicit differentiation so we can avoid this. In this example we’ll do the same thing we did in the first example and remind ourselves that <math><mi>y</mi></math> is really a function of <math><mi>x</mi></math> and write <math><mi>y</mi></math> as <math><mi>y</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>. Once we’ve done this all we need to do is differentiate each term with respect to <math><mi>x</mi></math>.

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mrow>
        <mo stretchy="false">[</mo>
        <mi>y</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">]</mo>
      </mrow>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mn>9</mn>
    <mo stretchy="false">)</>
</math>

As with the first example the right side is easy. The left side is also pretty easy since all we need to do is take the derivative of each term and note that the second term will be similar the part (a) of the second example. All we need to do for the second term is use the chain rule. After taking the derivative we have,

<math display="block">
    <mn>2</mn>
    <mi>x</mi>
    <mo>+</mo>
    <mn>2</mn>
    <mo stretchy="false">[</mo>
    <mi>y</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">]</mo>
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>0</mn>
</math>

At this point we can drop the <math><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> part as it was only in the problem to help with the differentiation process. The final step is to simply solve the resulting equation for <math><msup><mi>y</mi><mo>′</mo></msup></math>.
 
<math display="block">
    <mn>2</mn>
    <mi>x</mi>
    <mo>+</mo>
    <mn>2</mn>
    <mi>y</mi>
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mn>0</mn>
  </math>
  <math display="block">
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mo>−</mo>
    <mfrac>
      <mi>x</mi>
      <mi>y</mi>
    </mfrac>
</math>

Unlike the first example we can’t just plug in for <math><mi>y</mi></math> since we wouldn’t know which of the two functions to use. Most answers from implicit differentiation will involve both <math><mi>x</mi></math> and <math><mi>y</mi></math> so don’t get excited about that when it happens.



<style>
mi { 
  font-size: 20px;
}

mn {
  font-size: 20px;
}

mo {
  font-size: 20px;
}
</style>