* SYNTAX TEST "Packages/GrADS/GrADS.sublime-syntax"
* a line comment
* <- comment.line.grads
# also a comment
* <- comment.line.grads
count = 1 ;# trailing comment
*         ^ punctuation.terminator.grads
*          ^^^^^^^^^^^^^^^^^^ comment.line.grads
If (dimrc < 0)
* <- keyword.control.grads
*         ^ keyword.operator.grads
function calc(x)
* <- keyword.control.function.grads
*        ^^^^ entity.name.function.grads
'set lat -30 30'
* <- punctuation.definition.string.begin.grads
*^^^ support.function.command.grads
*    ^^^ keyword.other.command-option.grads
*              ^ punctuation.definition.string.end.grads
"set t 5"
* <- punctuation.definition.string.begin.grads
*^^^ support.function.command.grads
*       ^ punctuation.definition.string.end.grads
'd ave(t,1)*2'
*^ support.function.command.grads
*  ^^^ support.function.builtin.grads
*     ^ punctuation.section.parens.grads
*       ^ punctuation.separator.grads
*          ^ keyword.operator.arithmetic.grads
'es=611*EXP(x)'
*^^ variable.other.grads
*  ^ keyword.operator.assignment.grads
*      ^ keyword.operator.arithmetic.grads
*       ^^^ support.function.builtin.grads
'draw string 1 1 `3.`f15'
*                ^^^ constant.character.escape.grads
*                   ^^^^ constant.character.escape.grads
res = subwrd(result,2)
*     ^^^^^^ support.function.intrinsic.grads
*            ^^^^^^ support.constant.grads
say 'c(1) is text'
* <- keyword.control.io.grads
*    ^ string.quoted.single.grads
'!ls -l'
*^ keyword.control.shell.grads
* ^^ string.unquoted.shell.grads
_a.i.1 = 5
* <- variable.other.global.grads
* ^ punctuation.accessor.grads
*  ^ variable.other.member.grads
*    ^ constant.numeric.grads
'd ugrdprs(lev=700)'
*          ^^^ keyword.other.dimension.grads
*             ^ keyword.operator.logical.grads
'd ave(u,t=1,z+1)'
*        ^ keyword.other.dimension.grads
*            ^ keyword.other.dimension.grads
*             ^ keyword.operator.arithmetic.grads
'd u(t-1)'
*   ^ punctuation.section.parens.grads
*    ^ keyword.other.dimension.grads
*     ^ keyword.operator.arithmetic.grads

* Selectors are anchored to a '(' or ',' position, so at top level 't-1' is
* variable arithmetic and 't' is NOT scoped as a dimension.
'd t-1'
*  ^ string.quoted.single.grads
*   ^ keyword.operator.arithmetic.grads

* A grouping paren is not preceded by an identifier, so '(t-1)' is excluded:
* 't' is variable arithmetic, not a dimension selector.
'd (t-1)*2'
*   ^ string.quoted.single.grads

* A known function consumes its '(', so its first argument is an expression,
* not a dimension: 't' in log(t-1) is variable arithmetic, not a selector.
* (An unknown/user function is treated like a variable -- a rare exception.)
'd log(t-1)'
*  ^^^ support.function.builtin.grads
*      ^ string.quoted.single.grads
*       ^ keyword.operator.arithmetic.grads

* Documented limitation: an unknown/user function is not in the built-in list,
* so 'myfunc(t-1)' is treated like a variable modifier and 't' is (mis)scoped
* as a dimension. Built-in functions like log() are handled correctly above.
'd myfunc(t-1)'
*  ^^^^^^ string.quoted.single.grads
*         ^ keyword.other.dimension.grads
*          ^ keyword.operator.arithmetic.grads
