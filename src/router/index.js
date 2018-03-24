import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Editwork from '@/components/Editwork'
import Worklist from '@/components/Worklist'
import Guide from '@/components/Guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Worklist
    },
    {
      path: '/editwork',
      name: 'Editwork',
      component: Editwork
    },
    {
      path: '/editwork/:workId',
      name: 'modifiedwork',
      component: Editwork
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/worklist',
      name: 'Worklist',
      component: Worklist
    }

  ]
})
