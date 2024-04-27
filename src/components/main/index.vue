<template>
  <main class="content">
    <!-- Banner By: Mapotato -->
    <Banner />
    <div class="c-split-line"></div>
    <!-- 了解有关 Earthworm 更多信息 By: 冰冻大西瓜 -->
    <MoreInfos />
    <div class="c-split-line"></div>
    <!-- 用户反馈 By: 空白不算白 -->
    <UserFeedback />
    <div class="c-split-line"></div>
    <!-- 常见问题解答 By: Linjston-->
    <Questions />
    <div class="c-split-line"></div>
    <!-- join us By: Mapotato-->
    <About />
    <div class="c-backup-btn" @click="scrollToTop">
      <svg viewBox="0 0 384 512" class="c-backup-btn-icon">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
      <span class="c-backup-btn-text">Back to Top</span>
    </div>
    <div class="copyright">Copyright © 2023-2024, Earthworm. All rights reserved.</div>
  </main>
</template>

<script lang="ts" setup>
import { Banner, MoreInfos, Questions, About, UserFeedback } from './components';

// 滚动到顶部
const scrollToTop = () => {
  document.body.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style>
/* 内容区域 */
.content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 112px;

  h2 {
    background: linear-gradient(to right, #af6aed, #d7bcf2);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 42px;
    font-weight: 800;
  }

  .c-split-line {
    position: relative;
    margin: 6rem auto 0;
    width: 35px;
    height: 15px;
    background: #fff;
    border-radius: 999999999rem;
    border: 4px solid #05051d;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 1280px;
      height: 2px;
      opacity: 0.75;
      z-index: -1;
      background: linear-gradient(
        to right,
        transparent 0,
        var(--color-text) 20%,
        var(--color-text) 80%,
        transparent 100%
      );
      clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
    }
  }

  .c-backup-btn {
    margin: 0 0 0 auto;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #b4a0ff41;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    height: 50px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 50px;
    transform-origin: right center;
    transition: all 233ms;
    .c-backup-btn-icon {
      position: relative;
      width: 12px;
      fill: var(--color-icon-fill);
      transform: translate(0, 0);
      transition: all 233ms;
    }
    .c-backup-btn-text {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      transform: scale(0) translate(-50%, -50%);
      transition: all 233ms;
      white-space: nowrap;
    }

    &:hover {
      background-color: #b5a0ff;
      border-radius: 50px;
      width: 140px;
      .c-backup-btn-icon {
        transform: translate(-300%, -300%);
      }
      .c-backup-btn-text {
        transform: scale(1) translate(-50%, -50%);
      }
    }
  }

  .copyright {
    height: 48px;
    font-size: 12px;
    line-height: 48px;
    opacity: 0.65;
  }
}
</style>
