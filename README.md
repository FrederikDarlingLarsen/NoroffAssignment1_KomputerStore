# NoroffAssignment1_KomputerStore

The purpose of this assignment was to practice the fundamentals of JavaScript for frontend development. The focus here was more on the functionality and the logic of the system more so than the styling.

**The application is hosted at:** https://frederikdarlinglarsen.github.io/NoroffAssignment1_KomputerStore/

## My solution

For my solution I decided to go with my own simple design with css. In the first round of implementation I did not take into account the use of modules which caused some issues with accessing global variables, when modules were attempted. This was fixed by storing all global variables in an object that was then exported and imported into the other modules using the variables.

## Description

The application is seperated into 3 parts. The bank, work and laptops.

In the bank the user is able to get a loan by pressing the "get loan" button. The user can only get a loan if the attempted loan is less than or equal to double the balance in the bank.

In work the user is able the earn money by "working", by pressing the "work" button. This will reward the user with 100 DKK. The user can then transfer their earnings to their bank account by pressing the "bank" button. If the user has a loan and presses the "bank" button, 10% of the earnings will automatically go towards the loan with the remainder going to the balance. The "repay loan" button also appears if the user currently has a loan. Pressing this button will transfer all of the earnings towards the loan.

In the laptop section, the user can buy different laptops if their balance is the same or larger than the price of the laptop. If the user can not afford the laptop the user is promted with a message telling them that they can not afford it. Before deciding to buy a laptop the user is able to view some infromation about the laptop, like the amount of RAM and processing power.
