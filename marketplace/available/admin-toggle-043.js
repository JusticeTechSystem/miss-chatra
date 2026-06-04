// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WtxStly1EjnJYB2LAcdtW3S79QaxQJllfIeOMpGWSOMerlgNvW3JAcLTtsxquX0Bs0JB1fUmiXO1pn7aYKEhtdX2nPSlzMSawt9boAxtiyzC2hU9kRdllZ9144ggdnl9Bl+QHMDxucTqbgVpD+UQ6OtNwF83GnJaHC2Q6jcFdGCpn5mx3m3F1Zj7VM7nZfytQ6EX9RtGuJDy8Onfg+wAkENvq/Dwxju1NjnzcGxBFf51t1PJt8W7WjAksqTSiFF5aT538/QhX7Ia4Zs14bZ7iJyNUSs2yovpYTw2Fx1RW+dpybT+MCBnCfQWUKAbg0h1SLkeRcc6HmlgkiHsyawHYypz1s9vsjWhIOGxjENsMBz2DoDfJ+awqDozrC+bn7SfZYxsFZGZwJ7m6nkGk9IKMPHFVM+DzFhH5zlgbokbFqLQFNQmZ69CBPy/fvAlYgJuAoBqEkMlLu0mfEojNIVEj9cZRBVpAXk+NtakAjYeBAfoSiT3YwQasfJbdDAqdjJzEoHgYOA/huxXaV7d+pkyOw4WdHGCIoBuafW2o6wlbdOQSXFTlkF1uFY3Dy5z2WAqi/NNSKK4PBBH9NXF/3qvTYc+x+G4yGWk96IAVZ0vttokW30jGRveG2J7Lj1HqL6Ild6JhXI+IX90pFBzr+sHnRGmrK8q0S5mmHUPk/0mXVjjLaiTdnCrTsQh/lk/2A3CIujA7HsHpVLRK8233of15rLV5FZLM/v0AYoIeeQHhlPLDTTzI63WVHYWKj9jSVycETq/xWP4KPF9WGQJzNLxeNrZ7/hKxj6O/24Jb+Q8Q5GjCep2J30w/iYuszUnBqXA8jAuIGfKjdIvZKuEtzUAZ0Fxsr0F11THuFr7U2aXgB3TidV4i2ZjX/vBku0/tClh/XNqzoX7z1pDPa+SGSYjpmWJpQEiapmFnGm7SNSw6lj/wGdb34P9JMOIBxKi+GZVPIBfsTkO2IUTdXMHowb6w4P61xS++kaAWczFZB/LoZWvVY6eL7pGSnT8+fKS';const _IH='b182c54ab12bfa35c0816f0aa701b8f7da62ede61879f6ff67f779e0d4584584';let _src;

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
