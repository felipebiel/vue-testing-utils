import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Registrer from '@/components/Registrer.vue';
import FormRegistrer from '@/components/FormRegistrer.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('FormRegistrer.vue', () => {
    let wrapper;
    let createUserStore;
    let checkUser;

    let actionsLocal;
    let store;

    const dataFull = {
        name: 'Felipe Biel',
        email: 'email@email.com',
        termos: true,
    };

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
        await wrapper.findComponent(FormRegistrer).vm.$emit('create-user', dataFull);
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
        await wrapper.vm.createUserStore(dataFull);
        expect(actionsLocal.storeUser).toHaveBeenCalled();
    });
});
