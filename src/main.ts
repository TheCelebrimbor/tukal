import * as vsComponents from './components/index'
import './style/vuesax.styl'
import vsTheme from './utils/theme'
import DefineVuesaxMixin from './defineGlobalMixin'
import vuesaxOptions from './utils/options'
import { App } from '@vue/runtime-core'
import  RootApp from "./App.vue"
import { createApp } from '@vue/runtime-dom'

import "material-design-icons/iconfont/material-icons.css"

const install = function(Vue : App, options : any = {}) {
  // set default options
  Object.keys(vuesaxOptions).forEach((prop) => {

    if(!options[prop]) {
      options[prop.toString()] = (vuesaxOptions as any)[prop.toString()]
    }
  });

  // Use Components
  Object.values(vsComponents).forEach((vsComponent) => {
    Vue.component(vsComponent.name, vsComponent);
  })
  if(options){
    if(options.hasOwnProperty('theme')){
      if(options.theme.hasOwnProperty('colors')){
        if (typeof window !== 'undefined') {
          vsTheme.vsfunction(options.theme.colors)
        }
      }
    }
  }
  // Define vuesax functions and properties ($vs)
  DefineVuesaxMixin(Vue, options);
}

const appVm = createApp(RootApp);
(<any>window).Vue = appVm
if (typeof window !== 'undefined' && (<any>window).Vue) {
  install((<any>window).Vue)
}

appVm.mount("#app");

export default install

export { default as vsButton } from './components/vsButton'
export { default as vsSelect } from './components/vsSelect'
export { default as vsSwitch } from './components/vsSwitch'
export { default as vsCheckbox } from './components/vsCheckBox'
export { default as vsRadio } from './components/vsRadio'
export { default as vsInput } from './components/vsInput'
export { default as vsTabs } from './components/vsTabs'
export { default as vsSlider } from './components/vsSlider'
export { default as vsInputNumber } from './components/vsInputNumber'
export { default as vsTooltip } from './components/vsTooltip'
export { default as vsUpload } from './components/vsUpload'
export { default as vsPopup } from './components/vsPopup'
export { default as vsAlert } from './components/vsAlert'
export {vsChip, vsChips } from './components/vsChip'
export { default as vsProgress } from './components/vsProgress'
export { default as vsCard } from './components/vsCard'
export { default as vsList } from './components/vsList'
export { default as vsAvatar } from './components/vsAvatar'
export { default as vsPagination } from './components/vsPagination'
export { default as vsBreadcrumb } from './components/vsBreadcrumb'
export { default as vsPrompt } from './components/vsPrompt'
export { default as vsDivider } from './components/vsDivider'
export { default as vsSpacer } from './components/vsSpacer'
export { default as vsIcon } from './components/vsIcon'
export { default as vsNavbar } from './components/vsNavbar'
export { default as vsSideBar } from './components/vsSideBar'
export { default as vsDropDown } from './components/vsDropDown'
export { default as vsTable } from './components/vsTable'
export { default as vsTextarea } from './components/vsTextarea'
export { vsCollapse, vsCollapseItem } from './components/vsCollapse'
export { default as vsImages } from './components/vsImages'
//New Component import

//layout
export { default as vsRow } from './layout/vsRow'
export { default as vsCol } from './layout/vsCol'


