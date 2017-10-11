import { AbstractControl, ValidationErrors } from "@angular/forms";

// import {AbstractControl, ValidationErrors} from 
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((<string>control.value).indexOf(' ') >= 0)
            return {cannotContainSpace : true}

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise <ValidationErrors | null > {

        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(control.value === 'mosh') { 
                    resolve({shouldBeUnique: true});
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
     }

    static shouldBeUnique2(control: AbstractControl): ValidationErrors | null {
        
             if(control.value === 'mosh') { 
                // resolve({shouldBeUnique: true});
                return {shouldBeUnique: true};
            }
            else {
                // resolve(null)
                return  null
            }
    }
}