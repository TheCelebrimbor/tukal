import * as vsComponents from './components/index'
import './style/sass/vuesax.scss'
import vsTheme from './utils/theme'
import DefineVuesaxMixin from './defineGlobalMixin'
import vuesaxOptions from './utils/options'
import { App } from '@vue/runtime-core'

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
export default install;

export { vsButton, vsButtonGroup } from './components/vsButton'
export { vsSelect, vsSelectOption, vsSelectOptionGroup } from './components/vsSelect'
export { default as vsSwitch } from './components/vsSwitch'
export { default as vsCheckbox } from './components/vsCheckBox'
export { default as vsRadio } from './components/vsRadio'
export { default as vsInput } from './components/vsInput'
export { vsTab, vsTabs } from './components/vsTabs'
export { default as vsSlider } from './components/vsSlider'
export { default as vsInputNumber } from './components/vsInputNumber'
export { default as vsTooltip } from './components/vsTooltip'
export { default as vsUpload } from './components/vsUpload'
export { default as vsPopup } from './components/vsPopup'
export { default as vsAlert } from './components/vsAlert'
export { vsChip, vsChips } from './components/vsChip'
export { default as vsProgress } from './components/vsProgress'
export { vsCard, vsCardGroup } from './components/vsCard'
export { default as vsList } from './components/vsList'
export { default as vsAvatar } from './components/vsAvatar'
export { default as vsPagination } from './components/vsPagination'
export { default as vsBreadcrumb } from './components/vsBreadcrumb'
export { default as loading } from './components/vsLoading'

export { default as vsDivider } from './components/vsDivider'
export { default as vsSpacer } from './components/vsSpacer'
export { default as vsIcon } from './components/vsIcon'
export { vsNavbar,vsNavbarGroup, vsNavbarItem } from './components/vsNavbar'
export { default as notification } from './components/vsNotifications'
export { vsSidebar, vsSidebarGroup, vsSidebarItem } from './components/vsSideBar'
export { vsPopper, vsPopupMenu, vsPopupItem } from './components/vsPopper'
export { default as vsTable } from './components/vsTable'
export { default as vsDialog } from './components/vsDialog'
export { default as vsTextarea } from './components/vsTextarea'
export { vsCollapse, vsCollapseItem} from './components/vsCollapse'
export { default as vsImages } from './components/vsImages'
//New Component import

//layout
export { default as vsRow } from './layout/vsRow'
export { default as vsCol } from './layout/vsCol'




