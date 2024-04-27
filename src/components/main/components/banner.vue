<template>
  <div class="banner">
    <h2>让你上瘾的英语学习工具</h2>
    <div class="cb-text">
      <p>
        使用 <span>连词成句</span> 、 <span>i + 1</span> 、 <span>以终为始</span> 等学习理论来帮助你习得英语<br />
        通过不断的 <span>重复 </span>形成肌肉记忆<br />
        最重要的是 <span>游戏化</span> 的形式让学习英语从此不再痛苦
      </p>
    </div>
    <div class="c-start">
      <div class="c-start-button">
        <strong class="c-btn-text">开启Earthworm</strong>
        <div id="container-stars"></div>
      </div>
      <div class="c-start-title">把英语练起来！！！</div>
    </div>
    <div class="c-computer">
      <img alt="" src="@/assets/images/computer.webp" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.banner {
  display: flex;
  flex-direction: column;

  .cb-text {
    margin-top: 1.25rem;

    p {
      font-size: 1.25rem;
      line-height: 2.5rem;

      span {
        color: var(--color-text-enhance);
      }
    }
  }

  .c-start {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 40px;

    .c-start-button {
      cursor: pointer;
      position: relative;
      width: 210px;
      height: 48px;
      color: #fff;
      font-family: Avalors Personal Use;
      font-size: 14px;
      letter-spacing: 5px;
      z-index: -1;
      padding: 0 8px;
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.5rem;
      border-radius: 999999999rem;
      animation: moveBg 5s ease infinite;
      background-clip: padding-box, border-box;
      background-image: linear-gradient(#05051d, #05051d),
        linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #04f 87%);
      background-origin: border-box;
      background-size: 300% 300%;
      border: 4px double transparent;
      transition: scale 0.3s;
      overflow: hidden;

      &:hover {
        scale: 1.1;
      }

      .c-btn-text {
        z-index: 1;
      }

      #container-stars {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        &::after {
          content: '';
          position: absolute;
          top: -510px;
          left: -500px;
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, #fff 1px, transparent 1%);
          background-size: 50px 50px;
          background-position: 50% 50%;
          animation: moveStarTop 20s linear infinite;
        }

        &::before {
          content: '';
          position: absolute;
          top: -280px;
          left: -660px;
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, #fff 1px, transparent 1%);
          background-size: 50px 50px;
          background-position: 50% 50%;
          animation: moveStarRotate 30s linear infinite;
        }
      }
    }

    .c-start-title {
      width: 144px;
    }
  }

  .c-computer {
    margin: 0 auto;
    width: 1200px;

    img {
      width: 75%;
    }
  }
}
</style>
