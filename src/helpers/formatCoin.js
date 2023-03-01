export const formatea = (count)=>{
    return count.toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'
    })
}