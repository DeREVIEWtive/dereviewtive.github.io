Related Rates

# Related Rates
In this section we are going to look at an application of implicit differentiation. For these related rates problems, it’s usually best to just jump right into some problems and see how they work.

## Example 1
Air is being pumped into a spherical balloon at a rate of 5 cm<sup>3</sup>/min. Determine the rate at which the radius of the balloon is increasing when the diameter of the balloon is 20 cm.

### Solution
The first thing that we’llneed to do here is to identify what information that we’ve been given and what we want to find. Before we do that let’s notice that both the volume of the balloon and the radius of the balloon will vary with time and so are really functions of time, i.e. <math><mi>V</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math> and <math><mi>r</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math>.

We know that air is being pumped into the balloon at a rate of 5 cm<sup>3</sup>/min. This is the rate at which the volume is increasing. Recall that rates of change are nothing more than derivatives and so we know that,

<math display="block"><msup><mi>V</mi><mo>′</mo></msup><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mn>5</mn></math>

We want to determine the rate at which the radius is changing. Again, rates are derivatives and so it looks like we want to determine,

<math display="block">
<msup><mi>r</mi><mo>′</mo></msup>
<mo stretchy="false">(</mo>
<mi>t</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mo>?</mo><mspace width="1em" />
<mtext>when</mtext>
<mspace width="1em" />
<mi>r</mi>
<mo stretchy="false">(</mo>
<mi>t</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mfrac><mi>d</mi><mn>2</mn></mfrac>
<mo>=</mo>
<mn>10</mn>
<mtext> cm</mtext>
</math>

Note that we needed to convert the diameter to a radius.
Now that we’ve identified what we have been given and what we want to find we need to relate these two quantities to each other. In this case we can relate the volume and the radius with the formula for the volume of a sphere.

<math display="block"><mi>V</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mrow><mo stretchy="false">[</mo><mi>r</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow><mn>3</mn></msup></math>

As in the previous section when we looked at implicit differentiation, we will typically not use the <math><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math> part of things in the formulas, but since this is the first time through one of these we will do that to remind ourselves that they are really functions of <math><mi>t</mi></math>.

Now we don’t really want a relationship between the volume and the radius. What we really want is a relationship between their derivatives. We can do this by differentiating both sides with respect to <math><mi>t</mi></math>. In other words, we will need to do implicit differentiation on the above formula. Doing this gives,

<math display="block"><msup><mi>V</mi><mo>′</mo></msup><mo>=</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mi>r</mi><mo>′</mo></msup></math>
Note that at this point we went ahead and dropped the <math><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math> from each of the terms. Now all that we need to do is plug in what we know and solve for what we want to find.

<math display="block"><mn>5</mn><mo>=</mo><mn>4</mn><mi>π</mi><mo stretchy="false">(</mo><msup><mn>10</mn><mn>2</mn></msup><mo stretchy="false">)</mo><msup><mi>r</mi><mo>′</mo></msup><mspace width="1em" /><mo>⇒</mo><mspace width="1em" /><msup><mi>r</mi><mo>′</mo></msup><mo>=</mo><mfrac><mn>5</mn><mrow><mn>400</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>80</mn><mi>π</mi></mrow></mfrac><mtext> cm/min</mtext></math>
We can get the units of the derivative by recalling that,
<math display="block"><msup><mi>r</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></math>

The units of the derivative will be the units of the numerator (cm in the previous example) divided by the units of the denominator (min in the previous example). Let’s work some more examples.
  
## Example 2
A 15 foot ladder is resting against the wall. The bottom is initially 10 feet away from the wall and is being pushed towards the wall at a rate of <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> ft/sec. How fast is the top of the ladder moving up the wall 12 seconds after we start pushing?

### Solution

The first thing to do in this case is to sketch picture that shows us what is going on. We’ve defined the distance of the bottom of the ladder from the wall to be <math><mi>x</mi></math> and the distance of the top of the ladder from the floor to be <math><mi>y</mi></math>. Note as well that these are changing with time and so we really should write <math><mi>x</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math> and <math><mi>y</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math>.

However, as is often the case with related rates/implicit differentiation problems we don’t write the <math><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math> part just try to remember this in our heads as we proceed with the problem.

Next, we need to identify what we know and what we want to find. We know that the rate at which the bottom of the ladder is moving towards the wall. This is,
<math display="block"><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></math>

Note as well that the rate is negative since the distance from the wall, <math><mi>x</mi></math>, is decreasing. We always need to be careful with signs with these problems.
We want to find the rate at which the top of the ladder is moving away from the floor.
This is <math><msup><mi>y</mi><mo>′</mo></msup></math>.

Note as well that this quantity should be positive since <math><mi>y</mi></math> will be increasing. As with the first example we first need a relationship between <math><mi>x</mi></math> and <math><mi>y</mi></math>. We can get this using Pythagorean theorem.

<math display="block">
    <msup><mi>x</mi><mn>2</mn></msup>
    <mo>+</mo>
    <msup><mi>y</mi><mn>2</mn></msup>
    <mo>=</mo>
    <msup><mrow><mo stretchy="false">(</mo><mn>15</mn><mo stretchy="false">)</mo></mrow><mn>2</mn></msup>
    <mo>=</mo>
    <mn>225</mn>
</math>

All that we need to do at this point is to differentiate both sides with respect to <math><mi>t</mi></math>, remembering that <math><mi>x</mi></math> and <math><mi>y</mi></math> are really functions of <math><mi>t</mi></math> and so we’ll need to do implicit differentiation. Doing this gives an equation that shows the relationship between the derivatives.

<math display="block">
   <mn>2</mn><mi>x</mi><msup><mi>x</mi><mo>′</mo></msup>
    <mo>+</mo>
    <mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup>
    <mo>=</mo>
    <mn>0</mn>
    <mspace width="2em"></mspace>
    <mrow><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow>
</math>

Next, let’s see which of the various parts of this equation that we know and what we need to find. We know <math><msup><mi>x</mi><mo>′</mo></msup></math> and are being asked to determine <math><msup><mi>y</mi><mo>′</mo></msup></math> so it’s okay that we don’t know that. However, we still need to determine <math><mi>x</mi></math> and <math><mi>y</mi></math>.

Determining <math><mi>x</mi></math> and <math><mi>y</mi></math> is actually fairly simple. We know that initially <math><mi>x</mi><mo>=</mo><mn>10</mn></math> and the end is being pushed in towards the wall at a rate of <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> ft/sec and that we are interested in what has happened after 12 seconds. We know that,

<math display="block">
    <mtext>distance</mtext>
    <mo>=</mo>
    <mtext>rate</mtext>
    <mo>×</mo>
    <mtext>time</mtext>
    <mo>=</mo>
    <mrow><mo>(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>)</></mrow>
    <mo stretchy="false">(</mo><mn>12</mn><mo stretchy="false">)</mo>
    <mo>=</mo>
    <mn>3</mn>
</math>

So, the end of the ladder has been pushed in 3 feet and so after 12 seconds we must have <math><mi>x</mi><mo>=</mo><mn>7</mn></math>. Note that we could have computed this in one step as follows,

<math display="block">
    <mi>x</mi><mo>=</mo><mn>10</mn><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy="false">(</mo><mn>12</mn><mo stretchy="false">)</mo><mo>=</mo><mn>7</mn>
</math>

To find <math><mi>y</mi></math> (after 12 seconds) all that we need to do is reuse the Pythagorean Theorem with the values of <math><mi>x</mi></math> that we just found above.

  <math display="block">
    <mi>y</mi><mo>=</mo><msqrt><mn>225</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></msqrt>
    <mo>=</mo><msqrt><mn>225</mn><mo>−</mo><mn>49</mn></msqrt>
    <mo>=</mo><msqrt><mn>176</mn></msqrt>
</math>

Now all that we need to do is plug into (1) and solve for <math><msup><mi>y</mi><mo>′</mo></msup></math>.

<math display="block">
    <mn>2</mn><mo stretchy="false">(</mo><mn>7</mn><mo stretchy="false">)</mo>
    <mrow><mo>(</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>)</></mrow>
    <mo>+</mo>
    <mn>2</mn><mo stretchy="false">(</mo><msqrt><mn>176</mn></msqrt><mo stretchy="false">)</mo><msup><mi>y</mi><mo>′</mo></msup>
    <mo>=</mo><mn>0</mn>
    <mspace width="1em" /><mo>⇒</mo><mspace width="1em" />
    <msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>7</mn><mo>/</mo><mn>4</mn></mrow><msqrt><mn>176</mn></msqrt></mfrac>
    <mo>=</mo><mfrac><mn>7</mn><mrow><mn>4</mn><msqrt><mn>176</mn></msqrt></mrow></mfrac>
    <mo>=</mo><mn>0.1319</mn><mspace width="0.5em" /><mtext>ft/sec</mtext>
</math>

Notice that we got the correct sign for <math><msup><mi>y</mi><mo>′</mo></msup></math>. If we’d gotten a negative value we’d have known that we had made a mistake and we could go back and look for it.

Before working another example, we need to make a comment about the set up of the previous problem. When we labeled our sketch, we acknowledged that the hypotenuse is constant and so just called it 15 ft. A common mistake that students will sometimes make here is to also label the hypotenuse as a letter, say <math><mi>z</mi></math>, in this case.

Well, it’s not really a mistake to label with a letter, but it will often lead to problem down the road. Had we labeled the hypotenuse <math><mi>z</mi></math> then the Pythagorean theorem and its derivative would have been,

<math display="block">
    <msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>z</mi><mn>2</mn></msup>
    <mo>→</mo>
    <mn>2</mn><mi>x</mi><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>z</mi><msup><mi>z</mi><mo>′</mo></msup>
</math>

Again, there is nothing wrong with doing this but it does require that we acknowledge the values of two more quantities, <math><mi>z</mi></math> and <math><msup><mi>z</mi><mo>′</mo></msup></math>. Because <math><mi>z</mi></math> is just the hypotenuse that is clearly <math><mi>z</mi><mo>=</mo><mn>15</mn></math>. The problem that some students then sometimes run into is determining the value of <math><msup><mi>z</mi><mo>′</mo></msup></math>. In this case, we have to remember that because the ladder, and hence the hypotenuse has a fixed length, its length can’t be changing and so <math><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></math>.

Plugging both of these values into the derivative give us same equation that we got in the example but required a little more effort to get to. It would have been easier to just label the hypotenuse 15 to start off with and not have to worry about remembering that <math><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></math>.

When labeling a fixed quantity (the length of the ladder in this example) with a letter it is sometimes easy to forget that it is a fixed quantity and so it’s derivative must be zero. If you don’t remember this, the problem becomes impossible to finish as you will have two unknown quantities that you have to deal with. In any problem were a quantity is fixed and will never over the course of the problem change it is always best to just acknowledge that and label it with its value rather than with a letter.

Of course, if we’d had a sliding ladder that was allowed to change length then we would have to label it with a letter. However, for that kind of problem we would also need some more information in the problem statement in order to actually do the problem. The practice problems in this section have several problems in which all three sides of a right triangle are changing. You should check them out and see if you can work them.

## Example 3
A light is on the top of a 12 ft tall pole and a 5ft 6in tall person is walking away from the pole at a rate of 2 ft/sec.
a) At what rate is the tip of the shadow moving away from the pole when the person is 25 ft from the pole?
b) At what rate is the tip of the shadow moving away from the person when the person is 25 ft from the pole?

### Solution
a) At what rate is the tip of the shadow moving away from the pole when the person is 25 ft from the pole?

