<template>
	<div class="music-wrap" id="app">
		<div class="music-header">网易云音乐</div>
		<div class="player-main">
			<div class="left-bar" :class="{'indent-bar': isShow}">
				<div class="menu-indent"><a href="javascript:;" @click="menuIndent"><MenuList /></a></div>
				<div class="menu-panel">
					<ul class="menu-items">
						<router-link to="/index" tag="li" class="menu-item"><magnify /><span>搜索</span></router-link>
						<router-link to="/show" tag="li" class="menu-item"><music /><span>发现音乐</span></router-link>
						<router-link to="" tag="li" class="menu-item"><playBox /><span>MV</span></router-link>
						<router-link to="" tag="li" class="menu-item"><friends /><span>朋友</span></router-link>
						<li class="menu-item" v-if='isShow'><a href="javascript:;" @click="menuShow"><transfer /></a></li>
					</ul>
					<div class="menu-title" v-if='!isShow'>我的音乐</div>
					<ul class="menu-items" v-if='!isShow'>
						<router-link to="" tag="li" class="menu-item"><musicBox /><span>本地音乐</span></router-link>
						<router-link to="" tag="li" class="menu-item"><download /><span>下载管理</span></router-link>
						<router-link to="" tag="li" class="menu-item"><clock /><span>最近播放</span></router-link>
						<router-link to="" tag="li" class="menu-item"><cloud /><span>我的音乐云盘</span></router-link>
						<router-link to="" tag="li" class="menu-item"><radio /><span>我的电台</span></router-link>
						<router-link to="" tag="li" class="menu-item"><collect /><span>我的收藏</span></router-link>
					</ul>
					<div class="menu-title" v-if='!isShow'>创建的歌单 <plusCircle /></div>
					<ul class="menu-items" v-if='!isShow'>
						<router-link to="" tag="li" class="menu-item"><heart /><span>我喜欢的音乐</span></router-link>
						<router-link to="" tag="li" class="menu-item" v-for='s in songSheet' :key="s.id"><headphone /><span>{{s.sheetName}}</span></router-link>
					</ul>
				</div>
				<div class="user-panel">
					<i class="avatar"></i>
					<span class="user-name">图图也叫小卷毛</span>
					<a href="javascript:;" class="email"><email /></a>
					<a href="javascript:;" class="setting"><setting /></a>
				</div>
			</div>
			<div class="container">
				<router-view></router-view>
			</div>
		</div>
		<div class="play-panel">
			<div class="album-cover"></div>
			<div class="play-operate">
				<a href="javascript:;" class="prev"><prev /></a>
				<a href="javascript:;" class="play"><play /></a>
				<a href="javascript:;" class="next"><next /></a>
			</div>
			<div class="play-msg">
				<div class="song-wrap">
					<p class="song-msg">
						<span class="song-name">心要野</span> - <span class="songer-name">后海大鲨鱼</span>
					</p>
					<p class="play-time-msg">
						<span class="play-time">00:00</span> / <span class="song-time">04:36</span>
					</p>
				</div>
				<div class="progress-wrap">
					<player :playList="songList"></player>
				</div>
				<!-- <audio controls><source src="./assets/dongjidao.mp3" type="audio/mpeg" /></audio> -->
			</div>
			<div class="play-setting-wrap">
				<a href="javascript:;"><heart /></a>
				<a href="javascript:;"><loop /></a>
				<a href="javascript:;"><volume /></a>
				<a href="javascript:;"><playList /></a>
			</div>
		</div>
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
import heart from 'icons/heart-outline'
import headphone from 'icons/headphones'
import plusCircle from 'icons/plus-circle-outline'
import transfer from 'icons/transfer'
import setting from 'icons/settings'
import email from 'icons/email-outline'
import prev from 'icons/skip-previous-circle'
import next from 'icons/skip-next-circle'
import play from 'icons/play-circle'
import pause from 'icons/pause-circle'
import loop from 'icons/loop'
import playList from 'icons/playlist-play'
import volume from 'icons/volume-high'
import player from './components/common/player'

export default {
	name: 'app',
	data(){
		return{
			songSheet: [
				{
					sheetId: 1,
					sheetName: '我说这些歌很美，你说是的'
				},
				{
					sheetId: 2,
					sheetName: '乱·收'
				}
			],
			isShow: false,
			songList: [
				{
					name: 'haha',
					url: '/static/东极岛岛歌.mp3'
				}
			]
		}
	},
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
		heart,
		headphone,
		plusCircle,
		transfer,
		setting,
		email,
		prev,
		next,
		play,
		pause,
		loop,
		playList,
		volume,
		player,
	},
	methods: {
		menuIndent(){
			this.isShow = !this.isShow
		},
		menuShow(){
			this.isShow = false
		}
	}
}
</script>

