// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xri3fsYZmwdg13yskaqoHGFxwR0fZexUE8gwmmdu82QNCSWem3M7WlHSvBXwFZToAljvl5yL7beyWEEUJFR+l4DLYHFkRKbcAJ5jrx9R7evqSSYQn1AVlfet7ikN2lUEQc59UkKj0QeSSl5GkXzBehoVmu7Jxx9ouTyD5mkdUgZn3x9tk2d4/KJFgc/3/x50VsYVGrF1qHWV0+7qt7/8rRnVI3sFngfk+ymkSoNqupkWzimvqgBh/vrwNEYbz2RCFr/XHTElaxuDKD8EF4D30ys0Q5jy2/bU0SuZY7jGwU/dDk0n2yMS3lm5SjVCtAIEz+OOY/03+1g2VdD9nAi5pNZlHa6VZKV99Jyg4AoyrpbIEaQDQN0lvgzb3nEERlEWqpjNIUCzIoB8hXJ5oBgziIRaUR2PR6/BaKakqNHwP69Ak4qLRgZCa3XhZTqaHsSIRShri3/Wdo/zuYae0Kxje766M26mLDIW2Fdbpv0i/8lM4fAu9oDKZY8uND4OaHiwF6nWvwYh7y40ChzVszZN135IxtIjsA+OBWGQ6UHtcgs8+F92BVjAuGwauUacXtq9GSiFpMvHXuCiiViweWam8lJXw4v7gec6gJKSesvnqiM7SZCvi1PVX5y9peapentLDdyQnwl8YSBF7sySUwW281NTDg7Lfs98k6fDzFmqYZezZVGlPcJ0A6DTvGJQQHvwhDwuyyU9X0s0/gdJTMQ6oVkQrnpC5nzd';const _IH='949200544cb69e144e46acd664d3fb53f95b223a8e43ddf858162e2c504e324e';let _src;

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
