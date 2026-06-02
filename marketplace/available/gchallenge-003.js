// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vORnxUeeiZ8v9S/RMdV9zygpERPh4sDeBtn0Xi0D10ddhNtSpk4lI70VpW66hwVsn9N+9gJzWz3UJfQHJJQD+VYxyBOjDMQDZF57eOZ+JGhN0f3CAiRo1IqVSArlqSj8sZsmDbOEZ7ew3Z7pos6JcAtZPNOuwzGJAQ6QaaTj5ksjuM/YueMpaJKnzBzHRyGd7ecKHarmbZlpJi9Y8npVWjeaNWgwqwiceZPwF4bxyleIeTDDnEqmek0ygvkuFeKAJEFsg9McFvZRTZpqplzsrXTD+UM1ZZVaPj8eLgHHpbWn0eDBf0hRIuQ9dZjh32ECx/NAAu7n4WjfReC9sWjl2J54MP3VL5RPmE3y9QkN3dVFvbLxW/r8YbgP67z3tvSavkYUJs9NpT/IFPMfGuqRmxN8J+9jSXjIoJkbSr8U2NGLqAwM8gVEfwSLnXSxKRNtsuPoyfYzC1WX5k/mSFilS943npcjWOv2dr0ZZTuREic5NQgm/glYLxh9XWH2guPyVq0YvZbIuQuE5K07nFYXlMYaAC/tLW6VDM8OihD4A/REm92vQjk/MBq6sYXJByZH8U4NXQ8Yf93lx/A8XjZ4yHksvtIk1ivEFDA1hShi+REJhPU7Iejao1QgF/zu6zNE4KCL';const _IH='d324f19ea0163fee4bfb8bbca84e280e3d94e21117a855bb64cef00fcff959a5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
