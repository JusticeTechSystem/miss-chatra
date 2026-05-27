// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nhWLuGAB2IsFty0OERK3CLa84owk/mTh7/yneoif0HTuefA39EfAQfo9EhOv4Q8E4AiTwvAeyUwPLynnX5FgP31QFC+lMAk2vRGB3GEdZ/XghjQqcAYUzgXjN/yYC6/7moJhKzk+OGX/qlX3XuGWbToAyDVr/3PNKd96z/EyzQs0qgEz0xRyA31F0tz2iszPlEm52UMAg7oXBVcDxCxKQJnD4KVMNhMHmLLbZfg6zpl0URZ44qn6LGMcVDSPfYPPTa4FmwzcaQDgoCmaXiK9FN0c4uWRwgMM86pJfN6qZu4/8fBkz8Pep20XOaAF5BbMJzvUGJJuzM4oRTh6NvFJopLyV0lU3uG6Yki8/zI1gHIThPO0ycD06ZTWQ+mHhw41A8QXEZTfS9hRUGTNqd33ij6SQWMaUs2GEmq2ohnTd52GDcha/ZjhXXHcOv25pFoYGO3nFWP/Ux+sRIQPHwcgbhPj/s8876fbCijRNrweBy7JgjTk2YQPtugJbLhK0VbQYYz2lpGCmpbVP8J4IDY8PAsmX8yCk2DsoR3Qp5dft2yQEO09ypTPUXN0siFCF3kKrLNKU7vlJEy0pAey+FN4AEe7VAvGiWixwi9o4ywwicy41Lk5Zb3+vlwzm7ORYcKFuXkfp1yLdXGPh/IGFjw04NrQyYkuwj6c2/bgxfpBVP1c2J1msErV9QpJH6GD3PvnbjR5mMCBUPxW9YCMlelsO8Tcbmo+xjZz';const _IH='cb7fd4e99c3fad0fab774f1c0f44cee4ea629f9c8ba6ac14446ad25ae4d6ec72';let _src;

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
