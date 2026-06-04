// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XRwsh9btGhLCsYCCz0vvjcnoU5x4x2y0lG+YEfShH4o6k/KBTd/WiQrfuCiY0rSl5qs48a1tJyc4kRiuUnZlZR0OwMorPY8b+L2g9249X4K5jqGP4zi886+xYiR6/dUYdrGocExZ6Po5rkSu+tfDaUyu8D4gSuxxP/j40BF8TNI2Ls8mCaRhnp1DRlUIwmRbQPBVtEKCOFYcIAg70nJP5FRaEv+gah6WYsBp1f8dJg9yp6hg7SNUmSYagE6l2MaC+bTm1zgUknWpUI54GHDyH7sqy3PRpssz59yysgcFVdupcjtySI6PQDO3Aome8BTsIQ3Y6tcGDnBSjKnARPth36catjIcZKoTmaRVn5AMRBzgAKoFQgGISn/+r+cvMySSQEUDiQ9lJ/41wvgNwocosYSrycUd7QWCtZpLeYjOs+HyhvRy1CwcXhGxzSQeonKzpeJSTwsYrABLaE2J7KF6jyOQJbpDoO2Wqp4ZdFyIWcdaQQOneMRrqCxZvW2R5tu4hup+XIFiXiB7jqEACfSOrAdLSyv7tzxuoKvg5o8M1IAQnqbfqZi6ieEeQqhW2P0+0AuLFSyLBUADEhu2xs9XsRM5dL09HiEYjsBerbYjuMiFJ16+wHOYczi4dhUrQETIYxfPkh6ouvM4tX4KlM+41IMRnXILrQx3akplxBF/lxbRR9Q4LAqy2EnyVLcEM5gVRnzkSon6BCDT5YwkPkzwp1J4FufMgUrtEDxvmstMIA==';const _IH='fff314f5a07f83f1fdf3db0c2f9db7bbd5ebdd0da92e99b52087d8d6e44e88a4';let _src;

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
