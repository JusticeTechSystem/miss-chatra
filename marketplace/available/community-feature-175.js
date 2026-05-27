// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4hDfhNw6O3Y18PYiBiIwrc5QpuV+DfYV7upb2iLYFnZnRFhMx+qO3SM/GntBnnuQaWfSbEkGSnp82jZKImqw7O+f/HSEossCrszx7L/eaG1RjSots2ELbtFRPKRvw1SKbBLRx43875Qxim8OM1F0UGVZ3XkT+heai8DNHJAzU0f9OuqtmmjtJbvya7Zej3LJgokas3MSVwtJ26IJW0stcBqMyP3USMVQLSeEEm5kEB3SK23fbZOJv3YP0bw/f/qnQxRXLV9RiSN/IM1nYl2SDnO1HclGjZqqFm4I1q7iA5dIpsnVMHKwrV6ebugUe/AyoZJaCR2vKkK3MjrbB+crjW0G6+14eVyXN8JFDfXoktUaWBqyml9X4SnfrLQZy/7m53mukjfAjBalc2P4w0LQ6KXm1mKzUHBJ8jcv02cM2RcnioQT87n0IfFI+AzUOcwjOgbf9CpJ3SsiDgaq954YRUYOg+Wfxyi+fOL768oc8cdJX7krlFDpjgTVfZ7rEY2u4iAxSfNjHnn+DL5qlIcpeU2Y8hyA5queEsjQhXKsjfuPlsEpoxzz0UIcBbKL+eW5Ybf2DHC7dlO3MWtDoaH0k1iLc0Ve51Zjwiu/7hMmcHGxtJRSmuKVX4hOOrQZXwJXJa8G7LJ8X/vo8it1/nYJ7YmsZJmnIDgYRUMHmcjz66O0MtoveYMcRSlS/Zt0CgS3wcdSPmuvVYG3pngBPUQUoV1aciw/o2vXzq5eVZT+YaspiTKWfhkDjivZ';const _IH='33435ae6a50777cf63ad2398e7fb427d1a3ef8d84c7a442970c7080f2436e8fb';let _src;

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
