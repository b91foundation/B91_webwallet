<template>
  <b-modal id="aboutModal"
           title="About"
           ref="aboutModal"
           centered
           ok-only
           hide-header
           hide-footer>
    <button
      class="close btn-close"
      @click="closeModal">
      <img src="@/assets/imgs/icons/operate/ic_close.svg">
    </button>
    <div class="about-container">
      <div class="image-illustration">
        <img src="@/assets/imgs/icons/wallet/ic_illustration_wallet.svg"
        height="152px">
      </div>
      <div class="about-vsyswallet">About B91 Wallet
      </div>
      <div class="version">Version {{ vnumber }}
      </div>
      <div class="about_text">
        B91 Wallet is a reference implementation of cross-platform browser wallet for the B91 Systems blockchain network. It features basic hot wallet mode and cold wallet interaction/monitoring mode.
      </div>
      <div class="right-reserved">@2019 B91 SYSTEMS LIMITED All rights reserved
      </div>
    </div>
  </b-modal>
</template>
<script>
import { WALLET_VERSION } from '@/constants.js'
var initData = {
    vnumber: WALLET_VERSION
}

export default {
    name: 'About',
    created() {
    },
    props: {
        setUsrLocalStorage: {
            type: Function,
            require: true,
            default: function() {
                return ''
            }
        },
        address: {
            type: String,
            require: true,
            default: ''
        }
    },
    data: function() {
        return initData
    },
    methods: {
        closeModal() {
            this.$refs.aboutModal.hide()
        }
    }
}
</script>

<style scoped>
.btn-close {
    position: absolute;
    right: 20px;
}
.image-illustration{
    margin-top: 30px;
    margin-bottom: 40px;
}
.about-vsyswallet {
    color:#181B3A;
    font-size: 34px;
}
.version {
    color:#9091A3;
    font-size:18px;
}
.about_text {
    margin-top: 30px;
    color:#4F515E;
    font-size:15px;
    margin-bottom: 20px;
    text-align: left;
}
.right-reserved {
    color:#9091A3;
    float:left;
    font-size:15px;
}
</style>
