// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MgsRH3ihw8Tqq3eMeEPoCHDCBJkKw/nKq9H3wPCTzbCWJA+SNcbXnbuvXhEaOjMfbCbd+MegumEwW0POWxXjBbrox/AAMaGXZ+pQsBJRIpk8q9ObVx9ziy37W1MKQ2wpZoLSj+cyJu4bED4WUeFotUTCjYLSTJaOURqOkrJ0S/vVvVl72OS/vSk9R8c1n5DQAglpTQAfIrq84IeBqAMKCPwNKHcYj5dttPD/ExId3ABymIz5HvcL1SA7lNLW5MRHuWIQO4B6xkfjDfh9rBnAexgxkez1qDTpxSqhRdftRBUYEIB4hakloaAS3/HAtc50zfHpZCD1qYQHS9HmyDlQHI7Kc+Gp98Fr2U49twv89lL9PFLWsugAtiJ0/SWmz/2KGTwc8UQ1MGcQxNKVSmFLbZdIMOk1yUFzfo0AySu1ubpXQqj2HAQHhawKWDPXaO4JYqG8CsIW9Zv/hMuXk3VG+7I+v+2iEJcB+cUAnav9ZAlWXTDs3BOHskUCNwjO3mG7YlHwd2irLrcHbv5+lyq9wXM0PuN5soKnkFI6F2Jf6wt4L4QO0dGG6NqUlfLG1eO4tHBdACd5Eo+jT1qyG1QQtOaRUOdBYF9BXiHrhFWh0CRHV4cvjTTLzYxsYi0Yb6IdMgeCBSQHl9dhKljn/bHFJETLFv8d60PeGKNmRMA7ra7nJA09667cKpwUlzPNCZS9xudKghrFJ2BM+5tYz1L0DNgYDZGDFPdeOT/otXhO+L72/GIWcmoJHVhoZJ2Ils6OJ6jkHO16aUhzwwlViHMVaBYJi9FVMYwActfCYn5/FVi9IlSOE/zNBkl3Wy8/aMDQw12yLrBAi0KQlc/jsGkWoeS44sY1pTjW+/rqnOQglfA7+EaO+kCTjRkJlnacsTP0UmjZFlc3FwdBFD50cCYyNldZQBUnk0pzivOp+Ldh3t5OFk8fhodh+e8DTDnPgMPstN+TnS+XSnzvKa5kgD2jL29bJRBIuHG/utri063ufBPb84FPXvEXXYsb8BLFE2S0sAsno02rTl6491wJcSKvX1zbQ7aG/fxxMEI9pRPIY9Y7TH6ZhaZHWS5E7+dx7xjR41meIAbvmxm7sWgDwFpCqPiTBwfyEEo/Hd5fG9DKTVoeJAAlIajKZXMgNuNS2pxLHMcvV07z61dOrfLvrQbf/0h9uV6F/tQ0S+BNLXjhT8Mf7DOe4Fyk9tAl/1Tx0BehIxhzdboPA9URY0K6I+Oc1A2rjAk5nfQOBho4axiyhnEw+LKZw3jEQY3UG+fYlO0B6REK99ICKKgYOu4sPw4zTibI6dQiw5yyamYWJF8ATJ7DKVh9oBxAygHucjHjeN7NHdlUhJmxFFPLf5vNhGhRtcRwxqhXDyxJP1fVIXO5Zpy3ugYyKO1t/Jg7hoje';const _IH='0d45dd08fbf206096adf0ca7e33d8effb69e71b5d49c0d9cb539303a1cb73561';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
