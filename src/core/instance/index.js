import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 注册 vm的_init方法，初始化vm
initMixin(Vue)

// 注册$data、$props, $set, $delete, $watch方法
stateMixin(Vue)

// 注册$on,$once,$off,$emit方法
eventsMixin(Vue)

// 定义_update和$forceUpdate、$destroy
lifecycleMixin(Vue)

// 安装运行时的方便方法、注册$nextTick 和 _render
renderMixin(Vue)

export default Vue
