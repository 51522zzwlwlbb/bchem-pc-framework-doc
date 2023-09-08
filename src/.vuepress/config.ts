import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
	base: '/',
	lang: 'zh-CN',
	title: 'HGB-Admin项目文档 V1.0.0',
	description: '化工宝前端框架 HGB-Admin 的项目文档',
	theme,
});
