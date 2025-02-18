<template>
  <b-modal id="settingsModal"
           title="Settings"
           ref="settingModal"
           centered
           hide-header
           hide-footer
           @hide="resetSession">
    <button
      class="close btn-close"
      @click="closeModal">
      <img src="@/assets/imgs/icons/operate/ic_close.svg">
    </button>
    <div class="div-set">
      <div class="lang-setting div-t">
        <label class="label-st">Language</label>
        <b-form-select class="setting-input"
                       :options="langOptions"
                       v-model="selectedLang"
                       :disabled="true"
                       size="sm">
        </b-form-select>
      </div>
      <div class="timeout-setting div-t">
        <label class="label-st">Session Timeout</label>
        <b-form-select class="setting-input"
                       :options="timeoutOptions"
                       v-model="selectedSession"
                       size="sm">
        </b-form-select>
      </div>
      <div class="timeout-setting div-t">
        <input class="show-height"
               type="checkbox"
               v-model="heightStatus"
               @click="showHeight">
        <label class="label-st">Show Current Block Height</label>
      </div>
    </div>
    <b-row class="btn-bottom">
      <b-col class="col-lef">
        <b-button
          class="btn-back"
          block
          variant="light"
          size="lg"
          @click="closeModal">Cancel
        </b-button>
      </b-col>
      <b-col class="col-rit">
        <b-button
          block
          class="btn-confirm"
          variant="warning"
          size="lg"
          @click="confirm(); passParamToParent();">Confirm
        </b-button>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import { INITIAL_SESSION_TIMEOUT } from '@/constants.js'
export default {
    name: 'Settings',
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
    data() {
        return {
            heightStatus: this.getHeightStatus(),
            selectedLang: 'en',
            langOptions: [
                {
                    value: 'en',
                    text: 'EN'
                },
                {
                    value: 'cn',
                    text: 'CN'
                }
            ],
            selectedSession: this.getSelectedSession(),
            timeoutOptions: [
                {
                    value: 5,
                    text: '5 min'
                },
                {
                    value: 10,
                    text: '10 min'
                },
                {
                    value: 20,
                    text: '20 min'
                },
                {
                    value: 40,
                    text: '40 min'
                },
                {
                    value: 60,
                    text: '1 hour'
                }
            ]
        }
    },
    methods: {
        changeSession: function() {
            this.setUsrLocalStorage('sessionTimeout', this.selectedSession)
        },
        showHeight: function() {
            if (!this.heightStatus) this.heightStatus = true
            else this.heightStatus = false
        },
        changeHeightStatus: function() {
            window.localStorage.setItem('heightStatus', this.heightStatus)
        },
        getHeightStatus: function() {
            let oldHeightStatus = false
            try {
                oldHeightStatus = JSON.parse(window.localStorage.getItem('heightStatus'))
            } catch (e) {
            }
            return oldHeightStatus
        },
        getSelectedSession() {
            let oldTimeout = INITIAL_SESSION_TIMEOUT
            try {
                oldTimeout = JSON.parse(window.localStorage.getItem(this.address)).sessionTimeout
            } catch (e) {
            }
            return oldTimeout
        },
        closeModal() {
            this.$refs.settingModal.hide()
        },
        passParamToParent() {
            this.$emit('passParamToParent', this.heightStatus)
        },
        confirm() {
            this.changeHeightStatus()
            this.changeSession()
            this.$refs.settingModal.hide()
        },
        resetSession() {
            this.heightStatus = this.getHeightStatus()
            this.selectedSession = this.getSelectedSession()
        }
    }
}
</script>

<style scoped  lang="less">
.setting-input {
    height: 48px !important;
    font-size: 15px;
    color: #181B3A;
    letter-spacing: 0;
}
.btn-close {
    position: absolute;
    right: 0;
    margin-right: 20px;
    margin-top: 4px;
}
.div-set {
    padding-top: 24px;
    margin-bottom: 40px;
    margin-left: 15px;
    margin-right: 15px;
}
.div-t {
    text-align: left;
    margin-bottom: 30px;
}
.col-lef {
    padding-right: 10px;
}
.col-rit {
    padding-left: 10px;
}
.btn-confirm {
    height: 44px;
    font-size: 17px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
}
.btn-back {
    background: #FAFAFA;
    border: 1px solid #E8E9ED;
    border-radius: 4px;
    font-size: 17px;
    color: #4F515E;
    letter-spacing: 0;
    text-align: center;
}
.btn-bottom {
    margin-left: 0px;
    margin-right: 0px;
}
.label-st {
    font-size: 15px;
    color: #9091A3;
    letter-spacing: 0;
}
.show-height {
    z-index: 100;
    cursor:pointer;
    background-color: #FFF;
}
</style>
