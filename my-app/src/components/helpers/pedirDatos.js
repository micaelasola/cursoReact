import {items} from '../Item/Item';


export const pedirDatos = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(items)
            }, 2500)
        })
    }