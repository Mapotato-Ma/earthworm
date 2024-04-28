<!-- by:Linjston -->
<template>
    <div id="faq">
        <h2>常见问题解答</h2>
        <div class="question-desc mt-5">
            <p>如果您找不到所需的内容，请加入 Telegram 群组</p>
            <p>我们会尽快回复您！</p>
        </div>
        <div class="question-container">
            <div
                v-for="content in questionGroup"
                class="question-group"
            >
                <div
                    class="quesiton-title"
                    @click="() => (content.showContent = !content.showContent)"
                >
                    <section>{{ content.summary }}</section>
                    <span :class="[content.showContent ? 'rotate-90' : '']">
                        <svg
                            data-v-682f31a8=""
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                data-v-682f31a8=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </span>
                </div>
                <div
                    v-show="content.showContent"
                    class="question-list"
                >
                    <p v-for="(question, index) in content.questionList">
                        <span v-if="content.questionList.length > 1"
                            >{{ index + 1 }}.</span
                        >
                        {{ question }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const questionGroup = ref([
    {
        summary: "如何向开发团队提出更多的功能需求",
        questionList: [
            "可以加入我们官方 Telegram 群组, 详细的描述您想要的功能以及告知这个功能想要解决的问题是什么",
            "也可以去 github/issues 来提交您想要的功能需求"
        ],
        showContent: false
    },
    {
        summary: "如何向开发团队报告我在应用中遇到的错误或漏洞？",
        questionList: [
            "如果您在应用中发现了错误或漏洞，可以加入我们官方 Telegram 群组，提供详细的描述和重现问题的步骤，当然最好提供一个小视频🤪"
        ],
        showContent: false
    },
    {
        summary: "如何为 Earthworm 贡献代码",
        questionList: [
            "我们提供了完整的贡献代码指南，可以先读一读(页脚处有链接)",
            "去 github/issues 逛一逛， 也可以基于你在使用中遇到的问题提一个 issue 并且自己尝试修复"
        ],
        showContent: false
    },
    {
        summary: "如果我忘记了账户密码，该如何恢复或重置密码？",
        questionList: [
            "加入 Telegram 群组，联系阿崔，告诉阿崔你的帐号",
            "暂时没有修改密码的功能, 只能注销帐号然后重新注册"
        ],
        showContent: false
    },
    {
        summary: "Earthworm 项目是完全免费的吗？",
        questionList: [
            "不完全免费，因为想要长久发展收费是必然的。未来会采用订阅模式，为会员提供更多的学习内容和功能"
        ],
        showContent: false
    }
]);
</script>

<style scoped>
#faq {
    width: 100%;
    padding-top: 96px;
    h2 {
        margin-top: 0;
        margin-bottom: 1.25rem;
    }
    .question-desc {
        p {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
        p:not(:first-child) {
            padding-top: 0.5rem;
        }
    }

    .question-container {
        padding-bottom: 4rem;
        padding-top: 4rem;
        .question-group {
            .quesiton-title {
                cursor: pointer;
                padding-bottom: 1.25rem;
                padding-top: 1.25rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: var(--color-text-question-title);
                & > section {
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                    opacity: 0.75;
                    font-weight: 500;
                }
                & > span {
                    transition: 0.3s;
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
            .question-list {
                & > p {
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    text-align: left;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    color: rgb(75, 85, 99);
                }
            }
        }
        .question-group:not(:first-child) {
            border-top: 1px solid rgb(31 41 55 /1);
            margin-top: 1rem;
        }
    }
    .rotate-90 {
        transform: rotate(90deg);
    }
}
</style>
