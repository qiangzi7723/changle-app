// pages/home/home.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 首页轮播图数据
		imgUrls: ["../../asset/img/屏幕快照 2020-05-19 17.32.04.png"],
		// 4个入口数据
		entryList: [
			{ text: "长乐签", img: "../../asset/img/home/icon-长乐签@2x.png" },
			{ text: "草莓园", img: "../../asset/img/home/icon-草莓园@2x.png" },
			{ text: "有惊喜", img: "../../asset/img/home/icon-有惊喜@2x.png" },
			{ text: "了解我", img: "../../asset/img/home/icon-了解我@2x.png" },
		],
		// 热门活动数据
		hotList: [
			{
				text: "开辟你的专属草莓园 收获幸运礼物！",
				img: "../../asset/img/屏幕快照 2020-05-19 17.32.04.png",
			},
			{
				text: "开辟你的专属草莓园 收获幸运礼物！",
				img: "../../asset/img/屏幕快照 2020-05-19 17.32.04.png",
			},
		],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {},
});
