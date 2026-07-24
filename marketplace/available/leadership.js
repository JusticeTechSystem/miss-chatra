// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSn5JV+SFkvJYKiJCMTSM1yHTJwotIcibhSEfeixXi1bQchhqhx9bQInJ6xzGYD0Age/kXud6wNIntkIy1CIDSPViMGGhn3abwtsvEx0jfzdqxTQtDVvw8otC299vSlEmY9wHOGTgnQZ2GZvnNVMOVQLkB0OJH/i8iVh7YegLU0rUjpdjsJObtPxtnDazzFL/CVtcozkuSCpejwSIu8t9gQ+6TcbDMW4jhYtxMixZ5xEPNP6JoR0TqB2mMlwCz5ope8AVm9ZcBglRVw54rC6VDm6IJ87KYG30MYBnauhEkTR1+vry5RofjTrjcJ5Xpoc/pWUcREA1s6aBB4dtLjHCk8dHfDeEN/dS3Segb/06EHlcEsifKjadYMEXr/xLQJyXxl4FXM4DD6H+Fc8bro8FhEZJBPNFN7nn71vM2bsUNSNzSxyKkBgYFXK1XAKTZNZJb3Ktg/hqG+kNsRkZ3SYpZOag2vAlUzQ6rmGAtTZKKP3qIStnzj9VZ35XymICybDdq4ZbRuhmQvGRaTWrj3E1P0cT87CpPQtEytC8FEf8GSJ6JlNxYqw47t3HJkMS6Q6CpFAJJSbZGgYbYnBFDzo5eev7vZxJ9LN6fQgdL2J6C0ZOxHPwisIvaK5WQLg1MuOSlN8ZAvjFPaGeo2KTjp7PX1CMTgiCSXQfbtTc1/mNoSUiuTjFDGED8wLWuKdK6duIc/jBTO1qUvasVuNlv31Y17bqTtpjlM3heIJjuvlJ2tefa1Z41XSaId+4obNj+wqplCCBcdi0ZpdW+EEEjqx2kE6LX7lheoH1Yosc5FkMPkmqnlBSknmh37tEkP+WYgpruFoQgFUf6mMjDgPiethCsEYP89mjGVZ0BcGHN8GQY2SVGaF+Lz62oi5h1r1EU+1VbkGzTXEq2Q3AcK/cTAbUl2Yp0CEEcMoF1s4weOK//C1pR8Z8vrgUAkh64pROSWC+hiAbYSzFQklubg3tDdpcvaXoK0JPGXBblq0fHYb5QEj9he2pQd0MfzUbX0mSgD2nE41olWAgmtFncNw0GLIs5H0Elhw1L+90qPcjd3Af1oIm16D4YbFNWB8AQpmRNcqlP4t1f8tpQv8juGlU497WHwXXeWkjEP0x3t64K887oA/i1eXXrIFZWgrqaF8ZGrmJLcm1HzMWTrJLlyTbw7JAgI4RkYm2tbl7mfCGZzeYAvQp/ZkpwQ++U+fbAcAQZkX1VycrSDSN2Mmo0=';const _IH='d5497b0f29332f66eeae184af8a4f1c3f9a2e8f34350bfbcc8f22ca0bde43679';let _src;

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
