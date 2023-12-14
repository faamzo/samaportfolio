const txanime = document.querySelector('h3')


new Typewriter(txanime, {
        deleteSpeed: 20,
        loop: true,
  
})
.changeDelay(20)
.typeString('nous sommes dev ')
.pauseFor(300)
.typeString('<strong  style="color: rgb(254, 100, 100)">, front-end</strong> !')
.pause(1000)
.deleteChars(12)
.typeString('<span style="color: rgb(254, 100, 100)"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: rgb(254, 100, 100)"> Javascript</span> !')
.pauseFor(1000)
.deleteChars(12)
.start()

