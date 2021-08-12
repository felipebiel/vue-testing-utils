import { shallowMount } from '@vue/test-utils';

import App from '../../src/App.vue';
import Registrer from '@/components/Registrer.vue';

describe('App.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    it('Verificando se é uma instância vue', () => {
        // depreciado
        // expect(wrapper.isVueInstance()).toBe(true);
        // substituto
        expect(wrapper.vm).toBeTruthy();
    });

    it('Testando se tem o componente filho Registrer.vue', () => {
        expect(wrapper.findComponent(Registrer).exists()).toBeTruthy();
    });
});
