---
to: "<% return isAddStory ? path + kebabName + '.stories.ts' : null; %>"
---
import {
    Meta,
    Story
} from '@storybook/vue3';

import <%= pascalName %> from './index';

type TProps = typeof <%= pascalName %>.props;

export default {
    title: '<%= componentType %>s/<%= pascalName %>',
    component: <%= pascalName %>,
    argTypes: {}
} as Meta;

const Template: Story<TProps> = args => ({
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
