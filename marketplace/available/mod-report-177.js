// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c4MLQUBBoph6u0IXHcPxBoEL+Ej/75bN5ku0pmmJHyCYiSMhHFfVZqIqiYpWfKNYPMNluIa5S3QpVODaop/en//bvTQrQtTgGC2Tzo0Lu0hBY5cL6LVQwW1sEcbjUPG1WoTOzxVThgi4ck/ZS8XC8kPXc28nToxpH7+I9coENDVYO9oRXcXgocaUO5vM/hkgiiCskXPJ58OgQLVzZKq3LRqGpTi8BuBH0ex27gjj7u3RkveuPYz714t7igYOj/JZe+2VbEPwwePhK8uXmK4/fipc31sl7MceP/AucxQDG1+yGrPSHtLjmGb0gO+auoa9T5DoFSY6/RaJ7QJSKCcqEd+4q2V8dcAft3EmlC7aZYJoaSdOUbR1TKJm0BMJQQHODDedqQDqt2habxaXFFMzCMH3mbTeLZK6BhE01lbkrCaQi+V0HElMTvRZ5FGgQ7HwaqPjMDwd+hbBHwIJf+8heZWwqpeyyTJCXDVOwUCHqFGuBa35Fs+FxQBiGDBHMbQE1XKG7kZPLZUqDriJ6IYLiemurZwjUoy88U4F2pCkOMC7HmXwe24llMA0+x+r6A2n9upKSsbnBlda8Nnc3PMISw2DBOrk0HoOr/polPXC9wtolKnfc4dTuLReFBgmT97hAZSU9cp3hDg0d/BbaVm7/Lr+9jCXoWAeqEUPhIsm3ZdWs9Lx7nY+luFxNXN7n0fJlf9Hn9yKSv3uYfBUbUiF67ZRSmAoUBC5tFM3zyoXUgLKyw/T9jaYaGSqEJgkXm6+ObVROysaeU6xWS4N3gcVC2M0TrDe+3Ov0+wziwNMFAP+tT2hNvHHRU7KpFiBsR/cer7N9wrHgQzewHAmCT/u5NuHDMlAkWu1M+x+sKZiMeEKoTm9KplC8PX3bn2Sx3lwvTRUxIDA8j5GpV8owfEM/rjpUN7xQv0EMWGGFgKrFqVMQc5fvvKoUqpJoYJizhJEJZsOrayz2BzRmJdRgZ173XD3IQcgvlMZ5MFp4McS7Mptc1IEYE6IEueYKQpGIaeFvoLygbcixYdO7eahRTXaOdo8zZa5abUpu3xgNrBixt5W2agzc80hUppMvwuvRUUGQ3qBtoxTbCcCnIdr8u05ODJnd3i1Gy7wGPYCu17dWngHxuWCEIb0G9QIfj9/FKhdMsUaFV18QNrAKy5qtwUJJs016I10TVOW1jYuNqJuuoBGj1mNBwUOEM0FRMzxO2BA91gvEqoLJvWd8IEVPprhVhjDAHV69iaFvMIvzU+i02lZdF54a96eTeQ5N6BkRxgxHx+pTEdC+ihi+K6eQr57vIFBEFqqCmI6FHDJ7xUdgLQJj2JmZDz/hoP3/JV/DumsdFYztBccE9bR3Uioy+1uJEGkcHTpdfS27zJOM9sOixep2FR808BDKg==';const _IH='cfce5e0747d5756cc4acc8535a91500f7ac9df6fa8d9199cace73a7e02c5abc5';let _src;

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
