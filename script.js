var proudcts = document.querySelectorAll(".proudcts div")
var btn1 = document.querySelectorAll(".proudcts button")
var div1 = document.querySelector(".total")
var price = 0
proudcts.forEach(function (item) {
    btn1.onclick = function () {
        div1.innerHtml += item.textContent
        div1.innerHtml += (item.getAttribute("price"))
    }
})


