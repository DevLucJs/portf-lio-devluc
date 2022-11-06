// ============================================ MENU DROPDOWN ============================================ //
const btnMobile = document.getElementById('btn')
function menuOpening() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}
btnMobile.addEventListener('click', menuOpening)

// ============================================ STACKS INFO ============================================ //
const stacksInfoBtn = document.getElementById('stacks-info-btn')
function stacksInfoOpening() {
  const stacksInfo = document.getElementById('stacks-info')
  stacksInfo.classList.toggle('active2')
}
stacksInfoBtn.addEventListener('mouseover', stacksInfoOpening)
stacksInfoBtn.addEventListener('mouseout', stacksInfoOpening)

// ============================================ USER HISTORYS ============================================ //
const html5btn = document.getElementById('html5btn')
const close = document.getElementById('close')

function html5History() {
  const stacksHistory = document.getElementById('stack-one')
  stacksHistory.classList.toggle('active3')
}

html5btn.addEventListener('click', html5History)
close.addEventListener('click', html5History)
// ========================================= //
const css3btn = document.getElementById('css3btn')
const close2 = document.getElementById('close2')

function css3History() {
  const stacksHistory = document.getElementById('stack-two')
  stacksHistory.classList.toggle('active4')
}

css3btn.addEventListener('click', css3History)
close2.addEventListener('click', css3History)
// ========================================= //
const javascriptbtn = document.getElementById('javascriptbtn')
const close3 = document.getElementById('close3')

function javascriptHistory() {
  const stacksHistory = document.getElementById('stack-three')
  stacksHistory.classList.toggle('active5')
}

javascriptbtn.addEventListener('click', javascriptHistory)
close3.addEventListener('click', javascriptHistory)
// ========================================= //
const mysqlbtn = document.getElementById('mysqlbtn')
const close4 = document.getElementById('close4')

function mysqlHistory() {
  const stacksHistory = document.getElementById('stack-four')
  stacksHistory.classList.toggle('active6')
}

mysqlbtn.addEventListener('click', mysqlHistory)
close4.addEventListener('click', mysqlHistory)
// ========================================= //
const reactbtn = document.getElementById('reactbtn')
const close5 = document.getElementById('close5')

function reactHistory() {
  const stacksHistory = document.getElementById('stack-five')
  stacksHistory.classList.toggle('active7')
}

reactbtn.addEventListener('click', reactHistory)
close5.addEventListener('click', reactHistory)
// ========================================= //
const gitbtn = document.getElementById('gitbtn')
const close6 = document.getElementById('close6')

function gitHistory() {
  const stacksHistory = document.getElementById('stack-six')
  stacksHistory.classList.toggle('active8')
}

gitbtn.addEventListener('click', gitHistory)
close6.addEventListener('click', gitHistory)

// ============================================ PROJECTS MENU ============================================ //
const projectsbtn = document.getElementById('projects-menu-btn')
const close7 = document.getElementById('close7')

function projectsMenu() {
  const pMenu = document.getElementById('projects-menu')
  pMenu.classList.toggle('active9')
}

projectsbtn.addEventListener('click', projectsMenu)
close7.addEventListener('click', projectsMenu)
