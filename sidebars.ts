import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {type: 'autogenerated', dirName: '.'},
    {
      type: 'category',
      label: 'TIDAS 生态',
      items: [
        {
          type: 'link',
          label: 'TianGong LCA 说明文档',
          href: 'https://docs.tiangong.earth/',
        },
        {
          type: 'link', 
          label: '碳足迹产业技术创新联盟',
          href: 'https://www.carbonfootprint.network/',
        },
        {
          type: 'link', 
          label: '天工智库',
          href: 'http://www.tsinghua-riet.com/page/aicenter2/index.php',
        }
      ],
    }
  ],
};

export default sidebars;
