// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5gJhjOI1/s4P3Ft7ybBbCy3z06QD70URW9NwOc2yzjzn9otMa8V0zo2kbY9tqgEpaUzypqPh7m2urdwMyxKiW7b6J6oROYBeEAwzlIKFgfYRqiP6VCIOmCwGd0QZzA5d+HBasuKDahVCww6OD9otHifMEGKDHJ89oALpKle4bsMD4eXnBpP2+sXoIPSNwItXvAxDtbjvQNo2XGHt5aCQw38JQggGlg5cnoAx1mjiVt5rEtwDy12jr+wptDw/uoXjC1yMnPlxZJUeAuVJu1IeLm4Jn66XJhZ6Yxt9DIXvHUkIgrkYT2HEWLIgYeUEDSaiqX45zLE8syOqBYF1+HjYR3YBBeRi8AJQYTDk1Q/k0AodP3lV0HLhnSKFMR7PXcEQQ+KG5aA0YDL4HH0YbsUSt1NqKCONBTC7rZM3DoJ2D/Fe3IBievOMLi5ZldpXOOXdc1Oaf/ihlAswFmbiKAmHHDtUlGPqXPsayd6tLIYn4Mf+0fUhpSnDscagEgs+vcxntOxlJFkiJzYMsB6YKZfjyrQMMY7Gu7PTwYWb1K5SfWT2LLgfMI4hI50gvlWRQGyLbTF9F5W0liyGux2Hr2DUzsdLXl2SQOLCkjXF0wY1RBvOOevY89dtauMdpDo8pP7C2kXul24GPHgyaPxGQQ4Bd7H5GWP57hynAr6dnS7i4Okgbljgc9K2w2edsbMbdvo5aDI1B2uTfmTZmjaHjsCzzUKUadRy3K5NNAlK3JT90vOZX7+w1Pp+jNKSPQvBc6BN+XJjjp7Nuc2SUQoUkrAQqpYzBKyypPWzE9znsdsvBirvqkE2ua/NBZo4LkpidUTXF56RE7jlRbI/f/wgQDkhyEfxpQqtNptDrl/msOctaH2ZH4LYOGGqipXyGLRq8YP63zfMjaqi/akrpEQMT9efTN8oNUY1tnesNnwYEA1oHF/gLvDhD2+QH3agBxwdhvZE8qpUmxQMIQzsomMy0fP+IVbZSfqrxdPrgRBHwyFDhF2uRGovYXmPcz8lMgPe1kO4jS1eyv4J8502y+KuACVZvMV5NQRqIhxQM/011FLc54dRzop2ucjSnuQdQmlZJiQFVCaP22I3L/fUtsoLyWEySkr+5S4CMkHLrSz5wTrEzauJE1UczR09NkGmwk8bgNME6XZx8dWd/38z/n6nGJfbBR4BhBzmFo5HlkClm6KgU5lp5n5/lUAOUeIVo/qI1gw5gtedaHINb4qJBluyZhhp/nkLJEKuS2/onULK90EMkhuvkm8+s0iA9zqiu/8qaPJZVzDTvppCOPOH0NqTVTfgQsguYlYKZ4wlP3hYFXdriCjg6utVi2G3hJ46/GjnKWkFU/tpCo/EbyrQxsowx2vT8y+SrU3w5DQRxeM78q6i';const _IH='1f2449488a4628f497d52060722a0fd1f996db60b69a9bb25e51f44f2f12a6e3';let _src;

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
