import { shallowMount } from '@vue/test-utils';
import Registrer from '@/components/Registrer.vue';
import FormRegistrer from '@/components/FormRegistrer.vue';

describe('Testando FormRegistrer.vue', () => {
    let wrapper;
    let createUserStore;
    let checkUser;

    beforeEach(() => {
        createUserStore = jest.spyOn(Registrer.methods, 'createUserStore');
        checkUser = jest.spyOn(Registrer.methods, 'checkUser');
        wrapper = shallowMount(Registrer);
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
});
