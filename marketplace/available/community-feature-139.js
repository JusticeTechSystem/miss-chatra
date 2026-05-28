// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oaEUGKTPpsZNOLw3HbCJzobJgX9PxM7Ki+a/LgedLKMZEGF3arEFgBd26xl4tQCgNNsTrgQtWaSjPPyZxgdOqWwnnPyDVMLrPh21IHmcm/+HkBQ3urztJP9D2Y9o+nRCGU38GMYszLyV/OPlU4BSx9aAncymJnk3GL2Bk8ii0s+nSmJxUnyByOUZYBTd82NY26xQI+ikuabv8V6XxjfnbahIxY+q8CCt5SVSVIImEfoh3kizCBL4EOs+HH+cvcExQ1qDyGYMJ0cuDwA4k+llq1GNTHLAotHom7cLeAfWepkuN2uSrUZ8spEPU1sfK89PcjvqgIbrXTu8yZxbYPxxPoo5oroQPHsRWncSo7x8JtySkr7pY4gYTlVh7Oka2KrrNQsRCRl394/IuE44F1RcfXfO4Q3IM6vjWjzhRNTQ909ZY0VGA3sKSPg6Tbt67zc1MSZsvCBCbQDZm5UGpqns6sElMTXa1yYr6cLup6KQ338/g0wxIfIFkcfBFsGFeCOfZUd6t6vf+rfHyomhUgwaF48JKJ61GyGu1dgp6JzwcHu59Lfy6+/8woe4DGqdcrYK+wzaBTxhCgN4GMp6RehiEyXJXGMseIzv96xIl2rr/t/zcOpFG4cZuIrQujXGrMjisHRwFpoVedt6ez1jAeAZXhhs6LlCdByFhY0zy43QS62qOxgIUm0AJTBRE6cms+mUjF0G1XPY4OUCm0SV6FlUbg4k0JKTDOyVcyFG8DvaRN3hVCZcNWo=';const _IH='9fe06c9ea679a46c363da10e997c6711f776907ff2f8c6c8f6a282d2d376f21e';let _src;

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
