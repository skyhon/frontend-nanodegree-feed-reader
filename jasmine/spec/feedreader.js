/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have all URLs defined, and they are not empty', function () {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                var url = allFeeds[i].url;
                expect(url).toBeDefined();
                expect(url).not.toBe('');
            }        
        });
        
        
        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have all names defined, and they are not empty', function () {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                var name = allFeeds[i].name;
                expect(name).toBeDefined();
                expect(name).not.toBe('');
            }        
        });
    });

    /* This test suite tests sidemenu visibility states. */
    describe ('The menu', function () { 
    
        var isSidemenuHidden;  // true if current menu is hidden, false otherwise
        
        beforeEach (function () {
            // function and variable initialization
            isSidemenuHidden = (function () {
                return ($('body').hasClass ('menu-hidden')); 
            });             
        });

        
        /* This test ensures the menu element is
         * hidden by default. It analyzes the HTML and
         * the CSS to determine how it is performing the
         * hiding/showing of the menu element.
         */
        it ('is hidden by default', function () {
            /* The menu's visibility state is indicated by the body's class-name
            *      The class-name of the body is "menu-hidden"
            *      if the menu is hidden, otherwise no class-name
            *      is assigned to the body.
            */      
            
            expect (isSidemenuHidden()).toBeTruthy();
        });
        
        
         /* This test ensures the menu changes 
          * visibility when the menu icon is clicked. This test
          * should have two expectations: 
          *     1) The menu shows up when clicked 
          *     2) The menu hides when clicked again.
          */
        it ('changes visibility when menu icon is clicked', function () {
            var menuIcon = $('.menu-icon-link');

            menuIcon.trigger('click');
            expect(isSidemenuHidden()).toBeFalsy();
            
            menuIcon.trigger('click');
            expect(isSidemenuHidden()).toBeTruthy();
        });
    });
    
    
    /* This test suite tests the initial entries retrieved by the API. */
    describe ('Initial Entries', function () { 
    
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Note: loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        
        beforeEach (function (done) {
            loadFeed (0, done);
        });
        
        it('has at least a single .entry element within the .feed container', function () {
            var entriesInFeedContainer = $('.feed .entry').length;
            expect (entriesInFeedContainer).toBeGreaterThan(0);
        });
        
        
    });
    
    /* This test suite tests new feed contents. */
    describe ('New Feed Selection', function () {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Note: loadFeed() is asynchronous.
         */
        
        
        /* This function gets the inner content from the feed container
         * Input:
         *      None
         */
        var getCurrContent = (function () {
            var feed = $('.feed');
            headingsArr = [];
            if (feed) {
                feedEntries = feed.find('.entry');
                if (feedEntries) {
                    feed.find('.entry h2').each(function () {
                        headingsArr.push ($(this).text());
                    });                        
                } else {
                    console.log ('feedreader.js -> getCurrContent() -> Feed entries don\'t exist');
                }
            } else {
                console.log ('feedreader.js -> getCurrContent() -> Feed container doesn\ ');
            }
            return headingsArr.slice(0);
        }),
        
        /* This function compares each element of a single-dimensional array with
         *      elements of another single dimension array.
         *          returns true if the contents of both arrays are
         *          equal to each other regardless of the order of the elements,
         *          false otherwise
         *
         * Input:
         *      arr1 - first array (single dimension)
         *      arr2 - second array (single dimension)
         */
        areArraysEqual = (function (arr1, arr2) {
            var areEqual = true,                 // boolean variable that indicates if both arrays are equal
                arr2Copy = arr2.slice(0),        // copy of arr2, so the original copy doesn't get affected
                breakException = {};             // object used for breaking out of a for-each loop
                
            if (typeof(arr1) == 'object' &&
                typeof(arr2Copy) == 'object' &&
                arr1.length == arr2Copy.length)
            {
                arr1.forEach (function (el, i, arr) {
                    try {
                        var matchingIndex = $.inArray(el, arr2Copy);
                        
                        if (matchingIndex < 0) {
                            // match is not found and break the loop
                            areEqual = false;
                            throw breakException;
                        } else {
                            // match is found and remove matching element
                            //  from array being searched
                            arr2Copy.splice (matchingIndex, 1);
                        }
                    } catch(e) {
                        if (e !== breakException)
                            throw e;
                    }
                });                                            
            } else {     
                areEqual = false;     
            }
            
            return areEqual;
        }),
            
        headingsArr = null,      // title of each feed
        
        oldContent = null,       // content being loaded the first time   
        
        newContent = null;       // content being loaded the second time
        
        beforeEach (function (done) {
            loadFeed (0, function () {
                oldContent = getCurrContent();
                loadFeed (1, function () {
                    newContent = getCurrContent();
                    done ();
                });
            })
        });
        
        it ('changes content', function () {
            
            expect (newContent.length).toBeGreaterThan(0);
            expect (oldContent.length).toBeGreaterThan(0);

            // if there are content inside the feed container,
            //  expect new content is difference from the old content to
            //  ensure the changes
            if (newContent.length > 0 && newContent.length > 0) {

                // uses areArraysEqual, a custom function, instead of
                //  comparing the inner html's of both arrays
                expect (areArraysEqual(oldContent, newContent)).toBeFalsy();
            }

        });
        
    });
    
}());
