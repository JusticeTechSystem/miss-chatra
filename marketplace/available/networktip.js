// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wkk0O5ITtan0pIGSfU9bfpCqez56fqymikGqcWw5Rn+zm83QHed6Qi9/ltjwiVaCSZrmAdHXh1eKD1yrYIHKqPxoFgmoVV1kICQIYNlEa6cJLrYus1f0E942k1wIXX2z95pw9muXjGyalB9zYZbOUg5MexQ6Vtj/n/9wctXy0nWRosgNdSuXQQdaQp4gIX9QGO+NKPKb6zveFTWqx2CZP9ulHrbP1dX3uUXkW/g+631RF8cLn0Im+CrXOHLxK+4vxLgkKScfl4ZrVhs6/Je8XvcDvHN4uZ67YnGDGMYA/iYTpFzeSbjOG7JaEjjPDEYg9D0455cwx+QG9JK5uYgr6MOSMy3EmetenrOX55C5LVCDbY6JF7bKXhWAt24/BhP1k8jKOV4UROkNlk/2WOUoVR9jz1YMZIMz6g5hpEoRpGySqqN2WceIhtE/7rWf3QEYE6GyfHin2I5gVXnCTjmpbO3AudzYR9OcmGTEVANyfShwSi7p6upwxtsg6z+KbTsS838r72twEh6pdQ++meZVQ+opkaMwCmtuf6hYY9yHAd87+OzTUOzplnoilryAQZnPLRkNX5CGSOcSwwb6KZiVrIdzPkBDBq/PBpSqCLyy9aSMHb4wZZHdWAhk8Dc3QRCKzMVdKlDElq85rq5hYcrK8T5kLAXubRX0r5ENTHmFYfdxTZFwtfU6L8yxvmvCPf7AyHsb+G6uDDf28TH2wPzVFRAAJGVdaIIVI5Pj9kHLv4VVLq19RibD7qVnbJjoFqR3nYZA7psCf7RCVGiaBN9zeG7LrhikpCn1JGb4+ruVIWhXZi3vJCtAHJCq4aiH6Jm637NIGjMvcXNiHeb45DKUG95tEb7frpbK1rMdGxO8vaA4XSwOwydKL9poh2CYYu6DJUeTKlhIqD/Nk0p9E7NkMrt9G6vd7n76nzf5zeyMagC2KHLJf0bNUBQHxc/JYfWeDMpAgOm+f4fcvUATRJWuN9nO1k8YMPJrkb19e+YNRvPR/0GnmiC/m3eDswDJUro0DRQWhvPYZGtm8YcnTNZqsxpTSfLsq6yX9DmNSuzyPzm5AIgzMf4LFkFMRS/pNE5/HBA35y3XnC6vXL+12nD0uiqho9EgjhRL8K9Y+d2CjVMh0Uvk3eX9X5ADH7COKRBJC5upQPryb0b4sTzu7n2vEd/jhfChmJJvPnIXVYz0x/FP1q5UOWtPDjEVHdTp9Z4Gh3I8VfgRpA==';const _IH='c0ff86ff1eccfc40add09351ebea7b1743dbcddd7620b2e409ab04d1bd5f0f9d';let _src;

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
