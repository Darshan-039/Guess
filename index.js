const button = document.querySelector(".buttons");
const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");



button.addEventListener(("click"), () => {


    const inputs = document.querySelector(".inputs");
    let Random = Math.floor(Math.random() * 11);
    let number = inputs.value;

    if (Random == number) {
        para1.innerHTML = "You guess right number";
        para2.innerHTML = `Random number is ${Random}`;
    }
    else {
        para1.innerHTML = "You guess wrong number";
        para2.innerHTML = `Random number is ${Random}`;
    }
    inputs.value = "";
})

