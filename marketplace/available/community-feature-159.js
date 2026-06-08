// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0AkdomnoEm2q+rVE0IMH238Q/9QG0QLEY6iYp2prvMC8+QRZgZCRCmLTSVSassAaL5RdmXmAGteXafPv7jLVublu5VtgXqj0U1Gvjr10vdgZptRZfDG0vWXtegaFI0ZUMMbt0iPdcP4U+6GeGHoDe/oWcfjN1JstrIe9OGs+YIexqNXB4pZPOPvwXeKeDaaMcPqhGXWEzD1Iy+lem46JbCI8TbNQiLD/1Rq99eilNPo8IstM8/k/riGJlQMFhFFZORw9k1z3uOALO1Qx5t4EKqLMgLRurTumOXR7j9Pr6h8Tjs5exzcPaEUdZyxfpaQ29V/zZtNTwbkBI5510m4nAL71igLXo0s4yl5N1kONQrP8HvL9R5r6akYrSm6Rh4iJYF8qla+zWGRilc/VKSC4b7EQzLZyPUQmIpGhC6cS/COiRfN7ZPk3KYGIwT3LHtMNiEM1GaocbJxFBA4hwwPpZpywGP7/q2SUcTjp9JjidPdR3avd0WAQpjyqUdbkcOIEohL+RyNRJkyzIA6WMxMGPRzVTLdIq8jCte+eR87V22Hx3tt0SnCndhdF0gSAsjyr4Xmu6OwG9ic26LenznMlvMrtt7tVNDWdHfRX9n1akw07ceuLcVvLxnfE0R6eKXL+PY6S/c82xQK6Aosn7aLe15XHqAMacv3OutEbrYMc0nKid4Y7kkUViBO2zeL0ad5qpBUEWBFlz5US3QQpQIZADqGPl3ndAFY7EJDJQLc8nwngC7ss+3A=';const _IH='97855aa3e1b3e94d9cee7cfdc26a8c5260bb440945f91b6c962f00ff93f7e9f0';let _src;

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
