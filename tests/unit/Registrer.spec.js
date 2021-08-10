import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Registrer from '@/components/Registrer.vue';
import FormRegistrer from '@/components/FormRegistrer.vue';
import { mutations, actions } from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Testando FormRegistrer.vue', () => {
    let wrapper;
    let createUserStore;
    let checkUser;

    let actionsLocal;
    let store;

    beforeEach(() => {
        actionsLocal = {
            storeUser: jest.fn(),
        };
        store = new Vuex.Store({
            actions: actionsLocal,
        });

        createUserStore = jest.spyOn(Registrer.methods, 'createUserStore');
        checkUser = jest.spyOn(Registrer.methods, 'checkUser');
        wrapper = shallowMount(Registrer, { store, localVue });
    });

    it('Testando se tem o componente filho FormRegistrer.vue', () => {
        expect(wrapper.findComponent(FormRegistrer).exists()).toBeTruthy();
    });

    it('Testando se o emit chega na função createUserStore', async () => {
        const form = {
            name: 'Felipe Biel',
            email: 'email@email.com',
            termos: true,
        };
        await wrapper.findComponent(FormRegistrer).vm.$emit('create-user', form);
        expect(createUserStore).toHaveBeenCalled();
    });

    it('Testando se as funções do created foram executadas', async () => {
        expect(checkUser).toHaveBeenCalled();
    });

    it('Testando se o retorno da função checkUser é o esperado', async () => {
        const { status } = await wrapper.vm.checkUser();
        expect(status).toEqual(200);
    });

    it('Testando se o após retorno da função checkUser a data que checa o user muda', async () => {
        await wrapper.vm.checkUser();
        expect(wrapper.vm.$data.userChecked).toBeTruthy();
    });

    it('Testando se a storeUser do vuex foi chamada', async () => {
        const form = {
            name: 'Felipe Biel',
            email: 'email@email.com',
            termos: true,
        };
        await wrapper.findComponent(FormRegistrer).vm.$emit('create-user', form);
        expect(actionsLocal.storeUser).toHaveBeenCalled();
    });

    it('Testando se o commit da mutation storeUser funciona', async () => {
        // destructure assign `mutations`
        const { SET_USER } = mutations;
        const form = {
            name: 'Felipe Biel',
            email: 'email@email.com',
            termos: true,
        };
        const state = {
            user: {},
        };
        SET_USER(state, form);
        expect(state.user).toEqual(form);
    });

    it('Testando se a função storeUser preenche o state de user', async () => {
        const form = {
            name: 'Felipe Biel',
            email: 'email@email.com',
            termos: true,
        };

        const commit = jest.fn();

        actions.storeUser({ commit }, form);
        expect(commit).toHaveBeenCalledWith('SET_USER', form);
    });
});
