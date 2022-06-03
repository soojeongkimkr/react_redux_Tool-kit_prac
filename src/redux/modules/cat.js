// 액션
const CHANGE_NAME = "cat/CHANGE_NAME";
// 초기값
const initial_state = {name: '펄', age: 5};

// 액션생성함수
export const changeName = (name) => {
    return {type: CHANGE_NAME, name};
}

// 리듀서
export default function reducer(state = initial_state, action={}){
    switch(action.type){
        case "cat/CHANGE_NAME":{
            return {...state, name: action.name}
        }
        default:
            return state;
    }
}
