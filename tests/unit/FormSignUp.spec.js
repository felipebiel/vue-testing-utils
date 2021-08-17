import { shallowMount, createLocalVue } from '@vue/test-utils';
import FormSignUp from '@/components/FormSignUp.vue';

import Vuelidate from 'vuelidate';

/* Cria uma instancia do vue local, com seus states, dados etc */
const localVue = createLocalVue();
/* Diz que sua instancia local vai usar o vuex */
localVue.use(Vuelidate);

describe('FormSignUp.vue', () => {
    let wrapper;

    const dataFull = {
        name: 'Felipe Biel',
        email: 'email@email.com',
        termos: true,
    };

    const dataInit = {
        name: '',
        email: '',
        termos: true,
    };

    beforeEach(() => {
        wrapper = shallowMount(FormSignUp, { localVue });
    });

    const setDataWrapper = (wrapper) => {
        wrapper.setData({ form: dataFull });
    };

    it('Renderizando uma mensagem na props de msg', async () => {
        const msg = 'Nova mensagem';
        await wrapper.setProps({
            msg,
        });
        expect(wrapper.text()).toMatch(msg);
    });

    it('Testando se está ativo', async () => {
        await wrapper.find('#active-button').trigger('click');
        expect(wrapper.vm.$data.activeTitle).toBe(true);
    });

    it('Testando se a classe está ativa', async () => {
        await wrapper.vm.changeActive();
        expect(wrapper.find('h1.active').exists()).toBe(true);
    });

    it('Testando valores iniciais do form', () => {
        const dataComponent = wrapper.vm.$data.form;
        expect(dataComponent).toEqual(dataInit);
    });

    it('Testando valores do form preenchidos', () => {
        const formLocal = {
            name: 'Felipe Biel',
            email: 'email@email.com',
            termos: false,
        };
        wrapper.setData({ form: formLocal });
        const dataComponent = wrapper.vm.$data.form;
        expect(dataComponent).toEqual(formLocal);
    });

    it('Testando se o vuelidate está iniciado corretamente, $invalid = true', () => {
        expect(wrapper.vm.$v.$invalid).toBeTruthy();
    });

    it('Testando o click do submit do formulário', async () => {
        setDataWrapper(wrapper);
        await wrapper.find('#submit-button').trigger('click');
        expect(wrapper.emitted('create-user')).toBeTruthy();
    });

    it('Testando se o vuelidate está validando corretamente', async () => {
        await wrapper.vm.validateForm();
        expect(wrapper.vm.$v.$invalid).toBeTruthy();
    });

    it('Testando se o vuelidate está validando corretamente com campos preenchidos', async () => {
        setDataWrapper(wrapper);
        await wrapper.vm.validateForm();
        expect(wrapper.vm.$v.$invalid).toBeFalsy();
    });

    it('Testando se o evento vai ser emitido após envio', async () => {
        setDataWrapper(wrapper);
        await wrapper.vm.validateForm();
        expect(wrapper.emitted('create-user')).toBeTruthy();
    });
});
