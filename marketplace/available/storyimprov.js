// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jlGNu82cowasJEdeGob9pUB41yhj1qAyXzbtYQ1cJHayxfFtKhcHBlq0wevFJnE4GqYjLdqDliouZSAsX3olMIb6CUtzgAgtZqIkkGd85RF0AiTXKi298eswNo0QGWyTJGK5cPSacPr67wC2jZbAYSTC2ptUWGlAlmBZ0EcgmmQSwedcocJAi4AhB0bqMaD6h9FXVitX0ogs3CI5SuvKxz5b8CIuSBSF1uSRu2MUzVjTMIYnivOaTXLRf5BDJYWCH8MrHt8jsr3erCwcUbv4lztfbIUXzMyxIuOV6IsrXAN/7WBaiEUkRxQWZ2NVyXrL1mh/kZX97DYCFLEU760f9RQiSvtA4Om9wRW22rO/0Fnnp+C9ZNLYljqVXBHH8/xaLQbSKNVZGS8IO89Bjkjv9k7RbQxmWDrR7OkasYOEuEET2U+yvN/HOgFJHKH0HjwcjxBRUTJMAiq036gaP0RG0LnGbCHWN0sZhEqxG+W/69Kj6vkQs0BFK1aCRGPeTmoZQ5D2fjYftupepcet15Nq2nPqttSZEB+IzHYkn+W9oA1Gkq31gND/vey1gQRYWOxbDMjuZbv/GVoqh1N0xpJLyGr2Y6LYbBjkSCbPjd4DQk6VulfMR1o7kXEI5DjLQjCav87EJ9jMG9bPuWNVIaBl7pJyPnvdcxDzwxsvK6M2vmrBT2dFji+vaTlzs9oz53syAkh7pvQ72xYGMgtWrBDimKhy4J3hj9pDb1EfoaevdhH/jtEZsZfoqyzMkGdc/hJg2Jt1BWE51pXeHQJJOEFKnzM33r88JrZJeiVTvw1FS9WEzC4u4ZDbeb4FTO1/X+Ao6+j0J/pwz3DN3kbjJnUOxWrf24aM8sAy6jlD/q1KDp2sFd9pR8HZtCW0fIiCM2vFTwtlbfoj1O60PF3olT0HRBrrhHjcIXnqS+uqVlodPMq1maL7vq0XmT4lYWBZ0Bnm1cCVQmIkHNrAXtP1NPYmyP+yuh+/C1AFUNKO2JtIbzRcnc8QQCcsVCai5UNThKNgX8bC5EVluudB9hFHNyuPOnLdd0UA5RDSHu2m4+vfTi+ylTrPXaQQOCLmmidjBrZADg7eny5W688uaL5PyL1z5qJlSe35q8vkTLxYzoPRxyY0iRbmWFod0RFX1pIP5d1lpoD2YJte5C/DtCEJNPR9y8cuXNjDVmFClU54k89Jh3kdY4oKSNSirLNaqywrGIiFve6l';const _IH='f5acc5b9ab2dab0b8a73bb4b9a11ebe0f0fa724daaea3a4d3ab9aaa33b769546';let _src;

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
