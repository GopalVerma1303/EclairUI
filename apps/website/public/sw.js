if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0260c985-a63850bf6ab01603.js",revision:"a63850bf6ab01603"},{url:"/_next/static/chunks/2413-4ce956090f10ec59.js",revision:"4ce956090f10ec59"},{url:"/_next/static/chunks/2641-bf64b8416b395f4b.js",revision:"bf64b8416b395f4b"},{url:"/_next/static/chunks/2997-77cd9215ad5f536b.js",revision:"77cd9215ad5f536b"},{url:"/_next/static/chunks/3321-bfbb3fecae1f0e51.js",revision:"bfbb3fecae1f0e51"},{url:"/_next/static/chunks/448715ac-5e9520a834213031.js",revision:"5e9520a834213031"},{url:"/_next/static/chunks/52361fab-a66df4361644d362.js",revision:"a66df4361644d362"},{url:"/_next/static/chunks/5be28a27-158407b2ff7fa53e.js",revision:"158407b2ff7fa53e"},{url:"/_next/static/chunks/8196-cf0d2e82de34654e.js",revision:"cf0d2e82de34654e"},{url:"/_next/static/chunks/9737-10859d21d8fdbc06.js",revision:"10859d21d8fdbc06"},{url:"/_next/static/chunks/bd43a57c-5ef99b54608834dd.js",revision:"5ef99b54608834dd"},{url:"/_next/static/chunks/framework-04384c949e818510.js",revision:"04384c949e818510"},{url:"/_next/static/chunks/main-c9580680e9c1e070.js",revision:"c9580680e9c1e070"},{url:"/_next/static/chunks/pages/404-f2a3294d4dd5dfd2.js",revision:"f2a3294d4dd5dfd2"},{url:"/_next/static/chunks/pages/_app-b69859028ca21015.js",revision:"b69859028ca21015"},{url:"/_next/static/chunks/pages/_error-682dedafd1be03ad.js",revision:"682dedafd1be03ad"},{url:"/_next/static/chunks/pages/colors-7f338c1eee33945c.js",revision:"7f338c1eee33945c"},{url:"/_next/static/chunks/pages/components-ab76c9fea95ce9f0.js",revision:"ab76c9fea95ce9f0"},{url:"/_next/static/chunks/pages/components/accordions-e4135af967125f02.js",revision:"e4135af967125f02"},{url:"/_next/static/chunks/pages/components/accordions/gopx-accordion-8b5de24418017589.js",revision:"8b5de24418017589"},{url:"/_next/static/chunks/pages/components/add-utils-dfa31a9f343de312.js",revision:"dfa31a9f343de312"},{url:"/_next/static/chunks/pages/components/backgrounds-2c5ff1b6b803dcb6.js",revision:"2c5ff1b6b803dcb6"},{url:"/_next/static/chunks/pages/components/backgrounds/bricks-0a53e4c98c53142b.js",revision:"0a53e4c98c53142b"},{url:"/_next/static/chunks/pages/components/backgrounds/check-39f397ad981cfc3a.js",revision:"39f397ad981cfc3a"},{url:"/_next/static/chunks/pages/components/backgrounds/cross-cb929b608e4985a0.js",revision:"cb929b608e4985a0"},{url:"/_next/static/chunks/pages/components/backgrounds/dots-63a78a8f1559ce38.js",revision:"63a78a8f1559ce38"},{url:"/_next/static/chunks/pages/components/backgrounds/grid-a685eb3bc071a839.js",revision:"a685eb3bc071a839"},{url:"/_next/static/chunks/pages/components/backgrounds/matrix-98a8894820755f7d.js",revision:"98a8894820755f7d"},{url:"/_next/static/chunks/pages/components/backgrounds/no-signal-494c1e5534cd97e0.js",revision:"494c1e5534cd97e0"},{url:"/_next/static/chunks/pages/components/backgrounds/plus-40d40b654c6b2657.js",revision:"40d40b654c6b2657"},{url:"/_next/static/chunks/pages/components/buttons-9e19001db1dd6bf6.js",revision:"9e19001db1dd6bf6"},{url:"/_next/static/chunks/pages/components/buttons/gopx-buttons-45ef5430c561d59d.js",revision:"45ef5430c561d59d"},{url:"/_next/static/chunks/pages/components/cards-b6368e5389c7cf51.js",revision:"b6368e5389c7cf51"},{url:"/_next/static/chunks/pages/components/cards/profile-card-a0e9f2b6a3069d97.js",revision:"a0e9f2b6a3069d97"},{url:"/_next/static/chunks/pages/components/carousels-a9b6cf4a23a741c7.js",revision:"a9b6cf4a23a741c7"},{url:"/_next/static/chunks/pages/components/carousels/infinite-carousel-eca93b78f511f657.js",revision:"eca93b78f511f657"},{url:"/_next/static/chunks/pages/components/dropdown-menus-a6a410a3a158ee8b.js",revision:"a6a410a3a158ee8b"},{url:"/_next/static/chunks/pages/components/dropdown-menus/gopx-dropdown-9e7bc7bc8c9525fa.js",revision:"9e7bc7bc8c9525fa"},{url:"/_next/static/chunks/pages/components/faq-sections-553ee7501e22f0e0.js",revision:"553ee7501e22f0e0"},{url:"/_next/static/chunks/pages/components/grids-73dcf83adeb13266.js",revision:"73dcf83adeb13266"},{url:"/_next/static/chunks/pages/components/grids/gopx-bento-grid-2e812b88adcfc536.js",revision:"2e812b88adcfc536"},{url:"/_next/static/chunks/pages/components/hero-sections-137e2545f20102db.js",revision:"137e2545f20102db"},{url:"/_next/static/chunks/pages/components/inputs-448f9541615acfa3.js",revision:"448f9541615acfa3"},{url:"/_next/static/chunks/pages/components/inputs/copyable-input-d1bb7689d4c2c030.js",revision:"d1bb7689d4c2c030"},{url:"/_next/static/chunks/pages/components/install-nextjs-78a406323797aa0e.js",revision:"78a406323797aa0e"},{url:"/_next/static/chunks/pages/components/install-tailwind-8d6be901997c8760.js",revision:"8d6be901997c8760"},{url:"/_next/static/chunks/pages/components/links-492388dd71e0deb2.js",revision:"492388dd71e0deb2"},{url:"/_next/static/chunks/pages/components/links/torsional-link-72187cb93cc8db4f.js",revision:"72187cb93cc8db4f"},{url:"/_next/static/chunks/pages/components/pricing-sections-823beeddaca6f61b.js",revision:"823beeddaca6f61b"},{url:"/_next/static/chunks/pages/components/text-24037ae6f1cd59d3.js",revision:"24037ae6f1cd59d3"},{url:"/_next/static/chunks/pages/components/text/ghost-label-d216902cda019d94.js",revision:"d216902cda019d94"},{url:"/_next/static/chunks/pages/components/tooltips-ddd2a13a581acad5.js",revision:"ddd2a13a581acad5"},{url:"/_next/static/chunks/pages/components/tooltips/image-tooltip-b01c8eaa69992cd8.js",revision:"b01c8eaa69992cd8"},{url:"/_next/static/chunks/pages/components/tooltips/text-tooltip-20570873f4e25d26.js",revision:"20570873f4e25d26"},{url:"/_next/static/chunks/pages/faqs-82694ab9765101c8.js",revision:"82694ab9765101c8"},{url:"/_next/static/chunks/pages/index-14fbf461a4e9425d.js",revision:"14fbf461a4e9425d"},{url:"/_next/static/chunks/pages/pricing-8484963f3fe220ab.js",revision:"8484963f3fe220ab"},{url:"/_next/static/chunks/pages/privacy-policy-2ade33f92a91b3c8.js",revision:"2ade33f92a91b3c8"},{url:"/_next/static/chunks/pages/templates-289da12e553e71d4.js",revision:"289da12e553e71d4"},{url:"/_next/static/chunks/pages/terms-and-conditions-ea8fba2e69d047d2.js",revision:"ea8fba2e69d047d2"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-dd8919a572f3efbe.js",revision:"dd8919a572f3efbe"},{url:"/_next/static/css/0e925cd6bab8c695.css",revision:"0e925cd6bab8c695"},{url:"/_next/static/css/7cf8e0710adb7d18.css",revision:"7cf8e0710adb7d18"},{url:"/_next/static/css/8cc0bd4c615482cd.css",revision:"8cc0bd4c615482cd"},{url:"/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff",revision:"1608a09b"},{url:"/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf",revision:"4aafdb68"},{url:"/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2",revision:"a79f1c31"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff",revision:"b6770918"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf",revision:"cce5b8ec"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2",revision:"ec17d132"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf",revision:"07ef19e7"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2",revision:"55fac258"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff",revision:"dad44a7f"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff",revision:"9f256b85"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf",revision:"b18f59e1"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2",revision:"d42a5579"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff",revision:"7c187121"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2",revision:"d3c882a6"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf",revision:"ed38e79f"},{url:"/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf",revision:"b74a1a8b"},{url:"/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2",revision:"c3fb5ac2"},{url:"/_next/static/media/KaTeX_Main-Bold.d181c465.woff",revision:"d181c465"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2",revision:"6f2bb1df"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf",revision:"70d8b0a5"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff",revision:"e3f82f9d"},{url:"/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf",revision:"47373d1e"},{url:"/_next/static/media/KaTeX_Main-Italic.8916142b.woff2",revision:"8916142b"},{url:"/_next/static/media/KaTeX_Main-Italic.9024d815.woff",revision:"9024d815"},{url:"/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2",revision:"0462f03b"},{url:"/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff",revision:"7f51fe03"},{url:"/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf",revision:"b7f8fe9b"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2",revision:"572d331f"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf",revision:"a879cf83"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff",revision:"f1035d8d"},{url:"/_next/static/media/KaTeX_Math-Italic.5295ba48.woff",revision:"5295ba48"},{url:"/_next/static/media/KaTeX_Math-Italic.939bc644.ttf",revision:"939bc644"},{url:"/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2",revision:"f28c23ac"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2",revision:"8c5b5494"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf",revision:"94e1e8dc"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff",revision:"bf59d231"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2",revision:"3b1e59b3"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff",revision:"7c9bc82b"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf",revision:"b4c20c84"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff",revision:"74048478"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2",revision:"ba21ed5f"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf",revision:"d4d7ba48"},{url:"/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2",revision:"03e9641d"},{url:"/_next/static/media/KaTeX_Script-Regular.07505710.woff",revision:"07505710"},{url:"/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf",revision:"fe9cbbe1"},{url:"/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff",revision:"e1e279cb"},{url:"/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2",revision:"eae34984"},{url:"/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf",revision:"fabc004a"},{url:"/_next/static/media/KaTeX_Size2-Regular.57727022.woff",revision:"57727022"},{url:"/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2",revision:"5916a24f"},{url:"/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf",revision:"d6b476ec"},{url:"/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff",revision:"9acaf01c"},{url:"/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf",revision:"a144ef58"},{url:"/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2",revision:"b4230e7e"},{url:"/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2",revision:"10d95fd3"},{url:"/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff",revision:"7a996c9d"},{url:"/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf",revision:"fbccdabe"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff",revision:"6258592b"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2",revision:"a8709e36"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf",revision:"d97aaf4a"},{url:"/_next/static/media/arrow-right.1a3665d4.svg",revision:"7a2cf7df83b3e34a1740c626c0ad4638"},{url:"/_next/static/media/box.2f47a33b.svg",revision:"1dbf4f053d36cb3d5184c28fb64a930e"},{url:"/_next/static/media/brush.f70c6bf6.svg",revision:"64773768bcecb5c7635e0b5810db08cf"},{url:"/_next/static/media/cards.afb553cd.svg",revision:"26a8bb58019b6ce85567ca3b1bf0bcd6"},{url:"/_next/static/media/chevron-right.8cb1c01f.svg",revision:"710716f1b94078ee0aa9317b00c1f0f5"},{url:"/_next/static/media/cloud.9abddccb.svg",revision:"e2f1cc8179beed83da0327f28823e9a1"},{url:"/_next/static/media/code.ae437384.svg",revision:"095e06af90a3dbce2801c79b5a4893ef"},{url:"/_next/static/media/diagram.3a6b8948.svg",revision:"d89ec72c34f7bdfcd00395b8e9ebe282"},{url:"/_next/static/media/dropper.2e14d079.svg",revision:"324c8e0b2903431e8fa26672a076ab19"},{url:"/_next/static/media/file.593070c6.svg",revision:"e9ad4102546fe36102414dae60a0ec9e"},{url:"/_next/static/media/files.36ba0e8b.svg",revision:"7132ca4d144d4bf186a0777c69fff856"},{url:"/_next/static/media/folder-tree.aad4662f.svg",revision:"ffe65caa9b77bd3779280774bd5c10ce"},{url:"/_next/static/media/formula.ecf76bd5.svg",revision:"bd0a9ed3003638c212db15e7368f1491"},{url:"/_next/static/media/gear.3849e092.svg",revision:"a3e267193909dab26ad88aa6acb974da"},{url:"/_next/static/media/globe.379d3c74.svg",revision:"f60b5772000007d6171d0b72521f4166"},{url:"/_next/static/media/id-card.9247aec2.svg",revision:"3b56fc41faeb83bfd9848f096adc5130"},{url:"/_next/static/media/lightning.3647b1e9.svg",revision:"29e130af4a77cae5cef044466aff54ff"},{url:"/_next/static/media/link.64f40e02.svg",revision:"a815e2f6b09592e70416c6c4cbabdc1e"},{url:"/_next/static/media/markdown.35bb5554.svg",revision:"54f258684469bf17cdcc45ca654363f3"},{url:"/_next/static/media/newsletter.3b3d08fd.svg",revision:"5b7e09f0a9eacf0ea498896f07a2de3e"},{url:"/_next/static/media/one.c5310fdf.svg",revision:"25bb8dfe534259a5d015d7399cbb9cb0"},{url:"/_next/static/media/picture.ebadce8f.svg",revision:"39b789d3301bf9e7ed3c2c0bf81b9cf9"},{url:"/_next/static/media/rows.a5b1f484.svg",revision:"ed2cf1944a13786344ba0a0adfdbc0a1"},{url:"/_next/static/media/stars.c36341de.svg",revision:"28ab39d997a56a47a37789a47bb94d6b"},{url:"/_next/static/media/switch.584354d3.svg",revision:"00a62fdcf3ee01a8afa6390b3788116c"},{url:"/_next/static/media/table.0e035a09.svg",revision:"df8a8b8b94224cd0cb698cc07310bb8e"},{url:"/_next/static/media/tailwind.68672c31.svg",revision:"2163d97454e7315ae985609c776a045b"},{url:"/_next/static/media/terminal.b998eedb.svg",revision:"743b449dd6a64c63349acb7eeb496109"},{url:"/_next/static/media/warning.6a32980b.svg",revision:"5743114d575e3bdbe9df43bf22047120"},{url:"/_next/static/pn8dmZIDZ4R76HWPbKeKy/_buildManifest.js",revision:"335f10171eccde56669fa5e452f0de9c"},{url:"/_next/static/pn8dmZIDZ4R76HWPbKeKy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"27bdec5d98651bce3bbbcebf4df34a45"},{url:"/android-chrome-512x512.png",revision:"8f1bf3e30c381d7965519e9cfbfb4653"},{url:"/apple-touch-icon.png",revision:"f575fab20247f759afbd33458a433d7a"},{url:"/assets/avatars/1.jpeg",revision:"687b974d784d025d909cdfc31fa98b40"},{url:"/assets/avatars/2.jpeg",revision:"61e9ecc334e417eb6b5fc2e2ac747ba5"},{url:"/assets/avatars/3.jpeg",revision:"64d2dbee767d272ff8c5a436c3cdf97e"},{url:"/assets/avatars/4.jpeg",revision:"95e496edf6dca06412187ed868a78e98"},{url:"/assets/avatars/5.jpeg",revision:"5a1420093ac44ed7beeabe9b361e283c"},{url:"/assets/avatars/6.jpeg",revision:"12d24c08edebfb8acbdb4f6000004bc5"},{url:"/assets/blog-theme.png",revision:"ebec60c9d58ce3f31c64aa0446ecfb0b"},{url:"/assets/brands/framer-motion.png",revision:"859b832d2b75d84e8b093d1ce685cad8"},{url:"/assets/brands/framer-motion.svg",revision:"be69789d248daa3222003145edfe2dfa"},{url:"/assets/brands/gsap.png",revision:"c5872dc34b9ac1e193c0347975f93bcf"},{url:"/assets/brands/nextjs.png",revision:"fefed8e676af18ae7abadf9dc7f566cd"},{url:"/assets/brands/nextjs.svg",revision:"18b7e3cfc453d47fe24b0d25baa4ab1e"},{url:"/assets/brands/react.svg",revision:"b9a67d7c2d34e366788776c405731ca6"},{url:"/assets/brands/tailwind.png",revision:"2441cb996a3afd2ae91cf88fe008a623"},{url:"/assets/brands/tailwind.svg",revision:"2f77e9d2d9b4446ea7311e9ebcd2ed12"},{url:"/assets/brands/tailwind.webp",revision:"8791b9e97190c0e251abaaff21f047e7"},{url:"/assets/card-1.dark.png",revision:"4eb9f789bd0098a15b0bab8a87e80d89"},{url:"/assets/card-1.png",revision:"00868a0baebd11985603fe8636e0717f"},{url:"/assets/colors.png",revision:"25fc791f21e7eba381de11e1ffe31b65"},{url:"/assets/components/accordions/gopx-accordion.png",revision:"ba16e309993d9b23bae769472854f268"},{url:"/assets/components/backgrounds.png",revision:"a26c3e0b0c769e54e08c0a80c50e3c15"},{url:"/assets/components/backgrounds/bricks.png",revision:"8f5483fad40373caa62d8ebfae29158a"},{url:"/assets/components/backgrounds/check.png",revision:"a7f200d116980d2eb3544f44c1ba119a"},{url:"/assets/components/backgrounds/cross.png",revision:"ff6737807db014e71dd3232c265e2e8d"},{url:"/assets/components/backgrounds/dots.png",revision:"741f7fee47a94a787e6e92981cd0e86a"},{url:"/assets/components/backgrounds/grid.png",revision:"796e10639e8e53dabd204d374c53174d"},{url:"/assets/components/backgrounds/matrix.png",revision:"9345f143541eb6451f4b289b80d8aed3"},{url:"/assets/components/backgrounds/no-signal.png",revision:"643b850463d1d61cac0041cb76396d3c"},{url:"/assets/components/backgrounds/plus.png",revision:"aa8ea384795fda2d42f0784d775f181e"},{url:"/assets/components/buttons/gopx-buttons.png",revision:"b9e5ec5a156d60c5f8ef3919b6e2d457"},{url:"/assets/components/cards/profile-card.png",revision:"2aca44d4cba7bfd6899dbda90f65d23a"},{url:"/assets/components/carousels/infinite-carousel.png",revision:"22b93b02c77e54a563e2f427b6d79991"},{url:"/assets/components/components.png",revision:"e1efdffa4793504a1a6c851cc0d72095"},{url:"/assets/components/dropdown-menus/gopx-dropdown.png",revision:"c8f0561ac1149dcbe6d5366f880d0a6b"},{url:"/assets/components/grids/gopx-bento-grid.png",revision:"e898e8d3e14c2b2e160f1a640c1a43a6"},{url:"/assets/components/inputs/copyable-input.png",revision:"a58748c51a8ccbaef8bed490c625663a"},{url:"/assets/components/links/torsional-link.png",revision:"97eb8e4cfdce9ad2af83de02dcda2e4c"},{url:"/assets/components/sections/gopx-faqs.png",revision:"faabd4181b1f812c85970f7729d58682"},{url:"/assets/components/sections/gopx-pricing.png",revision:"38470b48b92463994229db53d892ce37"},{url:"/assets/components/text/ghost-label.png",revision:"8d94676764bfad13be220e86be8b53a9"},{url:"/assets/components/tooltips/image-tooltip.png",revision:"d3ec30f6002c7bad924cc9caf7f3af39"},{url:"/assets/components/tooltips/text-tooltip.png",revision:"4ccb2995f63a1499790a6ef59214ebf0"},{url:"/assets/docs-theme.png",revision:"632e0ac47583ff49de7aadac16d2b431"},{url:"/assets/docs/banner.png",revision:"b487a148d912f518bc8a991005d40c97"},{url:"/assets/docs/custom-theme.png",revision:"51a0828e8ad2c139dff2c30e00d6c264"},{url:"/assets/docs/logo.png",revision:"8c576d302ed64d076fde3ec87a26cac4"},{url:"/assets/docs/menu.png",revision:"45970f55f51b280476a707b00472e5f1"},{url:"/assets/docs/navigation.png",revision:"6cdbea067e1d26f1538537f6fd53ad1b"},{url:"/assets/docs/project-link.png",revision:"07e777b97912fb2364cbef1ef34a82ac"},{url:"/assets/docs/sidebar-customized.png",revision:"56207115e2312ee59ce090ebdc76689d"},{url:"/assets/docs/sub-docs.mp4",revision:"b05ac980f7b024f8d76709a6f3f93103"},{url:"/assets/docs/title-suffix.png",revision:"4280710f177c3e2fedfdca2e7dba9e98"},{url:"/assets/gradient-bg.jpeg",revision:"c522a2888a3be798c1019a625aa122df"},{url:"/assets/hero/Components.zip",revision:"90b1f258059aefb70781c06e09dfd7ff"},{url:"/assets/hero/bento/1.png",revision:"ef9c36a949a3db07aab085dbf6425ad8"},{url:"/assets/hero/bento/2.png",revision:"ce2a24c0acbfb91e0f5a92f1f46692fc"},{url:"/assets/hero/bento/3.png",revision:"f04e917ee288ee8461e724b4f0162f2a"},{url:"/assets/hero/bento/4.png",revision:"c8490949e10eecbfff2d160565d236e9"},{url:"/assets/hero/bento/5.png",revision:"3f501b04558d85981ba3f670efb9a461"},{url:"/assets/hero/image1.png",revision:"5d9f5d69776debf2b578b26f6b1e5f4f"},{url:"/assets/hero/image10.png",revision:"44baa4bc06d4c8d48518b405cfa72d74"},{url:"/assets/hero/image11.png",revision:"b8f1e8e4a960dc03c92978fc0d493189"},{url:"/assets/hero/image12.png",revision:"158db7ae47a75f6fe373a8c810d7c69a"},{url:"/assets/hero/image13.png",revision:"ee713b7e1d3ac3c0f3872b91bc41d1b3"},{url:"/assets/hero/image14.png",revision:"b73cea2f59915bebfa8b78966315b026"},{url:"/assets/hero/image15.png",revision:"1fbdcebb40fea2d21713a3ed2cc0498a"},{url:"/assets/hero/image16.png",revision:"cf384b6ca160d0bba2c9d5bde7c961b7"},{url:"/assets/hero/image2.png",revision:"34921bfe44c3a7342b7449bb828842a3"},{url:"/assets/hero/image3.png",revision:"f73a22ba6bfec279767ed808ac042955"},{url:"/assets/hero/image4.png",revision:"7914fbf4b3f4f117c69d54adef9f5268"},{url:"/assets/hero/image5.png",revision:"b927f22880d71dea7097760a4fe4a787"},{url:"/assets/hero/image6.png",revision:"22d1de8fc311b73dc51b090b70ec925e"},{url:"/assets/hero/image7.png",revision:"746ea5175acd2dc3e8098c3b96cbdfd8"},{url:"/assets/hero/image8.png",revision:"638e584a6b405fa8248e915f7e534235"},{url:"/assets/hero/image9.png",revision:"1f18ab81b0f31ddcee66d1004bcb15c2"},{url:"/assets/high-contrast.png",revision:"a5b084f19316c389ee77e292d5ce1454"},{url:"/assets/routing.png",revision:"1351486c930bc4f86a4e0f91b99ac926"},{url:"/assets/routing@1x.png",revision:"29ed39048ee3fca3c5fdae539cb56649"},{url:"/assets/search-dark.mp4",revision:"d69171e099f2b59058b1b98fca5b2b02"},{url:"/assets/search.mp4",revision:"89d84e9eac11f0743a35dda9dd08d906"},{url:"/assets/syntax-highlighting.svg",revision:"15b8b2a2af9587a93def6a0c3364ea22"},{url:"/assets/templates/gopx-1.png",revision:"6005e21e6fb1dfcd3c994074d9e4e481"},{url:"/assets/templates/gopx-2.png",revision:"24fc5d8b2c15099d813f52b9c3b73f3a"},{url:"/assets/templates/gopx-3.png",revision:"7e45ea99483b79b3103b633beeed7131"},{url:"/assets/templates/gopx-blogs-1.png",revision:"1792b906ece4818186298ed3b4f25553"},{url:"/assets/templates/gopx-blogs-2.png",revision:"28b62d57578c69042c5d68c8fa5849e8"},{url:"/assets/templates/gopx-nb-1.png",revision:"6e0818098cace09a51f1bebb499bef68"},{url:"/assets/templates/gopx-nb-2.png",revision:"b3609f880ee6d9abe4b5b1289d88b0c9"},{url:"/assets/templates/gopx-sc-1.png",revision:"2bd77d7c14baa883d34d95a148322584"},{url:"/assets/templates/gopx-sc-2.png",revision:"d1aaac465dbb512ee7072574733158fe"},{url:"/assets/templates/templates.png",revision:"ae5c510000c63bd9a3ec7a9105a95694"},{url:"/atom.xml",revision:"ecd7caf4b566a528e1b81d971676be07"},{url:"/cli/cli-dark.png",revision:"f42c671b8d8b6a95b05d5da8b8915a90"},{url:"/cli/cli-light.png",revision:"2680901dae160832a0c9ac6e1572fbe0"},{url:"/favicon-16x16.png",revision:"71bf88a1afaec8d78ddc9427bc029987"},{url:"/favicon-32x32.png",revision:"024046d1e17ae9dc2743bbd41feb319d"},{url:"/favicon.ico",revision:"2e924aa22254cdc2a9e0f75f1645f8b1"},{url:"/icon-192x192.png",revision:"530e7cbd01a751b17cf3415071bf65e8"},{url:"/icon-256x256.png",revision:"57d638232ba6fbd7c985163ac5f9d576"},{url:"/icon-384x384.png",revision:"b004265bbab46adee74b4a77d7c040a0"},{url:"/icon-512x512.png",revision:"54baf571e970f8c5871cd5964f606506"},{url:"/manifest.webmanifest",revision:"33a24fc6c5f41f01236f16ce016d6a04"},{url:"/me.jpg",revision:"3d06f499a532d1a61d8edfdaf1f17d22"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/og.jpeg",revision:"29844436b9bcb83c126b70fddbe32c17"},{url:"/registry/components/block/gopx-faqs.json",revision:"1fda613aac7a300b3d8815ba867a2402"},{url:"/registry/components/block/gopx-hero.json",revision:"9e9dd9877165669dbe55a22c15835767"},{url:"/registry/components/block/gopx-pricing.json",revision:"e97b4b3c9291bba69be25979c910dd92"},{url:"/registry/components/example/copyable-input-demo.json",revision:"27e7ea0bd00f397bb411339f5dcc1877"},{url:"/registry/components/example/ghost-label-demo.json",revision:"97c99ab3abfe7c1328d4b3d14b68fed3"},{url:"/registry/components/example/gopx-accordion-demo.json",revision:"cf4ff16a53e795122d993c9155524f61"},{url:"/registry/components/example/gopx-accordion.json",revision:"a37c540b58772d7e55c57f617722d7ca"},{url:"/registry/components/example/gopx-dropdown-demo.json",revision:"6f7ed950dcfcde159c1bfc2073dbe813"},{url:"/registry/components/example/image-tooltip-demo.json",revision:"4ecb89a44579bce5a18ca0a6f5c24f41"},{url:"/registry/components/example/infinite-carousel-demo.json",revision:"fc6cf2d45ebe12ccfd1e37f6aa7e0734"},{url:"/registry/components/example/text-tooltip-demo.json",revision:"e9399e8891cad8cc36bbb03ba23f8a5e"},{url:"/registry/components/example/torsional-link-demo.json",revision:"18798c9140f8bdf00a9ccb413d1dafca"},{url:"/registry/components/ui/accordian.json",revision:"38403ccfc7d0554b53f7fd53933c12d5"},{url:"/registry/components/ui/accordion.json",revision:"f1f7fbc79fecd168201c3dd1b3b13117"},{url:"/registry/components/ui/avatar-stack.json",revision:"7bcb8b3a2f21517f192ea011a74b1a49"},{url:"/registry/components/ui/bento-grid.json",revision:"8a7042de52d8888fd9d22f9119698a79"},{url:"/registry/components/ui/bg-bricks.json",revision:"ee7f05009fe84662f469f6a9fa43a4b3"},{url:"/registry/components/ui/bg-check.json",revision:"27d2a04909b49cb22fce678a91d34659"},{url:"/registry/components/ui/bg-cross.json",revision:"d3dce641e4fd92c05bc5f8fa6d764262"},{url:"/registry/components/ui/bg-dots.json",revision:"1d5a5f1ec0daa545c2aed7667f4f7ffb"},{url:"/registry/components/ui/bg-grid.json",revision:"d807185833b5d87df0d7d56d9e0ac12b"},{url:"/registry/components/ui/bg-matrix.json",revision:"06b6fb5b0bc3c943c85824746410ebf6"},{url:"/registry/components/ui/bg-nosignal.json",revision:"0e922051784c3851a533e53fef143e96"},{url:"/registry/components/ui/bg-plus.json",revision:"4b50d0553ea79a15e990c028ee1fa185"},{url:"/registry/components/ui/blog-row.json",revision:"b19b8cce81bc003365525764e311a10b"},{url:"/registry/components/ui/copyable-input.json",revision:"a1933f36cd484f7a2930766d86aba46b"},{url:"/registry/components/ui/dropdown.json",revision:"5b859d9896015be25438f4a6406ea57b"},{url:"/registry/components/ui/ghost-label.json",revision:"9903d56c125c7ca125c23b8e8dcdf180"},{url:"/registry/components/ui/image-tooltip.json",revision:"5cfbcf2a9686f2dad63221bcc7aabcb9"},{url:"/registry/components/ui/infinite-carousel.json",revision:"54974f260ad3da53ac6bf0c0235addc4"},{url:"/registry/components/ui/page-header.json",revision:"38b15ca7e83ced532e118670c9fea6a4"},{url:"/registry/components/ui/profile-card.json",revision:"5eb4a30584b26073cba8b3abfac20cf6"},{url:"/registry/components/ui/tab-button.json",revision:"c212bc34cb64f9562a39fe0bcad8f8ab"},{url:"/registry/components/ui/text-tooltip.json",revision:"c87144e7abde08ad0ddbd54299472ab9"},{url:"/registry/components/ui/torsional-link.json",revision:"1eb1ac6dea0272c8d38462432f0b03ad"},{url:"/registry/index.json",revision:"bb558d6686544ac4e172dfbe7e2da655"},{url:"/robots.txt",revision:"c92baed611b02376a340b7fe3b0bcfb6"},{url:"/rss.json",revision:"d2e6a7f0e3357585929901aa40ded760"},{url:"/rss.xml",revision:"cc81f8d006d7c4647cdc1e179de80b47"},{url:"/site.webmanifest",revision:"c74fe75002aaeca7e64bbc0fc97b6909"},{url:"/sitemap-0.xml",revision:"a778dddf39037e448a2a207c9b78522a"},{url:"/sitemap.xml",revision:"f246918e62b546b4a6be4d121a944ab3"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/webui-dark-rounded.png",revision:"86557428b10872f2e538503404ace833"},{url:"/webui-dark.png",revision:"144a7d47946f3301af0022cef3fc9a2d"},{url:"/webui-footer-dark.png",revision:"854ca0393e71fda39d62101ace9cc613"},{url:"/webui-footer-light.png",revision:"cb7db61647f1cfd6992e629e65640b27"},{url:"/webui-light-rounded.png",revision:"19abcf304e67db62e64318d32ac8e840"},{url:"/webui-light.png",revision:"f8de129c18e2ff68d5c05a9251f26ca9"},{url:"/webui-logo-dark.png",revision:"0af1a24ca0179ffec0ee82acfdee2818"},{url:"/webui-logo-light.png",revision:"ca9bc4047ae956481e308e9d6cc050e3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
