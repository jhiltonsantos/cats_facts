import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TextFact from '@/components/TextFact/index.vue';

describe('TextFact', () => {
  it('Renderiza corretamente quando a key muda', async () => {
    // Monta o componente
    const wrapper = mount(TextFact, {
      props: {
        isLoading: false,
        factKey: 1,
        fact: 'Cats are amazing!'
      }
    });

    expect(wrapper.text()).toContain('Cats are amazing!');

    //Altera o componente
    await wrapper.setProps({ factKey: 2, fact: 'Cats are wonderful!' });
    expect(wrapper.text()).toContain('Cats are wonderful!');
  });
});
