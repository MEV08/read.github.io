const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

const mainCourses = document.getElementById('mainCourses')
const additionalCourses = document.getElementById('additionalCourses')

console.log(btn2)

btn2.addEventListener('click', function() {
    btn2.classList.add('add2-active');
    btn1.classList.remove('add1-active');
    mainCourses.classList.remove('active');
    additionalCourses.classList.add('active');
})
btn1.addEventListener('click', function() {
    btn2.classList.remove('add2-active');
    btn1.classList.add('add1-active');
    mainCourses.classList.add('active');
    additionalCourses.classList.remove('active');
})