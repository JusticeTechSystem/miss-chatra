// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyLpd5kuv+ffyI3kgnPIhovC2q/7jSPuDFXZQDFm1OGYc8Wd267CdXSLzOCGCgUTAwFW63BekxwxtYdTPbxWEQ6onvQJBhvJ7/Sl0mYEl/gRLnnK88ZaR/ftIYC5eIVGtlQYWuz+ZkA7NijNswToKUmIByKnYhmZctNGf3NL1YwRVpGjJeeEK0xECvp+Ko3JCbMxH66h81SGpLAH3eygrxVECu6UunnfDeeMJuJCJhZX9C8Jk3pL235XY3pCsl7PjzGSe/LIwy8/S4PbTVzwiyUPb1hu0igKS8pyh0uZbhyouCBQ84zBWBrzMIMgLpiYlPXK2GU45WKxGDmPlMpEIB4gkyCmETK+ge7pIn/3wSKPVnL4/MO1xyhQ26EmzA52Kjl9l/Ik0P42A1bSjaK8sZcH4flf48PWTxw+0QaVNq61XPAqKrn1XjJX8IZCQsQDJuN91tnEvpDbk3Tl9PgdC1QC3s3ZAjIt9wK+du5HYR2udeROthlt6ZpCbO7GI5UjpQn13/jTdM93xCtSNjQvCMTEq9Kf+htV4ImJ6dw8QXTqD2q/WDKrLrWNCPvuZE0KA829wZtp4isJaaXU/PkOWrf/JsXgBgX7HrmTS+4DT5lrKOwAS+DN8/ARE2NV4vWi/D/cJ9B3YElzFaem96gdTFXmfNaQW6uky8j8DzeKQ/VbR7jzRvg1iJWNbViKbKRdQUm4lHH/aoCVt5FRqtFO1rTbMltmFnKUyx5NFHVQ==';const _IH='7d44354ae1259868dceaf6efdb98c52d6b103980448d554e76ee826b6b1342a0';let _src;

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
