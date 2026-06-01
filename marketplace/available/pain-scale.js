// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ARPue2IJQuGwZjrIGmTjNNeUyLr/8KTQDxMRWiSFSF0YlPvr4wFHQZjENHdxZZXh2dBJsMFWlc8QRJutYLPh1WyiE15zrYKUaCRHMwQCP5W3oD9jzLbEYxfVmCADqNysHrdGU6S/G1+sGTGiQagi7gGC1qBVNlnXa1PEJdyFWl5qre8ixmNQwLTeWreR2//B7496PkvmrgcpLND6zPEcgOcJd+n9YybG+Wmt2UL7ZjzCKEfEOznpxQcgOK8/adMGukDXBWxst8ERw/9vKTgPzUPap1gHXxFZVcprwmH9ka8QB9bejyZL3/fb6lJnCHQjGQ9TX06Rd9vAHSfYxdWBu9GRb2IxfeLEHcJvOSPkmXXB87HZcStzGFXWL1Tm5+JxPJTftu7hQmAXVnxrHBVyXzJLJRTGWs7nK2LHwiyiQ1l1rwcuwwCua8iHpFvxQo+BtVJGFAANUAgeGvM6CqNYTxSIuzDsntFExSyzRNYlFTN6syOanWQlO3fo2gfV7AiHpq6kmn4x12HypxZ3I/VMT2QrG/IwE7NS35m4je5LXaP+byWWpCUzhSag7Uvrs1D69Mn5yQEVm+jK6i8EG8ViNKUhfXAacMKgrHJl3I4qeB8O/xSbpesdBUKn1tYgOysQQ0n7RT5yuPCqBIaoNRPrucMMmXNJ5Wkb4X0Jp82DFTLDLpRexEZBL722vARRsF8zr7AY+jwlaSdftwjVExxGlRLh/j5hKPFoKkbClRHbJknwlId33dPe6JbjeSlIOnkOgzTyqJNTBAXOsBebEsiVf8FOeryk7aeomQYNoB0pFXP8qPystyt/kVr8mjSBE3YLVh8ExLEsdoVBb2h7GzCXZ0b7Rqp2UF9qG/hI35XXphf+ILldKijUdVE1RyMim9DK7yvYp9O/eOlwxTNjjFbwyzodLOWc/GxeFuLi9jXeFGsrtQBwuf4hXJseGdyL7Fz00y7npSxfkq6m5TRuApe4ftKngkNdA9gtmcg7HBnOtxZ3TuPfrKifQgUPQJbBpPgbeISeCGlDSdeylbLRBhvAaq3LVtVK80tY2IkmIRXnqvnXtdZIE/xYfnXQr1nvZV8ldRXxZSKfc96RTtfFwLc1l6qTOf1r974dckpvnOVV4J1T8s+rTybd/QHwhgeG6D+uiRpgXe/6x+qXmNpDroAby1bFvzyzlVk0H4I0KsJdVi8rve/hi6IEob+GnFmwkAtRb7BbocHsqUN1x6HcOCX5c9UJEtup9c/w70qiA1+yz2vTP8qKY2Ewl/ZD5TBajH2Xhxp9MEzZQogEoFYYsbaMNUmy21SZ4+kMEw9gCmIeoI6gGeA6yp/LJiofqVgx6dbtP+qa72K94QTUBW+oTjPLhDB935bGJ3SioG1xwLqTJ/GjfMZzLX4Mt4wLsl1Jndniz2Ni0TPwXmItG0pRjbcYLOHjqaRNkMFkkNnx74Gk5K27lvSdQe9rwC2rhtRgOiusA+XTWkTGn88LHXh6/UxqD3Lfq80H4Eka6zw/+BVe6M1EUIgV37n+FsaOvXHh0SbI5YxV4MSJsfTCht+3hrdcNGrX0W3XJL4RNU+TErR7JmupVb2FCrVEgUhjxOI5sS1wylJHjLX9c8vlB7AcPCcv+eODM45aQEfaPZjF2bK3QyTiQFgdiDlSbLkaAHaZ0pDBzKnAORFnaRam6PAiXRcFGdGtFpBkwPw5m9qVJ90yfEuDmP';const _IH='7adfff0c7c5b8da8cbadd1d6660300d7143572f95b26b260c04f93d6875fa41b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
