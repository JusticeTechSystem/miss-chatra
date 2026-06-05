// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RgmmdZxeijyEZp0v4CgqOP/bJ0OYHsfg3RcvF4T8zBgSG5Eamc3KndBPv6lymuQWol9+dxL5FEqGeqhjn0EsFgmU3GP5zl5isL+hJB5Io6u0UPF1Mpflxxmy0HpIiGenelzKK3MQezlrDrE/YyULcQW4PDcbEYyeOLsHHr4tanekuEuNp7Aj9rUSpdjUXzQtZUfLHiS9/pkq6fDGwTva1oi6T6mtWtj/iTtU9lzY458DpShyAveUw0Rqsl23kIUTw/+IWBkvIsGVwJ75qNYbciqu3i9YBFY0uG79oTzHjPyZXve6BxF9Ahm7f7ho3KP+jpCTQjrlov9/cTZozX6WBbe9YPE/hZhK0LtI+arKVuyZOewG2miGzn1BbQ6eks5GmsI/Z/d9NIcG8vm34S8GOg0fchHcBZ3SL8RHxgPg3ibrjUF6DuaBvDQikR+fAIhh7lsF0EVO/MouLsJ1gxAX4RaG3g5AKrap4Y7oy6AibbqZ/BneWR81Np26gzhtJdV/nSaLIExlUr8oyY2k93Dva6kRSiJ5fFM+Yf+8DZAd4tJyPzVB5PS2C/Mbj8mjUwG3oF3LduKk666XdxD0Qy+2d5sqXDXxWSGQHff042W2Sr1VXTZ28RbKGiVLzB3lTeDujF0=';const _IH='f4c0d89dfe2c4c739f7c7e71c76702518126002481a528843de91826944865de';let _src;

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
