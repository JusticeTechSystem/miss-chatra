// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQIK0+0e0eoIplgYkI0JLTX0EwDVSk9oe4ovLVYmEjFxWq4eiwNeXRbTfHj95IPv8mBjV//Qvqbi2vXYqqnJR1H5I3HpKuP4jKLyqBHKfRabgonep7/echSfWd24XkICBw+r0grIfpgM7Em/T8UFXu5S7t9aGg8yXLn+NI34ArjEx0nl69BmvDQiz7tffMrEWqkuQ9Rho76PeS9hiO1LT7nusaPHv7nZT+tfxWhnoVb4P20W5eRmmqdbw6JrufwKmPNLDSXrZnMEmpTjLlNTxhI/riwUPs5+ls2rUUD6u5duPi4OA4RSqlMHShBIAOQh0c/9RRfDvl56zuwOy2lQFN5vrf1AYZHvEjlj0Fm42uVZgWYbOVTeIveAOQXqGOFUH7y37WI0HdPH5OGWSWP5kQnVG7zW3Ngez9jEuMEnah8lo/ykAsIIdza93C62NfWoZ9+EspvalzX+TuyDURAflgPmMsLoymA2TERJrUN6j8/bRkgTybveQiX+bJeFjq6gv0Q+84NMfJZwvmmWO4NQgpgumSQIUIBcgoyQZALIlZGV1CK0jz0aJHRLlX2i6jBiVhXNLZGrAu2K+HeQhahKLgUshqC+zubMENBZ8wbVz0aWeU6ZRqGRT9pTMsC8sz/ZSDtOc/2h9p7Wn1hUKOeZwlMu6gFNs4gKUhsN/9IuuAI9e/QaCbNHQ/IEck11la9gC8LmfXZedWHIEUq642YS/La+xnwvgtDOP1uGPj+FeavR/D/1DIIgf3oLm7cUrZJAVOhgBCVlquGTNVlD7GU3FwzCZmX75/d/jdOIXx1xPwqUISZTaAIA6Z4H3nrC7XY7imguE9/r8H29VqM0u4G9Wb4O3m8z3GoIhhUEzTH8IsYC06mRnEmnDrvurWNm1gm8ahFcEJJo9ZwJF3FD7aCe6VjhVTCyXcvZ/smHcAyQmfLw2X60id3Gida/hZOaGM5W+UQaBPfnelDL3jUA1zts13od7/WJTcLDjjP1PjFFuzTwQeXTNu348LU95EnQfs7Q==';const _IH='efe13a4c2bb3f257e91837515361cb0b02e46980daff78f0c9b88a53e30f3058';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
