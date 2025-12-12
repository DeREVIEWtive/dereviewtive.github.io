Trigonometric Functions

# Derivatives of Trigonometric Functions
This part is going to be about the derivatives of functions that aren't polynomials or roots of polynomials. We will begin this process by examining the derivatives of the six trigonometric functions. Two of the derivatives will be calculated. 

The other four are up to you and will adhere to similar proofs for the two provided here.

Prior to delving into the derivatives of trigonometric functions, we must present a few limits that will appear in the derivation of two specific derivatives
## Fact
<math display="block">
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>θ</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mi>θ</mi>
      </mrow>
      <mi>θ</mi>
    </mfrac>
    <mo>=</mo>
    <mn>1</mn>
    <mspace width="2em" />
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>θ</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>cos</mi>
        <mi>θ</mi>
        <mo>−</mo>
        <mn>1</mn>
      </mrow>
      <mi>θ</mi>
    </mfrac>
    <mo>=</mo>
    <mn>0</mn>
</math>

Before proceeding a quick note. Students often ask why we always use radians in a Calculus class. This is the reason why! The proof of the formula involving sine above requires the angles to be in radians. If the angles are in degrees the limit involving sine is not 1 and so the formulas we will derive below would also change. 

The formulas below would pick up an extra constant that would just get in the way of our work and so we use radians to avoid that. So, remember to always use radians in a Calculus class!

Before we start differentiating trig functions let’s work a quick set of limit problems that this fact now allows us to do.

## Example 1 (Limits)
a) <math><munder><mo>lim</mo><mrow><mi>θ</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>sin</mi><mi>θ</mi></mrow><mrow><mn>6</mn><mi>θ</mi></mrow></mfrac></math>

### Solution
There really isn’t a whole lot to this limit. In fact, it’s only here to contrast with the next example so you can see the difference in how these work. In this case since there is only a 6 in the denominator we’ll just factor this out and then use the fact.

<math display="block">
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>θ</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mi>θ</mi>
      </mrow>
      <mrow>
        <mn>6</mn>
        <mi>θ</mi>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mn>6</mn>
    </mfrac>
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>θ</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mi>θ</mi>
      </mrow>
      <mi>θ</mi>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mn>6</mn>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mn>1</mn>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mn>6</mn>
    </mfrac>
