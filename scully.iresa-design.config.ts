import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

setPluginConfig(baseHrefRewrite, { href: '/iresa-design/' });
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "iresa-design",
  outDir: './dist/static',
  routes: {
  }
};