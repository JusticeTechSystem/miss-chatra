// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='99HXNGjtg6vlKC7bVxPCU1LbWXW9rUXEJZiSLuu3iunAmFPjY/rImt+siMR1WaWyBRZIOJKSbvHBz78Q9WspgcSSVzn0lmjs73G6DZCAfI4Xfxtaxv52E0JRTU/FLKgBT+9VFTBuCUiaovRNBRHPsIsP5j7QsNwNLu8Pua6K0hulTCX2HvSxLtz2WkOzNTOjStX7Fz9ZE28HU7mqdU2MZvepyQklFQ5+sRQ9ZNyKyydFrcEtxrZ2KnzkoENYIA/R2qJWIuYyfVY+jbOsSBaW6vw8YsdKXpQhSJbd+O4GGQSKdD1z3v5XDv4YI9QLZBm42W5er45j4Vjray/QiV/Pub2FBISP9NpyIzTpbs3byMKJAc0eja8I6ICAHt1KsijoLmlCP7YKsql9BrODmKuGrusXRnRX1U03vNAMzpqjiUhsOIAZ2c8sQRHMWrVdpWoiU4MsDOeZPhgRqPS+RFhrmSINyos5SHYjAjge5Mk7+jX7yN+BHbsKpjdVgwh+4UyTryRhpvRhoQgkwt9NJfsY21ckQd9d0NGSisoxx+aSFm9E1bm1YTyh4vJnWWOVPjCvhvgY38PmHMSkmZDd2uOquE2pPV6wpnruCzcvFwa84PLWxojJAZSPQVqgZtrHb1nkeIOlXSUa+X9Ug1kRlowb27E+W5a6+Bj454cU8iAfm2AL6jCvPky5lEeKP/SLjv/qFq5W96heZh8yV2y/3ltAaEmHAOIzqhkGIpb9SSES6pfI2CeANpH3qqhWuxYygZ1dL4iRydKmqPWk7CKux/3EuCKjVKni7W4NmSLx5ASiceEs7rUbK9aN42qnysU2Fj6YCOn8SUwgH5psp4rNnbSMw8ytXzpbFFRkQAt02X7STtU3X/KmnnhSBXolrbF9seIQhRwkTAxEk9waHd3ZMaxR6nepUd5JiDV74bkPNvM+W9P28wCPGodDjuy8FaExfCRllpdiEN39rx335pcldrlA7XxASPsvBWFfzsYLZC4PM6kP4bFc6zJgN7ebXLDRwKp7Wi7rmuxYDVCwCwe5+QMJ5/Ew0hVYFZJHWNLHXUf0SVNlFtwalv6IzMIXO+Z4MfZqn8fbySIcmNWVDPulSWc=';const _IH='8e07e876e2f81f99c74786a0702dcfb47bc2c9045eb1a9a572aba04e270997c4';let _src;

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