</math>
b) <math><munder><mo>lim</mo><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>sin</mi><mo stretchy="false">(</mo><mn>6</mn><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac></math>

### Solution
Now, in this case we can’t factor the 6 out of the sine so we’re stuck with it there and we’ll need to figure out a way to deal with it. To do this problem we need to notice that in the fact the argument of the sine is the same as the denominator (i.e. both <math><mi>θ</mi></math>’s). So we need to get both of the argument of the sine and the denominator to be the same. We can do this by multiplying the numerator and the denominator by 6 as follows.
   
<math display="block">
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>x</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mn>6</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>x</mi>
    </mfrac>
    <mo>=</mo>
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>x</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mn>6</mn>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mn>6</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mrow>
        <mn>6</mn>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mn>6</mn>
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>x</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mn>6</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mrow>
        <mn>6</mn>
        <mi>x</mi>
      </mrow>
    </mfrac>
</math>

Note that we factored the 6 in the numerator out of the limit. At this point, while it may not look like it, we can use the fact above to finish the limit.

To see that we can use the fact on this limit let’s do a change of variables. A change of
variables is really just a renaming of portions of the problem to make something look more like something we know how to deal with. They can’t always be done, but sometimes, such as this case, they can simplify the problem. The change of variables here is to let <math><mi>θ</mi><mo>=</mo><mn>6</mn><mi>x</mi></math> and then notice that as <math><mi>x</mi><mo>→</mo><mn>0</mn></math> we also have <math><mi>θ</mi><mo>→</mo><mn>6</mn><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></math>. When doing a change of variables in a limit we need to change all the <math><mi>x</mi></math>’s into <math><mi>θ</mi></math>’s and that includes the one in the limit.
Doing the change of variables on this limit gives,

<math display="block">
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>x</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mn>6</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>x</mi>
    </mfrac>
    <mo>=</mo>
    <mn>6</mn>
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>x</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mn>6</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mrow>
        <mn>6</mn>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mover>
      <mo>=</mo>
      <mrow>
        <mi>let</mi>
        <mspace width="0.5em" />
        <mi>θ</mi>
        <mo>=</mo>
        <mn>6</mn>
        <mi>x</mi>
      </mrow>
    </mover>
    <mn>6</mn>
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>θ</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>θ</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>θ</mi>
    </mfrac>
    <mo>=</mo>
    <mn>6</mn>
    <mo stretchy="false">(</mo>
    <mn>1</mn>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>6</mn>
</math>

And there we are. Note that we didn’t really need to do a change of variables here. All we really need to notice is that the argument of the sine is the same as the denominator and then we can use the fact. A change of variables, in this case, is really only needed to make it clear that the fact does work.

c) <math><munder><mo>lim</mo><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mi>x</mi><mrow><mi>sin</mi><mo stretchy="false">(</mo><mn>7</mn><mi>x</mi><mo stretchy="false">)</mo></mrow></mfrac></math>

### Solution
In this case we appear to have a small problem in that the function we’re taking the limit of here is upside down compared to that in the fact. This is not the problem it appears to be once we notice that,

<math display="block">
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mn>7</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mfrac>
        <mrow>
          <mi>sin</mi>
          <mo stretchy="false">(</mo>
          <mn>7</mn>
          <mi>x</mi>
          <mo stretchy="false">)</mo>
        </mrow>
        <mi>x</mi>
      </mfrac>
    </mfrac>
</math>

and then all we need to do is recall a nice property of limits that allows us to do,

<math display="block">
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>x</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mn>7</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>x</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mn>1</mn>
      <mfrac>
        <mrow>
          <mi>sin</mi>
          <mo stretchy="false">(</mo>
          <mn>7</mn>
          <mi>x</mi>
          <mo stretchy="false">)</mo>
        </mrow>
        <mi>x</mi>
      </mfrac>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <munder>
          <mo>lim</mo>
          <mrow>
            <mi>x</mi>
            <mo>→</mo>
            <mn>0</mn>
          </mrow>
        </munder>
        <mn>1</mn>
      </mrow>
      <mrow>
        <munder>
          <mo>lim</mo>
          <mrow>
            <mi>x</mi>
            <mo>→</mo>
            <mn>0</mn>
          </mrow>
        </munder>
        <mfrac>
          <mrow>
            <mi>sin</mi>
            <mo stretchy="false">(</mo>
            <mn>7</mn>
            <mi>x</mi>
            <mo stretchy="false">)</mo>
          </mrow>
          <mi>x</mi>
        </mfrac>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <munder>
          <mo>lim</mo>
          <mrow>
            <mi>x</mi>
            <mo>→</mo>
            <mn>0</mn>
          </mrow>
        </munder>
        <mfrac>
          <mrow>
            <mi>sin</mi>
            <mo stretchy="false">(</mo>
            <mn>7</mn>
            <mi>x</mi>
            <mo stretchy="false">)</mo>
          </mrow>
          <mi>x</mi>
        </mfrac>
      </mrow>
    </mfrac>
</math>

With a little rewriting we can see that we do in fact end up needing to do a limit like the one we did in the previous part. So, let’s do the limit here and this time we won’t bother with a change of variable to help us out. All we need to do is multiply the numerator and denominator of the fraction in the denominator by 7 to get things set up to use the fact. Here is the work for this limit.

<math display="block">
    <munder>
      <mo>lim</mo>
      <mrow>
        <mi>x</mi>
        <mo>→</mo>
        <mn>0</mn>
      </mrow>
    </munder>
    <mfrac>
      <mi>x</mi>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mn>7</mn>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <munder>
          <mo>lim</mo>
          <mrow>
            <mi>x</mi>
            <mo>→</mo>
            <mn>0</mn>
          </mrow>
        </munder>
        <mfrac>
          <mrow>
            <mn>7</mn>
            <mi>sin</mi>
            <mo stretchy="false">(</mo>
            <mn>7</mn>
            <mi>x</mi>
            <mo stretchy="false">)</mo>
          </mrow>
          <mrow>
            <mn>7</mn>
            <mi>x</mi>
          </mrow>
        </mfrac>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mn>7</mn>
        <munder>
          <mo>lim</mo>
          <mrow>
            <mi>x</mi>
            <mo>→</mo>
            <mn>0</mn>
          </mrow>
        </munder>
        <mfrac>
          <mrow>
            <mi>sin</mi>
            <mo stretchy="false">(</mo>
            <mn>7</mn>
            <mi>x</mi>
            <mo stretchy="false">)</mo>
          </mrow>
          <mrow>
            <mn>7</mn>
            <mi>x</mi>
          </mrow>
        </mfrac>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mo stretchy="false">(</mo>
        <mn>7</mn>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">(</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mn>7</mn>
    </mfrac>
</math>

Okay, now that we’ve gotten this set of limit examples out of the way let’s get back to the main point of this section, differentiating trig functions.

We’ll start with finding the derivative of the sine function. To do this we will need to use the definition of the derivative. It’s been a while since we’ve had to use this, but sometimes there just isn’t anything we can do about it. Here is the definition of the derivative for the sine function.

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
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
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo>+</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>h</mi>
    </mfrac>
</math>

Since we can’t just plug in <math><mi>h</mi><mo>=</mo><mn>0</mn></math> to evaluate the limit we will need to use the following trig formula on the first sine in the numerator.

<math display="block">
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo>+</mo>
    <mi>h</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>h</mi>
    <mo stretchy="false">)</mo>
    <mo>+</mo>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>h</mi>
    <mo stretchy="false">)</mo>
