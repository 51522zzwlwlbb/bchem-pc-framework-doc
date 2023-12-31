import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';
import sidebar from './sidebar.js';

export default hopeTheme({
	hostname: '',

	author: {
		name: 'liwenan',
	},

	iconAssets: 'fontawesome-with-brands',

	logo: '/logo.svg',

	repo: 'https://gitee.com/saltFishHasDream/hgb-admin',

	docsDir: 'src',

	// navbar
	navbar,

	// sidebar
	sidebar,

	footer: '化工宝前端框架',

	displayFooter: true,

	encrypt: {
		config: {
			'/demo/encrypt.html': ['1234'],
		},
	},

	plugins: {
		// All features are enabled for demo, only preserve features you need here
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			demo: true,
			echarts: true,
			figure: true,
			flowchart: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ['ts', 'vue'],
			},
			presentation: ['highlight', 'math', 'search', 'notes', 'zoom'],
			stylize: [
				{
					matcher: 'Recommended',
					replacer: ({ tag }) => {
						if (tag === 'em')
							return {
								tag: 'Badge',
								attrs: { type: 'tip' },
								content: 'Recommended',
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},
	},
});
