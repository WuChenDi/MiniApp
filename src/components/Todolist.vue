
<template>
  <div>
    <Title :title="title" :subtitle="subtitle"></Title>
    <div>
      <input @keyup.enter="handleClick" type="text" v-model="mytodo">
      <button @click="handleClick">添加</button>
      <button @click='clean'>清空</button>
    </div>
    <ul>
      <li :class="{'done':todo.done}" @click="toggle(index)" v-for='(todo,index) in todos'>{{index+1}}:{{todo.text}}</li>
    </ul>
    <p>{{remain}}/{{todos.length}}</p>
  </div>

</template>

<script>
import Title from "./components/Title";

export default {
  components: {
    Title
  },
  data() {
    return {
      title: "hello vuejs",
      subtitle: "Vue React Angular is good",
      mytodo: "",
      todos: [
        { text: "吃饭", done: false },
        { text: "睡觉", done: false },
        { text: "写代码", done: false }
      ]
    };
  },
  computed: {
    remain() {
      return this.todos.filter(v => !v.done).length;
    }
  },
  methods: {
    handleClick() {
      this.todos.push({
        text: this.mytodo,
        done: false
      });
      this.mytodo = "";
    },
    toggle(i) {
      this.todos[i].done = !this.todos[i].done;
    },
    clean() {
      this.todos = this.todos.filter(v => !v.done);
    }
  }
};
</script>

<style>
li.done {
  text-decoration: line-through;
  color: "red";
}
</style>
