export const displayBaod = () => {
    for (let i=0; i< 9;i++){
        if(i % 3 === 0) {
            console.log('-------------');
            console.log(`|   |   |   |`);
        } 
    } 
    console.log('-------------');
}
