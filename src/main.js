import Reveal from "libs/reveal.js/dist/reveal.js";
import Markdown from "libs/reveal.js/plugin/markdown/markdown.js";
import Notes from "libs/reveal.js/plugin/notes/notes.js";
import Highlight from "libs/reveal.js/plugin/highlight/highlight.js";

const deck = new Reveal({
    plugins: [Markdown, Highlight, Notes],
    history: true
});
deck.initialize();
