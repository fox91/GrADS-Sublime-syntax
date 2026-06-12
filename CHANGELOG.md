# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-06-12

### Added

- Highlight dimension selectors (`x`/`y`/`z`/`t`/`offt`/`e`/`lon`/`lat`/`lev`/`time`/`ens`/`r`)
  in variable modifiers and function dimension arguments, e.g. `ugrdprs(lev=700)`
  and `ave(u,t=1,t=10)`. Selectors are distinguished from grouping parentheses,
  top-level arithmetic, and built-in function calls.

## [1.1.0] - 2026-06-12

### Added

- Code completions for the 62 built-in grid functions, the 12 script intrinsics,
  and common flow-control constructs (`GrADS.sublime-completions`).

## [1.0.1] - 2026-06-12

### Added

- Function definitions now appear in Goto Symbol (`Ctrl+R`) and Goto Definition.
- Syntax tests (`tests/syntax_test_grads.gs`) and a GitHub Actions workflow that
  runs them on every push and pull request.
- A "Developing" section in the README.

### Changed

- Renamed `GrADS.tmPreferences` to `Comments.tmPreferences` to match the
  convention used by official Sublime syntax packages.

### Fixed

- Function definition names were mis-scoped as function calls; the name in
  `function name(...)` is now scoped as an entity name.

## [1.0.0] - 2026-06-11

Initial release.

### Added

- Syntax highlighting for the GrADS scripting language (`.gs` / `.gsf`), with
  rules derived directly from the GrADS C sources rather than the documentation.
- Highlighting for comments (`*`/`#`), strings with unterminated-string
  detection, case-insensitive keywords and commands, script intrinsics, the 62
  built-in grid functions, implied `define`, expression operators, backtick
  formatting codes (including the `` `3. `` degree symbol), shell escapes, and
  compound (array) variables.
- Comment toggling via `Ctrl+/` (`Cmd+/`).

[Unreleased]: https://github.com/fox91/GrADS-Sublime-syntax/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/fox91/GrADS-Sublime-syntax/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/fox91/GrADS-Sublime-syntax/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/fox91/GrADS-Sublime-syntax/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/fox91/GrADS-Sublime-syntax/releases/tag/v1.0.0
