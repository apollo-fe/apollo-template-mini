/*
 * @Author: Marshall
 * @Date: 2022-04-26 21:39:30
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-26 21:39:30
 * @Description: 
 * @FilePath: /apollo-template-mini/src/plugins/nutui.ts
 */
import { Progress, Icon, Button, Input, Popup,OverLay, List, Toast, SearchBar, Tag, Tabs, TabPane, Grid, GridItem } from '@nutui/nutui-taro';

const components = [Progress, Icon, Button, Input,Popup,OverLay, List, Toast, SearchBar, Tag, Tabs, TabPane, Grid, GridItem ]

export default (app) => {
  components.forEach(component => {
    app.use(component)
  })
}