Let <math><msub><mi>x</mi><mi>p</mi></msub></math> be the distance of the person from the pole and <math><mi>x</mi></math> be the distance of the tip of the shadow from the pole. We are given <math><msubsup><mi>x</mi><mi>p</mi><mo>′</mo></msubsup><mo>=</mo><mn>2</mn></math> ft/sec and we want to find <math><msup><mi>x</mi><mo>′</mo></msup></math> when <math><msub><mi>x</mi><mi>p</mi></msub><mo>=</mo><mn>25</mn></math>.

By using similar triangles, we have two triangles. The large triangle has height 12 (the pole) and base <math><mi>x</mi></math> (distance from pole to tip of shadow). The smaller triangle has height 5.5 (the person) and base <math><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>p</mi></msub></math> (the length of the shadow).

The relationship from similar triangles is:

<math display="block"><mfrac><mn>12</mn><mi>x</mi></mfrac><mo>=</mo><mfrac><mn>5.5</mn><mrow><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>p</mi></msub></mrow></mfrac></math>
Now we solve for <math><mi>x</mi></math>.

<math display="block">
    <mn>12</mn><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>p</mi></msub><mo stretchy="false">)</mo><mo>=</mo><mn>5.5</mn><mi>x</mi>
</math>

<math display="block">
    <mn>12</mn><mi>x</mi><mo>−</mo><mn>12</mn><msub><mi>x</mi><mi>p</mi></msub><mo>=</mo><mn>5.5</mn><mi>x</mi>
