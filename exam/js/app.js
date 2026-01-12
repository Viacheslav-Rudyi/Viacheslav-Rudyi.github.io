/* Put some script here */
let add_btn = document.getElementById("add-button")
let sub_btn = document.getElementById("sub-button")
let mul_btn = document.getElementById("mul-button")
let div_btn = document.getElementById("div-button")
let log_btn = document.getElementById("log-button")
let sin_btn = document.getElementById("sin-button")
let tan_btn = document.getElementById("tan-button")

let res_lbl = document.getElementById("res")

let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")

add_btn.addEventListener("click", resolve_add)
sub_btn.addEventListener("click", resolve_sub)
mul_btn.addEventListener("click", resolve_mul)
div_btn.addEventListener("click", resolve_div)
log_btn.addEventListener("click", resolve_log)
sin_btn.addEventListener("click", resolve_sin)
tan_btn.addEventListener("click", resolve_tan)

let con = document.getElementById("content")

function resolve_add() {
    let o1 = parseFloat(op1.value)
    let o2 = parseFloat(op2.value)
    print_res(o1 + o2)
    print_expl("")
}

function resolve_sub() {
    let o1 = parseFloat(op1.value)
    let o2 = parseFloat(op2.value)
    print_res(o1 - o2)
    print_expl("")
}

function resolve_mul() {
    let o1 = parseFloat(op1.value)
    let o2 = parseFloat(op2.value)
    print_res(o1 * o2)
    print_expl("")
}

function resolve_div() {
    let o1 = parseFloat(op1.value)
    let o2 = parseFloat(op2.value)
    try {
        if (o2 == 0) throw new Error("div by 0")
        print_res(o1 / o2)    
    }
    catch (err) {
        print_res("Operand 2 is equal to 0")
    }
    print_expl("")
}

function resolve_log() {
    let o1 = parseFloat(op1.value)
    try {
        if (o1 <= 0) throw new Error("log error")
        print_res(Math.log(o1))    
    }
    catch (err) {
        print_res("Operand 1 is less or equal to 0")
    }
    print_expl("log")
}

function resolve_sin() {
    let o1 = parseFloat(op1.value)
    print_res(Math.sin(deg2rad(o1)))
    print_expl("sin")
}

function resolve_tan() {
    let o1 = parseFloat(op1.value)
    try {
        print_res(Math.tan(deg2rad(o1)))
    }
    catch (err) {
        print_res(err)
    }
    print_expl("tan")
}

function deg2rad(a) {
    return a * Math.PI / 180
}

function print_res(res) {
    res_lbl.innerHTML = "Result: "
    String(res) != "NaN" ? res_lbl.innerHTML += res : 1;
}

async function print_expl(arg) {
    con.innerHTML = ""
    if (!arg) return

    let path = "data/" + arg + ".json"
    let f = await fetch(path)
    let response = f.json()
    response.then(function res(res) {
        // console.log(res)
        let title = document.createElement("h3")
        title.innerHTML = res.name
        
        let pic = document.createElement("img")
        pic.src = "../images/" + res.image_name
        
        let desc = document.createElement("p")
        desc.innerHTML = res.description

        con.appendChild(title)
        con.appendChild(pic)
        con.appendChild(desc)
    })
    
}

