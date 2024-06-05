import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ImagesCats from '@/components/ImagesCats/index.vue';

describe('ImagesCats', () => {
  it('Renderiza corretamente as imagens', () => {
    // Monta o componente
    const wrapper = mount(ImagesCats);

    // Seleciona todas as img
    const images = wrapper.findAll('img');

    // Verifica se há 3 imagens
    expect(images.length).toBe(3);
    // Primeira imagem
    expect(images[0].attributes('src')).toBe('/img/kitty1.webp');
    // Segunda imagem
    expect(images[1].attributes('src')).toBe('/img/kitty2.webp');
    // Terceira imagem
    expect(images[2].attributes('src')).toBe('/img/kitty3.webp');
  });
});
