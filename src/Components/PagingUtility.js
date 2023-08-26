


import config from '../constants'



// Here we have to total pages here

export function getTotalPagesHere(lengthIndex){
    return Math.ceil(lengthIndex/10);
}

// here we have to get total records index
export function getRecordIndexHere(pageIndex) {
    return (pageIndex-1)*config.PSize ;
}


