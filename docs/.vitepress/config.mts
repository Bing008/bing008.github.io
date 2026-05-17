import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '李冰 - 个人主页',
  description: '山东大学电气工程博士，研究方向：风电精细化实时仿真与优化控制',
  lang: 'zh-CN',
  base: '/',
  lastUpdated: true,
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '科研成果', link: '/research' },
      { text: '项目经历', link: '/projects' }
    ],
    
    footer: {
      message: '山东大学电气工程学院 | 风电精细化实时仿真与优化控制',
      copyright: 'Copyright © 2025 李冰'
    },
    
    lastUpdated: {
      text: '最后更新'
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
