<template>
	<div class="music-wrap" id="app">
		<div class="music-header">网易云音乐</div>
		<div class="left-bar">
			<div class="menu-indent"><MenuList /></div>
			<div class="menu-panel">
				<ul class="menu-items">
					<li class="menu-item"><magnify /><span>搜索</span></li>
					<li class="menu-item"><music /><span>发现音乐</span></li>
					<li class="menu-item"><playBox /><span>MV</span></li>
					<li class="menu-item"><friends /><span>朋友</span></li>
				</ul>
				<div class="menu-title">我的音乐</div>
				<ul class="menu-items">
					<li class="menu-item"><musicBox /><span>本地音乐</span></li>
					<li class="menu-item"><download /><span>下载管理</span></li>
					<li class="menu-item"><clock /><span>最近播放</span></li>
					<li class="menu-item"><cloud /><span>我的音乐云盘</span></li>
					<li class="menu-item"><radio /><span>我的电台</span></li>
					<li class="menu-item"><collect /><span>我的收藏</span></li>
				</ul>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import MenuList from 'icons/menu'
import magnify from 'icons/magnify'
import music from 'icons/music'
import playBox from 'icons/play-box-outline'
import friends from 'icons/account-multiple-outline'
import musicBox from 'icons/music-box-outline'
import download from 'icons/download'
import clock from 'icons/clock'
import cloud from 'icons/cloud-outline'
import collect from 'icons/folder-plus'
import radio from 'icons/radio-tower'

export default {
	name: 'app',
	components:{
		MenuList,
		magnify,
		music,
		playBox,
		friends,
		musicBox,
		download,
		clock,
		cloud,
		collect,
		radio,
	}
}
</script>

<style lang="scss">
@import './assets/base/reset';
@import './assets/base/base';
@import './assets/base/variable';

.music-wrap{
	width: 100%;
	max-width: 9.35rem;
	height: 6.3rem;
	margin: 0 auto;

	.music-header{
		padding-left: 12px;
		width: 100%;
		height: .32rem;
		line-height: .32rem;
		box-sizing: border-box;
		color: $white;
		background-color: #cf2e2e;
	}

	.left-bar{
		width: 1.95rem;
		height: 5.35rem;
		background-color: #f3f3f5;
		.material-design-icon{
			// display: inline-block;
			width: .18rem;
			height: .18rem;
			color: #7e7e7e;
			svg{
				width: .18rem;
				height: .18rem;
				fill: #7e7e7e;
			}
		}
		.menu-indent{
			display: flex;
			align-items: center;
			width: 100%;
			height: .45rem;
			line-height: .45rem;
			padding-left: .15rem;
			box-sizing: border-box;
		}
		.menu-panel{
			width: 100%;
			height: 4.3rem;
			overflow-y: auto;
			.menu-title{
				font-size: .12rem;
				color: #aaaaab;
				width: 100%;
				height: .25rem;
				line-height: .25rem;
				box-sizing: border-box;
				padding-left: .15rem;
				margin-top: .2rem;
			}
			.menu-items{
				.menu-item{
					display: flex;
					box-sizing: border-box;
					padding-left: .15rem;
					width: 100%;
					height: .4rem;
					line-height: .4rem;
					color: #333;
					&:hover{
						background-color: #e8e8eb;
					}
					span{
						font-size: .14rem;
						display: inline-block;
						margin-left: .15rem;
					}
				}
			}
		}
	}
}
</style>
