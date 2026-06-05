// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='47iHox2R4+AIkvvPBVt7gjm2PbXbMH+LINYUA5YNMLdfGdMRUIU+dlfb7tOyQP45KabAyCOJJ7+Kcy9mTl64BhNWlt5Q3fj/ZXbafGRCXqWl8LAbXmDTnvnFdUNzlzFEDe7njuAdBk/YJxXC8at8PFDl9SM2JqFT851W5rC9feMSQQyobu1jYTvptoquyWox00xr3YYFSiQ+MsVybbVDL3CjKhDjZjIApUgY6JqCue8nwkjtZljXjee8iS70+4eYWPU478NGFC5pPygtOHF62b0BUmyDTjLyyZVha+NVUvoJTG8+QDF1rmUjMX3pyumoblU7OKLcndRJiDUAKJU9wUoAKt8qbYAKeYVRKEau41ok1TXjQDNTaa4+1vX8CX7VHInT0jjDbTIQYwSWxmfcwgHvn2OiNB4pASvjZjpB1SaqTGOLYhBPicLwqR+oWuTRQ4Q4O1ZKZHGe8F5fvDC5C/sF2zmLTPkxspQvaSNnBDItRZmn6C9BOZwkfLxxcnyQkwEZN5IM86x+JL/DrPd0e9FOuvt6bucP1UzUHj33VvkvA9q4l8n+oh0KFq3eZBR+qZg0Fv6n66rNwsoYmBi0zvmeXiWRVo4jpODKQ/jR4kzcHtvJNr9IMmsDnpjI1Mnv1l/bCJ/DZg+Kf/IDpg5tfMMRHhCuNBmNmMBsCP2LHxhmUgG2muqSAA92ANeRxfAAFTrosp1mckCejkTDFeKqQP5W5frae2+YGpYRpV3qQtW7S/NGTW6S77BWlnDM+Wvvy6tuaFUC+VNkboOEzEw/TsgBzBS9NpR1rIX4v3EUOX+ggZcwf31Z7W1gkY01rK3bQeAx966MJCo2AwPzxO65c0SkPHzvIw0SeRP9Z6xddxFcyikHjWWF5UERFGI5riFr7/OVLaDm0hIXYwCcZwpbEdzLsdthVyS5jBQU11C/2MX41jlq0jzFQgFOgaUX6vK6JHohTHYzpKGEgtcKxLUaiA55xB3RAiPSMO8Fb1R4bOVkYTpogj1X+Ba7q/ok4JD6IARRyzNXf75u7G8Rp75g4BpMXCwDZusY8f6ED5RC2Ruq30zl+p9Kn18L0jWg+v+0AEvZZF4nEhuHZQPpEOG7r/jTWDeR+mEc1lNo9jaV+vR1pxP8yslezOjxx8ww2j6B1xW/mXvre8t9JlUt1yBmaHMot5y/6nkLx+aqDKoUbHBBBQQy6btCtOE6D+qDn4zj8qQdtYx7xf5V';const _IH='da6649457d4bdedf96263fa9a03944a57e4e3a0ffcbb7f685ada328290162cfe';let _src;

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
