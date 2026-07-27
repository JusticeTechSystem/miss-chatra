// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSs1ePZlxxC4y5O3q0R7kBOH6btA+3Oiipe7PB87BZF62+GxZoy0W+rsB4c19q4uB9EMoGlWmjqjW3Hxb5fj+zHMEBqUriK8hj7D2Q5KFg8+Q+7zGO2SjQDE/iYi1T6KtG7JEuHtQ1DC09bKw0Uh6B79sPCNg0euiuX2ZPwRAmzQnGQ56EJ4Si6ot0pC90lN2TTNE2sNwe8FBSXQYzfQv0H198OA+CflDTxEaPRYbsn/e4aC4gjNr7PyNY0mS/eskfVSGF3kFrIkVxm0yOgel5oiuYuQsvNjC7i7TA+u+hQveLF3IMlwu5vzWHengVuy2OoF0V8M4ZyAAybRuYoyYy+kRvEHo5bhWlZjsWtzWfQxSwQWqCuV9ac0eKHjH117vLCd69tC5wU8LE1wbu1D/G4E/oJl2ZlLv5wGSIDwqhEZ/tM9cfzsPjYTO/kmTStv/vLrw1JQv4vLNrUkHvLCcvN7CZI8lG/TIJ2FjNnCQzGqVQMdSbu45+Q5gQrtkgE0R6ILEGfnV5K1pB+IxzOEPw87ITjxbPX7oGsfHLHV6YaYCErsh6yl+Tkvu/lOUDUgnHv8s4FK1+pjhv1hX887+WatSZNpslLupXmpNQbEP/IquxduiRy68Nt4i89wpuyr/iIPfH2dW778AjW7zZwaZhEA4KnBcVihbJce17eliY5xKE448xR+H5ykhF31CkevXDu0AzSVsc6X0zLOw/14iZaNhU5njJSWc5bSWkjKyVv0lUue50pa3DMKExvM0PAFctmlWUChHGO7fLJJaz1l91YV5LJIaOivCcy3JuLrPvi7AcFHP+ddzgPhTm47EtIknePp8yh3BciSpJ9Vqx2bhuBL7hRIN3eymc9bkEHW6zwJju+XYQFChWnPppue7pZO6prxAdtKqi344Vk07u7PgVRVSUrEaJxluehPY48fTmfvcJT4HJ2EBr5cfX4oOKFLybpFV6i1bcqJFbTMVPzC1EyuIY18BAX0QZs9t8+uM5wYQ+PtD1HVPdTOQItBlirj1EJ';const _IH='6e79dabb863a065e65b252169becbf657e28bf3afb5d4da54a86cb5fb2842360';let _src;

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
