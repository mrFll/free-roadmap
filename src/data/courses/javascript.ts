import { Course } from "../../types/types";
import tags from "../tags";

const javascriptCourse: Course = {
  id: "javascript",
  name: "Javascript",
  description: "Basic Javascript",
  tag: [tags.frontend, tags.programming],
  color: "blue",
  resources: [
    {
      id: "freecodecamp",
      label: "FreeCodeCamp",
      type: "link",
      url: "https://www.freecodecamp.org/learn ",
    },
  ],
  presentations: [
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week2",
      type: "slide",
      weekNo: 2,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week3",
      type: "slide",
      weekNo: 3,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week4",
      type: "slide",
      weekNo: 4,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week5",
      type: "slide",
      weekNo: 5,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week6",
      type: "slide",
      weekNo: 6,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week7",
      type: "slide",
      weekNo: 7,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week10",
      type: "slide",
      weekNo: 10,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week11",
      type: "slide",
      weekNo: 11,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week12",
      type: "slide",
      weekNo: 12,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week13",
      type: "slide",
      weekNo: 13,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week14",
      type: "slide",
      weekNo: 14,
    },
  ],
  lessons: [
    {
      id: "languages",
      name: "Programming languages",
      weekNo: 2,
    },
    {
      id: "devtool",
      name: "Developer tools",
      description: "Using Chrome/Firefox developer tool Javascript console",
      weekNo: 2,
    },
    {
      id: "math",
      name: "Numbers and math",
      description:
        "Numbers and math (add, subtract, multiply, divide, remainder) and concept of statement",
      weekNo: 2,
    },
    {
      id: "variables",
      name: "Variables",
      description:
        "Variables and concepts of keyword, assignment, declaration, environment, being undefined, case sensitivity and camel case",
      weekNo: 2,
    },
    {
      id: "vs-code",
      name: "Writing Javascript files in VS Code",
      weekNo: 2,
    },
    {
      id: "flowchart",
      name: "Flowchart",
      weekNo: 3,
      resources: [
        {
          id: "flowchart",
          label: "Common Flowchart Symbols",
          type: "link",
          url: "https://www.smartdraw.com/flowchart/flowchart-symbols.htm",
        },
        {
          id: "flowchart-2",
          label: "Introduction to Creating Flowcharts",
          type: "link",
          url: "https://www.youtube.com/watch?v=SWRDqTx8d4k",
        },
        {
          id: "miro",
          label: "Miro",
          type: "link",
          url: "https://miro.com/",
        },
      ],
    },
    {
      id: "functions",
      name: "Functions",
      description: "Syntax, arguments, scope and return value",
      weekNo: 3,
      resources: [
        {
          id: "functions",
          label: "Functions",
          type: "video",
          url: "https://www.youtube.com/watch?v=XgKsD6Zwvlc",
        },
      ],
    },
    {
      id: "comments",
      name: "Comments",
      weekNo: 3,
    },
    {
      id: "strings",
      name: "Strings",
      description: "Single and double quotes",
      weekNo: 3,
    },
    {
      id: "boolean",
      name: "Boolean",
      description:
        "Boolean and logical comparators and “if” (equal, strict equal, less than, greater than, and, or)",
      weekNo: 3,
      resources: [
        {
          id: "boolean",
          label: "Boolean logic with if statements",
          type: "video",
          url: "https://www.youtube.com/watch?v=SxTp8j-fMMY",
        },
      ],
    },
    {
      id: "comments",
      name: "Comments",
      weekNo: 3,
    },
    {
      id: "script-tag",
      name: "Script HTML tag",
      weekNo: 3,
    },
    {
      id: "script-src",
      name: "Script tag src attribute",
      weekNo: 4,
    },
    {
      id: "console",
      name: "console.log",
      weekNo: 4,
    },
    {
      id: "concat",
      name: "Working with strings",
      description:
        'Concatenating strings, string length, bracket notation, "includes" function',
      weekNo: 4,
    },
    {
      id: "more-functions",
      name: "More functions examples",
      weekNo: 4,
    },
    {
      id: "more-flowchart",
      name: "More flowcharts examples",
      weekNo: 4,
    },
    {
      id: "more-and-or",
      name: "More and/or examples",
      weekNo: 4,
    },
    {
      id: "loops",
      name: "Loops (for, while)",
      weekNo: 5,
    },
    {
      id: "arrays",
      name: "Introduction to arrays",
      weekNo: 5,
    },
    {
      id: "nested-arrays",
      name: "Nested arrays",
      weekNo: 6,
    },
    {
      id: "array-method",
      name: "Array methods",
      description: "Pop, push, shift, unshift, splice",
      weekNo: 6,
    },
    {
      id: "nested-loop",
      name: "Nested loops",
      weekNo: 6,
    },
    {
      id: "sort",
      name: "Sorting algorithms",
      weekNo: 7,
    },
    {
      id: "object",
      name: "Objects",
      weekNo: 7,
    },
    {
      id: "dom",
      name: "DOM Manipulation",
      description: "Styles and innerText",
      weekNo: 10,
    },
    {
      id: "events",
      name: "Events",
      description: "onClick and onMouseOver",
      weekNo: 10,
    },
    {
      id: "math-obj",
      name: "Math object",
      weekNo: 10,
    },
    {
      id: "dom-add-class",
      name: "DOM: Add and remove classes",
      weekNo: 11,
    },
    {
      id: "dom-input",
      name: "DOM: Read input values",
      weekNo: 11,
    },
    {
      id: "date",
      name: "Date object",
      weekNo: 11,
    },
    {
      id: "timer",
      name: "Timers",
      description: "setTimeout and setInterval",
      weekNo: 12,
    },
    {
      id: "callback",
      name: "Callback and anonymous functions",
      weekNo: 12,
    },
    {
      id: "template-literal",
      name: "Template literal",
      weekNo: 12,
    },
    {
      id: "arrow",
      name: "Arrow functions",
      weekNo: 12,
    },
    {
      id: "fetch",
      name: "Fetch API",
      weekNo: 13,
    },
    {
      id: "promise",
      name: "Promises",
      description: "Using then/catch syntax",
      weekNo: 13,
    },
    {
      id: "fetch-delete",
      name: "Implement add/delete with API",
      description: `Catch API errors and display them
Use forEach
Use addEventListener
Use select HTML tag
`,
      weekNo: 14,
    },
    {
      id: "attr",
      name: "Read HTML attributes",
      weekNo: 14,
    },
    {
      id: "local",
      name: "LocalStorage",
      weekNo: 14,
    },
    {
      id: "weather",
      name: "Fetch from weather API",
      weekNo: 14,
    },
  ],
};

export default javascriptCourse;
