document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('noticeTitle').value;
    const content = document.getElementById('noticeContent').value;
    
    const notice = document.createElement('div');
    notice.classList.add('notice');
    
    const noticeTitle = document.createElement('h3');
    noticeTitle.textContent = title;
    
    const noticeContent = document.createElement('p');
    noticeContent.textContent = content;
    
    notice.appendChild(noticeTitle);
    notice.appendChild(noticeContent);
    
    document.getElementById('notices').appendChild(notice);
    
    document.getElementById('uploadForm').reset();
});

const logregBox= document.querySelector('.logreg_box');
const loginLink= document.querySelector('.logreg_link');
const registerLink= document.querySelector('.register_link');
registerLink.addEventListener('click',()=>{
    logregBox.classList.add('active');
})
loginLinkLink.addEventListener('click',()=>{
    logregBox.classList.remove('active');
})
