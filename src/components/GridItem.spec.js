import { mount } from '@vue/test-utils'
import GridItem from './GridItem.vue'

test('GridItem renders correctly', () => {
  const wrapper = mount(GridItem, {
    propsData: {
      item: {
        name: 'test',
        description: 'test description',
        image: 'test.jpg',
        price: '$10.00',
        id: 'test-id',
      },
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})
