#Mocking Stuff

#What are Spies??
A test spy is a function that records arguments, return value, the value of `this` and exception thrown (if any) for all its calls. There are two types of spies: Some are anonymous functions, while others wrap methods that already exist in the system under test.

`var spy = sinon.spy();`