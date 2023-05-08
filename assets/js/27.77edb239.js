(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{301:function(v,_,t){"use strict";t.r(_);var a=t(14),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"多线程概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多线程概念"}},[v._v("#")]),v._v(" 多线程概念")]),v._v(" "),_("h2",{attrs:{id:"进程和线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[v._v("#")]),v._v(" 进程和线程")]),v._v(" "),_("blockquote",[_("p",[v._v("进程是计算机中正在运行的一个程序，它是操作系统对一个正在运行程序的一种抽象，通常包括程序计数器、寄存器和内存堆栈等内部状态。\n每个进程都有自己的内存空间，即每个进程运行时都会分配一定的内存空间，这个空间包括代码、数据、堆栈等。操作系统通过进程来管理计算机的资源，\n并为每个进程分配独立的计算机资源，如内存、文件、端口等。\n不同的进程之间相互独立，它们之间不能直接共享数据，如果需要数据共享，则需要使用进程间通信技术。")])]),v._v(" "),_("hr"),v._v(" "),_("blockquote",[_("p",[v._v("多线程指的是在单个程序中同时执行多个线程（线程是程序中的基本执行单元），\n也就是说，在同一时间内，多个线程在同一进程中运行。在多线程的环境中，每个线程都可以并发地执行自己的任务，\n从而提高了程序的执行效率和性能。通过合理地使用多线程技术，可以使程序更加快速、高效地完成任务。同时，多线程也能够更好地实现程序的可扩展性、\n可维护性和可重用性。")])]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("进程和线程是操作系统中重要的概念，二者有如下区别：")]),v._v(" "),_("ol",[_("li",[v._v("进程是程序执行的基本单位，而线程是CPU调度的基本单位。")]),v._v(" "),_("li",[v._v("进程拥有独立的内存空间，一个进程无法直接访问另一个进程的内存，而线程共享所属进程的内存空间。")]),v._v(" "),_("li",[v._v("每个进程都有自己独立的代码和数据空间，线程没有独立的代码和数据空间，共享所属进程的代码和数据空间。")]),v._v(" "),_("li",[v._v("进程的创建和销毁需要操作系统进行相应的调度和分配资源，而线程的创建和销毁则是在进程内部完成。")]),v._v(" "),_("li",[v._v("进程间通信的方式包括IPC、Socket等，线程之间通信可以通过共享内存、消息传递等方式实现。")])]),v._v(" "),_("p",[v._v("总体来说，进程是资源分配的基本单位，线程是资源调度的基本单位。线程的创建和销毁比进程更加轻量级，且线程的切换成本也比进程低。但是，由于线程共享进程的内存空间，因此需要特殊的同步机制来保证线程之间的安全性和正确性。")]),v._v(" "),_("h2",{attrs:{id:"并发和并行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并发和并行"}},[v._v("#")]),v._v(" 并发和并行")]),v._v(" "),_("p",[v._v("并发和并行是两个相关但不同的概念。")]),v._v(" "),_("p",[v._v("并发是指在一段时间内，多个任务交替执行，每个任务都有可能得到执行，但不一定同时执行。例如，在计算机系统中，多个程序交替运行，每个程序都有可能在一段时间内被执行，但只有一个程序能被\nCPU 执行，其余程序则在等待 CPU 资源。")]),v._v(" "),_("p",[v._v("并行是指在同一时刻，多个任务同时执行。例如，在多核处理器中，多个线程可以在不同的 CPU 核心上同时执行。")]),v._v(" "),_("p",[v._v("因此，可以将并发看作是一种逻辑上的概念，而并行则是一种物理上的概念。在计算机系统中，通过使用多线程、多进程和分布式系统等技术，实现并发和并行的目标。")]),v._v(" "),_("h2",{attrs:{id:"多线程的优点-使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多线程的优点-使用场景"}},[v._v("#")]),v._v(" 多线程的优点&使用场景")]),v._v(" "),_("p",[v._v("优点：")]),v._v(" "),_("ol",[_("li",[v._v("提高程序的响应速度和处理能力：多线程可以让程序同时处理多个任务，提高程序的响应速度和处理能力。")]),v._v(" "),_("li",[v._v("节省资源：多线程可以让程序共享同一块内存，避免重复申请和占用资源，从而节省资源。")]),v._v(" "),_("li",[v._v("方便处理任务：多线程可以方便地处理各种类型的任务，比如IO密集型、计算密集型等任务。")])]),v._v(" "),_("p",[v._v("使用场景：")]),v._v(" "),_("ol",[_("li",[v._v("需要实现异步操作：比如网络请求、数据加载、文件读写等，多线程可以让这些操作在后台进行，避免阻塞主线程。")]),v._v(" "),_("li",[v._v("需要处理复杂计算任务：比如图像处理、视频编辑等，多线程可以让这些任务同时处理，提高程序的处理能力。")]),v._v(" "),_("li",[v._v("需要实现高并发访问：比如Web服务器、数据库等，多线程可以让程序同时处理多个请求，提高系统的吞吐量。")]),v._v(" "),_("li",[v._v("需要实现动态扩展：比如消息队列、线程池等，多线程可以根据需要动态地创建和销毁线程，提高程序的灵活性和可扩展性。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);