<style lang="scss">
@import './assets/base/reset';
@import './assets/base/base';
@import './assets/base/variable';

.music-wrap{
	position: relative;
	width: 100%;
	max-width: 9.35rem;
	height: 6.3rem;
	margin: 0 auto;
	border: 1px solid #ccc;

	.music-header{
		padding-left: 12px;
		width: 100%;
		height: .32rem;
		line-height: .32rem;
		box-sizing: border-box;
		color: $white;
		background-color: #cf2e2e;
	}

	.player-main{
		display: flex;
		height: 5.35rem;
		.left-bar{
			width: 1.95rem;
			height: 5.35rem;
			background-color: #f3f3f5;
			border-right: $border;
			transition: width 0.5s ease;
			.material-design-icon{
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
					position: relative;
					font-size: .12rem;
					color: #aaaaab;
					width: 100%;
					height: .26rem;
					line-height: .26rem;
					box-sizing: border-box;
					padding-left: .15rem;
					margin-top: .2rem;
					.material-design-icon{
						position: absolute;
						right: .2rem;
						top: 0.045rem
					}
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
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							cursor: pointer;
						}
					}
				}
			}
			.user-panel{
				display: flex;
				width: 100%;
				height: 0.6rem;
				line-height: 0.6rem;
				align-items: center;
				border-top: $border;
				.avatar{
					margin: 0 .1rem;
					width: .3rem;
					height: .3rem;
					border-radius: 50%;
					background: url("./assets/images/account.png") center no-repeat;
					background-size: contain;
				}
				.user-name{
					display: inline-block;
					margin-right: .15rem;
					width: .7rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				a{
					display: flex;
				}
				.email{
					margin-right: .2rem;
				}
			}
		}
		
		.indent-bar{
			width: .45rem;
			transition: width 0.5s ease;
			.menu-panel{
				height: 3.6rem;
				.menu-items{
					.menu-item{
						padding: .13rem;
						span{
							display: none;
						}
					}
				}
			}
			.user-panel{
				height: auto;
				flex-direction: column;
				justify-content: center;
				padding-top: .15rem;
				.avatar{
					margin-bottom: .1rem;
				}
				.user-name{
					display: none;
				}
				a{
					display: flex;
					box-sizing: border-box;
					padding-left: .13rem;
					width: 100%;
					height: .35rem;
					line-height: .35rem;
				}
				.email{
					margin-right: 0;
				}
			}
		}
	}

	.play-panel{
		position: absolute;
		display: flex;
		align-items: center;
		bottom: 0;
		width: 100%;
		height: .63rem;
		border-top: $border;
		.album-cover{
			width: .63rem;
			height: .63rem;
			background: url("./assets/images/album.jpg") center no-repeat;
			background-size: cover;
		}
		.play-operate{
			display: flex;
			align-items: center;
			margin-left: .35rem;
			a{
				.material-design-icon{
					width: .30rem;
					height: .30rem;
					svg{
						width: .30rem;
						height: .30rem;
						fill: $theme-color;
					}
				}
				&:not(:last-child){
					margin-right: .2rem;
				}
			}
			.play{
				.material-design-icon{
					width: .35rem;
					height: .35rem;
					svg{
						width: .35rem;
						height: .35rem;
					}
				}
			}
		}
		.play-msg{
			flex-grow: 1;
			margin-left: .3rem;
			.song-wrap{
				position: relative;
				height: .15rem;
				p{
					position: absolute;
					span:first-child{
						color: #666;
					}
					span:last-child{
						color: #979797;
					}
				}
				.song-msg{
					left: 0;
					font-size: .13rem;
				}
				.play-time-msg{
					right: 0;
				}
			}
			.progress-wrap{
				margin-top: .05rem;
				width: 100%;
			}
		}
		.play-setting-wrap{
			margin-left: .4rem;
			a{
				margin-right: .35rem;
				.material-design-icon{
					width: .18rem;
					height: .18rem;
					svg{
						width: .18rem;
						height: .18rem;
						fill: #7e7e7e;
					}
				}
			}
		}
	}
}
</style>
