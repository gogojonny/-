# git使用

## 分布式管理与集中式管理

版本管理工具分为分布式管理和集中式管理，git属于分布式管理

* 集中式管理：多台电脑链接同一台远程服务器，电脑将代码推送至服务器，也可以将文件从服务器拖取出来。集中式管理的最大特点是各个代码版本只在服务器上，这样一旦服务器出现问题就可以冒版本丢丢失的风险
* 分布式管理：多台电脑不仅与服务器相连，而且电脑本身还有一个代码仓库用于存储代码版本，一旦服务器出现问题，也可以从电脑中恢复失去的版本



## Bash，CMD，GUI的区别

Git Bash是基于cmd 的，在cmd的基础上增加了一些新的功能。可以使用git指令（当然在cmd上也可以使用），使用npm命令等。建议使用git bash作为命令行工具

Git CMD也是下载git后附带下载的工具，和window上的cmd没差别

Git GUI 用户图形界面，对于不喜欢黑屏命令行的人友好，提供用户图形界面来操控git



## 创建git仓库

由于git是一个分布式管理版本控制软件，所以每台电脑上都有自己的本地仓库，创建仓库的方法是在git bash中在对应的文件夹下使用

```
git init
```

指令，这时会在文件夹中出现一个``.git``文件夹,以后的代码都会在这里提交,但是这样的仓库还不知道要追踪哪些文件,所以还是一个空仓库

除了初始化一个git仓库外，还可以远程clone一个仓库 



## 将代码加入暂存区

使用

```
git add .
```

命令将代码加入到暂存区，这里`.`表示当前文件夹下所有文件

也可以加文件名表示将某一文件加入到暂存区



## 将暂存区中的文件加入到本地仓库

使用

```
git commit -m ‘XXXX’
```

将暂存区中的代码加入到本地仓库中

也可以一步将代码直接放到本地仓库中

```
git commit -a -m "注解"
```

后面的`-a` 表示跳过`git add`直接commit

`-m`表示提交信息与命令放到同一行



## 查看提交记录

使用

```
git log
```

就可以查看历史提交

![image-20230131142026879](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230131142026879.png)

如果查看记录比较长，可以按空格键获取所有提交记录，按q可以离开提交记录

也可以让记录显示为一行

```
git log --pretty=oneline 
```

当有多个分支时可以查看各个分支的记录

```
git log --pretty=oneline --graph 
```



## 文件状态

文件可以分为未跟踪和已跟踪

* 未跟踪：就是文件没有通过git add命令添加到暂存区中
* 已跟踪：就是文件已经通过git add命令添加到暂存区中
  * 暂存区状态：文件只是使用add命令添加到暂缓区（索引区），并没有使用commit命令添加到本地仓库中，这时候的状态叫做暂缓区状态。
  * 未修改状态：已经是暂存区状态的文件，如果在提交前没有做任何修改，那么这个文件的状态就是未修改的文件，只有未修改的文件才可以提交到仓库
  * 已修改的状态：如果文件在暂缓区中且发生了修改，那么这个文件就是已修改状态，已修改状态的文件需要再次add成为未修改状态才能提交。

实际上就是使用add指令将文件加入到git仓库管理范围内。添加到git仓库管理范围内的文件git可以对齐进行各种跟踪管理



## 检查文件状态

使用

```
git status
```

可以查看文件当前的状态

也可以使用

```
git status -s
```

来查看简写状态





## git忽略文件

在含有仓库的文件夹下创建`.gitignore`文件,再文件内写入要忽略的文件,就可以在添加文件到暂存区的时候忽略这个文件了

![image-20230131163039609](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230131163039609.png)

在使用打包工具时这些ignore文件会自动配置好,一般不需要管理这些文件





## commit校验和

git中所有数据在存储前都会有一个校验和，可以根据这个校验和来找到某次提交的文件

![image-20230131164510820](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230131164510820.png)

校验和是通过哈希算法生成40位的十六进制字符串



## 版本回退reset

**如果想进行版本回退，就需要知道目前是哪一个版本，Git通过HEAD指针记录当前版本**

HEAD是当前分支的指针，他总是指向该分支上最后一次提交

理解HEAD的最简单方式，就是将它看做该分支最后一次提交的快照



**我们可以通过HEAD来改变目前Git版本指向**

上一个版本就是HEAD^，上上个版本就是HEAD^^

如果是上1000个版本，就是HEAD~1000

我们可以指定某一commit id 来回退到目标版本

```
git reset --hard HEAD^
git reset --hard HEAD~2000
git reset --hard HEAD 0b23ab89
```



如果觉得回退后还有些内容是需要的，那么我们可以再次回到之前的版本，但是回退后log不会保留那次版本，可以使用`reflog`记录所有操作

```
git reflog --pretty=oneline --graph
```

```
git reset --hard 486fcb7
```

这样就可以再次跳回到原来跳出的版本

****

**如果某个文件已经修改但是我们不想要这个修改了，该怎么办**

