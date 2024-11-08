<template>
    <h3>列表渲染</h3>
    <p v-for="item in names">{{ item }}</p>
    <p v-for="(item, index) of names">{{ item }}-{{ index }}</p>
    <div>
        <p v-for="(value,key,index) of UserInfo">{{value}}-{{key}}-{{index}}</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            names: ["k", "y", "y"],
            UserInfo:{
                name:"yy",
                age:20,
                sex:"male"
            }
        }
    }
}

</script>