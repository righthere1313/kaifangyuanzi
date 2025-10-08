// 兴趣爱好照片
const box1=document.getElementsByClassName('box1');
for(let i=0;i<box1.length;i++){
    box1[i].style.backgroundSize='cover';
    box1[i].style.backgroundImage=`url(images/1${i+1}.jpg)`;
}

// 移除所以效果
function removeHover() {
    for (let j = 0; j < box2.length; j++) {
        box2[j].classList.remove('hover-active');
    }
}
//照片墙自动轮播
const box2=document.getElementsByClassName('box2');
let i=0;
let id=0;

function start() {
    id=setInterval(() => {
        removeHover()
        // 添加 hover
        box2[i].classList.add('hover-active');
        // 下一个
        i = (i + 1) % box2.length;
    }, 3000);
}
start();

// 鼠标悬停时停止轮播
for (let j = 0; j < box2.length; j++) {
    box2[j].addEventListener('mouseenter', () => {
        clearInterval(id);
            removeHover()
        });
    
    box2[j].addEventListener('mouseleave', () => {
        start();
    })
}

// 左右按钮点击事件
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

// 左右按钮点击事件
btnLeft.addEventListener('click', () => {
    clearInterval(id);
    removeHover()
    i = (i - 1 + box2.length) % box2.length;
    box2[i].classList.add('hover-active');
    start();
});

btnRight.addEventListener('click', () => {
    clearInterval(id);
    removeHover()
    i = (i + 1) % box2.length;
    box2[i].classList.add('hover-active');
    start();
});

//留言板
const msgInput = document.getElementById('msg-input');
const msgBtn = document.getElementById('msg-button');
const messages = document.querySelector('.msg-display .messages');
const msgForm = document.getElementById('msg-form');

// 添加留言
function addMessage(text) {
    if (text.trim()) {
        const timestamp = new Date().toLocaleString(); // 添加时间戳
        const messageHTML = `
            <div class="message-item">
                <p class="message-text">${text}</p>
                <span class="message-time">${timestamp}</span>
            </div>
        `;
        messages.innerHTML += messageHTML;
        saveMessages(); // 保存到 localStorage
    }
}


// 加载已有的留言
function loadMessages() {
    const savedMessages = localStorage.getItem('messageBoard');
    if (savedMessages) {
        messages.innerHTML = savedMessages;
    }
}

// 保存留言
function saveMessages() {
    localStorage.setItem('messageBoard', messages.innerHTML);
}

msgForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msgText = msgInput.value.trim();
    if (msgText) {
        addMessage(msgText);
        msgInput.value = ''; 
    }
});

document.addEventListener('DOMContentLoaded', loadMessages);