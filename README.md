===================================================
frontend-nanodegree-feed-reader
===================================================

--------------------------------------------
Project name: P6 Feed Reader Testing
--------------------------------------------

Filename: frontend-nanodegree-feed-reader.zip

File Structure:
/frontend-nanodegree-feed-reader
	/css
        icomoon.css
		normalize.css
        style.css
    /fonts
        icomoon.eot
        icomoon.svg
        icomoon.ttf
        icomoon.woff
    /lib
        /jamsmine-2.1.2
            boot.js
            console.js
            jasmine-html.js
            jasmine.css
            jasmine.js
            jasmine_favicon.png
        /spec
            feedreader.js
	/js
        app.js
index.html
README.md

External Script Dependencies:
	JQuery 2.1.1    http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
    Handlebars 2.0  http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js
    Feed Reader API http://google.com/jsapi

External Style Dependencies:
	Google Fonts API    http://fonts.googleapis.com/css?family=Roboto:400,100,300,700

--------------------------------------------
Description
--------------------------------------------
    In this project, you will be learning about testing with Javascript. Testing is an important part
    of the development process and many organizations practice a standard known as "test-driven development"
    or TDD. This is when developers write tests first, before they ever start developing their application.

    Whether you work in an organization that writes tests extensively to inform product development
    or one that uses tests to encourage iteration, testing has become an essential skill in modern
    web development!

--------------------------------------------
Project Overview
--------------------------------------------

    In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

    ## Why this Project?
    
    Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.
    
    Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!
    
    
    ## What will I learn?
    
    You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.
    
    
    ## How will this help my career?
    
    * Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
    * Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.
    
    
    # How will I complete this project?
    
    1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
    2. Review the functionality of the application within your browser.
    3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
    4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
    5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
    6. Return the allFeeds variable to a passing state.
    7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
    8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
    9. Write a new test suite named "The menu".
    10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
    11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
    12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
    13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
    14. When complete - all of your tests should pass.



--------------------------------------------
Installation and Getting Started
--------------------------------------------
	* Unzip frontend-nanodegree-feed-reader.zip into a directory of accessible by an active web session, (i.e. unzip frontend-nanodegree-feed-reader.zip /[root directory]/udacity/p6)
	* Navigate to that directory from your browser to start the application and test specs, (i.e. http://localhost:8000/udacity/p6/frontend-nanodegree-feed-reader/)

--------------------------------------------
Instructions
--------------------------------------------
	* Start the application by going to [project root]/index.html
	* Make changes to the spec by editing: [project root]/jasmine/spec/feedreader.js
        EXAMPLES to FAIL a test by replacing any one of the following variable/function in feedreader.js:
        1) Line 10-27:
                var allFeeds = [
                    {
                        name: 'Udacity Blog',
                        url: ''
                    },
                    {
                        name: 'CSS Tricks',
                        url: 'http://css-tricks.com/feed'
                    },
                    {
                        name: 'HTML5 Rocks',
                        url: 'http://feeds.feedburner.com/html5rocks'
                    },
                    {
                        name: 'Linear Digressions',
                        url: 'http://feeds.feedburner.com/udacity-linear-digressions'
                    }
                ];
                
        2) Line 10-27:
            var allFeeds = [
                {
                    name: 'Udacity Blog',
                    url: 'http://blog.udacity.com/feed'
                },
                {
                    name: 'CSS Tricks',
                    url: 'http://css-tricks.com/feed'
                },
                {
                    // name: 'HTML5 Rocks',
                    url: 'http://feeds.feedburner.com/html5rocks'
                },
                {
                    name: 'Linear Digressions',
                    url: 'http://feeds.feedburner.com/udacity-linear-digressions'
                }
            ];     

        3) Line 73-76:
            beforeEach (function (done) {
                newContent = getCurrContent();
                loadFeed (0, done);
            });       
--------------------------------------------
Contact Information
--------------------------------------------
    Steve Hon
    skyhon@hotmail.com
    Last Update: 3/15/2016