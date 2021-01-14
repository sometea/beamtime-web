const fetch = require('node-fetch');

module.exports = async function() {
    const fetchedArticles = await fetch('https://cms.beamtime.net/articles');
    const articles = await fetchedArticles.json();
    return { articles };
}