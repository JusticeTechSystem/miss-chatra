// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eWDG9r/UItaU5/9cEWJbRHxbPmH3YFYoTwxy7ycraaf455AZfuwe5M58uxbsctC2wAAzUAfggEjuVu6+o/nms5gED0UM9fQ1ab8+rzJMRUkoqATZ+IfhIrkMIbZ+7JqzgAstpFyidnODHVUh+G2HQzTmFbLKYiujSeRSvYwhKJUSyirQkz8aKZ+213I0rRMXr5I+Q6RBUALnZFemn9sUUOYPdCCFuqpALQkHmjp5gSn/3mAa6J87AW7iV8sX8N9HxNyR8MsBQomETczwGB9+cL8hbaCZaUFCWL5UVhHfIF2TbE+yv3cjRDqpzzU6X9/ssgJ7T3s565gHfzPHdNuqjzDqlNpxE0Fj/uQSLIeHq7sboRwoKeWnFAmppqcK9D+PmVHe61KKb5W7pY0gdsFrjB4xLS8y9UhL0B8zTnNoPunjQ/onfWuThtW/T51dPpOPgOGaHdEZlil3m43K5qXMU015T8/dVfCfDPIRfBQ+SKWSQoaL/xJbSuHiTbFnIa59/DiKNhaNRewjOTnazWnFAOcPpjLyyPOsgOwsclP8zxLC4rbz0hyokP4Rlk5H6GlG8+5IonJZ0GGsXkkiSCIzpavNSxpLdev1zr+gX2AWA5Du2xfEEm7qu/QQqEa6pH3pNjxCSVU3cVe7ubtLQWl1ncWeCaMDy4586NOXNRAOM9vODLXsmUKbC9Maavf/wVRuOJ6L72bIXNqaImFn/Cuggr9kcN972rAv';const _IH='aa61ed26d5e7d493074df5152a5079e5faa01c27e657b83f2180119202bbded9';let _src;

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
