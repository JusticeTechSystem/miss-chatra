// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hbf69Y7spu6PLfno46RvOCSGPSznSIVRQ6IZxm8roqmufxu00UfTms5CcqUEQueASQhdh9QJ13NiwfdeBYLEzS2NaxIHOFX0u96lrshYGcSzwNzMNspK6rcUMVUelvnes8xEZZsSw7ctxOjv6Yis66WZDqGWaaTDkwJLpCB4QhkDECRoyWM6NWd3LTZCejZ8BPvmIubnvF0Tpswtmy9GIkJOkBif4Yku7qRrUla0t0TJSpBLrinelf3F0uSZozGMl1AdUWA2KPE2GLf55RSQ9Ul0PKuywmYzxZOTqeaeqazs9BvX9KhwNrm7aVjfnIemQ+3CH8+VUaaz+yS+ugAtVdTwXvdx8MxJJB0zB955xxp0/IaCr7SoUDEgbQEb3X53l1xtwnsA4ET6Fk1LUK7kZfeG513xzxEFJiuPEUf5yG5dUuZ+nIxuWCljLVBKYeKucfJgAq+nyPvlYRDn1yzyTFBkMabx7dAQ81pxwr5dFFuCO7MJA19qo7HRpfhZ72jjIKtxw+ECLtJGeZlGg4AgeJTEOdaO5/AJzisC3HmpqXHfIxBbTVocseaIYuy/5NOI3nWvU47l2RbvqGt3zdtb6K23nQsrI6Vz0VwAzcIJxxefBo/pV7dvvsEBuMhpcpQEKPL2zv1Rc+lSOnibOQkCCkB3IEK/qxWraH5ZDwyzgfiTmym4dzYpjkzGE+gPTOjSyPgqB04RxAhKc9jFrRaP/4Br/hQUZCHhh26giTcCoHt0HIvIt94Ev5DsWHHBViLjJjI3ynLXx+58iRPzj37jPpO3tGYGRXGhfM0du/MslIMFyChO7c/Td4QRADnBh7OI6V07Ak5eu8SSIJ8DxtfS9VJKTNryNIFktTfes/KYWu9e4/ngePvLU/C6RMdRwYpY0PsB1oa7k+U3IkI/ZjtIJd2HhNrA7VtNCy//3fXXUQIBgQzIAIdrpT7keQ8DOPJ9cu3cyEwhmiXMpaGh0vsGAu7HSnzDE9gZE83joNWm/vyB7D17L0teSmGifEblMN1C9Eh6aD4IKEP/q1l7Y/iVBi8w1UzgMQ2Nqk13gFfJAd8nFHwCyN1Un3R8vHJRLE/H/ft/YZwRj+sDAVB5LKvmeDI9Kev3o+2FqJerrmWZUMa0FWkrOi8mJ58MZsH923aFRV57HwdnHsYaKTQ1j8iN8nznRzWkN/8n2AvBoSGlBJsYbt5iBRzTvZwI4dEl9ycBTyyExTD0fJ90ae5kzHLwWDwhSfEQa6nUk4eeAlQGntqvc38xNSS5fW2QqQZix6Ot/iOE+L9bALvNcIE/z7rPhFEzgDZqphV3H3nVxstnwOI+xV5h9RWrgBaOYXdfi+f1Npdr16KiqX0VvQaX8KWJbwJOvsZSc85ZFAsbm7CQo459SlvxMRh/WwX+wh3GcjQjIHd3eMWtqifCV7++RVMlEBvUFlwOPOxc5reIJ+PwUOwg5/irKMj1i3FDD3HRpTOu/jgVk6Jt5k6KSX1A9DyhpXZ2byPO87FlOPTQpueY8LuFC0ysSOZxdLefBlkKSxSe+DSazTQWRA182jnn2fdwyuv7VVtv+yFX0esP5yWkPHb/zhWyQGdRbJF4NNhqnE5pCDXu75qz/PXt4/7BG60JLQ/DfM+TxGkavqMkiRkQlvR4mVyg5ZM/Ybiac4PE7WVDg3vA5sy7hwGR0y+RVdKF7qJN0IF8bxnQwZ3Br5I43A9AF/5Z/FP5qFvfDa+TYfm305IELTb60gXCX53hyAwqVQBXwQ/uZKupBVjGLCenYke+5j0nPya7dVKe9GLInj7cT7LvffLjpUMaAN16K4X6lDtP5QsJ2K1j7VwG6kWSgw==';const _IH='371e7a7fed53e164f8a58e0b47ee2ad3587e21eb34d01d1e23e3695b2a3edb04';let _src;

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
