// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1fTI/X1NrJPG89TFxRsam6gc410mpfQcXh3pvF12YteWbjA5cGpq3en9mI0TK9+xffIJdNGUArclKsA15d8iWeHY/p2mJkQo07YzRuKFPRYZV5NoX0jp4TARrUYUADPUMGvrf38Bs1Ol97JuBot4yxS4XA1LppAC/3hkvv8S4TKTLANQgWkZ5oKp8bHwI5QnUB/w0Ryxh53gUBf7ZEMNXF4v/RXF8UruTCw2ZwoQVIq2Oqen+IncRyVh8dFCY8+xHNuxOJ/+FvJzUbT7kSFhS5lUiQxJsivBxKGdOcger0zwsS4qa20C68HxdbnN0M1saQVvwBoGMp+2aXp+hHL1GDjC/Q5qmfcZMa7Ptj7mV4rcbd3TvsBL3mpKPRUOG2vHmnDnuqdkSFbNuGP08FHDpHAtr6aab/vlwBEI80GsY8TQ4eqV6xDfDloL20Wg4w2i/2gnKP3Er2jPz9fyVszJZxikxqaKDlxL2wHRdgDGK1Btz7K4xgakhJpkcqaET2RFX7UYsZB+t5rAiQ7RawjhLFuUXNzSbtvIl/YMPZaCG9EnCpejZ7Yp3wvEo27K3f1gMq5W4RN+nS5HFBflMHSmzBVQLFHNCQ3MjmwYLuEyQ9zDQ/gz9dMmFuKW1pICQPwW5u2d37n3DAOp4On0SPW34wUNDzmL6tvvLvKrwRlMFNV3DhC84amA0/aFbrHQYRE0dg7mhSAE2FnXEsyEv8Md3tFYuOlXwC2SajyCro2NN67PBsO8GA7MNQ1WsZ6wEdJTikeXCf8/FPLgheRk/7gcraNmFUd/M9dgnFgQgAKI/xLK11pD3e6T+inDVvdHdMO8nwTvWZEzyyptx/5zOF71HdQzJsuPVkZKQI7tE4gdbqTNmUpg93WfE43Kwgh9WQbUgNcFric8+jlFnpESeU0yu93rvA/dg/mNfOqBUwt2cFxN+OgQ41FF6oq+JvscHF/t9F5g+35qwekSNwupW9VnRxREbBERuMKzzsh4zjtXvLIyLQIpA/4Q8lhurUHQHmsA';const _IH='304a6f68fe7b810c47520347651ff4111ce59211ee222cfa4b23d63d7eeac58a';let _src;

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
