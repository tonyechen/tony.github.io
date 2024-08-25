(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(275)}])},5829:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(5893),a=i(7294),s=i(9215),r=i(247),c=function(e){var n=e.position,i=e.title,c=e.date,o=e.content,l=e.tools,d=e.company,u=(0,a.useRef)(null),m=(0,s.Y)(u,{once:!0});return console.log(l),(0,t.jsx)(r.E.div,{className:"experience__container "+n,ref:u,initial:{opacity:0,y:50},animate:m?{opacity:1,y:0}:{},transition:{duration:.5},children:(0,t.jsxs)("div",{className:"experience__content",children:[(0,t.jsx)("p",{className:"experience__date",children:c}),(0,t.jsx)("p",{children:d}),(0,t.jsx)("p",{className:"experience__title",children:i}),(0,t.jsx)("p",{className:"experience__text",children:o}),(0,t.jsx)("div",{className:"experience__tool__container",children:l.map((function(e){return(0,t.jsx)("span",{className:"experience__tool__span",children:e},e)}))})]})})},o=function(){var e=(0,a.useRef)(null),n=(0,s.Y)(e,{once:!0});return(0,t.jsxs)(r.E.div,{className:"about",id:"about",ref:e,initial:{opacity:0,y:50},animate:n?{opacity:1,y:0}:{},transition:{duration:.5},children:[(0,t.jsx)("h1",{className:"about__title",children:"About Me"}),(0,t.jsxs)("div",{className:"about__container about__info",children:[(0,t.jsxs)("p",{className:"about__info__content",children:["Hello! My name is Anthony Chen, but you can call me Tony! I am a 3rd year at UCLA studying Computer Science.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"My current interest is building full-stack web applications, but I'm actively exploring other fields of CS as well: embedded system, data analytics, mobile development, machine learning, operating system, cloud computing, computer graphics, you name it!",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"I am currently an Intern at"," ",(0,t.jsx)("a",{rel:"stylesheet",href:"https://eitm.org/",children:(0,t.jsx)("u",{children:"Ellison Institute"})})," ","working on business software. I am also an Instructor at UCLA for Autonomous Rover."]}),(0,t.jsxs)("div",{className:"about__info__subsection",children:[(0,t.jsx)("h1",{className:"about__subsection__title",children:"Experience"}),(0,t.jsxs)("div",{className:"about__subsection___experience__container",children:[(0,t.jsx)(r.E.div,{className:"experience__bar",ref:e,initial:{height:"0%"},animate:n?{height:"100%"}:{},transition:{duration:5,ease:"easeInOut"}}),(0,t.jsx)(c,{position:"left",date:"June 2023 - September 2024",content:"I built and maintain business applications to facilitate the daily operations of the research institute. I work closely with cross functional teams including AI engineers, researchers, and project managers. My notible controbutions include a python data upload automation script, an image processing user dashboard, and a project lifecycle tracking application.",title:"Software Engineering Intern",company:"Ellison Institute of Technology",tools:["Python","Next.js","TypeScript","Microsoft","Assana","Oracle","PL/SQL"]}),(0,t.jsx)(c,{position:"right",date:"June 2023 - Present",content:"I designed and taught a hands-on engineering course aimed at equipping early-year engineering students with essential industry skills and foundational engineering principles. Through this course, students gained practical experience in Solidworks, C++ Programming, Circuit Design and Wiring",title:"E96 Autonomous Rover Instructor",company:"University of California, Los Angeles",tools:["SolidWorks","C++"]}),(0,t.jsx)(c,{position:"left",date:"Feburary 2022 - June 2022",content:"I performed various website maintenance and global style repair/upgrade for the UCLA school of Anderson.",title:"Web Developer",company:"UCLA Anderson School of Management",tools:["HTML","CSS","SASS","JavaScript","Drupal"]})]})]})]})]})}},2103:function(e,n,i){"use strict";var t=i(5893),a=i(1664),s=i.n(a),r=i(7294),c=i(9215),o=i(247);n.Z=function(e){var n=(0,r.useRef)(null),i=(0,c.Y)(n,{once:!0}),a=(0,r.useState)(),l=a[0],d=a[1];return(0,r.useEffect)((function(){if(l)"light"===l?document.body.classList.remove("dark"):document.body.classList.add("dark"),window.localStorage.setItem("theme",l);else{var e=window.localStorage.getItem("theme");e?d(e):(window.localStorage.setItem("theme","dark"),d("dark"))}}),[l]),(0,t.jsxs)(o.E.div,{className:"navbar",ref:n,initial:{y:-70},animate:i?{y:0}:{},transition:{duration:.5},children:[(0,t.jsx)("div",{className:"navbar__logo",children:(0,t.jsx)(s(),{href:"/",children:(0,t.jsx)("img",{src:"/tony-chen-logo.svg",alt:"logo",className:"navbar__logo__image"})})}),(0,t.jsxs)("div",{className:"navbar__content",children:[(0,t.jsx)(s(),{href:"#about",children:(0,t.jsx)("a",{children:"About"})}),(0,t.jsx)(s(),{href:"/projects",children:(0,t.jsx)("a",{children:"Projects"})}),(0,t.jsx)("a",{onClick:function(){d("light"===l?"dark":"light")},children:"light"===l?(0,t.jsx)(t.Fragment,{children:"\u263d"}):(0,t.jsx)(t.Fragment,{children:"\u263c"})})]})]})}},5987:function(e,n,i){"use strict";i.d(n,{Z:function(){return s}});var t=i(5893),a=(i(7294),function(e){return(0,t.jsxs)("a",{className:"project__container",href:e.link,children:[(0,t.jsx)("img",{src:e.image,alt:"image",className:"project__image"}),(0,t.jsx)("p",{children:e.name}),(0,t.jsx)("p",{children:e.description})]})}),s=(i(5525),function(){return(0,t.jsxs)("div",{className:"project",children:[(0,t.jsx)("h1",{className:"project__title",children:"Projects"}),(0,t.jsx)("input",{className:"project__search__bar",type:"text",placeholder:"search..."}),(0,t.jsxs)("div",{className:"projects__container",children:[(0,t.jsx)(a,{image:"/takescout-logo.svg",name:"TakeScout",description:"A delivery service app",link:"https://github.com/tonyechen/takescout"}),(0,t.jsx)(a,{image:"/bruin-study-logo.png",name:"Bruin Study",description:"A student pairing app",link:"https://github.com/tonyechen/bruin-study"}),(0,t.jsx)(a,{image:"http://vagas.aldeia.cc/wp-content/uploads/2021/04/Amazon.jpg",name:"Amazon clone",description:"A light weight amazon clone",link:"https://clone-123c4.web.app/"}),(0,t.jsx)(a,{image:"https://www.pngmart.com/files/22/Spotify-Logo-PNG-Transparent.png",name:"Spotify Player",description:"A simple spotify music player",link:"https://spotify-clone-git-main-tonyechen.vercel.app/"})]})]})})},5525:function(e,n,i){"use strict";var t=i(5893),a=i(1664),s=i.n(a);n.Z=function(e){return(0,t.jsx)(s(),{href:e.link,children:(0,t.jsxs)("div",{className:"main__project__container",children:[(0,t.jsx)("img",{className:"main__intro__project",src:e.image,alt:e.text}),(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:e.text})})]})})}},275:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return y}});var t=i(5893),a=i(2103),s=i(7294),r=i(5675),c=i.n(r),o=function(e){return(0,t.jsx)("img",{className:e.class,src:e.img,alt:e.alt})},l=function(e){return(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.href,children:(0,t.jsx)(o,{class:e.class,img:e.img,alt:e.alt})})},d=i(1664),u=i.n(d),m=i(5525),h=i(9215),p=i(247),_=["I am a Full Stack software developer","My favorite hobby is hating on pickleball","I am passionate about building software","I am a hard core caffeine addict","I love a good bowl of ramen","I am horible at speling","I can bench 215lbs","I can deadlift 315lbs","I can squat 245lbs","I wish I can bench 225 lbs","I am currently learning how to DJ","I enjoy some actions on the tennis court","I live in the gym","I <3 Everything Everywhere All At Once","I am Toe Knee, if you can pronounce it","I own a pair of shark slides","I once had a tiny toe-ny injury","I wish not to be homeless"],g=_.length,j=function(){var e=(0,s.useRef)(null),n=(0,h.Y)(e,{once:!0}),i=(0,s.useState)(_[0].split(" ").map((function(e,n){return(0,t.jsx)("span",{className:"special",children:e},e+n)}))),a=i[0],r=i[1];return(0,s.useEffect)((function(){var e=setInterval((function(){var e,n=null!==(e=_[Math.round(Math.random()*g)])&&void 0!==e?e:_[0];r(n.split(" ").map((function(e,i){return(0,t.jsx)("span",{className:"special",children:e},e+n+i)})))}),5500);return function(){return clearInterval(e)}}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"main",children:[(0,t.jsxs)(p.E.div,{className:"main__card",ref:e,initial:{opacity:0,y:100},animate:n?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:10,duration:.7},children:[(0,t.jsx)("div",{className:"main__image",children:(0,t.jsx)("div",{className:"main__image__wrapper",children:(0,t.jsx)(c(),{src:"/tony-chen-main.JPG",width:"300",height:"300",layout:"responsive"})})}),(0,t.jsxs)("div",{className:"main__card__info",children:[(0,t.jsxs)("div",{className:"main__card__link_container",children:[(0,t.jsx)(l,{href:"https://www.instagram.com/chen.thony/",class:"main__card__links",img:"/instagram.svg",alt:"instagram"}),(0,t.jsx)(l,{href:"https://github.com/tonyechen",class:"main__card__links",img:"/github.svg",alt:"github"}),(0,t.jsx)(l,{href:"https://www.linkedin.com/in/anthony-tony-chen/",class:"main__card__links",img:"/linkedin.svg",alt:"linkedin"}),(0,t.jsx)(l,{href:"https://mail.google.com/mail/u/0/?fs=1&to=anchen082016@gmail.com&tf=cm",class:"main__card__links",img:"/email.svg",alt:"email"})]}),(0,t.jsx)("p",{className:"main__card__text",children:"I am an avid developer and a 4th year student at UCLA studying Computer Science! I am currently on the hunt for an internship for summer 2025!"}),(0,t.jsx)("div",{className:"main__card__redirect",children:(0,t.jsx)(u(),{href:"/resume.pdf",children:(0,t.jsx)("a",{className:"main__card__button",children:"\u21f1 Resume"})})})]})]}),(0,t.jsxs)(p.E.div,{className:"main__intro",ref:e,initial:{opacity:0,y:100},animate:n?{opacity:1,y:0}:{},transition:{type:"spring",stiffness:100,damping:10,duration:.7},children:[(0,t.jsxs)("div",{className:"main__intro__text",children:[(0,t.jsx)("h4",{children:"Hi, I'm"}),(0,t.jsx)("h1",{children:"Tony Chen."}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{className:"pop-up-texts",children:a})})]}),(0,t.jsxs)("div",{className:"main__intro__feature__projects",children:[(0,t.jsx)("h4",{children:"Featured Projects:"}),(0,t.jsxs)("div",{className:"main__intro__projects",children:[(0,t.jsx)(m.Z,{image:"/bruin-study-logo.png",text:"Bruin Study",link:"/projects/#bruin-study"}),(0,t.jsx)(m.Z,{image:"/takescout-logo.svg",text:"TakeScout",link:"/projects/#takescout"})]})]})]})]})})},x=i(5829),f=i(5987);function y(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(j,{}),(0,t.jsx)(x.Z,{}),(0,t.jsx)(f.Z,{})]})]})}}},function(e){e.O(0,[317,675,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);