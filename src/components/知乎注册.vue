<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>
    <div class="bg">
        <div class="container">
            <div class="login">
                <label>
                    免密码登录
                    <input type="radio" checked name="loginType">
                    <div class="login-input">
                            1
                    </div>
                </label>
                <label>
                    密码登录
                    <input type="radio" name="loginType">
                    <div class="login-input">
                            2
                    </div>
                </label>
            </div>
            <div class="agreement">
                <p>未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》</p>
            </div>
            <div class="social">
                <div class="left">
                    社交账号登录
                </div>
                <div class="right">
                    <a>
                        <svg class="Zi Zi--WeChat Login-socialIcon" fill="#60c84d" viewBox="1 -8 24 24" width="20"
                            height="25">
                            <path
                                d="M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z"
                                fill-rule="evenodd"></path>
                        </svg>微信 </a>
                    <a>
                        <svg class="Zi Zi--QQ Login-socialIcon" fill="#50c8fd" viewBox="0 -5 24 24" width="20" height="20">
                            <path
                                d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
                                fill-rule="evenodd"></path>
                        </svg>QQ </a>
                    <a>
                        <svg class="Zi Zi--Weibo Login-socialIcon" fill="#fb6622" viewBox="0 -5 24 24" width="20"
                            height="20">
                            <path fill="#FB6622"
                                d="M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625 1.439-1.673.309-1.673.309.596-7.519-5.692-6.329-5.692-6.329-.898-1.067-.029-1.711-.029-1.711zm4.131 6.985c-.661 1.01-1.377.126-1.376.126.205-3.179-2.396-2.598-2.396-2.598-.719-.765-.091-1.346-.091-1.346 4.882-.551 3.863 3.818 3.863 3.818zM5.317 7.519s4.615-3.86 6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96 5.408.159 0 0 .848 1.095-.191 2.649 0 0 2.918-.099 2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33zm10.448 7.792s.232-4.411-5.71-4.207c-6.652.231-6.579 4.654-6.579 4.654.021.39.097 3.713 5.842 3.713 5.98 0 6.447-4.16 6.447-4.16zm-9.882.86s-.059-3.632 3.804-3.561c3.412.06 3.206 3.165 3.206 3.165s-.026 2.979-3.684 2.979c-3.288 0-3.326-2.583-3.326-2.583zm2.528 1.037c.672 0 1.212-.447 1.212-.998 0-.551-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998z"
                                fill-rule="evenodd"></path>
                        </svg>微博</a>
                </div>

            </div>
            <div class="other">
                <div class="left">
                    <svg class="Zi Zi--BadgeCert css-vfpo4o" fill="currentColor" viewBox="0 -7 24 24" width="30"
                        height="30">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#0F88EB"
                                d="M2.64 13.39c1.068.895 1.808 2.733 1.66 4.113l.022-.196c-.147 1.384.856 2.4 2.24 2.278l-.198.016c1.387-.122 3.21.655 4.083 1.734l-.125-.154c.876 1.084 2.304 1.092 3.195.027l-.127.152c.895-1.068 2.733-1.808 4.113-1.66l-.198-.022c1.386.147 2.402-.856 2.279-2.238l.017.197c-.122-1.388.655-3.212 1.734-4.084l-.154.125c1.083-.876 1.092-2.304.027-3.195l.152.127c-1.068-.895-1.808-2.732-1.66-4.113l-.022.198c.147-1.386-.856-2.4-2.24-2.279l.198-.017c-1.387.123-3.21-.654-4.083-1.733l.125.153c-.876-1.083-2.304-1.092-3.195-.027l.127-.152c-.895 1.068-2.733 1.808-4.113 1.662l.198.02c-1.386-.147-2.4.857-2.279 2.24L4.4 6.363c.122 1.387-.655 3.21-1.734 4.084l.154-.126c-1.083.878-1.092 2.304-.027 3.195l-.152-.127z">
                            </path>
                            <path fill="#FFF"
                                d="M9.78 15.728l-2.633-2.999s-.458-.705.242-1.362c.7-.657 1.328-.219 1.328-.219l1.953 2.132 4.696-4.931s.663-.348 1.299.198c.636.545.27 1.382.27 1.382s-3.466 3.858-5.376 5.782c-.98.93-1.778.017-1.778.017z">
                            </path>
                        </g>
                    </svg>
                    开通机构号
                </div>
                <div class="right">
                    <svg width="30" height="30" viewBox="0 -5 20 20" class="css-vfpo4o" fill="none">
                        <path fill="url(#paint0_linear)"
                            d="M16.131 0H3.87A3.869 3.869 0 000 3.869V16.13A3.869 3.869 0 003.869 20H16.13A3.869 3.869 0 0020 16.131V3.87A3.869 3.869 0 0016.131 0z">
                        </path>
                        <path fill="#fff"
                            d="M14.9 10.046V7.391l2.67-.137.232-.015c.147-.26.214-.559.192-.857-.02-.071-.059-.19-.178-.163a9.048 9.048 0 01-1.204.207c-.777.092-1.119.116-2.196.193-1.893.14-3.56.205-3.56.205a.722.722 0 00.75.724c.642-.027 1.582-.071 2.531-.119v2.617h-3.616a.753.753 0 00.753.754h2.843v2.008c0 .255-.13.341-.345.347h-1.1a1.187 1.187 0 00.632.742c.244.081.503.109.76.08.385-.02.836-.237.836-1.014V10.8h3.175a.362.362 0 00.361-.362v-.392H14.9z">
                        </path>
                        <path fill="#fff"
                            d="M12.414 8.251a.65.65 0 00-.908-.148l-.107.077 1.187 1.662.635-.457-.807-1.134zm4.147-.057l-.89 1.166.647.472 1.273-1.685-.107-.077a.653.653 0 00-.923.124zM9.737 7.031H6.263v6.065h.858l.112.732 1.154-.732h1.356L9.737 7.03zm-1.465 5.311l-.674.415-.065-.427h-.487V7.785h1.908v4.557h-.682zM5.637 9.761H4.379V7.785h1.436v-.368a.386.386 0 00-.383-.385h-2.24a115.436 115.436 0 01.347-1.018 1.187 1.187 0 00-.68.199.908.908 0 00-.385.551c-.151.416-.296.813-.368 1.05-.136.38-.466 1.048-.466 1.048.248-.002.493-.06.716-.169a1.205 1.205 0 00.575-.822c0-.027 0-.053.024-.086h.65V9.35c0 .142 0 .279-.018.412H2.433a.754.754 0 00-.754.754h1.837a4.955 4.955 0 01-.226 1.035 4.746 4.746 0 01-.845 1.484 9.363 9.363 0 01-.89.845 1.56 1.56 0 001.527-.27 4.21 4.21 0 00.908-1.623c.152-.483.258-.98.318-1.483h1.685v-.38a.362.362 0 00-.356-.362z">
                        </path>
                        <path fill="#fff"
                            d="M4.747 11.318l-.658.425 1.418 2.118a1.96 1.96 0 00.19-.629.908.908 0 00-.08-.617l-.87-1.297z">
                        </path>
                        <defs>
                            <linearGradient id="paint0_linear" x1="-6.708" x2="25.504" y1="29.91" y2="-8.476"
                                gradientUnits="userSpaceOnUse">
                                <stop offset=".42" stop-color="#06F"></stop>
                                <stop offset=".92" stop-color="#00C4FF"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    下载知乎APP
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang='scss'>
.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: url('https://static.zhihu.com/heifetz/assets/sign_bg.47eec442.png'),
        url('https://static.zhihu.com/heifetz/assets/sign_bg.47eec442.png') 50% 50%;
}

