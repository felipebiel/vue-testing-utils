/*  
    mount: monta todo a arvore de componentes, com filhos netos etc
    shallowMount: monta apenas o componente especificado
*/
import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';
import SignUp from '@/components/SignUp.vue';

describe('App.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    /* Testando se é uma instancia do Vue */
    it('Verificando se é uma instância vue', () => {
        expect(wrapper.vm).toBeTruthy();
    });
    /* Testando se existe o componente filho */
    it('Testando se tem o componente filho SignUp .vue', () => {
        expect(wrapper.findComponent(SignUp).exists()).toBeTruthy();
    });
});
