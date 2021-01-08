module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./_tmp/styles.css");
    eleventyConfig.addPassthroughCopy({ "./_tmp/styles.css": "./styles.css" });
  
    eleventyConfig.addPassthroughCopy("templates/favicon.ico");
    eleventyConfig.addPassthroughCopy("templates/images");
  
    return {
      dir: {
        input: "templates",
        includes: "../_includes",
      },
    };
  };
  