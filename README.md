# Verse Online Editor
A work-in-progress, offline-ready Verse code playground built with React and Monaco Editor for learning, parsing, and interpreting Verse scripts in the browser without UEFN integration.

## 📌 Summary

The Verse Online Editor is a lightweight, browser-based environment for writing and interpreting Verse, the programming language used in Unreal Engine for Fortnite (UEFN). Designed for learning and experimentation, this playground helps users understand Verse syntax and semantics without the need to open Unreal Editor or deploy a map.

The project runs without UEFN integration, simulating a `creative_device` so code can be written and run as if it were placed in a level, complete with semantic analysis and compile-time error reporting in the editor.

The Verse Online Editor supports a growing subset of the language, including classes, functions, and a small registry of built-in Verse libraries — advanced UEFN-specific APIs beyond the simulated device entry points are not yet implemented.

🔧 **Currently Supported:**

- ✅ Variables, `const` declarations, and explicit type annotations
- ✅ Loops (`loop`, `for`) and conditionals (`if`, `else`)
- ✅ Arithmetic, logic, and compound assignment expressions (`=`, `+=`, `-=`, `*=`, `/=`)
- ✅ Arrays and array access
- ✅ Comments
- ✅ Classes (`class(creative_device)`), including field initialization and `OnBegin` as the simulated entry point
- ✅ Functions, including effect specifiers (`<decides>`, `<suspends>`, `<override>`, etc.) and optional `{}` block syntax
- ✅ `using` imports backed by a built-in Verse library registry (e.g. `/Verse.org/Random`, `/UnrealEngine.com/Temporary/Diagnostics`)
- ✅ `Print` statements
- ✅ Semantic analysis with compile errors surfaced directly in the editor
- ✅ Verse syntax highlighting and theming in Monaco, based on the official VS Code Verse extension

❌ **Not Yet Supported:**
- Most UEFN-specific APIs (`GetPlayspace`, device wiring, etc.)
- Structs and enums

> 🧩 **Note:** This project uses [Peggy](https://peggyjs.org/), a modern fork of PEG.js, to define and compile the Verse grammar into a JavaScript parser.

## 🛠️ Setup 
Clone the repository to your local machine
```
$ git clone https://github.com/johanfortus/Verse-Online-Editor/
$ cd Verse-Online-Editor
```

Open GitBash at the $ prompt type the following commands to navigate to the project directory
```
pwd
cd source/repos/Verse-Online-Editor
```

Install dependencies
```
npm install
```

Generate the parser from the PEG.js grammar
```
npx peggy --format es -o src/utils/parser.js src/language/verse-grammar.pegjs
```

Start the development server
```
$ npm run dev
```

## 💻 Built With
- [<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />](https://react.dev/)
- [<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />](https://nodejs.org/)
- [<img src="https://github.com/user-attachments/assets/63dab2fd-6095-46a1-88f6-9a4dc97e2edb" height="27.99" />](https://microsoft.github.io/monaco-editor/)
- [<img src="https://github.com/user-attachments/assets/b1ee7389-af66-475b-b100-90e4115459ca" height="27.99" />](https://github.com/pegjs/pegjs)

## 📸 Demonstration
<img width="1504" alt="Verse Online Editor Demo" src="https://github.com/user-attachments/assets/bf91fb01-8be8-4569-abc7-4e0e2817fd09" />
