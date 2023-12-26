import { isObject } from '../../../services/utils-service';

const modules = import.meta.glob('../../../../src/assets/images/**/*.svg', { eager: true });

const entities = Object.values(modules).reduce((acc, value) => {
    const url = isObject(value.default) ? value.default.name : value.default;
    const path = url.replace(/^.*src\/assets\/images\//, '');
    acc[path] = value;
    return acc;
}, {});

export default entities;
