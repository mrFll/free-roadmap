const theme = require("./src/theme/theme.js");
const fs = require("fs");
const variablesPath = "./src/theme/autogenerated-variables.css";

[variablesPath].forEach((path) => {
  if (fs.existsSync(path)) fs.unlinkSync(path);
});

const flattenObj = (ob) => {
  let result = {};

  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        result[i + "-" + j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }

  return result;
};

const transformedTheme = Object.entries(flattenObj(theme)).reduce(
  (res, [key, value]) => {
    res[`--${key}`] = value;
    return res;
  },
  {}
);

module.exports = {
  plugins: {
    "postcss-custom-properties": {
      exportTo: variablesPath,
      importFrom: [
        {
          customProperties: transformedTheme,
        },
      ],
    },
    "postcss-custom-media": {
      importFrom: [
        () => {
          const customMedia = {};
          Object.entries(theme.breakpoints.values).forEach(([key, value]) => {
            customMedia[`--viewport-${key}`] = `(max-width: ${value}px)`;
          });
          return { customMedia };
        },
      ],
    },
  },
};