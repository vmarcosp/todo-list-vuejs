import Vue from 'vue';
import InputTask from '../../../src/components/InputTask';

describe('InputTask.vue', () => {
    let vm = {};
    beforeEach(() => {
        const Constructor = Vue.extend(InputTask);
        vm = new Constructor().$mount();
    });
    it('Should be render correct content', () => {
        expect(vm.$el.querySelectorAll('.new-todo').length).to.equal(1);
    });
    it('Should be create a new task correctly', () => {
        const titleOfTask = 'Comprar leite';
        let task = vm.createTask(titleOfTask);
        expect(task.title).to.be.equal(titleOfTask);
        expect(task.completed).to.be.false;
    });
    it('Should be clear input of component', () => {
        vm.$el.querySelector('input').value = 'Comprar leite';
        vm.clearInput();
        expect(vm.$el.querySelector('input').value).to.equal('');
    });
    it('should call the event for a new task', () => {
        let spy = sinon.spy();
        vm.$on('receiveNewTask', spy);
        vm.broadcastOfNewTask();
        expect(spy).to.have.been.called;
    });
    it('Should be add task correctly', () => {
        let spy = sinon.spy();
        let mockEvent = { target: { value: 'Comprar leite' } };

        vm.$el.querySelector('input').value = 'Comprar leite';
        vm.$on('receiveNewTask', spy);
        vm.addTask(mockEvent);

        expect(vm.$el.querySelector('input').value).to.equal('');
        expect(spy).to.have.been.called;
    });
});
