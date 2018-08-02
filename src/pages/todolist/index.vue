<template>
  <div>
    <h1>vujs is good</h1>
    <Todolist></Todolist>
  </div>
</template>


<script>
import Todolist from '@/components/Todolist'

export default {
  components: {
    Todolist
  }
};
</script>

<style>
h1 {
  color: red;
}
</style>

