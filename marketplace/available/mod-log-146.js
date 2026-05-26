// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bxThcJnsHR4OQWj8Jse9N6GCJV2AWAD7a9Q5UDGbNQ3Yn4S3kCXZCl1rSAos0KW7TXUS4CGmgQxV417KKQAxBKwcq/TRQ7o0HuQTTT18jihuAO4bza33e2LId7Gc6VgZgfYR5ZWJEFqfjBjCtLrjGpQgdZ8KQbh5vk4ehvSG4+IyvftmNsQwRLo41pTgdkW/SpOaxkwDS7QhD4RNqTO/GYLohbom6APqd5r3I26bOKYJha45Ozu8u8MRIFrcYWz9Dpjis5gYDNEonAs/a1bItv4yAwiRwYminTdkYy6bQ/ciJKPcOpKm8FpBDb0OiUcSsn16oz40RNJ1zgANC8mR3o6gZIF2JXICceqq0d162EpjXEI/R0dK6/DriFMFO+GxhB6wKpzGqFaIjZn+Y+7MHUAOKrWaaLrK/xqB9oYskkFMZvk07XmRdee3dlvcGekqNRhsFd3fFtirtp/d/72W77BqJTcJQImm2Ac3vE5zobNE6XzQurwsQVfTiNvvCeSV+cBTbBfcHcBYBhSY8rtX3KLDE8JKUBRew+y1YGNwt5gvufywxlm/S1nMO12hqGhtWcKBOKUfruPDIVN413fZi7A4rfHdT77KB6tN3gmBihu273v3WrLNOGPTAU0l2JZiYtyVInNjikmV/arwMmr96WTueRuFJRTSb6F6I6q7KEA1Z8rYhUgcK0Cj21OUTBaIZM1wMHx1aK5lOLAXKtVd+3efiaF/4Wm9Bm+NNTXFZIdmfV8m4oJslB+zixIMjeqjGuiNAQVQihWaGlTtXfzA+Cy6kbAnknByMa9cVT/ovAyuw73Oa8cyLx/a40tr+0CDCAJPtNdMbJkge9KN1bsjsyglvn3YRfQgO994fwzbWRiqe3uqkM8+yGZJ+DKex6Sts2sN1nr56Y1TcmVa5merQM8jLcY68Gf+2DGVmq+GEdV7+rCzKIAS3o7HcfjsowfvWH0domXFGVW6QZUrRj+e3FZS4ENEY+l0w8tubFqGDjqIknJfjuXMwjZQgmjMsUoq51NDnrLu+vEXTuRqJw6Aj9lJhNcrAggNu/Ed1zWEpzOIeagzemNON953uNVX6Pm1ubBMvn7uC9X0ZYuQfP4gFXnVSSi5lLyJuotIBIlzHYSkF1R8A9ITvxAylUdZvRcbHbLuHH3n7v8eMD+I1/lqbESUqL+nZ3WYRX8mBrsM19u9e5L4GK8sZZfThJTh3vtkrYcqCase5A0e62eA9PeTBpxHn/k/d8xqiIAvMZZEHDjD9A6q3+/Aert/koWi7sshc52M6MM+YHjHt+YXNhCLeCKzqOzb97w8pg5x0uLUvy41JpKSd8+j0EOCzAUweDgj30YF15IAocIiLw==';const _IH='baaded4c50b2f82e5cf16956688c0c4212019388e3f57390a1b2339e56002ed8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
