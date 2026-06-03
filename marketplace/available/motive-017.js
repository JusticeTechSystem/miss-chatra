// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VuZ7lmkmaX7vXLjWaI40S1V9U04RoxbSH4TNGq+BTkuXG0bm7/IUqcx8BkDVkVRguK4kYBcAwgEoe7loteTPtS28a8G2J0ZIyUlPncf06hqsGjdmn25pKP5R232sRuTb7x4+Ufe/1CAD/brZQ4B/bUyRhIVrMH7vZreRb0ivtAHWZsFBZkWYjukrUKO5hMNcFdL5Ovp7G3NkIdW8RDXwzGfUUbUG+GdYnWBp2lqO3+rRdja7UJLViHHSCFZmt0cZIY3OHqJKbVTOUdkebgEpjdzEMHj3MHd1QI31TWV+OhKG2QcgjMe1gmSSbOYu37k4qQE23ZjcuQ4Wn0dQ6a2acIOQcLktE1zRdy04DkUCXsgX/lK+fmFCTyOlDKEip7RqQKQ0m8Xf9rzR4MxzlV8uKAeEsYarZeNNAgW8s6gbniulVrRY2V+nXpFlmheDBCnXd2ZsPYYk6O9+oHtkyrPyAUdw3ulEGQCNykUi6gwI/wHhRevVilrw5XyTBKOieQ1EDhNuJfk7gWtUAk8Dxv6HEbzak2c4lpWfct+U6GDi5k0Xgn064l9YzOSvkSC8ljuxngPzIBEzeV+tfUvm1c7KeTcpvNrESat4tZ/zz9iBq6L5EVkfbQmFhtxPMw9hoIuDg6fcqjalA/RbyfDrnz4ZG+l/rIWfJJx951U2SyEBFSkqnBuKGo+WP1T2eGP1DUI1D/TSatAx0OfNmyPxjPeFTNQNdLpSZnb0mBC2oq4HksEx5PQJx0JVYjUvUoLr8yOvRSmM4SLaV+XfhVeRmHdZlrVAhoHOfVsok2wIpMVVHX0HIinGPf5QjAugPxCHgkNePVkkbNkgvBQziP5+kEVI+z1RhNcCL2kkptyORD5b6QPp/x844SHlzLT/bRTfQQnHeQQys7NgbM86GoxmDtMcbWf21GjdE2IYv1qgfU/YHdD08RlbVU597etVK9lDCrjS+gehqWCjri8wrdbJweZn7afCaqMiJ1QYetLb5lszXH5UWydWRJOfA2doUp79uaisHgGjYB98tbHJf7AXdNz9Bsfg';const _IH='4ee0f834539899148f13e454773f31ce12bfcc21eebcd3ac4d50c719e0153926';let _src;

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
