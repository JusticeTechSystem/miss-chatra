// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCzUX670rI4bAEM61cJ8VD95Qw/1D43J5Mko56MioJTbENrm1ToTSfLa1TTINRob3zhwNa/7J0lNXT0qXaxB8BjLLm9ybzGMBDZtIUZW0D9jbOCw7SjaeaSeaiiqBQPd6lofVT+4YMB/dJKGxdG11P/wxAy4xD9JdaSiJdt69KHN9/6Mda+ojAhx+71uuMdIkTosGNhDZ2GL9bUDZ8wzK3SiyTv6iSp8WA5NilQoI+oB7zexcvp7f/Nso1fyv7+Qb7vIDgjk7pgotLMe4b4e2v6uggljsXAous9MRj6caxlmw/5+hxT3iMScnNC6gCF6cR7A7B20xhU66vGY94cw3qcu674PcpH5o19po6K5p+A/vwmG2Veaiurf6Bt8ryE6zBsS/SoDW2eTXZc8ASEfJeNZeJLEKQI1LpnU5LSrVEf2L948bglWyk1msefTpYH/VIQwU60LYKnMw+soNCMJ/F0hbPUnx3Rkw9GZo1MRfW5eQ5MRxgXvMS7DJaEMYLwiZFkmnH+bJGwA+1lQqJveuQppJ2bNmgP2aYmZU0febLRMhzDGsv7WqJKqrJnS8Xjkhpr4MVxBlSigIvt8o4MCw19bj/wQ+HTAgUmaPL9hF4sQFgRxmV5Qae+2OgyLH/lHdZrqgBf9Ha+63CTFk9PZdGNSecg+UFckuc/72VLZYb1PO2imPpId7EAm4jx4YXQ7UXXeyJvtoJDcUgh/szc1bMl3lRzWdCdwfhnNoSie4Xb0Z4kQJJSB+78hdZnPcVjcsGzl2EKetprhPrYfLU4Q+MBTJyXllz0MR4n1Eh/wsniiIJLsl1aLPBOeThjXCh99T0o7nuKlKiN5Px7HbBnrASHIbigEfzwzoE16XyGgfliFBQx4bMV3bDIxDZytvwVPvOYSWPi99ylcMEBlCVlG9zQ1zOaEP4z5/FcrcztwMi1sK6p7PFEJSscs3e6/AgHJ5PR77MdRnEYwt7cb0gk9Wqb5JMQlllDi0b38FrFYHTF10ocgg7XjuhOV7GxkIcsvxLVA2dtpQ3rls8rqWqVTTr4L3IWy/1sPaPttMObG22jceX90TZhsNqXC+Y4CPEj2whk8yoWLnk6TmNJGwzBnszZA8WS8o6y5tzOuL2Bbm8YUkztjGSLxEI89Y6r8QaQbHYRSQDs4r6989IbZlI0IcLQfLNbeKn25HGsuJnLrPbtRFf7APLZLOscFbHEdDxHe9m3oDi';const _IH='1457ded2485aa374ee58c9cc93d4c1782a0443b5f869189d6f2d3fefe7a76ef3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
