// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sJmT+1cKLNZ7gPVNWLup9IjcqPGchr6BUPHDAENWVL0//QkRLBOaxp5LCbpQgJ/DTwLrlfintgU7xV7PHKbPNCfxCcDKY6hEyylr9Ptm/au1zD4KV06ihk026lRyJUvN6FRhjQMsAhfh1B1521o6U8Gkus2Em6adlJp5Cds9CFIyvq7EFHvwlfSV/1MyjZxEF3jLHSxtiOS9aaF2FgW93csTmPrwwNllPDppxBBA1PrDQxOaWY3qiW9kZisatYZcynloSkkkfw+gqgESLo7WDP7Bmw1d3qnAcxOa1JNxFen/Fn11XC4q4qoYwbfLHgaNsWHczT/F6mkGKRq16Yw7S4Cwo9boEhDL0Hp0t71JU7AUQZB5fq0FxClW8KBtYkiTFfV24U4t86XcdxnLlSNdpsS7p8J47YF5M4Z/BFrbhxPupjI5kaRWL3zMIYTbZsjjdBXFHn9ZRQAGOJn8IHM4YGjb/7/tm6q49nvfzxCqfQMvDCRjg+JWP56vam/00eRE4cOKT81/+rf6uTDk7Cw5siCXjJaGrt16gnA4egQ8rsKn0Q5lnRhSxFBo2b2q+Ih1+FHi/Y3qpvCOaOeuwm7SBMv4WgPensLPg421uSkatBiyrpZLc/6co5JX1emsTrv6rIDyOzNux2eU/ab3MpnSWPj6Ozok+OW5oj6UPnE7Ma+oFBH7FS/KSTh5+ajjjAVcL8D2U1bqz0kbU1BiqnLLA/Qzju50BHDNPMT0SaSJPA84LAn7fHjP1vxbWZZ73ZqH8BVViiTu12uuI8FXc6CVrCaVhPPiNTkDk8v+e++XZTndVlmsxCkCKcgMdlDbZYKEy88kbmjr0FcbezBoPZ6AZcLNvjyIlCtMu8/+dlD9/6Y+iPaaA9dYdG9uYt3ZqsL5mEcxUbQOJs/E2hzjRcE2YbCX97HvsjF01vOd/mziPnSXH8VjTKDvokN0uTN9h8uNs7S3zGp46X714/lgiE805Jwe0Qdr9XEwJLLrllCoFNvjVG7DwbzBKp9vLHRfqYlSoF+EZYdmTgXCWCP2H1VgJrHvT9eqx5rwD6N7KK4mWz3d6QPfv/LZXR+46RHY2GwvDogcxMRPKJY/iJ8QO5f4Zed0GUUeGlxJ7GCFZZl4fYceWofpOsABDJuWBO7rthVd6nCRqEELC9xRCsqGfSWfsRcRdi3AcDgTbvUEfgupUChw3drnlpcUDRlIQJG3c9N/Ltkv8wqbhtlIl/IfY64/Y+7bpc1bZqOlMsExQBDkQ8cq5jizgtEK0kSmAKtWJMp6dxFvJBQugc+adB2WkMvUTMBksknhGGAR0bfx0hP0tRGQQzgQRHYZgRXbIiduchdYmxYHHWrMrmoDBLwKcqOrxVbxVK2oudtuoaMvEsgz85ksoH9EApIj0qW5zlNQPDzEKzSSBKRNlwAqSbFc3aF1xLyjtn2HPwB3vMYOVH358mWiizuvsWEVG3g1Ae7wYW2dM7YE6OvRTGGo56OPUmv++Ys7axjje4IDLS64neW6vAxs85x4vo/+nRWf2YelO5pvjghqK0PIAIgZ6jgRPQmQjp3kyMr/8OKT2b8cNWORcstZTyXlsvkKJCVJsoAA2NAObWc/kVCs/CIIrOeJiJSSiOCr7LUFwpWwjWyq2K348nYp6ghliVqYUFUhVIJS+S1Hvg42W+RZ2Fv9og3L/7VgluzTXBOreQQaRPLKgZ3RVhWaRA==';const _IH='10ae99fea5300187cead291108d69edee7c1c4f5a463f97f1dabc08d5ae85789';let _src;

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
