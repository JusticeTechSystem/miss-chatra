// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jwlcC6EUQGgjU/t3XggBmLyxSTn8DnOfNd1bCzOphHUTbq/68HlYiK3XL36J3vO3Vo6Biz9dtF8TlWM87QQXt7K8wJkZCCzZ6jkh0JRINSvJNPD4+aTHbsIpoBdkhjUWzK8qcV3uGHo/IhNiHcydftNEcjz1BK7dLpbwSZkbFVz7f/NV2minN6mzXXW/AgNJ20nhonUbeh76Dlp2CVgKtuKVLV0+y0ub4Bu32K9LcRjDvbSlr6/3/hLfw7xifetdsZrQtxvkV3/euD7D+gj4kvGaT9UwYKYhkeQlRRugTpzkApbEhZl8f/mbYswM7HLeXPvfBGfBTZi6KNWsUOv1EZ/GNEODX+0CKA3xpBdTQtUe5sIfpHh5X9ukJBh86G0Ta7qlXFQomF6qklwcvebJKA59SUxzpGa8cmcJIdm3YZ80mUKGcrMK5Syh1HfKW5T2w4TId6gxr4iDwDg98YueO1oOH0lW6PAY4yr2ouwqRbHbBhERqiqdlHKPpjppkOWWYvW/4R+MN4q6NcrI4FPWYHhakjqx6tXgl7Zx8Z9izMXbgPV99P4tbs9SQNS7+/2e+xT9ASgZgc7HgGUyikqLSkSiV0N34U3qSHzeTiWPWn/f35CWQZVAvj5EL5R/U2uYPx3It8vALBqj1x6GNw7Zslnlz7X28DE3Rguo5XTqQ6y7A1JjtrEyk+yX2nA9push+P3JSp3Lw4yFFEi2GgDvRhaRGSOA';const _IH='d69761d66c77af8a4e253b3609d5737543979f8d9294c2a6e2b49bcd9f61d137';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
