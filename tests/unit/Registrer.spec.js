import { shallowMount } from '@vue/test-utils';
import Registrer from '@/components/Registrer.vue';
import FormRegistrer from '@/components/FormRegistrer.vue';

describe('Testando FormRegistrer.vue', () => {
    it('Testando se tem o componente filho FormRegistrer.vue', () => {
        const wrapper = shallowMount(Registrer);
        expect(wrapper.findComponent(FormRegistrer).exists()).toBeTruthy();
    });
});
