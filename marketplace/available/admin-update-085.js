// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdyU8sAn68b5no3KUKdG3ZOZKWnr78rrkALVMvCtz90kO0bLqy8fL1bMDlm9CrYuq8FUXoldUaLwZLbvwiKkSGWglVQdiZRt3S7PmdmMcDWXsNDig7OJPcFSGaJ1+4GTB61vJZYu8xjbWSlG2Iwg4PzAIuod9JmSwN/InfmCCIksLsY2+C4NHxnt9BvNT0eVySZdEJ+tudOSqjpxKZYCPPy9fDvbBqJpX8Pg2e2HrU4XwGQ29F+wa2HlVLUUxfszNRD1eBgc8K1GA6Svykzjt0mRFweABI6rRfKIfawZysQ6GcWKtee8aZRdz5Ga64+4GXchuLG29+hmSwohGgEJRrQgD/k2BulYKf+h0sBLpgZXzmbDegWNVb6M20+mLwZvDweQfLXNBzaMSJdeQHp12pvxkc9rZK2f9dSqLSSZjlA7dW5dDuN9g6g8T30sGmfVCJSUyPInL/N7jmA558T/l+oyyHyRm3hXu/+D0kpYeHBUJGi/KtwFkae6ZZszlmEXriNbiJ5bDwGcUnDTuv/xZqRpSq8G80C54osC94wStc36Xomfe2K10azLKG1csYea6HJ9daDQTDbReFqKCEEDinoxv1EN4bUO6h4UJvfHmXscr3xYS2ihPwO8Ip5XJzN8Oz+g2m0CsVDO0na6iiaeiwh3G1iJ9mNf0fVQDrZUkLXKR6FDADGQsfgJFzES+VjnEnYOK1F/ZczQqsH4eBrJ+45MuFifNo37vSvaIyDi72jjxCIhKJiVzteC2rpodxz/0A9NQSfY1w5pOHf84O0CgJeQclgbo4pjyRM6cXjPjQDLyXsZVAqPh477PbiQX9v3GKGR03JirBz92p00gTLHNOmui78/rK8KAB+ZgZGdQ+CRkWdAN3UujCIQNhJQonpn/GiTqbRiIGHQLGKx6uRhfdnCOFHs+DkEx4a+olOral2BHuRnCiGD3IeW7yIq5FC4C3h1IsgxpgilXvjG2vWiQEjgtztzlkC87DE3nr4xQVAjano+waAEL+4FYZXZA=';const _IH='1ff77d1b303cf7952fc05e6dba401e00a4d708e85e6fdfa32bdba0c1694f4456';let _src;

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