</math>

<math display="block">
    <mn>6.5</mn><mi>x</mi><mo>=</mo><mn>12</mn><msub><mi>x</mi><mi>p</mi></msub>
</math>

<math display="block">
    <mi>x</mi><mo>=</mo><mfrac><mn>12</mn><mn>6.5</mn></mfrac><msub><mi>x</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>24</mn><mn>13</mn></mfrac><msub><mi>x</mi><mi>p</mi></msub>
</math>

Now, we differentiate with respect to time <math><mi>t</mi></math>.

<math display="block">
   <msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mfrac><mn>24</mn><mn>13</mn></mfrac><msubsup><mi>x</mi><mi>p</mi><mo>′</mo></msubsup>
</math>

We are given <math><msubsup><mi>x</mi><mi>p</mi><mo>′</mo></msubsup><mo>=</mo><mn>2</mn></math> ft/sec. Plugging this in:

<math display="block">
    <msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mfrac><mn>24</mn><mn>13</mn></mfrac><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>48</mn><mn>13</mn></mfrac><mo>≈</mo><mn>3.6923</mn><mtext> ft/sec</mtext>
</math>

The tip of the shadow is moving away from the pole at a rate of 3.6923 ft/sec. Notice that this rate is independent of the person's distance from the pole.

b) At what rate is the tip of the shadow moving away from the person when the person is 25 ft from the pole?

