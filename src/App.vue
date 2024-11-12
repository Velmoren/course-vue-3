<template>
  <h1>Slots</h1>

  <ul>
    <Item 
      v-for="item in list" 
      :key="item.id" 
      :text="item.text" 
    >
      <template v-slot:first>
        <span>slot 1!</span>
      </template>
      <template v-slot:second>
        <span>slot 2!</span>
      </template>
    </Item>
  </ul>
</template>

<script>
import Item from './Item.vue';

export default {
  components: { Item },
  data() {
    return {
      list: [
        {
          id: 0,
          text: 'Первый текст'
        },
        {
          id: 1,
          text: 'Второй текст'
        },
        {
          id: 2,
          text: 'Третий текст'
        }
      ],
    }
  }
}
</script>
