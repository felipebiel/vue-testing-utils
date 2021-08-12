import { shallowMount } from '@vue/test-utils';
import FormRegistrer from '@/components/FormRegistrer.vue';

import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

describe('Testando FormRegistrer.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(FormRegistrer);
    });

    const setDataWrapper = (wrapper) => {
        const form = {
            name: 'Felipe Biel',
            email: 'email@email.com',
            termos: true,
        };
        wrapper.setData({ form: form });
    };

    it('Renderizando uma mensagem na props de msg', async () => {
        const msg = 'Nova mensagem';
        await wrapper.setProps({
            msg,
        });
        expect(wrapper.text()).toMatch(msg);
    });

    it('Testando se está ativo', () => {
        wrapper.vm.changeActive();
        expect(wrapper.vm.$data.activeTitle).toBe(true);
    });

    it('Testando se a classe está ativa', async () => {
        await wrapper.vm.changeActive();
        expect(wrapper.find('h1.active').exists()).toBe(true);
    });

    it('Testando valores iniciais do form', () => {
        const form = {
            name: '',
            email: '',
            termos: true,
        };
        const dataComponent = wrapper.vm.$data.form;
        expect(dataComponent).toEqual(form);
    });

    it('Testando valores do form preenchidos', () => {
        const form = {
            name: 'Felipe Biel',
            email: 'email@email.com',
            termos: false,
        };
        wrapper.setData({ form: form });
        const dataComponent = wrapper.vm.$data.form;
        expect(dataComponent).toEqual(form);
    });

    it('Testando se o vulidate está iniciado corretamente, $invalid = true', () => {
        expect(wrapper.vm.$v.$invalid).toBeTruthy();
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

    it('Testando o click do submit do formulário', async () => {
        setDataWrapper(wrapper);
        await wrapper.find('#submit-button').trigger('click');
        expect(wrapper.emitted('create-user')).toBeTruthy();
    });

    it('Testando se o evento vai ser emitido após envio', async () => {
        setDataWrapper(wrapper);
        await wrapper.vm.validateForm();
        expect(wrapper.emitted('create-user')).toBeTruthy();
    });
});
