const array = [
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta",
    "lime", "indigo", "violet", "teal", "navy", "maroon", "beige", "lavender", "coral", "gold",
    "silver", "turquoise", "peach", "mint", "plum", "gray", "charcoal", "ivory", "aqua", "chocolate", "salmon"
];
function math() {
    const index = Math.floor(Math.random() * array.length);
    const random = array[index];
    return random;
}

const btn = document.querySelector('.btn');
const change = document.querySelector(".container");

btn.addEventListener('click', () => {
    change.style.backgroundColor = math();
})