import Vue from 'vue';
import TaskList from '../../../src/components/TaskList';
import Task from '../../../src/models/Task';

function getMountedComponent(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({ propsData }).$mount();
    return vm;
}

describe('TaskList.vue', () => {
    let vm = {};
    beforeEach(() => {
        let taskList = [
            new Task('Learn ReactJS'),
            new Task('Learn VueJS'),
            new Task('Learn Angular')
        ];
        vm = getMountedComponent(TaskList, { taskList });
    });
    it('Should be render correct contents', () => {
        expect(vm.taskList.length).to.equal(3);
    });
    it('Should be change status of task', () => {
        let task = new Task('Learn Vuex');
        vm.completeTask(task);
        expect(task.completed).to.be.true;
        vm.completeTask(task);
        expect(task.completed).to.be.false;
    });
});
