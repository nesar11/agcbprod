const withImages = require('next-images');
module.exports = withImages({
    webpack(config, options) {
        return config
    }
});
module.exports = {
    async headers() {
      return [
        {
          source: "/fonts/Serpentine-MediumOblique.woff2",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    },
  };