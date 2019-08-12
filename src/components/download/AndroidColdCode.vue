<template>
    <div class="planerCodeContainer">
        <div class="planerCode">
            <section class="coldIcon"></section>
            <article>
                <img :src="twoPlanarCode">
            </article>
            <h3>
                请使用手机扫描二维码，在手机浏览器中进行钱包下载
            </h3>
        </div>
    </div>
</template>

<script>
// import {NODE_IP} from '../constants'
import './planarCode.css'
export default {
    name: 'PlanarCodeCold',
    data() {
        return {
            twoPlanarCode: require('../../assets/imgs/download/cold-andriod.png')
        }
    },
    created() {
        // const url = NODE_IP + '/blocks/last'
        // this.$http.get(url).then(response => {
        //     if (response.body.height) {
        //         this.$router.push('/login')
        //     }
        // }, respError => {
        //     this.$router.push('/download')
        // })
    }
}
</script>
