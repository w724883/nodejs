//__filename:当前所执行代码文件的文件路径。这是该代码文件经过解析后的绝对路径。对于主程序来说，这和命令行中使用的文件路径未必是相同的。在模块中此变量值是该模块文件的路径。
console.log(__filename);

//__dirname:当前执行脚本所在目录的目录名。
console.log(__dirname);

//setTimeout(callback, delay, [arg], [...])|setInterval(callback, delay, [arg], [...]):超时值必须在1-2147483647的范围内（包含1和2147483647）。如果该值超出范围，则该值被当作1毫秒处理。一般来说，一个定时器不能超过24.8天。
//clearTimeout|clearInterval:停止一个之前通过setInterval()创建的定时器。回调不会再被执行。
var cleartimeout = setTimeout(function(){
	console.log('setTimeout');
	console.timeEnd('setTimeout');
},1000);

//console.time:标记一个时间点,console.timeEnd:结束计时器，记录输出
console.time('setTimeout');

//unref:停止定时器的回调
cleartimeout.unref();
//ref:恢复定时器的回调
cleartimeout.ref();

//setImmediate(callback, [arg], [...]):调度在所有 I/O 事件回调之后、setTimeout 和 setInterval 之前“立即”执行 callback
//clearImmediate(immediateId):撤掉队列中的回调函数
function nexttick(a,b){
	if(a > b){
		console.log('end');
	}else{
		console.log(a);
		process.nextTick(function(){
			return nexttick(a+1,b);
		})
	}
}
function immediate(a,b){
	if(a > b){
		console.log('end');
	}else{
		console.log(a);
		setImmediate(immediate,a+1,b);
	}
}
// nexttick(0,1000000);
// immediate(0,10000);


// 一个模块如果被加载过，当再次被循环调用时，模块会返回一个unfinished copy以防止循环加载
//当require()一个模块时，总是会优先加载核心模块（http模块），然后按文件名没有查找到，如果未找到就逐级从当前的父文件的node_modules文件夹中加载，
//在寻找模块文件的过程中，node会优先加载package.json文件中的指向，如果没有package则在当前目录查找，如果没找到，则加载当前目录中的index.js或index.node

//module.exports上挂载的东西必须立即执行，否则无效

//module.require(id)提供了一种像 require() 一样从最初的模块加载一个模块的方法。

//module.id用于区别模块的标识符。通常是完全解析后的文件名。

//module.filename模块完全解析后的文件名。

// module.loaded不论该模块是否加载完毕，或者正在加载的过程中。

// module.parent引入这个模块的模块。

// module.children这个模块引入的所有模块对象。

// require.main === module判断一个文件是否是直接被运行的

// require.main.filename 获取当前程序的入口点

// process对象是一个全局对象，可以在任何地方访问到它
// 事件: 'exit' 当进程将要退出时触发。这是一个在固定时间检查模块状态（如单元测试）的好时机。需要注意的是 'exit' 的回调结束后，主事件循环将不再运行，所以计时器也会失效。
// 事件: 'uncaughtException'（未捕获错误） 当一个异常冒泡回归到事件循环中就会触发这个事件，如果建立了一个监听器来监听这个异常，默认的行为（打印堆栈跟踪信息并退出）就不会发生。
// 'SIGINT': 当进程接收到信号时触发。
// 'end': 当进程执行结束时触发。
// 'data': 

// process.stdout 一个指向标准输出流(stdout)的 可写的流(Writable Stream)。
// process.stderr 一个指向标准错误流(stderr)的 可写的流(Writable Stream)。
// process.stdin 一个指向 标准输入流(stdin) 的可读流(Readable Stream)。标准输入流默认是暂停 (pause) 的，所以必须要调用 process.stdin.resume() 来恢复 (resume) 接收。

// process.argv 一个包含命令行参数的数组。第一个元素会是 'node'， 第二个元素将是 .Js 文件的名称。接下来的元素依次是命令行传入的参数。
// process.argv.forEach(function(val, index, array) {
//   console.log(index + ': ' + val);
// });

// process.execPath 开启当前进程的这个可执行文件的绝对路径。

// process.execArgv 与 process.argv 类似，不过是用于保存 node特殊(node-specific) 的命令行选项（参数）。这些特殊的选项不会出现在 process.argv 中，而且 process.execArgv 不会保存 process.argv 中保存的参数（如 0:node 1:文件名 2.3.4.参数 等）， 所有文件名之后的参数都会被忽视。这些选项可以用于派生与与父进程相同执行环境的子进程。

// process.abort() 这将导致 Node 触发一个abort事件，这会导致Node退出并且创建一个核心文件。

// process.chdir(directory) 改变进程的当前进程的工作目录，若操作失败则抛出异常。
// console.log('当前目录：' + process.cwd());
// try {
//   process.chdir('/tmp');
//   console.log('新目录：' + process.cwd());
// }
// catch (err) {
//   console.log('chdir: ' + err);
// }

// process.cwd() 返回进程当前的工作目录。

// process.env 一个包括用户环境的对象。详细参见 environ(7)。

// process.exit([code]) 终止当前进程并返回给定的 code。如果省略了 code，退出是会默认返回成功的状态码('success' code) 也就是 0。
// process.exitCode 当进程既正常退出，或者通过未指定 code 的 process.exit() 退出时，这个属性中所存储的数字将会成为进程退出的错误码 (exit code)。
// 如果指名了 process.exit(code) 中退出的错误码 (code)，则会覆盖掉 process.exitCode 的设置。

// process.getgid() 获取进程的群组标识（详见getgid(2)）。获取到的是群组的数字ID，不是群组名称。
// process.setgid(id) 设置进程的群组标识（详见getgid(2)）。参数可以是一个数字ID或者群组名字符串。如果指定了一个群组名，这个方法会阻塞等待将群组名解析为数字ID。

// process.getgroups() 返回一个保存补充组ID(supplementary group ID)的数组。
// process.setgroups(groups) 设置补充分组的ID标识. 这是一个特殊的操作, 意味着你必须拥有root或者CAP_SETGID权限才可以。

// process.initgroups(user, extra_group) 读取 /etc/group 并且初始化group分组访问列表，使用改成员所在的所有分组， 这是一个特殊的操作, 意味着你必须拥有root或者CAP_SETGID权限才可以。

// process.version 一个暴露编译时存储版本信息的内置变量 NODE_VERSION 的属性。
// process.versions 一个暴露存储 node 以及其依赖包 版本信息的属性。

// process.config 一个包含用来编译当前 node.exe 的配置选项的对象。内容与运行 ./configure 脚本生成的 "config.gypi" 文件相同。

// process.kill(pid, [signal]) 向进程发送一个信号。 pid 是进程的 id 而 signal 则是描述信号的字符串名称。信号的名称都形似 'SIGINT' 或者 'SIGUSR1'。如果没有指定参数则会默认发送 'SIGTERM' 信号

// process.pid 当前进程的 PID
// process.title 获取/设置 (Getter/setter) 'ps' 中显示的进程名。
// process.arch 返回当前 CPU 处理器的架构：'arm'、'ia32' 或者 'x64'.
// process.platform 返回当前程序运行的平台：'darwin', 'freebsd', 'linux', 'sunos' 或者 'win32'
// process.memoryUsage() 返回一个对象，它描述了Node进程的内存使用情况单位是bytes

// process.nextTick(callback) 在事件循环的下一次循环中调用 callback 回调函数。

// process.umask([mask]) 设置或者读取进程的文件模式的创建掩码。子进程从父进程中继承这个掩码。如果设定了参数 mask 那么返回旧的掩码，否则返回当前的掩码。


