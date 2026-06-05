// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vxLhAkksFXC65hSlixmc9EeVQOcegRw9py0jCfft8wJBEmE+oLJG2TDZw7Wav6RazZVJehaWrY2EBztcqPaRHVLZ2fRARdng03QrzYyxC/8+UVwJMDPQdIhsNG4UH9NdPqWXPsqfxVenajsAry31RMpthsODqJvwmS6pB1m/Sn5i0Al0AduGy+8zD3qgNPnCKxMNV4kIuJ5n64w1wTkL7R1KmWygC2WzzWaoPCB0Lo4BAyi2SngFaR6pPdJOZvMhyfQJtHpVYIdZKo+0tSAAkAs7Rtxzf2/h8mBSn0MUXtXCxxPDGBbQQgLx8Eq4wZCuTOeh7NfdIagxJFH0C4nJWcDkaU/tpzAfRGqMaF5F/3k2/ASVC4u086eOA2Kzr4RlTXAzZ9gIfL6UwIgsSeXnGyuDiyOUb9QDxqFI8+HkC3NrYewfEos6r1VsBQlI8vOpF+i6m+zKOpPy+X9k3rQEeQzpvZMCRt5M2hBU9z2i+UmKFbDJuGyBSVEyhfpCkoq76rMGuki3UoH/mKP6i5jJiW33inFjIh3sL3niz7eOPRSmxsBt3PKe7MiOXJ32menUB/AakqYT/TRBpsGcq9JeBJHIrycsKRuvPJlXR8RlXW1cNHfDQx9UJsNcIv+3DFfAeXikO1i4vSc/9qIQdVDC1iulowx5U3I/l8MX/9ZndE2mJlB0cA59jFKxfqmaKmIb167t78gUdvrGncXXXnZwmhBTa29kAoR0Kw==';const _IH='626076a1eba7ad494e6ac4a4532acb2f99ecfcc19a0ef3184be1ae22e89d53d6';let _src;

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