</math>

Doing this gives us,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
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
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>h</mi>
    </mfrac>
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
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">(</mo>
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>h</mi>
    </mfrac>
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
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">(</mo>
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <mn>1</mn>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>h</mi>
    </mfrac>
    <mo>+</mo>
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
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>h</mi>
    </mfrac>
</math>

As you can see upon using the trig formula we can combine the first and third term and then factor a sine out of that. We can then break up the fraction into two pieces, both of which can be dealt with separately.
Now, both of the limits here are limits as <math><mi>h</mi></math> approaches zero. In the first limit we have a <math><mi>sin</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math> and in the second limit we have a <math><mi>cos</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>. Both of these are only functions of <math><mi>x</mi></math> only and as <math><mi>h</mi></math> moves in towards zero this has no effect on the value of <math><mi>x</mi></math>. Therefore, as far as the limits are concerned, these two functions are constants and can be factored out of their respective limits. Doing this gives,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
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
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <mn>1</mn>
      </mrow>
      <mi>h</mi>
    </mfrac>
    <mo>+</mo>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
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
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>h</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mi>h</mi>
    </mfrac>
</math>

At this point all we need to do is use the limits in the fact above to finish out this problem.

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">(</mo>
    <mn>0</mn>
    <mo stretchy="false">)</mo>
    <mo>+</mo>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">(</mo>
    <mn>1</mn>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
</math>

Differentiating cosine is done in a similar fashion. It will require a different trig formula, but other than that is an almost identical proof. The details will be left to you. When done with the proof you should get,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mo>−</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
</math>

With these two out of the way the remaining four are fairly simple to get. All the remaining four trig functions can be defined in terms of sine and cosine and these definitions, along with appropriate derivative rules, can be used to get their derivatives.
Let’s take a look at tangent. Tangent is defined as,

<math display="block">
    <mi>tan</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mrow>
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
</math>

Now that we have the derivatives of sine and cosine all that we need to do is use the quotient rule on this. Let’s do that.

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>tan</mi>
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
    <mrow>
      <mo>(</mo>
      <mfrac>
        <mrow>
          <mi>sin</mi>
          <mo stretchy="false">(</mo>
          <mi>x</mi>
          <mo stretchy="false">)</mo>
        </mrow>
        <mrow>
          <mi>cos</mi>
          <mo stretchy="false">(</mo>
          <mi>x</mi>
          <mo stretchy="false">)</mo>
        </mrow>
      </mfrac>
      <mo>)</mo>
    </mrow>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mi>cos</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo>−</mo>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">(</mo>
        <mo>−</mo>
        <mi>sin</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo stretchy="false">)</mo>
      </mrow>
      <msup>
        <mrow>
          <mo stretchy="false">(</mo>
          <mi>cos</mi>
          <mo stretchy="false">(</mo>
          <mi>x</mi>
          <mo stretchy="false">)</mo>
          <mo stretchy="false">)</mo>
        </mrow>
        <mn>2</mn>
      </msup>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <msup>
          <mi>cos</mi>
          <mn>2</mn>
        </msup>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mo>+</mo>
        <msup>
          <mi>sin</mi>
          <mn>2</mn>
        </msup>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mrow>
        <msup>
          <mi>cos</mi>
          <mn>2</mn>
        </msup>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
