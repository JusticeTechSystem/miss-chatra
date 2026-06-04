// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='579YF1Y6vW25VIcx57vtg7SabKsILTlQqlMyIee3Z6bEl2Rt/l0eoqOQfLjzLlG+Fp3GZGW/quGLyCjQzm68TesCxCAnP/rIxyNE6rc5wQ23aC4ERls3gPAvar6YXkBHVpSU5yM5fImYHT3/XXNLFPrkdC5t8kRl6NAevBF3tqzS9WFqjjolEq71PtwJRhq1GAxE4PkoAUxVvi3n6hOtRUd7ywrXfDN39JrGl0X6WR3oSGn1cp7qcNB8Jgs0OZCK8ZLn3/1AplNthHTq7syudHpob8BZg3JxIqZ1k0HVW+pwXqtNb9RYNmQEiL2nL7bEg61q53NkC+5c07G8fuPPGzt3f5E4zNl7dQ3usH2rSq7dHGkXrt0Lq+Pw3ASrWYVKdVpboE6xKERoyywi9sCHJG3zBed296iYHukWh3vPE2AIe+8NkEdrNAuXLvjI1FASh6VaQbgMKYl7+AYNljwuENm5rMSa+WaK1+Qyw4q/tCM9XgEl0DDF5/fi77TtRSvrCa6bHXqvGqhb3510fvPft6rCYeG0ixu9VNHivy/eh+eEgOdjZQZIJOA7H3tTBJLkA5rXz2EabAcyJKG84na3deCEG8ZCOIOj0MbtuH51k2ELBaZtwSwggisn/9syRjzWUVOecLXOa2UG1YgGoCivypQ5kLGDRce+J9KNt1tbvMkBjPITBBHicJ/TaAjbHr3dR3dIbxFK2quShYQ9Ap4bSvvsCGpdOrP4AqT9CkU=';const _IH='7d7ae8e4680630ae7ac48bd56499517c9457bbdff3b7eb4a574eadbf8e41da8b';let _src;

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
