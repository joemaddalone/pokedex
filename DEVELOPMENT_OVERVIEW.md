# Choices and development process.

## Make sure I understand the requirements.

Ask questions as needed.

## Prototype first

Go straight to code.  I often work with UX folks in this fashion and it creates a fast iteration loop before finalizing a design.  We get an early look at edge cases we may not have thought of and can use the prototype as an early preview for other stakeholders.  While I did not introduce ephermal PR deployments in this project it is definitely something I would add in the future to ease this process.

## Identify the tricky "what if the user does crazy thing x?" issues by using the prototype.

Make a list of all the edge cases I can find because I'll forget about them once I am basking in how great it works on my machine.

## Choose the right tools, packages, and libs.  Be prepared to change these choices.

Briefly, my choices where:

React + React Router, Recoil, PostCSS, Jest + react-testing-library, Semantic-ui-react, tachyons, i18next.

* React: Familiar to me and battle tested.
* Recoil: Easy even for those unfamilar with it.
* PostCSS: Coupled with postcss-env-preset we can use future css now.  Actual css!
* Jest + rtl: This is the defacto standard right now. However, I did write a wrapper around rtl because changing testing libraries sucks.
* tachyons: Saves me from a ton of duplicated css.
* Semantic-ui-react: Well documented and extensible.
* i18next: All apps should have i18n.  Here i wrote a quick wrapper around this to make usage much simpler.  I also DID NOT include the related React version of this lib as it clutters the codebase.

There are many other libs installed in the application, but they are mostly either helpers for these primary libs or common to React applications.

I may hate all of these choices later so I have attempted to simplify and wrap their usage where I can.  I'm not "all-in" on any library ever.

## Build a first pass with just the overall layout

I built out the basic grid structure of the application.  Call it pages or containers or whatever, this helps in a few ways.  I can see where things should live both visually and in the codebase.  This gives me a look at some responive issues I may want to consider later and also informs the organization of files within the project.

## Build an api client.

I have no desire to remember complicated endpoints.  So I always do this if there is no api client already in place.  Fetching data from within a component is sometimes neccessary, but it should not feel like you're wrestling with and promises alongside having to hard code urls everywhere.  I want `getPokemonTypes()` - so I made that along with an easy to understand way to add more endpoints.

## Structure a state management system that does not require a degree in immutability.

"Fear of touching the architecture" is a huge problem in web development.  I wanted to avoid this by making sure with a few simple rules the state management could be understood and approachable.  You'll see that almost none of the components in this application concern themseves with an "is it loading or did it fail?".  As an engineer if I am writing a simple component it is disheartening to find that every small change can potentially break the state in some way that I don't understand and seems unrelated.

## Find the common code

Here I wrote code for each primary area of the application without concern for componentizing everything.  Just get it working using the structure in place and tools I have chosen.  From this process I can idenitfy the commonality between these areas and convert those into common components.  I can also revisit my tool choices if needed.

## MVP and iteration

At this point I had a minimum-viable-product.  All the functionality works to a reasonable degree.  I can now zero in on smaller pieces of the code and iterate and continue finding commonalities. Mostly, if I'm typing the same thing over and over at this point it is a strong candidate for a common reusable component.

## Edge cases

Revisit the list of edge cases and solve as many as possible.  Document the elusive ones.

## Polishing

I suck at design so I found a dribbble image I liked and stole it.  The end result here was not a duplication of the design, I iterated on it heavily, but it kick started the design process for me.

## Testing

I do not have 100% code coverage in this project, but I have created the unit tests where I can see others finding it tricky to know exactly how to even write the tests.  Theese should serve as patterns for future tests.  I'll find commonality here as well and abstract that away to make it easier for others to contribute to the testing effort.

## Documentation

I documented various things all along the way, but now I put together a solid README that will serve as a guide for new contributors.  This will be a living document subject to debate and change.

## Hands off your keyboard!

I've documented a number of bug that need fixing and tooling that needs tweaking and features I would like to add to the project in the github repository and there will always be more.  There are probably typos and missed items, but that is the nature of development for me, always iterating, always refining, and relying a team dynamic to help find the proper way forward.  Here is what the issues list looks like as of today:

```
set document.title on each type
#19 opened 36 minutes ago by joemaddalone

Do the ugly fetch api trick for failed images
#18 opened 2 hours ago by joemaddalone

Setup Cypress
#17 opened 2 hours ago by joemaddalone

Introduce css modules
#16 opened 2 hours ago by joemaddalone

Need to capture focus in Modalize
#15 opened 9 hours ago by joemaddalone

TypeNav loading state is not appearing?
#14 opened yesterday by joemaddalone

create a pull request template
#13 opened yesterday by joemaddalone

nav scrollbar looks wierd
#12 opened yesterday by joemaddalone

Add event analytics
#11 opened yesterday by joemaddalone

Add error monitoring
#10 opened yesterday by joemaddalone

placeholder pokeball
#9 opened yesterday by joemaddalone

Fix Popup pointer positions
#8 opened yesterday by joemaddalone

Add ephemeral PR & master deployments
#7 opened 2 days ago by joemaddalone

create an ellipse tooltip component
#6 opened 2 days ago by joemaddalone

animate favoriting
#5 opened 2 days ago by joemaddalone

keyboard navigation not implemented bug
#4 opened 2 days ago by joemaddalone
```
