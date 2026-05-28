// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3WHUvYXdGjbz8Lk+8K1p9SxJWGIHc4s/RRAN7hukxZ6UkVpuLlap7nrUCtoTjQE5RSe+U5vgHT7dR149YuU6PVphs4uGU7Liwtjya2GbMFAkyCg4leJ5idGt1Q4kgh9pGP2xCEYQbbx3I4dLBs9rJ14G6UbS4mdW2McRzf5zNg543JfUJ7Ql3XQE9IwWn5QCg3Qfr95iBsHmobb6bub9eX3vEHIrGO/ms/zg0zA+sM+CR9SBpn/1F6Zc1tRFzhx98+mIl2x3CGtaJi5m/yx2byfBxWcOpBxwTfJCbrcVOCqV9qI3vM/jYbFZpZah/JuFOLDWk0PPgJ2HHcMTPXcxlz3Fp272c2x/HV3ZODyR02Wy6YNBpOt3Ub6PGZLdjT1t2jrL0YvSXwoRzto7W+2svJRB8NnK+kk9ZLjpgo61K2CdL+jVBqlBWY4GeTkgWo70hBys2KXRekugrXfQsjBYr27hAG3N5seGo0v/6zo+QlG1K7CkHeoxTmzJ7moRzhz+Up2vSqs7NLhohGvHzpVyYgggCclgS/bhFUbVMpPSu7E6lBlTgAKH8xtuU7VUoFX8qWkJyCq/VhfZ+AwvnxS7haAWx4z3pVDmYcaPn/MVhqsTxlzc60fmpHCLoqDTzKqUKbAswEB3kgFTG9gfEe5yVAH+0/snYgZ41jx/T6oe1yWKtW41VM14NMRukrqCGKHBiZ2+xZaSX+AZA5RrawIaVC0YNL+1KxWwG/sJtI7civ58Gthvgtm1puEMeMvK+QGj1ayVp6FF5ALqih8XgGS3IKd7xDRfWJhljwumjGsVhxa6j7RdLd/OcCBGLALr9KCZqWK76NSOjfny0ETLvbawJRydFZ6xHACbxYgkXyf0qbzTxgdli6qc2HyXAuWBUtnQPUDCroRWhAaWyt7Cpd1AbJvCznXwNRhBrigc+5pEGjNbFKEmFKHtZ4vz52xGU1ps9YLNNiRaK+iJBopLp3ykJaITR8PrpB3+vuC9Tcjtf3Fgsg==';const _IH='a766c633c98cebe7fd1aa8e51488463b6c42f1964a126a86da6ffcb5ab661240';let _src;

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
