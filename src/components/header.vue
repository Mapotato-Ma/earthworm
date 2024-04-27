<template>
  <div class="header sticky">
    <div class="h-content">
      <div class="h-left">
        <div class="h-logo">
          <img src="@/assets/images/logo.webp" alt="" width="48px" height="48px" />
        </div>
        <h1 class="h-title" href="javascript:;">Earthworm</h1>
      </div>
      <div class="h-right">
        <a href="/" class="h-link">Home</a>
        <a href="#features" class="h-link">Features</a>
        <a href="#faq" class="h-link">FAQ</a>
        <a href="#contact" class="h-link">Contact</a>
        <button class="theme" :class="[svgClass]" id="theme" @click="toggleTheme">
          <div class="moon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path>
            </svg>
          </div>
          <div class="sun">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"></path>
            </svg>
          </div>
        </button>
        <button class="login">Login</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const svgClass = ref('dark')
const toggleTheme = async ({ clientX, clientY }: MouseEvent) => {
  // 判断当前主题
  const themeFlag = document.documentElement.className.includes('dark')

  // 开始一次过渡效果
  const transition = (<any>document).startViewTransition(() => {
    document.documentElement.classList.toggle('dark')
    svgClass.value = svgClass.value === 'dark' ? 'light' : 'dark'
  })

  const clipPath = [`circle(0% at ${clientX}px ${clientY}px)`, `circle(150% at ${clientX}px ${clientY}px)`]

  // 等待伪元素创建完成
  await transition.ready
  document.documentElement.animate(
    {
      clipPath: themeFlag ? clipPath : clipPath.toReversed(),
    },
    {
      duration: 300,
      pseudoElement: `::view-transition-${themeFlag ? 'new' : 'old'}(root)`,
    }
  )
}
</script>

<style scoped>
/* 头部 */
.header {
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  padding-top: 8px;

  .h-content {
    max-width: 1280px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    & > div {
      display: flex;
      align-items: center;
    }

    .h-left {
      gap: 24px;

      h1 {
        color: var(--color-text-header);
        font-size: 1.5rem;
        line-height: 1.5;
      }
    }

    .h-right {
      a {
        color: var(--color-text-header);
        display: inline-block;
        padding: 0 1rem;
      }

      & > button.login {
        color: #fff;
        padding: 10px 20px;
        background-color: #9333ea;
        margin-left: 1.25rem;
        font-family: CustomFont, sans-serif;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
      }

      /* 主题按钮 */
      button.theme svg {
        width: 1.5em;
        height: 1.5em;
      }

      button.theme.dark {
        .sun {
          display: none;
        }

        .moon {
          display: block;
        }
      }

      button.theme.light {
        .sun {
          display: block;
        }

        .moon {
          display: none;
        }
      }
    }
  }
}
</style>
