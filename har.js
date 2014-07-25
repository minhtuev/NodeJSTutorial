var fs = require('fs');
var chc = require('chrome-har-capturer');
var c = chc.load(['https://github.com',
                  'http://reddit.com',
                  'http://www.reddit.com/help/faq']);
c.on('connect', function() {
    console.log('Connected to Chrome');
});
c.on('end', function(har) {
    fs.writeFileSync('out.har', JSON.stringify(har));
});
c.on('error', function() {
    console.error('Unable to connect to Chrome');
});