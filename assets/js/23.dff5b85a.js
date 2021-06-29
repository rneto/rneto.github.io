(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{492:function(e,a,s){"use strict";s.r(a);var r=s(6),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cambiar-la-informacion-del-autor-en-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cambiar-la-informacion-del-autor-en-git"}},[e._v("#")]),e._v(" Cambiar la información del autor en Git")]),e._v(" "),s("social-share",{staticClass:"social-share--header"}),e._v(" "),s("p",[e._v("Cuando por algún motivo queramos cambiar el nombre o el email que están registrados en los commits de un repositorio "),s("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),s("OutboundLink")],1),e._v(", será necesario reescribir todo el histórico del repositorio.")]),e._v(" "),s("p",[e._v("Una de las formas hacerlo es con el comando "),s("a",{attrs:{href:"https://git-scm.com/docs/git-filter-branch",target:"_blank",rel:"noopener noreferrer"}},[e._v("filter-branch"),s("OutboundLink")],1),e._v(" creado para la reescritura de ramas. Con él podemos definir un script que se encargará de reemplazas los nombres e emails antiguos por nuevos valores.")]),e._v(" "),s("p",[e._v("Es muy importante recalcar que "),s("strong",[e._v("estamos reescribiendo el histórico de nuestro repositorio")]),e._v(" por lo que este comando debe ser usado con extremo cuidado.")]),e._v(" "),s("p",[e._v("Como requisito previo a la ejecución del comando, debemos disponer del email del autor/confirmador ("),s("em",[e._v("committer")]),e._v(") que queremos reescribir, así como el nuevo email y usuario que queremos establecer.")]),e._v(" "),s("p",[e._v("El primer lugar debemos crear un nuevo clon temporal desde nuestra terminal (Mac/Linux) o "),s("em",[e._v("Git Bash")]),e._v(" (Windows):")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone --bare "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repository-url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repository-folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("A continuación ejecutamos el siguiente script reemplazando previamente los valores de las variables "),s("em",[e._v("ANTIGUO_EMAIL")]),e._v(", "),s("em",[e._v("NUEVO_USUARIO")]),e._v(" y "),s("em",[e._v("NUEVO_EMAIL")]),e._v(" por nuestros datos:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" filter-branch --env-filter "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'\n\nANTIGUO_EMAIL="antiguo@email.com"\nNUEVO_EMAIL="nuevo@email.com"\nNUEVO_USUARIO="Nuevo Usuario"\n\nif [ "'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$GIT_COMMITTER_EMAIL")]),e._v('"="'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ANTIGUO_EMAIL")]),e._v('" ]\nthen\n    export GIT_COMMITTER_EMAIL="'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$NUEVO_EMAIL")]),e._v('"\n    export GIT_COMMITTER_NAME="'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$NUEVO_USUARIO")]),e._v('"\nfi\nif [ "'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$GIT_AUTHOR_EMAIL")]),e._v('"="'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ANTIGUO_EMAIL")]),e._v('" ]\nthen\n    export GIT_AUTHOR_EMAIL="'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$NUEVO_EMAIL")]),e._v('"\n    export GIT_AUTHOR_NAME="'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$NUEVO_USUARIO")]),e._v("\"\nfi\n'")]),e._v(" --tag-name-filter "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" -- --branches --tags\n")])])]),s("p",[e._v("Y finalmente publicamos el nuevo histórico al repositorio de origen:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --force --tags origin "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'refs/heads/*'")]),e._v("\n")])])]),s("p",[e._v("Llegados a este punto, ya podemos eliminar el clon temporal que habíamos creado y comprobar en nuestro origen que el histórico ha sido actualizado.")]),e._v(" "),s("hr"),e._v(" "),s("social-share",{staticClass:"social-share--footer"})],1)}),[],!1,null,null,null);a.default=t.exports}}]);