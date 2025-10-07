//获取元素
const signin=document.getElementById('signin');
const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');

const intro=document.getElementById('intro');

//添加事件监听
form.addEventListener('submit',function(e){
    e.preventDefault();
    const user=username.value;
    const passwd=password.value;

    const params = new URLSearchParams({
    username: user,
    password: passwd
    });

    fetch(`http://127.0.0.1:8000/sginin?${params}`).then(response => response.text()).then(data => {
        if(data==='success'){
            intro.style.display='block';
            signin.style.display='none';
        }else{
            alert('用户名或密码错误，请重新输入！');
            username.value='';
            password.value='';
        }
    });
})