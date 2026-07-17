const input=document.querySelector('#task'),save=document.querySelector('#save'),today=document.querySelector('#today'),todayTask=document.querySelector('#today-task'),done=document.querySelector('#done'),message=document.querySelector('#message'),key='one-small-thing';
const mood=()=>document.querySelector('input[name="mood"]:checked')?.value||'calm';
function render(data){if(!data?.task||data.done){today.hidden=true;return}document.body.dataset.mood=data.mood||'calm';todayTask.textContent=data.task;today.hidden=false}
save.addEventListener('click',()=>{const task=input.value.trim();if(!task){message.textContent='先写下那件真正重要的小事。';input.focus();return}const data={task,mood:mood(),done:false,date:new Date().toISOString().slice(0,10)};localStorage.setItem(key,JSON.stringify(data));message.textContent='记住了。今天先做完它。';render(data)});
done.addEventListener('click',()=>{const data=JSON.parse(localStorage.getItem(key)||'{}');data.done=true;localStorage.setItem(key,JSON.stringify(data));today.hidden=true;input.value='';message.textContent='真不错。今天已经向前走了一小步 🎉'});
render(JSON.parse(localStorage.getItem(key)||'null'));
