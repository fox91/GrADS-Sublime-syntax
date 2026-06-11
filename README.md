# GrADS syntax for Sublime Text

Syntax highlighting and comment toggling for the
[GrADS](https://web.archive.org/web/20250511205413/http://cola.gmu.edu/grads/) scripting language (`.gs` / `.gsf`).

Unlike a docs-driven grammar, the rules here are derived directly from the GrADS
C sources (`gscrpt.c`, `gauser.c`, `gafunc.c`, `gaexpr.c`, `gxchpl.c`), which are
the ground truth for what the interpreter actually accepts — the HTML
documentation is incomplete or inaccurate in several places.

## Features

- **Comments** — `*` or `#` at the start of a record (column 0 or right after a
  `;`), matching the parser exactly.
- **Strings** — single-line only; an unterminated quote is flagged as an error
  (GrADS reports `Non-terminated constant`).
- **Script language** — case-insensitive keywords (`if`/`while`/`say`/…),
  `function`/`return`, the 37 script intrinsics (`subwrd`, `math_*`, …).
- **Compound (array) variables** — `_trin.n.1`, with the accessor dots and index
  segments highlighted.
- **Command strings** — case-insensitive command verbs, sub-options, and the 62
  built-in grid functions (`ave`, `maskout`, `EXP`, …).
- **Implied define** — `name = expr` shorthand (any case).
- **Expressions** — arithmetic / comparison / logical operators, parentheses and
  commas inside `display` / `define` / implied-define, persisting across
  concatenated string segments.
- **Backtick formatting codes** — fonts, super/subscript, and the `` `3. ``
  degree symbol.
- **Shell escapes** — `'!cmd …'` is marked as a shell command (uniform scope,
  persisting across concatenation).
- **Comment toggling** — `Ctrl+/` (`Cmd+/`).

## Installation

### Package Control (recommended)

1. Install [Package Control](https://packagecontrol.io/installation).
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and run
   **Package Control: Install Package**.
3. Search for **GrADS** and install it.

### Manual

Clone or download this repository into your Sublime Text packages folder
(**Preferences → Browse Packages…**), as a folder named `GrADS`:

```
git clone https://github.com/fox91/GrADS-Sublime-syntax.git GrADS
```

Then open a `.gs` / `.gsf` file (or pick **View → Syntax → GrADS Script**) to
activate it.

## License

[MIT](LICENSE) © Andrea Falco
