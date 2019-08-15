<template>
    <div class="download hot-download">
        <section>
            <span>{{ title }}</span>
        </section>
        <article>
            <img :src="twoPlanarCode">
        </article>
        <div class="downloadBtns">
            <button>
				<a :href="iphoneAppResource">
                    <i class="anticon anticon-apple"><img src="../../assets/imgs/download/icon-iphone.svg" /></i>
                    <span>iPhone版下载</span>
                </a>
            </button>
            <button>
				<a :href="androidAppResource">
                    <i class="anticon anticon-android"><img src="../../assets/imgs/download/icon-android.svg" /></i>
                    <span>Android版下载</span>
                </a>
            </button>
        </div>
    </div>
</template>

<script>
// import {NODE_IP} from '../constants'
import './hot_and_cold_of_download.css'
export default {
    name: 'DownloadHotMobile',
    data() {
        return {
            title: 'B91 HOT',
            twoPlanarCode: require('../../assets/imgs/download/ico_welcome.png'),
            iphoneAppResource: 'https://testflight.apple.com/join/FPpJXxb1',
            androidAppResource: 'https://link-e-pro.oss-cn-beijing.aliyuncs.com/wallet/hot.wallet_release.apk'
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
