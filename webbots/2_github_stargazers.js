// Retrieve all users who starred a repository on github with CasperJS
// Configure the repository url below
// Run this bot with: casperjs --ssl-protocol=any 2_github_stargazers.js
// Check our awesome CasperJS cheatsheet: http://bit.ly/phantom-cheatsheet


// 1. Variables Initialization


var casper, repo, repoStargazers, stargazers;

casper = require('casper').create();
github = 'https://github.com';
repo = github + '/WordPress/WordPress';
repoStargazers = repo + '/stargazers';
stargazers = [];


// 2. Retrieve All Stargazers (Only for First Page)


casper.start(repoStargazers);

casper.then(function() {
  stargazers = this.evaluate(function() {
    return [].map.call(document.querySelectorAll('.follow-list-name a'), function(link) {
      return link.getAttribute('href');
    });
  });
});


// 3. Retrieve Information about Each Stargazer


casper.then(function() {
  this.eachThen(stargazers, function(r) {
    this.thenOpen((github + r.data), function() {
      var email, website;

      email = this.evaluate(function() {
        return document.querySelector('a.email').innerText;
      });

      website = this.evaluate(function() {
        return document.querySelector('a.url').innerText;
      });

      this.wait(2 * 1000);

      message = 'This user (' + this.getCurrentUrl() + ') can be contacted by ';

      if (email !== null) message += 'email: ' + email + ' ; ';
      if (website !== null) message += 'website: ' + website + ' ; ';
      if (email !== null || website !== null ) console.log(message);
    });
  });
});


// 4. Run Casper


casper.run();
