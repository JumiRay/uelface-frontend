<template>
    <h3>key属性渲染</h3>
    <p v-for="(item, index) of names" :key="index">{{ item }}</p>
    <div v-for="item of result" :key="item.id"> 
        <p>{{ item.title }}</p>
        <img :="item.img" alt="">
    </div>
</template>

<script>

export default {
    data() {
        return {
            names: ["k", "y", "y"],
            result: [
                {
                    "img": "//i0.hdslb.com/bfs/archive/40de38eeb5657a541320c5de196df15a5b6057ce.jpg@672w_378h_1c_!web-home-common-cover",
                    "title": "细读经典：人祭、追杀、原始暴力美学，革命性R级动作冒险片《启示录》",
                    "id": "012314"
                },
                {
                    "img": "//i0.hdslb.com/bfs/archive/40de38eeb5657a541320c5de196df15a5b6057ce.jpg@672w_378h_1c_!web-home-common-cover",
                    "title": "第一当之无愧？20+全部传家宝！哪个传最值得新手购买？！【APEX传家宝排名】",
                    "id": "012412"
                },
                {
                    "img": "//i0.hdslb.com/bfs/archive/40de38eeb5657a541320c5de196df15a5b6057ce.jpg@672w_378h_1c_!web-home-common-cover",
                    "title": "撒娇DJS大号打大蛇扣篮大赛看了觉得",
                    "id": "012313"
                }

            ],
        }
    }
}

</script>