This is asking for the rate of change of the length of the shadow. Let the length of the shadow be <math><msub><mi>x</mi><mi>s</mi></msub><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>p</mi></msub></math>. We want to find <math><msubsup><mi>x</mi><mi>s</mi><mo>′</mo></msubsup></math>. Differentiating this equation gives:

<math display="block">
    <msubsup><mi>x</mi><mi>s</mi><mo>′</mo></msubsup><mo>=</mo><msup><mi>x</mi><mo>′</mo></msup><mo>−</mo><msubsup><mi>x</mi><mi>p</mi><mo>′</mo></msubsup>
</math>

From part (a), we know <math><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mfrac><mn>48</mn><mn>13</mn></mfrac></math> and we are given <math><msubsup><mi>x</mi><mi>p</mi><mo>′</mo></msubsup><mo>=</mo><mn>2</mn></math>. So,

<math display="block">
    <msubsup><mi>x</mi><mi>s</mi><mo>′</mo></msubsup><mo>=</mo><mfrac><mn>48</mn><mn>13</mn></mfrac><mo>−</mo><mn>2</mn><mo>=</mo><mfrac><mn>48</mn><mn>13</mn></mfrac><mo>−</mo><mfrac><mn>26</mn><mn>13</mn></mfrac><mo>=</mo><mfrac><mn>22</mn><mn>13</mn></mfrac><mo>≈</mo><mn>1.6923</mn><mtext> ft/sec</mtext>
</math>

The length of the shadow is increasing at a rate of 1.6923 ft/sec.

<style>
mi { 
  font-size: 24px;
}

mo {
  font-size: 19px;
}
</style>