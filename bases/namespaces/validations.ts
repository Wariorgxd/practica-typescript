namespace Validations {
    export const validateText = (text:string):boolean =>{
        return text.length > 3;
        // if (text.length > 3){
        //     return true;
        // } else {
        //     return false;
        // }
    }

    const validateDate = (myDate:Date):boolean => {
        return isNaN(myDate.valueOf());
    }
}

console.log(Validations.validateText('Hola'));
