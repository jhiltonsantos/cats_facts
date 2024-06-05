import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HeaderComponent from '@/components/HeaderCatFact/index.vue';

describe('HeaderComponent', () => {
  it('Renders the text correctly', () => {

    // Mounts the component
    const wrapper = mount(HeaderComponent);

    // Checks if the text is rendered
    expect(wrapper.text()).toContain('The Defsafe Cat Facts Page');
  });
});
