import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ButtonGetFact from '@/components/ButtonGetFact/index.vue';

describe('ButtonGetFact', () => {
  it('Calls the onClick prop when clicked', async () => {
    // Mock to pass the onClick prop
    const onClickMock = vi.fn();

    // Mounts the component
    const wrapper = mount(ButtonGetFact, {
      props: {
        onClick: onClickMock
      }
    });

    // Simulates button click
    await wrapper.find('button').trigger('click');

    // Checks if the mock was called
    expect(onClickMock).toHaveBeenCalled();
  });
});
