/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from "@inquirer/prompts";
import qr_png from "qr-image";
import fs from "fs";
var qrCodeTarget;

//inquirer input
const answer = await input({ message: 'Enter the address you would like as a QR code.'});
console.log(answer);
let info = answer;
writeStuff(info);

//qr-image

const qr_png2 = qr_png.image(answer, {type: 'png'});
qr_png2.pipe(fs.createWriteStream( answer +'.png'));

// var png_string = qr.imageSync('I love QR!', {type: 'png'});




function writeStuff(answer){

    fs.writeFileSync("userInput.txt", answer, (err) =>{
        if(err) throw err;
        console.log("The file has been saved!");
    });

}