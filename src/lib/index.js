import areaSelecter from './area-selecter-map.vue'

const areaSelect = {
    install: function (Vue) {
        Vue.component(areaSelecter.name, areaSelecter)
    }
}
export default areaSelect
