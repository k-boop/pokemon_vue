---
to: "<% return path + kebabName + '.vue'%>"
---

<template>
    <div
<% if(!['page', 'template'].includes(componentType)) { -%>
        :at-<%= kebabName %>="atAttribute"
<%  } -%>
        class="<%= kebabName %>"
    >
        This is <%= pascalName %>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: '<%= pascalName %>',
    components: {

    },
    props: {
<% if(!['page', 'template'].includes(componentType)) { -%>
        /**
         * AQA attribute
         */
        atAttribute: {
            type: String,
            default: ''
        }
<%  } -%>
    },
    emits: {

    },
    setup() {

    }
});
</script>

<style lang="scss" src="./<%= kebabName %>.scss" />
