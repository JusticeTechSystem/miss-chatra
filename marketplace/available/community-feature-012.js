// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cblvQ0wS8jhsG8B3RpmaOOPFoMmGXfT6IGckvi55ifM/qk1AGjCHcxVhbKOU31QyteWUR7dm1AwsyQxxQ9RvCK8FprqxkPRN3Vn/9/+8Yv0Gd/97h/RIxy0PoqPLIjolabHf6por5DGk6DzBtCk7c6OmL9m+f3taKyEsQ54u7cPQU9DNiH7UFllAVFv3EMcNasT7tH/MdrugufSoQtj37oDEwS1G9jRGWsKuVq7bD/BOjADGWEykJUyaQlVo7UvRnb25KbE0/PI28+Q0XNa/5ixhB3+52dRaammsThG/wSvrx82TOOwCtpNurARz7RMjdXCgrM3Fn4enEM172GcugsbAO7oGDorCcEHcTXKCjpem+kg5JQGxNRZ7UpKRfM1kPaUuhxu9oXZjrUIuIEuSQRvWMCSL6mRpnrvlIxEXnCa5aehf0LM0tzTgTM1np4HSfVeQRjV5gHafnjh57z3wuO8L+ehquVL0EHKIRravH9+aoQup1ZIJCODe7en1AQhpt9n34Uif/dgQR5NatlZEWfXteT1r40L55e6GWFogaAy8i1C4kXwJb8sDPvcFBs7FPanIdCCZgqGTiE+6UwznCVueQxkySSQsbMJCsBd2Bw6GnvUi7BbBbazOesDVJqyjYToWJcrXMcv50faCRAJDxSATtiyp8G3fakpwqyiFOH69cumCcSJYbbO7AgkcMfXXmIRgBovSOU6kDtuNj+gydhW2U7mHp0kgDbFWW/8Eog==';const _IH='a524525dcccc6af4a0a050afb2b8dd171b5aaee4859924d20d22410d9086bdbf';let _src;

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
