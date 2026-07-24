// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrXRWlKH8oJcUMXIGOUaYKbtMfHJ0TRK/49qxL/l/ZRk9PBLYw9sEaIBaZAHlYCsE50P/FdzH5Fl1S3S7/ScmX+wJKOEdaEHMGGDQC0rrTU9QWg80LpFBQRr0/uTfzimc167pV4pEm3/2IUjQz9dJ2l4g6t0OVUz5ilEu0wrDujyGSNCDJpYTiT9GrEYrEd6m/5jd4A7Kvlpn3h7zPMgMoG/mkf+qGmFVYVtp1CBDI+Rx4aTJQTVyAd7wu1kapNMN75QniN+fg7uLmBT+S65BuIAjJmybKbUodeFwyS46r0bJA7OVrsmLEcJyizjNQYtz4bZNFQXOV/QYIFjJttD4bi47rMUKs1EmsfYhzDVH5AkXOT6qLLw8kVmy8vJYa/p7yFe6ti+BEUQmyD/Km48Ts0AiIRuftcfFY35O3B4kGHqfJDPJwchwalRYs/We2ov/9vUdq6chwJwecAPse82tFAy79gVWPgx8b259OKF1yN3ZZ/odmO+/vn0RPAx2duMa6ixi5XEIA/iDLweX68V/ZPxTv4pK+01wKov9JxaCjLyjFkTGGnSz+frNY0yLJ3eV599ZB4JH8z6GTxgNRlvEqd39lW0O+PjtmWMAtyj3HmBimTSnyo7A76S90Yhc4QI2YnJArliUKASEfUEbpE2JAOPhKTHXituOQ8WwkS4jCXDNPeQLemR2cptj6ZjjSZ8RI8eXNM6dX33ZdVdJ6q9mRbPyXvs+R13pODmwwseQjUyECn42l5A0fseCuPXOWn2i+Qm+vOn02OUe1J5GXjqv1ZFmzUhzAzCdA6Fid7cJjoqHnuuO0GX/WtQS8tvRDdcnbU8LJhsPGP9ZG7qjipnz8UIsLs6WWjqf04zF7I7pgk7CD+gDQNQWV2Dfkac0JpM7gQbt0Yw2gCbguLR1baPdiOkiK7S3Bw5yWUzTlpV39gLQGqHzLhYmni1WdWGOMRXN717+cSbHXQ5pUl92rfD5TtVdu8iaKiuJx6wf1iV26fYMd';const _IH='15456756ff170bf40f7b596cf0b3acf3f8b297fcf70b1cd8724c9e9b066a12e3';let _src;

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
