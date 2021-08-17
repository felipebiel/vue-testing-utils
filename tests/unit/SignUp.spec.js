import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import SignUp from '@/components/SignUp.vue';
import FormSignUp from '@/components/FormSignUp.vue';
/* Cria uma instancia do vue local, com seus states, dados etc */
const localVue = createLocalVue();
/* Diz que sua instancia local vai usar o vuex */
localVue.use(Vuex);

describe('SignUp.vue', () => {
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
        /*
            jest.fn() : cria uma função mocada
         */
        actionsLocal = {
            storeUser: jest.fn(),
        };
        store = new Vuex.Store({
            actions: actionsLocal,
        });
        /* Cria uma função mocada espiã da função passada  */
        createUserStore = jest.spyOn(SignUp.methods, 'createUserStore');
        checkUser = jest.spyOn(SignUp.methods, 'checkUser');
        wrapper = shallowMount(SignUp, { store, localVue });
    });

    /* Verifica se o componente filho está contido nesse shallowMount */
    it('Testando se tem o componente filho FormSignUp .vue', () => {
        expect(wrapper.findComponent(FormSignUp).exists()).toBeTruthy();
    });
    /* Emite a função no filho e verifica se ela chamou a função que foi passada */
    it('Testando se o emit chega na função createUserStore', async () => {
        await wrapper.findComponent(FormSignUp).vm.$emit('create-user', dataFull);
        expect(createUserStore).toHaveBeenCalled();
    });
    /* Testando se a função foi chamada alguma vez, pode servir para qualquer coisa, aqui estou usando para verificar se foi chamada no created */
    it('Testando se as funções do created foram executadas', async () => {
        expect(checkUser).toHaveBeenCalled();
    });
    /* Checando o retorno de uma função assincrona, simulando algum metodo que faça uma chamada e valide o que ela deve retornar */
    it('Testando se o retorno da função checkUser é o esperado', async () => {
        const { status } = await wrapper.vm.checkUser();
        expect(status).toEqual(200);
    });
    /* Checando  se após a função for chamada se ela altera as datas pertinentes */
    it('Testando se o após retorno da função checkUser a data que checa o user muda', async () => {
        await wrapper.vm.checkUser();
        expect(wrapper.vm.$data.userChecked).toBeTruthy();
    });
    /* Testa se a chamada do seu vuex local foi executada */
    it('Testando se a storeUser do vuex foi chamada', async () => {
        await wrapper.vm.createUserStore(dataFull);
        expect(actionsLocal.storeUser).toHaveBeenCalled();
    });
});
