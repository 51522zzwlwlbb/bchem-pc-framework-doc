import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
	'/': [
		'',
		{
			text: '开始之前',
			prefix: 'suit/',
			children: ['README'],
		},
		{
			text: '基础',
			prefix: 'guide/',
			children: ['README', 'setting', 'router', 'auth', 'mock', 'component', 'design', 'deploy'],
		},
	],
});
