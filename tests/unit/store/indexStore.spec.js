import { mutations, actions } from '@/store';

describe('Testando FormRegistrer.vue', () => {
    let data;

    beforeEach(() => {
        data = {
            name: 'Felipe Biel',
            email: 'email@email.com',
            termos: true,
        };
    });

    it('Testando se o commit está funcionando', async () => {
        const { SET_USER } = mutations;
        const state = {
            user: {},
        };
        SET_USER(state, data);
        expect(state.user).toEqual(data);
    });

    it('Testando se os commits são chamados nas actions', async () => {
        const commit = jest.fn();
        actions.storeUser({ commit }, data);
        expect(commit).toHaveBeenCalledWith('SET_USER', data);
    });
});
