import {getCellValue} from './gameSettings'

export const displayBaod = () => {
    for (let i=0; i< 9;i++){
        if(i % 3 === 0) {
            console.log('-------------');
            console.log(`| ${getCellValue(`c${i + 1}`)} | ${getCellValue(`c${i + 2}`)} | ${getCellValue(`c${i + 3}`)} |`);
        } 
    } 
    console.log('-------------');
}
