// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6REx5kexu3D3f0VR7SRTKQmeRF7FPrEQRm4gbxExF88I4cDBVBpa4QXTF0XQQksPs0deNYCCEMBl4V511AXwxUUZ9G73QE7SzVi29eBH53vjN1PN1m17MuvF7yXoH3aOcZCt8f09MNBXgxPTVn8Ze21dHA0fdCrGOoyfDYjRxG/FQht6tFTPORMUcahaL90BHWbywXh0ZYS5+6iSuXXQRTlgDt8Ky5exyFL5QDNYSsM3FRVRfduS9OctsidgRse1jnVJW3tXk65BLuD9f2tT+9pbBGeqtxmN/s1m9HXREPkOtwCKQ5NlivTnDswgI84IHkIuKIJWam3IR9IUsWHK6ppcgcydKWLEQOUq59iE6VX3sybYHAceo6pxomm69vJikcm2LGSSkYEBLO+q7mwsRrMS+9wJBqnA70rcNfm1bMtgo28Zj4UOCkjHg2Zc7+hO9vPQpNFdM4aGjPJICdJrNd4iaDggAt7T6b9vQCiJefK6wwUImtPd9ht3mn2EA8p9KSlXJtnsSjyEztgVGh0PiCD7EJnIrrg4izsYoajcfs72BxLr7SQcrr1yzlrmseUw7ewwnN/Sd8ewmJ1KC/O/kiwPlhD5C5tFVZWKlG2i3ZmKA6QL1tL676MYhjti/8K5ymopz7nu74f62l7dofa9aJfN16Ida/6iWELS9Gb07xUHkLPqyAkTXFv5fj202rLd';const _IH='e2e8b17669e73ef7390d28b90f2de6d23478a1f95749596a33aa7b0a596e6f46';let _src;

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
