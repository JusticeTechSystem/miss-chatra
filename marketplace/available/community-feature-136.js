// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FWpXg/S8exd11nKqMX8pmoFktdlk3fAtArL0COUS+Cg9YG1s1ZT/PCaOzA6mzi8H6X0mO+Cs5SkivjWAWK0GHzf7OKurzpKcHCJ5nl0K6ojH4UxPNSLFU4JtQ944Q0+BSGAm06XrNQ80lK0puKlyhciO8s4x4uqY2NmlWQitS639glPaHzrCFBMzRVYvCYmkDqL3MdB1cEMjKrWZvy1g6PSTXZe4ppLcis+fOg9pg9c1cGib0OrERKOX/9AIFfquI86VbdznhowJOskxV/Xk9HAFqf2fxa52qNdzDm8SD4fyPR/aKlSd67uBbRC6UGu2JULGv7MrF2d8jn7JFjPLVIxuc2o0QjIv4iOkcV/wpAQSxaAjrdr6y0FGArDqBW+b9fbnBjAstkhHQOkuIH19N/9d/BaF9J92cUiIEMOdudJqzc7mQ2qQQ48Q8yZoGqCivBXd3SMWn16m7648fv/tQbGWDFmmSmTQXnmERCGrJGKiQF0H9Ji/eyxDI+36wOMZB1afd+y+DNHZvwGSlsfdcabqfGmp8Z3yleSTN4ANT9LdpmzqcD94KEg7LrzhSfxgzc8vndT0qk8jHHwo/mnfUpUC3+M9/RI4KrlbFLNgtWk046B+fmhZwspnfnkC+OHPrAX0ITY6PUJuIi+6Kps1Vqv+Hc4P549VtdjNBlcGGOXCEUWsWt5aDb0UoT9r8jXmn8ET22YODG8eBz5pwBDogHgHFotrokhd';const _IH='d2a5208ff1234d489859bbaebc42fada98bf3c04293147ff03b4200c848a9549';let _src;

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
