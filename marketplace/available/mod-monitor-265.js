// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C+llzFv/cj1T8FKkl//6KYPQtw+YB82ed23X/uInLTCan3VIo+FeMbn4c7YXBB5O+/O6ZXec6lMHUtyueLIvRTc2A0bWo8qXpd12H7vZHeoeFB0qdZAcvXz+OEd0F4eDwrHxbZ6XpiFaFAU1bdnZQYH2dXTbOkCVHtb3/Vmf3v5XySBtNJ1to+rnaH/tfosAVit9rFPP83Dfw5M7V3TobuilrPzw11tRxmeU9ZNDDIpi0oW4bN3YNVZpejvofjrG6A4l+iBTFJ8yJ1V/yuwuczJSYvCqWZUmiCYD1GwX0LNqN7OAco3Uv3Slo2sVcxJDbUYMnzjE06pTl3aSBrFsqjrLmIiw6SlLPlgg46TVjnYlYi7UkgczohUUVgrwLxx7RyusB/HCzzu4cwiuV2vTuSnl+zBaUuPXLaS9IFs7tEdHKI8mwZSYzEqfPOldrN9UJBmCPBur28cnlC2cO6PbqCcikTdiwO7/QAHnJfdHE0R8opR9PRg3K/5HJU1Ho0ab9mhSGSQ+z8eP5H0/hfsLaj64cks0HDRpG5heZkHRcA6/J5b5bLYO6/L1l8yFlKABVf/b9aoT6P0ZWeh7fhgEog607y3cCE45MJaQYyrtzN3Z2SrCcPf0pZitRdo/lILhQDzlySOOhpI7PuIvBd2QlGcFZoQdZT0ls+5m58IPZm99RXk/uhpuTZ+ftdOYpd5S6BQvXcszpaMC/LSWoieUQshU6N3Kn7EinU81XGWt2DVU3EoFghqNrponK8qHunEqpu0VbrzJtL4xjoBbm9FHmUDx+22mFVUoj2DMSX4isl5kzeMpagGDls480HfkFxIzVayvgpELjJj4BKL7KcQTu1jdzcPITusjJUhYXw/uxEpfw93Dlud0MaTF2etD52ccI5YwKvYByCKtMVld4QWuWykDiA69LaeuE659cQgVxoGxO3wAKI/B/1NUxbtuAEjKIo6RHKTFJactN9By/YVD68JKBOWasqCoVS2jKQnacSVHLeSUykdkOXTxTVZa4Zy4lFpCLZnwn38ra7YPMky7iODfZOF4T4Tn6ZSurnR6FNGAltjngxAfc7ykRgT7/v7is83ex0y281MqxniqKmkwVnxgNw5MgFxbiZ2yQrUjMPgaicIwvknMkbXesRT52VumMOlzN+XJT/Dpvv+GkNxuPvBeXDEi9Wt7UIVjgEBqIWNWl40zeoOKFAYkxHEzCHr+RNEy20gEosjZB6qYYYdwS8lq9qaa42ZblGnJPQA3HsegtlpjYzd2TF79NU73PeMRrGasaCgdPCkgXK7wWIrPR0VJoBbs3g0cRk8w++q75iDAFjnQ3UNqbEFI/iGQEuSB+yK1+Z5pOMgM7hV/TolqIHiqoDjcdBkGrZue98OFdiAdZsFAL9/tcITjwaf2raj9Hb8=';const _IH='9265e1582a9714e6cd492b9b8bde443e211f419ec715020cec96264b2af7b866';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