* 如果代码已经加入到暂存区（被add但是没有commit）

使用``git reset HEAD .``来回退出暂存区

使用``git checkout .``来清除修改代码



* 如果文件没有被加入到暂存区

直接使用``git checkout .``即可



## 远程仓库

![image-20230131210734481](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230131210734481.png)

远程私人仓库需要身份凭证才能克隆或者推入

一般分为两类身份凭证：

* http：一般是要账号和密码
* ssh：一个密钥
* token：在公司中使用token凭证

因为http是无状态的，所以一般情况每做一次操作都需要输入账号和密码，好在Git内部的辅助工具会帮助处理账号和密码的问题



ssh是利用公钥和私钥实现即使不安全的情况下安全传输。

基本原理是在本地电脑生成公钥和私钥，然后将公钥加到远程仓库中，就可以实现传输和下载了

```
ssh-keygen -t ed25519 -C 3539228299@qq.com
```

上述为公钥和私钥的生成方法，在git bash中输入，cmd不一定有



## 本地仓库与哪些远程仓库链接

使用``git remote -v``指令可以观察到本地仓库与哪些远程仓库链接。

![image-20230131222431040](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230131222431040.png)



使用下面的代码可以给本地仓库添加远程仓库

```
 git remote add origin https://gitee.com/gogojonny/git-demo.git
```

这里的origin是远程仓库的名字，默认是origin

重命名远程仓库与移除远程仓库

![image-20230131222929486](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230131222929486.png)



虽然建立了远程仓库与本地仓库的连接，但是实际上没有指定本地仓库中哪一分支与远程仓库分支建立哪条链接

在没有确定连接的情况下，使用git push或者git pull会导致出现如下错误

![image-20230202150939182](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230202150939182.png)



想解决这个错误只需要给当前仓库指定远程仓库中的连接即可

```
git pull <remote> <branch>
```

也可以为当前分支设置上级分支，这样下次直接使用git pull指令时，分支会先从上级分支开始查找

设置上级分支的方法

```
git branch --set-upstream-to=origin/<branch> master
```

但即便设置了分支也不一定pull成功，可能会出现这种错误

![image-20230202154019415](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230202154019415.png)

git pull =git fetch+git merge

出现上述情况是因为git merge出现问题，主要是因为本地仓库的提交历史与远程仓库的提交历史是平行的，没有关联的（没有某一次提交的parent值为同一个值）

![image-20230202154336142](C:\Users\35392\AppData\Roaming\Typora\typora-user-images\image-20230202154336142.png)

如果仍旧想成功merge，就使用下面代码

```
 git merge --allow-unrelated-histories
```

只需使用一次，以后所有合并就都有相关联的提交记录了，这样以后只需要使用pull就可以直接合并了，当然直接push也可以了



## 遇到不同平台换行符问题

如果出现`warning: in the working copy of ‘XXX.py’, LF will be replaced by CRLF the next time Git touches it`表示当前文件中换行符不匹配。一般window系统的换行符是/r/n，而linux系统的换行符是/n，因此不能push，解决办法是

```
git config --global core.autocrlf true
```

*适用于Windows系统，且一般为Windows默认设置，会在提交时对换行符进行CRLF - LF的转换，检出时又会进行LF - CRLF的转换。





## 解决git的一系列问题

解决的问题？

解决从0开始到实现远程push操作的一些列问题

应该如何学习？

理解每一步的原理是什么



第一步，初始化一个。git文件

```
$ git init
```

第二步，添加远程仓库到本地

```
$ git remote add origin https://github.com/gogojonny/gitDemo.git
```

第三步，将未追踪的文件添加到本地仓库

```
$ git commit -a -m 'aaa'
```

第四部，将远程仓库中的origin/main分支拉到本地

```
$ git fetch origin main
```

第五步，将origin/main分支设置为master的上游分支

```
$ git branch --set-upstream-to=origin/main
```

第六步，将master分支与origin/main分支进行合并，注意要统一相关历史

```
$ git merge --allow-unrelated-histories
```

第七部，设置上游分支为默认push的分支

```
$ git config push.default upstream
```

第八步，将master分支推送到origin/main分支中，实现push操作

```
$ git push
```



虽然上面方法可行，但是让master分支的东西push到main分支总觉得有问题。下面提出更好的方法----追踪分支

第一步 初始化git

```
$ git init
```



第二步 设置远程仓库

```
$ git remote add origin https://github.com/gogojonny/gitDemo.git
```

第三步 获取origin/main分支

```
$ git fetch origin main
```

第四部 跟踪origin/main分支

```
$ git checkout --track origin/main
```

使用这个语句会追踪origin/main分支，并在本地设置一个新的main分支，这个分支可以直接push到远程origin/main分支上

第五步 添加新的文件，并提交到本地仓库

```
$ git commit -a -m 'bbb'
```

第六步 将本地仓库的内容推送至远程仓库

```
$ git push
```

















