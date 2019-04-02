$(function () {
	$('.scroll').css('overflow-x', 'hidden')
	$('#eoa_container').height($(window).height())
    $('.eoa_container_back').height($(window).height())
    /*
    *监听窗口大小变化
    */
	$(window).resize(function () {
	   $('#eoa_container').height($(window).height())
	   $('.eoa_container_back').height($(window).height())
	})
	/*
	*右侧最近联系人滑动
	*/
	$('#recently').bind('click', function () {
		$('#recently_list').slideToggle()
	})
	/*
	*聊天窗口，交互活动弹出
	*/
	$('#onlineTALK').bind('click', function () {
		$('#eoa_messageWin').css('display', 'block')
	})
	$('#Interactivity').bind('click', function () {
		$('#interactivityWin').css('display', 'block')
	})
	/*
	*聊天窗口关闭
	*/
	$('.close').bind('click', function () {
		$('#eoa_messageWin').css('display', 'none')
		$('#interactivityWin').css('display', 'none')
	})
	$('#closeInfo').bind('click', function () {
		$('.personInfo').css('display', 'none')
	})
	/*
	*聊天窗口放大
	*/
	;var a = $ ('#eoa_messageWin')
	;var b = a.find('.messageWin_left_content')
	;var c = a.find('.right-window')
	;var d = a.find('#draggable')
	;var e = a.find('.content-win')
	;var f = e.find('.title')
	;var g = a.find('.send-win')
	;var h = a.find('.right-window')
	;var zoomOldStyle = [a.height(), a.width(), b.height(), c.width(), d.width(), e.width(), e.height(), f.width(), g.width(), h.height()]
	;a.resize(function () {
		if (!$(this).hasClass('afterZOOM')) {
			$('.zoom').bind('click', function () {
				a.addClass('afterZOOM')
				;var afterHeight = $(window).height()
				;var afterWidth = $(window).width()
				;a.css('height', afterHeight)
				;a.css('width', afterWidth)
				;b.css('height', afterHeight)
				;c.css('width', afterWidth - 250)
				;d.css('width', afterWidth - 250)
				;e.css('width', afterWidth - 250)
				;e.css('height', afterHeight - 55 - 144)
				;f.css('width', afterWidth - 250 - 60)
				;g.css('width', afterWidth - 250)
				;h.css('height', afterHeight)
			})
		}
	})
	a.resize(function () {
		if ($(this).hasClass('afterZOOM')) {
			$('.zoom').bind('click', function () {
				a.removeClass('afterZOOM')
				;a.css('height', zoomOldStyle[0] + 'px')
				;a.css('width', zoomOldStyle[1] + 'px')
				;b.css('height', zoomOldStyle[2] + 'px')
				;c.css('width', zoomOldStyle[3] + 'px')
				;d.css('width', zoomOldStyle[4] + 'px')
				;e.css('width', zoomOldStyle[5] + 'px')
				;e.css('height', zoomOldStyle[6] + 'px')
				;f.css('width', zoomOldStyle[7] + 'px')
				;g.css('width', zoomOldStyle[8] + 'px')
				;h.css('height', zoomOldStyle[9] + 'px')
			})
		}
	})
	/* ------------------------------------------------------------聊天窗口----------------------------------------------------------------------------- */
	/* ------------------------------------------------------------聊天窗口----------------------------------------------------------------------------- */
	/*
	*列表滑动
	*/
	$('.scroll > .list').each(function (i) {
		$(this).children('span').bind('click', function () {
			if (!$(this).next('ul').hasClass('notSlide')) {
				$(this).next('ul').slideToggle()
			}
		})
	})
	/*
	*滚动条判断
	*/
	$('.scroll > .list').resize(function () {
		var lh = $('.list_last').height()
		var sh = $('.list_stu').height()
		var th = $('.list_teach').height()
		var ph = $('.list_parent').height()
		var totalHeigh = lh + sh + th + ph
		if (totalHeigh > 463) {
			console.log(totalHeigh)
			$('.scroll').css('overflow-y', 'scroll')
			$('.scroll > .list').each(function () {
				$(this).addClass('divOS')
				$(this).find('ul').addClass('ulOS')
				$(this).find('ul').find('li').each(function () {
					$(this).addClass('liOS')
				})
				/*
				*活动状态监听
				*/
				$(this).find('.active').addClass('activeOS')
			})
		} else {
			$('.scroll').css('overflow-y', 'hidden')
			$('.scroll > .list').each(function () {
				$(this).removeClass('divOS')
				$(this).find('ul').removeClass('ulOS')
				$(this).find('ul').find('li').each(function () {
					$(this).removeClass('liOS')
				})
				$(this).find('.active').removeClass('activeOS')
			})
		}
	})
	/*
	*有无滚动条时的样式变化
	*/
	$('.contacts_tab li').each(function () {
		if (!$(this).parent().hasClass('notSlide')) {
			$(this).bind('click', function () {
				$(this).addClass('active')
				/*
				*移除滚动条下状态
				*/
				if ($('.scroll').css('overflow-y') === 'scroll') {
					$(this).addClass('activeOS')
					$(this).siblings().removeClass('activeOS')
				}
				$(this).siblings().removeClass('active')
				$(this).parent().parent().siblings().find('li').removeClass('active')
				$(this).parent().parent().siblings().find('li').removeClass('activeOS')
			})
		}
	})
	/*
	*通讯录面板切换
	*/
	$('.message_contacts ul li').each(function (i) {
		$(this).bind('click', function () {
			$(this).find("span").addClass('active')
			$(this).siblings().find("span").removeClass('active')
			$('.scroll').eq(i).removeClass('dn')
			$('.scroll').eq(i).siblings().addClass('dn')
		})
	})
	/*
	*创建群组
	*/
	$('.group_tab .add img').bind('click', function () {
		$('.group_tab .check').css('display', 'inline')
		$('.group_tab .list_stu ul').slideDown()
	})
	/*
	*当前聊天人切换
	*/
	$('.scroll li').each(function () { 
		if (!$(this).hasClass('notTalk')) {
			$(this).bind('click', function () {
				$('.winName > span').html($(this).find('.name').html())
				$('.personInfo').css('display', 'none')
				if ($(this).hasClass('groupWin')) {
					$('.winName > span').removeClass('personWin')
					$('.winName > span').addClass('groupWin')
					$('.winName> img').css('display', 'inline')
				} else {
					$('.winName > span').removeClass('groupWin')
					$('.winName > span').addClass('personWin')
					$('.winName > img').css('display', 'none')
				}
			})
		}
	})
	/*
	*详细信息弹窗
	*/
	$('.winName > span').bind('click', function () {
		if (!$(this).hasClass('groupWin')) {
			$('.personInfo').css('display', 'block')
			$('.infoName').html($(this).html())
		}
		$(this).resize(function () {
			if ($(this).hasClass('groupWin')) {
				$('.personInfo').css('display', 'none')
			}
		})
	})
	/*
	*详细信息活动面板切换
	*/
	$('.infoBody > .tab li').each(function () {
		$(this).bind('click', function () {
			$(this).addClass('active')
			$(this).siblings().removeClass('active')
		})
	})
	/* ------------------------------------------------------------交互活动------------------------------------------------------------------------- */
	/* ------------------------------------------------------------交互活动------------------------------------------------------------------------- */
	$('#interactivityWin .left_list .div_list').each(function () {
		$(this).find('li').bind('click', function () {
			$(this).addClass('active')
			$(this).siblings().removeClass('active')
			$(this).parent().parent().siblings().find('li').removeClass('active')
		})
	})
	/* --------------------------------------------------------单一模块弹窗切换-----------------------------------------------------------------------*/
	/* --------------------------------------------------------单一模块弹窗切换-----------------------------------------------------------------------*/
	$('#left_list_listUL .listUL_list').each(function(){
		$(this).bind('click', function (i) {
			$('.show_window').eq(i).css('display', 'block')
			$('.show_window').eq(i).siblings().css('display', 'none')
		})
	})
})
