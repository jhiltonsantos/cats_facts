import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ImagesCats from '@/components/ImagesCats/index.vue';

describe('ImagesCats', () => {
  it('Correctly renders the images', () => {
    // Mounts the component
    const wrapper = mount(ImagesCats);

    // Selects all img tags
    const images = wrapper.findAll('img');

    // Checks if there are 3 images
    expect(images.length).toBe(3);
    // First image
    expect(images[0].attributes('src')).toBe('/img/kitty1.webp');
    // Second image
    expect(images[1].attributes('src')).toBe('/img/kitty2.webp');
    // Third image
    expect(images[2].attributes('src')).toBe('/img/kitty3.webp');
  });
});
