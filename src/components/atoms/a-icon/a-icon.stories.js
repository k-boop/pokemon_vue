import AIcon from './index';

import icons from './a-icon-map';

export default {
    title: 'atoms/AIcon',
    component: AIcon,
    argTypes: {
        name: { options: Object.keys(icons), control: { type: 'select' } }
    }
};

const Template = args => ({
    components: {
        AIcon
    },
    data: () => ({ args }),
    template: '<AIcon v-bind="args" />'
});

const ListTemplate = args => ({
    components: {
        AIcon
    },
    data: () => ({ args, icons }),
    template: `
        <div
            v-for="icon in Object.keys(icons)"
            :style="{ display: 'flex', flexDirection: 'column' }"
            :title="icon"
        >
            <AIcon
                :key="icon"
                v-bind="args"
                :name="icon"
            />
            <span>{{ icon }}</span>
        </ATooltipWrapper>
    `
});

const Basic = Object.assign(Template.bind({}), {
    args: {
        name: 'icons/vue',
        width: '20',
        height: '20'
    }
});
const IconsList = Object.assign(ListTemplate.bind({}), {
    args: {
        width: '40',
        height: '40'
    }
});

export {
    Basic,
    IconsList
};
