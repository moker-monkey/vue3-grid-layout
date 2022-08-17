import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const VueGridLayout = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}
const components = [GridLayout, GridItem]

const install = (app) => {
    components.forEach(
        (component) => {
            app.component(component.name, component)
        }
    )
}

export default VueGridLayout;
export {
    GridLayout,
    GridItem,
    install
};