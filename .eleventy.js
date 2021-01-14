const markdownIt = require('markdown-it');

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./_tmp/styles.css");
    eleventyConfig.addPassthroughCopy({ "./_tmp/styles.css": "./styles.css" });
  
    eleventyConfig.addPassthroughCopy("templates/favicon.ico");
    eleventyConfig.addPassthroughCopy("templates/404.html");
    eleventyConfig.addPassthroughCopy("templates/images");

    eleventyConfig.addFilter('markdown', function(value) {
      let markdown = markdownIt({
          html: true
      });
      return markdown.render(value);
  });
  
    return {
      dir: {
        input: "templates",
        includes: "../_includes",
      },
    };
  };
  