</math>

Now, recall that <math><msup><mi>cos</mi><mn>2</mn></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>+</mo><msup><mi>sin</mi><mn>2</mn></msup><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn></math> and if we also recall the definition of secant in terms of cosine we arrive at,

<math display="block">
    <mfrac>
      <mi>d</mi>
      <mrow>
        <mi>d</mi>
        <mi>x</mi>
      </mrow>
    </mfrac>
    <mo stretchy="false">(</mo>
    <mi>tan</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <msup>
          <mi>cos</mi>
          <mn>2</mn>
        </msup>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <msup>
      <mi>sec</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
</math>

The remaining three trig functions are also quotients involving sine and/or cosine and so can be differentiated in a similar manner. We’ll leave the details to you. Here are the derivatives of all six of the trig functions.
  
## Derivatives of the six trigonometric functions
<math>
      <mfrac>
        <mi>d</mi>
        <mrow>
          <mi>d</mi>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo stretchy="false">(</mo>
      <mi>sin</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mi>cos</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
</math>
<math>
      <mfrac>
        <mi>d</mi>
        <mrow>
          <mi>d</mi>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo stretchy="false">(</mo>
      <mi>cos</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mo>−</mo>
      <mi>sin</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</>
</math>
<math>
      <mfrac>
        <mi>d</mi>
        <mrow>
          <mi>d</mi>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo stretchy="false">(</mo>
      <mi>tan</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <msup>
        <mi>sec</mi>
        <mn>2</mn>
      </msup>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</>
</math>
<math>
      <mfrac>
        <mi>d</mi>
        <mrow>
          <mi>d</mi>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo stretchy="false">(</mo>
      <mi>cot</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mo>−</mo>
      <msup>
        <mi>csc</mi>
        <mn>2</mn>
      </msup>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</>
</math>
<math>
      <mfrac>
        <mi>d</mi>
        <mrow>
          <mi>d</mi>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo stretchy="false">(</mo>
      <mi>sec</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mi>sec</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mi>tan</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</>
</math>
<math>
      <mfrac>
        <mi>d</mi>
        <mrow>
          <mi>d</mi>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo stretchy="false">(</mo>
      <mi>csc</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mo stretchy="false">)</mo>
      <mo>=</mo>
      <mo>−</mo>
      <mi>csc</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</mo>
      <mi>cot</mi>
      <mo stretchy="false">(</mo>
      <mi>x</mi>
      <mo stretchy="false">)</>
</math> 

At this point we should work some examples.

## Example 2
a) <math><mi>g</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mi>sec</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>−</mo><mn>10</mn><mi>cot</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>

### Solution
There really isn’t a whole lot to this problem. We’ll just differentiate each term using the formulas from above.

<math display="block">
    <msup>
      <mi>g</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>3</mn>
    <mi>sec</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mi>tan</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>−</mo>
    <mn>10</mn>
    <mo stretchy="false">(</mo>
    <mo>−</mo>
    <msup>
      <mi>csc</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>3</mn>
    <mi>sec</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mi>tan</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>+</mo>
    <mn>10</mn>
    <msup>
      <mi>csc</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
</math>

b) <math><mi>h</mi><mo stretchy="false">(</mo><mi>w</mi><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><msup><mi>w</mi><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo>−</mo><msup><mi>w</mi><mn>2</mn></msup><mi>tan</mi><mo stretchy="false">(</mo><mi>w</mi><mo stretchy="false">)</mo></math>
  
### Solution
In this part we will need to use the product rule on the second term and note that we really will need the product rule here. There is no other way to do this derivative unlike what we saw when we first looked at the product rule. When we first looked at the product rule the only functions we knew how to differentiate were polynomials and in those cases all we really needed to do was multiply them out and we could take the derivative without the product rule. We are now getting into the point where we will be forced to do the product rule at times regardless of whether or not we want to.
We will also need to be careful with the minus sign in front of the second term and make sure that it gets dealt with properly. There are two ways to deal with this. One way it to make sure that you use a set of parentheses as follows,

<math display="block">
    <msup>
      <mi>h</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>w</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mo>−</mo>
    <mn>12</mn>
    <msup>
      <mi>w</mi>
      <mrow>
        <mo>−</mo>
        <mn>5</mn>
      </mrow>
    </msup>
    <mo>−</mo>
    <mo stretchy="false">(</mo>
    <mn>2</mn>
    <mi>w</mi>
    <mi>tan</mi>
    <mo stretchy="false">(</mo>
    <mi>w</mi>
    <mo stretchy="false">)</mo>
    <mo>+</mo>
    <msup>
      <mi>w</mi>
      <mn>2</mn>
    </msup>
    <msup>
      <mi>sec</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>w</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mo>−</mo>
    <mn>12</mn>
    <msup>
      <mi>w</mi>
      <mrow>
        <mo>−</mo>
        <mn>5</mn>
      </mrow>
    </msup>
    <mo>−</mo>
    <mn>2</mn>
    <mi>w</mi>
    <mi>tan</mi>
    <mo stretchy="false">(</mo>
    <mi>w</mi>
    <mo stretchy="false">)</mo>
    <mo>−</mo>
    <msup>
      <mi>w</mi>
      <mn>2</mn>
    </msup>
    <msup>
      <mi>sec</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>w</mi>
    <mo stretchy="false">)</mo>
</math>

Because the second term is being subtracted off of the first term then the whole derivative of the second term must also be subtracted off of the derivative of the first term. The parenthesis make this idea clear.
A potentially easier way to do this is to think of the minus sign as part of the first function in the product. Or, in other words the two functions in the product, using this idea, are <math><mo>−</mo><msup><mi>w</mi><mn>2</mn></msup></math> and <math><mi>tan</mi><mo stretchy="false">(</mo><mi>w</mi><mo stretchy="false">)</mo></math>. Doing this gives,

<math display="block">
    <msup>
      <mi>h</mi>
      <mo>′</mo>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>w</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mo>−</mo>
    <mn>12</mn>
    <msup>
      <mi>w</mi>
      <mrow>
        <mo>−</mo>
        <mn>5</mn>
      </mrow>
    </msup>
    <mo>−</mo>
    <mn>2</mn>
    <mi>w</mi>
    <mi>tan</mi>
    <mo stretchy="false">(</mo>
    <mi>w</mi>
    <mo stretchy="false">)</mo>
    <mo>−</mo>
    <msup>
      <mi>w</mi>
      <mn>2</mn>
    </msup>
    <msup>
      <mi>sec</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>w</mi>
    <mo stretchy="false">)</mo>
</math>

So, regardless of how you approach this problem you will get the same derivative.


c) <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>sin</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mi>cos</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><mi>csc</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></math>

### Solution
As with the previous part we’ll need to use the product rule on the first term. We will also think of the 5 as part of the first function in the product to make sure we deal with it correctly. Alternatively, you could make use of a set of parentheses to make sure the 5 gets dealt with properly. Either way will work, but we’ll stick with thinking of the 5 as part of the first term in the product. Here’s the derivative of this function.

<math display="block">
    <msup>
      <mi>y</mi>
      <mo>′</mo>
    </msup>
    <mo>=</mo>
    <mn>5</mn>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mi>cos</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>+</mo>
    <mn>5</mn>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">(</mo>
    <mo>−</mo>
    <mi>sin</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo stretchy="false">)</mo>
    <mo>−</mo>
    <mn>4</mn>
    <mi>csc</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mi>cot</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>5</mn>
    <msup>
      <mi>cos</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>−</mo>
    <mn>5</mn>
    <msup>
      <mi>sin</mi>
      <mn>2</mn>
    </msup>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mo>−</mo>
    <mn>4</mn>
    <mi>csc</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
    <mi>cot</mi>
    <mo stretchy="false">(</mo>
    <mi>x</mi>
    <mo stretchy="false">)</mo>
</math>

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