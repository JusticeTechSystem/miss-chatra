// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xkKDlVtkCSQJ/jgLSQ9ldq4NvD9yMDyxJQgNWikg+jjUmZMsVUXZ4aGC6204kl0c0aTbrf7KfV/rPLRj0B2bJrqR1SeDNLG61XBqB+sXtPhz702WheFop4iMkV67NMsNOucRi1ulzEsYdZnSB120D6m+At58cf5M1HZgAdsKlqnGf2vEZf9RhpoMGrxyBGylWobillasV5Ldn0gzKgD5afGFjBBUn3HvokXzVB1SENkDDov0VWK/Z3X1UuwwlrzfU172r+jEW6GtBj1Z9oCYGFYRnEpK6r7bvSR2aQXH6izgaGnJJC0z8ldP6gOcWZWop+ilj+ASIrSVQOW7hmMXBdae6ZHXRaIT5VM8aa+fShQNev7xYFz2A/UP9xD8Kb/Mm2wDoZybHorT0kbkKSVcqVzL1Vg4zwvqbHmMptbkWSKsGJZMw9uZk2s1LI7ZCu+0+A7MBhxZj9JwRcvrwuhKB92rLZiXuJaJaK2502DYTEyrDTAMTq5fPsY7+aBQIbr/2XE73zvfGPDU7KPofwxFHdcUYp7+CIxWTh8/ksRCgC5w07AQTNvtTLrJmGW0/Q3zD5sBXOpaeMgcJS/MI5zHQgiREwKOA1MGT9B9UDYvDtxZIfC+a/70ttO4wxh3tWg9ZE0bsB64627e0AepRRny9P+sLcInULTPVqlK94modUqCVuN+o3zqfaKDsTpSD8vEPhU3olwHXShJDQHUliCNyKuuxaBP8gLvA4o7YF9J55qn0GhSPch5qPo05H9tHxoYL1m0MHAtqd0f3xvXxBz/Yie3XldJUzVhCW4wbGB3pVTBs11XZGd6KGwzgTuJC1kI3fNRoobWZ+DKqHoJsw6pcWpABWJRo88CtcjKy+2AVVoMmuWli7cxih/bGKbUM76YF5qvC6ym3ETHHtj8wuxAIggFbX66nFyTvTKgpvy4kYdv9Wz1dyMbSvpcvlPaf+QCEQaf1ZQIJ1wzqJKQ5HLAwRwjzByJDVXc+Jhj652cpvZ2dHXgRohsVcZLMpAEY8KhD6ScLcu3AkJ2pZYKcANBgBk+PJoWerfR1fLKVJ1H3kpSVIlHCJFfOgal3ZhOULr9iMd8Sh4mOPxRFQ607kmsyfrdpzxB5oH0nnKmt5ehykZAhZx/XPNIt71NXdQ1TyNLsUogRRVX5lPSHjRAZzd0fylAD3tqnumxZpjJCS2N4TxHd1BEusyoKVDLnHzn1ZSM6Lhc6lxl6fJaSnXTrD2Gn090yXGaHfUZ094tnMeP+UJasOsC/8Hv3bxrg8pH1tyVPPv1wjapPUFoEMgFRBcAVDw/TMiIdIBU+esxgZ2vu/KSBfjRgcP9MSqXlmhox/qbNAkhZIEKauS5aILoYy/nvPrzIQB8W5L2FYqIdPELLLwornjy7xbTHw==';const _IH='02a4c314f8621458a566353a34be8e4a507dd7c8ea100130e18811983794be87';let _src;

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
