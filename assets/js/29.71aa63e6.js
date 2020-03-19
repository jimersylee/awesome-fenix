(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{236:function(t,e,a){"use strict";a.r(e);var s=a(28),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"√-使用minikube部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#√-使用minikube部署"}},[t._v("#")]),t._v(" √ 使用Minikube部署")]),t._v(" "),a("p",[t._v("Minikube是Kubernetes官方提供的专门针对本地单节点集群的Kubernetes集群管理工具。针对本地环境对Kubernetes使用有一定的简化和针对性的补强。这里简要介绍其安装过程")]),t._v(" "),a("h2",{attrs:{id:"安装minikube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装minikube"}},[t._v("#")]),t._v(" 安装Minikube")]),t._v(" "),a("p",[t._v("Minikube是一个单文件的二进制包，安装十分简单，在已经完成"),a("RouterLink",{attrs:{to:"/deployment/deployment-env-setup/setup-docker.html"}},[t._v("Docker安装")]),t._v("的前提下，使用以下命令可以下载并安装最新版的Minikube。")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" minikube /usr/local/bin/\n")])])]),a("h2",{attrs:{id:"安装kubectl工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装kubectl工具"}},[t._v("#")]),t._v(" 安装Kubectl工具")]),t._v(" "),a("p",[t._v("Minikube中很多提供了许多子命令以代替Kubectl的功能，安装Minikube时并不会一并安装Kubectl。但是Kubectl作为集群管理的命令行，要了解Kubernetes是无论如何绕不过去的，通过以下命令可以独立安装Kubectl工具。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -LO https://storage.googleapis.com/kubernetes-release/release/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s https://storage.googleapis.com/kubernetes-release/release/stable.txt"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/bin/linux/amd64/kubectl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x kubectl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" kubectl /usr/local/bin/\n")])])]),a("h2",{attrs:{id:"启动kubernetes集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动kubernetes集群"}},[t._v("#")]),t._v(" 启动Kubernetes集群")]),t._v(" "),a("p",[t._v("有了Minikube，通过start子命令就可以一键部署和启动Kubernetes集群了，具体命令如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ minikube start --iso-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://kubernetes.oss-cn-hangzhou.aliyuncs.com/minikube/iso/minikube-v1.6.0.iso\n                 --registry-mirror"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.docker-cn.com\n                 --image-mirror-country"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cn \n                 --image-repository"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("registry.cn-hangzhou.aliyuncs.com/google_containers\n                 --vm-driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none\n                 --memory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("\n")])])]),a("p",[t._v("以上命令中，明确要求Minikube从指定的地址下载虚拟机镜像、Kubernetes各个服务Pod的Docker镜像，并指定了使用Docker官方节点作为国内的镜像加速服务。")]),t._v(" "),a("p",[t._v("“vm-drvier”参数是指Minikube所采用的虚拟机，根据不同操作系统，不同的虚拟机可以有以下选项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("操作系统")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("支持虚拟机")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("参数值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Windows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Hyper-V")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("hyperv")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Windows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("VirtualBox")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("virtualbox")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Linux")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("KVM")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("kvm2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Linux")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("VirtualBox")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("virtualbox")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MacOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("HyperKit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("hyperkit")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MacOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("VirtualBox")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("virtualbox")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MacOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Parallels Desktop")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("parallels")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MacOS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("VMware Fusion")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vmware")])])])]),t._v(" "),a("p",[t._v("特别需要提一下的是如果读者使用的并非物理机器，而是云主机环境——现在流行将其成为“裸金属”（Bare Metal）服务器，那在上面很可能是无法再部署虚拟机环境的，这时候应该将vm-drvier参数设为none。也可以使用以下命令设置虚拟机驱动的默认值：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ minikube config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" vm-driver none\n")])])]),a("p",[t._v("至此，整个Kubernetes就一键启动完毕了。其他工作，如命令行的自动补全，可参考使用"),a("RouterLink",{attrs:{to:"/deployment/deployment-env-setup/setup-kubernetes/setup-kubeadm.html"}},[t._v("Kubeadm安装Kubernetes集群")]),t._v("中相关内容。")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);