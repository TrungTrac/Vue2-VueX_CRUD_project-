import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export  default new Vuex.Store({
    state() {
       return{
        oderList: [
            {
                id: 1,
                foodName: "pho",
                odererName: "Trung",
                note: "khong co hanh"
            },
            {
                id: 2,
                foodName: "che",
                odererName: "Toan",
                note: "ot nhieu"
            },
            {
                id: 3,
                foodName: "chao",
                odererName: "Dan",
                note: "tieu nhieu"
            }
        ]
       }
    },
    mutations: {
      //Hàm thêm dữ liệu
      addOder(state, newOder){
        const oder={
            id: Date.now(),
            ...newOder,
        }
        state.oderList.push(oder)
      },
      //Hàm xóa dữ liệu
      deleteOder(state, id){
        const index = state.oderList
        .map((i)=>{
            return i.id
        })
        .indexOf(id)
        
        state.oderList.splice(index, 1)
      },
      //Hàm edit dữ liệu
      editOder(state, item){
        const items = state.oderList
        var foundIndex = items.findIndex((x)=> x.id == item.id)
        items[foundIndex] = item
      }
      
    },
    getters: {
      //Hàm lấy dữ liệu từ store
       oderList: (state)=>{
        return state.oderList
       }
      
    }

})