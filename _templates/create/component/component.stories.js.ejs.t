---
to: "<% return isAddStory ? path + kebabName + '.stories.js' : null; %>"
---
import <%= pascalName %> from './index';

export default {
    title: '<%= componentType %>s/<%= pascalName %>',
    component: <%= pascalName %>,
    argTypes: {}
};

const Template = args => ({
    components: { <%= pascalName %> },
    data: () => ({ args }),
    template: '<<%= pascalName %> v-bind="args" />'
});

const Basic = Object.assign(Template.bind({}), {
    args: {
        label: '<%= kebabName %>'
    }
});

export {
    Basic
};
