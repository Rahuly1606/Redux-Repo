export const depositeMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposite',
            payload:amount
        })
    }
}

export const withdarwMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdarw',
            payload:amount
        })
    }
}

