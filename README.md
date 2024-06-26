# React - Calling functional components as functions and nesting Components
an example of why calling react components as functions can be bad


React tells us to "Never call component functions directly".
The React docs count a few reasons why we shouldn't do that but none of them was clear enough for me to understand the reason behind that constraint.

I also couldn't find any reference to "how react handles creation of nested components inside a react component" but that always seemed a bit off to me.

With these two questions in mind i went to investigate.

### requirements
1. docker engine
2. docker compose
3. react dev tools

This was my starting point - [repo](https://github.com/zukofett/react-component-as-function/tree/main)
a simple app with 3 counters and a display of total times clicked on any counter.
Each time i'll change something in the code i'll change the branch i'm working on and will notify you with '> <branch>'

in order to run the app, just type
```bash
docker compose up
```

> main

as you can see, the app does nothing special.
lets add a little description of the app.

> phase_1

That works as intended. 
I've created a clean component that i don't need anywhere else but a one that need to know the total, i'ts a simple component so i just nested it inside my app component. 
let's take it to the next level

> phase_2

nice. now i can see the weekday, and have a new bug.
the total is incremented on each click but the new shiny counter doesn't display the number of clicks anymore.

This bug happens because we recreate the counter declared inside the App component every time App updates.
the components is then created with a new state each time.

So why doesn't the Description components suffer from the same problem?
Description actually suffer from the same issue, 
it gets recreated each time (which seems minor in that case).
because it is declared inside App, react can't know the component hasn't change and need to recreate it and remount it.

Let's fix the problem

> phase_3

nice, it works again. or is it?
if we will check our dev tools we will see that the CounterWithDay component is not there anymore. 
because i wasn't called as a react component, react doesn't know it exists and performs diff only on it's output. 
This doesn't change the fact that the component is recreated each time.
the only reason it works is that react compares the JSX to the previous render.
because nothing has changed, nothing gets remounted.
