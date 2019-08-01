import { addData } from '../api/addData'

export default {
    namespace: 'app',
    state: { list: [] },
    reducers: {
        saveData(state, action) {
            const { data } = action;
            console.log(data)
            let list = state.list;
            list.push(data)
            list.filter((item, index) => {
                item.sum_price = item.count * item.price;
            })
            console.log(list)

            return {
                ...state,
                list
            }
        },
        delFn(state, action) {
            // const { data } = action;
            // console.log(data)
            // let list = state.list;
            // list.push(data)
            // list.filter((item, index) => {
            //     item.id == data;
            //     list.splice(item.id - 1, 1)
            // })
          

            // return {
            //     ...state,
            //     list
            // }
        },
    },
    effects: {
        *add(action, { put, call }) {
            const result = yield call(addData, action.values)
            yield put({ type: 'saveData', data: result })
        },
        // *del(action, { put, call }) {
        //     const result = yield call(addData, action.values)
        //     yield put({ type: 'delFn', data: result })
        // }
    }
}