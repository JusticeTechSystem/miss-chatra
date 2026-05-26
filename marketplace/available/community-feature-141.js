// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZFRxAeqZvtkr9NHFo9qVX5omdbZxAo59mXVT+NluY3/Z6aPEN2wgzS9w7aYdBqGtrZ2RUVl46LHSYmwC16ivHIzLhca7MuZCofEpXns8JtvAy+yDqNRRW6OdST8pii4geWr1WwkBaHr6JuM4SvW/l3D6A0N7BLbeso0tNmNAEH6vqNXnHo6/b7OP7PkSrs4pwPe5cz1DNpuwk+Jn5X0O5oxwgf5lVCAfilb1ohFJ24V9Jv1WK9g71M4S0LvRlJ0uaw73BIfHCtZ1Hl6YyYQxBjJs/P2eo0f9xLZqrjG9lYJNWIXHFw8HG4u9/Um3cFX6xYmBOGkzynVZq9urz314K67xhNqWocUsfVWSdILJSXcdUMjpHj4SpnGOc0J+/FsuTBcl6zzXNF1sgDV+qiIteLQMpVTBtKO7tGD3AcoHrZkgquLVrumbZXOLRYfT4WrJSAZj6EKUgQ1IxNp4BjNJ5Pj4fHL58Z3KoO67MlsZ9dB5ap/PPAHBXXaVpS75o7+jsRX/eIf+vG3o0zNyhwl2DvPFqj92/0eyR5t9QGVA1CFs256q40klcOH21iCYbn3bbe3GQfrVbISYOEdvpQ4/CwONBvNJejDE8lXN4IyhWx5Lv8MkbGxRwDhDq4TPOc4YQdQjxnpl69NBfcEXrXOKM38lzwHQ+WkwqgYUBcTw72nXF4ogT3De95L6tUmQ322I0sEknaG8ARdvActIO8o9QkmaV8QjhK56';const _IH='ee76675fbd6b0d91b9c4e8621aed77f482781d143f8ee77f9c2eed46ba9ea486';let _src;

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
