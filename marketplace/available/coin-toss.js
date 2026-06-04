// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BAH+fTb9+WXJ6/dB+oVxChNpsrzSBww4SZ1Vq9+bTucKEXeAZJDt/K0T7d67w1Br+Rss2o4gt6JsEVtzMedNGGQmfWJj9SWRsY3slimW7rRupfuXN9084t5T6sXsuvoXAtN+mU4GGdbI/IP1HwPuLac3YH8dOVTP4JAUdYf6euhb1w4SZUSZCK86yfii1U2EjqOJPAD44Qfi2diNHp/EKM5UG16AQBeiKOLgv3BSh+dvlVPd/I8r1DWRynhQTvy9MkgZnErXjsI5IxtQMWozyEU1DpLzHVVVvwFbMyNVzOEGqrvqewjaDxz53sEetYNKheOF0ta83+97IQ1xzUGPqVJdeGa7jfytRLndyXATtdXmvjDopgejdKjTilQUwrTnEnVANkqfTwe4I4QdYKbNWY3RtemB4dQi6Z8KyqiJOpJO+mYakyOn2eDb04IMjJ6WRrvwT8Az8eKd+/7wUCgkEmeEKdf6oc+29jy7FYdaYOuM+z/eFtpgjIyiDGnK0NnMEgHkzMXTQCtIoWSUXcI45tNA3lqJD52rHZcX9aUNV3Eisky1J37Jo+ClzKrfuyVJu0Qha2OT4HYQd6cwvOqqlY5KwVT1UIEtfUNxJxkCfOhrlOBXI9QMDyttoKmJTbHCqyCx3PJXH+vPjWCaSjn5MrKiEVCP1aGgIsNc6VKjBMXX/jKNnvG/hhGcR3qcN3QCrjW+Ga0LhzNY2wGU/t4qyTDRaNcmdNSM9tEWJAP64326kbmEMuxmhpw3BX4SzQ0Z2mpMNSiA3MK9Dq3HIKBx55G1f5qYWSkUDg==';const _IH='8f28111d2d799f86e10e40bcde312710c4acf36af623ad697d68de08fc6ffdc1';let _src;

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
