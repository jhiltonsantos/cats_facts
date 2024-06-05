import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HeaderComponent from '@/components/HeaderCatFact/index.vue';

describe('HeaderComponent', () => {
  it('Renderezia o texto corretamente', () => {

    // Monta o componente
    const wrapper = mount(HeaderComponent);

    // Verifica se o texto é renderizado
    expect(wrapper.text()).toContain('The Defsafe Cat Facts Page');
  });
});
