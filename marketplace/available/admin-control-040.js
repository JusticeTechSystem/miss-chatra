// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J/9xs81j/XVf8afFrFu1IYcnMxxtPzSrsDksOuojBnqd23fcCrxcR8/s0Dt0K1GOHsW6e2/l600HR/m72KbToXWgkWqLEum5+77vrpQWtAdZmQpsERPHDMdYhNeGM/0eftl9GQ2sStkw1tuYZujghcZFHgE4DromAsKjtbdza51tDilI4GxHwsLRdsYJxsmE2dS/JuN1jPBdEMmVPqIGIEzbINEq1sIOGOQ2N2WFQMx8EmiJ9P7I0jeI5X3cILZsvnBD/CbLWdImyQToWtOT6pfTcX0Z04BcXXXIyQAmXs8ezB/2FvqcKdr7NzxX9Fo7lqDnA23FdYCi8Wp1bJgqeO5Btbt6LRg2+dVyx3bmt9WlTS1mZ4OO8s9MZLT4W/4098toJDqlYBibaKokIo0MCKvzChMl6FiWzRq3hHd6hZE92S67X6dh82mEiLnZxJY2BkrXIKJZxC7RxrJIjRsfej0TyEv5xTZegeKHT8AAL9YSHeN45ko/7AMc5+JERkSnlvxhJMFmokuSaRQkNpaP1CML0rDlJLipQcoSDJwN7oIpMv5DHUoFTCkNcj39+kD/qdvutK8qVlBwRJQ+4ijXAUHeluu/lvrW+FivjqPmEZn2JbaNPWckUcL+VGWJ99ghfdE7i/iTXZ06IuKWWYwXbU7IQGD6+Kra4HiFyF4i63uGe4Rp0mptGVMq9P5zfjRHCpcDCOEGLJDx76P93uG5sYeh9/jDY7kqGQ70DsFYy8wfs6wAcTq0e5A5GpGTFxxJ+vT5jW7UBYhYyalMbU7gVvvFqf0QK8DBZissbmZXAg98H9FyeFg+FzVFoYiuBeEYbWDwb2KHFMMk2yKbGq/GEylLmOHPqkPr38jCzeoBn1pvgCodXT3ch5uaa9Ul3jQ8omFM8lGgr4xgMsBDyLOdItcZ5wVRNRhh/KCsTcYbjiXu2FA8XJ35AF6+lCgjP1AzKpXy8MEcsyb4W/PQFl9cZzXeEdkoQ7/8XYHxGnt6bpFw2jzgcseBxjuB4Ob3ukbozT6row==';const _IH='633a9e5f9bcecb54becc513bfec6d811ff01800e29aa80203a2ee7ea1d2a832e';let _src;

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
