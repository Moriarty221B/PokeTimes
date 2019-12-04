const initState = {
    posts: [
        {id: '1', title:'mazda', body:'vroom vroom vroom'},
        {id: '2', title:'mercedes', body:'the best or nothing'},
        {id: '1', title:'toyota', body:'moving forward'}
    ]
}

const rootReducer = (state=initState, action)=>{
    return state;
}

export default rootReducer