import type { UserEntity } from "./auth"

export interface NewsEntity {
  id?: string
  pin: boolean,
  title: string
  brief: string
  date: string
  endDate?: string
  image: string
}

export type NewsSegmentType = 'markdown' | 'pdf_file' | 'image'

export interface NewsSegment {
  type: NewsSegmentType
  content: string
}

export interface NewsDetail {
  entity: NewsEntity
  content: NewsSegment[]
  author: UserEntity
  category: string
}

export type NewsTarget = 'information' | 'magazine' | 'notice' | 'activity'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GetNewsTotal = async (_target: NewsTarget) => {
  return new Promise<number>((resolve) => {
    resolve(3389)
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GetNews = async (_target: NewsTarget, _page: number) => {
  return new Promise<NewsEntity[]>((resolve) => {
    resolve([
      {
        id: '1',
        pin: false,
        title: '标题1',
        brief: '简介1',
        date: '2022-01-01',
        image:
          'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/MCV_FA25_July22_01_Editorial_Exclusive_1920x1080.jpg',
      },
      {
        id: '2',
        pin: false,
        title: '标题2',
        brief: '简介2',
        date: '2022-01-02',
        image:
          'https://www.minecraft.net/content/dam/games/minecraft/background-images/pmp-hero-minecraft.jpg',
      },
      {
        id: '3',
        pin: false,
        title: '标题3',
        brief: '简介3',
        date: '2022-01-01',
        endDate: '2023-04-26',
        image:
          'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/game-characters/hoglin_bento.jpg',
      },
      {
        id: '4',
        pin: false,
        title: '标题4',
        brief: '简介4',
        date: '2022-01-02',
        endDate: '2023-04-26',
        image:
          'https://www.minecraft.net/content/dam/games/minecraft/background-images/pmp-hero-minecraft.jpg',
      },
    ])
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GetNewsDetail = async (_id: string) => {
  return new Promise<NewsDetail>((resolve) => {
    resolve({
      entity: {
        id: '1',
        pin: true,
        title: '标题1',
        brief: '简介1',
        date: '2022-01-01',
        endDate: '2028-01-01',
        image:
          'https://www.minecraft.net/content/dam/games/minecraft/background-images/pmp-hero-minecraft.jpg',
      },
      content: [
        {
          type: 'markdown',
          content:
            '\
# md-editor-v3使用教程\n\
#### 在正常的文本编辑基础上，md-editor-v3能够支持所有的markdown语法，例如：\n\
# H1\n\
## H2\n\
### H3\n\
#### H4\n\
##### H5\n\
###### H6\n\
因为字体原因，粗体和斜体无法支持，只能通过 CSS 模仿\n\
**粗体**\n\
*斜体*\n\
> 引用\n\
> \n\
> 多行引用\n\
> \n\
> 多行引用\n\
- 无序列表\n\
1. 有序列表\n\
------------------------------------\n\
|column1|表格|column3|\n\
|-|-|-|\n\
|content1|content2|content3|\n\n\
[链接(md-editor-v3)](http://ckang1229.gitee.io/vue-markdown-editor/zh/)\n\
![这是一张图片的介绍](https://cdn.luogu.com.cn/upload/usericon/75304.png)\n\
``` cpp\n\
#include <iostream>\n\
\n\
int main(int argc, char *argv[]) {\n\
    std::cout << "这是一段代码块" << std::endl;\n\
}\n\
```\n\
### 此外，我们添加了md-editor-v3提供的所有插件：\n\
#### Tip功能\n\
!!! tip\n\
  tip\n\
!!!\n\
!!! warning\n\
  warning\n\
!!!\n\
!!! danger\n\
  danger\n\
!!!\n\
!!! note\n\
  note\n\
!!!\n\
!!! abstract\n\
  abstract\n\
!!!\n\
!!! info\n\
  info\n\
!!!\n\
!!! success\n\
  success\n\
!!!\n\
!!! question\n\
  question\n\
!!!\n\
!!! failure\n\
  failure\n\
!!!\n\
!!! bug\n\
  bug\n\
!!!\n\
!!! example\n\
  example\n\
!!!\n\
!!! quote\n\
  quote\n\
!!!\n\
!!! hint\n\
  hint\n\
!!!\n\
!!! caution\n\
  caution\n\
!!!\n\
!!! error\n\
  error\n\
!!!\n\
!!! attention\n\
  attention\n\
!!!\n\
#### katex公式\n\
你可以使用katex语法来编写公式：\n\
$$\n\sum_{i=1}^n a_i=0$$\n\
#### mermaid流程图\n\
你可以使用特定的语法编写漂亮的流程图：\n\
```mermaid\n\
graph LR\n\
A --- B\n\
B-->C[fa:fa-ban forbidden]\n\
B-->D(fa:fa-spinner);\n\
```\n\
\n\
#### Todo List\n\
你可以通过上方的todo按钮快速插入一条todo项：\n\
- [ ] Todo 1\n\
- [x] Todo 2\n\
#### 高亮代码行\n\
你可以指定需要高亮的代码行，来更方便地突出部分代码：\n\
``` cpp {1-3,5}\n\
#include <iostream>\n\
\n\
int main(int argc, char *argv[]) {\n\
    std::cout << "这是一段代码块" << std::endl;\n\
}\n\
```\n\
<style>\n\
.header {\n\
  display: flex;\n\
  align-items: center;\n\
  padding: 10px;\n\
  background-color: #f0f0f0;\n\
  border-radius: 4px;\n\
  height: 48px;\n\
}\n\
\n\
.header-logo {\n\
  width: 40px;\n\
  height: 40px;\n\
  margin-right: 10px;\n\
}\n\
\n\
.header-title {\n\
  color: #111;\n\
  font-size: 28px;\n\
  margin: auto 0;\n\
}\n\
\n\
.header-btn {\n\
  color: #eee;\n\
  background-color: #6f106e;\n\
  height: 40px;\n\
  width: 80px;\n\
  margin-left: auto;\n\
  border: none;\n\
  border-radius: 4px;\n\
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.8);\n\
  transition: all .3s ease-in-out;\n\
}\n\
\n\
.header-btn:hover {\n\
  cursor: pointer;\n\
  background-color: #5d0b5d;\n\
  box-shadow: 2px 4px 8px rgb(0, 0, 0);\n\
  transform: translateY(-1px);\n\
}\n\
\n\
.header-btn:active {\n\
  background-color: #4b0a4b;\n\
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.6);\n\
  transform: translateY(1px);\n\
}\n\
</style>\n\
\n\
<nav class="header">\n\
  <a class="header-logo" href="https://www.nju.edu.cn">\n\
    <img src="https://www.nju.edu.cn/images/favicon.png" />\n\
  </a>\n\
  <p class="header-title">\n\
    南京大学\n\
  </p>\n\
  <button class="header-btn">\n\
    登录\n\
  </button>\n\
</nav>\n\
',
        },
        {
          type: 'pdf_file',
          content:
            'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.pdf',
        },
      ],
      author: {
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/75304.png',
        username: 'Kingcq',
        group: ['admin'],
        tags: [
          {
            text: '管理员',
            color: '#E6A23C',
            tagColor: 'rgba(230, 162, 60, 0.1)',
          },
        ],
      },
      category: '资讯',
    })
  })
}

export const GetNewsBrief = async () => {
  return new Promise<NewsEntity[]>((resolve) => {
    resolve([
      {
        id: '1',
        pin: false,
        image:
          'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/MCV_FA25_July22_01_Editorial_Exclusive_1920x1080.jpg',
        title: '第 8 届 NFCC 小游戏大赛开赛在即！',
        brief: '【康康你的】第15期活动暨第8届NFCC小游戏派对即将开赛！欢迎大家积极参赛！',
        date: '',
      },
      {
        id: '2',
        pin: false,
        image:
          'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/game-characters/hoglin_bento.jpg',
        title: 'NMO动画组创作挑战',
        brief: 'NMO动画组第九届创作挑战——‘战斗,爽!’',
        date: '',
      },
      {
        id: '3',
        pin: false,
        image:
          'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Hero-A-1440_Image-ID_Smurfs_DLC_1920x1080_01.jpg',
        title: '📜【NMO社刊第十三期·盛夏启航】',
        brief: '🌞热浪翻涌，方块跃动！NMO社刊携夏日狂欢特辑清凉降临！',
        date: '',
      },
      {
        id: '4',
        pin: false,
        image:
          'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/endcity-bento.jpg',
        title: '7 月服务器维护时间公告',
        brief: '由于校园网维护，服务器下线',
        date: '',
      },
    ])
  })
}
