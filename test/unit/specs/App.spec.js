import Vue from 'vue';
import App from '../../../src/App';
import Task from '../../../src/models/Task';

describe('App.vue', () => {
    let vm = {};
    beforeEach(() => {
        const Constructor = Vue.extend(App);
        vm = new Constructor().$mount();
    });
    it('Should be create props of data correctly', () => {
        expect(vm).to.have.property('tasks');
        expect(vm.tasks.length).to.equal(0);
    });
    it('Should be add new task correctyle', () => {
        let firstTask = new Task('Learn VueJS');

        vm.addNewTask(firstTask);
        expect(vm.tasks.length).to.equal(1);
    });
});
