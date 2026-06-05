// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OVx865oXZIqw91UuPHyg+WZjza52uWONe2cU3tgGxgS1tNvAl0LWoCMTbVoy09rkKmRIdysV6Q4ATrzC8b1W8EdvYiamTZGCT2rfR4R6k0trhY13+PZN3XAB+Zh7l6NbIAWc/SGOC3y39cCzdPp8QMoBhdl9nrMwfDZA4gH2c2ADnrMVfKqWpR1IyPgwnZWLsC4nIlHwv3i1xJYQDU0AybNhMNdSNBEGvVnmkQSa0+dTpz97Z6JiVivogxehfpt4A4Ru2Q7Mn6SdMuB2teE/Zebv+WY24SzWuFF7IqEo7lFBHvz4KdblrXo60xMTE8LivZU7V0tUeRmKeRey7oR7fjJhr0Q1FeZ9gsVYxYoCVEZJyzrkJP63olase62I67HnrAiwJBWNKK7vDDhsNqEF3xsrqDXLLYsh/hXNJ+gtE5G69i0HsXJwfaC+mpRh5xlvqpRfU8H4xb7knSMQFQbKO2GX7gzTquABIeBYqHIT2OjDpf/qAnNfu2hLulGOHCuOBuuLDzOSzCn9+5GdM1fsda2VI/INzIERUG5NrqpMbmRHB/iyzJeIWs/nGuZgf+j1Z+KStf0vpbyjRQxA8pGvvLMv+GKsyzK1pIbibUmsx58/2qF9S/1NzM2nxBpR3/Qz1SLu2I6v+LKUqEzA3Ja7Es/mxMMb2SUzajO8DD9Rc050PguQh8+AEK/TOi9ZDD6MRTJjwrD578rVm8jUGW71acgKmfjj74f7';const _IH='08b39530ca0961289074290dd484d638257f56f5f958f3f7b1bcdfe332b98be0';let _src;

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
