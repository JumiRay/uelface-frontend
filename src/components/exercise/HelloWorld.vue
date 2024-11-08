<template>
  <h3>模板语法123</h3>
  <div v-bind:class="msg" v-bind:id="num">test</div>
  <button :disabled="buttonDis"> 确认</button>
  <p>{{ msg }}</p>
  <p>{{ num + 1 }}</p>
  <p>{{ ok ? 'Yes' : "NO" }}</p>
  <p>{{ msg2.split("").reverse().join("") }}</p>
  <p>{{ rawHtml }}</p>
  <p v-html="rawHtml"></p>
  <ifDemo />


</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
      num: 10,
      ok: true,
      msg2: "大家好",
      buttonDis: false,
      rawHtml: "<a href='https://www.baidu.com/'>百度</a>"
    }
  }
}
</script>