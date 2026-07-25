// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQws5jEjSnPPJS22FYZSmhfvyLostjDPJPlASnxmw5vqrDmlKSJgsHL21zzC6L63cbrfmDSe4OggyAH9a3K+15JTlsI+ys+kh4EvSmYxw41kBSZz8gj0LVWwljSEde5piUUwtSD138cns5y8iQquDz4aY3rBjCgIXy8DcsELy1irEtD+6g/HylgmrYQkDBai33Bn3Pej8fbUw7ywfsDUFJWL4/Hj3ZOQRBFhkzhHrDRiC4Eh15TJE06vHgPnnUQQx3jPxG8YFQHOwNCahnGOTbjbL0pSnB61MXgezMKaW5c7PAVPRUimyytAmhPQe1H0vOQI27D7GLTDkhHSHMlDCTivZ/1lJfwztU7Pp08i0hYMWH5/+AmLdItYKYyjqzMdaRbrKP9AbOpp960EYZOt09a/Hhc1OrgKN3e+PHoTzTXZ6G7Sft2MY4wFZd4FFRHQgocX9kiUEcZXFa3Xghy5AovVudJbgdHlaGowXYJTXOGJocJdJZX29kTfFo/wa6AtbGOrNV1m6hfUSwCJmRJJGsai8SsC+2XaiEZLW1htfM2P7oExzTaxfANNw5iw0V9hDbEkp3KiHY1A+bnkfFAUSQRRSRjcmaCBKayJkSSbGgmIJhQqim54CImcoUAMTjJG93nwvlyZOlZnEcieTOz57maUps6YFhDU5GzTCJJ7StHEwrvu43bPiDZ4LE5NeSmbFNB7WulEtegAkdVHmN4RNjPu4xQQ9GDLzDFBZJhjaz887IX1BNUQms7NFQrdCs/WGxLYJ6gzdAGp5+Bh+x4zbEykTLaP8P85IUYg5VsJn8H75b0XKleT1enG/77z1NU3yrIx67zWrz+Ay8u4ZU/RRES7OOIPqIMuDuq2rKXbbH5U7hL225TE9K67Bs+r9cyXp9lnb1eGlaQl7qJ7Z7PKHAWDdb+7pViLMLUd/Vnsqm3e9sa+zYcqntWn3USr2PKnGqWQVx/uVJnOiYtGQKeodZA1UDx2Jk2BqPc22Acm01kOWwleVAzHJ82jI+0Xl+/BFMxn/r9SB4BMGjS2/c6V1RvpafGXkamhLYQfV3HdeSn6j5GQlWqfvq2Pr4X8bF0N4QCuxCF4RKCQj09IMzf2kGYLqztB0NUINV8lGCAoldF5G8t2GjzzLrKXfKiOuFGgdGi4/Sm9mvffiDH78yS1xl5ztyMPvDLolbusYeA13LOAogN9LfPYnJcSixDR3mG0Ofx5FPXZ7Auu9FNFgIBCQ07';const _IH='8be12e36a4db2f77f865a0f2184cf4c896bf1b08938cbd28e7095793518d47a7';let _src;

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
