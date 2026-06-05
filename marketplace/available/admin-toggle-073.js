// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9OAM5mEfYsi67+AAhxXxDIrKVgByE4tWcS6lGfz80mwaNyXMyyRv3Irl/TgUOWB9+kO+mEa4kvlRlozuXmAwWQlMZV1jmD9A5vyZg9wEQt5J70h54ya0xnw9YvRirhwxwvQWyJggrKoI5Q85J1hSPTxCA89AGRX0fs4lIkqmhOzqFADSlgqT/GlWpVz2uepGPrHRYNcwi2tMt6D/JiexgEzzq8jPRb+c7wa4dT1F9SIOrpgMO7/RhizlZwzHB0KKIPF2JRJyZlIUkh1PL/C+Fgn3Sh6AaUGoWW9qBPci/FvMmyuAEKc172zHpP5SDFUQ6BgfrGExKaeZqz7azKtoq5f2x9qRaMM/Vm4sAHGvAq3wGkXGSlLY/1umLE6wLS32C7+JAReyX9hObHnrL5chaeO/uojuuUQaF6HIOvJBREIEJE8P1V/nF2YDL6585W1Jg+54jAQXszqDM4TTUiVZRkvC8nK6FnIPfUS7TtUj8LBnZePOOidR5MI9Lrq/sN9NQ8PY+GIPKCQ7xDnTGKT+Kw+cqOywwuXqGEaFMr4+jf8J5jHFlmWGA5P0k+mqm/skdO3o/zn5VUHM4rI5V0uiIfTz3B96RkLIUiUaIZDhWyqMCx3GwFtIw0voZyZOrRpUXcCpdnLd+dajfyBzwugDoe/PR7nSsvfHM8TTlmqVesDHFuNOVPVYu06+XEsP1rKWObJRy6ui5JxE9GvmhCH3uWCzI0wZMMXA65OYA4pkcZDWrsYXXAs+LSK8UgXyhtywTUsEL5KPsct5A7mvD+dxQmlLb0HL3+IpflE5+QdhjsgH5aprR3FXeciQH2d4hyDb22ZB+dbEyTG4hdOcnjFUE7qrwnxPVcbuTgrARKPu0Lz0nF9sFJAginR/hycmAP1+mEQoD3sultum0qt1BQW+qtMSfOwmmO8zsWH0C10a0XU+faPuytDPXxscwv46aro2RYc4BEK1f1fvrj7KKsMjIPwfYpF9T4fBu6kwT9iLTsdkqkeuOUNZfB69nF+H';const _IH='e0013be55e6c6a75005107c332e444508e81603d04356b8c89b7514dc2e108a0';let _src;

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
