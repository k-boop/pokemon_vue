import OSfsdfdsfdsf from './index';

export default {
    title: 'organisms/OSfsdfdsfdsf',
    component: OSfsdfdsfdsf,
    argTypes: {}
};

const Template = args => ({
    components: { OSfsdfdsfdsf },
    data: () => ({ args }),
    template: '<OSfsdfdsfdsf v-bind="args" />'
});

const Basic = Object.assign(Template.bind({}), {
    args: {
        label: 'o-sfsdfdsfdsf'
    }
});

export {
    Basic
};
