import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const VueGridLayout = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(VueGridLayout).forEach(name => {
        Vue.component(name, VueGridLayout[name]);
    });
}
VueGridLayout.install = install

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(VueGridLayout.install);
}

export default VueGridLayout;
export {
    GridLayout,
    GridItem
};