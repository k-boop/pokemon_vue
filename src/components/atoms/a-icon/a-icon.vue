<template>
    <span class="a-icon">
        <VueSvgIcon
            :key="name"
            :data="iconData"
            :scale="scale"
            :width="width"
            :height="height"
            :color="color"
            :original="isOriginal"
            :at-a-icon="atAttribute"
        />
    </span>
</template>

<script lang="ts">
import {
    ref,
    watch,
    defineComponent
} from 'vue';
import { VueSvgIcon } from '@yzfe/vue3-svgicon';

import icons from './a-icon-map';

export default defineComponent({
    name: 'AIcon',
    components: {
        VueSvgIcon
    },
    props: {
        /**
         * File name (includes path and without extensions)
         *
         * The root directory for this one will be: assets/img or check it in the package.json file
         * example: icons/question-mark
         */
        name: {
            type: String,
            validator: (val: string) => !val.match(/[.]/g),
            default: ''
        },
        /**
         * Element colors
         */
        color: {
            type: String,
            default: ''
        },
        /**
         * Element width
         *
         * by default, it will set size points in 'px'
         * example: 20 / 20px / 20rem
         */
        width: {
            type: String,
            default: ''
        },
        /**
         * Element height
         *
         * by default, it will set size points in 'px'
         * example: 20 / 20px / 20rem
         */
        height: {
            type: String,
            default: ''
        },
        /**
         * Scale
         *
         * It will scale size of the icon
         * example: '1', '1.5'...
         */
        scale: {
            type: [String, Number],
            default: ''
        },
        /**
         * Enable/Disable svg original color
         */
        isOriginal: {
            type: Boolean,
            default: true
        },
        /**
         * Set an attribute value for AQA
         */
        atAttribute: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const iconData = ref();

        function getIconData() {
            iconData.value = icons[props.name]?.default;
        }

        watch(() => props.name, getIconData, { immediate: true });

        return {
            iconData
        };
    }
});
</script>

<style lang="css" src="../../../../node_modules/@yzfe/svgicon/lib/svgicon.css" />
<style lang="scss" src="./a-icon.scss" />
