const fs = require("fs");

maps = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    ",",
    "!",
    "?",
    " ",
    "-",
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function simulateMonkeyTheorem() {
    let stats = fs.statSync("monkey.txt");
    // let fileSizeInBytes = stats.size;
    // let fileSizeInMegabytes = fileSizeInBytes / 1000000;
    // console.log(fileSizeInBytes + "b\n")
    // console.log(fileSizeInMegabytes + "mb\n")
    // // if (fileSizeInMegabytes > 500 || fileSizeInMegabytes == 500) {
    // //     console.log("File size is over 500mb, stopping.");
    // //     return;
    // // }
    let string = "";
    for (let i = 0; i < 1000; i++) {
        string += maps[Math.floor(Math.random() * maps.length)];
    }
    console.log(string + "\n");
    fs.appendFileSync("monkey.txt", "\n" + string);
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    console.log("[" + year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "] Saved! \n");
    sleep(3000).then(() => {
        simulateMonkeyTheorem();
    });
}

simulateMonkeyTheorem();