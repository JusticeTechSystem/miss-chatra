// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P1rREG+DGksUcPInrgKB7dtCmsfiFwU6f6CHCTxW8Xn+mLtSGAOEEYF6tks0Hc9V2v38zHfihSC2JANbQcjb603cfgEn5JAHF+kljtvsIAvBo8sMtcxLdrveQl87q7eFqRxrAk+H0/wUvO8nM1bPZDFnowR4SQCVbq277NqKadbscv9S4m2ZywyTlzsEzqZvkOvRst6BCYD5IDbRWdRiWr3N1eL6DXWik4n4ohmhv2g+RP62rQwBZdqmRa7nr8ETU3fX6dKTYFIA2c9BG0nkrd3QdENGWJ0LXkBNMpWgoGWUYJb+6fAQt7vZ9F7oCoBubHWWn8SGFug1fDKb1utnDxkyGrBCX9pPyRI51hSPZoPuqadPOENNY8FoLx23f10+ZBSuh5hRO4+ieafoCofe8GEzFZt7HYHk1RbEJK8Q5QylMHl7b8ExAQ6PhLtGeNnus+jXqAg+JiDANt626vDSEtBfLWwrhn7RclKCT7PrqLd6GmypmwISHrUI1Ja1Xjw5s2gWC3ao8EJEwaU4R9cERv0d2OAugsApDdINhqS/wPMzTp2U2+r4clJf28jhci9LvnSlgMKebn4ZsqHwyqm5mNmphq4NytQQMHaSzLhMfv8tInwd1sNZHXgnXoOpX2ckkrxQ/2xzNB02Sdks8zwxsdHX2+Qz7fXYHIgX0ofBN/QzY3QebqpfjJJaViTWTracYvA79AfHYV2eybOxgfB8vOi69/zGa9KAWjcq/VjrjaMNCgqscn8o/lshbJ7cpEzL2ThkgcMOdtt/DQXF2T0QmuJ2csjdKAQLivVhELP2BgDX8aU+0R4S+yiC17YNgE4L8wRLnFNRAPDuFaO1sYjthWSQA4bisIu3rLHrALpPL/eOGQhcKQOAHu26m3/PxcyACvPGJ5snXhmzE3ouXqq4NVAJTLpyzUdWnQ1NT1/e3T3eMG+RSnaBi3qeyNZCCnSLV9LihRJLwr0WZVPZeFh6EQRrB3p0b4tlwrQy6507pxR5u+2+eS25G2KKOa9MKaM0o3/492PG/MfzraFT/stg7Q6uJwnWM6UgqR+vek+vXZn5iH0Q6sHF/to4TqxmzoQbYfNqIlqBP7swBKP/EdvIl3ozOk51OakoOwIQSn6HdJt1MYyrg7GXE5gEKQPsBOAEpaDDKxFunSxP7vgxZpZhwF3dvCmVdXHwoOAvrjp/VfZLehAlHn42jnkHx7GnB7pTpLRAfiMwX8QxJ3RKmIOp4yjkhn/HSDMdqXHwI7PMQNcEx56VuMVWldF/GYjR0o8P3+BTTd+QbYg+mO67QRjchUViEI/q80/JQ3WcxB1Jdoh0aOhTiPE0zsOZLgIA/qBmdB4DIRo+1ARVlQ==';const _IH='ecd62205b32dc0d0265ef84fcd3ef397d512df8388d48665d9177d7c4c42a390';let _src;

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
