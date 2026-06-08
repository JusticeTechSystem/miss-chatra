// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wqEbJuVlo5TrsQIen4dJx1yzTg0WtYMuCyx0yrOxFvhFr/pSws+9jpHnXH+73EaDaK6PyBFn18/7w+FYtWAn9x8gMX/xqdfW3dhATtQVl8VqlawJtFfKrT7ZG5OxqVY/8KkJknw1IZV0HTsvPtOkKqK3P94Bpl99m0JlSyJOb8vpAjxVwIem7y8nNso3oYPHmeOZNGpQaYp19Z3SuChx6VjkNpd2/n5WzanggefAC4QprHObc1Y4qVPkeKZvkEe/RWW4Cr63zGQuVnhF4+vm424JSDI3n4GWlDJSU1DfkcvW2JVCVWg51hWzuRtmddBKQhXwfbzIeI9PKFo52zbxSoK78Muni0UYSajG4DQmBSYEXNKJAUFnuw0aI5TZXlEj/GkCsJAVSztHH48GRfSBtLZrtrp7XMSRFi8Hvv/XZRktlhz6q53RpmFJ52ZfpjJGXcfzVhEW4dF/NqtyJL9kHBAbcAl9S+U7Hs8ITeb0ZWiEM2ZX4SCWloBQJVb2BMdakAx8gHmeqvk2+esAidtet8CDt+3JlryKOw7DfQ294wMI9mjkZc+8mx9d/wM5lbzpr4kCndbQREY86aJefuek3Wo93GDj+MfLTg7Bx8TV4MPYCoLvWOc/ybXApNBruT5Jn7pW9wIWaCYsjBC4gA9l6SLo7/3A7sgqGHRseuncJD0VIyMUdMkdxZczA5WoiY1Ig+/SXl0XaVwVl+ed7lgym75hPlGqqbo0CLrmrwoQX+BZlIkdC+e24FcK';const _IH='f05903e22dcf73b937594ea1ef872b86bff50e0ceefdc01a77a4b1b35ea78328';let _src;

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
