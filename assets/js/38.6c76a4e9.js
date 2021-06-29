(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{509:function(e,a,r){"use strict";r.r(a);var t=r(6),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"servir-archivos-html-estaticos-localmente-con-node-js-y-http-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#servir-archivos-html-estaticos-localmente-con-node-js-y-http-server"}},[e._v("#")]),e._v(" Servir archivos HTML estáticos localmente con Node.js y http-server")]),e._v(" "),r("social-share",{staticClass:"social-share--header"}),e._v(" "),r("p",[e._v("A menudo necesitamos servir localmente ficheros HTML estáticos, sin tener que instalar y configurar un servidor HTTP para un contenido tan simple.")]),e._v(" "),r("p",[e._v("Algunas alternativas rápidas podrían ser abrir directamente el fichero HTML en nuestro navegador web favorito, hacer uso de la extensión "),r("a",{attrs:{href:"https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Server for Chrome"),r("OutboundLink")],1),e._v(" de Google Chrome o usar la extensión "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Server"),r("OutboundLink")],1),e._v(" de Visual Studio Code, sin embargo, si queremos dar pasos hacia "),r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v(" y aprovechar su potencial, una de las formas más sencillas de servir localmente el contenido de un directorio es usando el paquete "),r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("http-server"),r("OutboundLink")],1)]),e._v(" que nos ofrece un "),r("strong",[e._v("servidor HTTP sencillo, potente y con cero esfuerzo en cuanto a configuración inicial")]),e._v(".")]),e._v(" "),r("p",[e._v("Lo primero que debes hacer es instalar el paquete. Puedes hacerlo globalmente si deseas servir el contenido de cualquier directorio.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" http-server -g\n")])])]),r("p",[e._v("O instalarlo como una dependencia propia dentro del proyecto/directorio para usarlo exclusivamente en él.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" http-server\n")])])]),r("p",[e._v("Una vez instalado, nos ubicamos en el directorio donde tenemos nuestro contenido estático y arrancamos el servidor http.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("http-server\n")])])]),r("p",[e._v("A partir de este momento, ya podremos acceder al contenido de nuestro directorio a través del puerto 8080 de manera predeterminada a través de algunos de las IP ofrecidas.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("Starting up http-server, serving ./\nAvailable on:\n  http://192.168.56.1:8080\n  http://10.8.0.10:8080\n  http://192.168.1.39:8080\n  http://127.0.0.1:8080\nHit CTRL-C to stop the server\n")])])]),r("h2",{attrs:{id:"abrir-el-navegador-automaticamente-tras-arrancar-el-servidor-http-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abrir-el-navegador-automaticamente-tras-arrancar-el-servidor-http-server"}},[e._v("#")]),e._v(" Abrir el navegador automáticamente tras arrancar el servidor http-server")]),e._v(" "),r("p",[e._v("Tanto si añadimos el paquete http-server como una dependencia propia dentro de nuestro proyecto/directorio o si lo añadimos globalmente, es posible hacer que nuestro navegador predeterminado se abra automáticamente con nuestra página "),r("em",[e._v("index.html")]),e._v(" una vez se arranque el servidor.")]),e._v(" "),r("p",[e._v("Para ello debemos hacer uso del "),r("em",[e._v("package.json")]),e._v(" que debemos tener en nuestro directorio.")]),e._v(" "),r("blockquote",[r("p",[e._v("Una manera sencilla de crear un fichero "),r("em",[e._v("package.json")]),e._v(" es ejecutar el comando "),r("code",[e._v("npm init")]),e._v(" en el directorio donde lo queremos crear y responder a las preguntas del cuestionario (podemos pulsar simplemente "),r("em",[e._v("intro")]),e._v(" para dejarlas todas con la respuesta por defecto).")])]),e._v(" "),r("p",[e._v("Debemos añadir un nuevo script al fichero "),r("em",[e._v("package.json")]),e._v(" (en el siguiente ejemplo "),r("em",[e._v("start")]),e._v(") para arrancar el servidor y a su vez abrir el navegador con la página por defecto "),r("em",[e._v("index.html")]),e._v(" (http-server sirve de manera predeterminada ese fichero para cualquier solicitud de directorio).")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n  "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"scripts"')]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".,\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"start"')]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http-server -o"')]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Ahora, cuando ejecutemos el comando "),r("code",[e._v("npm start")]),e._v(" en nuestro directorio, se iniciará el servidor y a su vez se abrirá nuestro navegador web predeterminado con la página "),r("em",[e._v("index.html")]),e._v(" de nuestro directorio.")]),e._v(" "),r("hr"),e._v(" "),r("social-share",{staticClass:"social-share--footer"})],1)}),[],!1,null,null,null);a.default=s.exports}}]);