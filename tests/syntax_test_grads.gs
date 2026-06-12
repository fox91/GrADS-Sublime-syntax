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
