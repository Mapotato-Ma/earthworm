<template>
  <div class="about">
    <div class="a-left">
      <div class="a-left-row">
        <div class="a-logo">
          <img src="@/assets/images/logo.webp" alt="" width="48px" height="48px" />
        </div>
        <h1 class="a-title" href="javascript:;">Earthworm</h1>
      </div>
      <div class="a-left-row a-join-us">一起来加入我们&nbsp;<span class="a-enhance">Earthworm</span>!&nbsp;</div>
      <div class="a-left-row a-marks">
        <a href="https://twitter.com/cui_xiaorui" rel="noreferrer" target="_blank">
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            ></path>
          </svg>
        </a>
        <a href="https://github.com/cuixueshe/earthworm" rel="noreferrer" target="_blank">
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="a-right">
      <div class="a-right-col">
        <header class="a-col-title">Earthworm</header>
        <ul class="a-col-content">
          <li><a href="https://github.com/cuixueshe/earthworm">Open source</a></li>
          <li><a href="https://github.com/cuixueshe/earthworm/issues">Issues</a></li>
          <li><a href="https://github.com/cuixueshe/earthworm/issues/91">贡献代码</a></li>
        </ul>
      </div>
      <div class="a-right-col">
        <header class="a-col-title">团队</header>
        <ul class="a-col-content">
          <li><a href="https://t.me/+dohhXSz-5n1kZDQ1">联系我们</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.about {
  width: 1152px;
  height: 150px;
  margin: 64px auto;
  display: grid;
  gap: 21px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  > div {
    height: 100%;
  }

  .a-left {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .a-left-row {
      display: flex;
      align-items: center;
    }

    h1 {
      color: var(--color-text-header);
      font-size: 30px;
      line-height: 1.5;
      margin-top: 14px;
      margin-left: 21px;
    }

    .a-join-us {
      margin-top: 16px;
      color: var(--color-text);
      letter-spacing: 2.1px;
      font-size: 16px;
      border-right: 4px solid;
      animation: typing 0.8s infinite;
      height: 26px;

      span.a-enhance {
        background-image: linear-gradient(to right, #9333ea, #6b7280);
        background-clip: text;
        color: transparent;
      }
    }
    .a-marks {
      margin-top: 32px;
      display: flex;
      gap: 21px;
      a {
        width: 24px;
        height: 24px;
      }
      a:nth-child(1):hover {
        svg {
          color: rgb(3, 169, 244);
        }
      }
      a:nth-child(2):hover {
        svg {
          color: rgb(75, 85, 99);
        }
      }
    }
  }
  .a-right {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-column: span 2 / span 2;
    .a-right-col {
      text-align: left;
      .a-col-title {
        font-size: 18px;
        line-height: 28px;
        font-weight: 500;
      }
      .a-col-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 21px;
        a {
          transition: 150ms;
          &:hover {
            opacity: 0.75;
          }
        }
      }
    }
  }
}
</style>
