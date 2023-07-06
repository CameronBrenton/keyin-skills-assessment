# Full Stack Assessment
Thank you for taking the time to participate in the Keyin College Full Stack Practical Assessment. The assessment is designed to help you identify gaps in your skillset and identify areas for improvement.

## Core Requirements
You have been provided with a json file containing recipes and links to images.

Build a Recipes site with the following functionality:
- get random recipes
- create recipe
- update recipe
- delete recipe
- get all recipes
- get recipe by id
- keyword search by recipe title or ingredient
- sort recipes by number of ingredients


### Backend
The following technologies are highly recommended:
- Node.js 18+
- express.js or fastify
- ES Modules or TypeScript
- postgres and Drizzle ORM
- jest or vitest
- dotenv
- eslint


### Front End
Keep the front end simple!

 - React using vite
 - TanStack Query
 - Hooks with React Router
 - React Icons
 - Radix UI
 - Shadcn UI
 - Tailwind CSS
 - eslint
 - vitest


### DevOps
The minimum requirements for DevOps is a publicly available URL or IP address where we can review the output. Remember, if we can't view it, it doesn't exist. Ideally, you will demonstrate the ability to use the following technologies:
 - Virtual Machine (Azure) or Amazon EC2 instance
 - nginx
 - github


## Review Criteria
 - *Does it work?*: i.e. Does your README describe the pre-requisites and steps in order to get your solution running?
 - *Quality* over completeness. Is it easy to understand and maintainable? Have you used a code styling guide? Are you validating your data?
 - *Best Practices*: Have you applied and good software development patterns? e.g. SOLID or techniques such as high cohesion, low coupling.  How clean is the separation between front-end and back-end? Are you using Trunk Based Development or Feature Based Development? Are you committing early and often to the repo or have you only made a single commit? *Hint*: Committing early and often is preferable.
 - *Structure*: Have you broken your code up into logical groupings and folders? 
 - *Technical Trade-offs*: did you have to make any technical trade-offs? If so, give example of the trade-offs and your reasoning behind the trade-offs.
 - *Security*: Are there any obvious vulnerabilities?
 - *Testing*: Have you made practical choices on necessary unit and integration tests? Are your tests atomic?
 - *UX*: Is the site easy to navigate and is the API intuitive?


## Bonus
- *Production*: Have you implemented logging? Have you used error handling? Have you integrated swagger for the API documentation?
- *DevOps*: Have you published the solution? Have you written a docker compose file for deployment?


## Auth Component
This isn't part of the testing criteria but typically a requirement of any full stack platform. If you have completed the above items, consider implementing the following:
 - register a new user
 - verify user
 - login
 - logout
 - change password
 - mark user as inactive
 - delete user

Implementing auth isn't trivial. Remember to use json web tokens to issue a new token to authenticate your user along with issuing a refresh token when necessary. Additionally, implement @node-rs/argon2 to encrypt your user's password.

Please ensure that the core requirements are met prior to implementing additional features as a bonus.


## Submissions
Please submit via a public GitHub repository.