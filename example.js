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

// process.uptime() 返回 Node 程序已运行的秒数。
// process.hrtime() 返回当前的高分辨时间，形式为 [秒，纳秒] 的元组数组。它是相对于在过去的任意时间。该值与日期无关，因此不受时钟漂移的影响。主要用途是可以通过精确的时间间隔，来衡量程序的性能。

// util.debuglog(section) 这个方法是在存在NODE_DEBUG环境变量的基础上，创建一个有条件写到stderr里的函数。如果“节点”的名字出现在这个环境变量里,那么就返回一个功能类似于console.error()的函数.如果不是,那么返回一个空函数.
// section {String} 被调试的程序节点部分
// 返回值: {Function} 日志处理函数

// util.format(format, [...]) 根据第一个参数，返回一个格式化字符串，类似`printf`的格式化输出。
// util.log(string) 在控制台进行输出，并带有时间戳。
// util.inspect(object, [options]) 返回一个对象的字符串表现形式, 在代码调试的时候非常有用.
// util.isArray(object) 如果给定的对象是`数组`类型，就返回`true`，否则返回`false`
// util.isRegExp(object) 如果给定的对象是`RegExp`类型，就返回`true`，否则返回`false`。
// util.isDate(object) 如果给定的对象是`Date`类型，就返回`true`，否则返回`false`。
// util.isError(object) 如果给定的对象是`Error`类型，就返回`true`，否则返回`false`。
// util.inherits(constructor, superConstructor) 通过[构造函数](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/constructor)，继承原型对象上的方法。构造函数的`原型`将被设置为一个新的从`超类`创建的对象。

// events.EventEmitter 通过 `require('events').EventEmitter` 获取 EventEmitter 类。 
// 当 `EventEmitter` 实例遇到错误，通常的处理方法是产生一个 `'error'` 事件，node 对错误事件做特殊处理。
// 如果程序没有监听错误事件，程序会按照默认行为在打印出 栈追踪信息 (stack trace) 后退出。
// EventEmitter 会在添加 listener 时触发 `'newListener'` 事件，删除 listener 时触发 `'removeListener'` 事件
// emitter.addListener(event, listener)
// emitter.on(event, listener)
// emitter.once(event, listener)
// emitter.removeListener(event, listener)
// emitter.removeAllListeners([event])

// emitter.setMaxListeners(n) 在默认情况下，EventEmitter 会在多于 10 个 listener 监听某个事件的时候出现警告，此限制在寻找内存泄露时非常有用。
// 显然，也不是所有的 Emitter 事件都要被限制在 10 个 listener 以下，在这种情况下可以使用这个函数来改变这个限制。设置0这样可以没有限制。
// EventEmitter.defaultMaxListeners `emitter.setMaxListeners(n)` 优先于 `EventEmitter.defaultMaxListeners`。

// emitter.listeners(event) 返回指定事件的 listener 数组

// emitter.emit(event, [arg1], [arg2], [...]) 使用提供的参数按顺序执行指定事件的 listener 若事件有 listeners 则返回 `true` 否则返回 `false`。

// EventEmitter.listenerCount(emitter, event) 返回指定事件的 listeners 个数
// 'removeListener'

// Domains 提供了一种方式，即以一个单一的组的形式来处理多个不同的IO操作。如果任何一个注册到domain的事件触发器或回调触发了一个‘error’事件，或者抛出一个错误，那么domain对象将会被通知到。

// domain.create() 返回一个新的Domain对象。
// domain.run(fn) 在域的上下文里运行提供的函数，隐式地绑定所有该上下文里创建的事件分发器，计时器和低层请求。
// domain.members 一个数组，里面的元素是被显式添加到域里的计时器和事件分发器。
// domain.add(emitter) emitter {EventEmitter | Timer} 被添加到域里的时间分发器或计时器 显式地将一个分发器添加到域。如果这个分发器调用的任意一个事件处理器抛出一个错误，或是这个分发器分发了一个error事，那么它会被导向到这个域的error事件，就像隐式绑定所做的一样。
// domain.remove(emitter) 与domain.add(emitter)函数恰恰相反，这个函数将域处理从指明的分发器里移除。
// domain.bind(callback) 返回的函数会是一个对于所提供的回调函数的包装函数。当这个被返回的函数被调用时，所有被抛出的错误都会被导向到这个域的error事件。




