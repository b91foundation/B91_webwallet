<template>
  <div>
    <div class="token-succ-icon">
      <img v-if="txType==='Destroy Token'"
           src="@/assets/imgs/icons/operate/ic_burn.svg"
           width="64px">
      <img v-else
           src="@/assets/imgs/icons/operate/ic_success_circle.svg"
           width="64px">
    </div>
    <div class="infos">
      <b-form-group v-if="txType==='Destroy Token'"
                    horizontal
                    class="form-line"
                    label="Burn Amount"
                    label-for="amount_success">
        <b-form-input id="amount_success"
                      :value="formatter(amount)"
                      class="amount"
                      readonly
                      :plaintext="true">
        </b-form-input>
      </b-form-group>
      <b-form-group v-else-if="txType==='Register New Token'"
                    horizontal
                    class="form-line"
                    label="Max Supply"
                    label-for="amount_success">
        <b-form-input id="amount_success"
                      :value="formatter(amount)"
                      class="amount"
                      readonly
                      :plaintext="true">
        </b-form-input>
      </b-form-group>
      <b-form-group v-else-if="txType==='Send Token'"
                    horizontal
                    class="form-line"
                    label="Send Amount"
                    label-for="amount_success">
        <b-form-input id="amount_success"
                      :value="formatter(amount)"
                      class="amount"
                      readonly
                      :plaintext="true">
        </b-form-input>
      </b-form-group>
      <b-form-group v-else
                    horizontal
                    class="form-line"
                    label="Issue Amount"
                    label-for="amount_success">
        <b-form-input id="amount_success"
                      :value="formatter(amount)"
                      class="amount"
                      readonly
                      :plaintext="true">
        </b-form-input>
      </b-form-group>
      <b-form-group horizontal
                    class="form-line"
                    label="From"
                    label-for="walletAddress_success">
        <b-form-input id="walletAddress_success"
                      v-model="address"
                      class="addr"
                      readonly
                      :plaintext="true">
        </b-form-input>
      </b-form-group>
      <b-form-group v-if="txType==='Send Token'"
                    horizontal
                    class="form-line"
                    label="To"
                    label-for="toAddress_success">
        <b-form-input id="toAddress_success"
                      v-model="recipient"
                      class="addr"
                      readonly
                      :plaintext="true">
        </b-form-input>
      </b-form-group>
      <b-form-group horizontal
                    class="form-line"
                    label="Fee"
                    label-for="fee_success">
        <b-form-input id="fee_success"
                      :value="Number(fee) + ' B91'"
                      class="fee"
                      readonly
                      :plaintext="true">
        </b-form-input>
      </b-form-group>
    </div>
  </div>
</template>

<script>
import browser from '@/utils/browser'
import BigNumber from 'bignumber.js'
import { TOKEN_FEE } from '@/constants'
export default {
    name: 'TokenSuccess',
    props: {
        address: {
            type: String,
            required: true,
            default: ''
        },
        amount: {
            type: BigNumber,
            required: true,
            default: function() {
                return BigNumber(0)
            }
        },
        fee: {
            type: BigNumber,
            required: true,
            default: function() {
                return BigNumber(TOKEN_FEE)
            }
        },
        txType: {
            type: String,
            required: true,
            default: ''
        },
        recipient: {
            type: String,
            default: ''
        }
    },
    methods: {
        formatter(num) {
            return browser.bigNumberFormatter(num)
        }
    }
}
</script>

<style scoped>
.token-succ-icon {
    text-align: center
}
.form-line {
    margin-bottom: 0px;
    border-top: 1px solid #E8E9ED;
    height: 48px;
    text-align: right;
    padding-top: 5px;
}
.infos {
    width: 409px;
    margin-top: 30px;
    border-bottom: 1px solid #E8E9ED;
    margin-bottom: 40px;
}
.amount {
    font-size: 17px;
    color: #ECBA6F;
    letter-spacing: 0;
    text-align: right;
}
.addr {
    font-size: 15px;
    color: #181B3A;
    letter-spacing: 0;
    text-align: right;
}
.des {
    font-size: 15px;
    color: #181B3A;
    letter-spacing: 0;
    text-align: right;
}
.fee {
    font-size: 15px;
    color: #181B3A;
    letter-spacing: 0;
    text-align: right;
}
</style>
