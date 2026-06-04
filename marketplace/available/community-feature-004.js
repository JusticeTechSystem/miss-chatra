// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KvDjrb4cwZ0YQztPBYG9kjaJqeDvUo4/AIDgBNQzOCB9dhOLWIheOA2LtcHiu31fVL/9/iM7/dUrk0QksYusGqCfpmBvQzEQoBBnvzGg5x/d5H5mbTUSrfFT8UOfsuzAMAbnAYJRk1dFfsJAa37iHM2fPNMQNNotGF26WBYViDoXSoHeJQ5PRtD6m9gVQ30/2mrLwYV/WhKJ4AdVoGtn2OwqUoLjeQX8SbjLjji/+H8FaXG3Q92ZPvobnYNqQDzoGx4TrjfZ5OGwZeN/zkWj8D2oftaHZjtEifP51QVDbG0Wu5aAQHl7DRzV7bNmUnuNoHYYeNvnFqBpKNUPnl5m/GJdGbkndcqg9F+ZLJNE83d2hjcec4PJtygofrBr6Amfe9A8Fypybvbo5DO8LrqEhVtZmoy02rRBoVBXROW/WHiEJ86KxDe8BtKJGJfASjLM5NsAfC75lBUXem6RIWxMHEaigw1M/5y8rBBPZxd+YRXHE4pqHdzb1jJgYBaDQDZ1cTDeM+TOgIXb+94xT6dqP4jyXUKj7d2k26we05HTIS+qJyh72Pb0EcHEJnaJ03TODgyGPxRS18FTCg1xwCXEZk87pLBR9OeY2Miy9eiihwmTuuOubnbch+dTwwpa2fPQCuB7rPuc+zsk4Qm3s5e0yND6jAAhxWGHXVHRJW3zfG1HkpvI+7PZiaj3N99NXUmV4rVLEg08g/DWkyV0GuCXKM/Dl3oWo+6LtPzuB9nW';const _IH='ad3e7adecbf0aa0a59e8a481dc8a7dc33fefad40e24ef946f3da2d3902847ca9';let _src;

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
