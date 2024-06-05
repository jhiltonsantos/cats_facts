import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ButtonGetFact from '@/components/ButtonGetFact/index.vue';

describe('ButtonGetFact', () => {
  it('Chama o onClick prop quando clicado', async () => {
    // Mock para passar a prop onClick
    const onClickMock = vi.fn();

    // Monta o componente
    const wrapper = mount(ButtonGetFact, {
      props: {
        onClick: onClickMock
      }
    });

    // Simula o clique do botão
    await wrapper.find('button').trigger('click');

    // Verifica se o mock foi chamado
    expect(onClickMock).toHaveBeenCalled();
  });
});
