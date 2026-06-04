// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1cN4jteFw36G/D3zoov0RITu4hTVfX2iwDRX674J1BoOi2KOzX+DFJhzcrCmPNBu0cI/zHZo2Fqv8G3cHl/CuuGZlnywwQ78y4cLFrA9NgAw5xMfL4H76Fm8nFQTZzfN3itJHmaKuW5jGyi+MVi0thij7m8hYfjDBPS4cNgY8aT8xreAoPo/PgZYASyw+PByPOZwFnSkFIliZ179/yRalmsjIBdIfwxjp8yWdAbSrJz2vmbfZOAJ/XtaOEuo5TT2AUd7/kATbEEB8xAvQ7if8rICNISgtgbsY+tGMDjTgl5XZrC5dU5HmN0bV0quqPXcvedKefLTqciKSdgrSGsuW8Gq3Rhcc2UM5ejE8EPYeroeKmZZ/XaRETyolxmJvjHgz9xF87X5m9V9NVEqbGs3bGvL+nNsvJ1i5BBYioRkI5BOP3wmsldR8nEEP6wHmMiviv5k9uumr3UsVbm+vadMipK5X+Xb8mtoDE28BKOjHiHtInUWXfTaoNfTOCVrw0RYO+hjxgxq7gAepP0ffbFO1rBGGy6DVsPd5NhUr0serYTB7ZWBk51i/gkLIH+T0iX/uF5gemYCF+GI7R89ufqcOAa4XKtK79wOacMuxxFZEo7oxqmzCoLi141Hblwx7F+Eus4CFUVcWCXVEOSSmbe5dHRyoNAd0ckaAeC0Rqae1aRy1y6Mpdyd6nmg0v23yoHSaAd5NpbIWNrZcLbL78fj9Uau1J80AY5+2ux4yxdsH4aSKLqgD/ahjVB5n4gX1Hu9iEx9vx12LNaI63Qt61eTdGt5uEiMVU0uKrUc7Gi2tEd5JXsJ3iIsBz60iD4EVr+/IWp8oFnx4BYzsPCrcFlddlX+PyVcud9V3IK6RIODTEE/H6H/eegj+vGkUtPt6ch6HW3YGzItunaXKF200W+Ejv+XxA6TRm1sMdnui1Te6TkGLQ9L30+b8elcaW/ZVxO2Kkm0tx7FPLPRllS6rRXm3CsrCwqdImx1rO2zxXDd2mvHduf+p4GZ6v5vlRu2jUUj3dfAooG29AqCFrLDsiimZmp3oTbZ8MmKKFCZpFDY9T2AYwnJS6+0EoIhWtajz8dZEVwktvQpEIkRLU6zt6F1UhpYC2pAWQKmw9ZFgfumm3ooyY2TE/cJeF3HXERITH2IH4y6Nw3VWO9DMpENjRpMjqW6B6qYZFjQDCHRNev8wbvVYIQ+b+b+L2QIN6kFBuZQM+XBSQsFzEyWVRWBZWudulzloK4KJghUaqqF1OsW0wDOzzaY4hekGxHEkRGRcdMz2eQ2FwEA1qKJrlKrhOAV984vS+QVDwJZfHrZXROKWwaTEfFPtufsRKXZjGJhpysaixpQsVblIOfc0a5kXlzK00iRiMrFbTs4E877gW99L159PgY=';const _IH='0e73c03dbd056b7955bd22ee366bac12caadc30405232e7a0971be8c0c3de05e';let _src;

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
