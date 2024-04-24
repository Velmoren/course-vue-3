<template>
  <h1>Props</h1>

  <ul>
    <ListItem 
      :text="list[0].text"
      :done="list[0].done"
    />
    <ListItem 
      :text="list[1].text"
      :done="list[1].done"
    />
    <ListItem 
      :text="list[2].text"
      :done="list[2].done"
    />
  </ul>
</template>

<script>
import ListItem from './components/ListItem.vue';

export default {
  components: {ListItem},
  data() {
    return {
      list: [
        {id: 0, text: 'первый', done: true},
        {id: 1, text: 'второй', done: false},
        {id: 2, text: 'третий', done: false}
      ]
    }
  }
}
</script>
