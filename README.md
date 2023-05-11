# Calculator-Odin-Project
Objectives
Create a calculator with HTML CSS and JS
 create three variables for storing operator & 2 operands
 should perform maths operation on only 2 operands at a time
 should create a function called operate () that takes in 2 operands and 1operator and returns the result.
 Create a display area to display the pressed numbers and operator.
 On pressing"=" should be able to update the answer to display area.
 Pressing = before entering all of the numbers or an operator could cause problems!
 on pressing clear should 1. clear the display
                          2. bring the calcultor to start anew
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!


Output:
1. Display pressed numbers & operator
 a. 1st pressed no must be displayed at Right Bottom.
 b. 1st ooerator must be displayed at the place of 1st number & 1st number must move one place forward.
 c once second number is pressed both 1st num & operator must move to Right Top in same order. and 2nd num takes their place at Right Bottom
2.once 1st operation is completed display the result in the place of 2nd num & move 2nd numto Right Top and move forward 1st num & operator.
3.On the press of a operator after 2nd num 1. Replace 1st opertion @ Right Top & move the result                                        followed by operator there.
                                           2. Keep displaying the result @ Right Bottom aswell.
4.On pressing num again rerplace Result with this number. 
4a. now screen will look like in step 1.b & will loop till step 4  

output code steps

create calc like drawing on the webpage by using 
1. a container <div> to hold the calc at the center
   b use appropriate padding to place calc at center.
   
2. use a <div> as calc to hold a screen, num & operator buttons
3. screen: use a <div> to hold diplayed nums ..etc
           split that <div> by adding two <p> in block dirction
           by updating .innerText of 2 <p> we can display the outputs in the way specified above.
          default value of 1<p> should 0 so it will apear on the screen initialy
           

Input:
click on num buttons to input numbers
"" ""       ""       to input operators
click on "=" to get result of thr operation.
click on an opertor 2nd time, after 2nd num to get 1. result of 1st operation 
                                                   2.assign the result as 1st num in a                                                    new opertion.
click on an opertor 2nd time imidieately after 1st operator will do nothing.
cliking a num imediately after 2nd opertor will show result and coresponding 2nd operation.

Animation in input
1. buttons on hover must change color to a lighter shade.
2. on clicking must apear to go down and up.


Input code steps

create buttons and assign id to access it in dom js
the buttons should have custom data attributes holding corresponding values
create click event listeners on all the the buttons
create an event handler function for buttons that 
         1.assigns the this.data-value to the num1 variable (inturn updates .innerText of <p> inside display). by passing it as an argument to an assginment function.
         
         Assignment function
         pirpose: assigns values to num1, num2, opr.
         
         logic: number can contain multiple chars, the end is signified by an Arithmatic operator or "="
         
         1. when num is passed from callback
          a.check if its a numeric or operator(nan)
          if its number add it to num1 in place 
          for next ADDit to num2 by way of toggle or implement a counter insde this block
          After 1st operation assign rresult to num1 and alwasys a
          let result= operate.[opr] (num1,num2)
          update result to <p> lower
          update <p> upper with operations
          
          
          state1 : lowerscreen: num set    Trigger: typeing of first num End:typing of operator
          
          state2 : lowerscreen num set "+" Trigger: typing of operator End: typeing of first num 2nd charset 
          
          state3 : upperscreen : num set "+" 
                   lowerscreen : 2nd numset Trigger:typeing of first num 2nd charset End:typing of operator
          state 4: upperscreen : num set "+" 2nd numset 
                   lowerscreen : result1  "+" Trigger: typing of operator End: typeing of first num 3nd charset
          state 5: upperscreen : result1  "+" 
                   lowerscreen : 3rd charset Trigger: typeing of first num 3nd charset End: typing of operator 
          state 6: upperscreen : result1 "+" 3rd numset 
                   lowerscreen : result2  "+" Trigger: typing of operator End: typeing of first num 4th charset
          state 7: upperscreen : result2  "+" 
                   lowerscreen : 4th charset Trigger: typeing of first num 4nd charset End: typing of operator
                   
                   
                   
        val display function
        check for op or num
        if val == num true     
        if lowerscreen includes [+, -, *,/,%] {
        upperscreen = lowerscreen;
        lowerscreen ="";
        lowerscreen += val
        } 
        val will be + to lowerscreeen
        if val == op(+) true
        add "op" to cv of lowerscreen
        
        if opCount != 0{
         res= operate (lowerscreen, preOp, upperscreen);
         upperscreen += lowerscreen; 
         lowerscreen = res + val;
         
        }
        preOp = val;
        
        
          
once 3 variables get their values hv to perform operations
create a function to perform this operation

Since we cannot assign an operator to a variable in js we do the following
we receieve the operator as a string.
crerate an object with methods named afte operators like "+" which perform coresopnding operations
we use square bracket notation to access the methods on two numeric values 
                                                  1a if avalue is aready in num1 then that gets replaced
                                                                        
   
