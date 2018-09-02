import { observable , action} from 'mobx';

class Store {
    @observable list = [
        "学习React",
        "Learning React"
    ];

    @action listPush(input) {
        return this.list.push(input);
    }

    @action listDelete(index) {
         return this.list.splice(index,1);
    }
}

export default new Store();