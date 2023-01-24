# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* On Click, the dispatch function calls the addOne function from the actions index.
* The actions index returns a type (in this case, ADD_ONE), which is used as the argument for dispatch
* dispatch is the reducer function, which passes in the type and uses the switch/case statement to do the ADD_ONE path
* the ADD_ONE path returns the state, which is the same as it was except the state.total is increased by 1
* TotalDisplay shows the total plus 1.
