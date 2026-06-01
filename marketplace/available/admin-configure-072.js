// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/E65EZ9OHVvhTmgVdbOdnWItU/5VO7wxiltuOqN85wYFXZcW0Q96OhCiW6xuYLC8QqPWZyJ5TBE69LATDEcMY7pdLudTHqJ2qJEqT3U9xiODNDky2BnIrSFtVlmPkl8uukksUovK65sajIW2qpEHxLhpGvTJg7yXVg7u5qsMxRT0yg+o1Xdmze1RH6aN4J6IvdHSeL0u3zrUBCdG3JYtuyLbD7nFfpZc66w1/qapVmZvCr/2jLdZiWYmfDZqWYVZKP/6/EWNYTukSjCDHWIIf6wHnGTM7nA2WvuiIXbQOOGxbGNCCtyBwSwVL84XtWmlY6NRPPWKyx00HdILjcwCBbpEsLxS0m5afOOiV1ROb9dxVBByixiZQ5oD5U7EFhIF0aQBhfP0olEvsAJWqDabWtQLLFsinLYLWleXw1bkHjs/tKvUTuL17PfrAU05EC0R/VH7mVObKCYvsRxHuThrIcYRFp5WYu8gAh56HXxqBunLNZfEKu9zj2lzYwENhmplrvi4clj1rY1p6ZJBdCDRDWupyXvSYKS63KnhqZWwbxTll/UJpL2Lto6GrQIoXF87n9Dt/ljs9uFJwHkrw6sT2pNAtKHu/dBZ2GtKcIgNFEtxmox3eBrVtc6rCgRl8fWBpNgywqhM8Rwho2J0jYZJVBgap7d27i5LelWg1xErSkprnLhZ3L1j6qRZoNJ2cZpNj1lUIL40tL1cXR0BOswu8+XDwQk7T8ir6eGcUgY9ZuJ6ZToOZ0qeurkycWkDgbhL7gR9HTx6hD5JKLPVw1SnxbMaGCw5eI1OhkOLnuNgigIclLrouv7XkQVXzcGvOjaMZ2KSZGWEXRH+RVzpT4jkjJ3jRQ5X1TOFVVDJvHfPZvE5oZ8qLvDX6mO6NeHq62rAnvTBQcCH1ED3cYTz+J8+0g9Dm3JkeyZxWo4F524hpW7CF8wDBohDgWycgafHOWRc25hzfiHv2ZFEk8xHwa8YKeDAVEIWtV+TIGS8oyfy8xmfvXZCJ07HSD8WDmPN69jYfKCjPM7ifc77GC/EZY8vrQPkg==';const _IH='a1742808b97d1200cb2284cecd2a9dd1108ae88e0c7d6f2794e28f57c96fbb3d';let _src;

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
