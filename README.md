# The Coding Quiz Psuedo Code for now

## Create a JavaScript quiz on the fundementals
---

### Start button that begins timer and generates Questions and Answers
- Create start button ✅
- Create a countdown timer ✅
- Create list of questions in a seperate file ✅
- Create a function that generates questions and answers ✅
- Maybe generate questions at random? (If time permits)

### When clicking an answer, show right or wrong then produce next question
- OnClick event for right and wrong buttons
- innerHTML updated when answer clicked depending if right or wrong
- Proceed to need question when a choice is made.

### When answer clicked is incorrect, reduce time on timer
- Reduced the timer by a set amount when a wrong answer is chosen

### When all questions are answered or time reaches 0 then show end game and go to new page where player can enter initials and save their score
- If all questions are answered and there is time left over, capture the time in local storage.
- If time reaches zero then show a You Lose screen without the ability of placing your high score.
- When player beats the timer, allow the player to place their initials and save it via local storage and show it on page.