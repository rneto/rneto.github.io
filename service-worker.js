/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf7aeb8a801d822499405703d6b0fd31"
  },
  {
    "url": "assets/css/0.styles.34cc10db.css",
    "revision": "6e38a3ba7145a150dc4f1ee70a34eab7"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c66dc6eb.js",
    "revision": "bab35225150cb0b0b5d5f30326de2261"
  },
  {
    "url": "assets/js/11.0859c5f2.js",
    "revision": "d3994e32ada981f19acda83fe6fcbc37"
  },
  {
    "url": "assets/js/12.dda17e0d.js",
    "revision": "e77b0d7578005cc37f64a9ec15aa6844"
  },
  {
    "url": "assets/js/13.cc76f2d3.js",
    "revision": "5f0656a63752f3f15bda362ca4e4154e"
  },
  {
    "url": "assets/js/14.7d6d8b5b.js",
    "revision": "121457fd88c6773f261992b0bd830ad2"
  },
  {
    "url": "assets/js/15.7444241f.js",
    "revision": "9c712b58d0b4d7dcc40e1d97f8481bab"
  },
  {
    "url": "assets/js/16.3a5575f2.js",
    "revision": "fcd08b3c8e9967c9f1a1fb30b5ee8888"
  },
  {
    "url": "assets/js/17.5ab4de7a.js",
    "revision": "9abb8f73d8164c79b4a34fb10ddb8025"
  },
  {
    "url": "assets/js/18.fcf5f987.js",
    "revision": "cfe962d634fe3dd142f5e7cd2790a014"
  },
  {
    "url": "assets/js/19.10492db0.js",
    "revision": "69f5757f74357cb62df6f709a93f22bf"
  },
  {
    "url": "assets/js/20.37e5d098.js",
    "revision": "2f8da73fdadf9e17e0e7af395a9da584"
  },
  {
    "url": "assets/js/21.b7f0acbf.js",
    "revision": "15ebd7bea63f90c3bf0883c5b29517f7"
  },
  {
    "url": "assets/js/22.03b91290.js",
    "revision": "28aa2b3a3357ba52426f4631ea4cc10b"
  },
  {
    "url": "assets/js/23.dff5b85a.js",
    "revision": "847787b51f55e9c461f41639e53e5931"
  },
  {
    "url": "assets/js/24.8909442f.js",
    "revision": "c2c65f8abf343c7be11aa593e0f899ee"
  },
  {
    "url": "assets/js/25.d21ee7b0.js",
    "revision": "7c546a76a99c9406cabe8456959ba62c"
  },
  {
    "url": "assets/js/26.6f4069c9.js",
    "revision": "467b4b0eb8738facb2e5ef143645bec9"
  },
  {
    "url": "assets/js/27.8df12cd8.js",
    "revision": "473a7b4cab9fc0a0aa9695fd3dca8586"
  },
  {
    "url": "assets/js/28.fdac100a.js",
    "revision": "b5e8b0cae8213d60183bc2cfaf5bf480"
  },
  {
    "url": "assets/js/29.6058f4a0.js",
    "revision": "69bc66dce83191a16317e9b895b6eea6"
  },
  {
    "url": "assets/js/3.daf20502.js",
    "revision": "0216a03514a8f661a94ab55df500c68a"
  },
  {
    "url": "assets/js/30.f605256a.js",
    "revision": "1c89278113b1108002c091a3aedcd753"
  },
  {
    "url": "assets/js/31.c571e16a.js",
    "revision": "10df15236e152f97fbe283554fac6603"
  },
  {
    "url": "assets/js/32.4fe1f3b0.js",
    "revision": "e64752db45293edb87e8fc23729f389c"
  },
  {
    "url": "assets/js/33.ee3d5fe3.js",
    "revision": "315454f358df485beab9cfa9d963287d"
  },
  {
    "url": "assets/js/34.0556425a.js",
    "revision": "b02f4906e0155f9d8c787d015c13a857"
  },
  {
    "url": "assets/js/35.4f196f1b.js",
    "revision": "4334037ad0588f401f6f18ad9b7b02c4"
  },
  {
    "url": "assets/js/36.8247b6ba.js",
    "revision": "3ec0fef1535c8e91563d98d650ba9d4a"
  },
  {
    "url": "assets/js/37.f8156d47.js",
    "revision": "8083bb7f5299281ca2b9aba247418df2"
  },
  {
    "url": "assets/js/38.6c76a4e9.js",
    "revision": "62d28f6d8ddb861e8fe9b82abb91e8b7"
  },
  {
    "url": "assets/js/39.7c90d7a7.js",
    "revision": "cc1b5a8e055f195805fbd41941c95291"
  },
  {
    "url": "assets/js/4.3c7dd51c.js",
    "revision": "a037d3dda2683e6dce3ea3ddb31d63ee"
  },
  {
    "url": "assets/js/40.172dd030.js",
    "revision": "23c16260c3eed49c1aa6803263396bfd"
  },
  {
    "url": "assets/js/41.3f4a309e.js",
    "revision": "db449475930355a42561f170baaadf1f"
  },
  {
    "url": "assets/js/42.8b5a61ed.js",
    "revision": "0ce55647390419a2c3e04be30d0a7d4d"
  },
  {
    "url": "assets/js/5.ea665055.js",
    "revision": "9ad1216c497f9b3560cf4cd4f2996a02"
  },
  {
    "url": "assets/js/6.e64689b4.js",
    "revision": "ee19dbe25f3e0494af81474105177103"
  },
  {
    "url": "assets/js/7.83269844.js",
    "revision": "f513de9b19cb166c1e0a79cc5e7fe002"
  },
  {
    "url": "assets/js/8.4155328b.js",
    "revision": "105770e737aa1fcf08cf5e5a8866042c"
  },
  {
    "url": "assets/js/9.46140f75.js",
    "revision": "d579308cd8df968d859a10d10a32a4a5"
  },
  {
    "url": "assets/js/app.c6afc0c4.js",
    "revision": "bbe0a3bb1ff535ddb8f947a3df0d345f"
  },
  {
    "url": "assets/js/vuejs-paginate.dbcc377a.js",
    "revision": "1ae6e6f3180be0a239f2bfefc44cf1a7"
  },
  {
    "url": "blog/15-mejores-extensiones-visual-studio-code-desarrollo-web/index.html",
    "revision": "fc0311f2689b18cfd78459c67b750340"
  },
  {
    "url": "blog/5-mejores-extensiones-gratuitas-visual-studio/index.html",
    "revision": "a246b9eb40938c4c71727b8abccf25fb"
  },
  {
    "url": "blog/arquitectura-buenas-practicas-angular/index.html",
    "revision": "e344b563aaac11f50ed988882268c054"
  },
  {
    "url": "blog/cambiar-informacion-autor-git/index.html",
    "revision": "8953cb6e4da7a31e7e1c4ef0b0e4f3f1"
  },
  {
    "url": "blog/cinco-formas-centrar-texto-div-css/index.html",
    "revision": "88b8c0a5971181504840c701757c698d"
  },
  {
    "url": "blog/compartir-sesion-aplicaciones-asp-net/index.html",
    "revision": "41035c7be17fb07619ac26c52a119dae"
  },
  {
    "url": "blog/configurar-usuario-git/index.html",
    "revision": "538b6f7369ff9e96aa3b0643fecfc51e"
  },
  {
    "url": "blog/configurar-variables-entorno-package-json-windows/index.html",
    "revision": "37afb6bbbb2f9d4b48788cdd4e249e0c"
  },
  {
    "url": "blog/crear-blog-estatico-vuepress/index.html",
    "revision": "4a0a17ba3ef36f32878d74b38d85c978"
  },
  {
    "url": "blog/decoradores-typescript/index.html",
    "revision": "8e5c0f994828f19ac00340e929fbdc4f"
  },
  {
    "url": "blog/desplegar-angular-internet-information-services/index.html",
    "revision": "b5de834a4744315c7a87094bdf5dcea3"
  },
  {
    "url": "blog/index.html",
    "revision": "14780ccda9e0c1b72ed497b39dc43c50"
  },
  {
    "url": "blog/instalar-multiples-versiones-nodejs-windows/index.html",
    "revision": "5f37f7f670b09d599b3a75585e727423"
  },
  {
    "url": "blog/integrar-tailwind-css-angular-material/index.html",
    "revision": "c719cb50e60b31c435db7385c583b1ca"
  },
  {
    "url": "blog/introduccion-angular-elements-web-components/index.html",
    "revision": "ebd212762a6063ad847a8c9f995ff998"
  },
  {
    "url": "blog/optimizar-bucles-javascript/index.html",
    "revision": "6314aac6108b1b91d846a699b1b714a7"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "afa3d90911bd4cd4a886bdda254b0236"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "9ee1cb227c06051c5f0575f0f1864d21"
  },
  {
    "url": "blog/page/4/index.html",
    "revision": "18b121e019f39991ae1a588f9a4806c3"
  },
  {
    "url": "blog/page/5/index.html",
    "revision": "0a62bab69b694d1307b08b0fc147771d"
  },
  {
    "url": "blog/podicoteo-ordenacion-propiedades-css/index.html",
    "revision": "48fda4fb3282a4987b901271f172c4b5"
  },
  {
    "url": "blog/por-que-usar-angular-material-design/index.html",
    "revision": "b8b040b797ff6683b56713b3261a2800"
  },
  {
    "url": "blog/propiedad-css-box-sizing/index.html",
    "revision": "73160f35f2dcf66e9ff1a4dc15a6fd69"
  },
  {
    "url": "blog/publicar-net-core-web-deploy-visual-studio-entornos-implementacion/index.html",
    "revision": "8aae37f6209bec56b008b2cbf172066f"
  },
  {
    "url": "blog/quicksort-bridge-typescript/index.html",
    "revision": "9fd4c0a9823ef4d170624d6197ee50a2"
  },
  {
    "url": "blog/servir-archivos-html-estaticos-localmente-nodejs-http-server/index.html",
    "revision": "6193f9633569f6b2f35c2ef99f35495e"
  },
  {
    "url": "blog/tailwind-css/index.html",
    "revision": "b0a1c56f0aec8eb11efdfa9f787c47d3"
  },
  {
    "url": "blog/usar-github-actions-automatizar-generacion-despliegue-blog-estatico-vuepress-github-pages/index.html",
    "revision": "35fa7c1f97c45524bc389866d9d8d963"
  },
  {
    "url": "blog/usar-tareas-comandos-npm-visual-studio/index.html",
    "revision": "7c1447a41a893061ebf5b370a1d90eb0"
  },
  {
    "url": "blog/usar-webpack-4-transformar-empaquetar-recursos-aplicacion-web/index.html",
    "revision": "e8bf22f7e633862a29993ca6746e53b2"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "3f4accfa47a547bf6a092cbb1015e2f6"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "ec4189fbaaed7f0857324843755ba4cf"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "16a7aed8939080cb642c649f801b3a82"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "94b6196bbc2d0acd3b450a9220c1b67e"
  },
  {
    "url": "images/icons/icon-256x256.png",
    "revision": "c9e8574116193d6b6c1476315afe6a60"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "d6b7761afb1b362746a73e1266539860"
  },
  {
    "url": "images/logo.png",
    "revision": "d6b7761afb1b362746a73e1266539860"
  },
  {
    "url": "images/vs2019-task-runner-explorer-bindings.png",
    "revision": "22cc7c2d63ddcb340980731e18d7ebbe"
  },
  {
    "url": "images/vs2019-task-runner-explorer.png",
    "revision": "d212351bb59aebdf04688ea355b53a09"
  },
  {
    "url": "index.html",
    "revision": "20b3e3766ea5754a20ba82b1ddfb86a3"
  },
  {
    "url": "tag/Algoritmo/index.html",
    "revision": "99a23e61646ea668107219d628790d2c"
  },
  {
    "url": "tag/Angular/index.html",
    "revision": "f0c558db674ee42cfd0d0d34dc68055e"
  },
  {
    "url": "tag/AngularElements/index.html",
    "revision": "a07677fe6ff23d104897a7318e0b0623"
  },
  {
    "url": "tag/AngularMaterial/index.html",
    "revision": "3b8df4d37504fdff060507b4b577931e"
  },
  {
    "url": "tag/ASPNET/index.html",
    "revision": "16e070b51355bab9d50e92d4bc58d192"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "16f05420d82f368d6aba5dc9d1be6b24"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c1e2564d6414b8b61c7c22652ba5bcf2"
  },
  {
    "url": "tag/ES2015/index.html",
    "revision": "08529189a4786ee1adee971795bc1d26"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "37b59e64c211bf2d049a30f34eeeb0f8"
  },
  {
    "url": "tag/GitHubActions/index.html",
    "revision": "59308fbcf2125f16b1208dad045cd374"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "7179ea84f272891dedf1a43f151e32f3"
  },
  {
    "url": "tag/HTTPServer/index.html",
    "revision": "963839089dfc00b74878bdf854debbfc"
  },
  {
    "url": "tag/IIS/index.html",
    "revision": "e485a582a06a2752d7e6e3abedb0c952"
  },
  {
    "url": "tag/index.html",
    "revision": "0cbeeebc55dde43d562665085595e240"
  },
  {
    "url": "tag/InternetInformationServices/index.html",
    "revision": "537ad172ebd6c16c69b361dd0512a2a4"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "817ee603d2d051562524c29ad33ab887"
  },
  {
    "url": "tag/MaterialDesign/index.html",
    "revision": "a731c1f25446dfac7471a164c1122ea9"
  },
  {
    "url": "tag/NETCore/index.html",
    "revision": "88ae09aaea433c2ae180ed0bbf0b63ec"
  },
  {
    "url": "tag/Nodejs/index.html",
    "revision": "48e1082675dd99df68995e4e1a7ba52a"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "f49e1606c598776c552b2e40fa1043dd"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "6335054934018324d66b6f74d8b5a669"
  },
  {
    "url": "tag/PatronDeDiseño/index.html",
    "revision": "b11c347809244cf3129afd8338b15e2e"
  },
  {
    "url": "tag/SQLServer/index.html",
    "revision": "20bd79f7abf128ed8a320d7081721d4c"
  },
  {
    "url": "tag/TailwindCSS/index.html",
    "revision": "4905f7aaaf045ef11499be95cd927cc1"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "ded1b4ff35a78c291c902334369722d3"
  },
  {
    "url": "tag/VisualStudio/index.html",
    "revision": "b3e31ab9cc89c038189564d22d24c6a5"
  },
  {
    "url": "tag/VisualStudioCode/index.html",
    "revision": "dc5c173ac1fb1ded109f3c6ff5c442d3"
  },
  {
    "url": "tag/Vuejs/index.html",
    "revision": "ce3c281176cda34f06b0011abb6c8661"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "93b26d44b6d072ac0c4892857aff9c97"
  },
  {
    "url": "tag/WebComponents/index.html",
    "revision": "9ba9fe1f81782d2be221abcbceb35161"
  },
  {
    "url": "tag/WebDeploy/index.html",
    "revision": "61ab4fed2fa16dbece88fec3c1584d0f"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "70b0d8d418aa6fa98bf37edd5b761e35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
