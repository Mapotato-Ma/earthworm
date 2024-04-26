<template>
  <main class="content">
    <!-- Banner By: Mapotato -->
    <Banner />
    <div class="c-split-line"></div>
    <!-- 了解有关 Earthworm 更多信息 By: 冰冻大西瓜 -->
    <MoreInfos />
    <div class="c-split-line"></div>
    <!-- 用户反馈 By: 空白不算白 -->
    <Questions />
    <div class="c-split-line"></div>
    <!-- 常见问题解答 By: Linjston-->
    <About />
    <div class="c-split-line"></div>
    <!-- join us By: Mapotato-->
    <UserFeedback />
  </main>
</template>

<script lang="ts" setup>
import { Banner, MoreInfos, Questions, About, UserFeedback } from './components';
</script>

<style>
/* 内容区域 */
.content {
  max-width: 1280px;
  height: 2000px;
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
}
</style>
