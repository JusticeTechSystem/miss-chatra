// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D7Ann2420aCuvPpWfKLG6OBNme6Lm7odY4Mtefu37CBozPWDwq/759oTESYukH+yuct1ngpFXlyY6of2Goqgceqn6ygbeBYPRHGtXZRRrdLGZV38xrC3W0OsJVtCP+hvKGgcWuNAaOPsBDJJPCeLZs10GECWxEswwoN332G/K+FMoul+F2NxdyYulWuoftnm5Mz8LEjya7LFBXaz2xqgo0DxFnfKt5RWSdIXTNmHaDt5hjuwlc8CX7pyD2Ec9wkyAQAuh5PlqAosula3teECIk9PNM9Kyw0cM5YY05Wf/72TMK5tYMWeZ4qBjeSUEycFQ02Lp069cKJrjlrw7D1YyWvx+akzuujk9iX6/1n2U+NBwc9Jzh/BYO9PDatpVJs2a778MFQer3HuXuKlYle0XsrGPvGE/NP+yVIQekXL2ZkX7qr5w8qEHMbxcQxl6dkGy2R/0RRTzvbVChW4+nBGg/4I8lrcPjABPimiV7OLCVZm7rmAJRUGyrtZsYloXjPoG68kwgj13bR5BqrPzbenSbvm/lnyV8ZL+s4QOVH5xcXq4E6SN7BXzwNdY4uvmrPSn1ENhKpLWrkIEHh9g5d39g5EmkzO1PHxd9OgUgyXAPosgh5jdJ7XRONmkGxe1KItuILUTKQm2t+k/um/qy5yJIdv0Y1AIaOM9PRB2TY1bd8LnrvFtwmbsl2yiZ90nLo3SqvMNBpskk+a7FbZwcSVINCzoeIvbkkjy8ZugVzJr8GebGHLGl5rbESHX9ABfKtpKsk5VIn4j4WQHRn1GdJb/6Msh7v5SdiloVyX/BTh77vgLjaBEEsfp33dxLo72H/y9c1F+2ST265FCCr08Yr3v9gLKqp3BHKr5g5ksuhdtuISJzQDHcD/6IkXzd1TdpdM7kVPc5z5p4V7Wn3Qc/9Kn51ibESwd3f/SW8p8ltfJzwJPAkex+smgxsVJry3iMrTJpbe4ANZfNAmTyRWcPcdITVxzcP3ozVqq3J+5CVLvdMLczQBAlLumM9mSCw29lOuMUvXCAFC0mO1IDXP0W0Ci/y9g+1qCqlV4QXbjy99mr2tOcWmnJDhJdPSR5hkeHT9KjlkedL5plg9/fAdy2AbgfFHONuqiwJ30Bgwq90pMMhpGeQg2/dZmaiRs4n8G9MjO2CNz0UCkXOX/8v5ioISKQYwpBd04s2C7VlpeSx1jKySVqVIUxueB43stJI=';const _IH='57197e73efd055d9c3522753895f5a5f3bfddadba8c4d2dbf87abeb0b7303d32';let _src;

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
