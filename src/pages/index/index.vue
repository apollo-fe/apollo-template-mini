<!--
 * @Author: Marshall
 * @Date: 2022-04-26 17:36:03
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-26 21:56:03
 * @Description: 
 * @FilePath: /apollo-template-mini/src/pages/index/index.vue
-->
<template>
  <view class="index">
    <Counter />111

    <nut-button type="primary" >nutui</nut-button>
  </view>
</template>

<script>
import {Button } from '@nutui/nutui-taro'
import './index.scss'
import Counter from '../../components/Counter.vue'

export default {
  name: 'Index',
  components: {
    Counter
  }
}
</script>
