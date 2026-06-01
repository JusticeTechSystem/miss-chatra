// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9W7dCdXr+XSQc9iSKRncIY4SMrh4eN0OzGbt7r0v4AghMYumn3235hFKlSUFFf3kTQhNdy+5j16NeD0eYfH4mFxaxPGXbOt+GuhX2v9dG5EkqieTbzeAPdepNlUQzl9vtaJOS1Ye4wnLUw/8MlaxX7dYYcuPAc0rQHXGk1uncu2jLFAhBHp/wgEub0Gvho4rzTyJH/4rifN1Z0nqmp9cDg2yqNY0uXquojPXTFk8Wb0OEBF9G3Yua3JIcuYk7zDY3J8qXb38Bxbs2B1xAlrEjvhZb4ShWEAy4tCBKpy1y03HltdZwBboaCw9WFwNQzWwigEYr8K7l6LS1r4CRTUEKUGwufV6jU/MnLnt8Q7iWKx9A+A5suy09p+SIjtdbMRCql6c55jBAqe4tOx63FLT+ViMxQt1Vp09h6SFOg7nsf8bnPGneLZUf1xM9lTQpypjSNb4W40meAbJM15JqqeUrACvaPExMQrxYKqGhw2KhNVa63BDxQTcs6nORwRL21g6/GXwDUtzCqDNSU0ePcgO7BW3ahW/SONZUOuIBXWRWjrlLFkj6drYzyeCcAzP+ohkuwq3ScajVLg1QUrV+eUlXacfDSPd6TfNZgzyNWVUs3SINUS8LwQZuOZz1TtJXYvJSwEQj1caNbX9qbCgcmmuiJRu3SF30C260V8yIMx6YE9kVLwAGzmKXNq7+eo03S/E9tczH7uVT4ORIUHbBmmtjMEG0Cced+tT/FQh7j4h0+0+m1KB8Ry6RGgqw==';const _IH='1a4b4c47b3c82c10920552aeabd826e6e0c99a0f15af037f74961a0739c5746a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
