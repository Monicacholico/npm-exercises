"use strict";

const $ = require('jquery');

const sayHello = name => 'Hello, ' + name + '!';
console.log(sayHello);
sayHello();

$('h1').css('background-color', 'yellow');






// Create a project,
//     Initialize that project as a git repo
// Create a new repo on github
// Connect your local repo to that remote
// push your commits
//
// CLI approach
// 1. Make your project in IntelliJ
// 2. From the terminal, type "git init". This makes
// an ordinary folder into a local git repository.
//     This means, you can issue git commands. **caution** document this once and only
// once per project
// 3. Create a ".gitignore" file in the root of the project.Add files to ignore
// 4. "git add .gitignore" to stage that file for commits
// 5. "git commit -m" add gitignore for first commit"
// 6. Navigate your browser to https://github.com/new
// 7. Name that repo. Just create the repo.
// 8. You're gonna get instructions from github. Use the wo lines that are under "Existing repository".
//9. Copy the two lines that say "git remote add origin .." and "git push -u origin master"
//10. Paste'm back in your terminal.
// 11. This will push your first commit to GitHub
//12. Do more work, for example, make "index.html"
//13 "git add index.html"
//14 "git commit -m "added index.html"
//15. "git push"
//16. got to step #12
//
//