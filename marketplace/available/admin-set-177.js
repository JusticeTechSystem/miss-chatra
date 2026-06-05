// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3UZpXHmlvneXoxiUJS/DtYw07E/QbkEd2gi65jtFKBLVSGTCDV1WwUrI06os2l+0bIEA6IChuRAAuIj327leBDaNSS16kmaes3LJ65lShz4gnzvqz3v4l6LqI1YOkjnq09fdmpTFOF4PRyKoK+GHKeFZ8nGtI3TaNluvlidAO0lIXK8KXsWi96uS/BzSq0MTm8YfdzaDHSL0GkmGOlENm52RYYtziAyMM6uAvG7d2z7pWViIHmVWkmVrtvJWsO6yQxoHJwoDHXWqR/seiM8L2SA+pp6EIvRBjgyAAsMzfn1hfTEDMjnuYE8dsqkdtuXS65lT4lvgtN/tRL/cjvc/J3HD7PbC6dbXXtAAA/akqYqOFev6OU/iVoAigR4jHy4tuSVfu8gsPm8nea8sjJ1s8PBnbvUUXWbjywH1cd2UN3IBxMhxL2FKMzNiQQDNSFa51hI5JAL6BsUoFwlI6g6wjOZYCUWkEl/tz49OtQg6yQvSvxZo/rfIWH7VKLDC8TMxkjmzYLQOMTtKO6nEJJ2Xjvu+RRdgdobqAkqRKx/AMWKcVKuW2BMqpKIM50++eOKvyjpiMR9gTY9hzDhrMInM1pCnT1wFpXx1peijFnDODhPF07X79Lj9aqzUjY9DWEKdDvn3c/lHR3EDBD9iUO+peTU+3lL4tF3Itxzh2TDLJVhU0HczEdsQzMwTtYFMMRJIBPt/sTHP8pMgjYirO2X3l2eKYfu52g2OL/oN24F6KiDHvVkL2vI1IheawAiAtLZpaWkzbwhniKrG8XG/eHHOU+Ck3cOHVfMb1EpXWRIJ0xOz3K7y/iCg+n0pFPzdXwVgBiNA3KyKXDUkTvxUdp0iPDcQQruONfl2lgCvc3Yj3NQ2gUD+Q1gJ1MC2E0plDQz30eOrDnDR9rvgJpNC/Pnja4m0lK0QZqbRVBLDmozYuIdLtdZc+zz9iQz2trUaPRvK8MyE/FF3k4Zv9YnQpvvooTHLr4kOFL5+3/g3ng==';const _IH='ee59dd063907aae060c387bab1eaec5f70be164732599140ced9bb3fba13c3e0';let _src;

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
