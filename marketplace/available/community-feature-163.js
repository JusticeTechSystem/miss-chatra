// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VQGZBF+vTpffRK3MAGRISimg5NNzO4VVUJe5Gu3prL9GHXxT53AzwCtfg82M0BxnD+zjEfGanBiE6kFAi0IbQBi5XI+7b7CGUMw/bmYx9dchb/GzDqdvuxoEyLDWucaTU0ztTMJzS0AVbi/e+dM/gQYpZ91i/Y7/QMPyJiauROMzemA+8V821y+LwIjtK33pwStozoxaXZznS6hPqZlwlJ/K9cANe+TA/qwJpMz2JDm2+hsiOSB8JZhxXBKZWG3Vh31cktFwYmdhfd+16Q10DhGOoQsILkladPl9G3o+rLGliANg+YyzK77kAzbUPsp/wSh4Z1l54rk539wP33dStJcXmdGZ5oO3LbLve1aDXl1dguAg/ZSi90IDRXg8NPoQehXN2l/AM47Nu2fFRInNDOIdQUQgN5Uh76p0pIUnR3PrUwGJdSt2CWkO0zQMKmHK2I3/Wb/BEbe/ZuD9+PjqvS0vzzt+Ip7CGMCs9XUqSD+Z8bnp1gUtzMIwJjwghv/TMItnmpVZ5AiKU/qL4oXLRbEdgwWwLqMLOTukrW/mwp/Bh+8DOlSZbtABrK5UbdD8Cu8avx6v1Ip9E/oQPdkmo2yc6OtMz7AEC2m9UWCHxqm5THfp3eK8oOQ4/az9YrfH26lgU6GmMK97OQBFG4Gv+za9Vn4JZAKeNdhnq2W7ZuwCjieUs7oS0X29qvjwyI1kOV5Y0LOfjRrTtDbRVpZjZLjcS/r6UT4SVJPeLqA=';const _IH='aa061b7c758a65199aa57d525de9d4ae1e48d61f2441422d3902af1c28fb6e3a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
