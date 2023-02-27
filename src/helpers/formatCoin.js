export const formatea = (count)=>{
    return count.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}