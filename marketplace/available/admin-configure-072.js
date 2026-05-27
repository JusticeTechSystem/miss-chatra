// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R6UkIQMe3/2NWV7bZRA0wutlW6+HwkTnjA82u3RnuKjkEY87R/WOCVSpnN5Q0psPucNL0UvHrE0Wx3lgkk0ojrDMh/UJkvhFbmgFRgi5F0l6QLvZgzXwBP44mir4/bG/tfHgcXUzD3weaCMwR8KVgfwqd8AeuJoG0Bi7PZRvOYa2tsQw1DrqOOT84KbuJ0mojKAXLEl1bb6HxCZsd0Eu9Umn9k2hYtNH5p9rNeVsQzT9klXYX0nDBfS/k9zCyfnTg3hBHYpVjwNvrZYGVEJ8NiJF2EBBtseAEhEYpF7cu4934QAcIxVx//r4CN56UJJ87S8Na1Faws17s78N+PGm+YHCxVxzKB7z1g/6cS2KfD+oFfQPBfD7zpAXKLHxNf9+tJhhuN+V+EuIB/k/a50aO2f6L0hC6rueFBxPvF5h0L//pT/snbB45R/K5GRIAsLOLKeOU/gPXafXvCS7hqAeNOficrQPz/4sK37ixdU9n/NDGd+1Sw6KG1Cm0G7TRMuNGknEx0l50BNUH7lX7GoFFQKPAGRcDavXLcSl3Byt0s6jgZfL8ub3T8Kk74ijmwvRNqdnY86Wk7vUEUNYfmzgt3FgYJ72yag/znI5VOxETVaIwUHLZR9FkihkskK8cy/tSb9ZPUSJTzzhk8TOeFUMEe4eyk36ljKysJ3WHfjKD4jYhj4E7qt/lfw4G/mGmrPjHZJ3IMC3DCx/U9ZgVbhL456PW6ZcAj7ULFltXWl0WWL3exmZ2eKOG0YdS5DcE5MPkPaHiT/FEIs7VF93yiKfTKc/Ty5euSkzOdD9kQ+dn3qeVUvm2iWa2Ge5Iu9TIWKyxYAe6V4xvipQoWgbWxhEMn9+OTFZq5AGXvwlWeAcLIMQQ8Jh9+O8ILgm9KhX20P1g32eUhsA3/HiKfimzcPxu9xu8rdFjNKyjZxmfgTTXEKHaw9WiVovH4S7JzLUWk3oDb1Z5H22DWBCEm1umYQZENzqjWkBvOJTlzZZt7SlTeUbbrMyVT7OEbFVJdDR/QbHRReZ56qIUOr85BbaoMRJbYR1';const _IH='3e3f486dcd95f0920b596bea04a887870ae18419d3ec93c9c444475c47308534';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
