<!--
 * @Author: chengfei
 * @Date: 2024-04-27 00:26:42
 * @LastEditTime: 2024-04-28 02:24:45
 * @LastEditors: chengfei
 * @Description: 
 * @FilePath: \earthworm\src\components\main\components\user-feedback.vue
-->
<template>
  <div class="user-feedback-wrapper">
    <div class="header">
      <h2>用户反馈</h2>
      <div class="mt-5">
        <p>如果您正在使用 Earthworm ，请随时在 Twitter 上向我们提供您的反馈!</p>
      </div>
    </div>
    <div class="mt-8">
      <div v-for="item in userBox" :key="item.count" class="mb-8">
        <blockquote class="user-box">
          <div class="p-6">
            <div class="gap-4">
              <img class="avatar" src="@/assets/images/feedback/cuixiaorui.webp" alt="头像"></img>
              <div class="flex-grow">
                <p class="user-name">{{ item.name }}</p>
                <p class="user-count text-xs">{{ item.count }}</p>
              </div>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30" height="30">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#03A9F4"
                  d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                />
              </svg>
            </div>
            <div class="mt-4">{{ item.content }}</div>
            <div class="my-2">
              <div class="time text-xs">{{ item.time }}</div>
            </div>
            <div class="flex action">
              <div class="like-icon">
                <svg class="icon" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
                <span>{{ item.likes }}</span>
              </div>
              <a class="user-a" href="#">{{ item.aText }}</a>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const userBox = ref([
  {
    name: 'cuixiaorui',
    count: '@cuixiaorui',
    content: ' Earthworm 不仅仅是一个工具;这是一次进入语言学习核心的旅程，让每个句子和连词都成为一次冒险。凭借其令人上瘾的游戏玩法，它不仅是一种练习，而且是一种日常习惯，邀请您更深入地了解英语的丰富性！',
    time: '6:06 PM · Feb 20, 2024',
    likes: '1342 likes',
    aText: "See cuixiaorui's"
  },
  {
    name: 'fengstats',
    count: '@fengstats',
    content: '我简直被这款应用迷住了！这种渐进式的学习方式，让每个阶段都充满挑战，同时也让我有了一种强烈的成就感。我已经不能停下学习的脚步，我渴望一点点的进步，希望能更上一层楼！',
    time: '2:17 PM · Feb 20, 2024',
    likes: '197 likes',
    aText: "See fengstats's"
  },
  {
    name: 'zclsx',
    count: '@jiushi21',
    content: '这个应用克服了英语学习的枯燥，我现在刷课程刷得停不下来。',
    time: '6:31 PM · Jan 23, 2024',
    likes: '79 likes',
    aText: "See jiushi21's"
  },
  {
    name: 'Nauxscript',
    count: '@Nauxscript',
    content: '现在我每天都要浏览这个应用程序，我觉得我的英语突飞猛进，有趣又充满成就感。我希望能够加入和我一样学习后进行打卡分享，会上瘾的！',
    time: '11:38 AM · Feb 3, 2024',
    likes: '520 likes',
    aText: "See Nauxscript's"
  },
  {
    name: 'Ims',
    count: '@Immersecode',
    content: '如此有趣又充实的英语学习应用，真是让人不知所措。我现在每天都在练习，这已经成为一种习惯。棒！',
    time: '4:51 PM · Feb 2, 2024',
    likes: '98 likes',
    aText: "See Immersecode's"
  },
  {
    name: 'vampirewy',
    count: '@vampirewy',
    content: '通过句子拆分进行学习，我感觉我刷课之后，对句子的理解更加深刻。这种感觉是潜移默化的，当我第二天打开，每次都会变得更加流畅！',
    time: '9:22 AM · Jan 9, 2024',
    likes: '86 likes',
    aText: "See vampirewy's"
  },
  {
    name: 'hildxd',
    count: '@hildxd',
    content: '再也没有像现在这样，我对学习如此充满热情。这个应用真是把学习变得如此有趣，每一次学习都像是一种挑战，让我无法抗拒。这种感觉太棒了，我能够一直刷课程而不觉得无聊',
    time: '11:56 PM · Mar 8, 2024',
    likes: '486 likes',
    aText: "See hildxd's"
  },
  {
    name: 'zuowendong',
    count: '@zuowendong',
    content: '我真的无法抵抗这款连词造句的英语学习应用的魔力，每天闲下来的时候，我都会习惯性地打开这款应用，忍不住去挑战一下自己，这对我来说是一种全新的娱乐方式！',
    time: '9:59 AM · Feb 22, 2024',
    likes: '232 likes',
    aText: "See zuowendong's"
  },
  {
    name: 'Hazel-Lin',
    count: '@HazelLin',
    content: '真没想到学习英语可以这么有趣，这个连词造句的方式简直让我停不下来。',
    time: '4:10 AM · Dec 22, 2023',
    likes: '78 likes',
    aText: "See HazelLin's"
  },
])
</script>

<style scoped>
.user-feedback-wrapper {
  padding-top: 6rem;

  .header {
    margin: 1.25rem 0;

    .mt-5 {
      margin-top: 1.25rem;

      p {
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: var(--color-text-feedback-desc);
        padding-top: 0.5rem;
      }
    }

  }
  .mt-8 {
    margin-top: 2rem;
    gap: 2rem;
    column-count: 3;

    .mb-8 {
      margin-bottom: 2rem;
      break-inside: avoid;

      .user-box {
        --shadow-feedback-user: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background-color: var(--color-bg-feedback-user);
        border-radius: 0.5rem;
        box-shadow: 0 0 #0000, 0 0 #0000, var(--shadow-feedback-user);
        overflow: hidden;
        margin: 0;

        &:hover {
          box-shadow: 0 0 #0000, 0 0 #0000, var(--shadow-feedback-user-hover);
        }

        .p-6 {
          height: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .gap-4 {
            gap: 1rem;
            display: flex;
            align-items: center;
            cursor: pointer;

            .avatar {
              padding: 0.25rem;
              object-fit: cover;
              border-color: rgb(192 132 252);
              border-width: 2px;
              border-radius: 9999px;
              width: 3.5rem;
              height: 3.5rem;
              max-width: 100%;
              display: block;
              vertical-align: middle;
            }

            .flex-grow{
              flex-grow: 1;

              .user-name{
                margin-top: 0.125rem;
                font-size: 1.125rem;
                line-height: 1.75rem;
                font-weight: 700;
              }

              .user-count{
                font-size: 0.75rem;
                line-height: 1rem;
                color: rgb(107 114 128);
              }
            }

            .icon{
              max-width: 100%;
              height: auto;
              display: block;
              vertical-align: middle;
              align-self:flex-start;
              overflow-clip-margin: content-box;
              overflow: clip;
            }
          }

          .mt-4{
            margin-top: 1rem;
            color: var(--color-feedback-user-content);
          }

          .my-2{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0.5rem 0;

            .time{
              font-size: 0.75rem;
              line-height: 1rem;
              color: rgb(107 114 128);
            }
          }

          .action {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
            font-size: 0.75rem;
            line-height: 1rem;
            margin-top: 2rem;

            .like-icon{
              display: flex;
              align-items: center;

              .icon{
                width: 1.25rem;
                height: 1.25rem;
                fill: currentColor;
                color: var(--color-feedback-like);
              }

              span{
                color: var(--color-feedback-like-text);
              }
            }

            .user-a{
              pointer-events:none;
              color: var(--color-feedback-like-a)
            }
          }
        }
      }
    }
  }
}
</style>
