# To Do List Manager

A Web Application for securely managing a To Do List

## Business Requirements

The To Do Manager application has the following overall requirements:

* Designed to match the mock-up
  * Header, Main Section Footer
  * Use [React Bootstrap](https://react-bootstrap.github.io/) for styling and visual components
* The header should present the application title and main menu
  * Home Link, which shows the list of To Do Items as noted below
  * A Login/Register/User section
    * When a user is **not logged in**:
      * Show Login and Register links
        * Login: Renders a Login Form
        * Register: Renders a new user registration form
          * Require Fields:: Username, Password, Email, Role
    * When a user **is logged in**:
      * Show “Welcome **username**”
      * Show a “Logout” link
        * When clicked, this should remove any cookies you have set and remove access
* In the “Main” section
  * Nothing should be visible until a user has logged in successfully
  * **The list of items in the to do list**
    * Based on user preferences, show listings in groups of (5, 10, etc) and provide the ability to view multiple “pages” of results
    * Each item in list should show the text of the item as well as the assignee
      * Based on user preferences, hide or show completed items
      * If shown, completed items should be styled differently making their status visually obvious
    * For users with “Update” permissions
      * When an item is clicked, toggle the “complete” status of the item.
    * For users with “Delete” permissions
      * Items should have a delete button associated with them
        * When clicked, remove the item from the list
  * For users with “Create” permissions …
    * **A Form where the user can a new item to the todo list**
      * Items should have the following fields:
        * To Do Item Text
        * Assigned To
        * Status (complete/incomplete)
        * Difficulty (number between 1 and 5)
        * i.e.

                        const todo = mongoose.Schema({
                          text: { type: String, required: true },
                          assignee: { type: String },
                          complete: { type: Boolean, default:false },
                          difficulty: { type: Number, default: 1 },
                        });

### Example

[Live Example](https://todo-list-manager.netlify.app/)

Users/Passwords for example app, each with different permissions:

* admin/ADMIN
* editor/EDITOR
* guest/GUEST

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React
2. ES6 Classes
3. Settings delivered to the application using Context
4. User Login & Permissions delivered to the application using Context
5. Local Storage / Cookies for storing login status
6. Local Storage / Cookies for storing user preferences
7. Superagent or Axios for performing API Requests
8. React Bootstrap for styling
9. Test Driven Development, using Jest
    * Tests will be runnable locally
10. Deployment to cloud provider

## Development Process, Milestones

> At every stage of development, the application should be publicly deployed

1. **Phase 1: Application Setup**
    * Basic To Do List Management, using Hooks
2. **Phase 2: Persistence**
    * Implement a custom Form Hook
    * Implement a custom Ajax Hook
    * Connect to a live API for storing To Do Items
3. **Phase 3: Settings and Global Context**
    * Implement user settings for displaying items
4. **Phase 4: Authorization**
    * Require a login to access the list
    * Restrict access to adding, editing, deleting to certain user types

## Phase 1 Requirements

In Phase 1, we’re going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

* Style the application using the [Blueprint Component API](https://blueprintjs.com/docs/#blueprint){target:\_blank}

* Properly modularize the application into separate components

* Implement the Context API to make some basic application settings available to components

  * How many To Do Items to show at once
  * Whether or not to show completed items

![To Do with Pagination](/code-401-javascript-guide/curriculum/class-31/lab/todo.png)

Technical Requirements / Notes
------------------------------

> Create a settings Context that can define how our components should display elements to the User.

1. Implement the React `context` API for defining `settings` across the entire application.
    * Create a `context` for managing application display settings and provide this at the application level.
    * Display or Hide completed items (boolean).
    * Number of items to display per screen (number).
    * Default sort field (string).
    * Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.
2. Consume and utilize `context` values throughout your components
    * Show a maximum of a certain number of items per screen in the `<List />` component
        * Provide “next” and “previous” links to let the users navigate a long list of items
    * Hide or show completed items in the list
    * Optional: Sort the items based on any of the keys (i.e. difficulty)

> Pagination Notes:

* Only display the first `n` items in the list, where `n` is the number to display per screen in your context.
  * If you have more than `n` items in the list, add a button labeled `Next` that will replace the list with the next `n` items in the list.
  * If you are past the first `n` items (i.e. on page 2 or higher), add a button labeled `Previous` that will replace the list with the previous `n` items in the list.
