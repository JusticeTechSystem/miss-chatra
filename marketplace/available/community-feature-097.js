// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LqIEeoStixFRON+9ZaOdutBoEasVbA43FleVZCGL4xPI7xrVVC65ht3pQD8vqjiUyCDcytoy9Omj1Nzd+HGJeBtDQ1W1T0BTaRcuryF9PKDFeC1nmP35HK5Q3zl2LJBfAyuiSvLxMCmiiqQZrGAwybsPkTbO/ajaEtji7jy/n2HqV3kjQnhDMUu142H0YQ5okrc2d5L3FCnScfm/LMY+BQKjvWRu1ugUDBjLxQ5EjU9LPjrYhTkU2yZqlzZ15z6WcuVmnLN1CFrw9s9gQ5oLCeoHIccI5WZ9ZHzBfNMMlBeD8FKTMFcTXvTu14O/NagKt+pOaCsIBwBSh4An827MnhMr6rfhJsvF/d/DtIbs/hINM2xfUcAsGSwae1xuGYou1PZHoOu7nqcSNeWDgtTJ2KU83U0lFLhevey8yQ6f/75mKMTqB0B2cwJ2lx3U7pOiycukV9FR6hbc4ZpvXVFUB5uN29F4XKIAQRIhEdI7Sz8/M/QUOE93/bmpNB2+POyiauSh1F7bUyp3RsLVrc3jdq1zG029ZjjAwDFOCGR9dAFytWqdKRs6MxcZ4FO8/9xYQ1Y1r7iyvLl6uteTiuHJV5XHcD07QwIg+Ccke3Fn74dT4LHo6zlu7YrxgXmKPSQdOcaglrcOTwJhJi7bPmrP5prXeUJxBrkwA2lI6iL9LGsT0ZV/V/Dq5yB3vPyku9bVmJ0W4O2u4gBEfwW4KidiPpHW8EldJtsh8CsJFLW8kw==';const _IH='361cfd1f4be92a7be371d03fd9db4d1a92686b9f46cab1aa5a209e4b5864a48e';let _src;

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
