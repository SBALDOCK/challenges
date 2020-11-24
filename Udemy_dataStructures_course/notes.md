## What is an algorithm?

- A process or set of steps to accomplish a certain task

### How do you improve?

- **Devise a plan for solving problems**

  - **Understand the problem**

    - Can I restate the problem in my own words?
    - What are the inputs that go into the problem?
    - What are the outputs that should come from the solution to the problem?
    - Can the outputs be determined from the inputs? Do we have enough information to solve the problem?
    - How should I label the important pieces of data that are a part of the problem?

  - **Explore concrete examples**

    - Start with simple examples
      - Actually write these down
    - Progress to more complex examples
    - Explore edge cases - Empty inputs & invalid inputs

  - **Break it down**

    - Explicitly write out the steps you need to take
    - Forces you to think about the code you'll write before you write it and catch lingering questions

  - **Solve/Simplify**

    - Solve the problem if you can
    - If you can't, solve a simpler problem that is similar
    - Often times, solving this will give insight into solving the more complex problem
    - Find the core difficulty in what you're trying to do
    - Temporarily ignore the difficulty and write a simplified solution
    - Return to the difficulty and incorporate it into the solution

  - **Look Back and Refactor**
    - Can you check the result?
    - Can you derive the result differently?
    - Can you understand it at a glance?
    - Can you use the result or method for some other problem?
    - Can you improve the performance of your solution?
    - Can you think of other ways to refactor?
    - How have other people solved this problem?

### Master common problem solving patterns

- **Frequency Counter**
  - Use an object to collect values/frequencies of values
  - This can often avoid the need for nested loops or O(n^2) operations with arrays/strings
  - A way of breaking down the contents of an array or string and quickly compare it to another object broken down like comparing two arrays by placing them into objects
- **Multiple Pointers**
  - Create pointers or values that correspond to an index or position and then move based on a certain condition

* **Sliding Window**

  - Depending on a certain condition, the window either increases or closes (and a new window is created)

* **Divide and Conquer**