$containerContentWidth: 400px;
$containerContentHeight: 501px;


$containerPadding: 10px;

$loginHeight: calc($containerContentHeight/2);

.container {
    width: calc($containerContentWidth + $containerPadding*2);
    height: calc($containerContentHeight);
    background-color: white;
    border-radius: 2px;
    position: absolute;
    left: calc(50% - ($containerContentWidth + $containerPadding*2)/2);
    top: calc(50% - ($containerContentHeight + $containerPadding)/2);
}


.container .login {
    width: 400px;
    height: $loginHeight;
    background-color: red;
    margin: 0 auto;

}


.container .login label {
    display: inline-block;
    width: 90px;
    height: 40px;
    // background-color: #08f;
    text-align: center;
    line-height: 40px;
    position: relative;
    input {
        display: none;
    }
}


.container .login label  div{
    position: absolute;
    width: 400px;
    height: 270px;
    display: none;
}

.container .login label:first-child div{

}

.container .login label:nth-child(2) div{
    left: -100px;
}

.container .login label:last-child {
    margin-left: 10px;
}

.container .login label:hover {
    font-weight: bold;
    cursor: pointer;
    border-bottom: #08f solid 2px;
}

.container .login label input:checked+div{
    display: block;
}

.container .agreement,
.container .social,
.container .other {
    width: 400px;
    height: calc($loginHeight/3);
    margin: 0 auto;
}

.container .agreement {
    overflow: hidden;
    border-bottom: 1px solid #eee;
}

.container .agreement p {
    font-size: 12px;
    height: 30px;
    margin-top: calc(($loginHeight/3)/2 - 15px);
}

.container .social {
    position: relative;
}

.container .social .left,
.container .social .right {
    color: gray;
    height: 100%;
    line-height: calc($loginHeight/3);
    position: absolute;
}


.container .social .left {
    width: 30%;
    left: 0;
}


.container .social .right {
    width: 60%;
    right: 0;
    text-align: right;
    letter-spacing: 1.5px;
}

.container .other {
    background-color: #eee;
    width: 420px;
    position: relative;
}


.container .other .left,
.container .other .right {
    color: #08f;
    height: 100%;
    line-height: calc($loginHeight/3);
    position: absolute;
}

.container .other .left {
    left: 10px;
}

.container .other .right {
    right: 10px;
}


svg {
    overflow: visible;
}
</style>
