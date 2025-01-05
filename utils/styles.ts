import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfigFile from '../tailwind.config.js';

export const tailwindConfig = resolveConfig(tailwindConfigFile);
