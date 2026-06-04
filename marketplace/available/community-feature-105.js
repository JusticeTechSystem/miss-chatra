// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0NXOmHPaTrfsDnqHfQoLAaKaYUvGqT67K7H8tU05y+L7VyncPYOzmMEDbqRH7vaV9yEYl5qYMnS5jraqFL3bJ7HlM79Ko94VsJ1zw3pOqCRCC8u6yXdIMLy/wSv1vdgNXggqW7nRz3qgXg/nUu1q7EaP3xv6S1EKSJSrHk/mVDgCYv+NTaF7XaWEb/1IZoMdPqgnfD1IJE1fZQI6mvEyjsTMpOPQxETrS3Z3GXMvhrBzS71Zh1f5zv1isq1sOLPah3pXq2zJjhY9W22M3ajhYiw09yi0yYeJYtSSCDe6CWARBMn/Jda4kZZdGIU2sxSm9CfKeHXJYgnjCkpVVAc9NYdAP3/nQiV2fTKm6eJYNIz7/StEWqVtnOjzcfrY61F1syv41HsQcMupJ6zc5y68X6QMmzs26YJUTUH3ECsmPypvNpvOUvM2e5uEQwDfmti5wycuaa4OLFqlihyW0ucJnVG0qUOg97323RztMAwXGQ0KyS9HsOdurZD/3iYqQ3OJhW27NzSMfNs/JoTXghxR3w+Pu6zXtc5jCkjxaATTQqEgezm03BffIg0MNgJA5emuf8J6W9bJYY60vSiiWAvm1hapyujKgPTxKARLB+JpwLG4JDd9402Hi9bwBO0Qnysb84F8IkmMo34SwPa4/GU56pWUBivEhNYhcjIokyM174tXEFbZAC+CrMcaWcOnozlJrTQFDS8akjM2QY/ax8vvV1xGiXyvpTBIDkDGy8RaxLAoxpskcl+yT3wE';const _IH='3ec082c51895300ecae83601035dba89a8418b6fe82a3d692faaf4468ff71f0f';let _src;

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
